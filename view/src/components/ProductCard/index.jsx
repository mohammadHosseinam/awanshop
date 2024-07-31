import React from 'react'
import productImage from "../../assets/images/product.jpg"
import StarIcon from '../../assets/icons/starIcon'
import { Link } from 'react-router-dom';

function ProductCard({name="شلوار اسکینی old navy" , price=450000 , image , starRank="4.1" }) {
    return (
        <Link to={"/product"}>
        <div className="flex-shrink-0 shadow-md  rounded-2xl p-2.5 mb-1 bg-fafafa">
            <img className='w-full  rounded-xl' src={productImage} alt="product image" />
            <p className='text-sm md:text-base lg:text-lg font-vazirmatn text-neutral-800 font-medium pt-3'>{name}</p>
            <div className='flex flex-row-reverse items-center gap-1'>
                <StarIcon/>
                <p className='text-xs font-vazirmatn '>{starRank}</p>
            </div>
            <div className='flex flex-row-reverse items-center gap-1'>
                <p className='text-xs font-vazirmatn'>تومان</p>
                <h5 className='font-vazirmatn text-sm md:text-base lg:text-lg'>{price}</h5>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard