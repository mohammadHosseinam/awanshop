import React from 'react'
import logo from "../../assets/images/awanLogo.png"
import InstagramLogo from '../../assets/icons/instagramLogo'
import PhoneNumberIcon from '../../assets/icons/phoneNumberIcon'
function Footer() {
  return (
    <div>
      <div className='flex justify-around py-2'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1 items-center'>
            <img className='w-7 h-7' src={logo} alt="logo" />
            <h2 style={{ color: "#3E673E" }} className='font-vazirmatn font-medium text-xs'>آوان شاپ</h2>
          </div>
          <div className='flex gap-1 items-center'>
            <InstagramLogo />
            <a href='#' style={{ color: "#44DCAE" }} className='font-vazirmatn text-sm'><p>awanshop.ir</p></a>
          </div>
          <div className='flex gap-1 items-center'>
            <PhoneNumberIcon />
            <a href='#' style={{ color: "#44DCAE" }} className='font-vazirmatn text-sm'>09154047008</a>
          </div>
          <p className='text-sm font-vazirmatn text-slate-900'>ارسال رایگان در <span className='text-secoundry font-medium'>مشهد</span></p>
          <p className='text-sm font-vazirmatn text-slate-900'>ارسال کالا به تمام کشور</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>تاییده ها:</p>
          <div className='w-14 h-14 bg-slate-300'></div>
        </div>
      </div>
      <p style={{direction : "ltr"}} className='text-center font-sans text-xs mb-1'>© 2024 awanshop All Rights Reserved.</p>
    </div>
  )
}

export default Footer