import React from 'react'

function PrimaryButton({text , click , className}) {
  return (
    <button className={`py-2 px-6 shadow-sm w-full font-semibold rounded-lg h-14 text-sm md:text-base lg:text-xl bg-[#7C1616] text-fafafa ${className}`} onClick={click}>{text}</button>
  )
}

export default PrimaryButton