import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Coins,
  CreditCard,
  ShieldCheck,
  Package,
  Truck,
  RefreshCw,
  FileText,
  BookOpen,
  Gem,
  Sparkles,
  Heart,
  Users,
  Newspaper,
  Star,
  Gift,
  Globe,
  Home,
  Info,
} from "lucide-react";
// Removed unused import: import playStor from "../assets/play-store-logo.webp"

interface FooterLinkProps {
  text: string;
  Icon: React.ElementType;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, Icon }) => (
  <a
    href="#"
    className="group flex items-center gap-3 text-xs font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200"
  >
    <Icon
      size={14}
      className="text-gray-400 group-hover:text-orange-500 transition-colors"
    />
    <span className="tracking-wide">{text}</span>
  </a>
);

const FooterColumn: React.FC<{
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}> = ({ title, children, showDivider = true }) => (
  <div className="relative">
    <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-6">
      {title}
    </h3>
    <div className="space-y-3.5">{children}</div>
    {showDivider && (
      // Divider is correctly hidden on mobile
      <div className="absolute top-8 -right-8 bottom-0 w-px bg-orange-200 hidden lg:block" />
    )}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 font-sans">
      {/* Main Footer */}
      <div className="py-12 px-6 lg:px-16 bg-gray-50">
        {/*
          GRID: Default to grid-cols-2 on mobile.
          The addition of col-span-2 on 'Get In Touch' ensures it takes full width on mobile, 
          leading to a cleaner vertical stack.
        */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-16 relative">
          
          {/* OUR SERVICES (Col 1/5) */}
          <FooterColumn title="Our Services">
            <FooterLink text="Gold Rates" Icon={Coins} />
            <FooterLink text="Digital Gold" Icon={Globe} />
            <FooterLink text="Various Payment Method" Icon={CreditCard} />
            <FooterLink text="Financing Options" Icon={Package} />
            <FooterLink text="Garnet Lanee Assurance" Icon={ShieldCheck} />
            <FooterLink text="Franchise Enquiry" Icon={Home} />
          </FooterColumn>

          {/* OUR POLICIES (Col 2/5) */}
          <FooterColumn title="Our Policies">
            <FooterLink text="15-Day Returns" Icon={RefreshCw} />
            <FooterLink text="Free Shipping" Icon={Truck} />
            <FooterLink text="Lifetime Exchange Policy" Icon={RefreshCw} />
            <FooterLink text="Return and Refund Policy" Icon={FileText} />
            <FooterLink text="Terms & Conditions for Offers" Icon={FileText} />
          </FooterColumn>

          {/* JEWELLERY KNOWLEDGE (Col 3/5) */}
          <FooterColumn title="Jewellery Knowledge">
            <FooterLink text="Gold Guide" Icon={BookOpen} />
            <FooterLink text="Diamond Guide" Icon={Gem} />
            <FooterLink text="Jewellery Guide" Icon={Sparkles} />
            <FooterLink text="Solitaire Diamond Guide" Icon={Gem} />
            <FooterLink text="Gemstone Guide" Icon={Sparkles} />
            <FooterLink text="Certification Guide" Icon={ShieldCheck} />
            <FooterLink text="Jewellery Gifting" Icon={Gift} />
          </FooterColumn>

          {/* ABOUT US (Col 4/5) */}
          <FooterColumn title="About Us">
            <FooterLink text="Our Vision" Icon={Star} />
            <FooterLink text="Why Garnet" Icon={Heart} />
            <FooterLink text="Blog" Icon={Newspaper} />
            <FooterLink text="Our Story" Icon={Info} />
            <FooterLink text="Our Process" Icon={Package} />
            <FooterLink text="Our Team" Icon={Users} />
            <FooterLink text="Reviews and Ratings" Icon={Star} />
            <FooterLink text="Press Release" Icon={Newspaper} />
          </FooterColumn>

          {/* GET IN TOUCH (Col 5/5) 
            col-span-2: Forces this column to take up both columns on mobile (grid-cols-2), 
                        making it full width and responsive.
            lg:col-span-1: Resets it to take only one column on large screens.
          */}
          <div className="space-y-6 col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5 text-xs text-gray-700">
              {/* Toll Free */}
              <div>
                <p className="font-bold flex items-center gap-2 ml-6">
                  Toll Free : 1800-202-0270
                </p>
                <p className="ml-6 text-[11px] text-gray-600">
                  Monday to Saturday (10 AM to 7 PM)
                </p>
              </div>

              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gray-500" />
                99888-98866
              </p>

              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gray-500" />
                <a href="mailto:info@garnetlanee.com" className="hover:text-orange-500">
                  info@garnetlanee.com
                </a>
              </p>

              <p className="flex gap-2 leading-tight">
                <MapPin size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <span>Sco. 19, Sector 82 JLPL Mohali Airport Road, 160055.</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-orange-400 bg-white flex items-center justify-center hover:bg-orange-50 transition"
                >
                  <Icon size={18} className="text-orange-500" />
                </a>
              ))}
            </div>

            <p className="text-xs font-semibold text-gray-700">Download Our Application</p>
            <div className="flex gap-3 h-9">
              {/* FIXED: Replaced generic vector image with standard Google Play badge */}
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                // Added h-9 class to match the App Store badge height
                className="h-9"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-9"
              />
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-300">
          {/* Changed text alignment to center on mobile (default) and left on large screens */}
          <p className="text-xs text-gray-600 text-center lg:text-left font-medium tracking-wider">
            SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs
          </p>
        </div>
      </div>

      {/* Gradient Copyright Bar */}
      <div
        className="h-14 flex items-center justify-center text-xs font-medium text-gray-800"
        style={{
          background: "linear-gradient(90deg, #FD9149 0%, rgba(255, 222, 106, 0.74) 100%)",
        }}
      >
        COPYRIGHT GARNET LANEE © 2025
      </div>
    </footer>
  );
}