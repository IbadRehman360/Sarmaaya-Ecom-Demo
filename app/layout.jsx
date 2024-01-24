import "@styles/globals.css";
import Header from "@/components/layout/header";

export const metadata = {
  title: "SenpaiMerch",
  description:
    "SenpaiMerch - Your Premier Destination for Anime Merchandise in Pakistan! Explore a World of Japanese Animation Goodies, Apparel, and Collectibles Right at Your Fingertips. Shop Now for Exclusive Deals!",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      {/* <link rel="icon" href="/assets/logosenpai.png" /> */}
      <div className="main">
        <div className="gradient" />
      </div>
      <Header />
      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
