import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const  Update=  ()=> {

  
  const [data,setData]=useState({
    name:"",
    email:"",
    role:"",
  });

  const {id}=useParams();
  console.log(id);
  
  const{authToken}=useAuth();
  
  try {
  

    const getSingleUser=async ()=>{
      const response=await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/${id}`,
        {
            method:"GET",
            headers:{
                Authorization:authToken,
            }
        }
    )
    const data=await response.json();
    setData(data);
  }
 



    useEffect(()=>{
       getSingleUser();
    },[]);

} catch (error) {
  console.log(error);
}

   const handleInput=(e)=>{
    let name =e.target.name;
    let value=e.target.value;
   
      setData({
        ...data,
        [name]:value,
      });
    };
    
  
  
     const handleSubmit = async e => {
       e.preventDefault();


       try {     
       // Call API or perform registration logic here
       const response=await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/${id}`,
        {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                Authorization:authToken,
            },
          body:JSON.stringify(data),
        }
       
      )
      if(response.ok){
        alert("Data updated successfully")
      }
      else{
        alert("not updated");
      }
         } catch (error) {
             console.log(error);
         }
}


  return (
     <>
    <section id="signup">
      <h1>Update User Data</h1>
    <form id="signup-form" method="PATCH" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={data.name}name="name" onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={data.email} name ="email"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Role:
        <input type="text" value={data.role} name ="role"onChange={handleInput} required/>
      </label>
      <button type="submit">Update</button>
    </form>
    </section>
    
     </>

  );
}