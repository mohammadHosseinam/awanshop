import React from 'react'
import RatingStarIcon from '../../assets/icons/RatingStarIcon'

function Comment({name , rating , title , desc }) {
    return (
        <div className='w-52 p-3 shadow rounded-lg flex-shrink-0 my-1'>
            <div className='flex gap-1 items-center'>
                <div className='w-6 h-6 bg-violet-600 flex justify-center items-center rounded-full shadow-sm'><p className='text-fafafa font-vazirmatn font-medium text-xs'>م</p></div>
                <div>
                    <p className='font-vazirmatn text-sm font-medium'>{name}</p>
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
            <p className='font-vazirmatn text-sm font-medium mb-2'>{title}</p>
            <p className='font-vazirmatn text-xs font-light '>{desc}</p>
        </div>
    )
}

export default Comment