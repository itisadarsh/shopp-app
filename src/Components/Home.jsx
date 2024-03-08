import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Product from "./Product";

const Home=()=>{

   const url="https://fakestoreapi.com/products";
    const[loading,setLoading]=useState(true);
    const[posts,setPosts]=useState([]);


   async function fetchData(){
    setLoading(true);

    try{
    const data=await axios.get(url);
        console.log(data);
        setPosts(data);

    }
    catch(err){

    }
    setLoading(false);
        
   }
   useEffect(()=>{
        fetchData();
   },[])

   return(
    <div className="flex w-screen  ">
    {loading?<Spinner/>:
         
         posts.length===0?<div>No Products</div>:
        
      <div className="product flex justify-evenly gap-y-4 p-6 flex-wrap w-screen">{
        posts.data.map(data=>{
          return <Product key={data.id} data={data}/>
        })
      }
      </div>
        
        
    }

    </div>
   );

}

export default Home;