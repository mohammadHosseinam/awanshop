import React from 'react'

function ProductAttrebute({attrebut , value}) {
  return (
    <div className='bg-neutral-100 px-3 py-1 rounded w-fit h-fit'>
        <p style={{fontSize: "12px"}} className='font-vazirmatn text-neutral-500 text-center'>{attrebut}</p>
        <p style={{fontSize: "12px"}} className='font-vazirmatn text-neutral-700 font-semibold text-center'>{value}</p>
    </div>
  )
}

export default ProductAttrebute