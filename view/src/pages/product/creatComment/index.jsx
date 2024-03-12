import React from 'react'
import ReactStars from 'react-rating-stars-component'
import RatingStarIcon from '../../../assets/icons/RatingStarIcon'
import PrimaryButton from '../../../components/PrimaryButton'
import Texterea from '../../../components/Texterea'
import TextFieild from '../../../components/TextFieild'

function CreatComment() {
  return (
    <div className='mx-3'>
      <TextFieild label="نام کاربری" placeholder=" "/>
      <TextFieild label="تیتر" placeholder=" "/>
      <Texterea label="توضیحات"/>
      <div className='flex items-center justify-between mt-2'>
        <ReactStars count={5} onChange={(newRate) => { console.log(newRate) }} size={24} char={<i className="fa fa-star"></i>} color="#c6c6c6" activeColor="#F5D947" />
        <PrimaryButton text="ثبت نظر" click={()=>console.log("clicked")}/>
      </div>
    </div>
  )
}

export default CreatComment