import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import Logo from "../../assets/images/AWAN LOGO.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/slices/authSlice'
import { handelSignUpService } from '../../api/services'
import { toast } from 'react-toastify';
import AuthBG from "../../assets/images/authBG.png"

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const handleTextfieldChange = (field) => (e) => {
        dispatch(setUserInfo({ ...auth, [field]: e.target.value }));
    };
    const queryParams = new URLSearchParams(location.search);
    const backUrl = queryParams.get('backUrl') || "/dashboard";
    const handelSignUpButton = async () => {
        if (!auth.firstName || !auth.lastName || !auth.phoneNumber) {
            alert("لطفا همه فیلدها را پر کنید.");
            return;
        }

        try {
            const response = await handelSignUpService(auth);
            if (response?.status === 200) {
                navigate(`/VerifySignUp?backUrl=${backUrl}`);
            } else {
                console.log(response)
                toast.error(response.response?.data?.message);
            }
        } catch (error) {
            console.log("error",)
            console.error("خطا در ثبت نام:", error);
            toast.error(error.response.data.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center bg-cover bg-center px-4 py-8 sm:px-6 md:px-10' style={{ backgroundImage: `url(${AuthBG})` }}>
            <div className='bg-white bg-opacity-70 w-full max-w-md sm:max-w-lg md:max-w-md border border-[#838383]/25 rounded-2xl mx-auto p-4 sm:p-6 md:p-8 shadow-lg'>
                <Link to={`/`} >
                    <img className='mx-auto mb-5' src={Logo} alt="logo image" />
                </Link>
                <div className='w-full flex flex-col gap-5 text-center sm:text-right'>
                    <TextFieild label="نام" value={auth.firstName} onChange={handleTextfieldChange("firstName")} />
                    <TextFieild label="نام خانوادگی" value={auth.lastName} onChange={handleTextfieldChange("lastName")} />
                    <TextFieild label="شماره تلفن" value={auth.phoneNumber} onChange={handleTextfieldChange("phoneNumber")} />
                    <div>
                        <div className="w-full mx-auto">
                            <PrimaryButton className="px-10" text="ساخت حساب" click={handelSignUpButton} />
                        </div>
                        <div className='flex gap-2 mt-3 items-center justify-between text-sm sm:text-base'>
                            <p className='text-[#56565F] text-sm font-bold'>حساب کاربری دارید؟</p>
                            <Link to={`/signin?backUrl=${backUrl}`} className="text-[#1B82C2] font-bold hover:underline">ورود حساب</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp