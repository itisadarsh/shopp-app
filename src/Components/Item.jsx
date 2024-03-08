
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {remove} from "../Redux/Slices/CartSlice";

const Item=({data})=>{

    const dispatch=useDispatch();

    function removeFromCart(){

        dispatch(remove(data.id));
    }
    return(<div className="flex gap-2 h-auto">
        <img src={data.image}  className="w-[35%] h-[35%]" />
        <div className="flex flex-col gap-4 justify-evenly">
            <p className="font-bold  line-clamp-2">{data.title}</p>
            <p>{data.description.split(" ").slice(1,20).join(" ")+"..."}</p>
            <div>
                <div>{data.price}</div>
              <button onClick={removeFromCart} className=" rounded-xl bg-red-200 p-2">  <RiDeleteBin7Fill color="red"/></button>
            </div>
        </div>
    </div>)
}
export default Item;