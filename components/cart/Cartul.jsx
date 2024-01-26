import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Link from "next/link"
import Quantity from "./Quanitity";
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

function Cartul({cartItem}) {
  return (
    <>
      <h2 className="sr-only">Items in your shopping cart</h2>

      <ul
        role="list"
        className=" border-gray-200 divide-y divide-gray-200 flex gap-4 flex-col" 
      >
        {cartItem.items.map((product, productIdx) => (
          
          <li key={product.id} className="flex items-center pr-10 pl-8 h-40 gap-20 justify-between py-6 bg-white rounded-xl shadow-lg sm:py-10">
          <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-24 h-24 rounded-lg object-center object-contain sm:w-32 sm:h-32"
              />
            </div>

            <div className="pr-6">
              <h3 className="">
                <Link
                  href={"/"}
                  className="font-medium font-inter  text-gray-700 hover:text-gray-800"
                >
               {product.title.split(" ").slice(0, 3).join(" ")} 
                </Link>
              </h3>
              <p className="mt-1 text-sm font-inter text-gray-400">{product.color}</p>
              {product.category ? (
                <p className="mt-1 text-sm  font-opensans text-gray-500">{product.category}</p>
              ) : null}
            </div>
        
            <div>
              <p className=" hover:text-gray-700 font-inter font-medium text-gray-900 text-right">
               ${product.price}
              </p>
            </div>

            <div><Quantity/> </div>

             
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cartul;
