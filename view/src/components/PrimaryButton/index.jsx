import React from 'react'

function PrimaryButton({text , click}) {
  return (
    <button style={{background: "linear-gradient(96.9deg, rgba(75, 225, 163, 0.88) 0%, rgba(74, 221, 168, 0.63) 100%)"}} className='py-2 px-6 shadow-sm rounded-md font-vazirmatn text-sm text-fafafa' onClick={click}>{text}</button>
  )
}

export default PrimaryButton