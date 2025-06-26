import React, { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactForm={
    name:"",
    email:"",
    subject:"",
    message:""
}

export const Contact=()=>{
    const[contact,setContact]=useState(defaultContactForm);

    const[userdata,setuserData]=useState(true);

    const {user}=useAuth();
    if(userdata && user){
        setContact({
            name:user.name,
            email:user.email,
            message:"",
        });
        setuserData(false);
    }

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        setContact({
            ...contact,
            [name]:value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Contact form data:", contact);
      
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/user/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
      
          // Safely parse response JSON
          let data = {};
          try {
            data = await response.json();
          } catch (err) {
            console.warn("Empty or invalid JSON from server");
          }
      
          if (response.ok) {
            setContact({
              name: "",
              email: "",
              message: "",
            });
      
            console.log("Server response:", data);
            alert("Message sent successfully ✅");
          } else {
            const msg = data?.message || "Failed to send message";
            alert(msg);
          }
      
        } catch (error) {
          console.error("Contact submission error:", error);
          alert("Network error. Please try again.");
        }
      };
      


   return( <>
         <section id="contact-header">
           <h2>#let's_talks</h2>

             <p>LEAVE A MESSAGE, We love to hear from you!.</p>
         </section>

        <section id="contact-details" class="section-p1">
            <div class="details">
               <span>GET IN TOUCH</span>
               <h2>Visit one of our agency locations or contact us today</h2>
               <h3>Head Office</h3>
               <div>
                <li>
                    <i class="fas fa-map"></i>
                    <p>Som Bazaar Road, Jeewan Park, New Delhi-110059 </p>
                </li>
                <li>
                    <i class="fas fa-envelope"></i>
                    <p>singhyashvardhan34@gmail.com </p>
                </li>
              <li>
                 <i class="fas fa-phone-alt"></i>
                 <p>+916394138208 / +918807794136</p>
              </li>
        <li>
            <i class="fas fa-clock"></i>
            <p>Monday to Saturday - 10:00AM-8:00PM</p>
        </li>
       </div>
    </div>
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.90585294994568!2d77.07098544725022!3d28.614963541501325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04cc2a77bad7%3A0xb20d943d4f4c3854!2s94-B%2C%20Block%20A%2C%20Jivan%20Park%2C%20Bindapur%2C%20Delhi%2C%20110058!5e0!3m2!1sen!2sin!4v1719764833275!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
  </section>

   <section id="form-details">
    <form action="#" onSubmit={handleSubmit}>
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" onChange={handleInput} autoComplete="off" value={contact.name}name="name"placeholder="Your Name"/>
        <input type="email" onChange={handleInput} autoComplete="off" value={contact.email}name ="email" placeholder="E-mail"/>
        <input type="text"onChange={handleInput} autoComplete="off" value={contact.subject}name="subject" placeholder="Subject"/>
        <textarea name="message" autoComplete="off" defaultValue={contact.message} onChange={handleInput} id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button class="normal">Submit</button>
    </form>
    <div class="people">
        <div><img src="img/features/ceo.jpg" alt=""/>
            <p><span>John Walker</span>Senior Marketing Manager <br/> Phone-+917544333333 <br/>
            Email-walkerjohn@gmail.com</p>
        </div>
        <div><img src="img/features/md.jpg" alt=""/>
            <p><span>Laura Smith</span>Senior Marketing Manager <br/> Phone-+9175453333333 <br/>
            Email-larasmith34@gmail.com</p>
        </div>
        <div><img src="img/features/md2.jpg" alt=""/>
            <p><span>Abhishek Singh</span>Senior Managing Director <br/> Phone-+917546333333 <br/>
            Email-sharmaAbhishek07@gmail.com</p>
        </div>
    </div>
  </section>


   </>
)
};