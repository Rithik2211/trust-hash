'use client';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';


const Navbar = () => {

    const navPages = [
        { name: 'Products', id: 'product' }, 
        { name: 'Services', id: 'services' }, 
        { name: 'Market Adoptation', id: 'market' }, 
        { name: 'Our Culture', id: 'culture' }, 
    ];

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
            });
        }
    };

  return (
    <div className='flex flex-row h-[70px] max-w-screen w-full backdrop-blur justify-between items-center text-white fixed top-0 left-0 z-10 px-6'>
        <div className='flex flex-row justify-center items-center text-center cursor-pointer' onClick={() => scrollToSection('header')}>
            <Image src={'/trust-hash.png'} width={100} height={100} alt='logo' />
            <h1 className='text-[20px] md:text-[25px] font-bold'>Trust Hash</h1>
        </div>
        <div className='hidden md:block'>
            <div className='flex flex-row font-semibold gap-4'>
                {navPages.map((page, index) => (
                    <div 
                        key={index} 
                        onClick={() => scrollToSection(page.id)}
                        className='px-4 py-2 font-semibold hover:text-white cursor-pointer'
                    >
                        {page.name}
                    </div>
                ))}
                <Button variant="outline" className='bg-green-500 text-black font-semibold rounded-[8px] ring-black border-none' onClick={() => scrollToSection('contact-us')}>Contact Us</Button>
            </div>
        </div>
        <div className='md:hidden'>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image src={'/hamburger.png'} width={40} height={40} alt='logo' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-46">
                <DropdownMenuLabel className='text-center'>Trust Hash</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='text-center flex flex-col justify-center items-center'>
                    {navPages.map((page, index) => (
                        <DropdownMenuItem 
                            key={index} 
                            onClick={() => scrollToSection(page.id)}
                            className='my-2'
                        >
                            {page.name}
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem onClick={() => scrollToSection('contact-us')} className='my-2' >
                        Contact US
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar;