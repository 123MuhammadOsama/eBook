import React from 'react'

const Contact = () => {
  return (
    <div className='flex bg-black px-32 py-20'>
      {/* text */}
      <div>
        <h1 className='text-white text-4xl font-bold w-[400px]'>Love to Hear From You Get In Touch 👋</h1>
        <p className='text-white text-2xl pt-20 w-[900px]'>Tap expert writers and a partner who gets modern content marketing. In a sea of sameness, stand out in search with E-book writing Service</p>
      </div>

      {/* form */}
      <div className='flex justify-center items-center ml-40 h-[50px] mt-20'>
        <form>
          <div className="flex gap-4  mb-6">
          <div className="relative group w-[500px]">
              <input
                className="w-full bg-transparent text-white border-2 border-white rounded-xl py-3 px-4 hover:border-teal-400 focus:border-teal-400 focus:outline-none transition duration-300 ease-in-out peer"
                id="name"
               type="text"
               required
             />
             <label
               htmlFor="name"
               className="absolute left-4 top-3 text-white transition-all duration-300 transform -translate-y-1 scale-100 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-black peer-focus:text-teal-400 group-hover:text-teal-400 group-hover:bg-black"
             >
               Name
             </label>
            </div>

            <div className="relative group w-[500px]">
              <input
                className="w-full bg-transparent text-white border-2 border-white rounded-xl py-3 px-4 hover:border-teal-400 focus:border-teal-400 focus:outline-none transition duration-300 ease-in-out peer"
                id="phone"
               type="text"
               required
             />
             <label
               htmlFor="name"
               className="absolute left-4 top-3 text-white transition-all duration-300 transform -translate-y-1 scale-100 pointer-events-none peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-black peer-focus:text-teal-400 group-hover:text-teal-400 group-hover:bg-black"
             >
               Phone Number
             </label>
            </div>


            

            
          </div>

          <div className='mt-20 relative group w-[1020px]'>

          
               <textarea
                 id="message"
                 name="message"
                 className="w-full py-10 bg-transparent text-white border-2 border-white rounded-xl px-4 hover:border-teal-400 focus:border-teal-400
                   focus:outline-none transition duration-300 ease-in-out peer"
                 required
               ></textarea>
               <label
                 htmlFor="message"
                 className="absolute left-4 top-16 text-white transition-all duration-300 transform -translate-y-1 scale-100 
                   peer-focus:-translate-y-20 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:bg-black
                   group-hover:text-teal-400 group-hover:bg-black"
               >
                 Message
               </label>
              </div>


          

          
        </form>
      </div>
    </div>
  )
}

export default Contact
