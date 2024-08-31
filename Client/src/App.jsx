import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home} from "./pages/Home"; 
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footerr } from './components/Footer';
import { Upload } from './pages/Upload';
const App=()=>{
    return(
      
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/setData" element={<Upload/>}/>
        </Routes>
        <Footerr/>
      </BrowserRouter>
    );
};

export default App;
