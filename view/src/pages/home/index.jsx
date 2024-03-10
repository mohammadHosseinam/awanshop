import React from 'react'
import Header from '../../layout/header/index.jsx'
import hiroBackground from "../../assets/images/hirimage.png"
import TrukIcon from '../../assets/icons/truckIcon/index.jsx'
import DiscountIcon from '../../assets/icons/discountIcon/index.jsx'
import ChangeIcon from '../../assets/icons/changeIcon/index.jsx'
import BoxIcon from '../../assets/icons/boxIcon/index.jsx'
import ProductCard from '../../components/ProductCard/index.jsx'
import Sections from './sections/index.jsx'
function Home() {
    return (
        <>
            <Header />
            <div style={{ background: `url(${hiroBackground})`, backgroundColor: "#000000", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "250px" }}>
                <div className='flex justify-center items-center bg-black bg-opacity-55 h-full'>
                    <h1 className='font-vazirmatn text-white'><span className='text-lime-800 text-xl font-medium'>آوان</span> به معنای طراوت و تازگیست</h1>
                </div>
            </div>

            <div className='flex items-center justify-evenly py-5'>
                <div className='flex flex-col items-center'>
                    <TrukIcon/>
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium mt-1'>ارسال سریع</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <DiscountIcon/>
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium  mt-1'>قیمت شگفت انگیز</h4>
                </div>
                <div className='flex flex-col items-center'>
                    <ChangeIcon/>
                    <h4 className='text-sm text-slate-800 font-vazirmatn font-medium mt-1'>امکان تعویض</h4>
                </div>
            </div>

            <div className='w-full h-60 bg-green-300 flex items-center'>
                <div className='flex flex-col items-center w-16 mr-8'>
                    <h3 className='text-secoundry font-vazirmatn font-medium w-16 text-center pb-2'>محصولات پرفروش</h3>
                    <BoxIcon/>
                </div>
                <div className='flex flex-shrink-1 overflow-x-scroll'>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                </div>
            </div>
            <Sections/>
        </>
    )
}

export default Home