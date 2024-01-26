import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
function CategoryProducts({ products }) {
  return (
    <div className=" py-16 px-4 sm:py-24 sm:px-6  lg:max-w-[1400px] mx-auto lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-6">
        {products.slice(0, 7).map((product) => (
          <div
            key={product.id}
            className="bg-white overflow-hidden p-2.5 border shadow-lg rounded-lg"
          >
            <Link href={"product/" + product.id}>
              <div className="relative h-48 p-2.5 border rounded-xl">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="px-2 py-4">
                <h3 className="font-semibold text-lg font-inter line-clamp-1 hover:opacity-90 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-[0.85rem] mt-1.5 mb-3  font-opensans text-gray-800">
                  {product.category}
                </p>
                <p className="mt-5 text-[0.88rem] line-clamp-3 text-gray-700 mb-4 font-poppins ">
                  {product.description.slice(0, 96)}
                </p>
                <div className="flex items-center">
                  <span className="text-black font-poppins ">
                    Price{" "}
                    <span className="text-[1rem] hover:opacity-80 ml-1.5 font-bold font-montserrat">
                      ${product.price.toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            </Link>
            <div className="px-2 pb-4">
              <a
                href="#"
                className="flex justify-center  font-poppins items-center text-center text-xs bg-black  text-white py-4 px-4 rounded-md hover:opacity-80"
              >
                Add to Bag
                <span className="ml-3 mb-0.5 font-montserrat text-[0.9rem] ">
                  <BsCart2 />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryProducts;
