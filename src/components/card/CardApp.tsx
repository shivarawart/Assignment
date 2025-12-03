import React, { useState } from "react";
import { Heart } from "lucide-react";

// Placeholder image URLs must be used as local imports are not supported in this environment.
// Using different placeholders to represent the variety in the product list.
// const imgPlaceholder1: string = "https://placehold.co/300x300/f3e8ff/5c4033?text=Ring+A";

import imgPlaceholder1 from "../assets/imageB.png"
import imgPlaceholder2 from "../assets/imgA.png"
// --- DATA & HELPERS ---

// Define the shape of a product object for better type safety
interface Product {
    id: number;
    img: string;
    badge: string;
    title: string;
    price: string;
    oldPrice: string;
    discount: string;
    color: 'Gold' | 'Yellow' | 'Rose' | 'White';
}

const products: Product[] = [
    {
        id: 1,
        img: imgPlaceholder1,
        badge: "TRENDING",
        title: "Yemeraly Wings Diamond Ring",
        price: "₹22,323",
        oldPrice: "₹29,323",
        discount: "10% off Making Charges",
        color: "Gold",
    },
    {
        id: 2,
        img: imgPlaceholder2,
        badge: "BEST SELLER",
        title: "Solitaire Elegance Ring",
        price: "₹27,899",
        oldPrice: "₹34,999",
        discount: "20% off Making Charges",
        color: "Yellow",
    },
    {
        id: 3,
        img: imgPlaceholder1,
        badge: "NEW",
        title: "Royal Crown Men's Ring",
        price: "₹31,450",
        oldPrice: "₹39,999",
        discount: "15% off Making Charges",
        color: "Gold",
    },
    {
        id: 4,
        img: imgPlaceholder2,
        badge: "TRENDING",
        title: "Eternal Halo Diamond Ring",
        price: "₹42,199",
        oldPrice: "₹55,000",
        discount: "23% off Making Charges",
        color: "Rose",
    },
    {
        id: 5,
        img: imgPlaceholder1,
        badge: "LIMITED",
        title: "Twin Heart Couple Bands",
        price: "₹19,999",
        oldPrice: "₹26,500",
        discount: "25% off Making Charges",
        color: "White",
    },
];

// Function to map color names to Tailwind CSS classes for the ring indicator
const getColorRing = (color: Product['color']): string => {
    switch (color.toLowerCase()) {
        case 'yellow':
            return "bg-gradient-to-br from-amber-400 to-yellow-600 ring-yellow-300";
        case 'rose':
            return "bg-gradient-to-br from-rose-400 to-pink-600 ring-rose-300";
        case 'white':
            return "bg-gradient-to-br from-gray-300 to-gray-500 ring-gray-300";
        case 'gold':
        default:
            // Gold is often represented similarly to yellow/amber tones in jewelry UIs
            return "bg-gradient-to-br from-amber-400 to-yellow-600 ring-yellow-300";
    }
};

// --- PRODUCT CARD COMPONENT ---

const ProductCard: React.FC<{ p: Product }> = ({ p }) => {
    const primaryRingColor = getColorRing(p.color);
    // State to manage the wishlist status locally
    const [isWished, setIsWished] = useState(false);

    const toggleWishlist = () => {
        // In a real app, this would trigger an API call to save the state to Firestore
        setIsWished(!isWished);
    };
    
    return (
        // Card container with reduced max-w for a sleeker look and margin auto for centering
        <div className="w-full group">
            <div className="bg-white rounded-[24px] shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1">
                
                {/* Image Area */}
                <div className="relative bg-white pt-4 pb-2 px-3">
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg text-[10px] font-bold tracking-widest text-gray-700 uppercase border border-gray-200">
                        {p.badge}
                    </div>

                    {/* Heart Icon (Wishlist) - Now interactive */}
                    <button 
                        onClick={toggleWishlist} // Added state toggle
                        className="absolute top-4 right-4 p-2 bg-white/95 rounded-full text-sm text-gray-400 hover:text-rose-500 hover:scale-110 transition-transform duration-200 shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                        aria-label={isWished ? `Remove ${p.title} from Wishlist` : `Add ${p.title} to Wishlist`}
                    >
                        {/* Conditional styling based on isWished state */}
                        <Heart 
                            className={`w-4 h-4 transition-colors ${
                                isWished 
                                    ? 'fill-rose-500 text-rose-500' // Filled red when wished
                                    : 'fill-transparent text-gray-400 group-hover:fill-rose-500/50 group-hover:text-rose-500' // Transparent fill, fills on hover
                            }`} 
                        /> 
                    </button>
                    
                    <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-48 object-contain"
                        // Fallback image in case the placeholder fails
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => { 
                            e.currentTarget.onerror = null; 
                            e.currentTarget.src = "https://placehold.co/300x300/cccccc/333333?text=Image+Missing" 
                        }}
                    />
                </div>

                {/* Content */}
                <div className="px-5 pt-1 pb-3 relative">
                    
                    {/* Price Row (Larger font for price, smaller for old price) */}
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xl font-extrabold text-gray-900">{p.price}</span>
                        <span className="text-xs text-gray-400 line-through font-medium">{p.oldPrice}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug mb-1 min-h-[35px]">
                        {p.title}
                    </h3>

                    {/* Discount - Green badge style for visual emphasis */}
                    <div className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full inline-block mb-3 tracking-wide">
                        {p.discount}
                    </div>

                    {/* Color Options - Aligned to the right */}
                    <div className="absolute right-5 top-2 flex flex-col gap-2 items-end">
                        {/* Option 1: Main color (ringed) */}
                        <div className={`w-4 h-4 rounded-full ring-2 ring-offset-2 ring-opacity-80 shadow-inner cursor-pointer ${primaryRingColor}`} aria-label={`${p.color} Gold Color`} />
                        {/* Option 2: Gray */}
                        <div className="w-3 h-3 rounded-full bg-gray-300 shadow-inner hover:scale-110 transition cursor-pointer" aria-label="White Gold Color option" />
                        {/* Option 3: Rose */}
                        <div className="w-3 h-3 rounded-full bg-rose-200 shadow-inner hover:scale-110 transition cursor-pointer" aria-label="Rose Gold Color option" />
                    </div>
                </div>

                {/* Action Buttons (Refined styles for the bottom section) */}
                <div className="flex items-stretch border-t border-gray-100">
                    
                    {/* View Similar Link (Eye Icon) */}
                    <button 
                        className="flex items-center justify-center gap-1 flex-1 py-3 text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors bg-gray-50/50 hover:bg-gray-100"
                        aria-label={`View similar products to ${p.title}`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        View Similar
                    </button>
                    
                    {/* Buy Now Button */}
                    <button 
                        className="px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg rounded-tl-[16px] transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300/50"
                        aria-label={`Buy ${p.title} now`}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---
const CardApp: React.FC = () => {
    return (
        // Wrapper container with a light background and padding
        <div className="min-h-screen w-full bg-gray-50 font-sans antialiased">
            
            {/* Header and Divider Section */}
            <div className="w-full mx-auto flex h-25 bg-amber-50 items-center my-8 md:my-12 px-4 sm:px-6 lg:px-8">
                
                {/* Text Content */}
                <div className="flex flex-col items-start mr-4 whitespace-nowrap">
                    {/* 'Similar' text, styled orange and bold */}
                    <h6 className="text-[#FD9149] text-2xl md:text-xl font-bold uppercase tracking-widest">
                        Complete
                    </h6>
                    {/* 'Styles' text, styled dark and extra bold, slightly larger */}
                    <p className="text-[#302F2F] text-sm md:text-xl font-extrabold uppercase tracking-tight -mt-1">
                        The Look
                    </p>
                </div>
                
                {/* Divider Line */}
                <div 
                    className="flex-grow h-px relative mx-4"
                    style={{ backgroundColor: '#D9D9D9' }}
                >
                </div>

                {/* Button */}
                <button
                    className="flex-shrink-0 ml-4 px-4 sm:px-6 py-2 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-md transition duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300/70"
                    style={{
                        background: 'linear-gradient(90deg, #F77433 5.51%, #FEAF38 100%)',
                    }}
                    aria-label="Discover all similar products"
                >
                    Discover all &gt;&gt;
                </button>
            </div>
            
            {/* Product Card Grid */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-8 justify-items-center">
                    {products.map(p => <ProductCard key={p.id} p={p} />)}
                </div>
            </div>
            
        </div>
    );
};

export default CardApp;