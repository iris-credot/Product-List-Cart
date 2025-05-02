import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark  } from "@fortawesome/free-solid-svg-icons";

export default function Cart({ items, removeFromCart, confirmOrder }) {
  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);
  const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);
 

  return (
    <div className=" bg-white p-4 rounded-lg pl-6 ">
      <h2 className="text-xl font-bold mb-4 text-[#C73B0F]">Your Cart ({totalQty})</h2>
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
        <img src="/assets/cakeslice.PNG" alt="" />
        <p className="text-[#87635A] flex items-center justify-center">Your added items will appear here.</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => {
            const itemTotal = Number(item.qty) * Number(item.price);
            return (
              <li key={item.id} className="flex flex-col w-full ">
                <div className="flex border-b-[1px] border-b-[#C73B0F]">
                  <div className="w-[80%] flex flex-col gap-2">
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex gap-3 mb-3">
                      <p className="text-[#C73B0F] font-semibold">
                        {item.qty}x
                      </p>
                      <p className="text-[#AD8A85]">@${item.price}</p>
                      <p className="text-[#87635A] font-semibold">
                        ${itemTotal.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="w-[20%]">
                    <p className="flex justify-center items-center mt-7">
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="text-[#87635A] bg-white"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {items.length > 0 && (
        <div className="mt-4 flex flex-col justify-between ">
          <div className="flex flex-row items-start w-full">
            <div className="w-1/2 text-black">Order Total</div>
            <div className="w-1/2 text-right text-base sm:text-xl md:text-2xl font-bold">${total.toFixed(2)}</div>
          </div>
          <div className="mt-4 bg-[#f6f5f5] flex flex-wrap justify-center items-center gap-1 px-2 py-3 rounded text-xs sm:text-sm md:text-base text-center">This is a&nbsp;<strong>carbon-neutral</strong>&nbsp;delivery.</div>
          <div className="space-x-2">
            <button onClick={confirmOrder} className="mt-8 w-full py-5 bg-[#C73B0F] text-white rounded-full text-md sm:text-lg md:text-2xl">Confirm Order</button>
            
          </div>
        </div>
      )}
    </div>
  );
}
