import React from 'react'
import { uploadsURL } from '../../api/constants'
import StarIcon from '../../assets/icons/starIcon'
import { Link } from 'react-router-dom';

function ProductCard({name="شلوار اسکینی old navy" , price=450000 , image , starRank="4.1" , link}) {
    return (
        <Link to={"/product/" + name} className=''>
        <div style={{borderBottomLeftRadius : 100 , borderBottomRightRadius : 100 ,borderTopLeftRadius : 999 , borderTopRightRadius : 999}} className="flex-shrink-0 shadow-md  p-2.5 mb-1 bg-fafafa overflow-hidden">
            <img style={{borderBottomLeftRadius : 1000 , borderBottomRightRadius : 1000 ,borderTopLeftRadius : 9999, borderTopRightRadius : 9999}} className='w-full rounded-b-md rounded-t-full ' src={uploadsURL + image} alt="product image" />
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