import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      


      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 '>
          <p>Welcome to Prescripto, Your trusted partener in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges indivisuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur? voluptas asperiores quae dolore reiciendis recusandae nostrum quia ducimus qui? Ad officia eaque et dicta vitae at quod ex inventore quo?</p>
          <b className='text-gray-800 '>Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, illum voluptate. Animi distinctio obcaecati voluptas laboriosam, sed tempora quod consequatur?</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:oy-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
       </div>
       <div  className='border px-10 md:px-16 py-8 sm:oy-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare prefosionals in your area.</p>
       </div>
       <div  className='border px-10 md:px-16 py-8 sm:oy-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
       </div>
      </div>
    </div>
  )
}

export default About
