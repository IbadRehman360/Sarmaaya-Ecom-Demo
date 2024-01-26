"use client";
 import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import CartHeader from "./CartHeader";
const products = [
  {
    name: "Computing Devices:",
    description: "Enhance your data analytics with computing technology",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Mobile Devices",
    description:
      "Engage and communicate effectively with your customers with mobile devices",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Audio Electronics",
    description:
      "Ensure the safety and security of your customers' audio electronics",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Communication Devices",
    description:
      "Optimize connectivity by seamlessly integrating with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className="mx-auto flex    items-center justify-center lg:max-w-[1400px] p-6 lg:px-8"
        aria-label="Global"
      >
        <div className=" flex-1">
        <Link href="/"
            className="-m-1.5 p-1.5 hover:shadow-md shadow-sm border-2 border-black px-6 py-2 hover:opacity-70 hover:border-opacity-70"
          >
              <span className=" font-semibold text-xl  font-inter">
                Ecommerence
              </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden xl:flex lg:gap-x-10 ">
          <Popover className="relative">
            <Popover.Button className="flex items-center font-poppins   gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Electronic
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="#"
            className="text-sm  font-poppins  leading-6 text-gray-900"
          >
            Mens Fashion
          </Link>
          <Link
            href="#"
            className="text-sm   font-poppins  leading-6 text-gray-900"
          >
            Women&apos;s Fashion
          </Link>
          <Link
            href="#"
            className="text-sm  font-poppins  leading-6 text-gray-900"
          >
            Jewelry
          </Link>
        </Popover.Group>
        <div className="  hidden lg:flex lg:mr-20 xl:mr-4 justify-end lg:px-6 2xl:px-12 lg:ml-6 lg:justify-end">
          <div className="w-full max-w-lg lg:max-w-xs text-left">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className=" relative">
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
                className="block w-full rounded-md  font-poppins  bg-white border py-2.5 pl-4 p-3 px-40 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
        <CartHeader/>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="h-8 w-auto" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Electronic{" "}
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Mens Fashion
                </Link>
                <Link
                  href="#"
                  className="-mx-3 pb-6 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
            </div>
          </div>
          <div className="  hidden md:flex md:flex-2 lg:mr-20 xl:mr-4 justify-end xl:px-12 2xl:px-20 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs text-left">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className=" relative">
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
                  className="block w-full rounded-md bg-white border py-2.5 pl-4 p-3 px-40 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
