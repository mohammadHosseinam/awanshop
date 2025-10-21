import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"
import { Link, useNavigate } from 'react-router-dom'
import { handelLoginService } from '../../api/services'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { setOtpNumber } from '../../store/slices/OTPphoneNumber'

const loginSchema = yup.object({
    phoneNumber: yup.string().required('نام محصول الزامی است'),
});
function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema),
    });
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // دریافت backUrl از query params
    const queryParams = new URLSearchParams(location.search);
    const backUrl = queryParams.get('backUrl') || "/dashboard";
    const handleLoginButton = async (data) => {
        if (!data.phoneNumber) {
            toast.error("لطفا شماره تلفن را وارد کنید.");
            return;
        }
        try {
            const response = await handelLoginService(data);
            if (response?.status === 200) {
                console.log(data.phoneNumber)
                dispatch(setOtpNumber(data.phoneNumber))
                navigate(`/VerifySignIn?backUrl=${backUrl}`);
            } else {
                toast.error(response.response?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };
    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <form onSubmit={handleSubmit(handleLoginButton)} className='m-12 mx-auto w-3/4 md:w-1/2 xl:w-1/3 h-fit'>
                <TextFieild label="شماره همراه" register={{ ...register('phoneNumber') }} error={errors.phoneNumber} />
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton text="ورود به حساب کاربری" />
                </div>
                <div className='flex gap-2 w-fit mx-auto mt-3'>
                    <p style={{ fontSize: "10px" }} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری ندارید؟</p>
                    <Link style={{ color: "#5C99F4" }} to={`/signUp?backUrl=${backUrl}`} className='font-vazirmatn font-semibold text-xs'>ساخت حساب</Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn