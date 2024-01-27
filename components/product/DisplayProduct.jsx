import { getFakeProducts } from "@/utrils/fakeApi";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import BackBtn from "./BackBtn";
import BuyBtn from "./BuyBtn";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
async function DisplayProduct({ id }) {
  const product = await getProductsData(id);

  return (
    <main style={{ backgroundColor: "#FFFCFA" }}>
      <div className=" lg:pt-20 sm:pt-10   mx-auto  pb-10 px-4 pt-4 sm:pb-32 sm:px-6 ">
        <div className=" b-2 lg:mb-10 grid-cols-2 lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 max-w-2xl mx-auto ">
          <BackBtn />
          <div></div>
        </div>
        <div className="lg:max-w-7xl lg:px-6 lg:grid lg:grid-cols-2 lg:gap-x-8 max-w-2xl mx-auto  ">
          <div className="lg:max-w-lg lg:self-end  pb-4   px-12 lg:px-0 lg:py-0 lg:border-none mx-auto">
            <div className="lg:col-start-2 lg:row-span-2 lg:self-start">
              <div className="transparent-container">
                <div className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full max-h-[12rem] md:max-h-[14rem] lg:max-h-[28rem] lg:mb-3  object-contain  max-h-80 hover:opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details column */}
          <div className="lg:max-w-lg mt-5 border-t lg:border-none lg:mt-0 lg:col-start-2 lg:row-start-1 lg:self-start">
            <div className="mt-8">
              <h1 className="text-xl sm:text-2xl hover:opacity-80 font-bold font-montserrat tracking-tight text-gray-900 lg:text-3xl">
                {product.title}
              </h1>
            </div>

            <section
              aria-labelledby="information-heading"
              className="mt-4 pb-1"
            >
              <a
                href="#"
                className="group inline-flex font-lightest text-sm text-gray-600 hover:text-gray-800 mb-1"
              >
                <span className=" font-poppins tracking-wide text-gray-700 opacity-70  ">
                  Category
                </span>
              </a>
              <div className=" space-y-6">
                <p className=" font-poppins hover:opacity-80 font-semibold opacity-90  text-black tracking-wider text-[0.8rem]  leading-6 ">
                  {product.category}
                </p>
              </div>
            </section>
            <section
              aria-labelledby="information-heading"
              className="mt-2 pb-1"
            >
              <a
                href="#"
                className="group inline-flex font-lightest text-sm text-gray-600 hover:text-gray-800 "
              >
                <span className=" font-poppins tracking-wide text-gray-700   opacity-70  mb-1  ">
                  Description
                </span>
              </a>
              <div className=" space-y-6">
                <p className=" font-poppins text-gray-500 tracking-wider text-[0.8rem]  leading-6 ">
                  {product.description.slice(0, 120)}
                </p>
              </div>
            </section>

            {/* Product form */}
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Product options
              </h2>

              <form>
                <div className="mt-3">
                  <a
                    href="#"
                    className="group inline-flex text-sm text-gray-600 hover:text-gray-800 mb-1"
                  >
                    <span className=" font-poppins tracking-wide ">Price</span>
                  </a>
                  <p className="text-md md:text-xl hover:opacity-80 lg:text-3xl  font-montserrat font-bold">
                    ${product.price}{" "}
                  </p>
                </div>
                 <BuyBtn product={product} />
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

export default DisplayProduct;
