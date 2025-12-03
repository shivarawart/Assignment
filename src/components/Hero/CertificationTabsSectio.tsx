import React, { useState, useMemo, type FC, type ReactNode, type ComponentType, type CSSProperties } from "react";
import { Facebook, Instagram, Twitter, CheckCircle2, Shield, Gem, Clock } from "lucide-react";

// --- THEME CONSTANTS ---
const THEME = {
    ACCENT_ORANGE: "#F77433",
    DARK_TEXT: "#302F2F",
    LIGHT_SAND: "#FAEFDB",
    LINE_START: "#FD9149",
    LINE_END: "#FFD588",
} as const;

// Helper function for gradient styling
const getGradientStyle = (start: string, end: string): CSSProperties => ({
    background: `linear-gradient(90deg, ${start}, ${end})`,
});

// ──────────────────────────────────────
// Types & Tabs Data
// ──────────────────────────────────────
type TabId = "bis" | "igi" | "sgl";

interface Tab {
    id: TabId;
    name: string;
    icon: ReactNode;
    Content: ComponentType<{}>;
}

// ──────────────────────────────────────
// Logo/Icon Components (Visual representation of the certificates)
// ──────────────────────────────────────

/** Visual component replacing the 'BIS LOGO' text placeholder */
const BisLogoPlaceholder: FC = () => (
    <div className="w-40 h-40 rounded-2xl shadow-2xl border-4 border-orange-200 bg-white flex items-center justify-center flex-shrink-0">
        {/* Using Shield icon for a robust, official look, styled with the accent color */}
        <Shield className="w-20 h-20 p-2 rounded-lg" style={{ color: THEME.ACCENT_ORANGE, background: "rgba(255, 165, 0, 0.1)" }} />
    </div>
);

/** Visual component replacing the 'SGL LOGO' text placeholder */
const SglLogoPlaceholder: FC = () => (
    <div className="w-32 h-32 rounded-full shadow-2xl border-4 border-orange-200 bg-white flex items-center justify-center flex-shrink-0">
        {/* Using Gem icon for a diamond certification lab */}
        <Gem className="w-16 h-16 text-orange-500" />
    </div>
);

// ──────────────────────────────────────
// Content Components
// ──────────────────────────────────────

const BISContent: FC = () => {
    return (
        <div className="space-y-10 text-gray-800">
            <div className="flex flex-col md:flex-row items-start gap-10">
                {/* Logo/Icon is placed on the left side */}
                <BisLogoPlaceholder /> 
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
                        BIS Hallmark – Hallmarking Scheme of India
                    </h2>
                    <p className="text-base leading-7 text-justify">
                        The **Bureau of Indian Standards (BIS)** is the national standards body of India. BIS Hallmark is a certification mark that guarantees the purity of gold jewelry as per Indian standards.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                    { title: "Purity Assured", desc: "Every piece tested for exact gold purity — 22K (916), 18K (750), 14K (585)" },
                    { title: "Government Backed", desc: "Mandatory under Indian law — protects you from fraud & ensures trust" },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-orange-100 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-3">
                            <CheckCircle2 className="w-7 h-7 text-green-600" />
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-sm italic text-amber-900">
                Look for the **BIS triangle logo + purity number (916 = 22K)** on every piece you buy.
            </div>
        </div>
    );
}

const IGIContent: FC = () => {
    // IGI content remains text-focused as per the image
    return (
        <div className="space-y-6 text-gray-800">
            <div>
                <h2 className="sr-only">International Gemological Institute (IGI)</h2> 
                
                <p className="text-base leading-7 text-justify font-medium mb-6">
                    The **International Gemological Institute (IGI)** is the world's largest independent gem certification and appraisal institute. The IGI is worldwide renowned for its quality services, extensive experience and know-how.
                </p>

                <p className="text-base leading-7 text-justify mb-6">
                    IGI has established a network of **18 laboratories and gemological schools** around the world located in the major diamonds hubs.
                </p>

                <p className="text-base leading-7 text-justify">
                    The **IGI Report or IGI certificate** is an international passport which gives an accurate and unbiased opinion of diamonds (and other precious stones) based on the **4 C's**: cut, color, clarity and carat weight.
                </p>
            </div>
        </div>
    );
}

const SGLContent: FC = () => {
    return (
        <div className="space-y-10 text-gray-800">
            <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                {/* Logo/Icon is placed on the left side */}
                <SglLogoPlaceholder />
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">Solitaire Gemological Laboratory (SGL)</h2>
                    <p className="text-base">India’s leading independent diamond certification lab known for strict standards and reliability.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Strict International Grading", "Fast & Reliable Reports", "Preferred by Top Indian Jewelers"].map((text) => (
                    <div key={text} className="text-center bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                        <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-5 flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-orange-600" />
                        </div>
                        <p className="font-semibold text-sm leading-relaxed">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


// --- TABS DATA ARRAY ---
const TABS: readonly Tab[] = [
    // Using Shield and Clock icons for a more descriptive look in the tab menu
    { id: "bis", name: "BIS Hallmark", icon: <Shield className="w-5 h-5" />, Content: BISContent },
    { id: "igi", name: "IGI", icon: <Gem className="w-5 h-5" />, Content: IGIContent },
    { id: "sgl", name: "SGL", icon: <Clock className="w-5 h-5" />, Content: SGLContent }, 
] as const;


// ──────────────────────────────────────
// Reusable UI Components
// ──────────────────────────────────────

interface TabItemProps {
    name: string;
    icon: ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const TabItem: FC<TabItemProps> = ({ name, icon, isActive, onClick }) => {
    const activeColor = isActive ? "text-orange-600" : "text-gray-800";
    const inactiveIconColor = "text-gray-500 group-hover:text-gray-700";

    return (
        <button
            onClick={onClick}
            // Increased min-width for better touch target and spacing on mobile/scrollable view
            className="flex flex-col items-center pb-6 group duration-300 min-w-[140px] flex-shrink-0"
            aria-selected={isActive}
            role="tab"
        >
            <div className="flex items-center gap-2">
                {/* Icon is placed on the left side */}
                <span className={isActive ? activeColor : inactiveIconColor}>{icon}</span>
                <span className={`font-medium text-sm sm:text-base ${activeColor} ${isActive ? "font-bold" : ""}`}>
                    {name}
                </span>
            </div>
            <div
                className="mt-4 h-1 w-full max-w-[120px] rounded-full transition-all duration-300"
                style={isActive ? getGradientStyle(THEME.LINE_START, THEME.LINE_END) : { background: "transparent" }}
            />
        </button>
    );
}

interface SocialIconProps {
    Icon: ComponentType<{ className: string }>;
    link: string;
    label: string;
}

const SocialIcon: FC<SocialIconProps> = ({ Icon, link, label }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-14 h-14 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        >
            <Icon className="w-7 h-7 text-orange-500" />
        </a>
    );
}

// ──────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────
export default function CertificationTabsSection() {
    // Setting initial active tab to BIS to ensure the first tab is highlighted on load.
    const [activeTabId, setActiveTabId] = useState<TabId>("bis");

    // Use useMemo for component retrieval for performance and stability
    const ActiveContent = useMemo(() => {
        const activeTab = TABS.find((tab) => tab.id === activeTabId);
        // Fallback to IGIContent if the ID is somehow invalid
        return activeTab?.Content ?? IGIContent; 
    }, [activeTabId]);

    // Background style for the main content card
    const cardBackgroundStyle: CSSProperties = {
        background: `linear-gradient(88deg, ${THEME.LIGHT_SAND} 0%, rgba(250, 239, 219, 0.4) 100%)`,
    };

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white font-sans py-10">
            <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">
                {/* Header for context */}
               

                {/* Tabs Container - FIX: Removed w-4/12, added max-w-xl and mx-auto for centering */}
                <div className="w-full  0  mx-auto">
                    <div className="flex justify-start gap-8 overflow-x-auto pb-3 border-b border-gray-200" role="tablist">
                        {TABS.map((tab) => (
                            <TabItem
                                key={tab.id}
                                name={tab.name}
                                icon={tab.icon}
                                isActive={tab.id === activeTabId}
                                onClick={() => setActiveTabId(tab.id)}
                            />
                        ))}
                    </div>
                </div>


                {/* Main Content Card (Matching the background color and padding) */}
                <div
                    className="mt-10 rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-100"
                    style={cardBackgroundStyle}
                >
                    <div className="p-8 lg:p-14 xl:p-20" role="tabpanel">
                        {/* Render the Active Component */}
                        <ActiveContent />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 text-center">
                    <p className="text-xl font-bold uppercase tracking-wider" style={{ color: THEME.ACCENT_ORANGE }}>
                        100% Certified • International Standard
                    </p>
                    <p className="text-sm font-medium text-gray-600 mt-4 uppercase tracking-widest">We would love to meet you on our handles</p>

                    <div className="flex justify-center gap-10 mt-8">
                        {/* Social Icons */}
                        <SocialIcon Icon={Instagram} link="https://instagram.com/yourbrand" label="Instagram" />
                        <SocialIcon Icon={Facebook} link="https://facebook.com/yourbrand" label="Facebook" />
                        <SocialIcon Icon={Twitter} link="https://twitter.com/yourbrand" label="Twitter" />
                    </div>
                </div>
            </div>
        </section>
    );
}