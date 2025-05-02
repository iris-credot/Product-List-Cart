import React, { useState } from "react";
import ProductList from "../components/productList";
import Cart from "../components/cart";
import OrderModal from "../components/orderModel";
import data from "../datas/data.json";

function MyApp() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

 

  const confirmOrder = () => {
    setIsModalOpen(true);
  };

  const resetOrder = () => {
    setCartItems([]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f5f5] py-10 px-20 flex lg:flex-row flex-col  w-screen gap-10">
      <div className="flex items-start flex-col lg:w-[70%] h-full w-full pb-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 ">Desserts</h1>
      <ProductList products={data} addToCart={addToCart} />
      </div>
      <div className="lg:w-[30%]  ">
      <Cart
        items={cartItems}
        removeFromCart={removeFromCart}
        confirmOrder={confirmOrder}
        resetOrder={resetOrder}
      />
      {isModalOpen && <OrderModal items={cartItems} resetOrder={resetOrder} />}
      </div>
    </div>
  );
}

export default MyApp;
