"use client"
import { useReducer } from 'react';
import { useCart } from '@/app/contexts/CartContext';

function Quantity({  border, product }) {
  const {cart, dispatch} = useCart()
  const handleIncrease = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product.id });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product.id});
  };

  return (
    <div className={`flex justify-center items-center text-center`}>
      <button
        type="button"
        className={`${border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"} hover:opacity-80  bg-black text-white h-6 text-center rounded-md mx-auto  focus:outline-none text-lg flex items-center justify-center`}
        onClick={handleDecrease}
      >
        -
      </button>
      <p
        className={`text-gray-500 font-semibold px-5 p-1 text-lg ${
          border === "true" ? "border text-sm" : " text-md"
        }`}
      >
   {product.quantity}

      </p>
      <button
        type="button"
        className={`${border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"} hover:opacity-80  bg-black text-white h-6 text-center rounded-md mx-auto  focus:outline-none text-lg flex items-center justify-center`}
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;

