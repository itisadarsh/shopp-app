import { FaShoppingCart, FaCartPlus  } from "react-icons/fa";   
import logo from "../Images/logo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar=()=>{

    const {cart}= useSelector ((state)=>state);

   return( <div className=" flex w-screen  bg-black">
   <div className=" flex w-screen fixed bg-black ">
    <div className=" h-16 w-[70%] mx-auto flex   justify-between">
    
    

    <NavLink to={"/"} className="relative h-full flex  items-center font-thin text-cyan-300 text-3xl  ">
    <img src={logo} alt="" className=" h-[90%]" />
    <p className="ml-[-6%] underline ">ShopZ</p>
    </NavLink>
   
    

    <div className="flex justify-center items-center gap-3 " >
    
    <NavLink to="/">
    <p className="text-white font-bold text-xl font-sans">Home</p>
    </NavLink>

    <NavLink to="/Cart" className="relative">

    
    {cart.length>0 ?
    <div className=" "><FaShoppingCart color="white"  className="text-2xl mt-4"/>
    (<span className=" p-1 bg-green-600 text-xs w-5 h-5 flex items-center justify-center text-white absolute top-4 left-4 rounded-full  animate-bounce "><span className=" "> {cart.length}</span></span>)
    </div>
   :<FaCartPlus color="white" size={40} />
    }
    
    </NavLink>
    </div>

    </div>
    </div>
    
    </div>);
}

export default NavBar;