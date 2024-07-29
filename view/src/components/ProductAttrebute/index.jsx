import React from 'react'

function ProductAttrebute({attrebut , value}) {
  return (
    <div className='bg-neutral-100 px-3 py-1 rounded w-fit h-fit'>
        <p className='font-vazirmatn text-neutral-500 text-center text-xs lg:text-lg'>{attrebut}</p>
        <p className='font-vazirmatn text-neutral-700 font-semibold text-center text-xs lg:text-lg'>{value}</p>
    </div>
  )
}

export default ProductAttrebute