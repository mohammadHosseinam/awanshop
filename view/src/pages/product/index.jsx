import React from 'react'
import Header from '../../layout/header'
import productImage from "../../assets/images/product.jpg"
import StarIcon from '../../assets/icons/starIcon'
import ColorButton from '../../components/ColorButton'
import SizeButton from '../../components/SizeButton'
function Product() {
    return (
        <>
            <Header />
            <div style={{ height: "calc(100vh - 148px)" }} className='overflow-y-scroll scrollbar-hidden px-6 pt-6'>
                <img className='rounded shadow-sm w-full' src={productImage} alt="Product Image" />
                <div className='mt-7 flex justify-between px-1'>
                    <h1 className='text-xl font-vazirmatn text-neutral-800 font-medium'>شلوار اسکینی old navy</h1>
                    <div className='flex items-center gap-1'>
                        <StarIcon />
                        <p className='text-xs font-vazirmatn '>4.1</p>
                    </div>
                </div>
                <div className='flex gap-2 mt-4 mx-2'>
                    <p className='text-base font-vazirmatn font-medium text-neutral-800'>رنگ :</p>
                    <div className='flex gap-1'>
                        <ColorButton color={"#4743DE"} />
                        <ColorButton color={"#212121"} />
                        <ColorButton color={"#535353"} />
                    </div>
                </div>
                <div className='flex gap-2 mt-4 mx-2'>
                    <p className='text-base font-vazirmatn font-medium text-neutral-800'>سایز :</p>
                    <h2 className='text-lg font-vazirmatn font-medium text-neutral-800'>42</h2>
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

            </div>
        </>
    )
}

export default Product