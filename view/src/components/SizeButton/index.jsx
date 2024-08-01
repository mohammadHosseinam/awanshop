import React from 'react'

function SizeButton({size , color , click}) {
  return (
    <button onClick={click} style={{borderColor :color , color:color , lineHeight:"100%"}} className='rounded-full flex justify-center items-center w-6 md:w-7 lg:w-9 h-6 md:h-7 lg:h-9 border text-xs md:text-base lg:text-xl font-vazirmatn'>
        {size}
    </button>
  )
}

export default SizeButton