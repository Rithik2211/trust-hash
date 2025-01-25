import DialogCard from '@/components/DialogCard';
import React from 'react'

export interface ItemCardProps {
  img : string;
  title : string;
  description ?: string;
}
const Culture = ({ id }: { id?: string }) => {

  const itemCards:ItemCardProps[] = [
    {
      img : "/learning.png",
      title : "Learning",
      description : "Embrace continuous learning and growth"
    },
    {
      img : "/handshake.png",
      title : "Commitment to Quality",
      description : "Strive for excellence in everything we do"
    },
    {
      img : "/passion.png",
      title : "Passion for customer experience",
      description : "Deliver exceptional experiences for our customers"
    },
    {
      img : "/idea.png",
      title : "Taking Smart",
      description : "Make strategic and well-informed decisions"
    },
    {
      img : "/unlocked.png",
      title : "Open",
      description : "Foster an open and transparent work environment"
    },
    {
      img : "/magic-wand.png",
      title : "Creating",
      description : "Innovate and create meaningful solutions"
    }
  ]
  return (
    <div id={id} className='flex justify-center items-center w-full h-full md:h-screen text-white mt-4'>
      <div className='max-w-6xl mx-5 px-4 md:px-6 lg:px-8 py-20'>
        <h1 className='text-[56px] font-bold mb-8'>Our Culture</h1>
        <p className='text-[30px] mb-12 text-[#e3e6eb]'>What we believe in, What we strive to achieve.</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
          {
            itemCards.map((item, index) => (
              <DialogCard key={index} index={index} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Culture;