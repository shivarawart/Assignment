import React, { useState } from "react";
// Lucide icons are correctly typed when imported
import { Truck, RefreshCw, HeartHandshake, ShieldCheck } from "lucide-react";


// FIX: Replacing local image imports with placeholder URLs for the single-file environment.
import ring1 from "../assets/imgA.png"
import ring2 from '../assets/imageB.png'
import ring3 from '../assets/ringThree.png'
// const ring1: string = "https://placehold.co/100x100/F97316/FFFFFF?text=Ring+1";
// const ring2: string = "https://placehold.co/100x100/A8A29E/FFFFFF?text=Ring+2";
// const ring3: string = "https://placehold.co/100x100/F97316/FFFFFF?text=Ring+3";
const ring4: string = "https://placehold.co/100x100/A8A29E/FFFFFF?text=Ring+4";

const InfoIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F97316">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 
    1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

// Define props interface for PolicyCard
interface PolicyCardProps {
  // icon is a component (like a Lucide icon) that accepts className
  icon: React.ComponentType<{ className?: string }>; 
  title: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ icon: Icon, title }) => (
  // FIX: Changed non-standard 'w-25' to 'w-24' (standard Tailwind utility)
  <div className=" w-24 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center gap-2">
    {/* FIX: Changed h-10 to h-6 to prevent icon from stretching */}
    <Icon className="w-6 h-6 text-orange-500" />
    <p className="text-xs text-center text-gray-700 font-medium">{title}</p>
    <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
  </div>
);

// Define props interface for ReadyToShipCard
interface ReadyToShipCardProps {
    size: number;
    selected: boolean;
    onClick: () => void;
}

const ReadyToShipCard: React.FC<ReadyToShipCardProps> = ({ size, selected, onClick }) => (
  <div
    onClick={onClick}
    className={`w-40 rounded-2xl shadow-lg border-2 cursor-pointer 
    ${selected ? "border-orange-500" : "border-gray-200"} bg-white`}
  >
    <div className="p-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">14Kt</div>
        <span className="text-sm font-medium text-gray-800">Rose Gold</span>
      </div>
      <div className="w-12 h-12 mx-auto bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
        {size}
      </div>
      <p className="text-sm font-medium text-gray-700 mt-2">Size</p>
    </div>
    <button
      className={`w-full py-3 font-bold text-sm 
      ${selected ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white" : "bg-gray-100 text-gray-700"}`}
    >
      {selected ? "Selected ✓" : "Select"}
    </button>
  </div>
);

// The main component uses explicit return type React.FC<object> since it takes no props
const ProductDetailsSection: React.FC<object> = () => {
  // Use type inference for useState, which defaults to number[] or specify it: useState<number>(8)
  const [selectedSize, setSelectedSize] = useState<number>(8);
  const sizes: number[] = [8, 7, 9];

  return (
    <div className="w-full py-10 px-4 lg:px-8 font-sans">

      {/* ---------------- Product Info Header ---------------- */}
      <div className="flex items-center gap-3 mb-6">
        <InfoIcon />
        <h3 className="text-xl font-bold text-gray-800">Product Information:</h3>
        </div>

      <p className="text-sm ml-8 text-gray-700 mb-8">
        *Neck chain displayed is not part of the product.
      </p>

      {/* ---------------- TOP TWO COLUMNS ---------------- */}
      <div className="flex flex-col w-full lg:flex-row justify-between gap-10">

        {/* LEFT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 flex-1 border-b pb-8">

          <div>
            <h4 className="font-bold mb-3 text-gray-800">Dimension</h4>
            <p className="text-sm text-gray-700">Width - 4.80 mm</p>
            <p className="text-sm text-gray-700">Height - 2.30 mm</p>
            <p className="text-sm text-gray-700">Size - 12 (51.8 mm)</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-gray-800">Weight</h4>
            <p className="text-sm text-gray-700">Approx.Weight - 3.920 Gm</p>
            <p className="text-sm text-orange-600 font-bold">Purity - 18 KT</p>
            <p className="font-medium text-sm text-gray-800">Product Id</p>
            <p className="text-sm text-gray-900">PRD-LR-2634-GL-2023-2040</p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-gray-800">Diamonds & Gemstones</h4>
            <p className="text-sm text-gray-700">Diamond Type - IJ-SI</p>
            <p className="text-sm text-gray-700">Setting Type - Micro Prong</p>
            <p className="text-sm text-gray-700">Total Number - 56</p>
            <p className="text-sm text-gray-700">Total Weight - 0.22 ct</p>
          </div>

        </div>

        {/* RIGHT: POLICY CARDS */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center">
          <PolicyCard icon={Truck} title="Cash on Delivery" />
          <PolicyCard icon={RefreshCw} title="7 Days Return" />
          <PolicyCard icon={HeartHandshake} title="Lifetime Exchange" />
          <PolicyCard icon={ShieldCheck} title="BIS Hallmark" />
        </div>

      </div>


      {/* ---------------- READY TO SHIP + MORE RINGS ---------------- */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 w-full">

        {/* LEFT: READY TO SHIP */}
        <div className="bg-white p-6 rounded-xl">
          <h3 className="text-lg font-bold text-gray-800">Ready to Ship</h3>
          <p className="text-xs text-gray-600 mb-6 ml-6">
            Select any one of the combination, if you are looking for fast delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <ReadyToShipCard
                key={size}
                size={size}
                selected={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: MORE RINGS */}
        {/* FIX: Changed w-3/6 to w-full to ensure it fills the grid column */}
        <div className="p-6 w-full rounded-xl">
          
          {/* More 18 Rings */}
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">More 18 Rings</h4>
            <a className="text-sm font-semibold text-orange-600">View All →</a>
          </div>

          {/* FIX: Changed w-3/4 to w-full to ensure image grid uses available space */}
          <div className="grid grid-cols-3 w-full   mb-3">
            <img src={ring1} alt="Related ring 1" className="rounded-lg shadow-sm object-cover  w-3/10 aspect-square" />
            <img src={ring2} alt="Related ring 2" className="rounded-lg shadow-sm object-cover w-3/10 aspect-square" />
            <img src={ring3} alt="Related ring 3" className="rounded-lg shadow-sm object-cover w-3/10 aspect-square" />
          </div>

          {/* More Yellow Rings */}
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">More Yellow Gold Rings</h4>
            <a className="text-sm font-semibold text-orange-600">View All →</a>
          </div>
          
          {/* FIX: Changed w-3/4 to w-full to ensure image grid uses available space */}
          <div className="grid grid-cols-3 w-full gap-3 mb-6">
            <img src={ring1} alt="Related ring 4" className="rounded-lg shadow-sm object-cover w-3/10 aspect-square" />
          </div>
          


        </div>

      </div>



    </div> );
}

export default ProductDetailsSection;