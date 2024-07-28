import React from 'react'
import Header from '../../layout/header'
import UserIcon from '../../assets/icons/userIcon'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'
import OrderCardAdmin from './OrderCardAdmin'
import Footer from '../../layout/footer'

function AdminPanel() {
    return (
        <>
            <Header />
            <div className='pt-7  px-6 sm:px-10 md:px-16 lg:px-22 xl:px-24 pb-4'>
                <div className='flex items-center gap-2 mb-3'>
                    <UserIcon />
                    <div>
                        <h1 className='font-vazirmatn text-sm'>محمد حسین</h1>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light text-gray-500'>09032153600</p>
                    </div>
                </div>
                <PrimaryInlineButton text="ساخت محصول جدید" click={()=>{console.log("clicked")}} className="border border-black text-black py-1 text-xs px-3"/>
            </div>
            <div className='w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/4 mx-auto flex justify-between'>
                <button className='font-vazirmatn font-medium text-xs'>ارسال نشده ها</button>
                <button className='font-vazirmatn font-medium text-xs'>همه</button>
                <button className='font-vazirmatn font-medium text-xs'>مرجوعی ها</button>
            </div>
            <div>
                <OrderCardAdmin/>
                <OrderCardAdmin/>
            </div>
            <Footer/>
        </>
    )
}

export default AdminPanel