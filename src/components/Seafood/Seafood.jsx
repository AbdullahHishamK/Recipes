import axios from "axios";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
const Seafood = () => {
    
        const [products,setproducts] = useState(null)
    
        async function getAllFood (){
          try {
            const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood");
            setproducts(data.meals);
          } catch (error){
            console.log(error);
          }
        }
      
        useEffect(function(){
          getAllFood()
        } , [])
  return (
    <>
        {products ?  <div className="meals mt-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
           {products.map(function( product ){return <>
            <div className="meal text-center hover:shadow-xl group hover:scale-105 duration-300 transition-all bg-white p-12 pb-4 rounded-[35px]">
              <img src={product.strMealThumb} className="w-full group-hover:rotate-[360deg] duration-700 transition-all rounded-full drop-shadow-xl -translate-y-20 shadow-2xl" alt="" />
              <h3 className="font-semibold -mt-12 tracking-wider text-xl text-black">{product.strMeal}</h3>
              <h5 className="flex justify-center items-center gap-2 text-emerald-600">
                {product.strArea}
              </h5>
              <button className="text-white bg-gradient-to-r mt-4 bg-[#21ba75] hover:bg-emerald-600 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300  px-8 py-2 rounded-full">
              <NavLink to={`details/${product.idMeal}`} data-discover="true"> View Recipe</NavLink>
              </button>
              </div> 
          </>})}
        </div> : <div><h1>error</h1></div>}
    </>
  )
}

export default Seafood
