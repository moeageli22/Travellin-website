module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/WebstormProjects/Travellin-website/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hotels",
    ()=>hotels
]);
const hotels = [
    {
        id: 1,
        name: "Azure Paradise Resort",
        location: "Maldives",
        rating: 5,
        image: "/luxury-maldives-overwater-resort-turquoise-ocean.jpg",
        images: [
            "/luxury-maldives-overwater-resort-turquoise-ocean.jpg",
            "/maldives-sunset.png",
            "/maldives-infinity-pool.jpg"
        ],
        description: "Experience tropical serenity above crystal waters. Nestled over turquoise waters in the heart of the Maldives, Azure Paradise Resort offers the ultimate overwater villa experience. Each suite features a private deck, glass-floor lagoon views, and direct ocean access. Enjoy candle-lit dining on the beach, snorkeling with coral reef life, and spa treatments inspired by island botanicals.",
        amenities: [
            "Infinity pool",
            "Spa",
            "Fine dining",
            "Ocean sports",
            "Private butler"
        ],
        rooms: [
            {
                id: 1,
                name: "Overwater Deluxe Villa",
                description: "Panoramic lagoon view, private deck, glass floor",
                price: 450,
                guests: 2
            },
            {
                id: 2,
                name: "Sunset Lagoon Suite",
                description: "Ocean sunset view, king bed, jacuzzi",
                price: 520,
                guests: 2
            },
            {
                id: 3,
                name: "Family Ocean Villa",
                description: "Two bedrooms, private pool, outdoor lounge",
                price: 590,
                guests: 4
            }
        ]
    },
    {
        id: 2,
        name: "Skyline Grand Hotel",
        location: "New York",
        rating: 5,
        image: "/new-york-city-skyline-night-modern-hotel.jpg",
        images: [
            "/new-york-city-skyline-night-modern-hotel.jpg",
            "/new-york-hotel-room-cityscape.jpg",
            "/manhattan-rooftop-bar.jpg"
        ],
        description: "Located in the vibrant heart of Manhattan, Skyline Grand Hotel blends modern luxury with skyline views that never sleep. Floor-to-ceiling windows overlook the cityscape, and guests enjoy quick access to Central Park, Fifth Avenue, and Broadway. Perfect for business or leisure travelers who crave elegance and convenience.",
        amenities: [
            "Rooftop bar",
            "24-hour concierge",
            "Gym & spa",
            "Smart rooms"
        ],
        rooms: [
            {
                id: 1,
                name: "Executive King",
                description: "City view, work desk, high-speed WiFi",
                price: 380,
                guests: 2
            },
            {
                id: 2,
                name: "City View Suite",
                description: "Separate living area, panoramic windows",
                price: 450,
                guests: 2
            },
            {
                id: 3,
                name: "Penthouse Loft",
                description: "Two floors, private terrace, butler service",
                price: 690,
                guests: 4
            }
        ]
    },
    {
        id: 3,
        name: "Mountain Vista Lodge",
        location: "Swiss Alps",
        rating: 4,
        image: "/swiss-alps-mountain-lodge-stone-architecture.jpg",
        images: [
            "/swiss-alps-mountain-lodge-stone-architecture.jpg",
            "/swiss-alps-snow-chalet-interior.jpg",
            "/mountain-lodge-fireplace-cozy.jpg"
        ],
        description: "Perched high in the snow-kissed Alps, Mountain Vista Lodge invites you to relax amid panoramic mountain views and cozy alpine charm. Each chalet-style suite features rustic wood interiors, fireplaces, and private balconies. Guests can ski by day and unwind by the fireside lounge by night.",
        amenities: [
            "Ski-in/out access",
            "Sauna",
            "Spa",
            "Gourmet restaurant"
        ],
        rooms: [
            {
                id: 1,
                name: "Alpine Standard Room",
                description: "Mountain view, fireplace, balcony",
                price: 320,
                guests: 2
            },
            {
                id: 2,
                name: "Chalet Suite",
                description: "Wood interior, separate living area",
                price: 420,
                guests: 2
            },
            {
                id: 3,
                name: "Panorama Deluxe Loft",
                description: "Two bedrooms, private sauna, 360° views",
                price: 540,
                guests: 4
            }
        ]
    },
    {
        id: 4,
        name: "Royal Elegance Suite",
        location: "Paris",
        rating: 5,
        image: "/luxury-paris-hotel-room-elegant-interior.jpg",
        images: [
            "/luxury-paris-hotel-room-elegant-interior.jpg",
            "/paris-hotel-marble-bathroom-luxury.jpg",
            "/paris-terrace-eiffel-tower-view.jpg"
        ],
        description: "Experience Parisian grandeur at Royal Elegance Suite, set in a restored 19th-century mansion minutes from the Champs-Élysées. Ornate interiors, marble bathrooms, and private terraces exude timeless sophistication. Ideal for romantic getaways and luxury travelers seeking classic Paris elegance.",
        amenities: [
            "Fine-dining restaurant",
            "In-room butler",
            "Limousine service",
            "Spa"
        ],
        rooms: [
            {
                id: 1,
                name: "Classic Room",
                description: "French decor, marble bathroom",
                price: 520,
                guests: 2
            },
            {
                id: 2,
                name: "Prestige Suite",
                description: "Separate lounge, terrace, city views",
                price: 650,
                guests: 2
            },
            {
                id: 3,
                name: "Royal Apartment",
                description: "Two bedrooms, private butler, limousine",
                price: 890,
                guests: 4
            }
        ]
    },
    {
        id: 5,
        name: "Modern Heights Hotel",
        location: "Tokyo",
        rating: 5,
        image: "/modern-tokyo-hotel-minimalist-design-interior.jpg",
        images: [
            "/modern-tokyo-hotel-minimalist-design-interior.jpg",
            "/tokyo-skyline-night-hotel-view.jpg",
            "/japanese-minimalist-hotel-room.jpg"
        ],
        description: "A sleek urban retreat in Shinjuku, Modern Heights Hotel merges Japanese minimalism with smart-room technology. Guests enjoy breathtaking skyline views, in-room tablets for concierge services, and access to Tokyo's best nightlife and cuisine.",
        amenities: [
            "Onsen spa",
            "Rooftop restaurant",
            "Gym",
            "Automated check-in"
        ],
        rooms: [
            {
                id: 1,
                name: "Standard King",
                description: "Smart room tech, city view",
                price: 290,
                guests: 2
            },
            {
                id: 2,
                name: "Deluxe City Suite",
                description: "Panoramic windows, tech hub",
                price: 360,
                guests: 2
            },
            {
                id: 3,
                name: "Skyline Executive",
                description: "Two bedrooms, onsen bath, skyline views",
                price: 450,
                guests: 4
            }
        ]
    },
    {
        id: 6,
        name: "Coastal Dream Resort",
        location: "Bali",
        rating: 5,
        image: "/bali-beach-resort-tropical-ocean-view.jpg",
        images: [
            "/bali-beach-resort-tropical-ocean-view.jpg",
            "/bali-infinity-pool-ocean-sunset.jpg",
            "/bali-tropical-villa-palm-trees.jpg"
        ],
        description: "A serene beachfront paradise surrounded by palm trees and coral-blue waters, Coastal Dream Resort is perfect for those seeking relaxation and culture. Guests can enjoy sunrise yoga sessions, Balinese spa rituals, and tropical cocktails overlooking the sea.",
        amenities: [
            "Beachfront villas",
            "Infinity pool",
            "Wellness center",
            "Surf classes"
        ],
        rooms: [
            {
                id: 1,
                name: "Garden Villa",
                description: "Tropical garden view, outdoor shower",
                price: 395,
                guests: 2
            },
            {
                id: 2,
                name: "Oceanfront Suite",
                description: "Direct beach access, private terrace",
                price: 480,
                guests: 2
            },
            {
                id: 3,
                name: "Honeymoon Villa",
                description: "Private pool, ocean view, romantic setup",
                price: 620,
                guests: 2
            }
        ]
    }
];
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx <module evaluation>", "default");
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx", "default");
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/hotels/[id]/hotel-booking.tsx [app-rsc] (ecmascript)");
;
;
;
async function HotelDetailPage({ params }) {
    const resolvedParams = await params;
    const hotel = __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hotels"].find((h)=>h.id === Number.parseInt(resolvedParams.id));
    if (!hotel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#0a0e27] flex items-center justify-center text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: "Hotel Not Found"
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-6",
                        children: "The hotel you're looking for doesn't exist."
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/hotels",
                        className: "text-purple-400 hover:text-purple-300 underline",
                        children: "Return to Hotels"
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$app$2f$hotels$2f5b$id$5d2f$hotel$2d$booking$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        hotel: hotel
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f126055b._.js.map