
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { useEffect } from "react";
import {  toast } from 'react-toastify';
export const Sprod=()=>{
    
    const[data,setData]=useState([]);

    const {id}=useParams();
    const{authToken,user}=useAuth();
    console.log(user);
    

    
    let uid=user._id;
    const getSingProduct=async ()=>{

        try {
            
            const response=await fetch(`http://localhost:3000/user/product/${id}`,
                {
                    method:"GET",
                    headers:{
                        Authorization:authToken,
                       
                    }
                }
      )
      
      const data=await response.json();
      setData(data);
    } catch (error) {
        console.log(error.message);
        
    }
 }
 console.log(data);
 

     const handleClick=async ()=>{
        const response=await fetch(`http://localhost:3000/user/sprod/${data._id}`,
            {
                method:"PATCH",
                headers:{
                    Authorization:authToken,
                    ID:uid,
                }
            }
        )
        if(response.ok)
        {
            toast("Item added to cart");
        }
        
     }

     const img = data.img && data.img.substring(0,14);
     
      useEffect(()=>{
        getSingProduct();
      },[]);
     return(
            <>
       <section id="prodetails" class="section-p1">
         <div class="single-pro-img">
            <img src={`/${data.img}`} width="100%" id="mainimg" alt=""/>
            <div class="small-imgs">
                <div class="small">
                    <img src={`/${img}2.jpg`} width="100%" class="small-img" alt=""/>
                </div>
                <div class="small">
                    <img src={`/${img}3.jpg`} width="100%" class="small-img" alt=""/>
                </div>
                <div class="small">
                    <img src={`/${img}4.jpg`} width="100%" class="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>{data.details}</h6>
            <h4>{data.description}</h4>
            <h2>{data.price}</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
                <option>Medium</option>
            </select>
            <button class="normal" onClick={handleClick}>Add To Cart</button>
            <h4>Product details</h4>
            <span>{data.description}</span>
        </div>
    </section>


   
        </>
     )
}