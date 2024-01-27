import Quantity from "./Quanitity"

function CartLayerMb({product}) {
    return (
    
            <li key={product.id} className="flex px-5 rounded-xl shadow-sm md:shadow-lg md:hidden bg-white py-6 sm:py-10">
              <div className="flex-shrink-0 ">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-24 h-24 hover:opacity-85 rounded-lg object-center object-contain"
                  />
              </div>

              <div className="relative ml-4   flex-1 flex flex-col justify-between sm:ml-6">
                <div>
                  <div className="flex justify-between sm:grid sm:grid-cols-2">
                    <div className="pr-6">
                      <h3 className="text-sm">
                        <p href={product.href} className="font-medium font-inter  text-gray-700 line-clamp-1 sm:line-clamp-none hover:text-gray-800">
                          {product.title}
                        </p>
                      </h3>
                      {product.category ? <p className="mt-1   font-opensans text-sm text-gray-500">{product.category}</p> : null}
                    </div>

                    <p className="text-sm font-medium text-gray-900 font-inter text-right">${product.price}</p>
                  </div>

                  <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                    <Quantity product={product} />

                    <button
  type="button"
  className="ml-4 flex justify-end items-end text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
>
  <span>Remove</span>
</button>

                  </div>
                </div>

              
              </div>
            </li>
    )
}

export default CartLayerMb
