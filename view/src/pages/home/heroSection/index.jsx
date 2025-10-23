import React from "react";
import HiroImage from "../../../assets/images/hiroImage.png"; // مسیر تصویر
import Header from "../../../layout/header";

const HeroSection = () => {
  return (
    <div className="w-full relative">
      {/* دسکتاپ */}
      <div className="hidden xl:block relative">
        <svg
          className="w-full absolute -z-10"
          viewBox="0 0 1440 724"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M1440 689.117C880.51 735.957 565.033 735.296 0 689.117V0H1440V689.117Z"
            fill="#581010"
          />
        </svg>

        <Header HomePage={true} />

        <div className="flex justify-between items-center bg-opacity-55 h-full mx-20">
          <div className="h-[744px] flex flex-col justify-center gap-3">
            <h1 className="text-5xl font-bold text-white">
              آوان شــــاپـــــ
            </h1>
            <p className=" text-3xl font-bold text-white mb-3">
              محصولات با کیفیت در دسترس شما
            </p>
            <button className="text-xl font-bold text-white bg-black px-6 py-3 rounded-[38px] w-[218px] flex justify-center items-center">
              مشاهده محصولات
            </button>
          </div>
          <img src={HiroImage} alt="" className="max-h-[700px]" />
        </div>
      </div>

      {/* موبایل */}
      <div className="block xl:hidden bg-[#581010] text-white pt-5 pb-10 px-6 text-center">
        <Header HomePage={true} />
        <div className="flex flex-col justify-center items-center gap-4 mt-16">
          <h1 className="text-3xl font-bold">آوان شاپ</h1>
          <p className="text-lg font-semibold opacity-90">
            محصولات با کیفیت در دسترس شما
          </p>
          <button className="text-base font-bold text-[#581010] bg-white px-6 py-3 rounded-[38px] mt-4">
            مشاهده محصولات
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
