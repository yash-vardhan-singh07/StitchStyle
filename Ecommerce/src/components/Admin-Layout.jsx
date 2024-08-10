import { Navigate, NavLink, Outlet } from "react-router-dom"
import "./stylenav.css"
import "./Style.css"
import { useAuth } from "../store/auth"

export const AdminLayout=()=>{
    const{user,isLoading}=useAuth();
    const role=user.role;
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(role!="admin"){
        return <Navigate to="/"/>;
    }
   
    return<>
      <header>
        <div className="container">
            <nav>
                <ul id="navbar1">
                    <li>
                        <NavLink to="/admin/user">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contact">Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/product">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
      <Outlet/>
    </>
}