import React from 'react'
import productImage from "../../assets/images/product.jpg"
import StarIcon from '../../assets/icons/starIcon'
function ProductCard() {
    return (
        <div className="flex-shrink-0 max-w-screen-md shadow-md w-44 rounded-2xl p-2.5 m-4 bg-fafafa">
            <img className='h-32 w-full rounded-xl' src={productImage} alt="product image" height={121} />
            <p className='text-sm font-vazirmatn text-neutral-800 font-medium pt-3'>شلوار اسکینی old navy</p>
            <div className='flex flex-row-reverse items-center gap-1'>
                <StarIcon/>
                <p className='text-xs font-vazirmatn '>4.1</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-1'>
                <p className='text-xs font-vazirmatn'>تومان</p>
                <h5 className='font-vazirmatn text-sm'>{450000}</h5>
            </div>
        </div>
    )
}

export default ProductCard