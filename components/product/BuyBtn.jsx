"use client"
import { useCart } from "@/app/contexts/CartContext";

function BuyBtn({product}) {
    const { dispatch} = useCart()

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      }; 

    return (
        <div className="mt-10">
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="w-full bg-black border border-transparent rounded-2xl py-4 px-8 flex items-center justify-center text-sm tracking-wider    font-poppins text-white  hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Buy Now
        </button>
      </div>
    )
}

export default BuyBtn
