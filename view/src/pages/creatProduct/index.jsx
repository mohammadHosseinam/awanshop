import React, { useState } from 'react'
import Header from '../../layout/header'
import TextFieild from '../../components/TextFieild'
import FileUploadInput from '../../components/FileUploadInput'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'
import { HexColorPicker } from "react-colorful";
import ColorButton from '../../components/ColorButton'

function CreatProduct() {
    const [color, setColor] = useState("#fffff")
    return (
        <div>
            <Header />
            <div className='mx-10 sm:mx-16 md:mx-28 lg:mx-36 xl:mx-60 flex flex-col justify-center mb-4'>
                <h1 className='font-vazirmatn text-xs sm:text-sm md:text-base lg:text-lg text-slate-900 font-medium mb-3 mt-4'>ساخت محصول</h1>
                <div className='p-5 rounded-lg shadow'>
                    <TextFieild label="نام محصول" />
                    <h5 className='font-vazirmatn font-medium text-lg mt-2'>سایز ها</h5>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="30" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="32" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label='34' />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="36" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="38" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="40" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="42" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="44" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="46" />
                        </div>
                        <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5'>
                            <TextFieild label="48" />
                        </div>
                    </div>
                    <TextFieild label="جنس" />
                    <TextFieild label="استایل" />
                    <TextFieild label="برند" />
                    <TextFieild label="فاق" />
                    <TextFieild label="ضخامت" />
                    <TextFieild label="اسم رنگ" />
                    <h5 className='font-vazirmatn text-base mt-2'>انتخاب رنگ</h5>
                    <div className='flex gap-3 m-2'>
                        <ColorButton color={color} />
                        <HexColorPicker color={color} onChange={setColor} />
                    </div>

                    <FileUploadInput label="عکس اصلی" multiple={false} />
                    <FileUploadInput label="عکس های دیگر" multiple={true} />
                    <div className='w-fit mx-auto mt-4'>
                        <PrimaryInlineButton text="ساخت محصول" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatProduct