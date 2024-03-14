import React from 'react'
import Header from '../../layout/header'
import SuccessIcon from '../../assets/icons/successIcon'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'
import Footer from '../../layout/footer'

function SuccessPayment() {
  return (
    <>
        <Header/>
        <div style={{ height: "calc(100vh - 252px)"}} className='flex flex-col justify-center items-center gap-1 border-2'>
            <SuccessIcon/>
            <h1 className='font-vazirmatn text-xs text-slate-900 font-medium'>خرید شما با موفقیت انجام شد</h1>
            <PrimaryInlineButton text="رفتن به حساب کاربری"/>
        </div>
        <Footer/>
    </>
  )
}

export default SuccessPayment