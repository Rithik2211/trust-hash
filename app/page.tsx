import Culture from "./pages/Culture";
import ContactUs from "./pages/ContactUS";
import Footer from "./pages/Footer";
import HeaderTitle from "./pages/Header";
import Product from "./pages/Product";
import Solution from "./pages/Solutions";
import MarketAdaption from "./pages/MarketAdoptations";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-full">
      <HeaderTitle id="header" />
      <Product id="product" />
      <Solution id="services" />
      <MarketAdaption id="market"/>
      <Culture id="culture"/>
      <ContactUs id="contact-us" />
      <Footer />
    </div>
  );
}
