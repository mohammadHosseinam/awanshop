import React, { useRef, useState } from 'react'

function TextFieild({ label, register, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  return (
    <div className='relative'>
      <label htmlFor="small-input" className={`absolute right-4 bg-white px-1 text-[#43434a] transition-all duration-200 
                    transform pointer-events-none ${isFocused || (inputRef.current && inputRef.current.value)  ? '-top-2 text-xs' : 'top-3 text-xl font-normal'
        }`}>
        {label}
      </label>
      <input
        type="text"
        id="small-input"
        ref={(e) => {
          register.ref(e);
          inputRef.current = e;
        }}
        onChange={onChange}
        {...register}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(!!e.target.value);
        }}
        className={`border border-[#8E8E94] h-14 rounded-lg text-[#343439] px-4 py-2 w-full text-xl font-normal focus:outline-none focus:border-info/40 ${value || isFocused ? '' : ''
          }`}
      />
    </div>
  )
}

export default TextFieild