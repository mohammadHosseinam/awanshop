import React, { useEffect, useState } from 'react'
import ColorButton from '../../../components/ColorButton'
import { uploadsURL } from "../../../api/constants"
import TrashIcon from '../../../assets/icons/trash'
import MinesIcon from '../../../assets/icons/mines'
import PlusIcon from '../../../assets/icons/plus'

function BasketCard({ name, count, image, size, id, colorName, colorCode, price, discount , updateBasket , basket}) {
    const [ProductCount ,setCount] = useState(count)

    useEffect(() => {
        setCount(count);  // همگام‌سازی مقدار count با مقدار جدید basket
    }, [count]);
   
    const handleIncreaseProductCount = () => {
        // افزایش تعداد محصول در state و ذخیره در localStorage
        const updatedCount = ProductCount + 1;
        setCount(ProductCount + 1)
        // بروزرسانی localStorage
        const productIndex = basket.findIndex(item => item.id === id && item.size === size);
        if (productIndex !== -1) {
            basket[productIndex].count = updatedCount;
            localStorage.setItem("OrderBasket", JSON.stringify(basket));
        }
        updateBasket()
    };
    const handleDecreaseProductCount = () => {
        // کاهش تعداد محصول در state و ذخیره در localStorage
        if (ProductCount > 1) {
            const updatedCount = ProductCount - 1;
            setCount(ProductCount - 1)
            // بروزرسانی localStorage
            const productIndex = basket.findIndex(item => item.id === id && item.size === size);
            if (productIndex !== -1) {
                basket[productIndex].count = updatedCount;
                localStorage.setItem("OrderBasket", JSON.stringify(basket));
            }
            updateBasket()
        }
    };
    const handleRemoveProduct = () => {
        // حذف محصول از سبد خرید
        // بروزرسانی localStorage
        const updatedBasket = basket.filter(item => !(item.id === id && item.size === size));
        localStorage.setItem("OrderBasket", JSON.stringify(updatedBasket));
        // setCount(ProductCount - 1)
        updateBasket()
    };
    
    return (
        <div style={{ border: "1px solid rgb(224, 224, 226)" }} className='rounded flex p-2 text-center'>
            <div>
                <img className='w-20 h-20 border border-slate-200 rounded' src={uploadsURL + image} alt="product image" />
                <div className='flex justify-center gap-2 py-1 border border-neutral-300 w-fit px-1 rounded h-fit mx-auto mt-1'>
                    <div className='flex gap-2 items-center py-2 px-4 border w-fit rounded-lg'>
                        <button onClick={handleIncreaseProductCount}><PlusIcon /></button>
                        <p>{ProductCount}</p>
                        {ProductCount == 1 ? <button onClick={handleRemoveProduct}><TrashIcon /></button> : <button onClick={handleDecreaseProductCount}><MinesIcon /></button>}
                    </div>
                </div>
            </div>
            <div className='mr-3 flex flex-col justify-between'>
                <h4 className='font-vazirmatn text-base'>{name}</h4>
                <div className='flex items-center gap-2'>
                    <p className='font-vazirmatn text-xs'>رنگ :</p>
                    <ColorButton color={colorCode} />
                </div>
                <div className='flex items-center gap-2'>
                    <span className='font-vazirmatn text-xs'>سایز :</span>
                    <p className='font-vazirmatn text-sm font-medium'>{size}</p>
                </div>
                {
                    discount ? (<div className='flex-col flex items-end'>
                        <div className='flex items-center'>
                            <span className=' px-2 py-1 bg-red-500 text-white text-xs rounded ml-2'>{discount} %</span>
                            <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-600'>تومان</p>
                            <h2 className='mr-1 line-through font-vazirmatn font-semibold text-base md:text-xl lg:text-base text-slate-600'>{price ? new Intl.NumberFormat('fa-IR').format(price) : "۰"}</h2>
                        </div>
                        <div className='flex items-center'>
                            <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-900'>تومان</p>
                            <h2 className='mr-1 font-vazirmatn font-semibold text-base md:text-xl lg:text-2xl text-slate-900'>{price ? new Intl.NumberFormat('fa-IR').format(price * (100 - discount) / 100) : "۰"}</h2>
                        </div>
                    </div>) : (<div className='flex items-center gap-1'>
                    <p className='font-vazirmatn font-medium'>{new Intl.NumberFormat('fa-IR').format(price)}</p>
                    <span className='font-vazirmatn text-xs font-light'>تومان</span>
                </div>)
                }
                
            </div>
        </div>
    )
}

export default BasketCard