import React from 'react'
import logo from "../../assets/images/AWAN LOGO white.png"
import FooterBG from "../../assets/images/FooterBG.png"

import InstagramLogo from '../../assets/icons/instagramLogo'
import PhoneNumberIcon from '../../assets/icons/phoneNumberIcon'
function Footer() {
  return (
    <div className="flex flex-col w-full justify-between min-h-[580px] bg-cover bg-center relative mt-40" style={{ backgroundImage: `url(${FooterBG})` }}>
      <div className='bg-[#1D1D21] w-3/4 absolute top-0 -translate-y-1/2 h-32 left-1/2 -translate-x-1/2 p-5 border border-white rounded-3xl flex'>
        <div className='flex w-1/3 justify-center items-center '>
          <div className='flex gap-3'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_341_362)">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_341_362">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-white text-base h-12'>مشهد ، بلوار پیروزی ، بین پیروزی 12 و چهارراه خاقانی</p>
            <div />
          </div>

        </div>
        <div className='flex w-1/3 justify-center items-center border-x border-white border-opacity-50'>
          <div className='flex gap-3'>
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_341_368)">
                <path d="M10.5047 6.60928C7.52341 6.60928 5.11873 9.01396 5.11873 11.9952C5.11873 14.9765 7.52341 17.3812 10.5047 17.3812C13.4859 17.3812 15.8906 14.9765 15.8906 11.9952C15.8906 9.01396 13.4859 6.60928 10.5047 6.60928ZM10.5047 15.4968C8.5781 15.4968 7.0031 13.9265 7.0031 11.9952C7.0031 10.064 8.57341 8.49365 10.5047 8.49365C12.4359 8.49365 14.0062 10.064 14.0062 11.9952C14.0062 13.9265 12.4312 15.4968 10.5047 15.4968ZM17.3672 6.38896C17.3672 7.0874 16.8047 7.64522 16.1109 7.64522C15.4125 7.64522 14.8547 7.08271 14.8547 6.38896C14.8547 5.69521 15.4172 5.13271 16.1109 5.13271C16.8047 5.13271 17.3672 5.69521 17.3672 6.38896ZM20.9344 7.66397C20.8547 5.98115 20.4703 4.49053 19.2375 3.2624C18.0094 2.03428 16.5187 1.6499 14.8359 1.56553C13.1015 1.46709 7.9031 1.46709 6.16873 1.56553C4.4906 1.64521 2.99998 2.02959 1.76716 3.25771C0.534351 4.48584 0.154663 5.97646 0.0702881 7.65928C-0.0281494 9.39365 -0.0281494 14.5921 0.0702881 16.3265C0.149976 18.0093 0.534351 19.4999 1.76716 20.728C2.99998 21.9562 4.48591 22.3405 6.16873 22.4249C7.9031 22.5233 13.1015 22.5233 14.8359 22.4249C16.5187 22.3452 18.0094 21.9608 19.2375 20.728C20.4656 19.4999 20.85 18.0093 20.9344 16.3265C21.0328 14.5921 21.0328 9.39834 20.9344 7.66397ZM18.6937 18.1874C18.3281 19.1062 17.6203 19.814 16.6969 20.1843C15.314 20.7327 12.0328 20.6062 10.5047 20.6062C8.97654 20.6062 5.6906 20.728 4.31248 20.1843C3.39373 19.8187 2.68591 19.1108 2.3156 18.1874C1.76716 16.8046 1.89373 13.5233 1.89373 11.9952C1.89373 10.4671 1.77185 7.18115 2.3156 5.80303C2.68123 4.88428 3.38904 4.17646 4.31248 3.80615C5.69529 3.25771 8.97654 3.38428 10.5047 3.38428C12.0328 3.38428 15.3187 3.2624 16.6969 3.80615C17.6156 4.17178 18.3234 4.87959 18.6937 5.80303C19.2422 7.18584 19.1156 10.4671 19.1156 11.9952C19.1156 13.5233 19.2422 16.8093 18.6937 18.1874Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_341_368">
                  <rect width="21" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-white text-base h-12'>awanshop.ir</p>
            <div />
          </div>
          
        </div>
        <div className='flex w-1/3 justify-center items-center'>
            <div className='flex gap-3'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.78 15.27L7.32 14.98C7.93 14.91 8.53 15.12 8.96 15.55L10.8 17.39C13.63 15.95 15.95 13.64 17.39 10.8L15.54 8.95002C15.11 8.52002 14.9 7.92002 14.97 7.31002L15.26 4.79002C15.38 3.78002 16.23 3.02002 17.25 3.02002H18.98C20.11 3.02002 21.05 3.96002 20.98 5.09002C20.45 13.63 13.62 20.45 5.09 20.98C3.96 21.05 3.02 20.11 3.02 18.98V17.25C3.01 16.24 3.77 15.39 4.78 15.27Z" fill="white" />
              </svg>
              <p className='text-white text-base h-12'>0937 975 3779</p>
            </div>
          </div>
        </div>
        <div className='flex py-2 pt-36 px-20 w-full gap-16 h-full flex-wrap grow'>
          <div className='flex flex-col gap-6 grow '>
            <div className='flex gap-1 items-center'>
              <img src={logo} alt="logo" />
            </div>
            <p className='text-xl font-semibold text-white w-[505px]'>ترکیبی از طراحی مدرن، پارچه‌های باکیفیت و دوختی بی‌نقص، برای کسانی که به دنبال چیزی فراتر از مد هستند. در آوان شاپ، هر کت، شومیز و شلوار، بازتابی از ظرافت و سلیقه‌ی شماست.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-xl text-white font-bold'>صفحه های مفید</p>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="/shop">فروشگاه</a>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="/basket">سبد خرید</a>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="/aboutUs">ارتباط با ما</a>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-xl text-white font-bold'>محصولات پر فروش</p>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="#">محصول تست</a>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="#">محصول تست</a>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="#">محصول تست</a>
            <a className='text-base pr-2 font-medium text-white opacity-60 hover:text-[#193F91] hover:opacity-100' href="#">محصول تست</a>

          </div>
          <div className='flex flex-col items-center gap-3'>
            <p className='text-xl text-white font-bold'>تاییده ها</p>
            <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=617648&Code=ovzCxqCGB0Xcpnd5KwGcb205SXHDRcN1'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=617648&Code=ovzCxqCGB0Xcpnd5KwGcb205SXHDRcN1' className='h-20 w-20 text-white' alt='enamad' style={{ cursor: 'pointer' }} code='ovzCxqCGB0Xcpnd5KwGcb205SXHDRcN1' /></a>
          </div>
        </div>
        <p style={{ direction: "ltr" }} className='text-center text-white font-bold text-base mb-6'>© 2025 awanshop All Rights Reserved.</p>
      </div>
      )
}

      export default Footer