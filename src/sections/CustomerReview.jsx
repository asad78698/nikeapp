import React from 'react'
import Reviewcard from '../Components/Reviewcard'
import { reviews } from '../constants'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our  
         <span className='text-coral-red '> Customer </span>
        Says?
      </h3>

      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stores from our customers. See how our shoes has changed their
        lives and how they feel about it. We are very proud of our shoes and the
        impact it has had on our customers.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      
      
      {reviews.map((review) => (
            <Reviewcard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
           ))}


      </div>
    </section>
  )
}

export default CustomerReview