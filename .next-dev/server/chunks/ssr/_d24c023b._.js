module.exports = [
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1._b912606fd2ff7d4fa95d7af3c39ab05b/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_b912606fd2ff7d4fa95d7af3c39ab05b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/components/ui/command.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_c6c504c40387f8d1b13a3f9b76a4e886/node_modules/cmdk/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Command = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Command.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].displayName;
const CommandDialog = ({ children, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "overflow-hidden p-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/command.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CommandInput = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "mr-2 h-4 w-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Input, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandInput.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Input.displayName;
const CommandList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].List.displayName;
const CommandEmpty = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Empty, {
        ref: ref,
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandEmpty.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Empty.displayName;
const CommandGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Group, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 87,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Group.displayName;
const CommandSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Separator, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Separator.displayName;
const CommandItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 115,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CommandItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$cmdk$40$1$2e$1$2e$1_$40$types$2b$react$2d$dom_c6c504c40387f8d1b13a3f9b76a4e886$2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"].Item.displayName;
const CommandShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("ml-auto text-xs tracking-widest text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
CommandShortcut.displayName = "CommandShortcut";
;
}),
"[project]/components/ui/popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-popover@1.1_61f102b7eb0c911adc8fa7ab101f2619/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/popover.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$popover$40$1$2e$1_61f102b7eb0c911adc8fa7ab101f2619$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}),
"[project]/components/search-command.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchCommand",
    ()=>SearchCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SearchCommand = ({ onSearch, onItemSelect, getItemId, getItemLabel, placeholder = "Search...", noResultsText = "No results found." })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (value)=>{
        setSearchQuery(value);
        if (!value) {
            setItems([]);
            setOpen(false);
            return;
        }
        setLoading(true);
        setOpen(true);
        try {
            const results = await onSearch(value);
            setItems(results);
        } catch (error) {
            console.error('Error searching:', error);
            setItems([]);
        } finally{
            setLoading(false);
        }
    }, [
        onSearch
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        setSelectedItem(item);
        setOpen(false);
        setSearchQuery(getItemLabel(item));
        onItemSelect(item);
    }, [
        getItemLabel,
        onItemSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
            open: open,
            onOpenChange: setOpen,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                            className: "rounded-lg border shadow-md",
                            shouldFilter: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandInput"], {
                                ref: inputRef,
                                placeholder: placeholder,
                                value: searchQuery,
                                onValueChange: handleSearch,
                                onKeyDown: (e)=>{
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
                                        e.stopPropagation();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/search-command.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/search-command.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/search-command.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/search-command.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopoverContent"], {
                    className: "w-[--radix-popover-trigger-width] p-0",
                    align: "start",
                    onOpenAutoFocus: (e)=>e.preventDefault(),
                    children: (items.length > 0 || loading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Command"], {
                        shouldFilter: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandList"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandGroup"], {
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                    disabled: true,
                                    className: "flex items-center gap-2 py-6 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/search-command.tsx",
                                            lineNumber: 108,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Searching..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/search-command.tsx",
                                    lineNumber: 107,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                    disabled: true,
                                    children: noResultsText
                                }, void 0, false, {
                                    fileName: "[project]/components/search-command.tsx",
                                    lineNumber: 112,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandItem"], {
                                        value: getItemId(item),
                                        onSelect: ()=>handleSelect(item),
                                        onMouseMove: ()=>inputRef.current?.focus(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mr-2 h-4 w-4", selectedItem && getItemId(selectedItem) === getItemId(item) ? "opacity-100" : "opacity-0")
                                            }, void 0, false, {
                                                fileName: "[project]/components/search-command.tsx",
                                                lineNumber: 121,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            getItemLabel(item)
                                        ]
                                    }, getItemId(item), true, {
                                        fileName: "[project]/components/search-command.tsx",
                                        lineNumber: 115,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/search-command.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/search-command.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/search-command.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/search-command.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/search-command.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/search-command.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/actions/data:3538e3 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40afe04719a62213312cb580b086172cfbacbb3873":"searchUsers"},"app/actions/actions.ts",""] */ __turbopack_context__.s([
    "searchUsers",
    ()=>searchUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var searchUsers = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40afe04719a62213312cb580b086172cfbacbb3873", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "searchUsers"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy9hY3Rpb25zLnRzXHJcbid1c2Ugc2VydmVyJ1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xyXG5pbXBvcnQgeyBVc2VyLCB1c2VyU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJ1xyXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSAnLi4vLi4vbGliL2RiJ1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL2xpYi9sb2dnZXInXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAL2F1dGgnXHJcbmltcG9ydCB7IGlzTWNwQXV0aG9yaXplZCB9IGZyb20gJ0AvbGliL2F1dGh6J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUF1dGgoKSB7XHJcbiAgLy8gQWxsb3cgTUNQLWF1dGhvcml6ZWQgY2FsbHMgKHZhbGlkYXRlZCBpbiB0aGUgTUNQIHJvdXRlKSB0byBieXBhc3MgdXNlciBzZXNzaW9uIGNoZWNrc1xyXG4gIGlmIChpc01jcEF1dGhvcml6ZWQoKSkgcmV0dXJuIHsgdXNlcjogeyBpZDogJ21jcCcsIG5hbWU6ICdNQ1AgQWdlbnQnIH0gfVxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvblxyXG59XHJcblxyXG4vLyAtLS0gTGlzdCBVc2VycyAoYWxsLCB3aXRoIHBhZ2luYXRpb24pIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdFVzZXJzKG9wdHM/OiB7IG9mZnNldD86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIG9wdHM/Lm9mZnNldCA/PyAwKVxyXG4gIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oMTAwMDAsIE1hdGgubWF4KDEsIG9wdHM/LmxpbWl0ID8/IDEwMDApKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IG9mZnNldCwgbGltaXQgfSB9KVxyXG5cclxuICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnk8VXNlcj4oXHJcbiAgICBgU0VMRUNUIGlkLCBuYW1lLCBwaG9uZV9udW1iZXIgQVMgXCJwaG9uZU51bWJlclwiLCBlbWFpbFxyXG4gICAgIEZST00gdXNlcnNcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgT0ZGU0VUICQxXHJcbiAgICAgTElNSVQgJDJgLFxyXG4gICAgW29mZnNldCwgbGltaXRdXHJcbiAgKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlc3BvbnNlJywgcGF5bG9hZDogeyBjb3VudDogcm93cy5sZW5ndGggfSB9KVxyXG4gIHJldHVybiByb3dzXHJcbn1cclxuXHJcbi8vIC0tLSBTZWFyY2ggVXNlcnMgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICBhd2FpdCByZXF1aXJlQXV0aCgpXHJcbiAgY29uc29sZS5sb2coJ1NlYXJjaGluZyB1c2VycyB3aXRoIHF1ZXJ5OicsIHF1ZXJ5KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3NlYXJjaC5yZXF1ZXN0JywgcGF5bG9hZDogeyBxdWVyeSB9IH0pXHJcblxyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIExPV0VSKG5hbWUpIExJS0UgJDFcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgTElNSVQgMjBgLFxyXG4gICAgW2Ake3F1ZXJ5LnRvTG93ZXJDYXNlKCl9JWBdXHJcbiAgKVxyXG5cclxuICBjb25zb2xlLmxvZygnU2VhcmNoIHJlc3VsdHM6Jywgcm93cylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdzZWFyY2gucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGNvdW50OiByb3dzLmxlbmd0aCB9IH0pXHJcbiAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuLy8gLS0tIEFkZCBVc2VyIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVXNlcihkYXRhOiBPbWl0PFVzZXIsICdpZCc+KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIC8vIENoZWNrIHVuaXF1ZW5lc3MgYnkgbmFtZSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICBjb25zdCBtYXliZSA9IGF3YWl0IHBvb2wucXVlcnk8eyBpZDogc3RyaW5nIH0+KFxyXG4gICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgW2RhdGEubmFtZV1cclxuICApXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXNlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdJZCA9IHJhbmRvbVVVSUQoKVxyXG4gIGNvbnN0IG5ld1VzZXIgPSB7IC4uLmRhdGEsIGlkOiBuZXdJZCB9XHJcbiAgY29uc3QgdmFsaWRhdGVkVXNlciA9IHVzZXJTY2hlbWEucGFyc2UobmV3VXNlcilcclxuXHJcbiAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgIGBJTlNFUlQgSU5UTyB1c2VycyAoaWQsIG5hbWUsIHBob25lX251bWJlciwgZW1haWwpXHJcbiAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClgLFxyXG4gICAgW3ZhbGlkYXRlZFVzZXIuaWQsIHZhbGlkYXRlZFVzZXIubmFtZSwgdmFsaWRhdGVkVXNlci5waG9uZU51bWJlciwgdmFsaWRhdGVkVXNlci5lbWFpbF1cclxuICApXHJcblxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2NyZWF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnY3JlYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcblxyXG4gIHJldHVybiB2YWxpZGF0ZWRVc2VyXHJcbn1cclxuXHJcbi8vIC0tLSBEZWxldGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICQxYCwgW2lkXSlcclxuXHJcbiAgaWYgKHJlc3VsdC5yb3dDb3VudCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBVc2VyIHdpdGggaWQgJHtpZH0gaGFzIGJlZW4gZGVsZXRlZC5gKVxyXG4gIHJldmFsaWRhdGVQYXRoKCcvJylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdkZWxldGUucmVxdWVzdCcsIHBheWxvYWQ6IHsgaWQgfSB9KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2RlbGV0ZS5yZXNwb25zZScsIHBheWxvYWQ6IHsgcm93Q291bnQ6IHJlc3VsdC5yb3dDb3VudCB9IH0pXHJcbn1cclxuXHJcbi8vIC0tLSBVcGRhdGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBkYXRhOiBQYXJ0aWFsPE9taXQ8VXNlciwgJ2lkJz4+XHJcbik6IFByb21pc2U8VXNlcj4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGdldFVzZXJCeUlkKGlkKVxyXG4gIGlmICghZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcihgVXNlciB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApXHJcblxyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLmV4aXN0aW5nLCAuLi5kYXRhIH1cclxuICBjb25zdCB2YWxpZGF0ZWRVc2VyID0gdXNlclNjaGVtYS5wYXJzZSh1cGRhdGVkKVxyXG5cclxuICAvLyBJZiB0aGUgbmFtZSBjaGFuZ2VkLCBlbnN1cmUgdW5pcXVlbmVzcyAoY2FzZS1pbnNlbnNpdGl2ZSkgZXhjbHVkaW5nIHRoaXMgdXNlclxyXG4gIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGV4aXN0aW5nLm5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY29uc3QgbWF5YmUgPSBhd2FpdCBwb29sLnF1ZXJ5PHsgaWQ6IHN0cmluZyB9PihcclxuICAgICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgICBbZGF0YS5uYW1lXVxyXG4gICAgKVxyXG4gICAgY29uc3QgZm91bmQgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCAmJiBmb3VuZFswXS5pZCAhPT0gaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICBgVVBEQVRFIHVzZXJzXHJcbiAgICAgU0VUIG5hbWUgPSAkMSwgcGhvbmVfbnVtYmVyID0gJDIsIGVtYWlsID0gJDNcclxuICAgICBXSEVSRSBpZCA9ICQ0YCxcclxuICAgIFt2YWxpZGF0ZWRVc2VyLm5hbWUsIHZhbGlkYXRlZFVzZXIucGhvbmVOdW1iZXIsIHZhbGlkYXRlZFVzZXIuZW1haWwsIGlkXVxyXG4gIClcclxuXHJcbiAgY29uc29sZS5sb2coYFVzZXIgd2l0aCBpZCAke2lkfSBoYXMgYmVlbiB1cGRhdGVkLmApXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nKVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3VwZGF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAndXBkYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgcmV0dXJuIHZhbGlkYXRlZFVzZXJcclxufVxyXG5cclxuLy8gLS0tIEdldCBVc2VyIEJ5IElEIC0tLVxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBjYWNoZShhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIGlkID0gJDFcclxuICAgICBMSU1JVCAxYCxcclxuICAgIFtpZF1cclxuICApXHJcbiAgY29uc3QgcmVzdWx0ID0gcm93c1swXSB8fCBudWxsXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnZ2V0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuICBsb2dFdmVudCh7IHR5cGU6ICdnZXQucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGZvdW5kOiAhIXJlc3VsdCB9IH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJSQTRDc0IifQ==
}),
"[project]/app/components/search-input-cmd.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/search-command.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3538e3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:3538e3 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
function SearchInput() {
    const handleSearch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](async (value)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3538e3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["searchUsers"])(value);
    }, []);
    const handleSelect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((user)=>{
        // Update URL
        const url = new URL(window.location.href);
        url.searchParams.set('userId', user.id);
        window.history.pushState({}, '', url.toString());
        window.location.reload();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-full md:max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$search$2d$command$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchCommand"], {
            onSearch: handleSearch,
            onItemSelect: handleSelect,
            getItemId: (user)=>user.id,
            getItemLabel: (user)=>user.name,
            placeholder: "Search users...",
            noResultsText: "No users found."
        }, void 0, false, {
            fileName: "[project]/app/components/search-input-cmd.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/search-input-cmd.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/client-only.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ClientOnly({ children }) {
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/components/ui/avatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-avatar@1.1._9ba02da19b9f275426cc95fcfb8dd6ae/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$avatar$40$1$2e$1$2e$_9ba02da19b9f275426cc95fcfb8dd6ae$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
}),
"[project]/app/actions/data:14c4c1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40c2d5ccbade848dc073cb7fdee3ae78b72d98633c":"deleteUser"},"app/actions/actions.ts",""] */ __turbopack_context__.s([
    "deleteUser",
    ()=>deleteUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40c2d5ccbade848dc073cb7fdee3ae78b72d98633c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy9hY3Rpb25zLnRzXHJcbid1c2Ugc2VydmVyJ1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xyXG5pbXBvcnQgeyBVc2VyLCB1c2VyU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJ1xyXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSAnLi4vLi4vbGliL2RiJ1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL2xpYi9sb2dnZXInXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAL2F1dGgnXHJcbmltcG9ydCB7IGlzTWNwQXV0aG9yaXplZCB9IGZyb20gJ0AvbGliL2F1dGh6J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUF1dGgoKSB7XHJcbiAgLy8gQWxsb3cgTUNQLWF1dGhvcml6ZWQgY2FsbHMgKHZhbGlkYXRlZCBpbiB0aGUgTUNQIHJvdXRlKSB0byBieXBhc3MgdXNlciBzZXNzaW9uIGNoZWNrc1xyXG4gIGlmIChpc01jcEF1dGhvcml6ZWQoKSkgcmV0dXJuIHsgdXNlcjogeyBpZDogJ21jcCcsIG5hbWU6ICdNQ1AgQWdlbnQnIH0gfVxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvblxyXG59XHJcblxyXG4vLyAtLS0gTGlzdCBVc2VycyAoYWxsLCB3aXRoIHBhZ2luYXRpb24pIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdFVzZXJzKG9wdHM/OiB7IG9mZnNldD86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIG9wdHM/Lm9mZnNldCA/PyAwKVxyXG4gIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oMTAwMDAsIE1hdGgubWF4KDEsIG9wdHM/LmxpbWl0ID8/IDEwMDApKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IG9mZnNldCwgbGltaXQgfSB9KVxyXG5cclxuICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnk8VXNlcj4oXHJcbiAgICBgU0VMRUNUIGlkLCBuYW1lLCBwaG9uZV9udW1iZXIgQVMgXCJwaG9uZU51bWJlclwiLCBlbWFpbFxyXG4gICAgIEZST00gdXNlcnNcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgT0ZGU0VUICQxXHJcbiAgICAgTElNSVQgJDJgLFxyXG4gICAgW29mZnNldCwgbGltaXRdXHJcbiAgKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlc3BvbnNlJywgcGF5bG9hZDogeyBjb3VudDogcm93cy5sZW5ndGggfSB9KVxyXG4gIHJldHVybiByb3dzXHJcbn1cclxuXHJcbi8vIC0tLSBTZWFyY2ggVXNlcnMgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICBhd2FpdCByZXF1aXJlQXV0aCgpXHJcbiAgY29uc29sZS5sb2coJ1NlYXJjaGluZyB1c2VycyB3aXRoIHF1ZXJ5OicsIHF1ZXJ5KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3NlYXJjaC5yZXF1ZXN0JywgcGF5bG9hZDogeyBxdWVyeSB9IH0pXHJcblxyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIExPV0VSKG5hbWUpIExJS0UgJDFcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgTElNSVQgMjBgLFxyXG4gICAgW2Ake3F1ZXJ5LnRvTG93ZXJDYXNlKCl9JWBdXHJcbiAgKVxyXG5cclxuICBjb25zb2xlLmxvZygnU2VhcmNoIHJlc3VsdHM6Jywgcm93cylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdzZWFyY2gucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGNvdW50OiByb3dzLmxlbmd0aCB9IH0pXHJcbiAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuLy8gLS0tIEFkZCBVc2VyIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVXNlcihkYXRhOiBPbWl0PFVzZXIsICdpZCc+KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIC8vIENoZWNrIHVuaXF1ZW5lc3MgYnkgbmFtZSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICBjb25zdCBtYXliZSA9IGF3YWl0IHBvb2wucXVlcnk8eyBpZDogc3RyaW5nIH0+KFxyXG4gICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgW2RhdGEubmFtZV1cclxuICApXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXNlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdJZCA9IHJhbmRvbVVVSUQoKVxyXG4gIGNvbnN0IG5ld1VzZXIgPSB7IC4uLmRhdGEsIGlkOiBuZXdJZCB9XHJcbiAgY29uc3QgdmFsaWRhdGVkVXNlciA9IHVzZXJTY2hlbWEucGFyc2UobmV3VXNlcilcclxuXHJcbiAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgIGBJTlNFUlQgSU5UTyB1c2VycyAoaWQsIG5hbWUsIHBob25lX251bWJlciwgZW1haWwpXHJcbiAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClgLFxyXG4gICAgW3ZhbGlkYXRlZFVzZXIuaWQsIHZhbGlkYXRlZFVzZXIubmFtZSwgdmFsaWRhdGVkVXNlci5waG9uZU51bWJlciwgdmFsaWRhdGVkVXNlci5lbWFpbF1cclxuICApXHJcblxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2NyZWF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnY3JlYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcblxyXG4gIHJldHVybiB2YWxpZGF0ZWRVc2VyXHJcbn1cclxuXHJcbi8vIC0tLSBEZWxldGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICQxYCwgW2lkXSlcclxuXHJcbiAgaWYgKHJlc3VsdC5yb3dDb3VudCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBVc2VyIHdpdGggaWQgJHtpZH0gaGFzIGJlZW4gZGVsZXRlZC5gKVxyXG4gIHJldmFsaWRhdGVQYXRoKCcvJylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdkZWxldGUucmVxdWVzdCcsIHBheWxvYWQ6IHsgaWQgfSB9KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2RlbGV0ZS5yZXNwb25zZScsIHBheWxvYWQ6IHsgcm93Q291bnQ6IHJlc3VsdC5yb3dDb3VudCB9IH0pXHJcbn1cclxuXHJcbi8vIC0tLSBVcGRhdGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBkYXRhOiBQYXJ0aWFsPE9taXQ8VXNlciwgJ2lkJz4+XHJcbik6IFByb21pc2U8VXNlcj4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGdldFVzZXJCeUlkKGlkKVxyXG4gIGlmICghZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcihgVXNlciB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApXHJcblxyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLmV4aXN0aW5nLCAuLi5kYXRhIH1cclxuICBjb25zdCB2YWxpZGF0ZWRVc2VyID0gdXNlclNjaGVtYS5wYXJzZSh1cGRhdGVkKVxyXG5cclxuICAvLyBJZiB0aGUgbmFtZSBjaGFuZ2VkLCBlbnN1cmUgdW5pcXVlbmVzcyAoY2FzZS1pbnNlbnNpdGl2ZSkgZXhjbHVkaW5nIHRoaXMgdXNlclxyXG4gIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGV4aXN0aW5nLm5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY29uc3QgbWF5YmUgPSBhd2FpdCBwb29sLnF1ZXJ5PHsgaWQ6IHN0cmluZyB9PihcclxuICAgICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgICBbZGF0YS5uYW1lXVxyXG4gICAgKVxyXG4gICAgY29uc3QgZm91bmQgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCAmJiBmb3VuZFswXS5pZCAhPT0gaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICBgVVBEQVRFIHVzZXJzXHJcbiAgICAgU0VUIG5hbWUgPSAkMSwgcGhvbmVfbnVtYmVyID0gJDIsIGVtYWlsID0gJDNcclxuICAgICBXSEVSRSBpZCA9ICQ0YCxcclxuICAgIFt2YWxpZGF0ZWRVc2VyLm5hbWUsIHZhbGlkYXRlZFVzZXIucGhvbmVOdW1iZXIsIHZhbGlkYXRlZFVzZXIuZW1haWwsIGlkXVxyXG4gIClcclxuXHJcbiAgY29uc29sZS5sb2coYFVzZXIgd2l0aCBpZCAke2lkfSBoYXMgYmVlbiB1cGRhdGVkLmApXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nKVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3VwZGF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAndXBkYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgcmV0dXJuIHZhbGlkYXRlZFVzZXJcclxufVxyXG5cclxuLy8gLS0tIEdldCBVc2VyIEJ5IElEIC0tLVxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBjYWNoZShhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIGlkID0gJDFcclxuICAgICBMSU1JVCAxYCxcclxuICAgIFtpZF1cclxuICApXHJcbiAgY29uc3QgcmVzdWx0ID0gcm93c1swXSB8fCBudWxsXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnZ2V0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuICBsb2dFdmVudCh7IHR5cGU6ICdnZXQucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGZvdW5kOiAhIXJlc3VsdCB9IH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQTZGc0IifQ==
}),
"[project]/app/components/delete-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$14c4c1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:14c4c1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DeleteButton({ userId }) {
    const handleDelete = async ()=>{
        try {
            console.log('DeleteButton: Attempting to delete user with ID', userId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$14c4c1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteUser"])(userId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])({
                title: "User Deleted",
                description: `A user with the ID ${userId} has been deleted.`,
                variant: "default"
            });
        } catch (error) {
            console.error('DeleteButton: Error deleting user', error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: "An error occurred while deleting the user.",
                variant: "destructive"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        onClick: handleDelete,
        variant: "destructive",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                className: "w-4 h-4 mr-2"
            }, void 0, false, {
                fileName: "[project]/app/components/delete-button.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            "Delete"
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/delete-button.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/actions/data:189d8d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60af50d09e7d80ee8b560380f0eb9ca02b07556404":"updateUser"},"app/actions/actions.ts",""] */ __turbopack_context__.s([
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60af50d09e7d80ee8b560380f0eb9ca02b07556404", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy9hY3Rpb25zLnRzXHJcbid1c2Ugc2VydmVyJ1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xyXG5pbXBvcnQgeyBVc2VyLCB1c2VyU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJ1xyXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSAnLi4vLi4vbGliL2RiJ1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL2xpYi9sb2dnZXInXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAL2F1dGgnXHJcbmltcG9ydCB7IGlzTWNwQXV0aG9yaXplZCB9IGZyb20gJ0AvbGliL2F1dGh6J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUF1dGgoKSB7XHJcbiAgLy8gQWxsb3cgTUNQLWF1dGhvcml6ZWQgY2FsbHMgKHZhbGlkYXRlZCBpbiB0aGUgTUNQIHJvdXRlKSB0byBieXBhc3MgdXNlciBzZXNzaW9uIGNoZWNrc1xyXG4gIGlmIChpc01jcEF1dGhvcml6ZWQoKSkgcmV0dXJuIHsgdXNlcjogeyBpZDogJ21jcCcsIG5hbWU6ICdNQ1AgQWdlbnQnIH0gfVxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvblxyXG59XHJcblxyXG4vLyAtLS0gTGlzdCBVc2VycyAoYWxsLCB3aXRoIHBhZ2luYXRpb24pIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdFVzZXJzKG9wdHM/OiB7IG9mZnNldD86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIG9wdHM/Lm9mZnNldCA/PyAwKVxyXG4gIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oMTAwMDAsIE1hdGgubWF4KDEsIG9wdHM/LmxpbWl0ID8/IDEwMDApKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IG9mZnNldCwgbGltaXQgfSB9KVxyXG5cclxuICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnk8VXNlcj4oXHJcbiAgICBgU0VMRUNUIGlkLCBuYW1lLCBwaG9uZV9udW1iZXIgQVMgXCJwaG9uZU51bWJlclwiLCBlbWFpbFxyXG4gICAgIEZST00gdXNlcnNcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgT0ZGU0VUICQxXHJcbiAgICAgTElNSVQgJDJgLFxyXG4gICAgW29mZnNldCwgbGltaXRdXHJcbiAgKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlc3BvbnNlJywgcGF5bG9hZDogeyBjb3VudDogcm93cy5sZW5ndGggfSB9KVxyXG4gIHJldHVybiByb3dzXHJcbn1cclxuXHJcbi8vIC0tLSBTZWFyY2ggVXNlcnMgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICBhd2FpdCByZXF1aXJlQXV0aCgpXHJcbiAgY29uc29sZS5sb2coJ1NlYXJjaGluZyB1c2VycyB3aXRoIHF1ZXJ5OicsIHF1ZXJ5KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3NlYXJjaC5yZXF1ZXN0JywgcGF5bG9hZDogeyBxdWVyeSB9IH0pXHJcblxyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIExPV0VSKG5hbWUpIExJS0UgJDFcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgTElNSVQgMjBgLFxyXG4gICAgW2Ake3F1ZXJ5LnRvTG93ZXJDYXNlKCl9JWBdXHJcbiAgKVxyXG5cclxuICBjb25zb2xlLmxvZygnU2VhcmNoIHJlc3VsdHM6Jywgcm93cylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdzZWFyY2gucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGNvdW50OiByb3dzLmxlbmd0aCB9IH0pXHJcbiAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuLy8gLS0tIEFkZCBVc2VyIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVXNlcihkYXRhOiBPbWl0PFVzZXIsICdpZCc+KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIC8vIENoZWNrIHVuaXF1ZW5lc3MgYnkgbmFtZSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICBjb25zdCBtYXliZSA9IGF3YWl0IHBvb2wucXVlcnk8eyBpZDogc3RyaW5nIH0+KFxyXG4gICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgW2RhdGEubmFtZV1cclxuICApXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXNlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdJZCA9IHJhbmRvbVVVSUQoKVxyXG4gIGNvbnN0IG5ld1VzZXIgPSB7IC4uLmRhdGEsIGlkOiBuZXdJZCB9XHJcbiAgY29uc3QgdmFsaWRhdGVkVXNlciA9IHVzZXJTY2hlbWEucGFyc2UobmV3VXNlcilcclxuXHJcbiAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgIGBJTlNFUlQgSU5UTyB1c2VycyAoaWQsIG5hbWUsIHBob25lX251bWJlciwgZW1haWwpXHJcbiAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClgLFxyXG4gICAgW3ZhbGlkYXRlZFVzZXIuaWQsIHZhbGlkYXRlZFVzZXIubmFtZSwgdmFsaWRhdGVkVXNlci5waG9uZU51bWJlciwgdmFsaWRhdGVkVXNlci5lbWFpbF1cclxuICApXHJcblxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2NyZWF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnY3JlYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcblxyXG4gIHJldHVybiB2YWxpZGF0ZWRVc2VyXHJcbn1cclxuXHJcbi8vIC0tLSBEZWxldGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICQxYCwgW2lkXSlcclxuXHJcbiAgaWYgKHJlc3VsdC5yb3dDb3VudCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBVc2VyIHdpdGggaWQgJHtpZH0gaGFzIGJlZW4gZGVsZXRlZC5gKVxyXG4gIHJldmFsaWRhdGVQYXRoKCcvJylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdkZWxldGUucmVxdWVzdCcsIHBheWxvYWQ6IHsgaWQgfSB9KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2RlbGV0ZS5yZXNwb25zZScsIHBheWxvYWQ6IHsgcm93Q291bnQ6IHJlc3VsdC5yb3dDb3VudCB9IH0pXHJcbn1cclxuXHJcbi8vIC0tLSBVcGRhdGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBkYXRhOiBQYXJ0aWFsPE9taXQ8VXNlciwgJ2lkJz4+XHJcbik6IFByb21pc2U8VXNlcj4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGdldFVzZXJCeUlkKGlkKVxyXG4gIGlmICghZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcihgVXNlciB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApXHJcblxyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLmV4aXN0aW5nLCAuLi5kYXRhIH1cclxuICBjb25zdCB2YWxpZGF0ZWRVc2VyID0gdXNlclNjaGVtYS5wYXJzZSh1cGRhdGVkKVxyXG5cclxuICAvLyBJZiB0aGUgbmFtZSBjaGFuZ2VkLCBlbnN1cmUgdW5pcXVlbmVzcyAoY2FzZS1pbnNlbnNpdGl2ZSkgZXhjbHVkaW5nIHRoaXMgdXNlclxyXG4gIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGV4aXN0aW5nLm5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY29uc3QgbWF5YmUgPSBhd2FpdCBwb29sLnF1ZXJ5PHsgaWQ6IHN0cmluZyB9PihcclxuICAgICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgICBbZGF0YS5uYW1lXVxyXG4gICAgKVxyXG4gICAgY29uc3QgZm91bmQgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCAmJiBmb3VuZFswXS5pZCAhPT0gaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICBgVVBEQVRFIHVzZXJzXHJcbiAgICAgU0VUIG5hbWUgPSAkMSwgcGhvbmVfbnVtYmVyID0gJDIsIGVtYWlsID0gJDNcclxuICAgICBXSEVSRSBpZCA9ICQ0YCxcclxuICAgIFt2YWxpZGF0ZWRVc2VyLm5hbWUsIHZhbGlkYXRlZFVzZXIucGhvbmVOdW1iZXIsIHZhbGlkYXRlZFVzZXIuZW1haWwsIGlkXVxyXG4gIClcclxuXHJcbiAgY29uc29sZS5sb2coYFVzZXIgd2l0aCBpZCAke2lkfSBoYXMgYmVlbiB1cGRhdGVkLmApXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nKVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3VwZGF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAndXBkYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgcmV0dXJuIHZhbGlkYXRlZFVzZXJcclxufVxyXG5cclxuLy8gLS0tIEdldCBVc2VyIEJ5IElEIC0tLVxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBjYWNoZShhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIGlkID0gJDFcclxuICAgICBMSU1JVCAxYCxcclxuICAgIFtpZF1cclxuICApXHJcbiAgY29uc3QgcmVzdWx0ID0gcm93c1swXSB8fCBudWxsXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnZ2V0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuICBsb2dFdmVudCh7IHR5cGU6ICdnZXQucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGZvdW5kOiAhIXJlc3VsdCB9IH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQTRHc0IifQ==
}),
"[project]/app/actions/schemas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/actions/schemas.ts
__turbopack_context__.s([
    "userFormSchema",
    ()=>userFormSchema,
    "userSchema",
    ()=>userSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const userSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, {
        message: "Name must be at least 2 characters."
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email({
        message: "Invalid email address."
    }),
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^04\d{8}$/, {
        message: "Phone number must be a valid Australian mobile number (e.g., 0422018632)."
    })
});
const userFormSchema = userSchema.omit({
    id: true
});
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$7_d1cbf5d8d10ed95f6895e96644d71f28$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-label@2.1.7_d1cbf5d8d10ed95f6895e96644d71f28/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$7_d1cbf5d8d10ed95f6895e96644d71f28$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$label$40$2$2e$1$2e$7_d1cbf5d8d10ed95f6895e96644d71f28$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/components/ui/form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.0_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.63.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFormField = ()=>{
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$2$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
FormMessage.displayName = "FormMessage";
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/app/components/user-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/user-form.tsx
__turbopack_context__.s([
    "UserForm",
    ()=>UserForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function UserForm({ form }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
        ...form,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                control: form.control,
                name: "name",
                render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    className: "w-full",
                                    placeholder: "John Doe",
                                    ...field
                                }, void 0, false, {
                                    fileName: "[project]/app/components/user-form.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                children: "Enter full name."
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, void 0),
                            fieldState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-sm mt-1",
                                children: String(fieldState.error) || ''
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 37,
                                columnNumber: 29
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/user-form.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/user-form.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                control: form.control,
                name: "email",
                render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    className: "w-full",
                                    type: "email",
                                    placeholder: "john@example.com",
                                    ...field
                                }, void 0, false, {
                                    fileName: "[project]/app/components/user-form.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                children: "Enter email address."
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, void 0),
                            fieldState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-sm mt-1",
                                children: String(fieldState.error) || ''
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 57,
                                columnNumber: 29
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/user-form.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/user-form.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                control: form.control,
                name: "phoneNumber",
                render: ({ field, fieldState })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                children: "Phone Number"
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    className: "w-full",
                                    placeholder: "04xxxxxxxx",
                                    ...field
                                }, void 0, false, {
                                    fileName: "[project]/app/components/user-form.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormDescription"], {
                                children: "Enter phone number in Australian phone number format."
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, void 0),
                            fieldState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-sm mt-1",
                                children: String(fieldState.error) || ''
                            }, void 0, false, {
                                fileName: "[project]/app/components/user-form.tsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/user-form.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/components/user-form.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/user-form.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/mutable-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// component/mutable-dialog.tsx
__turbopack_context__.s([
    "default",
    ()=>MutableDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-hook-form@7.63.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-ssr] (ecmascript)"); // Using shadcn toast hook for notifications.
'use client';
;
;
;
;
;
;
function MutableDialog({ formSchema, FormComponent, action, defaultValues, triggerButtonLabel = defaultValues ? 'Edit' : 'Add', addDialogTitle = 'Add', editDialogTitle = 'Edit', dialogDescription = defaultValues ? 'Make changes to your item here. Click save when you\'re done.' : 'Fill out the form below to add a new item.', submitButtonLabel = defaultValues ? 'Save' : 'Add' }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: async (values)=>{
            try {
                console.log('Form values before validation:', values); // Log the form values before validation
                const result = formSchema.parse(values);
                console.log('Validation passed:', result); // Log the result after validation
                return {
                    values: result,
                    errors: {}
                };
            } // eslint-disable-next-line @typescript-eslint/no-explicit-any
            catch (err) {
                if (err.formErrors?.fieldErrors) {
                    // check if err is instance of ZodError then return the formErrors
                    console.log('Validation errors:', err.formErrors.fieldErrors); // Log the validation errors
                    return {
                        values: {},
                        errors: err.formErrors.fieldErrors
                    };
                }
                console.error('Unexpected validation error:', err);
                return {
                    values: {},
                    errors: {}
                };
            }
        },
        defaultValues: defaultValues
    });
    // Reset the form when the dialog is closed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) {
            form.reset();
        }
    }, [
        open,
        form
    ]);
    async function handleSubmit(data) {
        if (!action) {
            throw new Error("No action function provided");
        }
        console.log('calling submit');
        const actions = await action(data); // Call the provided action directly
        console.log('actions:', actions);
        if (actions.success) {
            const toastMessage = actions.message;
            console.log('toastMessage:', toastMessage);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])({
                title: "Success",
                description: toastMessage,
                variant: "default"
            });
        } else {
            const toastMessage = actions.message;
            console.log('toastMessage:', toastMessage);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])({
                title: "Error",
                description: toastMessage || "Failed to add User",
                variant: "destructive"
            });
        }
        setOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    children: triggerButtonLabel
                }, void 0, false, {
                    fileName: "[project]/components/mutable-dialog.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/mutable-dialog.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "sm:max-w-[425px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: defaultValues ? editDialogTitle : addDialogTitle
                            }, void 0, false, {
                                fileName: "[project]/components/mutable-dialog.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                children: dialogDescription
                            }, void 0, false, {
                                fileName: "[project]/components/mutable-dialog.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/mutable-dialog.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(handleSubmit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormComponent, {
                                form: form
                            }, void 0, false, {
                                fileName: "[project]/components/mutable-dialog.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "outline",
                                            onClick: ()=>setOpen(false),
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/components/mutable-dialog.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            children: submitButtonLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/mutable-dialog.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/mutable-dialog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/mutable-dialog.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/mutable-dialog.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/mutable-dialog.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/mutable-dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/user-edit-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserEditDialog",
    ()=>UserEditDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$189d8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:189d8d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/schemas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$user$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/user-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mutable$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mutable-dialog.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function UserEditDialog({ user }) {
    const handleEditUser = async (data)=>{
        try {
            const updatedUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$189d8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateUser"])(user.id, data);
            return {
                success: true,
                message: `User ${updatedUser.name} updated successfully`,
                data: updatedUser
            };
        } catch (error) {
            return {
                success: false,
                message: 'Failed to update user' + (error instanceof Error ? error.message : String(error))
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mutable$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        formSchema: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userFormSchema"],
        FormComponent: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$user$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserForm"],
        action: handleEditUser,
        triggerButtonLabel: "Edit",
        editDialogTitle: `Edit ${user.name}`,
        dialogDescription: `Update the details of ${user.name} below.`,
        submitButtonLabel: "Save Changes",
        defaultValues: {
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber
        }
    }, void 0, false, {
        fileName: "[project]/app/components/user-edit-dialog.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/actions/data:a70cf2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40bbf09356500d5b78fbaa5f60ce2edd99195bbe5f":"addUser"},"app/actions/actions.ts",""] */ __turbopack_context__.s([
    "addUser",
    ()=>addUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40bbf09356500d5b78fbaa5f60ce2edd99195bbe5f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvYWN0aW9ucy9hY3Rpb25zLnRzXHJcbid1c2Ugc2VydmVyJ1xyXG5cclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xyXG5pbXBvcnQgeyBVc2VyLCB1c2VyU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWFzJ1xyXG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByYW5kb21VVUlEIH0gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgeyBwb29sIH0gZnJvbSAnLi4vLi4vbGliL2RiJ1xyXG5pbXBvcnQgeyBsb2dFdmVudCB9IGZyb20gJy4uLy4uL2xpYi9sb2dnZXInXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAL2F1dGgnXHJcbmltcG9ydCB7IGlzTWNwQXV0aG9yaXplZCB9IGZyb20gJ0AvbGliL2F1dGh6J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWlyZUF1dGgoKSB7XHJcbiAgLy8gQWxsb3cgTUNQLWF1dGhvcml6ZWQgY2FsbHMgKHZhbGlkYXRlZCBpbiB0aGUgTUNQIHJvdXRlKSB0byBieXBhc3MgdXNlciBzZXNzaW9uIGNoZWNrc1xyXG4gIGlmIChpc01jcEF1dGhvcml6ZWQoKSkgcmV0dXJuIHsgdXNlcjogeyBpZDogJ21jcCcsIG5hbWU6ICdNQ1AgQWdlbnQnIH0gfVxyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKClcclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQnKVxyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvblxyXG59XHJcblxyXG4vLyAtLS0gTGlzdCBVc2VycyAoYWxsLCB3aXRoIHBhZ2luYXRpb24pIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdFVzZXJzKG9wdHM/OiB7IG9mZnNldD86IG51bWJlcjsgbGltaXQ/OiBudW1iZXIgfSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIGNvbnN0IG9mZnNldCA9IE1hdGgubWF4KDAsIG9wdHM/Lm9mZnNldCA/PyAwKVxyXG4gIGNvbnN0IGxpbWl0ID0gTWF0aC5taW4oMTAwMDAsIE1hdGgubWF4KDEsIG9wdHM/LmxpbWl0ID8/IDEwMDApKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IG9mZnNldCwgbGltaXQgfSB9KVxyXG5cclxuICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHBvb2wucXVlcnk8VXNlcj4oXHJcbiAgICBgU0VMRUNUIGlkLCBuYW1lLCBwaG9uZV9udW1iZXIgQVMgXCJwaG9uZU51bWJlclwiLCBlbWFpbFxyXG4gICAgIEZST00gdXNlcnNcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgT0ZGU0VUICQxXHJcbiAgICAgTElNSVQgJDJgLFxyXG4gICAgW29mZnNldCwgbGltaXRdXHJcbiAgKVxyXG5cclxuICBsb2dFdmVudCh7IHR5cGU6ICdsaXN0LnJlc3BvbnNlJywgcGF5bG9hZDogeyBjb3VudDogcm93cy5sZW5ndGggfSB9KVxyXG4gIHJldHVybiByb3dzXHJcbn1cclxuXHJcbi8vIC0tLSBTZWFyY2ggVXNlcnMgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICBhd2FpdCByZXF1aXJlQXV0aCgpXHJcbiAgY29uc29sZS5sb2coJ1NlYXJjaGluZyB1c2VycyB3aXRoIHF1ZXJ5OicsIHF1ZXJ5KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3NlYXJjaC5yZXF1ZXN0JywgcGF5bG9hZDogeyBxdWVyeSB9IH0pXHJcblxyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIExPV0VSKG5hbWUpIExJS0UgJDFcclxuICAgICBPUkRFUiBCWSBuYW1lXHJcbiAgICAgTElNSVQgMjBgLFxyXG4gICAgW2Ake3F1ZXJ5LnRvTG93ZXJDYXNlKCl9JWBdXHJcbiAgKVxyXG5cclxuICBjb25zb2xlLmxvZygnU2VhcmNoIHJlc3VsdHM6Jywgcm93cylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdzZWFyY2gucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGNvdW50OiByb3dzLmxlbmd0aCB9IH0pXHJcbiAgcmV0dXJuIHJvd3NcclxufVxyXG5cclxuLy8gLS0tIEFkZCBVc2VyIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkVXNlcihkYXRhOiBPbWl0PFVzZXIsICdpZCc+KTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgYXdhaXQgcmVxdWlyZUF1dGgoKVxyXG4gIC8vIENoZWNrIHVuaXF1ZW5lc3MgYnkgbmFtZSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICBjb25zdCBtYXliZSA9IGF3YWl0IHBvb2wucXVlcnk8eyBpZDogc3RyaW5nIH0+KFxyXG4gICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgW2RhdGEubmFtZV1cclxuICApXHJcbiAgY29uc3QgZXhpc3RpbmcgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgaWYgKGV4aXN0aW5nLmxlbmd0aCA+IDApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXNlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdJZCA9IHJhbmRvbVVVSUQoKVxyXG4gIGNvbnN0IG5ld1VzZXIgPSB7IC4uLmRhdGEsIGlkOiBuZXdJZCB9XHJcbiAgY29uc3QgdmFsaWRhdGVkVXNlciA9IHVzZXJTY2hlbWEucGFyc2UobmV3VXNlcilcclxuXHJcbiAgYXdhaXQgcG9vbC5xdWVyeShcclxuICAgIGBJTlNFUlQgSU5UTyB1c2VycyAoaWQsIG5hbWUsIHBob25lX251bWJlciwgZW1haWwpXHJcbiAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNClgLFxyXG4gICAgW3ZhbGlkYXRlZFVzZXIuaWQsIHZhbGlkYXRlZFVzZXIubmFtZSwgdmFsaWRhdGVkVXNlci5waG9uZU51bWJlciwgdmFsaWRhdGVkVXNlci5lbWFpbF1cclxuICApXHJcblxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2NyZWF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnY3JlYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZDogdmFsaWRhdGVkVXNlci5pZCB9IH0pXHJcblxyXG4gIHJldHVybiB2YWxpZGF0ZWRVc2VyXHJcbn1cclxuXHJcbi8vIC0tLSBEZWxldGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb29sLnF1ZXJ5KGBERUxFVEUgRlJPTSB1c2VycyBXSEVSRSBpZCA9ICQxYCwgW2lkXSlcclxuXHJcbiAgaWYgKHJlc3VsdC5yb3dDb3VudCA9PT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBVc2VyIHdpdGggaWQgJHtpZH0gbm90IGZvdW5kYClcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGBVc2VyIHdpdGggaWQgJHtpZH0gaGFzIGJlZW4gZGVsZXRlZC5gKVxyXG4gIHJldmFsaWRhdGVQYXRoKCcvJylcclxuICBsb2dFdmVudCh7IHR5cGU6ICdkZWxldGUucmVxdWVzdCcsIHBheWxvYWQ6IHsgaWQgfSB9KVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ2RlbGV0ZS5yZXNwb25zZScsIHBheWxvYWQ6IHsgcm93Q291bnQ6IHJlc3VsdC5yb3dDb3VudCB9IH0pXHJcbn1cclxuXHJcbi8vIC0tLSBVcGRhdGUgVXNlciAtLS1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBkYXRhOiBQYXJ0aWFsPE9taXQ8VXNlciwgJ2lkJz4+XHJcbik6IFByb21pc2U8VXNlcj4ge1xyXG4gIGF3YWl0IHJlcXVpcmVBdXRoKClcclxuICBjb25zdCBleGlzdGluZyA9IGF3YWl0IGdldFVzZXJCeUlkKGlkKVxyXG4gIGlmICghZXhpc3RpbmcpIHRocm93IG5ldyBFcnJvcihgVXNlciB3aXRoIGlkICR7aWR9IG5vdCBmb3VuZGApXHJcblxyXG4gIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLmV4aXN0aW5nLCAuLi5kYXRhIH1cclxuICBjb25zdCB2YWxpZGF0ZWRVc2VyID0gdXNlclNjaGVtYS5wYXJzZSh1cGRhdGVkKVxyXG5cclxuICAvLyBJZiB0aGUgbmFtZSBjaGFuZ2VkLCBlbnN1cmUgdW5pcXVlbmVzcyAoY2FzZS1pbnNlbnNpdGl2ZSkgZXhjbHVkaW5nIHRoaXMgdXNlclxyXG4gIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGV4aXN0aW5nLm5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgY29uc3QgbWF5YmUgPSBhd2FpdCBwb29sLnF1ZXJ5PHsgaWQ6IHN0cmluZyB9PihcclxuICAgICAgYFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIExPV0VSKG5hbWUpID0gTE9XRVIoJDEpIExJTUlUIDFgLFxyXG4gICAgICBbZGF0YS5uYW1lXVxyXG4gICAgKVxyXG4gICAgY29uc3QgZm91bmQgPSBtYXliZS5yb3dzIHx8IFtdXHJcbiAgICBpZiAoZm91bmQubGVuZ3RoID4gMCAmJiBmb3VuZFswXS5pZCAhPT0gaWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF3YWl0IHBvb2wucXVlcnkoXHJcbiAgICBgVVBEQVRFIHVzZXJzXHJcbiAgICAgU0VUIG5hbWUgPSAkMSwgcGhvbmVfbnVtYmVyID0gJDIsIGVtYWlsID0gJDNcclxuICAgICBXSEVSRSBpZCA9ICQ0YCxcclxuICAgIFt2YWxpZGF0ZWRVc2VyLm5hbWUsIHZhbGlkYXRlZFVzZXIucGhvbmVOdW1iZXIsIHZhbGlkYXRlZFVzZXIuZW1haWwsIGlkXVxyXG4gIClcclxuXHJcbiAgY29uc29sZS5sb2coYFVzZXIgd2l0aCBpZCAke2lkfSBoYXMgYmVlbiB1cGRhdGVkLmApXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy8nKVxyXG4gIGxvZ0V2ZW50KHsgdHlwZTogJ3VwZGF0ZS5yZXF1ZXN0JywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAndXBkYXRlLnJlc3BvbnNlJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcbiAgcmV0dXJuIHZhbGlkYXRlZFVzZXJcclxufVxyXG5cclxuLy8gLS0tIEdldCBVc2VyIEJ5IElEIC0tLVxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5SWQgPSBjYWNoZShhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgcG9vbC5xdWVyeTxVc2VyPihcclxuICAgIGBTRUxFQ1QgaWQsIG5hbWUsIHBob25lX251bWJlciBBUyBcInBob25lTnVtYmVyXCIsIGVtYWlsXHJcbiAgICAgRlJPTSB1c2Vyc1xyXG4gICAgIFdIRVJFIGlkID0gJDFcclxuICAgICBMSU1JVCAxYCxcclxuICAgIFtpZF1cclxuICApXHJcbiAgY29uc3QgcmVzdWx0ID0gcm93c1swXSB8fCBudWxsXHJcbiAgbG9nRXZlbnQoeyB0eXBlOiAnZ2V0LnJlcXVlc3QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuICBsb2dFdmVudCh7IHR5cGU6ICdnZXQucmVzcG9uc2UnLCBwYXlsb2FkOiB7IGZvdW5kOiAhIXJlc3VsdCB9IH0pXHJcbiAgcmV0dXJuIHJlc3VsdFxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVSQWdFc0IifQ==
}),
"[project]/app/components/user-dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/user-dialog.tsx
__turbopack_context__.s([
    "UserDialog",
    ()=>UserDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a70cf2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:a70cf2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/schemas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$user$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/user-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mutable$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mutable-dialog.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function UserDialog() {
    const handleAddUser = async (data)=>{
        try {
            const newUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a70cf2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addUser"])(data);
            return {
                success: true,
                message: `User ${newUser.name} added successfully`,
                data: newUser
            };
        } catch (error) {
            return {
                success: false,
                message: 'Failed to add user ' + (error instanceof Error ? error.message : 'Unknown error')
            };
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mutable$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        formSchema: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$schemas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userFormSchema"],
        FormComponent: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$user$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserForm"],
        action: handleAddUser,
        triggerButtonLabel: "Add User",
        addDialogTitle: "Add New User",
        dialogDescription: "Fill out the form below to add a new user.",
        submitButtonLabel: "Save",
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: ''
        }
    }, void 0, false, {
        fileName: "[project]/app/components/user-dialog.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/components/copy-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyButton",
    ()=>CopyButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.469.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CopyButton({ value, label = "Copy" }) {
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    async function onCopy() {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            toast({
                title: "Copied",
                description: label + " copied to clipboard."
            });
            setTimeout(()=>setCopied(false), 1200);
        } catch  {
            toast({
                title: "Copy failed",
                description: "Select and copy manually.",
                variant: "destructive"
            });
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        size: "sm",
        variant: "secondary",
        onClick: onCopy,
        "aria-label": label,
        title: label,
        className: "shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$469$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                className: "h-4 w-4 mr-1"
            }, void 0, false, {
                fileName: "[project]/components/copy-button.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            " ",
            copied ? "Copied" : label
        ]
    }, void 0, true, {
        fileName: "[project]/components/copy-button.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/mcp-connect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>McpConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.2_8289f3795084dfa425f96cc7ca728515/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$29_nex_f1ded7d0bb3f666842c8ee8e82a67cc5$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.29_nex_f1ded7d0bb3f666842c8ee8e82a67cc5/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copy$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/copy-button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function McpConnect() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$29_nex_f1ded7d0bb3f666842c8ee8e82a67cc5$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [apiKey, setApiKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function ensureKey() {
            if (!session?.user) {
                if (!cancelled) setApiKey(null);
                return;
            }
            try {
                const r = await fetch('/api/mcp/session-key', {
                    cache: 'no-store'
                });
                if (!r.ok) return;
                const data = await r.json();
                if (!cancelled) setApiKey(data.apiKey);
            } catch  {}
        }
        ensureKey();
        return ()=>{
            cancelled = true;
        };
    }, [
        session?.user
    ]);
    const exampleUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const base = origin || 'http://localhost:3000';
        const key = apiKey || '<your-key>';
        return `${base}/api/mcp?api_key=${key}`;
    }, [
        origin,
        apiKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Connect your MCP agent"
                        }, void 0, false, {
                            fileName: "[project]/app/components/mcp-connect.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/mcp-connect.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-3 text-sm",
                        children: [
                            status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-muted-foreground",
                                children: "Checking session…"
                            }, void 0, false, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            !session?.user && status !== 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Sign in to generate a personal API key for MCP connections."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$29_nex_f1ded7d0bb3f666842c8ee8e82a67cc5$2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signIn"])('google'),
                                        children: "Sign in with Google"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Signed in as ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: session.user.name || session.user.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/mcp-connect.tsx",
                                                lineNumber: 62,
                                                columnNumber: 31
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Your MCP API key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this),
                                                    apiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copy$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyButton"], {
                                                        value: apiKey,
                                                        label: "Copy key"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/mcp-connect.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "block px-2 py-1 rounded bg-muted break-all",
                                                children: apiKey ?? 'Generating…'
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/mcp-connect.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Server URL for agents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$copy$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyButton"], {
                                                        value: exampleUrl,
                                                        label: "Copy URL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/mcp-connect.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "block px-2 py-1 rounded bg-muted break-all",
                                                children: exampleUrl
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/mcp-connect.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "This API key will be removed once you are signed out. A new key will be generated when signing in again."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/mcp-connect.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/mcp-connect.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "How to connect (VS Code)"
                        }, void 0, false, {
                            fileName: "[project]/app/components/mcp-connect.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/mcp-connect.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mb-2",
                                children: [
                                    "Add or update ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: ".vscode/mcp.json"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/mcp-connect.tsx",
                                        lineNumber: 88,
                                        columnNumber: 75
                                    }, this),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "bg-muted p-3 rounded text-xs overflow-auto",
                                children: `{
  "servers": {
    "person-search-mcp": {
      "url": "${exampleUrl}",
      "type": "http"
    }
  }
}`
                            }, void 0, false, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$2_8289f3795084dfa425f96cc7ca728515$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground mt-3",
                                children: "Then reload VS Code. The MCP server requires POST requests; visiting the URL in a browser (GET) will show a helpful message."
                            }, void 0, false, {
                                fileName: "[project]/app/components/mcp-connect.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/mcp-connect.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/mcp-connect.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/mcp-connect.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_d24c023b._.js.map