import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../ProductCard";

export default function ProductsSlider({ Title , color = "dark"}) {
    const isDark = color === "dark";
    const textColor = isDark ? "text-white" : "text-black";
    const strokeColor = isDark ? "#FAFAFA" : "#111111";
    const fillColor = isDark ? "#FAFAFA" : "#7C1616"
    return (
        <div className="mx-auto w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg xl:text-2xl font-bold ${textColor}`}>{Title}</h3>
                <div className="flex gap-2">
                    <button className={`custom-prev p-2 rounded-full transition hover:bg-black/10 
              [&.swiper-button-disabled]:opacity-50 
              [&.swiper-button-disabled]:brightness-75`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="31" y="31" width="30" height="30" rx="7" transform="rotate(-180 31 31)" stroke={fillColor} stroke-width="2" />
                            <g clip-path="url(#clip0_341_245)">
                                <path d="M12.59 20.59L14 22L20 16L14 10L12.59 11.41L17.17 16L12.59 20.59Z" fill={fillColor} />
                            </g>
                            <defs>
                                <clipPath id="clip0_341_245">
                                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 28 28)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button className={`custom-next p-2 rounded-full transition hover:bg-black/10 
              [&.swiper-button-disabled]:opacity-50 
              [&.swiper-button-disabled]:brightness-75`}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="30" height="30" rx="7" stroke={fillColor} stroke-width="2" />
                            <g clip-path="url(#clip0_341_243)">
                                <path d="M19.41 11.41L18 10L12 16L18 22L19.41 20.59L14.83 16L19.41 11.41Z" fill={fillColor} />
                            </g>
                            <defs>
                                <clipPath id="clip0_341_243">
                                    <rect width="24" height="24" fill="white" transform="translate(4 4)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>


            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                spaceBetween={16}
                slidesPerView={1.2} // در موبایل
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 }, // sm
                    768: { slidesPerView: 3, spaceBetween: 24 }, // md
                    1024: { slidesPerView: 5, spaceBetween: 24 }, // lg
                }}
                pagination={{ clickable: true }}
                className="" 
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                    <SwiperSlide key={i}>
                        <div className=" ">
                            <ProductCard />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
