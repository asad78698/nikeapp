import React from 'react'
import Button from '../Components/Button'
import {shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
     <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
     <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-montserrat text-4xl max-sm:text-[46px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            We Provide
          </span>
          <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes
        </h1>
        <p className='font-montserrat mt-4 lg:max-w-lg info-text text-justify' >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life. 
        </p> 
        <div className='mt-8'>
        <Button label='view Detail' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
   <img src={shoe8} width={560} height={520} className='object-contain'/>
      </div>
     
     </section>
  )
}

export default SuperQuality