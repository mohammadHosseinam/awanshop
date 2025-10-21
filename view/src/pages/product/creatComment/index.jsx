import React from 'react'
import ReactStars from 'react-rating-stars-component'
import RatingStarIcon from '../../../assets/icons/RatingStarIcon'
import PrimaryButton from '../../../components/PrimaryButton'
import Texterea from '../../../components/Texterea'
import TextFieild from '../../../components/TextFieild'
import { handelCreateCommentService } from '../../../api/services'
import { useDispatch, useSelector } from 'react-redux'
import { setCreateComment } from '../../../store/slices/createComment'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

function CreatComment() {
  const createComment = useSelector((state) => state.createComment)
  const dispatch = useDispatch()
    const handleTextfieldChange = (field) => (e) => {
        dispatch(setCreateComment({ ...createComment, [field]: e.target.value }));
    };
  const handelCreateComment = async()=>{
    const userCookie = Cookies.get("authToken")
    if(userCookie){ 
      try {
        const response = await handelCreateCommentService(createComment , userCookie)
        console.log(response)
        if (response?.status === 201) {
          // console.log(response)
          toast.success(response?.data?.massage || "موفقیت آمیز بود ثبت نظر");
        } else {
            toast.error(response?.data?.massage);
        }
    } catch (error) {
        toast.error(error.response.data.message || "مشکلی پیش آمده است. لطفا دوباره امتحان کنید.");
    }
    }else{
      toast.error("برای ثبت نظر ابتدا وارد حساب کاربری خود شوید");
    }
  }
  return (
    <div className='mx-3 mb-2 sm:w-96 lg:w-1/3'>
      <TextFieild label="تیتر" placeholder=" " value={createComment.title} onChange={handleTextfieldChange("title")}/>
      <Texterea label="توضیحات"  value={createComment.desc} onChange={handleTextfieldChange("desc")}/>
      <div className='flex items-center justify-between mt-2'>
        <ReactStars count={5} onChange={(newRate) => {  dispatch(setCreateComment({ ...createComment, rate: newRate })) }} size={24} char={<i className="fa fa-star"></i>} color="#c6c6c6"  activeColor="#F5D947"/>
        <PrimaryButton text="ثبت نظر" click={handelCreateComment}/>
      </div>
    </div>
  )
}

export default CreatComment

// {
//   "message": "ورود موفقیت‌آمیز بود",
//   "token": 
// }