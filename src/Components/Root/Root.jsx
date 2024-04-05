import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "../Footer/Footer";



const Root = () => {
    useEffect(()=>{
        Aos.init();  
    },[])
    return (
        <div className=" max-w-7xl mx-auto" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        
        </div>
    );
};

export default Root; 