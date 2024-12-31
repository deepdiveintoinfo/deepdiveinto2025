"use strict";(self.webpackChunkadeepdiveinto2025=self.webpackChunkadeepdiveinto2025||[]).push([[4535],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@radix-ui/react-avatar/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BK:()=>AvatarImage,H4:()=>Fallback,_V:()=>Image,bL:()=>Root,eu:()=>Avatar,q5:()=>AvatarFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[createAvatarContext,createAvatarScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Avatar"),[AvatarProvider,useAvatarContext]=createAvatarContext("Avatar"),Avatar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...avatarProps,ref:forwardedRef})})}));Avatar.displayName="Avatar";var AvatarImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function useImageLoadingStatus(src){const[loadingStatus,setLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,()=>{isMounted=!1}}),[src]),loadingStatus}(src),handleLoadingStatusChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.c)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.img,{...imageProps,ref:forwardedRef,src}):null}));AvatarImage.displayName="AvatarImage";var AvatarFallback=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0===delayMs);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...fallbackProps,ref:forwardedRef}):null}));AvatarFallback.displayName="AvatarFallback";var Root=Avatar,Image=AvatarImage,Fallback=AvatarFallback},"./src/content/project2025/taking-the-reins-of-government/white-house-office/authors.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthorAvatar:()=>AuthorAvatar,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_deepdiveinto2025_deepdiveinto2025_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),react_router_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_components_ThirdParty_ShadCn_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThirdParty/ShadCn/Badge/index.ts"),_components_ThirdParty_ShadCn_Avatar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ThirdParty/ShadCn/Avatar/index.ts");__webpack_require__("./src/components/ThirdParty/ShadCn/Tooltip/index.ts");const AuthorAvatar=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_ThirdParty_ShadCn_Avatar__WEBPACK_IMPORTED_MODULE_3__.Ay,{className:"max-w-8 max-h-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ThirdParty_ShadCn_Avatar__WEBPACK_IMPORTED_MODULE_3__.BK,{src:"https://littlesis.org/images/profile/c6/c6879a39a790aaa1dbca33bd03c59d25.jpg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ThirdParty_ShadCn_Avatar__WEBPACK_IMPORTED_MODULE_3__.q5,{children:"Richard Dearborn".split(" ").map((n=>n[0])).join("")})]});function _createMdxContent(props){const _components={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,_home_runner_work_deepdiveinto2025_deepdiveinto2025_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2",{className:"flex gap-2 items-center justify-center lg:justify-start w-fll",children:["About ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AuthorAvatar,{})," Rick Dearborn"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex gap-2 flex-wrap justify-center lg:justify-start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.N_,{to:"https://en.wikipedia.org/wiki/Rick_Dearborn",target:"_blank",rel:"noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_ThirdParty_ShadCn_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{className:"font-normal",variant:"outline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.i86,{className:"mr-2"})," Wikipedia"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.N_,{to:"https://www.linkedin.com/in/rick-dearborn-a1702a16a/",target:"_blank",rel:"noopener noreferrer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_ThirdParty_ShadCn_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{className:"font-normal",variant:"outline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.QEs,{className:"mr-2",color:"#0A66C2"})," LinkedIn"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.N_,{to:"https://littlesis.org/person/246502-Rick_Dearborn",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_ThirdParty_ShadCn_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{className:"font-normal",variant:"outline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{className:"mb-0",width:16,height:16,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAgVBMVEUcR2cbR2caR2cSRmhMSmJ7Tl2UUFqbUFmFTlpiTF8rSGVCSmOiUVjQVFTXVVPSTk3VTUu6UlRoTV7HU1XMU1PMVFTZf3/pt7fhmZnPVFTQYGD78fH////ciorIR0d2TV3LT0/NWFjkpKT45ubtw8PVcnLz2dn46OivUVfXfHzRZ2dpixF1AAAApklEQVR4AUVPBQKDMAysDHdIirvz/weuMrk27kSBMkr+YJwzKulrc/KybMf1/K8rCKM4TtIky5nxFDEgiLKKYpdoT40ITdt1/RCPXDmkPTVd11VDVATKgzDP87JuzdzIFCod036s6p1VHKouiCDOTmLB6DIOHG5pbwP8HVV3didC7BBqpmzbLFYxmbnSMQuYpmefCp+ZxXACSVOc68Uy6VGAyNLnvQHQKg+7eR8DtwAAAABJRU5ErkJggg=="}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ml-2",children:"LittleSis"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.N_,{to:"https://www.opensecrets.org/revolving-door/dearborn-rick/summary?id=82488",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_ThirdParty_ShadCn_Badge__WEBPACK_IMPORTED_MODULE_2__.A,{className:"font-normal",variant:"outline",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{className:"mb-0",width:16,height:16,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEX////////////////////29/Xa4dnN0Mx3pHRaklVNjEhkmGCHrYTAv78BAABFQ0SamZnw8PCyurEZFBYPBwkjHiBoZmaSkJGFhIRsampPTU35aes1AAAABXRSTlMm5//Y8I2GLHIAAADRSURBVHgBfdLBEoIwDEXRGkhKwQYkRLX//6EGGCEL6t1lDo9hQQg3qHSrm9UEqNc6RMIaxi71dI3YpWFI14iDVVt2RveNMo/TAzzGNKR5uw1l4cmjDe/ww0WVnydiOr8F44tF+X0g9amHMxxN6VgSEfhU5bPjRTMrVxENyWHOGU81jA6Z7fTol6Msr8OiITqclu3eKyIFHD5YZYS9tw2zR5hMdbZxLKw2dGg9WZXXxJ5Cj/vbRNeEy2YOLfrwWskADp1HspXHWu3/nzo0baUmfAFiWg93CL1rOAAAAABJRU5ErkJggg=="}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"ml-2",children:"OpenSecrets"})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"background-and-career",children:"Background and Career"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Rick Dearborn is a longtime political operative and advisor with extensive experience in Washington, D.C. His career includes high-level roles within the executive branch and the U.S. Senate. Dearborn is perhaps best known for serving as Deputy Chief of Staff for Legislative, Intergovernmental Affairs, and Cabinet Relations under President Donald Trump. Prior to his role in the Trump administration, Dearborn worked as Chief of Staff to Senator Jeff Sessions, a position that placed him at the center of numerous policy debates over the years."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dearborn has built his career on fostering relationships between lawmakers, lobbyists, and federal agencies. His network extends deeply into conservative political circles, and he is often regarded as a key figure in the broader effort to advance policies aligned with the Heritage Foundation and similar organizations."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"connections-to-project-2025-and-policy-influence",children:"Connections to Project 2025 and Policy Influence"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dearborn's role in authoring the White House Office chapter of Project 2025 reflects his expertise in navigating the complex interplay between politics and governance. His contributions emphasize the centralization of power within the White House, a theme that aligns with his history of advocating for a strong executive branch. This perspective raises concerns about the potential erosion of checks and balances in government—a hallmark of democratic governance."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Key ties and affiliations include:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Heritage Foundation"}),": Dearborn's policy perspectives align closely with the Heritage Foundation, which sponsored Project 2025. The foundation has been criticized for its push to reshape government operations in ways that consolidate conservative influence and diminish regulatory oversight."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Jeff Sessions and Immigration Policy"}),": During his tenure as Sessions' Chief of Staff, Dearborn was instrumental in shaping Sessions' hardline stance on immigration, including policies later implemented by the Trump administration. These policies were widely criticized for their harsh treatment of immigrants and their divisive rhetoric."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Corporate and Lobbyist Connections"}),": Dearborn has cultivated relationships with a wide range of corporate and lobbying entities. His history of advocating for policies that benefit powerful business interests suggests that his proposals may prioritize corporate goals over public accountability."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"controversies-and-concerns",children:"Controversies and Concerns"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Dearborn's career is not without controversy, raising questions about his suitability to influence sweeping changes to federal governance. Among the concerns are:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"2016 Trump Campaign and Russian Contacts"}),": Dearborn's name appeared in Special Counsel Robert Mueller's investigation into Russian interference in the 2016 election. Reports indicate that Dearborn forwarded emails from Russian officials offering to set up meetings with the Trump campaign. While no charges were filed against Dearborn, his involvement in these discussions remains a troubling aspect of his tenure."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Advocacy for Corporate Interests"}),": Critics argue that Dearborn's career has prioritized advancing the interests of major corporations and conservative donors, often at the expense of environmental protections, labor rights, and other public interests."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Loyalty over Expertise"}),": Dearborn's tenure in the Trump administration emphasized loyalty to the president's agenda, sometimes sidelining experienced policymakers and career civil servants in favor of political appointees. This approach mirrors the themes of Project 2025, which similarly prioritizes ideological alignment over qualifications."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"call-to-scrutiny",children:"Call to Scrutiny"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Rick Dearborn's role as an author of Project 2025 and his career-long advocacy for centralizing power in the executive branch underscore the importance of critically examining his proposals. His network of corporate, political, and lobbying connections raises legitimate concerns about whether the policies he promotes truly serve the public good or primarily advance the interests of a select few."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is imperative to evaluate Dearborn's contributions in the context of his career and affiliations. While his experience in Washington is undeniable, his history suggests a pattern of prioritizing partisan goals over transparency, accountability, and the equitable distribution of power in government."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_deepdiveinto2025_deepdiveinto2025_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_5__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./src/components/ThirdParty/ShadCn/Avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q5:()=>AvatarFallback,BK:()=>AvatarImage,Ay:()=>Avatar_component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Avatar=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist.bL,__assign({ref,className:(0,utils.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)},props))}));Avatar.displayName=dist.bL.displayName;var AvatarImage=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist._V,__assign({ref,className:(0,utils.cn)("aspect-square h-full w-full",className)},props))}));AvatarImage.displayName=dist._V.displayName;var AvatarFallback=react.forwardRef((function(_a,ref){var className=_a.className,props=__rest(_a,["className"]);return(0,jsx_runtime.jsx)(dist.H4,__assign({ref,className:(0,utils.cn)("flex h-full w-full items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800",className)},props))}));AvatarFallback.displayName=dist.H4.displayName;const Avatar_component=Avatar;try{component.displayName="component",component.__docgenInfo={description:"",displayName:"component",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},onLoadingStatusChange:{defaultValue:null,description:"",name:"onLoadingStatusChange",required:!1,type:{name:"((status: ImageLoadingStatus) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}},delayMs:{defaultValue:null,description:"",name:"delayMs",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"src/components/ThirdParty/ShadCn/Avatar/component.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ThirdParty/ShadCn/Badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>badgeVariants,A:()=>component});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Badge(_a){var className=_a.className,variant=_a.variant,size=_a.size,props=__rest(_a,["className","variant","size"]);return(0,jsx_runtime.jsx)("div",__assign({className:(0,utils.cn)(badgeVariants({variant,size}),className)},props))}const component=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | "md" | null | undefined'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | "destructive" | "secondary" | "ghost" | null | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Badge/component.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/ThirdParty/ShadCn/Badge/component.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}var badgeVariants=(0,__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs").F)("inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"border text-foreground",ghost:"border-transparent bg-transparent text-foreground hover:bg-primary/10"},size:{sm:"text-xs px-2 py-0.5",md:"text-sm px-3 py-1",lg:"text-lg px-4 py-2"}},defaultVariants:{variant:"default",size:"md"}});try{badgeVariants.displayName="badgeVariants",badgeVariants.__docgenInfo={description:"",displayName:"badgeVariants",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | "destructive" | "secondary" | "ghost" | null | undefined'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "lg" | "md" | null | undefined'}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThirdParty/ShadCn/Badge/variants.tsx#badgeVariants"]={docgenInfo:badgeVariants.__docgenInfo,name:"badgeVariants",path:"src/components/ThirdParty/ShadCn/Badge/variants.tsx#badgeVariants"})}catch(__react_docgen_typescript_loader_error){}}}]);