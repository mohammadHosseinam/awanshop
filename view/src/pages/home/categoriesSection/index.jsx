import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionCard from "../../../components/SectionCard";
import Shalvar from "../../../assets/images/shalvar.png";

export default function CategoriesSection() {
    const categories = [
        { id: 1, name: "شلوار", image: Shalvar },
        { id: 2, name: "کت", image: Shalvar },
        { id: 3, name: "شومیز", image: Shalvar },
        { id: 4, name: "کت‌وشلوار", image: Shalvar },
        { id: 5, name: "پیراهن", image: Shalvar },
        { id: 6, name: "دامن", image: Shalvar },
        { id: 7, name: "مانتو", image: Shalvar },
    ];

    return (
        <div className="">
            <h4 className="text-lg xl:text-2xl mt-4 xl:mt-0 mb-5 font-bold text-center">
                دسته‌بندی محصولات
            </h4>

            {/* دسکتاپ */}
            <div className="hidden xl:flex flex-wrap justify-between mx-20">
                {categories.map((item) => (
                    <SectionCard key={item.id} Image={item.image} Name={item.name} />
                ))}
            </div>

            {/* موبایل */}
            <div className="xl:hidden px-4 md:px-16">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={2.5} // در موبایل
                    breakpoints={{
                        640: { slidesPerView: 5, spaceBetween: 20 }, // sm
                        768: { slidesPerView: 5, spaceBetween: 24 }, // md
                        1024: { slidesPerView: 8, spaceBetween: 24 }, // lg
                    }}
                    grabCursor={true}
                    className="pb-4"
                >
                    {categories.map((item) => (
                        <SwiperSlide key={item.id}>
                            <SectionCard Image={item.image} Name={item.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
