import { NavLink } from "react-router-dom"
export const Navbar=()=>{
    return(
    <>
      <header>
        <div>
           <ul id="navbar">
           <a href="/"><img src="img/logo.jpeg" className="logo" alt="" height="74px"/></a>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </header>
    </>
    )
}