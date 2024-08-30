import { useState } from "react";
import { useAuth } from "../store/auth";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cart=()=>{
    const{authToken,isLoading,cart}=useAuth();
    const[cartData,setCartData]=useState([]);
    
    
    
            
            
            
            
             
            const getSingProduct=async ()=>{

                        try {
                            for(var i=0;i<cart.productId.length;i++){
                            
                            const response=await fetch(`http://localhost:3000/user/product/${cart.productId[i]}`,
                                {
                                    method:"GET",
                                    headers:{
                                        Authorization:authToken,
                                       
                                    }
                                }
                            )
                           const data=await response.json();    
                           setCartData(old=>[...old, data]);
                            }
                      } catch (error) {
                        console.log(error);
                        
                      }
                 }
               

   
    useEffect(()=>{
        getSingProduct();
   },[])

       
    
       

    if(isLoading){
        return <h1>Loading...</h1>
    }
       
  
    return (
        <>
         <section id="page-header" class="about-header">
        <h2>#buy_fast</h2>

        <p>LEAVE A MESSAGE, We love to hear from you!.</p>
    </section>

    <section id="cart" class="section-p1" >
        {
            cartData.map((curEle,index)=>{
                 return(
                    <table width="100%" key={index}>
                    <thead>
                        <tr> 
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href=""><i class="fas fa-times-circle"></i></a></td>
                            <td><img src={`/${curEle.img}`} alt=""/></td>
                            <td>{curEle.details}</td>
                            <td>{curEle.price}</td>
                        </tr>
                    </tbody>
                </table>
                 )
            })
        }
       
    </section>
    
    <section id="cart-add" class="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon"/>
                <button class="normal">Apply</button>
            </div>
        </div>
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
           <tbody>
            <tr>
                <td>Cart Subtotal</td>
                <td>$118.19</td>
            </tr>
            <tr>
                <td>Shopping</td>
                <td>Free</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>$354.57</strong></td>
            </tr>
           </tbody>
          </table>
          <button class="normal">Proceed to Checkout</button>
        </div>
    </section> 

        </ >
    )
}