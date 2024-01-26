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

function Summary() {
  return (
    <div className="flex flex-col   shadow-lg rounded-lg h-full  py-6 sm:p-6 lg:p-6  sm:ml-10 bg-white">
      <div className="flex-grow">
        <h3 className="text-lg font-opensans   text-black   font-medium mb-4"> Your Total </h3>
        {products.map((product) => (
          <div key={product.id} className="flex justify-between mb-2.5">
            <p className="    font-opensans text-sm  text-black   font-medium ">{product.name} <span className="ml-2 text-gray-500"> X2</span></p>
            <p className="font-inter text-sm   text-black   font-medium ">{product.price}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="py-4 flex items-center justify-between">
          <dt className="font-opensans text-lg  text-black   font-medium  ">
            Order total
          </dt>
          <dd className="text-base font-montserrat font-medium text-gray-900">
            $112.32
          </dd>
        </div>
        <button
          type="submit"
          
          className="w-full font-poppins border bg-black border-transparent rounded-2xl shadow-sm py-3.5 mt-1 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Summary;
