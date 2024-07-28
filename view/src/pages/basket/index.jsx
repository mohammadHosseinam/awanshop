import React from 'react'
import Header from '../../layout/header'
import PrimaryButton from '../../components/PrimaryButton'
import BasketCard from './BasketCard'


function Basket() {
    return (
        <div>
            <Header />
            <div style={{ height: "calc(100vh - 144px)"}} className='pt-5 px-10 sm:px-12 md:px-24 lg:px-36 xl:px-48 overflow-scroll scrollbar-hide'>
                <h1 className='font-vazirmatn text-xs sm:text-sm md:text-base md:font-medium  text-slate-900 font-semibold mb-1'>سبد خرید شما</h1>
                <div style={{boxShadow : "0px 1px 4px rgba(0, 0, 0, 0.15)",borderRadius :"6px" , minHeight:"calc(100% - 35px)"}} className='flex flex-col gap-3 p-3'>
                    <BasketCard/>
                    <BasketCard/>
                    <BasketCard/>
                </div>
            </div>
            <div className='flex px-8 sm:px-10 md:px-12 lg:px-24 xl:px-32 items-center h-16 shadow-inner z-10 bg-white'>
                <div className="grow">
                    <PrimaryButton text="تایید و تکمیل خرید" click={() => { console.log("add to basket") }} />
                </div>
                <div className=' \'>
                    <p className='font-vazirmatn text-xs mb-2 text-end text-slate-400'>جمع سبد خرید</p>
                    <div className='flex items-center'>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light text-slate-900'>تومان</p>
                        <h2 className='mr-1 font-vazirmatn font-medium text-base text-slate-900'>450000</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket