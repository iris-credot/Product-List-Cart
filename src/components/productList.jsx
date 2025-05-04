import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./cartContext";


export default function ProductList({ products }) {
  const {addToCart}=useCart();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full ">
      {products.map((product) => (
        <div key={product.id} className="bg-transparent mt-4">
          <div className="relative ">
          <img src={product.image} alt={product.name} className="w-full h-60 rounded-xl object-cover " />
          <div className="absolute inset-x-0 top-52 flex justify-center">
          <button
            className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 text-sm sm:text-base md:text-lg flex items-center gap-2 bg-white text-black border border-[#C73B0F] rounded-full hover:bg-[#d39988] transition duration-300 ease-in-out "
            onClick={() => addToCart(product)}
          ><FontAwesomeIcon icon={faShoppingCart} className="text-[#C73B0F]"/>

            Add to Cart
          </button>
          </div>
          </div>
        <div className="mt-10"> 
           <h3 className="text-base text-[#AD8A85]">{product.nic}</h3>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-[#C73B0F]">${product.price.toFixed(2)}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
}