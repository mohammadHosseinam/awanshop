import React from 'react'
import TickIcon from '../../assets/icons/TickIcon'

function ColorButton({color}) {
  return (
    <button style={{backgroundColor : color}} className='border-none rounded-full flex justify-center items-center w-6 h-6 md:w-7 lg:w-9 md:h-7 lg:h-9 shadow-md'>
        
    </button>
  )
}

export default ColorButton