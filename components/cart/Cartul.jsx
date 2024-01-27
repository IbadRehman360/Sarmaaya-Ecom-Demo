 
import Link from "next/link"
import Quantity from "./Quanitity";
import CartLayerMb from "./CartLayerMb";
import CartLayerPc from "./CartLayerPc";
function Cartul({ cartItem }) {
  return (
    <>
      <h2 className="sr-only">Items in your shopping cart</h2>

      <ul
        role="list"
        className="border-gray-200 divide-y divide-gray-200 flex md:gap-4 gap-1 flex-col"
      >
        {cartItem.items.map((product, productIdx) => (
          <>
          <CartLayerPc product={product} />
          <CartLayerMb product={product} />
          </>
        ))}
      </ul>
    </>
  );
}

export default Cartul;
       