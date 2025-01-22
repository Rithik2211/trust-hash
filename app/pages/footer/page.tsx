import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full text-white mt-8 mb-4'>
      <div className='w-full max-w-7xl px-4'>
        <hr className='border-gray-700 mb-6' />
        <div className='flex justify-center items-center pb-4'>
          <p className='text-sm text-gray-400'>
            © {new Date().getFullYear()} TrustHash. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;