import React from 'react'

function TextFieild({label ,placeholder , register}) {
  return (
    <div>
        <label htmlFor="small-input" className="block mb-2  mt-3 text-sm md:text-base font-vazirmatn font-normal text-gray-900">
        {label}
        </label>
        <input
          type="text"
          id="small-input"
          placeholder={placeholder}
          {...register}
          className="block w-full p-2 text-gray-900 border font-vazirmatn border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
  )
}

export default TextFieild