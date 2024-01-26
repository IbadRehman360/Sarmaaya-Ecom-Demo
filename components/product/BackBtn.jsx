"use client";

import { useRouter } from "next/navigation";
export default function SupplierList() {
  const router = useRouter();
  const goToPreviousPage = () => {
    router.back();
  };
  return (
    <button
      className="flex  font-poppins  tracking-wider text-lg hover:opacity-80 "
      onClick={goToPreviousPage}
    >
      Back
    </button>
  );
}
