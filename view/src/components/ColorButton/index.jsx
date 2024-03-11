import React from 'react'
import TickIcon from '../../assets/icons/TickIcon'

function ColorButton({color}) {
  return (
    <button style={{backgroundColor : color}} className='border-none rounded-full flex justify-center items-center w-6 h-6'>
        <TickIcon/>
    </button>
  )
}

export default ColorButton