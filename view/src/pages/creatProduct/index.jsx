import React, { useState } from 'react';
import Header from '../../layout/header';
import TextFieild from '../../components/TextFieild';
import FileUploadInput from '../../components/FileUploadInput';
import PrimaryInlineButton from '../../components/PrimaryInlineButton';
import { HexColorPicker } from 'react-colorful';
import ColorButton from '../../components/ColorButton';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { handelCreateProductService } from '../../api/services';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import LinkedSizesSelector from './linkedSizesSelector';

const productSchema = yup.object({
  name: yup.string().required('نام محصول الزامی است'),
  section: yup.string().required('دسته بندی الزامی است'),
  style: yup.string().required('استایل الزامی است'),
  type: yup.string().required('جنس الزامی است'),
  fagh: yup.string().required('فاق الزامی است'),
  thickness: yup.string().required('ضخامت الزامی است'),
  brand: yup.string().required('برند الزامی است'),
  price: yup.string().required('قیمت الزامی است'),
  colorName: yup.string().required('اسم رنگ الزامی است'),
  discount: yup.number(),
  sizes: yup.object().shape(
    Object.fromEntries(
      Array.from({ length: 20 }, (_, i) => `${32 + i * 2}`).map((size) => [
        size,
        yup.number().default(0).min(0, 'سایز باید مثبت باشد')
      ])
    )
  )
});

function CreatProduct() {
  const [color, setColor] = useState('#ffffff');
  const [mainPicture, setMainPicture] = useState(null);
  const [otherPictures, setOtherPictures] = useState([]);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const linkedSizes = useSelector((state) => state.linkedSizes);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      sizes: Object.fromEntries(
        Array.from({ length: 20 }, (_, i) => `${32 + i * 2}`).map((size) => [size, 0])
      )
    }
  });
  console.log(linkedSizes)
  const handleCreateProduct = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'sizes') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });
    formData.append('bestSeller', isBestSeller);
    formData.append('linkedSizes', JSON.stringify(linkedSizes));
    formData.append('colorCode', color);
    formData.append('mainPicture', mainPicture || '');
    if (otherPictures && otherPictures.length > 0) {
      [...otherPictures].forEach((file) => {
        formData.append('otherPictures', file); // تغییر نام به "otherPictures[]"
      });
    }

    try {
      console.log("otherPictures:", formData)
      const response = await handelCreateProductService(formData);
      console.log(response.data.message);
      // Uncomment to show success notification
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      // Uncomment to show error notification
      toast.error(error.response?.data?.message || 'مشکلی رخ داده است');
    }
  };
  return (
    <div>
      <Header />
      <div className="mx-10 sm:mx-16 md:mx-28 lg:mx-36 xl:mx-60 flex flex-col justify-center mb-4">
        <h1 className="font-vazirmatn text-xs sm:text-sm md:text-base lg:text-lg text-slate-900 font-medium mb-3 mt-4">
          ساخت محصول
        </h1>
        <form
          className="p-5 rounded-lg shadow"
          onSubmit={handleSubmit(handleCreateProduct)}
        >
          <TextFieild label="نام محصول" register={{ ...register('name') }} error={errors.name} />
          <TextFieild label="دسته بندی" register={{ ...register('section') }} error={errors.section} />

          <h5 className="font-vazirmatn font-medium text-lg mt-2">سایز ها</h5>
          <div className="flex flex-wrap">
            {Object.keys(productSchema.fields.sizes.fields).map((size) => (
              <div key={size} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/12 px-1.5">
                <TextFieild label={size} register={{ ...register(`sizes.${size}`) }} />
              </div>
            ))}
          </div>
          <LinkedSizesSelector/>
          <TextFieild label="جنس" register={{ ...register('type') }} error={errors.type} />
          <TextFieild label="استایل" register={{ ...register('style') }} error={errors.style} />
          <TextFieild label="برند" register={{ ...register('brand') }} error={errors.brand} />
          <TextFieild label="فاق" register={{ ...register('fagh') }} error={errors.fagh} />
          <TextFieild label="ضخامت" register={{ ...register('thickness') }} error={errors.thickness} />
          <TextFieild label="قیمت" register={{ ...register('price') }} error={errors.price} />
          <TextFieild label="اسم رنگ" register={{ ...register('colorName') }} error={errors.colorName} />
          <TextFieild label="درصد تخفیف" register={{ ...register('discount') }} error={errors.discount} />

          <h5 className="font-vazirmatn text-base mt-2">انتخاب رنگ</h5>
          <div className="flex gap-3 m-2">
            <ColorButton color={color} />
            <HexColorPicker color={color} onChange={setColor} />
          </div>

          <FileUploadInput label="عکس اصلی" multiple={false} onChange={(e) => { setMainPicture(e.target.files[0]); }} />
          <FileUploadInput label="عکس های دیگر" multiple={true} onChange={(e) => { setOtherPictures(e.target.files) }} />
          <div className="flex items-start my-5">
            <div className="flex items-center h-5">
              <input id="bestSeller" type="checkbox" checked={isBestSeller} onChange={(e) => setIsBestSeller(e.target.checked)} 
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label htmlFor="bestSeller" className="ms-2 text-sm font-vazirmatn font-medium text-gray-900"> محصولات پرفروش</label>
          </div>
          <div className="w-fit mx-auto mt-4">
            <PrimaryInlineButton text="ساخت محصول" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatProduct;




