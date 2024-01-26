import { BsCart2 } from "react-icons/bs"
import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";

function CartHeader() {
    const {cart, dispatch} = useCart()
    return (
        <div className="hidden lg:flex lg:flex-2  lg:justify-end lg:items-end ">
        <Link href={"/cart"}>
            
          <button className="flex items-center hover:opacity-80 justify-center gap-2  rounded-[15px] px-[45px] py-[11px] bg-black   text-white">
          <span className="font-montserrat text-white font-extralight">{cart.items.length}</span>
            <span className="flex items-center"> 
              <span className="mb-0.5 ml-1">
                <BsCart2 />
              </span>
            </span>
          </button>
          </Link>
        </div>
    )
}

export default CartHeader
