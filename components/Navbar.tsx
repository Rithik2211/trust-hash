import React from 'react'
import { Button } from './ui/button';

const Navbar = () => {
    const navPages = ['Home', 'About', 'Services', 'Products']
  return (
    <div className='flex flex-row h-[70px] w-full backdrop-blur justify-around items-center text-white sticky top-0 left-0'>
        <div className=''>
            <h1 className='text-[25px] font-bold'>Trust Hash</h1>
        </div>
        <div className='flex flex-row font-semibold'>
            {
                navPages.map((page, index) => (
                    <a key={index} href='#'>
                        <div className='px-4 py-2 hover:text-white'>{page}</div>
                    </a>
                ))
            }
        </div>
        <div className=''>
            <Button variant="outline" className='bg-[#55e794] text-black font-semibold rounded-[20px] ring-black'>Contact Us</Button>
        </div>
    </div>
  )
}

export default Navbar;