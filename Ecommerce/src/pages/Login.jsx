import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login=()=>{

    const[user,setUser]=useState({
        username:"",
        password:"",
    });

    const navigate=useNavigate();

    const {storetokenInLS}=useAuth();

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
       
        setUser({
            ...user,
            [name]:value,

        })
        console.log(user);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      
        try {
          console.log("API_URL is:", API_URL);
          console.log("Submitting user:", user);
      
          const response = await fetch(`${API_URL}/user/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
      
          // Safely parse JSON (may be empty if error)
          let res_data = {};
          try {
            res_data = await response.json();
          } catch (err) {
            console.warn("Invalid or empty JSON in response");
          }
      
          if (response.ok) {
            storetokenInLS(res_data);
      
            setUser({
              email: "",
              password: "",
            });
      
            console.log("Login Successful");
            navigate("/");
          } else {
            const errorMsg = res_data?.message || "Invalid Credentials";
            toast(errorMsg);
          }
      
        } catch (error) {
          console.error("Login error:", error.message);
          toast("Server error. Please try again later.");
        }
      };
      
      

   return(
           <>

         <section id="signup">
               <h1>Login</h1>
	      <form id="signup-form" method="post" onSubmit={handleSubmit}>
		    <label for="email">Email:</label>
		    <input type="email" id="email" name="email" value={user.email} onChange={handleInput} required/>
		    <label for="password">Password:</label>
		    <input type="password" id="password" name="password" value={user.password} onChange={handleInput} required/>
		    <button type="submit" method="post">Signup</button>
      
	      </form>
            <p>Don't have an account? <a href="/signup">Login In</a></p>  
         </section>


          </>
           
        )
}