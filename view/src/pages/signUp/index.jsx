import React from 'react'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import logo from "../../assets/images/awanLogo.png"
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../store/slices/authSlice'
import { handelSignUpService } from '../../api/services'
import { toast } from 'react-toastify';

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
            console.log("error" , )
            console.error("خطا در ثبت نام:", error);
            toast.error(error.response.data.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center'>
            <img className='w-16 h-16 mx-auto' src={logo} alt="logo image" />
            <div className='m-12 mx-auto w-3/4 md:w-1/2 xl:w-1/3 h-fit'>
                <TextFieild label="نام" value={auth.firstName} onChange={handleTextfieldChange("firstName")}/>
                <TextFieild label="نام خانوادگی" value={auth.lastName} onChange={handleTextfieldChange("lastName")}/>
                <TextFieild label="شماره تلفن" value={auth.phoneNumber} onChange={handleTextfieldChange("phoneNumber")}/>
                <div className="w-fit mx-auto mt-5">
                    <PrimaryButton className="px-10" text="ساخت حساب" click={handelSignUpButton} />
                </div>
                <div className='flex gap-1 items-center w-fit mx-auto mt-3'>
                    <p style={{ fontSize: "10px" }} className='font-vazirmatn text-slate-900 font-medium'>حساب کاربری دارید؟</p>
                    <Link style={{ color: "#5C99F4" }} to={`/signin?backUrl=${backUrl}`} className='font-vazirmatn font-semibold text-xs'>ورود حساب</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp