import React, { useState } from 'react';

export const Upload=()=> {

  
  const [user,setUser]=useState({
    name:"",
    details:"",
    url:"",
  });

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
       const response= await fetch('http://localhost:3000/user/setData',{
          method:"POST",
           headers:{
            'Content-Type':"application/json"
           },
          body:JSON.stringify(user),
       })


       const res_data=await response.json();
       console.log("res from server",res_data)
  };



  return (
     <>
    <section id="signup">
      <h1>Upload Details</h1>
    <form className="signup-form" id='signup' method="POST" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={user.name}name="name" onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Details:
        <input type="text" value={user.details} name ="details"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Url:
        <input type="text" value={user.url} name="url"onChange={handleInput} required/>
      </label>
      <br />
      <button type="submit">Upload</button>
    </form>
    </section>
    
     </>

  );
}