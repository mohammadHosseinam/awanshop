import React from 'react'
import MoreIcon from '../../assets/icons/more'
import BasketIcon from '../../assets/icons/basket'
import UserIcon from '../../assets/icons/userIcon'
import awanLogo from '../../assets/images/AWAN LOGO.png'
import { Link, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';

function Header({ HomePage = false }) {
    const basket = localStorage.getItem("OrderBasket") || "[]"
    const parsedBasket = JSON.parse(basket)
    const location = useLocation();
    const userPrrofile = Cookies.get("authToken") || ""
    console.log(location.pathname)
    return (
        HomePage == true ? (
            <div className='pt-8 px-20'>
                <div className='h-20 flex justify-between shadow-sm items-center px-7 bg-[#F9F6F2] rounded-2xl py-3'>
                    <div className='flex items-center gap-16'>
                        <Link to="/">
                            <img className='' src={awanLogo} alt="awanLogo" />
                        </Link>
                        <nav className='flex gap-5'>
                            <div className='font-vazirmatn font-semibold text-slate-900' href="">دسته بندی</div>
                            <a className='font-vazirmatn font-semibold text-slate-900' href="">فروشگاه</a>
                            <a className='font-vazirmatn font-semibold text-slate-900' href="">ارتباط با ما</a>
                        </nav>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <Link to="/basket"><BasketIcon conut={parsedBasket.length} /></Link>
                        {
                            userPrrofile ? (<Link to="/adminPanel"><UserIcon /></Link>) : (<a className='bg-[#7C1616] text-white font-vazirmatn px-4 py-2 rounded-xl hover:bg-green-500 active:bg-green-400' href={`/signIn?backUrl=${location.pathname}`}>ورود به حساب</a>)
                        }
                    </div>
                </div>
            </div>
        ) : (<div className='h-20 flex justify-between shadow-sm items-center px-7 bg-[#F9F6F2]'>
            <div className='flex items-center gap-16'>
                <Link to="/">
                    <img className='' src={awanLogo} alt="awanLogo" />
                </Link>
                <nav className='flex gap-5'>
                    <div className='font-vazirmatn font-semibold text-slate-900' href="">دسته بندی</div>
                    <a className='font-vazirmatn font-semibold text-slate-900' href="">فروشگاه</a>
                    <a className='font-vazirmatn font-semibold text-slate-900' href="">ارتباط با ما</a>
                </nav>
            </div>
            <div className='flex gap-2 items-center '>
                <Link to="/basket"><BasketIcon conut={parsedBasket.length} /></Link>
                {
                    userPrrofile ? (<Link to="/adminPanel"><UserIcon /></Link>) : (<a className='bg-green-600 text-white font-vazirmatn px-4 py-2 rounded-xl hover:bg-green-500 active:bg-green-400' href={`/signIn?backUrl=${location.pathname}`}>ورود به حساب</a>)
                }
            </div>
        </div>)
    )
}

export default Header