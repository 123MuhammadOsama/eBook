import Image from 'next/image'
import React from 'react'

const Process = () => {
  return (
    <div className='px-52 py-20 space-y-10'>
      <div className='w-1/2'>
        <h1 className='text-6xl font-bold pb-5'>Our <span className='text-red-500'>Unbeatable</span>Process</h1>
        <p className='text-2xl'>At The Nation Publishers, we&apos;re known for delivering top-notch content writing services. Now, you can dive into the perks of our ghostwriting service too! There are plenty of areas where you can tap into our expertise to get high-quality content. Let&apos;s get started!</p>
      </div>

      {/* cards */}
      <div className='flex px-32'>
        {/* left Cards */}

    
         <div className='space-y-10'>
                    {/* first */}
            <div className='bg-black text-white px-2 py-8 w-[500px]'>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-bold text-4xl'>01</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold  justify-center'><span className='text-red-500'>Creative</span> Writing</h2>
                        <p>Engage in the art of expression through creative writing. Unleash your thoughts and emotions, creating a world of words that reflects your unique perspective and imagination.</p>
                    </div>
                </div>
            </div>

            {/* second */}

            <div className='bg-black text-white px-2 py-8 w-[500px]'>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-bold text-4xl'>03</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold justify-center'><span className='text-red-500'>Focusing,</span> Focusing,</h2>
                        <p>Cultivate mindfulness through focusing techniques, meditation, and breathwork. Elevate your awareness, reduce stress, and foster a sense of inner calm to enhance overall well-being.</p>
                    </div>
                </div>
            </div>

            {/* third */}

            <div className='bg-black text-white px-2 py-8 w-[500px]'>
                <div className='flex gap-8 items-center'>
                    <h2 className='font-bold text-4xl'>05</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold justify-center'><span className='text-red-500'>Spirituality,</span> Psychology,
                        Effective Communication,</h2>
                        <p>Explore the connection between spirituality and psychology. Enhance your understanding of self and others, fostering effective communication that builds meaningful connections and promotes personal growth.</p>
                    </div>
                </div>
            </div>


        
         </div>

         {/* center image */}

         <div className=''>
            <Image
                src="/center-image.png"
                alt=''
                height={1000}
                width={1000}
                
            />
         </div>

         {/* right cards */}

         <div className='space-y-10'>
                    {/* first */}
            <div className='bg-black text-white px-2 py-8 w-[500px] '>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-bold text-4xl'>02</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold justify-center'><span className='text-red-500'>ADHD</span>/ ExecutiveFunctions</h2>
                        <p>Navigate the challenges of ADHD and enhance executive functions. Discover effective strategies to manage time, stay organized, and optimize cognitive abilities for improved daily functioning.</p>
                    </div>
                </div>
            </div>

            {/* second */}

            <div className='bg-black text-white px-2 py-8 w-[500px]'>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-bold text-4xl'>04</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold justify-center'><span className='text-red-500'>Creativity</span> and
                        Meaningful Work</h2>
                        <p>Integrate creativity into your professional life for meaningful work experiences. Uncover innovative solutions, embrace new perspectives, and find fulfillment in the intersection of creativity and productivity.</p>
                    </div>
                </div>
            </div>

            {/* third */}

            <div className='bg-black text-white px-2 py-8 w-[500px]'>
                <div className='flex gap-4 items-center'>
                    <h2 className='font-bold text-4xl'>06</h2>
                    <div className='flex flex-col text-2xl'>
                        <h2 className='font-bold justify-center'><span className='text-red-500'>ADHD,</span>/ ExecutiveFunctions
                        Effective Communication,</h2>
                        <p>Navigate the challenges of ADHD and enhance executive functions. Discover effective strategies to manage time, stay organized, and optimize cognitive abilities for improved daily functioning.</p>
                    </div>
                </div>
            </div>


        
         </div>
      </div>
    </div>
  )
}

export default Process
