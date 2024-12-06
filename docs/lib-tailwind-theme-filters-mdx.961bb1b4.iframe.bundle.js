(self.webpackChunkadeepdiveinto2025=self.webpackChunkadeepdiveinto2025||[]).push([[1257,3514,1333,5583,5912,2542],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/lib/tailwind/theme/extend/filters.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Documentation:()=>Documentation,SourceCode:()=>SourceCode,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const filtersraw={};function SourceCode(){return(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:filtersraw})}function Documentation(){return""}function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"extended-filters",children:"Extended Filters"}),"\n",(0,jsx_runtime.jsx)(dist.W8,{isTemplate:!0,title:"Tailwind/Theme/Extended/Filters"}),"\n",(0,jsx_runtime.jsx)(Documentation,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(SourceCode,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/lib/tailwind/theme/filters.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const filters={backdropBlur:({theme})=>theme("blur"),backdropBrightness:({theme})=>theme("brightness"),backdropContrast:({theme})=>theme("contrast"),backdropGrayscale:({theme})=>theme("grayscale"),backdropHueRotate:({theme})=>theme("hueRotate"),backdropInvert:({theme})=>theme("invert"),backdropOpacity:({theme})=>theme("opacity"),backdropSaturate:({theme})=>theme("saturate"),backdropSepia:({theme})=>theme("sepia"),blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2"},dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},grayscale:{0:"0",DEFAULT:"100%"},invert:{0:"0",DEFAULT:"100%"},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2"},sepia:{0:"0",DEFAULT:"100%"}},filtersraw={backdropBlur:({theme})=>theme("blur"),backdropBrightness:({theme})=>theme("brightness"),backdropContrast:({theme})=>theme("contrast"),backdropGrayscale:({theme})=>theme("grayscale"),backdropHueRotate:({theme})=>theme("hueRotate"),backdropInvert:({theme})=>theme("invert"),backdropOpacity:({theme})=>theme("opacity"),backdropSaturate:({theme})=>theme("saturate"),backdropSepia:({theme})=>theme("sepia"),blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2"},dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},grayscale:{0:"0",DEFAULT:"100%"},invert:{0:"0",DEFAULT:"100%"},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2"},sepia:{0:"0",DEFAULT:"100%"}};var extend_filters=__webpack_require__("./src/lib/tailwind/theme/extend/filters.mdx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Tailwind/Theme/Filters"}),"\n",(0,jsx_runtime.jsxs)(_components.h1,{id:"filters-jump-to-source",children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com/docs/filter",rel:"nofollow",children:"Filters"})," ",(0,jsx_runtime.jsx)("small",{className:"text-xs",children:(0,jsx_runtime.jsx)(_components.a,{href:"#source-code",children:"Jump to source"})})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"filters"})," property allows you to control various filter effects applied to elements. Each filter is specified with various parameters that define its appearance."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropblur",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropBlur"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applies a blur effect to the backdrop of an element."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropBlur: ${filters.backdropBlur}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropbrightness",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropBrightness"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Controls the brightness of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropBrightness: ${filters.backdropBrightness}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropcontrast",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropContrast"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adjusts the contrast of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropContrast: ${filters.backdropContrast}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropgrayscale",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropGrayscale"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applies a grayscale effect to the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropGrayscale: ${filters.backdropGrayscale}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdrophuerotate",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropHueRotate"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Rotates the hue of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropHueRotate: ${filters.backdropHueRotate}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropinvert",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropInvert"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Inverts the colors of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropInvert: ${filters.backdropInvert}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropopacity",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropOpacity"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adjusts the opacity of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropOpacity: ${filters.backdropOpacity}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropsaturate",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropSaturate"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Saturates the colors of the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropSaturate: ${filters.backdropSaturate}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"backdropsepia",children:(0,jsx_runtime.jsx)(_components.code,{children:"backdropSepia"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applies a sepia effect to the backdrop."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`backdropSepia: ${filters.backdropSepia}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"blur",children:(0,jsx_runtime.jsx)(_components.code,{children:"blur"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Defines the blur effect with various levels of intensity."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`blur: ${JSON.stringify(filters.blur,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"brightness",children:(0,jsx_runtime.jsx)(_components.code,{children:"brightness"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adjusts the brightness of elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`brightness: ${JSON.stringify(filters.brightness,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"contrast",children:(0,jsx_runtime.jsx)(_components.code,{children:"contrast"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adjusts the contrast of elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`contrast: ${JSON.stringify(filters.contrast,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"dropshadow",children:(0,jsx_runtime.jsx)(_components.code,{children:"dropShadow"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Defines the drop shadow effects for various levels of intensity."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`dropShadow: ${JSON.stringify(filters.dropShadow,null,2)}`}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"sm"}),": Minimal shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"DEFAULT"}),": Balanced shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"md"}),": Medium shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"lg"}),": Pronounced shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"xl"}),": Strong shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"2xl"}),": Very large shadow effect."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"none"}),": No shadow effect."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"huerotate",children:(0,jsx_runtime.jsx)(_components.code,{children:"hueRotate"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Controls the hue rotation of elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`hueRotate: ${JSON.stringify(filters.hueRotate,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grayscale",children:(0,jsx_runtime.jsx)(_components.code,{children:"grayscale"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applies a grayscale effect to elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`grayscale: ${JSON.stringify(filters.grayscale,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"invert",children:(0,jsx_runtime.jsx)(_components.code,{children:"invert"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Inverts the colors of elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`invert: ${JSON.stringify(filters.invert,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"saturate",children:(0,jsx_runtime.jsx)(_components.code,{children:"saturate"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Adjusts the saturation of elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`saturate: ${JSON.stringify(filters.saturate,null,2)}`}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"sepia",children:(0,jsx_runtime.jsx)(_components.code,{children:"sepia"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Applies a sepia effect to elements."}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"tsx",code:`sepia: ${JSON.stringify(filters.sepia,null,2)}`}),"\n","function"==typeof extend_filters.Documentation&&""!==(0,extend_filters.Documentation)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{children:"Extended Documentation"}),(0,jsx_runtime.jsx)(extend_filters.Documentation,{})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"source-code",children:"Source Code"}),"\n",(0,jsx_runtime.jsx)(dist.kL,{language:"js",code:filtersraw}),"\n","function"==typeof extend_filters.SourceCode&&""!==(0,extend_filters.SourceCode)().toString()&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{children:"Extended Source Code"}),(0,jsx_runtime.jsx)(extend_filters.SourceCode,{})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);