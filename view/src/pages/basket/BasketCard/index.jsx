import React from 'react'
import image from "../../../assets/images/product.jpg"
import RecycleIcon from '../../../assets/icons/recycleIcon'
import PlusIcon from '../../../assets/icons/plusIcon'
import ColorButton from '../../../components/ColorButton'
function BasketCard() {
    return (
        <div style={{ border: "1px solid rgb(224, 224, 226)" }} className='rounded flex p-2 text-center'>
            <div>
                <img className='w-20 h-20 border border-slate-200 rounded' src={image} alt="product image" />
                <div className='flex justify-center gap-2 py-1 border border-neutral-300 w-fit px-1 rounded h-fit mx-auto mt-1'>
                    <button>
                        <PlusIcon />
                    </button>
                    <span className='text-xs'>1</span>
                    <button>
                        <RecycleIcon />
                        {/* <MinusIcon/> */}
                    </button>
                </div>
            </div>
            <div className='mr-3 flex flex-col justify-between'>
                <h4 className='font-vazirmatn text-base'>شلوار اسکینی old navy</h4>
                <div className='flex items-center gap-2'>
                    <p className='font-vazirmatn text-xs'>رنگ :</p>
                    <ColorButton color={"#4743DE"} size="18px" />
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-vazirmatn text-xs'>سایز :</span>
                    <p className='font-vazirmatn text-sm font-medium'>42</p>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='font-vazirmatn font-medium'>450,000</p>
                    <span className='font-vazirmatn text-xs font-light'>تومان</span>
                </div>
            </div>
        </div>
    )
}

export default BasketCard