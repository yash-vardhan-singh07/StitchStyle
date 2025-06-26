import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";

export const AdminContacts=()=>{

    const[contactData,setContactData]=useState([]);
    const {authToken}=useAuth();
    const getContacts= async()=>{
        try {
            const response=await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/admin/contact`,{
                method:"GET",
                headers:{
                    Authorization:authToken,
                }
            })

            const data=await response.json();
            if(response.ok){
                setContactData(data);
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteContact=async (id)=>{
        const response =await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/admin/contact/${id}`,{
          method:"DELETE",
          headers:{
             Authorization:authToken,
          },
      })
      if(response.ok){
        alert("Contact deleted ")
        getContacts();
      }else{
        console.log("some error occured in delete");
        
      }
    }
     
    useEffect(()=>{
        getContacts();
    },[]);

    return ( <>
           <section className="admin-users-section">
    <div className="container">
       <h1>Admin Contacs Data</h1>
    </div>
    <div className="container  admin-users">

      <table>
         <thead>
          <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Subject</th>
             <th>Message</th>
          </tr>
         </thead>
         <tbody>
               {contactData.map((curContactData,index)=>{
                return <tr key={index}>
                   <td>{curContactData.name}</td>
                   <td>{curContactData.email}</td>
                   <td>{curContactData.subject}</td>
                   <td>{curContactData.message}</td>
                   <td>
                      <button className="button"onClick={()=>deleteContact(curContactData._id)}>Delete</button>
                   </td>
                </tr> 
               })}
         </tbody>
      </table>

     
     </div>
     </section>
    </>
    )
}

