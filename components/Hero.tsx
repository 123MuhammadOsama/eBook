
import Image from 'next/image'
import { IoPaperPlaneOutline } from 'react-icons/io5'

const Hero = () => {
  return (
    <div className='flex items-center px-20 mt-32'>
   
      <div className='space-y-10 px-10'>
        <h1 className='text-6xl'>Expand Your Knowledge With</h1>
        <h2 className='text-red-600 text-6xl font-bold'>E-books</h2>
        <div className='space-y-5'>
            <p className='text-xl'>Tap expert writers and a partner who gets modern content marketing. In a sea of sameness,
             stand out in search with E-book writing Service</p>
             <button className="bg-red-600 flex items-center text-white px-8 py-2 rounded-xl hover:bg-red-800 group">
                <span className="transform transition-transform mr-3 duration-500 group-hover:-translate-x-2">
                  LIVE CHAT
                </span>
                <IoPaperPlaneOutline className="transform transition-transform duration-500 group-hover:translate-x-2" />
              </button>

        </div>
      </div>



      <div className='pb-20'>
        <Image
            src="/heroimage.png"
            alt='book'
            height={1000}
            width={1000}
        />
      </div>
    </div>
  )
}

export default Hero
