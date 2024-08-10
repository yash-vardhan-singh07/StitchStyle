import { Link } from "react-router-dom"
import "./Style.css"
export const Footerr=()=>{

    const handleNews=(e)=>{
        e.preventDefault();
        alert("Signed up for Newsletters");
    }
    return(

        
        <>


        <section id="newsletter" class="section-m1 section-p1">
            <div class="newstext">
                <h4>Signup for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your E-mail address"/>
                <button class="normal" onClick={handleNews}>Sign Up</button>
            </div>
        </section>


            <footer class="section-p1">
        <div class="col">
              <h4>Contact</h4>
              <p><strong>Address: </strong> A95 Jeewan Park , Uttam Nagar - 110059</p>
              <p><strong>Phone: </strong> +916394138208 / +919368659733</p>
              <p><strong>Hours: </strong> 10:00 - 20:00 Mon-Sat</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="s-icons">
                    <i><img src="img/icons/index.png" alt=""/></i>
                    <i><img src="img/icons/utu" alt=""/></i>
                    <i><img src="img/icons/x" alt=""/></i>
                    <i><img src="img/icons/index (1).png" alt=""/></i>
                </div>
            </div>

        </div>
        <div class="col">
            <h4>About</h4>
            <Link to="#">About Us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
            <Link to="#">Contact Us</Link>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Website</Link>
            <Link to="#">Track My Orders</Link>
            <Link to="#">Help</Link>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <img src="img/icons/footer.jpg" alt=""/>
            <p>Secured Payment Gateways</p>
            <img src="img/icons/pay.jpg" alt=""/>
        </div>

        <div class="cprt">
            <p><img src="img/icons/cprt.png" alt=""/>2023||All Rights Reserved!!</p>
        </div>
       </footer>
        </>
    )
}