import CategoryProducts from "@/components/category/CategoryList";
import { getFakeProducts } from "@/utrils/fakeApi";

async function Category({ params: { name } }) {
    const products = await getProductsData(name);
    
    return (
        <div>
            <CategoryProducts products={products} />
        </div>
    )
}

async function getProductsData(name) {
    try {
      const products = await getFakeProducts(null, name);
      if (!products) {
        throw new Error("Failed to fetch products");
      }
  
      return products;
    } catch (error) {
      console.error("Error fetching products:", error.message);
      throw error;
    }
}
  
export default Category;
