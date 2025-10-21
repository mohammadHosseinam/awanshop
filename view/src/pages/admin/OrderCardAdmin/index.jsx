import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import PrimaryInlineButton from '../../../components/PrimaryInlineButton'
import OrderProductCart from '../../../components/OrderProductCart'

function OrderCardAdmin({ code = "34567897", name = "محمد حسین احمدیان", phoneNumber = "09032153600", address = "کاخ سعداباد", status="نامشخص", postCode = "1234567", products = [] }) {
  return (
    <div className='rounded-lg shadow p-3 bg-fafafa w-72 sm:w-80 md:w-96 lg:w-1/3 m-auto mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2'>
          <p className='font-vazirmatn font-medium text-xs'>کد رهگیری:</p>
          <p className='font-vazirmatn font-medium text-xs'>{code}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='font-vazirmatn font-medium text-xs'>وضعیت:</p>
          <PrimaryInlineButton className="border border-black text-black py-1 px-3 text-xs" click={() => { console.log("object") }} text={status} />
        </div>
      </div>
      <div className='flex gap-2 my-2'>
        <p className='font-vazirmatn font-medium text-xs'>نام:</p>
        <p className='font-vazirmatn font-medium text-xs'>{name}</p>
      </div>
      <div className='flex gap-2 mb-2'>
        <p className='font-vazirmatn font-medium text-xs'>شماره تلفن:</p>
        <p className='font-vazirmatn font-medium text-xs'>{phoneNumber}</p>
      </div>
      <div className='flex gap-2 mb-2'>
        <p className='font-vazirmatn font-medium text-xs'>آدرس:</p>
        <p className='font-vazirmatn font-medium text-xs'>{address}</p>
      </div>
      <div className='flex gap-2 mb-2'>
        <p className='font-vazirmatn font-medium text-xs'>کد پستی:</p>
        <p className='font-vazirmatn font-medium text-xs'>{postCode}</p>
      </div>
      <h4 className='font-vazirmatn font-medium text-sm'>محصولات:</h4>
      <div className='flex flex-col justify-center gap-2 overflow-scroll scrollbar-hidden max-h-64 mt-2'>
        {
          products.map((product) => <OrderProductCart img={product.image} name={product.name} color={product.colorCode} size={product.size} price={product.price} count={product.count} />)
        }
      </div>
    </div>
  )
}

export default OrderCardAdmin



