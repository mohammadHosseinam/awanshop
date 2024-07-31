import React from 'react'
import Header from '../../layout/header'
import productImage from "../../assets/images/product.jpg"
import StarIcon from '../../assets/icons/starIcon'
import ColorButton from '../../components/ColorButton'
import SizeButton from '../../components/SizeButton'
import ProductAttrebute from '../../components/ProductAttrebute'
import Comment from '../../components/Comment'
import CreatComment from './creatComment'
import ProductCard from '../../components/ProductCard'
import PrimaryButton from '../../components/PrimaryButton'
function Product() {
    return (
        <>
            <Header />
            <div style={{ height: "calc(100vh - 144px)" }} className='overflow-y-scroll scrollbar-hidden px-6 lg:px-20 pt-6'>
                <div className='flex flex-col sm:flex-row sm:m-5 gap-5'>
                    <img className='rounded shadow-sm w-full sm:w-1/2 grow' src={productImage} alt="Product Image" />
                    <div className='flex flex-col sm:gap-0.5 sm:py-2 md:gap-3 md:justify-evenly sm:w-1/2'>
                        <div className='mt-7 sm:mt-0 flex justify-between px-1'>
                            <h1 className='text-xl lg:text-4xl font-vazirmatn text-neutral-800 font-medium'>شلوار اسکینی old navy</h1>
                            <div className='flex items-center gap-1'>
                                <StarIcon />
                                <p className='text-xs lg:text-base font-vazirmatn '>4.1</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-4 mx-2'>
                            <p className='text-base lg:text-xl font-vazirmatn font-medium text-neutral-800'>رنگ :</p>
                            <div className='flex gap-1'>
                                <ColorButton color={"#4743DE"} />
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-2 mt-4 mx-2'>
                                <p className='text-base lg:text-xl font-vazirmatn font-medium text-neutral-800'>سایز :</p>
                                <h2 className='text-lg lg:text-lg font-vazirmatn font-medium text-neutral-800'>42</h2>
                            </div>
                            <div className='flex gap-1 mr-5 my-2'>
                                <SizeButton size={36} color="#000" />
                                <SizeButton size={38} color="#000" />
                                <SizeButton size={40} color="#000" />
                                <SizeButton size={42} color="#44DCAE" />
                                <SizeButton size={44} color="#000" />
                                <SizeButton size={46} color="#000" />
                                <SizeButton size={48} color="#000" />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-sm lg:text-xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>مشخصات</h5>
                            <div className='flex gap-2 flex-wrap mr-3'>
                                <ProductAttrebute attrebut="جنس" value="جین" />
                                <ProductAttrebute attrebut="استایل" value="اسکینی" />
                                <ProductAttrebute attrebut="برند" value="old navy" />
                                <ProductAttrebute attrebut="فاق" value="متوسط" />
                                <ProductAttrebute attrebut="ضخامت" value="نازک" />
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl  font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>محصولات مشابه</h5>
                <div className='flex flex-shrink-1 overflow-x-scroll gap-4 scrollbar-hide mb-2'>
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 sm:px-3">
                        <ProductCard click={()=>{}}/>
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
                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>نظرات</h5>
                <div className='flex overflow-x-scroll scrollbar-hidden mb-3 gap-2'>
                    <Comment name="محمد" rating="4" title="کیفیت عالی و قیمت مناسب" desc="من سایز ۴۲ هستم با توجه به نظرات دوستان سایز ۴۴ گرفتم ولی باز هم کوچک و تنگ بود هم قدش کوتاه بود قدش ۹۰ سانته مرجوع کردم" />
                    <Comment name="محمد" rating="4" title="کیفیت عالی و قیمت مناسب" desc="من سایز ۴۲ هستم با توجه به نظرات دوستان سایز ۴۴ گرفتم ولی باز هم کوچک و تنگ بود هم قدش کوتاه بود قدش ۹۰ سانته مرجوع کردم" />
                    <Comment name="محمد" rating="4" title="کیفیت عالی و قیمت مناسب" desc="من سایز ۴۲ هستم با توجه به نظرات دوستان سایز ۴۴ گرفتم ولی باز هم کوچک و تنگ بود هم قدش کوتاه بود قدش ۹۰ سانته مرجوع کردم" />
                    <Comment name="محمد" rating="4" title="کیفیت عالی و قیمت مناسب" desc="من سایز ۴۲ هستم با توجه به نظرات دوستان سایز ۴۴ گرفتم ولی باز هم کوچک و تنگ بود هم قدش کوتاه بود قدش ۹۰ سانته مرجوع کردم" />
                </div>
                <h5 className='text-sm sm:text-base md:text-xl lg:text-2xl font-vazirmatn font-medium text-neutral-800 mt-3 mb-4 mr-2'>ثبت نظر</h5>
                <CreatComment />
            </div>
            <div className='flex px-6 lg:px-20 items-center h-16 shadow-inner'>
                <div className="grow">
                    <PrimaryButton text="افزودن به سبد خرید" click={() => { console.log("add to basket") }} />
                </div>
                <p style={{ fontSize: "10px" }} className='font-vazirmatn font-light lg:font-medium text-slate-900'>تومان</p>
                <h2 className='mr-1 font-vazirmatn font-medium text-base md:text-xl lg:text-2xl text-slate-900'>450000</h2>
            </div>
        </>
    )
}

export default Product