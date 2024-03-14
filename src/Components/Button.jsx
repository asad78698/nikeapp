import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    
    <button className='flex justify-center items-center bg-orange-600 text-white leading-none px-7 py-3 gap-2 rounded-full'>
        {label}
        {iconURL &&  <img className='ml-2 rounded-full w-5 h-5'src={iconURL}
        />}
    </button>

  )
}

export default Button