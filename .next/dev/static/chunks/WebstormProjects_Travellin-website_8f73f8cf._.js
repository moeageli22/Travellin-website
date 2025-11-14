(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/WebstormProjects/Travellin-website/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LottieChatbot",
    ()=>LottieChatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const hotelsDatabase = [
    {
        id: 1,
        name: "Azure Paradise Resort",
        location: "Maldives",
        price: 450,
        amenities: [
            "Private pool",
            "Beachfront",
            "Spa",
            "Ocean sports"
        ],
        category: [
            "beach",
            "luxury",
            "family"
        ],
        href: "/hotels/1"
    },
    {
        id: 2,
        name: "Skyline Grand Hotel",
        location: "New York",
        price: 380,
        amenities: [
            "Rooftop bar",
            "City views",
            "Gym",
            "Concierge"
        ],
        category: [
            "city",
            "luxury"
        ],
        href: "/hotels/2"
    },
    {
        id: 3,
        name: "Mountain Vista Lodge",
        location: "Swiss Alps",
        price: 320,
        amenities: [
            "Ski-in/out",
            "Sauna",
            "Spa",
            "Mountain views"
        ],
        category: [
            "mountain",
            "ski"
        ],
        href: "/hotels/3"
    },
    {
        id: 4,
        name: "Royal Elegance Suite",
        location: "Paris",
        price: 520,
        amenities: [
            "Butler service",
            "Fine dining",
            "Limousine",
            "Spa"
        ],
        category: [
            "city",
            "luxury",
            "family"
        ],
        href: "/hotels/4"
    },
    {
        id: 5,
        name: "Modern Heights Hotel",
        location: "Tokyo",
        price: 290,
        amenities: [
            "Onsen spa",
            "Rooftop dining",
            "Gym",
            "Smart rooms"
        ],
        category: [
            "city",
            "accessible"
        ],
        href: "/hotels/5"
    },
    {
        id: 6,
        name: "Coastal Dream Resort",
        location: "Bali",
        price: 395,
        amenities: [
            "Beachfront villas",
            "Infinity pool",
            "Wellness",
            "Surf classes"
        ],
        category: [
            "beach",
            "wellness",
            "accessible"
        ],
        href: "/hotels/6"
    }
];
function LottieChatbot() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            type: "bot",
            text: "Hi 👋 I can help you find hotels, compare room types, or plan your group trip!",
            suggestions: [
                {
                    label: "Find luxury hotels under $400/night",
                    action: {
                        "LottieChatbot.useState": ()=>handleQuickSuggestion("luxury under 400")
                    }["LottieChatbot.useState"]
                },
                {
                    label: "Show accessible hotels nearby",
                    action: {
                        "LottieChatbot.useState": ()=>handleQuickSuggestion("accessible hotels")
                    }["LottieChatbot.useState"]
                },
                {
                    label: "Book 3 nights in Maldives",
                    action: {
                        "LottieChatbot.useState": ()=>handleQuickSuggestion("book maldives")
                    }["LottieChatbot.useState"]
                }
            ]
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LottieChatbot.useEffect": ()=>{
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js";
            script.type = "module";
            document.head.appendChild(script);
            return ({
                "LottieChatbot.useEffect": ()=>{
                    document.head.removeChild(script);
                }
            })["LottieChatbot.useEffect"];
        }
    }["LottieChatbot.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LottieChatbot.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["LottieChatbot.useEffect"], [
        messages
    ]);
    const getBotResponse = (userInput)=>{
        const input = userInput.toLowerCase();
        // Price-based searches
        if (input.includes("under") || input.includes("below") || input.includes("less than")) {
            const priceMatch = input.match(/\$?(\d+)/);
            const maxPrice = priceMatch ? Number.parseInt(priceMatch[1]) : 400;
            const affordableHotels = hotelsDatabase.filter((h)=>h.price <= maxPrice);
            if (affordableHotels.length > 0) {
                return {
                    type: "bot",
                    text: `Here are ${affordableHotels.length} hotels under $${maxPrice}/night:`,
                    hotelCards: affordableHotels.map((h)=>({
                            name: h.name,
                            location: h.location,
                            price: h.price,
                            amenities: h.amenities,
                            href: h.href
                        })),
                    suggestions: [
                        {
                            label: "View all hotels",
                            href: "/hotels",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                        }
                    ]
                };
            }
        }
        // Beach/ocean hotels
        if (input.includes("beach") || input.includes("ocean") || input.includes("sea") || input.includes("bali")) {
            const beachHotels = hotelsDatabase.filter((h)=>h.category.includes("beach"));
            return {
                type: "bot",
                text: "The Coastal Dream Resort in Bali offers beachfront villas with private pools and ocean views. Azure Paradise Resort in Maldives also features overwater suites!",
                hotelCards: beachHotels.map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "See available dates",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                    },
                    {
                        label: "View all beach hotels",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                    }
                ]
            };
        }
        // Family rooms
        if (input.includes("family") || input.includes("kids") || input.includes("children")) {
            return {
                type: "bot",
                text: "Yes! Azure Paradise Resort (Maldives) and Royal Elegance Suite (Paris) both feature spacious family rooms — ideal for 4 guests with connecting suites and breakfast included.",
                suggestions: [
                    {
                        label: "View Azure Paradise Resort",
                        href: "/hotels/1",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    },
                    {
                        label: "View Royal Elegance Suite",
                        href: "/hotels/4",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    }
                ]
            };
        }
        // Check-in/out times
        if (input.includes("check-in") || input.includes("check-out") || input.includes("time")) {
            return {
                type: "bot",
                text: "Most hotels offer check-in at 3:00 PM and check-out at 11:00 AM, but I can check your selected hotel's policy if you'd like. 😊",
                suggestions: [
                    {
                        label: "Browse hotels",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    }
                ]
            };
        }
        // Accessibility
        if (input.includes("wheelchair") || input.includes("accessible") || input.includes("disability")) {
            const accessibleHotels = hotelsDatabase.filter((h)=>h.category.includes("accessible"));
            return {
                type: "bot",
                text: "Absolutely. All Travelinn partner hotels include accessible options — with step-free access, elevators, and accessible bathrooms.",
                hotelCards: accessibleHotels.map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "See full accessibility features",
                        href: "/wellbeing",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
                    }
                ]
            };
        }
        // Payment methods
        if (input.includes("pay") || input.includes("payment") || input.includes("apple pay") || input.includes("card")) {
            return {
                type: "bot",
                text: "Yes! You can pay securely using Apple Pay, Google Pay, PayPal, or credit/debit cards during checkout. 💳",
                suggestions: [
                    {
                        label: "Book a hotel now",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    },
                    {
                        label: "Payment help",
                        href: "/concierge",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
                    }
                ]
            };
        }
        // Mountain/ski hotels
        if (input.includes("mountain") || input.includes("ski") || input.includes("snow") || input.includes("alps")) {
            const mountainHotels = hotelsDatabase.filter((h)=>h.category.includes("mountain") || h.category.includes("ski"));
            return {
                type: "bot",
                text: "Mountain Vista Lodge in the Swiss Alps features ski-in/ski-out access, cozy fireplaces, and panoramic mountain views!",
                hotelCards: mountainHotels.map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "See winter packages",
                        href: "/hotels/3",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    }
                ]
            };
        }
        // City hotels
        if (input.includes("city") || input.includes("urban") || input.includes("new york") || input.includes("paris") || input.includes("tokyo")) {
            const cityHotels = hotelsDatabase.filter((h)=>h.category.includes("city"));
            return {
                type: "bot",
                text: "I found amazing city hotels for you! From Manhattan to Paris, each offers unique luxury experiences in the heart of the city.",
                hotelCards: cityHotels.slice(0, 3).map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "View all city hotels",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                    }
                ]
            };
        }
        // Booking modifications
        if (input.includes("change") || input.includes("modify") || input.includes("cancel")) {
            return {
                type: "bot",
                text: "Sure — bookings can be modified up to 48 hours before check-in, depending on hotel policy. Would you like me to check your booking details?",
                suggestions: [
                    {
                        label: "Contact concierge",
                        href: "/concierge",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
                    },
                    {
                        label: "View booking policy",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    }
                ]
            };
        }
        // Health/wellbeing/wellness
        if (input.includes("health") || input.includes("wellbeing") || input.includes("wellness") || input.includes("safety") || input.includes("spa")) {
            const wellnessHotels = hotelsDatabase.filter((h)=>h.category.includes("wellness"));
            return {
                type: "bot",
                text: "Your health and safety are our priority. Coastal Dream Resort in Bali offers yoga, spa rituals, and wellness programs. Stay safe and healthy! 😊",
                hotelCards: wellnessHotels.map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "Health & Wellbeing",
                        href: "/wellbeing",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
                    }
                ]
            };
        }
        // Travel groups/communities
        if (input.includes("group") || input.includes("community") || input.includes("friends") || input.includes("meet")) {
            return {
                type: "bot",
                text: "Join our vibrant travel communities! Connect with fellow travelers, share experiences, and plan group adventures together.",
                suggestions: [
                    {
                        label: "Browse Communities",
                        href: "/groups",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                    }
                ]
            };
        }
        // Concierge
        if (input.includes("concierge") || input.includes("help") || input.includes("assist") || input.includes("support")) {
            return {
                type: "bot",
                text: "Our 24/7 concierge team is here to help you with anything — bookings, changes, recommendations, or special requests. How can we assist? 😊",
                suggestions: [
                    {
                        label: "Connect to Concierge",
                        href: "/concierge",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
                    }
                ]
            };
        }
        // Luxury hotels
        if (input.includes("luxury") || input.includes("premium") || input.includes("5 star")) {
            const luxuryHotels = hotelsDatabase.filter((h)=>h.category.includes("luxury"));
            return {
                type: "bot",
                text: "Our premium collection features world-class luxury hotels with exceptional service and amenities:",
                hotelCards: luxuryHotels.map((h)=>({
                        name: h.name,
                        location: h.location,
                        price: h.price,
                        amenities: h.amenities,
                        href: h.href
                    })),
                suggestions: [
                    {
                        label: "View luxury collection",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    }
                ]
            };
        }
        // Hotels general
        if (input.includes("hotel") || input.includes("accommodation") || input.includes("stay") || input.includes("room")) {
            return {
                type: "bot",
                text: "Browse our curated collection of luxury hotels worldwide — each handpicked for exceptional experiences. What destination interests you?",
                suggestions: [
                    {
                        label: "View All Hotels",
                        href: "/hotels",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    },
                    {
                        label: "Show beach hotels",
                        action: ()=>handleQuickSuggestion("beach hotels")
                    },
                    {
                        label: "Show city hotels",
                        action: ()=>handleQuickSuggestion("city hotels")
                    }
                ]
            };
        }
        // Maldives specific
        if (input.includes("maldives")) {
            return {
                type: "bot",
                text: "Azure Paradise Resort in the Maldives offers overwater villas with private decks and glass-floor lagoon views. Prices start from $450/night. Would you like to see available dates?",
                hotelCards: [
                    {
                        name: "Azure Paradise Resort",
                        location: "Maldives",
                        price: 450,
                        amenities: [
                            "Private pool",
                            "Beachfront",
                            "Spa",
                            "Ocean sports"
                        ],
                        href: "/hotels/1"
                    }
                ],
                suggestions: [
                    {
                        label: "Book Azure Paradise",
                        href: "/hotels/1",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"]
                    },
                    {
                        label: "See available dates",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                    }
                ]
            };
        }
        // Default friendly response
        return {
            type: "bot",
            text: "I can help you find hotels, compare room types, check prices, or answer questions about facilities, accessibility, and bookings. What are you interested in? 😊",
            suggestions: [
                {
                    label: "Find beach hotels",
                    action: ()=>handleQuickSuggestion("beach hotels")
                },
                {
                    label: "Hotels under $400",
                    action: ()=>handleQuickSuggestion("hotels under 400")
                },
                {
                    label: "Family-friendly rooms",
                    action: ()=>handleQuickSuggestion("family rooms")
                }
            ]
        };
    };
    const handleQuickSuggestion = (suggestion)=>{
        setInputValue(suggestion);
        // Trigger send after a brief delay
        setTimeout(()=>{
            handleSendMessage(suggestion);
        }, 100);
    };
    const handleSendMessage = (customInput)=>{
        const messageText = customInput || inputValue;
        if (!messageText.trim()) return;
        // Add user message
        const userMessage = {
            type: "user",
            text: messageText
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        // Show typing indicator
        setIsTyping(true);
        // Get bot response after a short delay
        setTimeout(()=>{
            setIsTyping(false);
            const botResponse = getBotResponse(messageText);
            setMessages((prev)=>[
                    ...prev,
                    botResponse
                ]);
        }, 800);
        setInputValue("");
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 flex items-end gap-2 sm:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden sm:block bg-white rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 ${isHovered && !isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 font-medium whitespace-nowrap text-lg",
                    children: "Need help planning your trip?"
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 sm:bottom-32 md:bottom-48 right-0 w-80 sm:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-purple-600 to-purple-700 p-4 flex items-center justify-between flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-700"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 441,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-white font-bold text-lg",
                                                children: "AI Travel Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-200 text-xs",
                                                children: "Online · Here to help you"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 447,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "text-white hover:bg-purple-600 h-10 w-10",
                                onClick: ()=>setIsOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                    lineNumber: 456,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                        children: [
                            messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${message.type === "user" ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[85%] rounded-2xl p-3 ${message.type === "user" ? "bg-purple-600 text-white rounded-br-sm" : "bg-slate-800 text-white rounded-bl-sm"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed",
                                                children: message.text
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this),
                                            message.hotelCards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-2",
                                                children: message.hotelCards.map((hotel, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: hotel.href,
                                                        onClick: ()=>setIsOpen(false),
                                                        className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all border border-purple-500/30 hover:border-purple-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-sm font-semibold text-white",
                                                                                children: hotel.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                lineNumber: 484,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1 text-xs text-purple-300 mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                        className: "w-3 h-3"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                        lineNumber: 486,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: hotel.location
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                lineNumber: 485,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-purple-400 text-xs",
                                                                                children: "from"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-white font-bold",
                                                                                children: [
                                                                                    "$",
                                                                                    hotel.price
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                lineNumber: 492,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-gray-400 text-xs",
                                                                                children: "/night"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1",
                                                                children: hotel.amenities.slice(0, 3).map((amenity, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs bg-purple-600/30 text-purple-200 px-2 py-1 rounded",
                                                                        children: amenity
                                                                    }, i, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                        lineNumber: 498,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 474,
                                                columnNumber: 21
                                            }, this),
                                            message.suggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-2",
                                                children: message.suggestions.map((suggestion, idx)=>{
                                                    if (suggestion.action) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: suggestion.action,
                                                            className: "flex items-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-purple-600/50 transition-all border border-purple-500/30 hover:border-purple-400 w-full text-left",
                                                            children: [
                                                                suggestion.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(suggestion.icon, {
                                                                    className: "w-4 h-4 text-purple-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 51
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium text-white",
                                                                    children: suggestion.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 29
                                                        }, this);
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: suggestion.href || "#",
                                                        onClick: ()=>setIsOpen(false),
                                                        className: "flex items-center gap-2 p-2 rounded-lg bg-slate-700/50 hover:bg-purple-600/50 transition-all border border-purple-500/30 hover:border-purple-400",
                                                        children: [
                                                            suggestion.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(suggestion.icon, {
                                                                className: "w-4 h-4 text-purple-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-medium text-white",
                                                                children: suggestion.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 510,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 text-white rounded-2xl rounded-bl-sm p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: "0ms"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 546,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: "150ms"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 550,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                                                style: {
                                                    animationDelay: "300ms"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                                lineNumber: 554,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 545,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                    lineNumber: 544,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: chatEndRef
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                        lineNumber: 461,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-slate-800 flex-shrink-0 bg-slate-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        value: inputValue,
                                        onChange: (e)=>setInputValue(e.target.value),
                                        onKeyPress: handleKeyPress,
                                        placeholder: "Ask me anything about hotels...",
                                        className: "flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>handleSendMessage(),
                                        className: "bg-purple-600 hover:bg-purple-700 text-white",
                                        size: "icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                            lineNumber: 580,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 567,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-2 text-center",
                                children: "Powered by Travelinn AI · Secure · 24/7 available"
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                        lineNumber: 566,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                lineNumber: 438,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "relative cursor-pointer transition-transform hover:scale-105 focus:outline-none",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/30 to-purple-700/30 backdrop-blur-sm border-2 sm:border-4 border-purple-400/50 flex items-center justify-center relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dotlottie-wc", {
                        src: "https://lottie.host/b3e4cac4-349a-4761-b167-2bf30a257e55/Xas0LWY1sY.lottie",
                        autoplay: true,
                        loop: true,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                        lineNumber: 599,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                    lineNumber: 595,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, this);
}
_s(LottieChatbot, "Dk88XoPJ+kdOVyqJLOe04R5FriY=");
_c = LottieChatbot;
var _c;
__turbopack_context__.k.register(_c, "LottieChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/app/groups/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/users-round.js [app-client] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$lottie$2d$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/lottie-chatbot.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const backgrounds = [
    {
        url: "/new-york-city-skyline-at-sunset-with-skyscrapers.jpg",
        name: "New York City"
    },
    {
        url: "/london-big-ben-and-thames-river-at-dusk.jpg",
        name: "London"
    },
    {
        url: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
        name: "Paradise Beach"
    },
    {
        url: "/paris-eiffel-tower-illuminated-at-night.jpg",
        name: "Paris"
    },
    {
        url: "/tokyo-city-lights-and-neon-signs-at-night.jpg",
        name: "Tokyo"
    }
];
const aiTravelers = [
    {
        name: "Sarah",
        avatar: "/woman-blonde-beach.jpg",
        country: "🇺🇸",
        location: "Miami, USA",
        tags: [
            "Beaches",
            "Food",
            "Yoga"
        ]
    },
    {
        name: "Luca",
        avatar: "/man-italian-surfer.jpg",
        country: "🇮🇹",
        location: "Rome, Italy",
        tags: [
            "Surfing",
            "Culture",
            "Coffee"
        ]
    },
    {
        name: "Amira",
        avatar: "/woman-middle-eastern-elegant.jpg",
        country: "🇦🇪",
        location: "Dubai, UAE",
        tags: [
            "Luxury",
            "Shopping",
            "Adventure"
        ]
    },
    {
        name: "Leo",
        avatar: "/man-brazilian-musician.jpg",
        country: "🇧🇷",
        location: "Rio, Brazil",
        tags: [
            "Music",
            "Nightlife",
            "Dance"
        ]
    },
    {
        name: "Maya",
        avatar: "/woman-asian-photographer.jpg",
        country: "🇯🇵",
        location: "Tokyo, Japan",
        tags: [
            "Photography",
            "Art",
            "Tech"
        ]
    },
    {
        name: "Kai",
        avatar: "/man-thai-chef.jpg",
        country: "🇹🇭",
        location: "Bangkok, Thailand",
        tags: [
            "Street Food",
            "Markets",
            "Culture"
        ]
    },
    {
        name: "Emma",
        avatar: "/woman-british-hiker.jpg",
        country: "🇬🇧",
        location: "London, UK",
        tags: [
            "Hiking",
            "History",
            "Tea"
        ]
    },
    {
        name: "Carlos",
        avatar: "/man-spanish-dancer.jpg",
        country: "🇪🇸",
        location: "Barcelona, Spain",
        tags: [
            "Dancing",
            "Wine",
            "Architecture"
        ]
    },
    {
        name: "Yuki",
        avatar: "/woman-japanese-anime.jpg",
        country: "🇯🇵",
        location: "Osaka, Japan",
        tags: [
            "Anime",
            "Gaming",
            "Ramen"
        ]
    },
    {
        name: "Sophie",
        avatar: "/woman-french-artist.jpg",
        country: "🇫🇷",
        location: "Paris, France",
        tags: [
            "Art",
            "Fashion",
            "Wine"
        ]
    }
];
const communities = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
        title: "Food & Dining",
        travelers: "2,341 travelers",
        bgColor: "bg-orange-500/20",
        iconColor: "text-orange-400",
        description: "Swap restaurant tips, share recipes, and discover the best street food spots around the globe."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
        title: "Fitness & Sports",
        travelers: "1,892 travelers",
        bgColor: "bg-red-500/20",
        iconColor: "text-red-400",
        description: "Find gym partners abroad, join running groups, or share wellness routines."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        title: "Music & Nightlife",
        travelers: "3,156 travelers",
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        description: "Talk about local events, concerts, and hidden bars with fellow night owls."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Culture & Arts",
        travelers: "1,567 travelers",
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        description: "Discover museums, street art, and heritage tours together."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
        title: "Gaming & Entertainment",
        travelers: "2,089 travelers",
        bgColor: "bg-green-500/20",
        iconColor: "text-green-400",
        description: "Connect with gamers and entertainment lovers on the go."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"],
        title: "Social Meetups",
        travelers: "4,234 travelers",
        bgColor: "bg-pink-500/20",
        iconColor: "text-pink-400",
        description: "Plan group adventures, coffee hangouts, or weekend city explorations."
    }
];
const initialMessages = {
    "Food & Dining": [
        {
            sender: "Kai",
            message: "Hey everyone! Just tried the best Pad Thai in Bangkok 🍜✨",
            avatar: "/man-thai-chef.jpg",
            country: "🇹🇭",
            image: "/pad-thai-thai-food.jpg"
        },
        {
            sender: "Sarah",
            message: "That sounds amazing! I'm looking for good street food spots in Asia 😍🌏",
            avatar: "/woman-blonde-beach.jpg",
            country: "🇺🇸"
        },
        {
            sender: "Sophie",
            message: "You should visit the night markets in Chiang Mai - incredible food! 🌙🍲",
            avatar: "/woman-french-artist.jpg",
            country: "🇫🇷"
        },
        {
            sender: "Carlos",
            message: "Barcelona's La Boqueria market is a must! Fresh seafood every day 🦐🐟",
            avatar: "/man-spanish-dancer.jpg",
            country: "🇪🇸",
            image: "/la-boqueria-market-barcelona.png"
        }
    ],
    "Fitness & Sports": [
        {
            sender: "Leo",
            message: "Anyone up for a beach workout in Rio tomorrow? 🏃‍♂️💪",
            avatar: "/man-brazilian-musician.jpg",
            country: "🇧🇷"
        },
        {
            sender: "Amira",
            message: "I wish! Currently in Dubai doing sunrise yoga by the beach 🧘‍♀️🌅",
            avatar: "/woman-middle-eastern-elegant.jpg",
            country: "🇦🇪",
            image: "/sunrise-yoga-beach-dubai.jpg"
        },
        {
            sender: "Emma",
            message: "That sounds perfect! I need to find a yoga studio here in London 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            avatar: "/woman-british-hiker.jpg",
            country: "🇬🇧"
        },
        {
            sender: "Sarah",
            message: "Join our Miami fitness group! We do beach runs every morning 🌊🏃‍♀️",
            avatar: "/woman-blonde-beach.jpg",
            country: "🇺🇸"
        }
    ],
    "Music & Nightlife": [
        {
            sender: "Leo",
            message: "Check out this samba club I found - the energy is incredible! 🎵💃",
            avatar: "/man-brazilian-musician.jpg",
            country: "🇧🇷"
        },
        {
            sender: "Maya",
            message: "Tokyo nightlife is amazing too! Karaoke bars everywhere 🎤🎶",
            avatar: "/woman-asian-photographer.jpg",
            country: "🇯🇵"
        },
        {
            sender: "Luca",
            message: "Rome has the best jazz clubs near Trastevere 🎺🎷",
            avatar: "/man-italian-surfer.jpg",
            country: "🇮🇹",
            image: "/jazz-club-rome-italy.jpg"
        },
        {
            sender: "Carlos",
            message: "Barcelona's flamenco shows are unforgettable! 💃🔥",
            avatar: "/man-spanish-dancer.jpg",
            country: "🇪🇸"
        }
    ],
    "Culture & Arts": [
        {
            sender: "Maya",
            message: "Just visited teamLab Borderless in Tokyo - mind blown! 🎨✨",
            avatar: "/woman-asian-photographer.jpg",
            country: "🇯🇵",
            image: "/teamlab-borderless-tokyo-art.jpg"
        },
        {
            sender: "Luca",
            message: "The Vatican Museums are a must-see if you're in Rome 🏛️🖼️",
            avatar: "/man-italian-surfer.jpg",
            country: "🇮🇹"
        },
        {
            sender: "Sophie",
            message: "The Louvre never gets old. Visited for the 10th time today! 🎨🇫🇷",
            avatar: "/woman-french-artist.jpg",
            country: "🇫🇷"
        },
        {
            sender: "Amira",
            message: "Dubai has incredible contemporary art galleries. Check out Alserkal Avenue 🖼️✨",
            avatar: "/woman-middle-eastern-elegant.jpg",
            country: "🇦🇪"
        }
    ],
    "Gaming & Entertainment": [
        {
            sender: "Yuki",
            message: "Who's into retro arcade gaming? Osaka has the best spots! 🎮👾",
            avatar: "/woman-japanese-anime.jpg",
            country: "🇯🇵"
        },
        {
            sender: "Kai",
            message: "Bangkok has amazing gaming cafes with VR setups 🥽🎮",
            avatar: "/man-thai-chef.jpg",
            country: "🇹🇭",
            image: "/gaming-cafe-vr-bangkok.jpg"
        },
        {
            sender: "Leo",
            message: "Looking for gaming buddies to explore new RPGs together 🎲⚔️",
            avatar: "/man-brazilian-musician.jpg",
            country: "🇧🇷"
        },
        {
            sender: "Maya",
            message: "Anyone playing the new Final Fantasy? Let's team up! 🎮✨",
            avatar: "/woman-asian-photographer.jpg",
            country: "🇯🇵"
        }
    ],
    "Social Meetups": [
        {
            sender: "Sarah",
            message: "Planning a beach cleanup meetup in Miami this weekend! Who's in? 🌊♻️",
            avatar: "/woman-blonde-beach.jpg",
            country: "🇺🇸"
        },
        {
            sender: "Amira",
            message: "That's awesome! We did a desert hike meetup here in Dubai last week 🏜️🥾",
            avatar: "/woman-middle-eastern-elegant.jpg",
            country: "🇦🇪",
            image: "/placeholder.svg?height=200&width=300"
        },
        {
            sender: "Kai",
            message: "I organize weekly coffee meetups for travelers in Bangkok. DM me! ☕️👋",
            avatar: "/man-thai-chef.jpg",
            country: "🇹🇭"
        },
        {
            sender: "Emma",
            message: "London pub crawl this Friday! All travelers welcome 🍺🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            avatar: "/woman-british-hiker.jpg",
            country: "🇬🇧"
        }
    ]
};
function GroupsPage() {
    _s();
    const [currentBg, setCurrentBg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedCommunity, setSelectedCommunity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newMessage, setNewMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showMembers, setShowMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupsPage.useEffect": ()=>{
            const interval = setInterval({
                "GroupsPage.useEffect.interval": ()=>{
                    setCurrentBg({
                        "GroupsPage.useEffect.interval": (prev)=>(prev + 1) % backgrounds.length
                    }["GroupsPage.useEffect.interval"]);
                }
            }["GroupsPage.useEffect.interval"], 5000);
            return ({
                "GroupsPage.useEffect": ()=>clearInterval(interval)
            })["GroupsPage.useEffect"];
        }
    }["GroupsPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupsPage.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["GroupsPage.useEffect"], [
        chatMessages
    ]);
    const handleJoinCommunity = (communityTitle)=>{
        setSelectedCommunity(communityTitle);
        const welcomeMessage = {
            sender: "Travelinn Bot",
            message: `Welcome to the ${communityTitle} community! 🎉 Feel free to introduce yourself and connect with fellow travelers! ✈️`,
            avatar: "/placeholder.svg?height=40&width=40",
            country: "🤖",
            isWelcome: true
        };
        setChatMessages([
            welcomeMessage,
            ...initialMessages[communityTitle] || []
        ]);
        setShowMembers(false);
    };
    const handleSendMessage = ()=>{
        if (!newMessage.trim()) return;
        const userMessage = {
            sender: "You",
            message: newMessage,
            avatar: "/placeholder.svg?key=you",
            country: "🌍",
            isUser: true
        };
        setChatMessages([
            ...chatMessages,
            userMessage
        ]);
        setNewMessage("");
        setTimeout(()=>{
            const randomTraveler = aiTravelers[Math.floor(Math.random() * aiTravelers.length)];
            const aiResponse = generateAIResponse(newMessage, randomTraveler, selectedCommunity || "");
            setChatMessages((prev)=>[
                    ...prev,
                    aiResponse
                ]);
        }, 1500);
    };
    const generateAIResponse = (userMsg, traveler, community)=>{
        const lowerMsg = userMsg.toLowerCase();
        let response = "";
        let image;
        if (lowerMsg.includes("hotel") || lowerMsg.includes("where to stay")) {
            response = `I stayed at the Coastal Dream Resort last month - absolutely loved it! 🏨✨ The staff was amazing and the location was perfect. Highly recommend! 😊`;
            image = "/placeholder.svg?height=200&width=300";
        } else if (lowerMsg.includes("food") || lowerMsg.includes("restaurant") || lowerMsg.includes("eat")) {
            response = `For food, you have to try the local street markets! 🍜🌮 I found the best hidden gems by just walking around. Want some specific recommendations? 😋`;
        } else if (lowerMsg.includes("beach") || lowerMsg.includes("ocean")) {
            response = `The beaches there are stunning! 🏖️ Don't miss the sunset yoga sessions by the cliffs - it's an amazing experience 🌅🧘‍♀️`;
            image = "/placeholder.svg?height=200&width=300";
        } else if (lowerMsg.includes("thanks") || lowerMsg.includes("thank")) {
            response = `You're welcome! 😊 Feel free to ask me anything else about traveling. Happy to help! ✈️💜`;
        } else if (lowerMsg.includes("music") || lowerMsg.includes("nightlife") || lowerMsg.includes("party")) {
            response = `The nightlife scene is incredible! 🎵🎉 There are some amazing live music venues. I can share my favorite spots if you'd like 🎶`;
        } else if (lowerMsg.includes("culture") || lowerMsg.includes("museum") || lowerMsg.includes("art")) {
            response = `The local museums are fantastic! 🎨🏛️ Make sure to book tickets in advance though - they get pretty busy 🖼️`;
        } else if (lowerMsg.includes("hi") || lowerMsg.includes("hello") || lowerMsg.includes("hey")) {
            response = `Hey there! 👋 Welcome to our community! What brings you here today? 😊`;
        } else {
            response = `That's interesting! 🤔 I love connecting with fellow travelers. Have you explored the local area much yet? 🗺️✨`;
        }
        return {
            sender: traveler.name,
            message: response,
            avatar: traveler.avatar,
            country: traveler.country,
            image
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden",
        children: [
            backgrounds.map((bg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentBg ? "opacity-100" : "opacity-0"}`,
                    style: {
                        backgroundImage: `url(${bg.url})`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80"
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this)
                }, index, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "border-b border-white/10 bg-slate-900/40 backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-16 items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-semibold text-white",
                                            children: "Travelinn"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center gap-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/hotels",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "Hotels"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/groups",
                                                className: "text-sm font-medium text-white hover:text-white transition-colors",
                                                children: "Groups"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/wellbeing",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "Wellbeing"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/concierge",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "Concierge"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/chatbot",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "AI Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "text-sm font-medium text-white/80 hover:text-white transition-colors",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signin",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full px-6",
                                            children: "SIGN IN"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-4xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl md:text-5xl font-bold text-white mb-4",
                                    children: "Connect with Like-Minded Travelers"
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-purple-200/90",
                                    children: "Find and connect with other travelers who share your interests. Make new friends and explore together."
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 472,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6 max-w-7xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: communities.map((community, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-slate-800/60 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${community.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(community.icon, {
                                                    className: `w-8 h-8 ${community.iconColor}`
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold text-white mb-2",
                                                children: community.title
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-200/70 mb-2",
                                                children: community.travelers
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-200/60 text-sm mb-6",
                                                children: community.description
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: ()=>handleJoinCommunity(community.title),
                                                className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg",
                                                children: "Join Community"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$lottie$2d$chatbot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LottieChatbot"], {}, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            selectedCommunity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[80vh] flex overflow-hidden border border-purple-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-b border-white/10 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center",
                                                    children: communities.find((c)=>c.title === selectedCommunity)?.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        children: (()=>{
                                                            const Icon = communities.find((c)=>c.title === selectedCommunity)?.icon;
                                                            return Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 41
                                                            }, this) : null;
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-semibold text-white",
                                                            children: selectedCommunity
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-purple-200/60",
                                                            children: communities.find((c)=>c.title === selectedCommunity)?.travelers
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: ()=>setShowMembers(!showMembers),
                                                    variant: "ghost",
                                                    className: "text-purple-200 hover:text-white hover:bg-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-5 h-5 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Members"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedCommunity(null),
                                                    className: "text-purple-200 hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                                    children: [
                                        chatMessages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-start gap-3 ${msg.isUser ? "flex-row-reverse" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: msg.avatar || "/placeholder.svg",
                                                        alt: msg.sender,
                                                        className: "w-10 h-10 rounded-full object-cover flex-shrink-0 border-2 border-purple-500/30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex flex-col ${msg.isUser ? "items-end" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-semibold text-white",
                                                                        children: msg.sender
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs",
                                                                        children: msg.country
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `rounded-2xl px-4 py-2 max-w-md ${msg.isUser ? "bg-purple-600 text-white" : msg.isWelcome ? "bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white border border-purple-400/30" : "bg-slate-800/60 text-purple-100 border border-white/10"}`,
                                                                children: msg.message
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                lineNumber: 561,
                                                                columnNumber: 23
                                                            }, this),
                                                            msg.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: msg.image || "/placeholder.svg",
                                                                alt: "Shared image",
                                                                className: "mt-2 rounded-xl max-w-sm border border-white/10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 550,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: chatEndRef
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800/80 backdrop-blur-sm px-6 py-4 border-t border-white/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newMessage,
                                                onChange: (e)=>setNewMessage(e.target.value),
                                                onKeyPress: (e)=>e.key === "Enter" && handleSendMessage(),
                                                placeholder: "Type your message...",
                                                className: "flex-1 bg-slate-900/60 text-white placeholder-purple-200/40 rounded-full px-6 py-3 border border-white/10 focus:outline-none focus:border-purple-500/50"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 587,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                onClick: handleSendMessage,
                                                className: "bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                        lineNumber: 586,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                            lineNumber: 510,
                            columnNumber: 13
                        }, this),
                        showMembers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-80 bg-slate-800/60 backdrop-blur-sm border-l border-white/10 p-6 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-white mb-4",
                                    children: "Community Members"
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: aiTravelers.map((traveler, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-900/40 rounded-xl p-4 border border-white/10 hover:bg-slate-900/60 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: traveler.avatar || "/placeholder.svg",
                                                            alt: traveler.name,
                                                            className: "w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-semibold",
                                                                            children: traveler.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: traveler.country
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                            lineNumber: 623,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                    lineNumber: 621,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-purple-200/60",
                                                                    children: traveler.location
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 620,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: traveler.tags.map((tag, tagIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-2 py-1 bg-purple-600/20 text-purple-200 rounded-full",
                                                            children: tag
                                                        }, tagIdx, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                            lineNumber: 606,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                    lineNumber: 509,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
                lineNumber: 508,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/WebstormProjects/Travellin-website/app/groups/page.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
_s(GroupsPage, "TyTchbkANSKAxNeWlTR+M00BqDg=");
_c = GroupsPage;
var _c;
__turbopack_context__.k.register(_c, "GroupsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=WebstormProjects_Travellin-website_8f73f8cf._.js.map