import React, { useState } from 'react';
import { Info, ChevronUp } from 'lucide-react';

// Data based on your request
const priceData = {
  gold: {
    title: "Gold",
    items: [
      { name: "14 KT Yellow Gold", rate: "₹3,072 / g", weight: "2.960 g", value: "₹9,093", discount: "", finalValue: "₹9,093" }
    ],
    total: { name: "Total Gold Value", value: "₹9,093", finalValue: "₹9,093" }
  },
  diamond: {
    title: "Diamond /Stones",
    items: [
      { name: "IJ-SI Round", rate: "-", weight: "0.206 ct", value: "₹20,394", discount: "10%", finalValue: "₹18,355" },
      { name: "Solitaire IJ-SI Round - 2 Nos", rate: "-", weight: "0.206 ct", value: "₹20,394", discount: "", finalValue: "₹18,355" },
      { name: "Emerald Stone 1 Nos", rate: "-", weight: "0.206 ct", value: "₹20,394", discount: "", finalValue: "₹18,355" }
    ],
    total: { name: "Total Diamond Value", value: "₹20,394", finalValue: "₹18,355" }
  },
  makingCharges: {
    name: "Making Charges", value: "₹4,144", finalValue: "₹4,144"
  },
  summary: [
    { name: "Subtotal", value: "₹33,631", finalValue: "₹33,631" },
    { name: "Tax", value: "₹1,009", finalValue: "₹1,009" },
    { name: "Grand Total", value: "₹34,640", finalValue: "₹34,640", isGrand: true }
  ]
};

const PriceBreakup = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Common styling classes based on your inputs
  const textGray = "text-[#807F7F]";
  const textOrange = "text-[#F77433]";
  const cellBase = "py-3 px-2 flex items-center text-sm md:text-base font-sans";
  
  // Grid layout to match columns: Component, Rate, Weight, Value, Discount, Final Value
  // Weights approx: 2.5fr 1fr 1fr 1fr 0.5fr 1fr
  const gridClass = "grid grid-cols-[2.5fr_1fr_1.2fr_1fr_0.8fr_1.2fr] gap-2";

  return (
    <div className="w-full   mx-auto bg-white p-4 font-sans">
      
      {/* Top Toggle Header */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-sm font-bold text-[#302F2F] tracking-wide uppercase">PRICE BREAKUP</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-[#F77433] text-xs font-bold flex items-center hover:underline uppercase"
        >
          {isOpen ? "Show less" : "Show more"} 
          <ChevronUp className={`ml-1 w-4 h-4 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100">
          
          {/* Table Header - Orange Gradient */}
          <div className={`${gridClass} bg-gradient-to-r from-[#F77433] w-5/6 to-[#FEAF38] text-white text-xs font-bold uppercase py-3 px-4 rounded-t-sm mt-4`}>
            <div>COMPONENT</div>
            <div>RATE</div>
            <div>APPROX. WEIGHT</div>
            <div>VALUE</div>
            <div>DISCOUNT</div>
            <div className="text-right">FINAL VALUE</div>
          </div>

          <div className="text-sm">
            {/* --- Gold Section --- */}
            <div className="px-4 pt-4 pb-2">
              <div className={`${textOrange} font-bold text-base mb-2`}>{priceData.gold.title}</div>
              
              {priceData.gold.items.map((item, idx) => (
                <div key={idx} className={`${gridClass} border-b border-gray-100 last:border-0`}>
                  <div className={`${cellBase} ${textGray}`}>{item.name}</div>
                  <div className={`${cellBase} ${textGray}`}>{item.rate}</div>
                  <div className={`${cellBase} ${textGray}`}>
                    {item.weight}
                    <span className="ml-2 text-[#F77433] bg-[#F0F0F0] rounded p-1 cursor-pointer hover:bg-orange-100 transition-colors">
                      <Info size={12} strokeWidth={3} />
                    </span>
                  </div>
                  <div className={`${cellBase} ${textGray}`}>{item.value}</div>
                  <div className={`${cellBase} ${textGray}`}>{item.discount}</div>
                  <div className={`${cellBase} ${textGray} justify-end`}>{item.finalValue}</div>
                </div>
              ))}
              
              {/* Gold Total */}
              <div className={`${gridClass} py-2 font-bold`}>
                <div className={`${cellBase} ${textGray}`}>{priceData.gold.total.name}</div>
                <div className="col-span-2"></div>
                <div className={`${cellBase} ${textGray}`}>{priceData.gold.total.value}</div>
                <div></div>
                <div className={`${cellBase} ${textGray} justify-end`}>{priceData.gold.total.finalValue}</div>
              </div>
            </div>

            {/* --- Diamond/Stones Section --- */}
            <div className="px-4 pt-2 pb-2">
              <div className={`${textOrange} font-bold text-base mb-2`}>{priceData.diamond.title}</div>
              
              {priceData.diamond.items.map((item, idx) => (
                <div key={idx} className={`${gridClass} border-b border-gray-100`}>
                  <div className={`${cellBase} ${textGray}`}>{item.name}</div>
                  <div className={`${cellBase} ${textGray}`}>{item.rate}</div>
                  <div className={`${cellBase} ${textGray}`}>
                    {item.weight}
                    <span className="ml-2 text-[#F77433] bg-[#F0F0F0] rounded p-1 cursor-pointer hover:bg-orange-100 transition-colors">
                      <Info size={12} strokeWidth={3} />
                    </span>
                  </div>
                  <div className={`${cellBase} ${textGray}`}>{item.value}</div>
                  <div className={`${cellBase} ${textGray}`}>{item.discount}</div>
                  <div className={`${cellBase} ${textGray} justify-end`}>{item.finalValue}</div>
                </div>
              ))}

              {/* Diamond Total */}
              <div className={`${gridClass} py-2 font-bold`}>
                <div className={`${cellBase} ${textGray}`}>{priceData.diamond.total.name}</div>
                <div className="col-span-2"></div>
                <div className={`${cellBase} ${textGray}`}>{priceData.diamond.total.value}</div>
                <div></div>
                <div className={`${cellBase} ${textGray} justify-end text-lg`}>{priceData.diamond.total.finalValue}</div>
              </div>
            </div>

            {/* --- Making Charges --- */}
            <div className="px-4 pt-2 pb-4">
               <div className={`${gridClass}`}>
                  <div className={`${cellBase} ${textGray}`}>{priceData.makingCharges.name}</div>
                  <div className={`${cellBase} ${textGray}`}>-</div>
                  <div className={`${cellBase} ${textGray}`}>-</div>
                  <div className={`${cellBase} ${textGray}`}>{priceData.makingCharges.value}</div>
                  <div className={`${cellBase} ${textGray}`}>-</div>
                  <div className={`${cellBase} ${textGray} font-bold justify-end`}>{priceData.makingCharges.finalValue}</div>
                </div>
            </div>

            {/* --- Footer Summary (Gray Background) --- */}
            <div className="bg-[#FAFAFA] p-4 mt-2">
               {priceData.summary.map((row, idx) => (
                 <div key={idx} className={`${gridClass} ${row.isGrand ? 'py-3' : 'py-1'}`}>
                    <div className={`${cellBase} ${textGray} ${row.isGrand ? 'font-bold text-base' : ''}`}>
                      {row.name}
                    </div>
                    <div className="col-span-2"></div>
                    <div className={`${cellBase} ${textGray} ${row.isGrand ? '' : ''}`}>
                      {row.value}
                    </div>
                    <div></div>
                    <div className={`${cellBase} ${textGray} justify-end ${row.isGrand ? 'font-extrabold text-lg text-[#302F2F]' : ''}`}>
                      {row.finalValue}
                    </div>
                 </div>
               ))}
               <div className="text-right text-xs text-[#807F7F] font-bold mt-1 pr-2">
                 (MRP Incl. of all taxes)
               </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PriceBreakup;