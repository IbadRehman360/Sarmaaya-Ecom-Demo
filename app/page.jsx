import CategoryProducts from "@/components/category/CategoryList";
import { getFakeProducts } from "@/utrils/fakeApi";

export default async function HomePage() {
  const products = await getProductsData();
  return (
    <div>
      <CategoryProducts products={products} />
    </div>
  );
}

async function getProductsData() {
  try {
    const products = await getFakeProducts();
    if (!products) {
      throw new Error("Failed to fetch products");
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
}
