import React from 'react'
import Header from '../../layout/header/index.jsx'
import HiroImage from "../../assets/images/hiroImage.png"
import Shalvar from "../../assets/images/shalvar.png"
import TrukIcon from '../../assets/icons/truckIcon/index.jsx'
import DiscountIcon from '../../assets/icons/discountIcon/index.jsx'
import ChangeIcon from '../../assets/icons/changeIcon/index.jsx'
import BoxIcon from '../../assets/icons/boxIcon/index.jsx'
import ProductCard from '../../components/ProductCard/index.jsx'
import Sections from './sections/index.jsx'
import Footer from '../../layout/footer/index.jsx'
import SectionCard from '../../components/SectionCard/index.jsx'
import ProductsSlider from '../../components/ProductsSlider/index.jsx'

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
                <Header HomePage={true} />
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
            <h4 className='text-3xl font-bold text-center'>دسته بندی محصولات</h4>
            <div className='flex mx-20 justify-between mt-10'>
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
                <SectionCard Image={Shalvar} Name={"شلوار"} />
            </div>
            <div className='w-full px-20 mt-20'>
                <div className='w-full py-5 flex flex-col px-5 items-center relative'>
                    <svg className="absolute top-0 w-full h-auto -z-10" viewBox="0 0 1272 311" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0 32C0 20.7989 0 15.1984 2.17987 10.9202C4.09734 7.15695 7.15695 4.09734 10.9202 2.17987C15.1984 0 20.7989 0 32 0H1240C1251.2 0 1256.8 0 1261.08 2.17987C1264.84 4.09734 1267.9 7.15695 1269.82 10.9202C1272 15.1984 1272 20.7989 1272 32V213.946C1272 223.356 1272 228.061 1270.3 231.918C1268.8 235.309 1266.37 238.24 1263.32 240.337C1259.84 242.722 1255.18 243.598 1245.87 245.35C770.995 334.683 495.918 331.102 26.3009 245.236C16.9273 243.522 12.2404 242.665 8.74299 240.284C5.6672 238.189 3.22083 235.255 1.71372 231.853C0 227.984 0 223.254 0 213.794V32Z" fill="#7C1616"/>
                    </svg>
                    <ProductsSlider Title="محصولات شگفت انگیز"/>
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