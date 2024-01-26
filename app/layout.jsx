import "@/styles/global.css";
import Header from "@/components/layout/Header";
import { CartProvider } from "./contexts/CartContext";
export const metadata = {
  title: "SenpaiMerch",
  description:
    "SenpaiMerch - Your Premier Destination for Anime Merchandise in Pakistan! Explore a World of Japanese Animation Goodies, Apparel, and Collectibles Right at Your Fingertips. Shop Now for Exclusive Deals!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>    
    <CartProvider>
          <link rel="icon" href="/assets/logosenpai.png" />
      <div className="main">
        <div className="gradient" />
      </div>
      <Header />

      <main className="app" style={{ backgroundColor: "#FFFCFA" }}>
        {children}
      </main>  
       </CartProvider>
    </body>
  </html>
);

export default RootLayout;
