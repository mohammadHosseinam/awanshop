import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"
function Login() {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <div className='m-12 mx-auto w-3/4 md:w-1/2 xl:w-1/3 h-fit'>
                <TextFieild label="نام کاربری" />
                <TextFieild label="رمز عبور" />
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton text="ورود به حساب کاربری" />
                </div>
                <div className='flex gap-2 w-fit mx-auto mt-3'>
                    <p style={{fontSize:"10px"}} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری ندارید؟</p>
                    <a style={{color : "#5C99F4"}} href="#" className='font-vazirmatn font-semibold text-xs'>ساخت حساب</a>
                </div>
            </div>
        </div>
    )
}

export default Login