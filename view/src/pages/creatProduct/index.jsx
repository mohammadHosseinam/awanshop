import React from 'react'
import Header from '../../layout/header'
import TextFieild from '../../components/TextFieild'
import FileUploadInput from '../../components/FileUploadInput'
import PrimaryInlineButton from '../../components/PrimaryInlineButton'

function CreatProduct() {
    return (
        <div>
            <Header />
            <div className='mx-5 flex flex-col justify-center mb-4'>
                <h1 className='font-vazirmatn text-xs text-slate-900 font-medium mb-3 mt-4'>ساخت محصول</h1>
                <div className='p-5 rounded-lg shadow'>
                    <TextFieild label="نام محصول" />
                    <TextFieild label="سایز ها" />
                    <TextFieild label="جنس" />
                    <TextFieild label="استایل" />
                    <TextFieild label="برند" />
                    <TextFieild label="فاق" />
                    <TextFieild label="ضخامت" />
                    <TextFieild label="رنگ ها" />
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