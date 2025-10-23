import React, { useRef, useState, useEffect } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import Logo from "../../assets/images/AWAN LOGO.png"
import AuthBG from "../../assets/images/authBG.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOtpSent } from '../../store/slices/OTPcode'
import { toast } from 'react-toastify';
import { handelSignInService, handelLoginService } from '../../api/services'
import Cookies from 'js-cookie';
import OTPInput from '../../components/OTPInput'

function VerifySignIn() {
    const dispatch = useDispatch()
    const OTPphoneNumber = useSelector((state) => state.OTPphoneNumber);
    const navigate = useNavigate()
    const otpRef = useRef();
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(0);
    const backUrl = new URLSearchParams(location.search).get('backUrl') || "/dashboard";

    const handelSignUpButton = async () => {
        const otpValue = otpRef.current?.getOtp(); 
        if (!OTPphoneNumber || !otpValue || otpValue.length < 5) {
            toast.error("لطفا همه فیلدها را پر کنید.");
            return;
        }
        dispatch(setOtpSent(otpValue));

        try {
            const response = await handelSignInService({ phoneNumber: OTPphoneNumber, otp: otpValue });
            if (response?.status === 200) {
                const token = response.data.token;
                Cookies.set('authToken', token, { expires: 30, secure: true, sameSite: 'Strict' });
                toast.success("ورود با موفقیت انجام شد!");
                navigate(backUrl);
            } else {
                toast.error(response.response?.data?.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };

    const resendOtp = async () => {
        console.log("resend")
        if (!OTPphoneNumber || timer > 0) return; // جلوگیری از ارسال دوباره قبل از پایان تایمر
        setLoading(true)
        try {
            const response = await handelLoginService({ phoneNumber: OTPphoneNumber });
            if (response?.status === 200) {
                toast.success("کد تایید دوباره ارسال شد!");
                otpRef.current?.clearOtp(); // پاک کردن OTP قبلی
                setTimer(30); // تایمر 30 ثانیه
            } else {
                toast.error(response.response?.data?.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        } finally {
            setLoading(false)
        }
    }

    // شمارش معکوس تایمر
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className='h-screen flex flex-col justify-center bg-cover bg-center' style={{ backgroundImage: `url(${AuthBG})` }}>
            <div className='bg-white bg-opacity-70 w-1/3 border border-[#838383] border-opacity-25 rounded-xl mx-auto p-6 flex flex-col gap-5'>
                <img className='mx-auto' src={Logo} alt="logo image" />
                <div className='mx-auto w-full flex flex-col gap-5'>
                    <h1 className='text-xl font-semibold text-[#27282C]'>
                        کد تایید به شماره <span className='text-xl font-semibold text-[#1B82C2]'>{OTPphoneNumber}</span> ارسال شد
                    </h1>

                    <OTPInput ref={otpRef} />

                    <div className='flex gap-2 w-full mx-auto mt-2 justify-between'>
                        <p className='text-[#56565F] text-sm font-bold'>کد تایید ارسال نشد؟</p>
                        <button
                            disabled={timer > 0 || loading}
                            onClick={resendOtp}
                            className={` ${timer > 0 ? "text-[#56565F]" : "text-[#1B82C2]"} text-sm font-bold`}
                        >
                            {timer > 0 ? `00:${timer}` : loading ? "در حال ارسال..." : "ارسال دوباره"}
                        </button>
                    </div>

                    <div className=''>
                        <div className="w-full mx-auto">
                            <PrimaryButton className="px-10" text="ورود به حساب" click={handelSignUpButton} />
                        </div>
                        <div className='flex gap-2 w-full mx-auto mt-2 justify-between'>
                            <p className='text-[#56565F] text-sm font-bold'>شماره اشتباه است؟</p>
                            <Link to={`/signin?backUrl=${backUrl}`} className='text-[#1B82C2] text-sm font-bold'>تغییر شماره</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VerifySignIn
