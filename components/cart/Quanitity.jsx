function Quantity({ quantity = 0, border, product }) {
    return (
      <div className={`flex justify-center items-center text-center`}>
        <button
          type="button"
          className={`${
            border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"
          }  bg-black text-white h-6 text-center rounded-md mx-auto  focus:outline-none text-lg flex items-center justify-center`}
        >
          -
        </button>
        <p
          className={`text-gray-500 font-semibold px-5 p-1 text-lg ${
            border === "true" ? "border text-sm" : " text-md"
          }`}
        >
          {quantity}
        </p>
        <button
          type="button"
          className={`${
            border === "true" ? "border px-2.5 p-0.5" : "px-2 p-1"
          }  bg-black text-white h-6 text-center rounded-md mx-auto  focus:outline-none text-lg flex items-center justify-center`}
        >
          +
        </button>
      </div>
    );
  }
  

export default Quantity;
