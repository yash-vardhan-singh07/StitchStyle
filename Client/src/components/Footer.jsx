import { Link } from "react-router-dom"
export const Footerr=()=>{
    return(

        
        <>

<section id="newsletter" class="section-m1 section-p1">
            <div class="newstext">
                <h4>Signup for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
            </div>
            <div class="form">
                <input type="text" placeholder="Your E-mail address"/>
                <button class="normal">Sign Up</button>
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
       </footer>
        </>
    )
}