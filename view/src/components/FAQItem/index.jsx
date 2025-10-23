import { useState } from "react";

export default function FAQItem({question , answer}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white bg-opacity-95 p-5 border border-[#E6E6E6] rounded-2xl w-full transition-all duration-300 ${
        open ? "shadow-md" : ""
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h6 className="text-sm xl:text-xl font-bold text-neutral-950">
          {question}
        </h6>

        <button
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_265_55)">
              <path
                d="M22.12 11.4531L16 17.5598L9.88 11.4531L8 13.3331L16 21.3331L24 13.3331L22.12 11.4531Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_265_55">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm xl:text-base font-medium text-neutral-800 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
