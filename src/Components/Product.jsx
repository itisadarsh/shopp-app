

import {toast} from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {add,remove} from "../Redux/Slices/CartSlice";

const Product=({data})=>{

    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state);
   
   

    function handleRemove(){
      
        dispatch(remove(data.id));
        toast.error("Item Removed");
    
    }
    function handleAdd(){
        
        dispatch(add(data));
        toast.success("Item Added");
    }

    
    return(
        <div className="product-item  flex flex-col min-w-* gap-3  justify-evenly text-center rounded-lg border p-4 items-center mx-auto bg-[#12020204] mt-10 hover:scale-105 transition-all duration-200 ease-in hover:bg-white hover:shadow-2xl" >
       
            <div className=" line-clamp-1 font-bold  ">{data.title}</div>
            <div className=" text-xs font-thin">{data.description.split(" ").slice(0,10).join(" ")+"...."}</div>
            
            <div className="w-[180px]"><img src={data.image} alt="" className="w-[80%] h-full" /></div>
           <div className="flex justify-around w-full" > <div className="font-bold text-green-400">${data.price}</div>
                {
                    cart.some((p)=>p.id===data.id)?<button onClick={handleRemove} className="font-semibold border-2 p-1 px-3 rounded-full  outline hover:bg-black hover:text-white transition-all duration-200 ease-in">Remove Item </button>:
                    <button onClick={handleAdd} className=" border-2 p-1 rounded-full font-semibold outline px-3  hover:bg-black hover:text-white">Add to Cart</button>
                }
          </div>

        </div>
    );

}
export default Product;