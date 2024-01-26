function Summary() {
  return (
    <div className="mt-10 sm:ml-32 sm:pl-6">
      <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
        <h2 className="sr-only">Order summary</h2>

        <div className="flow-root">
          <dl className="-my-4 text-sm divide-y divide-gray-200">
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-900">$99.00</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900">$5.00</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900">$8.32</dd>
            </div>
            <div className="py-4 flex items-center justify-between">
              <dt className="text-base font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">$112.32</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Checkout
        </button>
      </div>

      <div className="mt-6 text-sm text-center text-gray-500">
        <p>
          or{" "}
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-indigo-500"
          >
            Continue Shopping<span aria-hidden="true"> &rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Summary;
