import About from "./pages/about/page";
import ContactUs from "./pages/contact-us/page";
import Footer from "./pages/footer/page";
import HeaderTitle from "./pages/header/page";
import Product from "./pages/product/page";
import Solution from "./pages/Solutions/page";
import Work from "./pages/work/page";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-full">
      <HeaderTitle />
      <Product />
      <Solution />
      <Work />
      <ContactUs />
      <Footer />
    </div>
  );
}
