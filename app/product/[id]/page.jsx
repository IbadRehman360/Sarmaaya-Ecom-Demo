import { getFakeProducts } from "@/utrils/fakeApi";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
async function ProductPage({ params: { id } }) {
  const product = await getProductsData(id);
  return (
    <main>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto  pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image column */}
          <div className="lg:max-w-lg lg:self-end  ">
            <div className=" lg:mt lg:col-start-2 lg:row-span-2 lg:self-start">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full   object-center  px-16    md:px-24 "
                />
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:max-w-lg lg:col-start-2 lg:row-start-1 lg:self-start">
            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>
            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading">Product information</h2>
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p>
              </div>
              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>
              <div className="mt-6 flex items-center">
                <CheckIcon
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-2 text-sm text-gray-500">
                  In stock and ready to ship
                </p>
              </div>
            </section>

            {/* Product form */}
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div className="mt-4">
                  <a
                    href="#"
                    className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                  >
                    <span>What size should I buy?</span>
                    <QuestionMarkCircleIcon
                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white  hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Add to bag
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="group inline-flex text-base font-medium"
                  >
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">
                      Lifetime Guarantee
                    </span>
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

async function getProductsData(id) {
  try {
    const products = await getFakeProducts(id);
    if (!products) {
      throw new Error("Failed to fetch products");
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
}

export default ProductPage;
