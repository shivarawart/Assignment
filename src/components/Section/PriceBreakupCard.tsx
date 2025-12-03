import React, { useState } from "react";
import {
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  SkipForward,
  SkipBack,
  X,
  Truck,
  ChevronDown,
  Share2,
} from "lucide-react";

import imageA from "../assets/imageC.png"
import imageB from "../assets/imageC.png"
// --- 1. INTERFACE DEFINITIONS (TypeScript) ---

interface Customization {
  label: string;
  value: string;
  editable: boolean;
}

interface Offer {
  title: string;
  description: string;
  color: string;
}

interface ProductData {
  breadcrumbs: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  saveAmount: string;
  discountTag: string;
  customizations: Customization[];
  images: string[];
  pincode: string;
  deliveryStatus: string;
  offers: Offer[];
}

interface CustomizationPillProps {
  label: string;
  value: string;
  isActive: boolean;
}

interface OfferCardProps extends Offer {}

// --- 2. CONSTANTS AND DATA ---

// Placeholder images
// Using a smaller aspect ratio for the thumbnails to better match the image
// const ringone: string = "https://placehold.co/400x400/f8c057/2e2e2e?text=Ring+1";
// const ringtwo: string = "https://placehold.co/400x400/f8c057/2e2e2e?text=Ring+2";
// const ringthree: string = "https://placehold.co/400x400/f8c057/2e2e2e?text=Ring+3";
import  ringone from "../assets/imgA.png"
import  ringtwo from "../assets/imageB.png"
import ringthree from "../assets/imageD.png"

const COLORS = {
  // Main Action Colors (used for gradients and main highlights)
  // Matching the warmer orange/gold tones from the image
  darkOrange: "#F89D42", // Updated: Stronger orange/gold bottom
  lightOrange: "#FEBD54", // Updated: Lighter gold/yellow top
  
  // Customization Pill Colors
  pillBorder: "#FF6E00",
  pillBackground: "#FFF8F2", // Lightest orange background

  // Offer Card Colors (Vertical Bars)
  offerBar1: "#EEA09C", // Reddish-pink
  offerBar2: "#FD9149", // Stronger orange
  offerText: "#966535", // Light brown/beige text color

  // Lightest Background
  lightBg: "#F5F5F5",

  // New: Image Clarity Bar Background Color - Updated to match image light orange band
  clarityBarBg: "#FFF7EB",

  // New: Button Shadow Colors - Slightly adjusted for the new gradient
  buttonGlow: '0 0 10px rgba(253, 157, 66, 0.8)',

  // FIX: New colors for the Try On button are no longer needed as we use the main gradient
  // tryOnBg: "#F0C45C",
  // tryOnBorder: "#C09848",
};

// Unified Product Data structure (using the defined interface)
const productData: ProductData = {
  // Data adjusted to match the image content
  breadcrumbs: "Home / Products / Earrings / Just Lovely Earrings",
  title: "Dainty Crown Diamond Band Ring",
  subtitle: "Floral shine that can Entice",
  price: "34948",
  originalPrice: "36029",
  saveAmount: "1,081", // Same as image
  discountTag: "FLAT 3% On MRP",
  customizations: [
    { label: "Karat", value: "18 KT", editable: true },
    { label: "Gold Color", value: "Yellow Gold", editable: true },
    { label: "Clarity", value: "IJ-SI", editable: true },
  ],
  images: [ringone, ringtwo, ringthree],
  pincode: "140406",
  deliveryStatus: "Delivery by Sat, Jun 18 for Pincode 140406",
  offers: [
    { title: "Old Gold Exchange", description: "Now Exchange your old jewellery with a 0% deduction", color: COLORS.offerBar1 },
    { title: "Old Gold Exchange", description: "Now Exchange your old jewellery with a 0% deduction", color: COLORS.offerBar2 },
    { title: "Old Gold Exchange", description: "Now Exchange your old jewellery with a 0% deduction", color: COLORS.offerBar1 },
  ],
};


// --- 3. COMPONENTS (Typed) ---

// Customization Pill Component
const CustomizationPill: React.FC<CustomizationPillProps> = ({ label, value, isActive }) => (
  <div 
    className={`
      flex items-center space-x-2 text-sm font-semibold h-8 px-3 py-1 rounded-md cursor-pointer 
      ${isActive 
        ? 'text-orange-600'
        : 'text-gray-700'
      }
      bg-white shadow-sm hover:shadow-md transition relative border border-orange-200
    `}
    style={{ backgroundColor: COLORS.pillBackground }}
  >
    <span>{value}</span>
    {/* The image shows an orange X on the first two, and a dropdown on the last (Clarity) */}
    {label === "Clarity" ? (
      <ChevronDown size={16} className="text-orange-500" />
    ) : (
      <X size={14} className="text-orange-500 hover:text-red-500 transition" />
    )}
  </div>
);


// Offer Card Component
const OfferCard: React.FC<OfferCardProps> = ({ title, description, color }) => (
  <div className="flex bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-32 md:h-28">
    {/* Colored Vertical Bar */}
    <div className="w-[8px]" style={{ backgroundColor: color }}></div>

    <div className="flex-1 p-3 text-sm flex flex-col justify-between">
      <div>
        <p className="font-bold text-xs" style={{ color: color }}>
          {title}
        </p>
        <p className="mt-1 text-gray-700 text-[10px] leading-snug font-medium">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center pt-2">
        <span className="text-[10px] font-semibold cursor-pointer underline hover:no-underline" style={{ color: color }}>
          More &gt;
        </span>
      </div>
    </div>
  </div>
);


const PriceBreakupCard: React.FC = () => {
  const [pincode, setPincode] = useState<string>(productData.pincode);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

  const activeImg: string = productData.images[activeImgIndex];

  // Custom Gradient for action buttons
  const buttonGradient: string = `linear-gradient(to top, ${COLORS.darkOrange}, ${COLORS.lightOrange})`; // Updated gradient direction to match image
  
  // Custom CSS classes for the trapezoidal button shapes (matching the image)
  // TRY ON is right-clipped: (0 0, 100% 0, 88% 100%, 0 100%)
  // ADD TO CART is left-clipped: (12% 0, 100% 0, 100% 100%, 0 100%)
  const tryOnClipPath = { clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0 100%)' };
  const cartClipPath = { clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)' };
  
  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic validation to keep it numeric and within a certain length
    const value = e.target.value.replace(/\D/g, '').substring(0, 6);
    setPincode(value);
  }

  // Common styles for the illuminated circular buttons (Chevron Left/Right, Skip Back/Forward, and Play)
  const illuminatedButtonStyle: React.CSSProperties = {
    backgroundColor: 'white',
    boxShadow: COLORS.buttonGlow,
    border: `1px solid ${COLORS.lightOrange}`,
    color: COLORS.darkOrange,
  };
  
  // Custom style for the play button to use the strong gradient and white icon
  const playButtonStyle: React.CSSProperties = {
    background: buttonGradient,
    boxShadow: '0 4px 15px rgba(247, 116, 51, 0.6)',
    color: 'white',
  };


  return (
    <div className=" w-full bg-white md:bg-gray-50 font-sans text-gray-800 pb-20 md:pb-0">

      {/* Breadcrumbs (Desktop Only) - Shows where the component is located */}
      <div className="hidden md:block w-full mx-auto px-8 py-4  text-xs text-gray-500">
        {productData.breadcrumbs}
      </div>

      {/* Main Grid Container */}
      <div className="w-11/12 mx-auto lg:grid lg:grid-cols-12 lg:gap-15 bg-white md:bg-transparent">

        {/* ================= LEFT COLUMN: IMAGE GALLERY (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 w-full relative px-3   shadow-md md:px-0">
          
          {/* Main Image Container */}
          <div className="relative  overflow-hidden w-full  mb-7 rounded-lg"> 
            
            {/* Badges (LIME LIGHT) & 360° Icon */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white text-gray-800 text-[10px] font-bold px-3 py-1 rounded shadow-sm border border-gray-300">
                LIME LIGHT
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10">
              {/* 360 icon has a gold glow/gradient border in the image */}
              <div className="bg-white/90 rounded-full p-2 text-center shadow-md flex items-center justify-center h-12 w-12 border border-gray-200" style={{ boxShadow: COLORS.buttonGlow, border: `1px solid ${COLORS.lightOrange}` }}>
                <span className="text-xl font-extrabold mr-0.5" style={{ color: COLORS.darkOrange }}>360</span>
                <span className="text-xs">°</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full  h-full aspect-square flex items-center justify-center pt-10">
              <img
                src={activeImg}
                alt={productData.title}
                className="w-ful h-auto object-contain p-8 md:p-10 mix-blend-multiply"
                onError={(e) => {
                    // Fallback to a plain placeholder if image fails to load
                    (e.target as HTMLImageElement).onerror = null; 
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x400/cccccc/333333?text=Image+Error";
                }}
              />
              
            </div>
            
            {/* Vertical Pagination/Color Swatches with Active Indicator Bar */}
            <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-row items-center space-x-2">
              
              {/* Column 1: Active Indicator Bar (Orange for first item, gray for others) */}
              <div className="flex flex-col space-y-2">
                {/* The image shows a longer orange indicator bar */}
                {[0, 1,2].map((index) => (
                  <div 
                    key={index}
                    // The image shows the first item active with a longer bar
                    className={`rounded-full transition duration-300 ${index === 0 
                      ? 'h-6 w-1' // Active: Tall bar
                      : 'h-2 w-2 bg-gray-300 opacity-60' // Inactive: Small grey dot
                    }`}
                    style={{
                        backgroundColor: index === 0 ? COLORS.darkOrange : 'rgb(209, 213, 219)', // Match image
                        marginLeft: index === 0 ? '0' : '4px'
                    }}
                  ></div>
                ))}
              </div>

              {/* Column 2: Color Swatches */}
              <div className="flex flex-col  space-y-2 p-1 rounded-full">
                {/* Gold/Yellow Active Swatch - Use illuminated style */}
                <div 
                  className="w-5 h-5 rounded-full cursor-pointer transition hover:scale-110"
                  style={{backgroundColor: '#FFE9C9', ...illuminatedButtonStyle}}
                ></div>
                {/* White/Silver Inactive Swatch */}
                <div className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer bg-gray-200 transition hover:scale-110"></div>
                {/* Rose Gold Inactive Swatch */}
                <div className="w-5 h-5 rounded-full border border-gray-300 cursor-pointer bg-red-200 transition hover:scale-110"></div>
              </div>
              
            </div>
            
          </div>

          {/* === IMAGE CONTROLS SECTION (Thumbnails, Video Controls, and Nav Arrows) === */}
          {/* This section is hidden on mobile, visible on desktop/md+ */}
          <div className="hidden md:flex mt-4 items-center  justify-center space-x-6">
            
            {/* 1. Carousel Chevron Left (Illuminated Style) */}


            {/* 2. Thumbnails and Video Controls Group (Center Block) */}
            <div className="flex space-x-3 items-center">
              
              {/* Thumbnails */}
              {productData.images.map((img, i) => (
                <div
                  key={i}
                  className={`w-14 h-14 rounded-full border p-1 flex items-center justify-center bg-white shadow-md cursor-pointer transition ${activeImgIndex === i ? 'border-2 ' : 'border-gray-300 opacity-80 hover:opacity-100'}`}
                  onClick={() => setActiveImgIndex(i)}
                >
                  <img src={img} className="rounded-full w-full h-full object-cover mix-blend-multiply" alt={`view ${i + 1}`} />
                </div>
              ))}

              {/* Video Player Controls (Skipping and Play Button) */}
              <div className="flex space-x-2 items-center ml-4">
                {/* Skip Back (Illuminated Style) */}
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
                  style={illuminatedButtonStyle} // Used illuminated style instead of skip style to match image
                >
                  <SkipBack size={16} />
                </button>
                {/* Play Button (Strong Gradient) */}
                <button
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition hover:scale-105"
                  style={playButtonStyle} // Use the new play style
                >
                  <Play size={18} fill="white" className="ml-0.5" />
                </button>
                {/* Skip Forward (Illuminated Style) */}
                
                <button 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
                  style={illuminatedButtonStyle} // Used illuminated style instead of skip style to match image
                >
                  <SkipForward size={16} />
                </button>
              </div>
            </div>

            {/* 3. Carousel Chevron Right (Illuminated Style) */}
                        <button 
              className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
              style={illuminatedButtonStyle}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
              style={illuminatedButtonStyle}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          {/* === END IMAGE CONTROLS SECTION === */}

          {/* 4. Product Clarity Text Bar (Block element, outside the image viewing area) */}
         <p className="w-full text-center text-[10px] text-gray-700  font-semibold px-2 py-2 mt-4 md:mt-9 bg-fuchsia-200 shadow-sm" style={{}}>
            PRODUCT SHOWN IN IMAGE IS IN 10X ZOOM FOR YOUR CLARITY
          </p>


        </div>
        


        {/* ================= RIGHT COLUMN: PRODUCT DETAILS (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 pt-4 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 px-4 md:px-0">

            {/* Product Info (col-span-5) */}
            <div className="md:col-span-5">

              {/* Title, Subtitle, and Wishlist/Share */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">{productData.title}</h1>
                  <p className="text-sm text-orange-500 mb-4">{productData.subtitle}</p>
                </div>
                {/* Wishlist and Share Icons - Matching image positioning */}
                <div className="flex space-x-3 text-gray-500 mt-2">
                  <Heart size={20} className="cursor-pointer hover:text-red-500 transition" />
                  <Truck size={20} className="cursor-pointer hover:text-orange-500 transition" />
                </div>
              </div>

              {/* Price Section */}
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-2xl font-bold text-gray-900">₹ {productData.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{productData.originalPrice}</span>
                  <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-sm">Save ₹{productData.saveAmount}</span>
                </div>
                <div className="flex items-center gap-4 mt-1">
                    <p className="text-[11px] text-gray-400">MRP (Inclusive all Taxes)</p>
                    <p className="text-xs text-red-500 font-semibold">{productData.discountTag}</p>
                </div>
              </div>

              {/* Customisation */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-orange-600 mb-2">Customisation:</h3>
                <div className="border border-orange-200 rounded-lg p-3 flex gap-3 text-sm flex-wrap bg-white">
                  {productData.customizations.map((item, index) => (
                    <CustomizationPill 
                      key={index}
                      label={item.label}
                      value={item.value}
                      isActive={true} 
                    />
                  ))}
                </div>
              </div>

              {/* Delivery Check */}
              <div className="mt-6">
                <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                  <span>Check Delivery Date</span>
                  <span className="text-orange-500 cursor-pointer flex items-center gap-1">
                    Locate Me
                  </span>
                </div>

                <div className="relative flex border border-gray-300 rounded-lg focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={pincode}
                    placeholder="Enter Pincode"
                    className="flex-1 rounded-l-lg pl-9 pr-2 py-3 text-sm font-semibold focus:outline-none"
                    onChange={handlePincodeChange}
                    maxLength={6}
                  />
                  <button 
                    className="px-6 rounded-r-lg text-white text-sm font-bold shadow-md transition whitespace-nowrap"
                    style={{ background: `linear-gradient(to top, ${COLORS.darkOrange}, ${COLORS.lightOrange})` }}
                  >
                    Submit
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-2 flex items-center">
                  <Truck size={12} className="inline mr-1 text-orange-500" />
                  Delivery by <span className="font-semibold text-gray-700 mx-1">Sat, Jun 18</span> for Pincode <span className="font-semibold text-gray-700 ml-1">{pincode}</span>
                  <span className="text-orange-500 ml-1 cursor-pointer underline hover:no-underline">(Change)</span>
                </p>
              </div>
            </div>

            {/* Offer Cards (col-span-2) */}
            <div className="md:col-span-2 flex flex-col justify-start space-y-4">
              {/* Upward chevron for visual continuity */}
              <div className="flex justify-center pt-2">
                  <ChevronDown size={24} className="text-orange-400 opacity-70 cursor-pointer transform rotate-180" />
              </div>
              {productData.offers.map((offer, index) => (
                <OfferCard
                  key={index}
                  title={offer.title}
                  description={offer.description}
                  color={offer.color}
                />
              ))}
              {/* Downward chevron for visual continuity */}
              <div className="flex justify-center pt-2">
                  <ChevronDown size={24} className="text-orange-400 opacity-70 cursor-pointer" />
              </div>
            </div>
            
            {/* Action Buttons - Both use the same gradient and trapezoidal shapes */}
            <div className="md:col-span-7 flex gap-4 mt-8 md:mt-12 w-full">
              
              {/* TRY ON Button (Right side clipped) - Uses gradient and white text now */}
              <button
                className="flex-1 py-4 text-white font-bold uppercase shadow-lg transition relative overflow-hidden text-lg"
                style={{ 
                    background: buttonGradient,
                    boxShadow: '0 4px 15px rgba(253, 157, 66, 0.6)',
                    ...tryOnClipPath
                }}
              >
                TRY ON
              </button>

              {/* ADD TO CART Button (Left side clipped) */}
              <button
                className="flex-1 py-4 text-white font-bold uppercase shadow-lg transition relative overflow-hidden text-lg"
                style={{ 
                  background: buttonGradient,
                  boxShadow: '0 4px 15px rgba(253, 157, 66, 0.6)',
                  ...cartClipPath
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE STICKY BOTTOM BAR (TRY ON & ADD TO CART) ================= */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden shadow-2xl z-20 flex justify-between gap-4">
        {/* Mobile TRY ON */}
        <button
          className="flex-1 py-3 rounded-full text-white font-bold uppercase tracking-wide text-sm shadow-lg hover:brightness-110 transition"
          style={{ background: buttonGradient }}
        >
          TRY ON
        </button>
        {/* Mobile ADD TO CART */}
        <button
          className="flex-1 py-3 rounded-full text-white font-bold uppercase tracking-wide text-sm shadow-lg hover:brightness-110 transition"
          style={{ background: buttonGradient }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default PriceBreakupCard;