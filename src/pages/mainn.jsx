import React  from "react";
import ProductList from "../components/productList";
import Cart from "../components/cart";
import OrderModal from "../components/orderModel";
import data from "../datas/data.json";
import { useCart } from "../components/cartContext";
function MyApp() {
  
const {cartItems,isModalOpen}=useCart();
 

  return (
    <div className="min-h-screen bg-[#f6f5f5] py-10 px-20 flex lg:flex-row flex-col  w-screen gap-10">
      <div className="flex items-start flex-col lg:w-[70%] h-full w-full pb-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 ">Desserts</h1>
      <ProductList products={data}  />
      </div>
      <div className="lg:w-[30%]  ">
      <Cart
        items={cartItems}
      />
      {isModalOpen && <OrderModal items={cartItems} />}
      </div>
    </div>
  );
}

export default MyApp;
