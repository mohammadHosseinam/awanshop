import React from 'react'
import Header from '../../layout/header/index.jsx'
import HiroImage from "../../assets/images/hiroImage.png"
import Hirobg from "../../assets/images/hirobg.png"
import Shalvar from "../../assets/images/shalvar.png"
import Baner2 from "../../assets/images/baner2.png"
import Baner1 from "../../assets/images/baner1.png"
import ShopBaner from "../../assets/images/ShopBaner.png"
import FAQ from "../../assets/images/FAQ.png"
import Footer from '../../layout/footer/index.jsx'
import SectionCard from '../../components/SectionCard/index.jsx'
import ProductsSlider from '../../components/ProductsSlider/index.jsx'
import FAQItem from '../../components/FAQItem/index.jsx'
import HeroSection from './heroSection/index.jsx'
import CategoriesSection from './categoriesSection/index.jsx'

function Home() {
    return (
        <>
            <HeroSection/>
            <CategoriesSection/>
            <div className='w-full px-4 md:px-10 xl:px-20 mt-20'>
                <div className='w-full bg-[#7C1616] xl:bg-transparent pb-5 rounded-2xl flex flex-col pt-5 pl-5 pr-7 items-center relative'>
                    <svg className="hidden xl:block absolute top-0 w-full h-auto -z-10" viewBox="0 0 1272 311" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0 32C0 20.7989 0 15.1984 2.17987 10.9202C4.09734 7.15695 7.15695 4.09734 10.9202 2.17987C15.1984 0 20.7989 0 32 0H1240C1251.2 0 1256.8 0 1261.08 2.17987C1264.84 4.09734 1267.9 7.15695 1269.82 10.9202C1272 15.1984 1272 20.7989 1272 32V213.946C1272 223.356 1272 228.061 1270.3 231.918C1268.8 235.309 1266.37 238.24 1263.32 240.337C1259.84 242.722 1255.18 243.598 1245.87 245.35C770.995 334.683 495.918 331.102 26.3009 245.236C16.9273 243.522 12.2404 242.665 8.74299 240.284C5.6672 238.189 3.22083 235.255 1.71372 231.853C0 227.984 0 223.254 0 213.794V32Z" fill="#7C1616" />
                    </svg>
                    <ProductsSlider Title="محصولات شگفت انگیز" />
                </div>
            </div>
            <div className='w-full flex-col xl:flex-row flex px-4 md:px-10 xl:px-20 justify-center gap-4 xl:gap-10 mt-10'>
                <img className='grow' src={Baner1} alt="" />
                <img className='grow' src={Baner2} alt="" />
            </div>
            <div className='w-full px-4 md:px-10 xl:px-20 mt-10'>
                <div className='w-full flex flex-col items-center relative'>
                    <ProductsSlider Title="محصولات شگفت انگیز" color="light" />
                </div>
            </div>
            <div className='w-full px-4 md:px-10 xl:px-20 mt-10'>
                <div className='w-full flex flex-col items-center relative'>
                    <ProductsSlider Title="محصولات شگفت انگیز" color="light" />
                </div>
            </div>
            <div className='w-full flex px-4 md:px-10 xl:px-20 justify-center gap-10 mt-10'>
                <img className='w-full' src={ShopBaner} alt="" />
            </div>
            <div className='relative mx-4 md:mx-10 lg:mx-20 my-16'>
                <svg className="absolute top-0 w-full h-auto -z-10" width="1204" height="376" viewBox="0 0 1204 376" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 32C0 14.3269 14.3269 0 32 0H1172C1189.67 0 1204 14.3269 1204 32V265.527C1204 280.261 1193.78 293.14 1179.46 296.583C729.804 404.646 469.415 400.317 24.7526 296.458C10.3231 293.088 0 280.162 0 265.345V32Z" fill="#7C1616" />
                </svg>
                <div className='flex items-center'>
                    <div className='hidden xl:flex'>
                        <img src={FAQ} height={388} alt="" />
                    </div>
                    <div className='w-full flex flex-col gap-4 px-5 pt-5'>
                        <h5 className='text-2xl font-bold text-white'>سوالات متداول</h5>
                        <FAQItem question="چطور می‌تونم سفارشم رو پیگیری کنم؟" answer="بعد از ثبت سفارش، کد پیگیری براتون ارسال میشه که می‌تونید از بخش «سفارش‌های من» وضعیتش رو ببینید." />
                        <FAQItem question="آیا امکان مرجوع کردن کالا وجود داره؟" answer="بله، تا ۷ روز پس از تحویل سفارش در صورت داشتن شرایط مرجوعی، می‌تونید درخواست بازگشت کالا بدید." />
                        <FAQItem question="روش‌های پرداخت به چه صورت هست؟" answer="در حال حاضر پرداخت فقط به‌صورت آنلاین از طریق درگاه بانکی انجام میشه." />
                        <FAQItem question="آیا ارسال به شهرستان هم دارید؟" answer="بله، ما به تمام شهرهای ایران ارسال داریم و هزینه پست هنگام ثبت سفارش محاسبه میشه." />
                        <FAQItem question="هزینه ارسال سفارش‌ها چقدره؟" answer="هزینه ارسال بسته به شهر مقصد و وزن سفارش محاسبه میشه و در صفحه‌ی نهایی پرداخت به‌صورت خودکار نمایش داده میشه." />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home