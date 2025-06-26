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
      
        try {
            console.log("API_URL is:", process.env.REACT_APP_API_URL);
          const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
      
          if (response.ok) {
            const res_data = await response.json();
            storetokenInLS(res_data);
      
            setUser({
              email: "",
              password: "",
            });
      
            console.log("Login Successful");
            navigate("/");
          } else {
            toast("Invalid Credentials");
          }
        } catch (error) {
          console.log("Login error:", error.message);
          toast("Server error. Try again later.");
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