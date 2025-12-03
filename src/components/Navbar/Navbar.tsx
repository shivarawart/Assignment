import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiMapPin,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  FaTags,
  FaPhoneAlt,
  FaHeart,
  FaTruck,
  FaShoppingCart,
  FaFileSignature,
} from "react-icons/fa";

import flag from "../assets/imageC.png";
import logo from "../assets/Screenshot 2025-12-02 222417.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "NEW ARRIVAL",
    "RINGS",
    "EARRINGS",
    "PENDANTS",
    "BRACELETS",
    "SOLITAIRES",
    "GOLD COINS",
    "ALL JEWELLERY",
  ];

  const menuItems = [
    { icon: <FaTags />, text: "OFFERS" },
    { icon: <FaPhoneAlt />, text: "CONTACT US" },
    { icon: <FaHeart />, text: "WISHLIST" },
    { icon: <FaTruck />, text: "DELIVERY" },
    { icon: <FaShoppingCart />, text: "CART" },
    { icon: <FaFileSignature />, text: "VERIFY REPORT" },
  ];

  return (
    <div className="w-full flex flex-col font-Mulish bg-white shadow-sm">

      <div className="hidden md:flex w-full h-9 bg-amber-500 items-center px-6 text-white text-[13px] tracking-wide relative">

        <p className="absolute left-1/2 -translate-x-1/2 flex items-center">
          Refer and earn extra discount{" "}
          <a href="#" className="underline text-blue-900 font-semibold ml-1">
            click here...
          </a>
        </p>

        <div className="flex items-center gap-2 ml-auto cursor-pointer hover:text-yellow-200 transition">
          <span>Pincode</span>
          <FiMapPin className="text-[17px]" />
          <img src={flag} alt="flag" className="h-5 w-5 rounded-full" />
        </div>
      </div>

      <div
        className="w-full h-16 sm:h-24 flex items-center justify-between px-4 md:px-10" 
        style={{
          background:
            "linear-gradient(90deg, #FFF1DB 0%, #FFFFFF 50%, #FFF1DB 100%)",
        }}
      >
        {/* LEFT SECTION (MOBILE: MENU ICON, DESKTOP: LOGO) */}
        <div className="flex items-center gap-4">
          
          {/* MOBILE: HAMBURGER MENU ICON */}
          <button 
            className="md:hidden text-2xl text-gray-700 h-full"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
          
          {/* LOGO */}
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-sm rounded-xl"
          />

          {/* BRAND TEXT (HIDDEN ON MOBILE, VISIBLE ON SM/MD) */}
          <div className="hidden sm:flex flex-col leading-none">
            <h2 className="text-[18px] sm:text-[22px] font-extrabold tracking-wide text-gray-900">
              GARNET LANEE
            </h2>
            <p className="text-[10px] sm:text-[11px] text-gray-600 mt-[3px] tracking-wide">
              Dazzling you Today, Tomorrow & Forever
            </p>
          </div>
        </div>

        {/* CENTER: SEARCH BAR (HIDDEN ON MOBILE, VISIBLE ON MD/LG) */}
        <div className="hidden md:flex w-[35%] relative">
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full h-11 rounded-full border border-orange-300 pl-5 pr-12 text-[15px] focus:outline-none shadow-sm"
          />
          <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 text-[20px]" />
        </div>

        {/* RIGHT: ICONS (MOBILE & DESKTOP) */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-gray-900">
          
          {/* MOBILE ICONS: Search, Wishlist, Cart */}
          <div className="flex md:hidden items-center gap-3">
            {/* SEARCH ICON */}
            <FiSearch className="text-xl text-gray-700" />
            
            {/* WISHLIST ICON */}
            <FaHeart className="text-xl text-gray-700" />
            
            {/* CART ICON WITH BADGE */}
            <div className="relative cursor-pointer">
                <FaShoppingCart className="text-xl text-gray-700" />
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-orange-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                    1
                </span>
            </div>
          </div>


          {/* DESKTOP ICONS (HIDDEN ON MOBILE, VISIBLE ON LG) */}
          <div className="hidden lg:flex items-center gap-8 text-gray-900">
            {[
              { icon: <FaTags />, label: "OFFERS" },
              { icon: <FaPhoneAlt />, label: "CONTACT US" },
              { icon: <FaHeart />, label: "WISHLIST" },
              { icon: <FaTruck />, label: "DELIVERY" },
              { icon: <FaShoppingCart />, label: "CART" },
              { icon: <FaFileSignature />, label: "VERIFY" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 cursor-pointer group transition-all"
              >
                <span className="text-orange-500 text-[20px] group-hover:text-orange-600 transition">
                  {item.icon}
                </span>

                <span className="text-[11px] font-semibold tracking-wide group-hover:text-orange-600">
                  {item.label}
                </span>
              </div>
            ))}

            {/* USER SECTION */}
            <div className="flex flex-col items-center cursor-pointer group">
              <FiUser className="text-[22px] text-orange-500 group-hover:text-orange-600" />
              <p className="text-[11px] font-semibold border-b border-orange-400 mt-[2px] group-hover:text-orange-600">
                Hi, Ashish
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="hidden md:flex w-full h-12 bg-blue-100 items-center gap-28 px-10 text-[15px] font-semibold overflow-x-auto">
        {categories.map((item, index) => (
          <h5
            key={index}
            className="cursor-pointer hover:text-amber-700  transition-all hover:scale-105 whitespace-nowrap"
          >
            {item}
          </h5>
        ))}
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-[80%] h-full bg-white shadow-xl z-[999] p-5 animate-slide">

          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl mb-4 text-gray-700"
          >
            <FiX />
          </button>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-11 rounded-full border border-orange-300 pl-5 pr-12 text-sm"
            />
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 text-lg" />
          </div>

          <div className="flex flex-col gap-5 text-gray-800 text-[16px] font-semibold">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-9">
                <span className="text-orange-600 text-lg">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <FiUser className="text-xl" />
            <p className="font-semibold text-orange-500">Hi, Ashish Sood</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;