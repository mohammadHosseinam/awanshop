import React, { useEffect } from 'react'
import Header from '../../layout/header'
import Texterea from '../../components/Texterea'
import TextFieild from '../../components/TextFieild'
import PrimaryButton from '../../components/PrimaryButton'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux'
import { setCreateOrderSlice } from '../../store/slices/CreateOrderSlice'
import { handelCreateOrderService } from '../../api/services'
import { toast } from 'react-toastify'

function ComplitOrder() {
    const CreateOrder = useSelector(state => state.CreateOrderSlice)
    const dispatch = useDispatch()
    const handleTextfieldChange = (field) => (e) => {
        dispatch(setCreateOrderSlice({ ...CreateOrder, [field]: e.target.value }));
    };
    function decodeAuthToken(authToken) {
        try {
            const decoded = jwtDecode(authToken);
            console.log(decoded); // اطلاعات داخل توکن را ببین
            return decoded;
        } catch (error) {
            console.error("توکن نامعتبر است!", error);
            return null;
        }
    }
    useEffect(() => {
        const authToken = Cookies.get("authToken") || ""
        const userInfo = decodeAuthToken(authToken);
        const basket = JSON.parse(localStorage.getItem("OrderBasket") || "[]")
        console.log(userInfo)
        dispatch(setCreateOrderSlice({ ...CreateOrder, name: `${userInfo.firstName} ${userInfo.lastName}`, phoneNumber: userInfo.phoneNumber, basket: basket }))
    }, [])

    const handelCreatOrder = async () => {
        const authToken = Cookies.get("authToken") || ""
        console.log(CreateOrder)
        try {
            const res = await handelCreateOrderService(CreateOrder, authToken)
            console.log(res)
            console.log(res.data.paymentLink)
            window.location.href = res.data.paymentLink;
            console.log(res.data.message)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }



    return (
        <div>
            <Header />
            <div style={{ height: "calc(100vh - 144px)" }} className='mx-auto w-3/4 md:w-1/2 lg:w-1/3 flex flex-col justify-center'>
                <h1 className='font-vazirmatn text-xs sm:text-sm lg:text-base text-slate-900 font-medium mb-3'>تکمیل سفارش</h1>
                <div className='p-5 rounded-lg shadow'>
                    <TextFieild label="نام و نام خانوادگی " value={CreateOrder.name} onChange={handleTextfieldChange("name")} />
                    <TextFieild label="شماره تلفن" value={CreateOrder.phoneNumber} onChange={handleTextfieldChange("phoneNumber")} />
                    <TextFieild label="کد پستی" value={CreateOrder.postCode} onChange={handleTextfieldChange("postCode")} />
                    <Texterea label="آدرس" placeholder="استان شهر و ..." value={CreateOrder.address} onChange={handleTextfieldChange("address")} />
                </div>
            </div>
            <div className='flex px-8 sm:px-10 md:px-12 lg:px-24 xl:px-32 items-center h-16 shadow-inner'>
                <div className="grow">
                    <PrimaryButton text="پرداخت" click={handelCreatOrder} />
                </div>
                <div>
                    <p className='font-vazirmatn text-xs mb-2 text-end text-slate-400'>جمع سبد خرید</p>
                    <div className='flex items-center'>
                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light text-slate-900'>تومان</p>
                        <h2 className='mr-1 font-vazirmatn font-medium text-base text-slate-900'>450000</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplitOrder