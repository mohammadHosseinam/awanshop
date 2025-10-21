import React, { useEffect, useState } from 'react'
import Header from '../../layout/header'
import PrimaryButton from '../../components/PrimaryButton'
import BasketCard from './BasketCard'
import EmptyBasketIcon from '../../assets/icons/emptyBasketIcon'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Basket() {
    const [basket, setBasket] = useState([]);
    const navigate = useNavigate()
    const userPrrofile = Cookies.get("authToken") || ""
    const location = useLocation();
    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem("OrderBasket") || "[]");
        setBasket(storedBasket);
    }, []);

    const updateBasket = () => {
        const updatedBasket = JSON.parse(localStorage.getItem("OrderBasket") || "[]");
        setBasket(updatedBasket);
        console.log(basket)
    };

    const calculateTotalPrice = (basket) => {
        let totalPrice = 0;
        let payablePrice = 0;

        basket.forEach(item => {
            const itemTotal = item.price * item.count;
            const itemDiscount = item.discount ? (itemTotal * item.discount) / 100 : 0;
            totalPrice += itemTotal;
            payablePrice += itemTotal - itemDiscount;
        });

        return { totalPrice, payablePrice };
    };
    const compliteOrder = ()=>{
        if(userPrrofile){
            navigate("/complitOrder")
        }else {
            navigate(`/signIn?backUrl=/complitOrder`)
        } 
    }
    const { totalPrice, payablePrice } = calculateTotalPrice(basket);
    console.log(basket)
    return (
        <div>
            <Header />
            <div style={{ height: "calc(100vh - 144px)" }} className='pt-5 px-10 sm:px-12 md:px-24 lg:px-36 xl:px-48 overflow-scroll scrollbar-hide'>
                <h1 className='font-vazirmatn text-xs sm:text-sm md:text-base md:font-medium  text-slate-900 font-semibold mb-1'>سبد خرید شما</h1>
                <div style={{ boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)", borderRadius: "6px", minHeight: "calc(100% - 35px)" }} className='flex flex-col justify-center items-center gap-3 p-3'>
                    {basket.length > 0 ? basket.map((product) => (
                        <BasketCard name={product.name} count={product.count} image={product.image} size={product.size} id={product.id} colorName={product.colorName} colorCode={product.colorName} price={product.price} discount={product.discount} updateBasket={updateBasket} basket={basket}/>
                    )) : (<div className='flex flex-col justify-center items-center'>
                        <EmptyBasketIcon />
                        <h1 className='font-vazirmatn font-medium text-sm text-slate-900'>سبد خرید شما خالی است!</h1>
                    </div>)}

                </div>
            </div>
            <div className='flex px-8 sm:px-10 md:px-12 lg:px-24 xl:px-32 items-center h-16 shadow-inner z-10 bg-white'>
                {basket.length > 0 ? (<>
                    <div className="grow">
                        <PrimaryButton text="تایید و تکمیل خرید" click={compliteOrder} />
                    </div>
                    <div className=' \'>
                        <p className='font-vazirmatn text-xs mb-0.5 text-end text-slate-400'>جمع سبد خرید</p>
                        <div className='flex items-center'>
                            {
                                totalPrice != payablePrice ? (<div className='flex-col flex items-end'>
                                    <div className='flex flex-row items-center'>
                                        <span className=' px-2 py-1 bg-red-500 text-white text-xs rounded ml-2'>{100 - (payablePrice * 100 / totalPrice)} %</span>
                                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-600'>تومان</p>
                                        <h2 className='mr-1 line-through font-vazirmatn font-semibold text-xs text-slate-600'>{totalPrice ? new Intl.NumberFormat('fa-IR').format(totalPrice) : "۰"}</h2>
                                    </div>
                                    <div className='flex items-center'>
                                        <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-900'>تومان</p>
                                        <h2 className='mr-1 font-vazirmatn font-semibold text-base text-slate-900'>{payablePrice ? new Intl.NumberFormat('fa-IR').format(payablePrice) : "۰"}</h2>
                                    </div>
                                </div>) : (<div className='flex items-center gap-1'>
                                    <p className='font-vazirmatn font-medium'>{new Intl.NumberFormat('fa-IR').format(payablePrice)}</p>
                                    <span className='font-vazirmatn text-xs font-light'>تومان</span>
                                </div>)
                            }
                        </div>
                    </div>
                </>) : (
                    <div className="grow">
                        <Link to="/">
                            <PrimaryButton text="برگشت به خانه" click={() => { console.log("add to basket") }} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Basket