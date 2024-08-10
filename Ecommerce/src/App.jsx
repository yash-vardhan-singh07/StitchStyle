import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './pages/Home';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { SignUp } from './pages/SignUp';
import { About } from './pages/About';
import { Footerr } from './components/Footerr';
import { Blog } from './pages/Blog';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/Admin-Layout';
import { AdminUsers } from './pages/AdminUser';
import { AdminContacts } from './pages/AdminContacts';
import { AdminProducts } from './pages/AdminProducts';
import { useParams } from 'react-router-dom';
import{Update} from './pages/Update'
import { AddProduct } from './pages/AddProduct';
import { Sprod } from './pages/Sprod';
const App=()=>{
    return(
      
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/signup" element={<SignUp/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="/blog" element ={<Blog/>}/>
            <Route path="/shop" element ={<Shop/>}/>
            <Route path="/cart/:id" element ={<Cart/>}/>
            <Route path="/logout" element ={<Logout/>}/>
            <Route path="/sprod/:id" element ={<Sprod/>}/>
            <Route path="*" element ={<Error/>}/>
            <Route path="/admin" element={<AdminLayout/>}>
               <Route path="user" element={<AdminUsers/>}></Route>
               <Route path="contact" element={<AdminContacts/>}></Route>
               <Route path="product" element={<AdminProducts/>}></Route>
               <Route path="user/:id" element={<Update/>}></Route>
               <Route path="product/add" element={<AddProduct/>}></Route>
               
            </Route>
         </Routes>
         <Footerr/>
      </BrowserRouter>
    );
};

export default App;
