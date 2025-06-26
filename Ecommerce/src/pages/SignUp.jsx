import React, { useState } from 'react';
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
    
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Submitting user:", user);
    
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        // Parse safely, only if response body is not empty
        let res_data;
        try {
          res_data = await response.json();
        } catch (err) {
          res_data = {}; // fallback if response was empty or not JSON
        }
    
        if (response.ok) {
          console.log("res from server", res_data.extraDetails);
          storetokenInLS(res_data);
    
          setUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
    
          navigate("/");
        } else {
          const msg = res_data?.extraDetails || res_data?.message || "Signup failed";
          alert(msg);
        }
    
        console.log("Full response:", response);
    
      } catch (error) {
        console.error("Network error:", error);
        alert("Network error. Please try again.");
      }
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