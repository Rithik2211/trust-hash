import React from 'react';
import { Hammer, Layers,Leaf, Globe, CheckCircle, Rocket,BookOpen, ShieldCheck, } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Product = ({ id }: { id?: string }) => {
  const cards = [
    {
      icon: Hammer,
      title: "Tailored for Your Business",
      description: "We craft customized blockchain solutions to meet your unique business needs, ensuring seamless integration and maximum impact.",
    },
    {
      icon: Layers,
      title: "Multi-Industry Expertise",
      description: "From finance to textiles, healthcare to supply chain, we deliver versatile blockchain solutions for diverse industries.",
    },
    {
      icon: Globe,
      title: "Regional Language Support",
      description: "Breaking barriers with multilingual support, making blockchain accessible to all regions and audiences.",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Services",
      description: "From consultation to development and ongoing support, we’re with you every step of the way.",
    },
    {
      icon: Rocket,
      title: "Future-Ready Solutions",
      description: "Stay ahead of the curve with our innovative, sustainable, and scalable blockchain technologies.",
    },
    {
      icon: BookOpen,
      title: "Empowering Knowledge",
      description: "We provide workshops and resources to simplify blockchain and Web3 adoption, empowering your team with the skills they need.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Expertise",
      description: "Led by industry pioneers, we bring experience and a proven track record to transform your business with blockchain.",
    },
    {
      icon: Leaf,
      title: "Sustainability-Focused",
      description: "Align your operations with eco-friendly practices and leverage blockchain for a greener tomorrow.",
    },
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