import Image from "next/image";
import HeaderTitle from "./pages/header/page";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center h-full w-full">
      <HeaderTitle />
      <HeaderTitle />
    </div>
  );
}
