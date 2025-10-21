import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setOtpSent } from '../../store/slices/OTPcode'
import { toast } from 'react-toastify';
import { handelSignInService } from '../../api/services'
import Cookies from 'js-cookie';

function VerifySignIn() {
    const dispatch = useDispatch()
    const OTPphoneNumber = useSelector((state) => state.OTPphoneNumber);
    const OTPcode = useSelector((state) => state.OTPcode);
    const navigate = useNavigate()
    const handleTextfieldChange = (e) => {
        dispatch(setOtpSent(e.target.value));
    };
    console.log(OTPphoneNumber)
    const queryParams = new URLSearchParams(location.search);
    const backUrl = queryParams.get('backUrl') || "/dashboard";
    const handelSignUpButton = async () => {
        if (!OTPphoneNumber) {
            alert("لطفا همه فیلدها را پر کنید.");
            return;
        }
        try {
            const response = await handelSignInService({phoneNumber : OTPphoneNumber , otp :  OTPcode});
            console.log(response)
            if (response?.status === 200) {
                const token = response.data.token;
                // ذخیره توکن در کوکی به مدت یک ماه
                Cookies.set('authToken', token, { expires: 30, secure: true, sameSite: 'Strict' });
                //admin : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2NlMjEwOGI2ZjliNDYzYTFhZmZhNTYiLCJwaG9uZU51bWJlciI6IjA5MDMyMTUzNjAwIiwiaWF0IjoxNzQyOTg1ODQ3LCJleHAiOjE3NDU1Nzc4NDd9.OVaR-zTLKALHFTeVRvcxHtO9T55bLIMIKa8hyFgIQn4
                toast.success("ورود با موفقیت انجام شد!");
                navigate(backUrl);
            } else {
                console.log(response)
                toast.error(response.response.data.message);
            }
        } catch (error) {
            console.log({phoneNumber : OTPphoneNumber , otp :  OTPcode})
            console.log(error)
            toast.error(error.response?.data?.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };
    console.log(OTPphoneNumber)

    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <div className='m-12 mx-auto w-3/4 md:w-1/2 xl:w-1/3 h-fit'>
                <TextFieild label="کد تایید" value={OTPcode} onChange={(e) =>handleTextfieldChange(e)}/>
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton className="px-10" text="ورود به حساب" click={handelSignUpButton} />
                </div>
                <div className='flex gap-1 items-center w-fit mx-auto mt-3'>
                    <p style={{ fontSize: "10px" }} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری دارید؟</p>
                    <Link style={{ color: "#5C99F4" }} to="/signIn" className='font-vazirmatn font-semibold text-xs'>ورود حساب</Link>
                </div>
            </div>
        </div>
    )
}

export default VerifySignIn