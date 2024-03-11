import React from 'react'

function SizeButton({size , color}) {
  return (
    <button style={{borderColor :color , color:color , fontSize:"12px" , lineHeight:"100%"}} className='rounded-full flex justify-center items-center w-6 h-6 border font-vazirmatn'>
        {size}
    </button>
  )
}

export default SizeButton