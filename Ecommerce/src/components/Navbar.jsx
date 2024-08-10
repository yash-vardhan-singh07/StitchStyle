import { NavLink } from "react-router-dom";
import "./Style.css"
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
  const navigate=useNavigate();
  const{ili,user,isLoading}=useAuth();
  


  const handleCart=async()=>{
    if(isLoading){
      return <h1>Loading...</h1>
    }
    else{
      const uid=user._id;
      return navigate(`/cart/${uid}`);
     }
    }
    return(
    <>
      <header>
      

        <div>

           <ul id="navbar">
           <a href="/"><img src="img/logo.jpg" class="logo" alt="" height="74px"/></a>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/shop">Shop</NavLink></li>
             <li><NavLink to="/blog">Blog</NavLink></li>
             <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
             {ili?   <li><NavLink to="/logout">Log Out</NavLink></li> : <> <li><NavLink to="/login">Log In</NavLink></li>
              <li><NavLink to="/signup">SignUp</NavLink></li></>}
            
            
             <li id="lg-bag"> <img src="img/cart.png"  onClick={handleCart}alt=""/></li>
             <NavLink href="#" id="close"><strong>X</strong></NavLink>
       
          </ul>
        </div>
      </header>
    </>
    )
}