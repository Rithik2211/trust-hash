import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu';


const Navbar = () => {
    const navPages = ['Features', 'Products', 'Services', 'Contact Us']
  return (
    <div className='flex flex-row h-[70px] max-w-screen w-full backdrop-blur justify-around items-center text-white fixed top-0 left-0 z-10 '>
        <div className='flex flex-row justify-center items-center text-center'>
            <Image src={'/trust-hash.png'} width={100} height={100} alt='logo' />
            <h1 className='text-[20px] md:text-[25px] font-bold'>Trust Hash</h1>
        </div>
        <div className='hidden md:block'>
            <div className='flex flex-row font-semibold'>
                {
                    navPages.map((page, index) => (
                        <a key={index} href='#'>
                            <div className='px-4 py-2 hover:text-white'>{page}</div>
                        </a>
                    ))
                }
            </div>
        </div>
        <div className='hidden md:block'>
            <Button variant="outline" className='bg-[#55e794] text-black font-semibold rounded-[20px] ring-black'>Contact Us</Button>
        </div>
        <div className='md:hidden'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image src={'/hamburger.png'} width={40} height={40} alt='logo' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className='text-center'>Trust Hash</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='text-center flex flex-col justify-center items-center'>
                    {
                        navPages.map((page, index) => (
                            <a key={index} href='#'>
                                <DropdownMenuItem className='my-2'> {page} </DropdownMenuItem>
                            </a>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar;