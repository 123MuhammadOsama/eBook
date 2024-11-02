import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsPinterest, BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-red-900 flex px-32 py-20'>
      {/* right */}
 
        <div className='space-y-5'>
        <Image
            src='/footer.png'
            alt=''
            height={300}
            width={300}
        />

        <p className='text-2xl text-white'>PEBW empowers authors to share their narratives, create impact, and foster connections.</p>
        <p className='text-2xl text-white pt-10'><span className='font-bold'>Address:</span> 2093 Philadephia Pike #1911, Claymont, DE, 19703</p>
        <div className='flex text-white bg-transparent text-4xl pt-10 gap-4'>

            <Link href='/'><FaFacebook /></Link>
            <Link href='/'><FaInstagram /></Link>
            <Link href='/'><FaLinkedin /></Link>
            <Link href='/'><BsTwitterX /></Link>
            <Link href='/'><BsPinterest /></Link>

        </div>
        </div>
       
      <div>
      
      
      {/* left  */} 

      <div className='flex gap-40 text-white text-2xl ml-32'>
        {/* first */}
        <div>
            <h2 className='font-bold pb-10'>Lorem, ipsum</h2>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
        </div>

        {/* second */}
        <div>
        <h2 className='font-bold pb-10'>Lorem, ipsum</h2>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
        </div>
        {/* third */}
        <div>
        <h2 className='font-bold pb-10'>Lorem, ipsum</h2>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
            <p className='border-b-2 border-white hover:text-yellow-500 hover:border-yellow-500'>Lorem, ipsum dolor.</p>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Footer
