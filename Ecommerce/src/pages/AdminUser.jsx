import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import { Link, Navigate } from "react-router-dom";

export const AdminUsers=()=>{

   
    const[users,setUsers]=useState([]);

   const{authToken,user}=useAuth();
    const getAllUsers= async()=>{
       try {
          const response =await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/admin/user`,{
            method:"GET",
            headers:{
               Authorization:authToken,
            },
            
          })
            const data=await response.json();
            setUsers(data);
            

          
       } catch (error) {
          console.log(error);
       }
    }

    const deleteUser=async (id)=>{
      const response =await fetch(`http://localhost:3000/user/${id}`,{
        method:"DELETE",
        headers:{
           Authorization:authToken,
        },
    })

    const data=await response.json();
    console.log("users after delete",data);

    if(response.ok){
      getAllUsers();
    }
   }
   
    

    useEffect(()=>{
        getAllUsers();
    },[]);
    return (
    <>

    <section className="admin-users-section">
      <div className="container">
         <h1>Admin Users Data</h1>
      </div>
      <div className="container  admin-users">

        <table>
           <thead>
            <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Role</th>
               <th>Update</th>
               <th>Delete</th>
            </tr>
           </thead>
           <tbody>
              {users.map((curUser,index)=>{
                  return <tr key={index}>
                     <td>{curUser.name}</td>
                     <td>{curUser.email}</td>
                     <td>{curUser.role}</td>
                     <td><Link to={`/admin/user/${curUser._id}`}>Edit</Link></td>
                     <td>
                        <button className="button"onClick={()=>deleteUser(curUser._id)}>Delete</button>
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