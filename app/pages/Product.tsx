import React from 'react';
import { Shield, Gauge, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Product = ({ id }: { id?: string }) => {
  const cards = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Secure your business with immutable ledger technology, and decentralized data storage.",
    },
    {
      icon: Gauge,
      title: "Improved Efficiency",
      description: "Accelerate your operations with automated smart contracts and distributed processing.",
    },
    {
      icon: Search,
      title: "Transparent Operations",
      description: "Achieve unprecedented transparency with our immutable blockchain ledger.",
    }
  ];

  return (
    <div id={id} className='flex flex-col justify-center items-center w-full h-full md:h-screen text-white gap-5'>
      <div className='flex text-center justify-center items-center w-full px-4 pb-[50px]'>
        <h1 className='text-[35px] md:text-[45px] font-semibold'>Why Choose Our Blockchain Solutions ?</h1>
      </div>
      <div className='flex flex-row justify-evenly items-center gap-5 mx-4 w-screen flex-wrap text-white'>
        {cards.map((card, index) => (
          <Card key={index} className="flex flex-col w-[350px] bg-[#16181a] text-white  hover:border-green-500 dark:hover:border-green-500">
            <CardHeader>
              <div className="mb-4">
                <card.icon className="w-12 h-12 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-bold mb-2">{card.title}</CardTitle>
              <CardDescription className='text-white text-[14px] font-normal'>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Product;