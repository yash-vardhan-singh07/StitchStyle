import React from "react";
import { useAuth } from "../store/auth";
export const About=()=>{
    const {user}=useAuth();
    return(<>
     <section id="about-header">
        <p>Hi Yash Vardhan Singh</p>
        <h2>#about_us</h2>

        <p>Read more about us</p>
    </section>
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our ecommerce website! We are a team of passionate individuals
        dedicated to providing the best online shopping experience for our customers.
      </p>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to revolutionize the way people shop online by providing a
          seamless, personalized, and enjoyable experience for our customers. We aim
          to be the go-to destination for online shoppers, offering a wide range of
          high-quality products at competitive prices.
        </p>
        <ul>
          <li>
            <i className="fa fa-check" />
            To provide an exceptional customer experience through fast and reliable
            shipping, easy returns, and excellent customer service.
          </li>
          <li>
            <i className="fa fa-check" />
            To offer a curated selection of products that meet the highest standards
            of quality, safety, and sustainability.
          </li>
          <li>
            <i className="fa fa-check" />
            To foster a community of loyal customers who share our values and
            passion for online shopping.
          </li>
          <li>
            <i className="fa fa-check" />
            To continuously innovate and improve our services, staying ahead of the
            curve in ecommerce technology and trends.
          </li>
        </ul>
      </section>
      <section className="our-objectives">
        <h2>Our Objectives</h2>
        <p>
          Our objectives are designed to support our mission and ensure we meet the
          evolving needs of our customers.
        </p>
        <ul>
          <li>
            <i className="fa fa-check" />
            To increase customer satisfaction ratings by 20% within the next 12
            months through improved customer service and support.
          </li>
          <li>
            <i className="fa fa-check" />
            To expand our product offerings by 30% within the next 18 months,
            introducing new categories and brands that meet our quality standards.
          </li>
          <li>
            <i className="fa fa-check" />
            To reduce our carbon footprint by 15% within the next 24 months through
            sustainable packaging, energy-efficient operations, and eco-friendly
            supply chain practices.
          </li>
          <li>
            <i className="fa fa-check" />
            To achieve an average order value increase of 25% within the next 12
            months through targeted marketing campaigns and personalized product
            recommendations.
          </li>
        </ul>
      </section>
      <section className="our-values">
        <h2>Our Values</h2>
        <p>
          Our values guide our decisions and actions, ensuring we stay true to our
          mission and objectives.
        </p>
        <ul>
          <li>
            <i className="fa fa-check" />
            Customer-centricity: We put our customers at the heart of everything we
            do.
          </li>
          <li>
            <i className="fa fa-check" />
            Innovation: We strive to stay ahead of the curve in ecommerce technology
            and trends.
          </li>
          <li>
            <i className="fa fa-check" />
            Sustainability: We prioritize eco-friendly practices and sustainable
            operations.
          </li>
          <li>
            <i className="fa fa-check" />
            Teamwork: We collaborate and support each other to achieve our goals.
          </li>
        </ul>
      </section>
    </div>
    </>)
};