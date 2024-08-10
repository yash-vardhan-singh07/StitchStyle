import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
export const Home=()=>{

      const{authToken,user,setCartData,products}=useAuth();

    const navigate=useNavigate();

      
    const getCart= async()=>{
            
        try {
           const response=await fetch(`http://localhost:3000/user/cart/${user._id}`,
               {
                   method:"GET",
                   headers:{
                       Authorization:authToken,
                      
                   }
               }
           )
           if(response.ok){
            const data=await response.json(); 
            console.log(data);
             
            setCartData(data);  
     
           }
            
          } catch (error) {
           console.log(error);
           
          }
       }
     useEffect(()=>{
         getCart();
     },[])

    return(
        <>

    <section id="hero">
        <h4>Trade-In-Offer</h4>
        <h2>Super value deals here</h2>
        <h1>On all products</h1>
        <p>Save more with coupons upto 70% off</p>
            <button class="btn"  onClick={() => navigate(`/shop`)}>Shop Now</button>
    </section>

    <section id="feature" class="section-p1">
        <div class="febox">
            <img src="img/features/f1 (1).png" alt=""/>
            <h5>Free Shipping</h5>
        </div>
        <div class="febox">
            <img src="img/features/fea.png" alt=""/>
            <h5>Online Order</h5>
        </div>
        <div class="febox">
            <img src="img/features/f3.jpg" alt=""/>
            <h5>Save Money</h5>
        </div>
        <div class="febox">
            <img src="img/features/f4.jpg" alt=""/>
            <h5>Promotions</h5>
        </div>
        <div class="febox">
            <img src="img/features/f5.jpeg" alt=""/>
            <h5>Happy Sell</h5>
        </div>
        <div class="febox">
            <img src="img/features/f6.png" alt=""/>
            <h5>Support</h5>
        </div>
    </section>

    <section id="product1" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer collections new modern design</p>
    <div class="pro-container">

        {
    products.map((curEle,index)=>{
            const{name,price,details,img,_id,discount}=curEle;
            
            return(
            <div class="pro" key={index}   onClick={() => navigate(`/sprod/${_id}`)}>
            <img src={img} class="image"alt=""/>
            <div class="des">
                <span>{name}</span>
                <h5>{details}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${price}</h4>
                <h4>Discount {discount}%</h4>
            </div>
            <a href="#" class="cart"><img src="img/cart.png" height="25px"alt=""/></a>
            
        </div>
            )
        })
}

     </div>
    </section>
     <section id="sm-banner" class="section-p1">
            <div class="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 1 get1 free</h2>
                <span>The best classic dress is on sale at TrendLend</span>
                <button class="white">Learn More</button>
            </div>
            <div class="banner-box banner-box2">
                <h4>spring/summer</h4>
                <h2>upcoming season</h2>
                <span>The best classic dress is on sale at TrendLend</span>
                <button class="white">Collections</button>
            </div>
        </section>

     <section id="banner3">
            <div class="banner-box">
                <h2>SEASON SALE</h2>
                <h3>Winter Collection -50% OFF</h3>
            </div>
            <div class="banner-box">
                <h2>NEW FOOTWEAR COLLECTION</h2>
                <h3>Spring / Summer 2023</h3>
            </div>
            <div class="banner-box">
                <h2>T-SHIRTS</h2>
                <h3>New Trendy Prints</h3>
            </div>
        </section>
        
   
        </>
    )
};