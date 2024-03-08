import {useSelector} from "react-redux";
import Item from "./Item"
import { NavLink } from "react-router-dom";
import { useEffect ,useState} from "react";

const Cart=()=>{

    const {cart}=useSelector((state)=>state);

    const[totalAmount,setTotalAmount]=useState(0);

    useEffect(()=>{
        console.log(cart);
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])

    return(
        <div className=" w-screen h-[75%]">
            {
                cart.length===0?
                (<div className="h-full top-[50%] gap-2 flex-col w-full flex justify-center items-center">
                    <p className="text-2xl font-bold">Your Cart is Empty</p>
                    <NavLink className=" p-2 h-8 rounded-md flex items-center bg-green-400 text-white hover:bg-green-700" to="/">Shop Now</NavLink>
                </div>):


                <div className="flex -z-10 w-[75%] mx-auto justify-center h-full gap-6 pt-5">
                <div className="flex flex-col mt-20   w-[50%] h-full gap-8 ">
                {
                cart.map(data=>{
                  return <div> <Item key={data.id} data={data}/>
                  <div className="w-full bg-green-600 h-[3px] m-3"></div>
                  </div>
                })
                }
               
               </div>
                <div className="relative mt-[20%] max-w-[50%] w-[60%]">
               <div className="summary flex flex-col justify-between fixed h-5/6  right-[5%] top-[10%]">
                    <div>
                     <p className="text-green-400 font-bold text-lg">YOUR CART</p>
                     <p className="sum-text text-green-600 font-bold text-3xl">SUMMARY</p>
                     <p>Total Items: {cart.length}</p>
                     </div>

                <div className="">
                    <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
                    <button className="bg-green-600 text-center text-sm p-1 w-full rounded-md text-white font-bold">Checkout Now</button>
                </div>
                </div>

               </div>
               
               </div>
            }


        
        </div>
    );
    

}

export default Cart;