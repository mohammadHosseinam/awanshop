import React from 'react'
import ColorButton from '../ColorButton'
import { uploadsURL } from '../../api/constants'

function OrderProductCart({img={image} , name="شلوار اسکینی old navy" , count="2" , color="#4743DE",size="42" , price="450,000"}) {
    return (
        <div className='rounded flex  text-center'>
            <div className='w-20 h-20 shrink-0'>
                <img className='w-20 h-20 border border-slate-200 rounded' src={uploadsURL + img} alt="product image" />
            </div>
            <div className='mr-3 flex flex-col justify-between w-full'>
                <h4 className='font-vazirmatn text-base text-right'>{name}</h4>
                <div className='flex gap-12'>
                    <div className='flex items-center gap-2'>
                        <p className='font-vazirmatn text-xs'>رنگ :</p>
                        <ColorButton color={color} size="18px" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='font-vazirmatn text-xs'>سایز :</span>
                        <p className='font-vazirmatn text-sm font-medium'>{size}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2 grow'>
                        <span className='font-vazirmatn text-xs'>تعداد :</span>
                        <p className='font-vazirmatn text-sm font-medium'>{count}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='font-vazirmatn font-medium'>{price}</p>
                        <span className='font-vazirmatn text-xs font-light'>تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderProductCart