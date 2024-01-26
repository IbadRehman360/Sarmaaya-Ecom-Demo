import DisplayProduct from "@/components/product/DisplayProduct";

async function ProductPage({ params: { id } }) {
  return (
    <main style={{ backgroundColor: "#FFFCFA" }}>
      <DisplayProduct id={id} />
    </main>
  );
}

export default ProductPage;
