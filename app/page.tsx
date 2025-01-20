import HeaderTitle from "./pages/header/page";
import Product from "./pages/product/page";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-full">
      <HeaderTitle />
      <Product />
    </div>
  );
}
