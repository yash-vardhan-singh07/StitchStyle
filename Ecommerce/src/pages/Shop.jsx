import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"



export const Shop=()=>{
const {products}=useAuth();
const navigate=useNavigate();
    return(<>
    
    <section id="page-header">
        <h2>#stayhome</h2>
        
        <p>Save more with coupons upto 70% off</p>
    </section>

   

    <section id="product1" class="section-p1">
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
                <h4>{price}</h4>
                <h4>Discount {discount}</h4>
            </div>
            <a href="#" class="cart"><img src="img/cart.png" height="25px"alt=""/></a>
            
        </div>
            )
        })
    
    }
     </div>
    
        </section>

        <section id="pagination" class="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">Next</a>
        </section>

    </>
    )
}