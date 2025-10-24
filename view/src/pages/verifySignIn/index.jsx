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
        <div
            className="min-h-screen flex flex-col justify-center bg-cover bg-center px-4 py-8 sm:px-6 md:px-10"
            style={{ backgroundImage: `url(${AuthBG})` }}
        >
            <div className="bg-white bg-opacity-70 w-full max-w-md sm:max-w-lg md:max-w-md border border-[#838383]/25 rounded-2xl mx-auto p-4 sm:p-6 md:p-8 flex flex-col gap-5 shadow-lg">
                {/* Logo */}
                <Link to={`/`} >
                    <img className='mx-auto' src={Logo} alt="logo image" />
                </Link>
                {/* Main content */}
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold text-[#27282C] leading-relaxed">
                        کد تایید به شماره{" "}
                        <span className="text-lg sm:text-xl font-semibold text-[#1B82C2]">
                            {OTPphoneNumber}
                        </span>{" "}
                        ارسال شد
                    </h1>

                    <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                        <OTPInput ref={otpRef} />
                    </div>

                    {/* Resend OTP */}
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

                    {/* Sign In */}
                    <div className="flex flex-col gap-3">
                        <div className="w-full mx-auto">
                            <PrimaryButton
                                className="w-full px-6 "
                                text="ورود به حساب"
                                click={handelSignUpButton}
                            />
                        </div>

                        <div className="flex flex-row gap-2 items-center justify-between text-sm sm:text-base">
                            <p className="text-[#56565F] font-bold">شماره اشتباه است؟</p>
                            <Link
                                to={`/signin?backUrl=${backUrl}`}
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

export default VerifySignIn
