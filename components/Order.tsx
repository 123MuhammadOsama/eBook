import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Order = () => {
  return (
    <div className='flex items-center gap-60 px-32 bg-black  text-white'>
      
      <div className='space-y-5'>
        <h1 className=' text-2xl'>Ascend through the Power of Executive <span className='text-red-500'>E-book Creation</span> with bookmarketeers.com</h1>
        <p className=''>When it comes to writing E-Books, we have the highest value for money. Our authors&apos; team consists of people with tremendous knowledge and talents who can write about any particular subject in the most imaginative way. Our main goal will always remain to provide authentic leads that meet our highly valued customers&apos; perspective.</p>
        <button className='text-red-500 border border-red-500 hover:text-white hover:bg-red-500  rounded-lg flex items-center gap-2 px-4 py-1'>ORDER NOW <FaArrowRightLong /></button>
      </div>
      
      <div className='px-32'>
        <Image
            src="/book_read.png"
            alt=''
            height={1000}
            width={1000}
        />
      </div>
    </div>
  )
}

export default Order
