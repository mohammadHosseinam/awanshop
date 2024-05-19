import React from 'react'
import image from "../../assets/images/product.jpg"
import ColorButton from '../ColorButton'

function OrderProductCart() {
    return (
        <div className='rounded flex  text-center'>
            <div className='w-20 h-20 shrink-0'>
                <img className='w-20 h-20 border border-slate-200 rounded' src={image} alt="product image" />
            </div>
            <div className='mr-3 flex flex-col justify-between w-full'>
                <h4 className='font-vazirmatn text-base text-right'>شلوار اسکینی old navy</h4>
                <div className='flex gap-12'>
                    <div className='flex items-center gap-2'>
                        <p className='font-vazirmatn text-xs'>رنگ :</p>
                        <ColorButton color={"#4743DE"} size="18px" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-vazirmatn text-xs'>سایز :</span>
                        <p className='font-vazirmatn text-sm font-medium'>42</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 grow'>
                        <span className='font-vazirmatn text-xs'>تعداد :</span>
                        <p className='font-vazirmatn text-sm font-medium'>2</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-vazirmatn font-medium'>450,000</p>
                        <span className='font-vazirmatn text-xs font-light'>تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProductCart