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
"[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>Calendar,
    "CalendarDayButton",
    ()=>CalendarDayButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = 'label', buttonVariant = 'ghost', formatters, components, ...props }) {
    const defaultClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultClassNames"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
        showOutsideDays: showOutsideDays,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent', String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
        captionLayout: captionLayout,
        formatters: {
            formatMonthDropdown: (date)=>date.toLocaleString('default', {
                    month: 'short'
                }),
            ...formatters
        },
        classNames: {
            root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-fit', defaultClassNames.root),
            months: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex gap-4 flex-col md:flex-row relative', defaultClassNames.months),
            month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col w-full gap-4', defaultClassNames.month),
            nav: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between', defaultClassNames.nav),
            button_previous: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: buttonVariant
            }), 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none', defaultClassNames.button_previous),
            button_next: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                variant: buttonVariant
            }), 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none', defaultClassNames.button_next),
            month_caption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)', defaultClassNames.month_caption),
            dropdowns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5', defaultClassNames.dropdowns),
            dropdown_root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md', defaultClassNames.dropdown_root),
            dropdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute bg-popover inset-0 opacity-0', defaultClassNames.dropdown),
            caption_label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('select-none font-medium', captionLayout === 'label' ? 'text-sm' : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5', defaultClassNames.caption_label),
            table: 'w-full border-collapse',
            weekdays: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex', defaultClassNames.weekdays),
            weekday: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none', defaultClassNames.weekday),
            week: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full mt-2', defaultClassNames.week),
            week_number_header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('select-none w-(--cell-size)', defaultClassNames.week_number_header),
            week_number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-[0.8rem] select-none text-muted-foreground', defaultClassNames.week_number),
            day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none', defaultClassNames.day),
            range_start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-l-md bg-accent', defaultClassNames.range_start),
            range_middle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-none', defaultClassNames.range_middle),
            range_end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-r-md bg-accent', defaultClassNames.range_end),
            today: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none', defaultClassNames.today),
            outside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground aria-selected:text-muted-foreground', defaultClassNames.outside),
            disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground opacity-50', defaultClassNames.disabled),
            hidden: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('invisible', defaultClassNames.hidden),
            ...classNames
        },
        components: {
            Root: ({ className, rootRef, ...props })=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-slot": "calendar",
                    ref: rootRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
                    ...props
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                    lineNumber: 130,
                    columnNumber: 13
                }, void 0);
            },
            Chevron: ({ className, orientation, ...props })=>{
                if (orientation === 'left') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                        lineNumber: 141,
                        columnNumber: 15
                    }, void 0);
                }
                if (orientation === 'right') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                        lineNumber: 147,
                        columnNumber: 15
                    }, void 0);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('size-4', className),
                    ...props
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                    lineNumber: 155,
                    columnNumber: 13
                }, void 0);
            },
            DayButton: CalendarDayButton,
            WeekNumber: ({ children, ...props })=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    ...props,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex size-(--cell-size) items-center justify-center text-center",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                        lineNumber: 162,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
                    lineNumber: 161,
                    columnNumber: 13
                }, void 0);
            },
            ...components
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Calendar;
function CalendarDayButton({ className, day, modifiers, ...props }) {
    _s();
    const defaultClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultClassNames"])();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CalendarDayButton.useEffect": ()=>{
            if (modifiers.focused) ref.current?.focus();
        }
    }["CalendarDayButton.useEffect"], [
        modifiers.focused
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: "ghost",
        size: "icon",
        "data-day": day.date.toLocaleDateString(),
        "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
        "data-range-start": modifiers.range_start,
        "data-range-end": modifiers.range_end,
        "data-range-middle": modifiers.range_middle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70', defaultClassNames.day, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(CalendarDayButton, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c1 = CalendarDayButton;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Calendar");
__turbopack_context__.k.register(_c1, "CalendarDayButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "popover",
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Popover;
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "popover-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = PopoverTrigger;
function PopoverContent({ className, align = 'center', sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = PopoverContent;
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        "data-slot": "popover-anchor",
        ...props
    }, void 0, false, {
        fileName: "[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx",
        lineNumber: 45,
        columnNumber: 10
    }, this);
}
_c3 = PopoverAnchor;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Popover");
__turbopack_context__.k.register(_c1, "PopoverTrigger");
__turbopack_context__.k.register(_c2, "PopoverContent");
__turbopack_context__.k.register(_c3, "PopoverAnchor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HotelDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/WebstormProjects/Travellin-website/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
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
function HotelDetailPage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const hotel = hotels.find((h)=>h.id === Number.parseInt(params.id));
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bookingData, setBookingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        roomType: hotel?.rooms[0] || null,
        checkIn: "",
        checkOut: "",
        guests: 2,
        specialRequests: ""
    });
    const [checkInDate, setCheckInDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [checkOutDate, setCheckOutDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [cardDetails, setCardDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
    });
    const [showConfirmation, setShowConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!hotel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#0a0e27] flex items-center justify-center text-white",
            children: "Hotel not found"
        }, void 0, false, {
            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
            lineNumber: 201,
            columnNumber: 12
        }, this);
    }
    const calculateNights = ()=>{
        if (checkInDate && checkOutDate) {
            const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays > 0 ? diffDays : 1 // Ensure at least 1 night
            ;
        }
        return 1 // Default to 1 night if dates are not set
        ;
    };
    const nights = calculateNights();
    const totalPrice = bookingData.roomType ? bookingData.roomType.price * nights : 0;
    const handleRoomSelect = (room)=>{
        setBookingData({
            ...bookingData,
            roomType: room
        });
    };
    const handlePayment = ()=>{
        if (paymentMethod) {
            setShowConfirmation(true);
            setTimeout(()=>{
                router.push("/hotels");
            }, 4000);
        }
    };
    const nextImage = ()=>{
        setCurrentImageIndex((prev)=>(prev + 1) % hotel.images.length);
    };
    const prevImage = ()=>{
        setCurrentImageIndex((prev)=>(prev - 1 + hotel.images.length) % hotel.images.length);
    };
    const bookingId = `#TRV-${Math.floor(10000 + Math.random() * 90000)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0e27]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-40 bg-[#1a1f3a]/80 backdrop-blur-md border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "container mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xl font-semibold",
                                    children: "Travelinn"
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/hotels",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "text-gray-300 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            showConfirmation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1a1f3a] rounded-2xl p-8 max-w-lg w-full mx-4 border border-purple-500/40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-12 h-12 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-white mb-2",
                                children: "Booking Confirmed!"
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-300 mb-4",
                                children: [
                                    "Thank you for choosing ",
                                    hotel.name,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-[#0a0e27] rounded-lg p-4 mb-4 text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Booking ID:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-purple-400 font-mono font-semibold",
                                                    children: bookingId
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Check-in:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: checkInDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkInDate, "PPP") : "Not set"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 273,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Check-out:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: checkOutDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkOutDate, "PPP") : "Not set"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Duration:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: [
                                                        nights,
                                                        " ",
                                                        nights === 1 ? "night" : "nights"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Total Paid:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 font-bold",
                                                    children: [
                                                        "$",
                                                        totalPrice
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Payment via:"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white capitalize",
                                                    children: paymentMethod === "apple" ? "Apple Pay" : paymentMethod === "google" ? "Google Pay" : paymentMethod === "paypal" ? "PayPal" : "Credit Card"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mb-4",
                                children: "You'll receive a confirmation email shortly with your digital receipt and check-in details."
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>router.push("/hotels"),
                                className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg",
                                children: "Return to Hotels"
                            }, void 0, false, {
                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                lineNumber: 308,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                        lineNumber: 261,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                lineNumber: 259,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-24 pb-16 px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-6xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 flex items-center justify-center gap-2 md:gap-4",
                            children: [
                                {
                                    num: 1,
                                    label: "Room"
                                },
                                {
                                    num: 2,
                                    label: "Details"
                                },
                                {
                                    num: 3,
                                    label: "Payment"
                                }
                            ].map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold transition-all ${step >= s.num ? "bg-purple-600 text-white scale-110" : "bg-gray-700 text-gray-400"}`,
                                                    children: s.num
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs mt-1 hidden md:block ${step >= s.num ? "text-purple-400" : "text-gray-500"}`,
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        idx < 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-12 md:w-20 h-1 ${step > s.num ? "bg-purple-600" : "bg-gray-700"}`
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, s.num, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-64 md:h-96 rounded-2xl overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: hotel.images[currentImageIndex] || "/placeholder.svg",
                                            alt: hotel.name,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: prevImage,
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: nextImage,
                                            className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                                            children: hotel.images.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentImageIndex(idx),
                                                    className: `w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-6" : "bg-white/50"}`
                                                }, idx, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-2xl md:text-3xl font-bold text-white mb-2",
                                                        children: hotel.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-purple-300 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: hotel.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 389,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: Array.from({
                                                            length: hotel.rating
                                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-5 h-5 fill-yellow-500 text-yellow-500"
                                                            }, i, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 mb-4 leading-relaxed",
                                            children: hotel.description
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: hotel.amenities.map((amenity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm",
                                                    children: amenity
                                                }, amenity, false, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white mb-4",
                                            children: "Select Your Room Type"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-purple-500/30",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 text-purple-300 font-semibold",
                                                                    children: "Room Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 text-purple-300 font-semibold",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 text-purple-300 font-semibold",
                                                                    children: "Price (per night)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 text-purple-300 font-semibold",
                                                                    children: "Guests"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "pb-3 text-purple-300 font-semibold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        children: hotel.rooms.map((room)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: `border-b border-purple-500/20 transition-colors ${bookingData.roomType?.id === room.id ? "bg-purple-600/10" : "hover:bg-purple-600/5"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-semibold",
                                                                            children: room.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 432,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-gray-400 text-sm max-w-xs",
                                                                        children: room.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-bold text-lg",
                                                                            children: [
                                                                                "$",
                                                                                room.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 436,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                        lineNumber: 435,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4 text-gray-300",
                                                                        children: room.guests
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "py-4",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            onClick: ()=>handleRoomSelect(room),
                                                                            variant: bookingData.roomType?.id === room.id ? "default" : "outline",
                                                                            className: bookingData.roomType?.id === room.id ? "bg-purple-600 hover:bg-purple-700 text-white" : "border-purple-500 text-purple-300 hover:bg-purple-600/20",
                                                                            size: "sm",
                                                                            children: bookingData.roomType?.id === room.id ? "Selected" : "Select"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, room.id, true, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setStep(2),
                                        disabled: !bookingData.roomType,
                                        className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "Continue →"
                                    }, void 0, false, {
                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white mb-6",
                                            children: "Complete Your Booking"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-purple-300 mb-2 font-medium",
                                                                    children: "Check-in Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "outline",
                                                                                className: "w-full justify-start text-left font-normal bg-[#0a0e27] border-purple-500/30 hover:border-purple-500 hover:bg-[#0a0e27] text-white",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                                        className: "mr-2 h-5 w-5 text-purple-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                        lineNumber: 488,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    checkInDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkInDate, "PPP") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Pick a date"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                        lineNumber: 489,
                                                                                        columnNumber: 73
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                lineNumber: 484,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 483,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                            className: "w-auto p-0 bg-[#1a1f3a] border-purple-500/30",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                                                mode: "single",
                                                                                selected: checkInDate,
                                                                                onSelect: setCheckInDate,
                                                                                disabled: (date)=>date < new Date(),
                                                                                initialFocus: true,
                                                                                className: "bg-[#1a1f3a] text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                lineNumber: 493,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 492,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-purple-300 mb-2 font-medium",
                                                                    children: "Check-out Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                                                            asChild: true,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "outline",
                                                                                className: "w-full justify-start text-left font-normal bg-[#0a0e27] border-purple-500/30 hover:border-purple-500 hover:bg-[#0a0e27] text-white",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                                        className: "mr-2 h-5 w-5 text-purple-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                        lineNumber: 513,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    checkOutDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkOutDate, "PPP") : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: "Pick a date"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                        lineNumber: 514,
                                                                                        columnNumber: 75
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                lineNumber: 509,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 508,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                                                            className: "w-auto p-0 bg-[#1a1f3a] border-purple-500/30",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                                                                                mode: "single",
                                                                                selected: checkOutDate,
                                                                                onSelect: setCheckOutDate,
                                                                                disabled: (date)=>date < (checkInDate || new Date()),
                                                                                initialFocus: true,
                                                                                className: "bg-[#1a1f3a] text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                                lineNumber: 518,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 505,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-purple-300 mb-2 font-medium",
                                                            children: "Number of Guests"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 532,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 534,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "1",
                                                                    max: bookingData.roomType?.guests || 2,
                                                                    value: bookingData.guests,
                                                                    onChange: (e)=>setBookingData({
                                                                            ...bookingData,
                                                                            guests: Number.parseInt(e.target.value)
                                                                        }),
                                                                    className: "w-full pl-12 pr-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 535,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-purple-300 mb-2 font-medium",
                                                            children: "Special Requests (Optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: bookingData.specialRequests,
                                                            onChange: (e)=>setBookingData({
                                                                    ...bookingData,
                                                                    specialRequests: e.target.value
                                                                }),
                                                            placeholder: "e.g., Need wheelchair access, dietary requirements, early check-in...",
                                                            rows: 3,
                                                            className: "w-full px-4 py-3 bg-[#0a0e27] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none resize-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm mt-2",
                                                            children: "We'll make sure your stay is as comfortable as possible."
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-4",
                                            children: "Booking Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: hotel.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: hotel.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Room: ",
                                                                bookingData.roomType?.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                "$",
                                                                bookingData.roomType?.price,
                                                                "/night"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 571,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Duration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                nights,
                                                                " ",
                                                                nights === 1 ? "night" : "nights"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Guests"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: bookingData.guests
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-purple-500/30 pt-3 mt-3 flex justify-between text-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-400 font-bold text-2xl",
                                                            children: [
                                                                "$",
                                                                totalPrice
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setStep(1),
                                            variant: "outline",
                                            className: "border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg",
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setStep(3),
                                            disabled: !checkInDate || !checkOutDate || !bookingData.roomType,
                                            className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "Proceed to Payment →"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white mb-2",
                                            children: "Secure Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mb-6",
                                            children: "Choose your preferred payment method and confirm your stay."
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setPaymentMethod("apple");
                                                        setCardDetails({
                                                            cardNumber: "",
                                                            expiryDate: "",
                                                            cvv: "",
                                                            cardholderName: ""
                                                        });
                                                    },
                                                    className: `w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${paymentMethod === "apple" ? "border-purple-500 bg-purple-600/20" : "border-gray-700 hover:border-purple-500/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/apple-pay-logo.png",
                                                                alt: "Apple Pay",
                                                                width: 56,
                                                                height: 56,
                                                                className: "object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-white",
                                                                    children: "Apple Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Pay securely with Apple Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 641,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setPaymentMethod("google");
                                                        setCardDetails({
                                                            cardNumber: "",
                                                            expiryDate: "",
                                                            cvv: "",
                                                            cardholderName: ""
                                                        });
                                                    },
                                                    className: `w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${paymentMethod === "google" ? "border-purple-500 bg-purple-600/20" : "border-gray-700 hover:border-purple-500/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/google-pay-logo.png",
                                                                alt: "Google Pay",
                                                                width: 56,
                                                                height: 56,
                                                                className: "object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 657,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-white",
                                                                    children: "Google Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Pay securely with Google Pay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setPaymentMethod("card"),
                                                    className: `w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${paymentMethod === "card" ? "border-purple-500 bg-purple-600/20" : "border-gray-700 hover:border-purple-500/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                className: "w-7 h-7 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-white",
                                                                    children: "Credit / Debit Card"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Pay with Visa, MasterCard, or AmEx"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setPaymentMethod("paypal");
                                                        setCardDetails({
                                                            cardNumber: "",
                                                            expiryDate: "",
                                                            cvv: "",
                                                            cardholderName: ""
                                                        });
                                                    },
                                                    className: `w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${paymentMethod === "paypal" ? "border-purple-500 bg-purple-600/20" : "border-gray-700 hover:border-purple-500/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-bold text-xl",
                                                                children: "P"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 700,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-white",
                                                                    children: "PayPal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 703,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Pay securely with PayPal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 704,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 17
                                        }, this),
                                        paymentMethod === "card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 space-y-4 p-4 bg-[#0a0e27] rounded-xl border border-purple-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-purple-300 mb-2 font-medium",
                                                            children: "Cardholder Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "John Doe",
                                                            value: cardDetails.cardholderName,
                                                            onChange: (e)=>setCardDetails({
                                                                    ...cardDetails,
                                                                    cardholderName: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-purple-300 mb-2 font-medium",
                                                            children: "Card Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 722,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "1234 5678 9012 3456",
                                                            value: cardDetails.cardNumber,
                                                            onChange: (e)=>setCardDetails({
                                                                    ...cardDetails,
                                                                    cardNumber: e.target.value
                                                                }),
                                                            className: "w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-purple-300 mb-2 font-medium",
                                                                    children: "Expiry Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "MM/YY",
                                                                    value: cardDetails.expiryDate,
                                                                    onChange: (e)=>setCardDetails({
                                                                            ...cardDetails,
                                                                            expiryDate: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 734,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-purple-300 mb-2 font-medium",
                                                                    children: "CVV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "123",
                                                                    value: cardDetails.cvv,
                                                                    onChange: (e)=>setCardDetails({
                                                                            ...cardDetails,
                                                                            cvv: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-[#1a1f3a] border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 text-xs flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                                lineNumber: 755,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 23
                                                        }, this),
                                                        "All payments are processed securely. Your card details are never stored on our servers."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#1a1f3a] rounded-2xl p-4 md:p-6 border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white mb-4",
                                            children: "Final Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 769,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: hotel.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: hotel.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: bookingData.roomType?.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                "$",
                                                                bookingData.roomType?.price,
                                                                "/night"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Check-in"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: checkInDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkInDate, "PPP") : "Not set"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Check-out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 786,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: checkOutDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(checkOutDate, "PPP") : "Not set"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                nights,
                                                                " ",
                                                                nights === 1 ? "night" : "nights",
                                                                " × $",
                                                                bookingData.roomType?.price
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-semibold",
                                                            children: [
                                                                "$",
                                                                totalPrice
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 795,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-purple-500/30 pt-3 mt-3 flex justify-between text-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white font-bold",
                                                            children: "Total Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-400 font-bold text-2xl",
                                                            children: [
                                                                "$",
                                                                totalPrice
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                                    lineNumber: 797,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>setStep(2),
                                            variant: "outline",
                                            className: "border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-lg text-lg",
                                            children: "← Back"
                                        }, void 0, false, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 805,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: handlePayment,
                                            disabled: !paymentMethod || paymentMethod === "card" && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv || !cardDetails.cardholderName),
                                            className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: [
                                                "Confirm & Pay $",
                                                totalPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                                    lineNumber: 804,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/WebstormProjects/Travellin-website/app/hotels/[id]/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(HotelDetailPage, "ltk7wfsg0vMyo+kosCmjP1VVo8Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$WebstormProjects$2f$Travellin$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HotelDetailPage;
var _c;
__turbopack_context__.k.register(_c, "HotelDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=WebstormProjects_Travellin-website_e8f5df9d._.js.map