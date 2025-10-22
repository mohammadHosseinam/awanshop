import React from 'react'
import { uploadsURL } from '../../api/constants'
import StarIcon from '../../assets/icons/starIcon'
import { Link } from 'react-router-dom';
import ProductImageTest from "../../assets/images/product.jpg"

function ProductCard({ name = "شلوار اسکینی old navy", price = 450000, image, starRank = "4.1", link }) {
    return (
        <Link to={"/product/" + name} className=''>
            <div className="flex-shrink-0 w-full flex flex-col gap-2 rounded-2xl p-2 bg-fafafa border border-[#E6E6E6] overflow-hidden">
                <img className='w-full rounded-lg' src={ProductImageTest} alt="product image" />
                <p className='text-sm md:text-base lg:text-lg text-neutral-800 font-bold'>{name}</p>
                <div className='flex justify-between items-end'>
                    <div className='flex flex-col items-start'>
                        <div className='flex flex-row-reverse items-center'>
                            <p className='text-xs line-through text-[#636262]'>تومان</p>
                            <h5 className='text-xs line-through text-[#636262]'>{price}</h5>
                        </div>
                        <div className='flex flex-row-reverse items-center gap-1'>
                            <p className='text-xs font-bold'>تومان</p>
                            <h5 className='text-sm md:text-base lg:text-lg font-bold'>{price}</h5>
                        </div>
                    </div>
                    <div className='bg-[#F81818] p-2 rounded-lg w-fit text-white text-xs font-medium flex justify-center items-center'>32 %</div>
                </div>
            </div>
        </Link>
    )
}
// src={uploadsURL + image }
export default ProductCard