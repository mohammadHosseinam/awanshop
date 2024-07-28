import React from 'react'
import Header from '../../layout/header'
import Texterea from '../../components/Texterea'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'

function ComplitOrder() {
    return (
        <div>
            <Header />
            <div style={{ height: "calc(100vh - 144px)"}} className='mx-auto w-3/4 md:w-1/2 lg:w-1/3 flex flex-col justify-center'>
                <h1 className='font-vazirmatn text-xs sm:text-sm lg:text-base text-slate-900 font-medium mb-3'>تکمیل سفارش</h1>
                <div className='p-5 rounded-lg shadow'>
                    <TextFieild label="نام و نام خانوادگی " />
                    <TextFieild label="شماره تلفن" />
                    <TextFieild label="کد پستی" />
                    <Texterea label="آدرس" placeholder="استان شهر و ..." />
                </div>
            </div>
            <div className='flex px-8 sm:px-10 md:px-12 lg:px-24 xl:px-32 items-center h-16 shadow-inner'>
                <div className="grow">
                    <PrimaryButton text="پرداخت" click={() => { console.log("add to basket") }} />
                </div>
                <div>
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

export default ComplitOrder