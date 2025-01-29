import Image from 'next/image';
import React from 'react';

const MarketAdaption = ({ id }: { id?: string }) => {
  const market = [
    {
      img: "/finance.png",
      title: "Finance"
    },
    {
      img: "/health1.png",
      title: "Health Care"
    },
    {
      img: "/supply.png",
      title: "Supply Chain"
    },
    {
      img: "/realestate.png",
      title: "Real Estate"
    },
    {
      img: "/partnership.png",
      title: "Partnership"
    },
    {
      img: "/gov.png",
      title: "Government Support"
    },
  ]
    return (
      <div id={id} className="w-full h-full  text-white ">
        <div className="flex flex-col justify-between items-center p-6 md:p-12">
          <h2 className="text-3xl sm:text-[55px] font-bold text-[#fff] pb-[50px]">Market Adaption</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full text-black ">
            {market.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-[20px] shadow-md h-[250px]">
                <div className="absolute inset-0">
                  <Image 
                    src={item?.img} 
                    alt={item?.title}
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
export default MarketAdaption;