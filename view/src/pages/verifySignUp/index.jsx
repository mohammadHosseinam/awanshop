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
            const response = await handelVerifyOTPAndRegisterService({ ...auth, otp: otpValue });
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
        <div
            className="min-h-screen flex flex-col justify-center bg-cover bg-center px-4 py-8 sm:px-6 md:px-10"
            style={{ backgroundImage: `url(${AuthBG})` }}
        >
            <div className="bg-white bg-opacity-70 w-full max-w-md sm:max-w-lg md:max-w-md border border-[#838383]/25 rounded-2xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-6 shadow-lg">
                {/* Logo */}
                <Link to={`/`} >
                    <img className='mx-auto' src={Logo} alt="logo image" />
                </Link>

                {/* Main content */}
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-[#27282C] leading-relaxed">
                        کد تایید به شماره
                        <span className="text-lg sm:text-xl font-semibold text-[#1B82C2]">
                            {OTPphoneNumber}
                        </span>
                        ارسال شد
                    </h1>

                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <OTPInput ref={otpRef} />
                    </div>

                    {/* resend code */}
                    <div className="flex flex-row gap-2 items-center justify-between text-sm sm:text-base">
                        <p className="text-[#56565F] font-bold">کد تایید ارسال نشد؟</p>
                        <button
                            disabled={timer > 0 || loading}
                            onClick={resendOtp}
                            className={`${timer > 0 ? "text-[#56565F]" : "text-[#1B82C2]"
                                } font-bold transition-colors duration-200`}
                        >
                            {timer > 0
                                ? `00:${timer}`
                                : loading
                                    ? "در حال ارسال..."
                                    : "ارسال دوباره"}
                        </button>
                    </div>

                    {/* login button + change number */}
                    <div className="flex flex-col gap-3">
                        <div className="w-full">
                            <PrimaryButton
                                className="w-full px-6 sm:px-10"
                                text="ورود به حساب"
                                click={handelSignUpButton}
                            />
                        </div>

                        <div className="flex flex-row gap-2 items-center justify-between text-sm sm:text-base">
                            <p className="text-[#56565F] font-bold">شماره اشتباه است؟</p>
                            <Link
                                to={`/signIn?backUrl=${backUrl}`}
                                className="text-[#1B82C2] font-bold hover:underline"
                            >
                                تغییر شماره
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifySignUp