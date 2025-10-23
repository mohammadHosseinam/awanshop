import React, { useState } from 'react'
import MoreIcon from '../../assets/icons/more'
import BasketIcon from '../../assets/icons/basket'
import UserIcon from '../../assets/icons/userIcon'
import awanLogo from '../../assets/images/AWAN LOGO.png'
import { Link, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

function Header({ HomePage = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const basket = localStorage.getItem("OrderBasket") || "[]"
  const parsedBasket = JSON.parse(basket)
  const location = useLocation()
  const userPrrofile = Cookies.get("authToken") || ""

  return (
    <header className={`w-full xl:pt-5 ${HomePage ? "lg:px-20" : ""}`}>
      <div
        className={`flex justify-between items-center ${HomePage ? "bg-[#F9F6F2] rounded-2xl shadow-sm py-3 px-4 sm:px-7" : "bg-[#F9F6F2] py-3 px-5 shadow-sm"
          }`}
      >
        {/* Left section */}
        <div className="flex items-center gap-2 w-fit xl:w-auto">
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-neutral-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MoreIcon />
          </button>
          <Link to="/">
            <img src={awanLogo} alt="AWAN Logo" className="w-20 sm:w-24" />
          </Link>

          {/* Hamburger Menu for Mobile */}

        </div>

        {/* Navigation links - Desktop */}
        <nav className="hidden xl:flex gap-6">
          <a className=" font-semibold text-slate-900 cursor-pointer">دسته بندی</a>
          <a className=" font-semibold text-slate-900 cursor-pointer">فروشگاه</a>
          <a className=" font-semibold text-slate-900 cursor-pointer">ارتباط با ما</a>
        </nav>

        {/* Right section */}
        <div className="flex gap-3 items-center">
          <Link to="/basket">
            <BasketIcon conut={parsedBasket.length} />
          </Link>
          {userPrrofile ? (
            <Link to="/adminPanel">
              <UserIcon />
            </Link>
          ) : (
            <a
              className={`${HomePage ? "bg-[#7C1616]" : "bg-green-600"
                } text-white text-xs xl:text-base px-4  w-full py-2 rounded-xl hover:opacity-90 transition flex`}
              href={`/signIn?backUrl=${location.pathname}`}
            >
              ورود به حساب
            </a>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="xl:hidden absolute top-[98px] right-[20px] w-[calac(100%-20px)] bg-[#F9F6F2] shadow-md rounded-2xl py-4 px-6 flex flex-col gap-4 z-50">
          <a className="font-semibold text-slate-900 cursor-pointer">دسته بندی</a>
          <a className="font-semibold text-slate-900 cursor-pointer">فروشگاه</a>
          <a className="font-semibold text-slate-900 cursor-pointer">ارتباط با ما</a>
        </div>
      )}
    </header>
  )
}

export default Header
