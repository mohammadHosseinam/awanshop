import React from 'react'
import Header from '../../layout/header/index.jsx'
import HiroImage from "../../assets/images/hiroImage.png"
import TrukIcon from '../../assets/icons/truckIcon/index.jsx'
import DiscountIcon from '../../assets/icons/discountIcon/index.jsx'
import ChangeIcon from '../../assets/icons/changeIcon/index.jsx'
import BoxIcon from '../../assets/icons/boxIcon/index.jsx'
import ProductCard from '../../components/ProductCard/index.jsx'
import Sections from './sections/index.jsx'
import Footer from '../../layout/footer/index.jsx'

function Home() {
    return (
        <>
            
            <div className='w-full relative '>
                <svg
                    className="w-full absolute -z-10"
                    viewBox="0 0 1440 724"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path d="M1440 689.117C880.51 735.957 565.033 735.296 0 689.117V0H1440V689.117Z" fill="#581010" />
                </svg>
                <Header HomePage={true}/>
                <div className='flex justify-between items-center bg-opacity-55 h-full mx-20'>
                    
                    <div className='h-[744px] flex flex-col justify-center gap-3'>
                        <h1 className='font-vazirmatn sm:text-base md:text-lg lg:text-5xl font-bold text-white'>آوان شــــاپـــــ </h1>
                        <p className='font-vazirmatn sm:text-base md:text-lg lg:text-3xl font-bold text-white mb-3'>محصولات با کیفیت در دسترس شما</p>
                        <button className='text-xl font-bold text-white bg-black px-6 py-3 rounded-[38px] w-[218px] flex justify-center items-center'>
                            مشاهده محصولات
                        </button>
                    </div>
                    <img src={HiroImage} alt="" />
                </div>
            </div>

            <div className='flex items-center justify-evenly py-5'>
                <div className='flex flex-col items-center'>
                    <TrukIcon />
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium mt-1'>ارسال سریع</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <DiscountIcon />
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium  mt-1'>قیمت شگفت انگیز</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <ChangeIcon />
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium mt-1'>امکان تعویض</h4>
                </div>
            </div>

            <div className='w-full py-5 bg-[#BFE0C1] flex items-center'>
                <div className='flex flex-col items-center w-16 mr-8 ml-2'>
                    <h3 className='text-secoundry font-vazirmatn font-medium w-16 text-center pb-2'>محصولات پرفروش</h3>
                    <BoxIcon />
                </div>
                <div className='flex flex-shrink-1 overflow-x-scroll gap-4 scrollbar-hide mx-auto'>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-4">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-4">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-4">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-4">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-4">
                        <ProductCard />
                    </div>
                </div>
            </div>
            <Sections />
            <h4 className="font-vazirmatn text-sm sm:text-base md:text-lg lg:text-2xl text-neutral-800 text-center mt-5 mb-4 font-medium">شلوار های زنانه</h4>
            <div className='mx-6 sm:w-4/5 sm:mx-auto '>
                <div className='flex flex-shrink-1 overflow-x-scroll scrollbar-hide sm:mx-auto'>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-6 sm:px-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
            <h4 className="font-vazirmatn text-sm sm:text-base md:text-lg lg:text-2xl text-neutral-800 text-center mt-5 mb-4 font-medium">شلوار های مردانه</h4>
            <div className='mx-6 sm:w-4/5 sm:mx-auto mb-6'>
                <div className='flex flex-shrink-1 overflow-x-scroll scrollbar-hide sm:mx-auto'>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard />
                    </div>
                    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-6 sm:px-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home