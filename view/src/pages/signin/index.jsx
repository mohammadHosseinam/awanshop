import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <div className='m-12 mx-auto w-3/4 md:w-1/2 xl:w-1/3 h-fit'>
                <TextFieild label="نام کاربری" />
                <TextFieild label="شماره تلفن" />
                <TextFieild label="رمز عبور" />
                <TextFieild label="تکرار رمز عبور" />
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton className="px-10" text="ساخت حساب" />
                </div>
                <div className='flex gap-1 items-center w-fit mx-auto mt-3'>
                    <p style={{ fontSize: "10px" }} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری دارید؟</p>
                    <Link style={{ color: "#5C99F4" }} to="/login" className='font-vazirmatn font-semibold text-xs'>ورود حساب</Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn