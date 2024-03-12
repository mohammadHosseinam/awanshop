import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"

function SignIn() {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <div className='m-12 h-fit'>
                <TextFieild label="نام کاربری" />
                <TextFieild label="شماره تلفن" />
                <TextFieild label="رمز عبور" />
                <TextFieild label="تکرار رمز عبور" />
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton className="px-10" text="ساخت حساب" />
                </div>
                <div className='flex gap-1 items-center w-fit mx-auto mt-3'>
                    <p style={{ fontSize: "10px" }} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری دارید؟</p>
                    <a style={{ color: "#5C99F4" }} href="#" className='font-vazirmatn font-semibold text-xs'>ورود حساب</a>
                </div>
            </div>
        </div>
    )
}

export default SignIn