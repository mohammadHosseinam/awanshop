import React from 'react'
import TickIcon from '../../assets/icons/TickIcon'

function ColorButton({color , size="24px"}) {
  return (
    <button style={{backgroundColor : color , width : size , height : size}} className='border-none rounded-full flex justify-center items-center w-6 h-6'>
        <TickIcon/>
    </button>
  )
}

export default ColorButton