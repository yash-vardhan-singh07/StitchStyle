import { createContext, useContext, useEffect, useState} from "react";
export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"))
    const [user,setUser]=useState("");
    const [isLoading,setIsLoading]=useState(true);
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState({});


     const setCartData=(data)=>{
        setCart(data);
     }


    const storetokenInLS=(serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    let ili=!!token;
    const LogoutUser=()=>{
     setToken("");
     
     return localStorage.removeItem("token");
    }     

   const authToken=token;
     const userAuthentication= async()=>{
         try {
             setIsLoading(true);
            // console.log("token from user authentication",token);
            const response=await fetch("http://localhost:3000/user/userProfile",{
                method:"GET",
                headers:{
                    Authorization:authToken,
                }
            });

            if(response.ok){
                const data=await response.json();
                
                setUser(data.userData);
                setIsLoading(false);
            }else{
                setIsLoading(false);
            }

         } catch (error) {
            console.log("Error fetching user data",error);
         }
     }




     const getProducts=async()=>{
        try {
            const response =await fetch("http://localhost:3000/user/shop",{method:"GET"});

            if(response.ok){
                const data=await response.json();
                setProducts(data.response);
            }
        } catch (error) {
            console.log(error);
        }
     }

     useEffect(()=>{
        getProducts();
        userAuthentication();
        
     },[]);



    return(
        <AuthContext.Provider value={{ili,storetokenInLS,LogoutUser,user,products,authToken,isLoading,setCartData,cart}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=>{
    return useContext(AuthContext);
}