"use client"
import { useCart } from "@/app/contexts/CartContext";
import Cartul from "./Cartul";
import Summary from "./Summary";

 

export default function Cart() {
  const {cart, dispatch} = useCart()
   return (
    <div className="">
      <div className="max-w-[1400px] mx-auto pt-8 pb-12 md:py-10  md:px-4  lg:pt-16 lg:pb-20  2xl:py-24   sm:px-6 lg:px-8">
        <h1 className=" font-inter text-2xl px-4 md:px-0     tracking-wide text-black">
     Your Cart 
        </h1>
        <form className="mt-6 md:mt-12">
  <div className=" md:grid grid-cols-12 ">
    <div className="xl:col-span-8 md:col-span-12  ">
      <Cartul cartItem={cart} />
    </div>
    <div className="xl:col-span-4  md:col-span-12 pt-10 xl:pt-0">
      <Summary cartItem={cart} />
    </div>
  </div>
</form>

      </div>
    </div>
  );
}
