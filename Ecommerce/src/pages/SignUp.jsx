import React, { useState } from 'react';
import "../components/Style.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const SignUp=()=> {

  
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const navigate=useNavigate();

  const {storetokenInLS}=useAuth();

   const handleInput=(e)=>{
    let name =e.target.name;
    let value=e.target.value;
   
      setUser({
        ...user,
        [name]:value,
      });
    };
    
  
  
     const handleSubmit = async e => {
       e.preventDefault();
       // Call API or perform registration logic here
       console.log(user);
       const response= await fetch('http://localhost:3000/user/signup',{
          method:"POST",
           headers:{
            'Content-Type':"application/json"
           },
          body:JSON.stringify(user),
       })


       const res_data=await response.json();
       console.log("res from server",res_data.extraDetails)
       if(response.ok){

        
        storetokenInLS(res_data);
          setUser({
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
       })
          navigate("/");
       }else{
        alert(res_data.extraDetails? res_data.extraDetails:res_data.message);
       }

    console.log(response);
  };



  return (
     <>
    <section id="signup">
      <h1>Sign Up</h1>
    <form id="signup-form" method="POST" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={user.name}name="name" onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={user.email} name ="email"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={user.password} name="password"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={user.confirmPassword}name="confirmPassword" onChange={handleInput}required />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
    </section>
    
     </>

  );
}