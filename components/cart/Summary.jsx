 
function Summary({cartItem}) {
  const total = cartItem.items.reduce((acc, amount) => acc + amount.price * amount.quantity, 0)
  return (
    <div className="flex flex-col   shadow-lg rounded-lg h-full  py-6 p-6 lg:p-6  xl:ml-10 bg-white">
      <div className="flex-grow">
        <h3 className="text-lg font-opensans   text-black   font-medium mb-4"> Your Total </h3>
        {cartItem.items.map((product) => (
          <div key={product.id} className="flex justify-between mb-2.5">
            <p className="    font-opensans text-sm  text-black   font-medium tracking-wide ">{product.title.split(" ").slice(0,3).join(" ")} <span className="ml-2 text-gray-500 tracking-tight"> X {product.quantity}</span></p>
            <p className="font-inter text-sm   text-black   font-medium ">${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="py-4 flex items-center justify-between">
          <dt className="font-opensans text-lg  text-black   font-medium  ">
            Order total
          </dt>
          <dd className="text-base font-montserrat font-medium text-gray-900">
            ${total.toFixed(2)}
          </dd>
        </div>
        <button
          type="submit"

          className="w-full font-poppins border bg-black border-transparent rounded-2xl shadow-sm py-3.5 mt-1 px-4 text-base font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Summary;
