import Quantity from "./Quanitity"

function CartLayerPc({product}) {
        return (
          <>
             
                <li
                  key={product.id}
                  className="hidden  md:flex flex-col sm:flex-row sm:items-center sm:pr-10 sm:pl-8 h-40 sm:h-auto gap-20 sm:justify-between py-6 bg-white rounded-xl shadow-lg sm:py-10"
                >
                  {/* First div for smaller view heights */}
                  <div className="flex-shrink-0 sm:hidden">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-24 h-24 hover:opacity-85 rounded-lg object-center object-contain"
                    />
                  </div>
      
                  <div className="flex-shrink-0 hidden sm:flex">
                    {/* Original image div for larger view heights */}
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-24 h-24 hover:opacity-85 rounded-lg object-center object-contain"
                    />
                  </div>
      
                  <div className="pr-6">
                    <h3 className="">
                      <p
                        className="font-medium font-inter line-clamp-2 text-gray-700 hover:text-gray-800"
                      >
                        {product.title.split(" ").slice(0, 3).join(" ")}
                      </p>
                    </h3>
                    <p className="mt-1 text-sm font-inter text-gray-400">{product.color}</p>
                    {product.category ? (
                      <p className="mt-1 text-sm font-opensans text-gray-500">{product.category}</p>
                    ) : null}
                  </div>
      
                  <div>
                    <p className="hover:text-gray-700 font-inter font-medium text-gray-900 text-right">
                      ${product.price}
                    </p>
                  </div>
      
                  <div>
                    <Quantity product={product} />
                  </div>
                </li>
          </>
        );
      }
      
      

export default CartLayerPc
