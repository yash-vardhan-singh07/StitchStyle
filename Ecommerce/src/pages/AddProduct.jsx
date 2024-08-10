import React, { useEffect, useState } from 'react';
import "../components/Style.css"
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const  AddProduct=  ()=> {

  const {authToken}=useAuth();
  const [data,setData]=useState({
    name:"",
    available:"",
    price:"",
    ratingsAverage:"",
    discount:"",
    details:"",
    description:"",
    img:"",
  });
  

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
       const response=await fetch(`http://localhost:3000/user/product`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Authorization:authToken,
            },
          body:JSON.stringify(data),
        }
       
      )
      if(response.ok){
        alert("Product added successfully")
      }
      else{
        alert("not added");
      }
         } catch (error) {
             console.log(error);
         }
}


  return (
     <>
    <section id="signup">
      <h1>Add Product</h1>
    <form id="signup-form" method="POST" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={data.name}name="name" onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Details:
        <input type="text" value={data.details} name ="details"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Description:
        <input type="text" value={data.description} name ="description"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Image path:
        <input type="text" value={data.img} name ="img"onChange={handleInput} required />
      </label>
      <br />
      <label>
        Category:
        <input type="text" value={data.category} name ="category"onChange={handleInput} required />
      </label>
      <br />
      <label>
        Available:
        <input type="number" value={data.available} name ="available"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Price:
        <input type="number" value={data.price} name ="price"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        RatingsAverage:
        <input type="number" value={data.ratingsAverage} name ="ratingsAverage"onChange={handleInput} required/>
      </label>
      <br />
      <label>
        Discount:
        <input type="number" value={data.discount} name ="discount"onChange={handleInput} required/>
      </label>
      <br />
      <br />
      <button type="submit">Add</button>
    </form>
    </section>
    
     
     </>

  );
}