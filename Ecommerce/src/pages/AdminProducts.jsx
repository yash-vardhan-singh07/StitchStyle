import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminProducts=()=>{
    const {authToken}=useAuth();
    const [product,setProduct]=useState([]);

    const getProducts=async()=>{
        try {
            const response =await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/shop`,
                {method:"GET"}
            );

            if(response.ok){
                const data=await response.json();
                setProduct(data.response);
            }
        } catch (error) {
            console.log(error);
        }
     }

    const deleteProduct=async (id)=>{
        
        const response =await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/product/${id}`,{
          method:"DELETE",
          headers:{
             Authorization:authToken,
          },
      })
          
   
      if(response.ok){
        alert("Product deleted ")
        getProducts();
      }else{
        console.log("some error occured in delete");
        
      }
    }
    const addProduct=async (id)=>{
        
        const response =await fetch(`${process.env.REACT_APP_API_URL || "http://localhost:5000"}/user/product/${id}`,{
          method:"",
          headers:{
             Authorization:authToken,
          },
      })
          
   
      if(response.ok){
        alert("Product deleted ")
        getProducts();
      }else{
        console.log("some error occured in delete");
        
      }
    }
     
    useEffect(()=>{
        getProducts();
    },[]);

    return ( <>
           <section className="admin-users-section">
    <div className="container">
       <h1>Admin Products Data</h1>
    </div>
    <div className="container  admin-users">

      <table>
         <thead>
          <tr>
             <th>Name</th>
             <th>Available</th>
             <th>Price</th>
             <th>Rating</th>
             <th>Discount</th>
             <th>Details</th>
             <th>Description</th>
             <th>Img Path</th>
          </tr>
         </thead>
         <tbody>
               {product.map((curProductData,index)=>{
                return <tr key={index}>
                   <td>{curProductData.name}</td>
                   <td>{curProductData.available}</td>
                   <td>{curProductData.price}</td>
                   <td>{curProductData.ratingsAverage}</td>
                   <td>{curProductData.discount}</td>
                   <td>{curProductData.details}</td>
                   <td>{curProductData.description}</td>
                   <td>{curProductData.img}</td>
                   <td>
                      <button className="button"onClick={()=>deleteProduct(curProductData._id)}>Delete</button>
                   </td>
                   <td><Link to={`/admin/product/add`}>Add</Link></td>
                </tr> 
               })}
         </tbody>
      </table>

     
     </div>
     </section>
    </>
    )
}

