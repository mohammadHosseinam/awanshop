import React from "react";
import logo from "../../assets/images/AWAN LOGO white.png";
import FooterBG from "../../assets/images/FooterBG.png";

function Footer() {
  return (
    <div
      className="flex flex-col w-full justify-between bg-cover bg-center relative mt-40"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      {/* بخش بالایی */}
      <div className="bg-[#1D1D21] w-[90%] md:w-3/4 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 p-5 border border-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* آدرس */}
        <div className="flex items-center gap-3 text-white w-full md:w-1/3 justify-center md:justify-start text-sm md:text-base">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
          </svg>
          <p>مشهد، بلوار پیروزی، بین پیروزی ۱۲ و چهارراه خاقانی</p>
        </div>

        {/* وب‌سایت */}
        <div className="flex items-center gap-3 text-white w-full md:w-1/3 justify-center border-y md:border-y-0 md:border-x border-white border-opacity-50 py-2 md:py-0 text-sm md:text-base">
          <svg width="21" height="24" fill="white" viewBox="0 0 21 24">
            <path d="M10.5047 6.60928C7.52341 6.60928 5.11873 9.01396 5.11873 11.9952C5.11873 14.9765 7.52341 17.3812 10.5047 17.3812C13.4859 17.3812 15.8906 14.9765 15.8906 11.9952C15.8906 9.01396 13.4859 6.60928 10.5047 6.60928Z" />
          </svg>
          <p>awanshop.ir</p>
        </div>

        {/* شماره تماس */}
        <div className="flex items-center gap-3 text-white w-full md:w-1/3 justify-center text-sm md:text-base">
          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M4.78 15.27L7.32 14.98C7.93 14.91 8.53 15.12 8.96 15.55L10.8 17.39C13.63 15.95 15.95 13.64 17.39 10.8L15.54 8.95002C15.11 8.52002 14.9 7.92002 14.97 7.31002L15.26 4.79002C15.38 3.78002 16.23 3.02002 17.25 3.02002H18.98C20.11 3.02002 21.05 3.96002 20.98 5.09002C20.45 13.63 13.62 20.45 5.09 20.98C3.96 21.05 3.02 20.11 3.02 18.98V17.25C3.01 16.24 3.77 15.39 4.78 15.27Z" />
          </svg>
          <p>0937 975 3779</p>
        </div>
      </div>

      {/* بخش پایین */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-16 py-40 md:py-48 px-6 md:px-20 text-white">
        {/* لوگو و توضیحات */}
        <div className="flex flex-col gap-4 w-fit md:gap-6 md:w-1/3">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
          <p className="text-sm md:text-lg font-semibold leading-relaxed">
            ترکیبی از طراحی مدرن، پارچه‌های باکیفیت و دوختی بی‌نقص، برای
            کسانی که به دنبال چیزی فراتر از مد هستند. در آوان شاپ، هر کت،
            شومیز و شلوار، بازتابی از ظرافت و سلیقه‌ی شماست.
          </p>
        </div>

        {/* صفحات مفید */}
        <div className="flex flex-col w-fit gap-3">
          <p className="text-lg md:text-xl font-bold">صفحات مفید</p>
          <a href="/shop" className="opacity-70 hover:opacity-100">
            فروشگاه
          </a>
          <a href="/basket" className="opacity-70 hover:opacity-100">
            سبد خرید
          </a>
          <a href="/aboutUs" className="opacity-70 hover:opacity-100">
            ارتباط با ما
          </a>
        </div>

        {/* محصولات پر فروش */}
        <div className="flex flex-col w-fit gap-3">
          <p className="text-lg md:text-xl font-bold">محصولات پرفروش</p>
          {Array(4)
            .fill("محصول تست")
            .map((text, i) => (
              <a key={i} href="#" className="opacity-70 hover:opacity-100">
                {text}
              </a>
            ))}
        </div>

        {/* تاییده‌ها */}
        <div className="flex w-fit flex-col gap-3">
          <p className="text-lg md:text-xl font-bold">تأییدیه‌ها</p>
          <a
            referrerPolicy="origin"
            target="_blank"
            href="https://trustseal.enamad.ir/?id=617648&Code=ovzCxqCGB0Xcpnd5KwGcb205SXHDRcN1"
          >
            <img
              referrerPolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=617648&Code=ovzCxqCGB0Xcpnd5KwGcb205SXHDRcN1"
              className="h-16 w-16 md:h-20 md:w-20"
              alt="enamad"
            />
          </a>
        </div>
      </div>

      <p
        style={{ direction: "ltr" }}
        className="text-center text-white font-bold text-sm md:text-base mb-6"
      >
        © 2025 awanshop All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
