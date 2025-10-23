import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import Logo from "../../assets/images/AWAN LOGO.png"
import AuthBG from "../../assets/images/authBG.png"
import { Link, useNavigate } from 'react-router-dom'
import { handelLoginService } from '../../api/services'
import { toast } from 'react-toastify';
import { setOtpNumber } from '../../store/slices/OTPphoneNumber'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/slices/authSlice'

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    console.log(auth)
    const handleTextfieldChange = (field) => (e) => {
        dispatch(setUserInfo({ ...auth, [field]: e.target.value }));
    };
    // دریافت backUrl از query params
    const queryParams = new URLSearchParams(location.search);
    const backUrl = queryParams.get('backUrl') || "/dashboard";
    const handleLoginButton = async (e) => {
        e.preventDefault();
        if (!auth.phoneNumber) {
            toast.error("لطفا شماره تلفن را وارد کنید.");
            return;
        }
        try {
            const response = await handelLoginService({ phoneNumber: auth.phoneNumber });
            if (response?.status === 200) {
                console.log(auth.phoneNumber)
                dispatch(setOtpNumber(auth.phoneNumber))
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
        <div className='h-screen flex flex-col justify-center bg-cover bg-center' style={{ backgroundImage: `url(${AuthBG})` }}>
            <div className='bg-white bg-opacity-70 w-1/3 border border-[#838383] border-opacity-25 rounded-xl mx-auto p-6'>
                <img className='mx-auto' src={Logo} alt="logo image" />
                <form className=' mx-auto w-full h-fit flex flex-col gap-5'>
                    <h1 className='text-xl font-bold text-[#27282C]'>ورود به حساب</h1>
                    <TextFieild label="شماره همراه" value={auth.phoneNumber} onChange={handleTextfieldChange("phoneNumber")}/>
                    <div>
                        <div className="w-full mx-auto">
                            <PrimaryButton text="ورود به حساب کاربری" click={handleLoginButton}/>
                        </div>
                        <div className='flex gap-2 w-full mx-auto mt-2 justify-between'>
                            <p className='text-[#56565F] text-sm font-bold'>حساب کاربری ندارید؟</p>
                            <Link to={`/signUp?backUrl=${backUrl}`} className='text-[#1B82C2] text-sm font-bold'>ساخت حساب</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn