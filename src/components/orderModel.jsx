import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function OrderModal({items, resetOrder }) {
  

  const total = items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center max-h-screen">
      <div className="bg-white rounded-lg shadow-md w-full md:max-w-lg md:h-[900px] h-full md:mt-0 mt-60 p-10">
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-500 bg-white text-5xl mb-6" />
        <h1 className="text-4xl font-extrabold mb-3 text-black">Order Confirmed</h1>
        <p className="mb-6 text-[#87635A]">We hope you enjoy your food!</p>

        <div className="bg-[#f6f5f5] p-6 rounded-lg">
          <div className="max-h-[400px] overflow-y-auto">
            <ul className="space-y-2 mb-4">
              {items.map((item) => {
                const itemTotal = Number(item.qty) * Number(item.price);
                return (
                  <li key={item.id} className="flex w-full gap-3 border-b-[1px] border-b-[#C73B0F] p-2">
                    <div className="w-[25%]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <p className="font-semibold">{item.name}</p>
                      <div className="flex gap-6 mb-3">
                        <p className="text-[#C73B0F] font-semibold">{item.qty}x</p>
                        <p className="text-[#AD8A85]">@${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <p className="text-[#87635A] font-semibold text-right flex justify-center items-center pt-3">
                        ${itemTotal.toFixed(2)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-row items-start w-full pt-4">
            <div className="w-1/2 text-black">Order Total</div>
            <div className="w-1/2 text-right text-base sm:text-xl md:text-2xl font-bold">
              ${total.toFixed(2)}
            </div>
          </div>
        </div>

        <button
          onClick={resetOrder}
          className="mt-8 w-full py-3 bg-[#C73B0F] text-white rounded-full text-md sm:text-lg md:text-2xl"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
