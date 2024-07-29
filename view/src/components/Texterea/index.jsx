import React from 'react'

function Texterea({label , placeholder="نظر خود را توضیح دهید..."}) {
    return (
        <div className="mx-auto">
            <label htmlFor="message" className="block mb-2 mt-3 text-sm md:text-base font-vazirmatn font-normal text-gray-900">
                {label}
            </label>
            <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm md:text-base text-gray-900 bg-gray-50 font-vazirmatn rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}

export default Texterea