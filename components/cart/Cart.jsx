"use client"
import { useCart } from "@/app/contexts/CartContext";
import Cartul from "./Cartul";
import Summary from "./Summary";

const products = [
  {
    id: 1,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35.00",
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
];

export default function Cart() {
  const {cart, dispatch} = useCart()
  console.log(cart)

   return (
    <div className="">
      <div className="max-w-[1400px] mx-auto py-16 px-4 sm:py-16  2xl:py-24   sm:px-6 lg:px-8">
        <h1 className=" font-inter text-2xl      tracking-wide text-black">
     Your Cart 
        </h1>
        <form className="mt-12">
          <div className="grid grid-cols-12">
            <div className="col-span-8  ">
              <Cartul cartItem={cart} />
            </div>
            <div className="col-span-4">
              <Summary />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
