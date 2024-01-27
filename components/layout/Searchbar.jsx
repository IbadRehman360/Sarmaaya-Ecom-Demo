import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

function Searchbar() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
  
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
  
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    const updatedFilteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(updatedFilteredProducts);
  }, [searchQuery, products]);

  return (
    <div className="hidden lg:flex lg:mr-20 xl:mr-4 justify-end lg:px-6 2xl:px-12 lg:ml-6 lg:justify-end relative">
    <div className="w-full max-w-lg lg:max-w-xs text-left">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full rounded-md font-poppins bg-white border py-2.5 pl-4 p-3 px-40 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
     
      {searchQuery.length > 3  && filteredProducts.length > 0 && (
        <div className="  px-3 border-gray-300   bg-white    pt-3  pb-1   text-black   absolute    left-6 2xl:left-52 top-[4rem] rounded-lg  border    cursor-pointer z-50   gap-4 grid    divide-y shadow   overflow-y-auto  w-96    max-h-[80vh]   ...">
          <h5 className="font-inter  uppercase text-gray-800 ">
            {" "}
            Products Related{" "}
          </h5>
          <ul>
  {filteredProducts.map((product) => (
    <li key={product.id} className="my-2 flex gap-4 mb-2">
      <Link href={`/product/${product.id}`}>
        <button
          onClick={() => {
            setSearchQuery("");
            setFilteredProducts([]);
          }}
          className="flex gap-4"
        >
          <Image
            width={84}
            height={84}
            className="border object-cover"
            src={product.image}
            alt={product.title}
            />
          <div>
            <p className="mt-2 text-[1rem] line-clamp-1 text-gray-900 font-poppins">
              {product.title}
            </p>
            <div >
              <p className="font-poppins tracking-wide mt-0.5 lg:mt-1" style={{ fontWeight: "500" }}>
                    <span className="text-red-500">
                      Rs {product.price.toFixed(2)}
                    </span>
                   
              </p>
            </div>
          </div>
        </button>
      </Link>
    </li>
  ))}
</ul>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
