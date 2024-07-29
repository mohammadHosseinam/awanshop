import React from 'react'
import RatingStarIcon from '../../assets/icons/RatingStarIcon'

function Comment({name , rating , title , desc }) {
    return (
        <div className='w-52 lg:min-h-64 sm:w-72 lg:w-1/4 p-3 shadow rounded-lg flex-shrink-0 my-1'>
            <div className='flex gap-1 items-center'>
                <div className='w-6 h-6 lg:w-10 lg:h-10 bg-violet-600 flex justify-center items-center rounded-full shadow-sm'><p className='text-fafafa font-vazirmatn font-medium text-xs md:text-base'>م</p></div>
                <div>
                    <p className='font-vazirmatn text-sm lg:text-base font-medium'>{name}</p>
                    <p style={{fontSize:"10px"}} className='font-vazirmatn font-light'>نظر ثبت شده در 1403/3/2</p>
                </div>
            </div>
            <div className='flex gap-1 my-2'>
                <RatingStarIcon color="#F5D947"/>
                <RatingStarIcon color="#F5D947"/>
                <RatingStarIcon color="#F5D947"/>
                <RatingStarIcon color="#F5D947"/>
                <RatingStarIcon color="#C9C9C9"/>
            </div>
            <p className='font-vazirmatn text-sm lg:text-base font-medium mb-2'>{title}</p>
            <p className='font-vazirmatn text-xs lg:text-sm font-light '>{desc}</p>
        </div>
    )
}

export default Comment