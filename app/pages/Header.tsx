import Image from 'next/image';
import React from 'react'

const HeaderTitle = ({ id }: { id?: string }) => {
    const description = 'Secure, transparent and efficient solutions for the digital age. Harness the power of blockchain technology to transform your operations.'
  return (
    <div id={id} className='flex flex-row justify-center items-center w-full h-screen text-white px-4'>
        <div className='flex flex-col text-center justify-center items-center gap-4 w-full h-screen'>
            <h1 className='text-[40px] md:text-[55px] font-bold px-4'><span className='text-green-500' >Revolutionize </span> Your <span className='text-green-500'>Business</span> with <span className=' text-green-500'>Blockchain</span> </h1>
            <p className='text-[22px] font-medium px-4 mx-2 '>{description}</p>
        </div>
        <div className='hidden md:block w-[800px]'>
          <div className='flex justify-center items-center w-full'>
              <Image src={'/header-icon.svg'} width={800} height={1200} alt='header icon' />
          </div>
        </div>
    </div>
  )
}

export default HeaderTitle;