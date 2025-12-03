import React from "react";
import { MapPin } from "lucide-react";
// Assuming mapBackground is correctly imported for the map image
import mapBackground from "../assets/map.png";

const FindInStoreSection = () => {
  return (
    // Set a moderate height suitable for mobile viewing, defaulting to full width
    <section className="relative w-full h-[600px] overflow-hidden py-10">
      
      {/* Background Map - positioned to fill the section */}
      <div className="absolute w-full inset-0">
        <img
          src={mapBackground}
          alt="Store locator map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      {/* Center Wrapper */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        
        {/*
          MAIN CARD CONTAINER: 
          1. Default (Mobile) styles: w-full max-w-sm (Narrow pop-up)
          2. Web (md:) styles: md:max-w-xl (Wider card)
        */}
        <div
          className="
            relative 
            bg-white 
            bg-opacity-[0.98] 
            backdrop-blur-sm
            rounded-xl
            shadow-2xl 
            
            // MOBILE STYLES
            w-full max-w-sm 
            py-8 px-5 
            
            // WEB STYLES (Added to maintain the original web structure if viewed on desktop)
            md:max-w-xl
            md:py-12 md:px-10 
            
            text-center
          "
        >
          
          {/*
            WEB VIEW: This section will be visible on medium screens and up (md:)
            It matches the simple "Enter Pincode" input and "View Stores" button layout.
          */}
          <div className="hidden md:block">
            {/* TITLE & SUBTEXT for Web */}
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
              Find in Store near you!
            </h2>
            <p className="text-[11px] md:text-xs text-gray-600 leading-5 max-w-[450px] mx-auto mb-10">
              Have to see it to believe it? Check here if the design is available in the store
              or not. You can also book an appointment
            </p>
            
            {/* INPUT + BUTTON for Web */}
            <div className="flex flex-col items-center gap-7">
              {/* INPUT FIELD */}
              <div className="relative w-72 md:w-80">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="
                    w-full 
                    pl-12 pr-4 py-4 
                    border border-gray-300 
                    rounded-md 
                    text-sm text-gray-700
                    placeholder-gray-500
                    focus:outline-none
                    focus:border-orange-400
                    shadow-sm
                  "
                />
              </div>
              {/* BUTTON */}
              <button
                className="
                  px-14 py-4 
                  bg-gradient-to-r from-orange-500 to-yellow-400
                  text-white font-semibold text-sm
                  rounded-lg
                  shadow-lg
                  hover:shadow-xl
                  transition-all duration-300
                  hover:scale-[1.03]
                "
              >
                View Stores & Designs
              </button>
            </div>
          </div>


          {/*
            MOBILE VIEW: This section will be visible by default (mobile first) and hidden on medium screens and up (md:hidden)
            It matches the detailed result card shown in the mobile image.
          */}
          <div className="block md:hidden">
            {/* Dashed Border/Corner Guides (Specific to the mobile image look) */}
            <div className="absolute top-0 left-0 h-4 border-t-2 border-l-2 border-dashed border-gray-400 opacity-50 rounded-tl-xl transform -translate-y-4 -translate-x-4 w-10" />
            <div className="absolute top-0 right-0 h-4 border-t-2 border-r-2 border-dashed border-gray-400 opacity-50 rounded-tr-xl transform -translate-y-4 translate-x-4 w-10" />

            {/* TITLE & SUBTEXT for Mobile */}
            <h2 className="text-xl font-medium text-gray-800 mb-3">
              Find in Store near you!
            </h2>
            <p className="text-[10px] text-gray-600 leading-4 max-w-[300px] mx-auto mb-6">
              Have to see it to believe it? Check here if the design is available in the store
              or not. You can also book an appointment
            </p>

            {/* INPUT + BUTTON CONTAINER for Mobile */}
            <div className="flex flex-col items-center gap-4">

              {/* INPUT FIELD CONTAINER - Showing search result/pincode input */}
              <div className="relative w-full max-w-[250px] mx-auto">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  size={16}
                />
                <div className="flex justify-between items-center border border-gray-300 rounded-md shadow-sm">
                  <input
                    type="text"
                    placeholder="Showing Near 605002"
                    className="
                      w-full pl-9 pr-2 py-2 
                      text-sm text-gray-700
                      placeholder-gray-700
                      focus:outline-none
                      bg-transparent
                    "
                  />
                  <button className="text-xs text-orange-600 font-semibold px-3 py-2 border-l border-gray-200 hover:text-orange-700 transition-colors">
                      Check Pincode
                  </button>
                </div>
              </div>

              {/* Simulated Store Location Card (Detailed Mobile Card) */}
              <div className="w-full mt-4 bg-gradient-to-r from-orange-50 via-yellow-100 to-orange-50 p-4 rounded-lg shadow-md border border-yellow-200 text-left relative">
                  {/* Store Info */}
                  <div className="flex justify-between items-start mb-2">
                      <div>
                          <h3 className="text-base font-semibold text-gray-800">Ram Nagar</h3>
                          <p className="text-xs text-gray-600">No.2, Villa Street, Near Jo</p>
                          <p className="text-xs text-gray-600 mb-2">Villupuram - 605 002</p>
                      </div>
                      {/* Call/WhatsApp Icons (Simulated) */}
                      <div className="flex space-x-2">
                          <span className="bg-white/70 p-1.5 rounded-full shadow-sm border border-gray-200 hover:bg-white cursor-pointer transition-colors">
                              📞
                          </span>
                          <span className="bg-white/70 p-1.5 rounded-full shadow-sm border border-gray-200 hover:bg-white cursor-pointer transition-colors">
                              💬
                          </span>
                      </div>
                  </div>

                  {/* Details Row */}
                  <div className="flex justify-between items-center mb-4">
                      <p className="text-sm font-medium text-orange-600 underline">Show Store Details</p>
                      <p className="text-sm font-semibold text-gray-700">3KM</p>
                  </div>

                  <hr className="border-t border-gray-200 mb-3" />

                  {/* Product/Visit Row */}
                  <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-700 font-medium space-x-4">
                          <p className="flex items-center"><span className="text-xs mr-1 bg-gray-200 rounded px-1.5 py-0.5 font-semibold">8</span> Size</p>
                          <p className="font-semibold">18KT Yellow Gold GH-SI</p>
                      </div>
                      <button className="bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-lg hover:bg-orange-600 transition-colors">
                          Book Visit
                      </button>
                  </div>

                  {/* Right Arrow (Simulated) */}
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl font-thin text-orange-400 rotate-90">&gt;</span>

              </div>

              {/* VIEW ALL DESIGNS BUTTON */}
              <button className="mt-4 text-xs font-semibold text-gray-700 hover:text-orange-500 transition-colors">
                  VIEW ALL DESIGNS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindInStoreSection;