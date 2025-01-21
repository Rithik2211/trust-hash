import About from "./pages/about/page";
import ContactUs from "./pages/contact-us/page";
import Footer from "./pages/footer/page";
import HeaderTitle from "./pages/header/page";
import Product from "./pages/product/page";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-full">
      <HeaderTitle />
      <Product />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}
