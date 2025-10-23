import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

const OTPInput = forwardRef((props, ref) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    getOtp: () => otp.join(""),       // دریافت OTP به صورت یک رشته
    clearOtp: () => setOtp(Array(6).fill("")), // پاک کردن OTP
  }));

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // فقط اعداد

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // رفتن به فیلد بعدی
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData("text").slice(0, 6).split("");
    const updatedOtp = Array(6).fill("");

    pasteData.forEach((char, idx) => {
      if (/^\d$/.test(char)) {
        updatedOtp[idx] = char;
      }
    });

    setOtp(updatedOtp);

    // فکوس روی آخرین فیلد پر شده
    const lastFilledIndex = updatedOtp.findIndex((val) => val === "");
    inputRefs.current[lastFilledIndex > -1 ? lastFilledIndex : 5]?.focus();
  };

  return (
    <div className="flex justify-evenly w-full" dir="ltr">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-14 text-center border-2 border-[#6E6E6EBF] rounded-lg text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      ))}
    </div>
  );
});

OTPInput.displayName = "OTPInput";
export default OTPInput;