import React, { useRef, useState, useEffect } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import AuthBG from "../../assets/images/authBG.png"
import Logo from "../../assets/images/AWAN LOGO.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handelVerifyOTPAndRegisterService, handelSignUpService } from '../../api/services'
import { setOtpSent } from '../../store/slices/OTPcode'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import OTPInput from '../../components/OTPInput'

function VerifySignUp() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const OTPphoneNumber = auth.phoneNumber; // شماره کاربر
    const navigate = useNavigate()
    const otpRef = useRef(); // Ref برای OTPInput
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(0);
    const backUrl = new URLSearchParams(location.search).get('backUrl') || "/dashboard";

    // ثبت نام
    const handelSignUpButton = async () => {
        const otpValue = otpRef.current?.getOtp();
        if (!auth.firstName || !auth.lastName || !auth.phoneNumber || !otpValue || otpValue.length < 5) {
            toast.error("لطفا همه فیلدها را پر کنید.");
            return;
        }
        dispatch(setOtpSent(otpValue));

        try {
            const response = await handelVerifyOTPAndRegisterService({...auth, otp: otpValue});
            if (response?.status === 200) {
                const token = response.data.token;
                Cookies.set('authToken', token, { expires: 30, secure: true, sameSite: 'Strict' });
                toast.success("ثبت‌نام با موفقیت انجام شد!");
                otpRef.current?.clearOtp(); // پاک کردن OTP
                navigate(backUrl);
            } else {
                toast.error(response.response?.data?.message);
            }
        } catch (error) {
            console.error("خطا در ثبت نام:", error);
            toast.error(error.response?.data?.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };

    // ارسال دوباره OTP
    const resendOtp = async () => {
        if (!OTPphoneNumber || timer > 0) return;
        setLoading(true)
        try {
            const response = await handelSignUpService(auth);
            if (response?.status === 200) {
                toast.success("کد تایید دوباره ارسال شد!");
                otpRef.current?.clearOtp();
                setTimer(30); // تایمر ۳۰ ثانیه
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
                            <Link to={`/signIn?backUrl=${backUrl}`} className='text-[#1B82C2] text-sm font-bold'>تغییر شماره</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VerifySignUp