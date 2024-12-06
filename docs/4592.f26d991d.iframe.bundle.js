/*! For license information please see 4592.f26d991d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkadeepdiveinto2025=self.webpackChunkadeepdiveinto2025||[]).push([[4592,3514,1333,5583,5912],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@radix-ui/react-accordion/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UC:()=>Content2,Y9:()=>Header,q7:()=>Item,bL:()=>Root2,l9:()=>Trigger2});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_collection_dist=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),[createCollapsibleContext,createCollapsibleScope]=(0,dist.A)("Collapsible"),[CollapsibleProvider,useCollapsibleContext]=createCollapsibleContext("Collapsible"),Collapsible=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=(0,react_use_controllable_state_dist.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,jsx_runtime.jsx)(CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:(0,react_id_dist.B)(),open,onOpenToggle:react.useCallback((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{"data-state":getState(open),"data-disabled":disabled?"":void 0,...collapsibleProps,ref:forwardedRef})})}));Collapsible.displayName="Collapsible";var CollapsibleTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled,...triggerProps,ref:forwardedRef,onClick:(0,primitive_dist.m)(props.onClick,context.onOpenToggle)})}));CollapsibleTrigger.displayName="CollapsibleTrigger";var CollapsibleContent=react.forwardRef(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,jsx_runtime.jsx)(react_presence_dist.C,{present:forceMount||context.open,children:({present})=>(0,jsx_runtime.jsx)(CollapsibleContentImpl,{...contentProps,ref:forwardedRef,present})})}));CollapsibleContent.displayName="CollapsibleContent";var CollapsibleContentImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=react.useState(present),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),heightRef=react.useRef(0),height=heightRef.current,widthRef=react.useRef(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=react.useRef(isOpen),originalStylesRef=react.useRef();return react.useEffect((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,react_use_layout_effect_dist.N)((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen,...contentProps,ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style},children:isOpen&&children})}));function getState(open){return open?"open":"closed"}var Root=Collapsible,Trigger=CollapsibleTrigger,Content=CollapsibleContent,react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),ACCORDION_KEYS=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Collection,useCollection,createCollectionScope]=(0,react_collection_dist.N)("Accordion"),[createAccordionContext,createAccordionScope]=(0,dist.A)("Accordion",[createCollectionScope,createCollapsibleScope]),useCollapsibleScope=createCollapsibleScope(),Accordion=react.forwardRef(((props,forwardedRef)=>{const{type,...accordionProps}=props,singleProps=accordionProps,multipleProps=accordionProps;return(0,jsx_runtime.jsx)(Collection.Provider,{scope:props.__scopeAccordion,children:"multiple"===type?(0,jsx_runtime.jsx)(AccordionImplMultiple,{...multipleProps,ref:forwardedRef}):(0,jsx_runtime.jsx)(AccordionImplSingle,{...singleProps,ref:forwardedRef})})}));Accordion.displayName="Accordion";var[AccordionValueProvider,useAccordionValueContext]=createAccordionContext("Accordion"),[AccordionCollapsibleProvider,useAccordionCollapsibleContext]=createAccordionContext("Accordion",{collapsible:!1}),AccordionImplSingle=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},collapsible=!1,...accordionSingleProps}=props,[value,setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,jsx_runtime.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value:value?[value]:[],onItemOpen:setValue,onItemClose:react.useCallback((()=>collapsible&&setValue("")),[collapsible,setValue]),children:(0,jsx_runtime.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible,children:(0,jsx_runtime.jsx)(AccordionImpl,{...accordionSingleProps,ref:forwardedRef})})})})),AccordionImplMultiple=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...accordionMultipleProps}=props,[value=[],setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleItemOpen=react.useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleItemClose=react.useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value2=>value2!==itemValue))))),[setValue]);return(0,jsx_runtime.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value,onItemOpen:handleItemOpen,onItemClose:handleItemClose,children:(0,jsx_runtime.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible:!0,children:(0,jsx_runtime.jsx)(AccordionImpl,{...accordionMultipleProps,ref:forwardedRef})})})})),[AccordionImplProvider,useAccordionContext]=createAccordionContext("Accordion"),AccordionImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,disabled,dir,orientation="vertical",...accordionProps}=props,accordionRef=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(accordionRef,forwardedRef),getItems=useCollection(__scopeAccordion),isDirectionLTR="ltr"===(0,react_direction_dist.jH)(dir),handleKeyDown=(0,primitive_dist.m)(props.onKeyDown,(event=>{if(!ACCORDION_KEYS.includes(event.key))return;const target=event.target,triggerCollection=getItems().filter((item=>!item.ref.current?.disabled)),triggerIndex=triggerCollection.findIndex((item=>item.ref.current===target)),triggerCount=triggerCollection.length;if(-1===triggerIndex)return;event.preventDefault();let nextIndex=triggerIndex;const endIndex=triggerCount-1,moveNext=()=>{nextIndex=triggerIndex+1,nextIndex>endIndex&&(nextIndex=0)},movePrev=()=>{nextIndex=triggerIndex-1,nextIndex<0&&(nextIndex=endIndex)};switch(event.key){case"Home":nextIndex=0;break;case"End":nextIndex=endIndex;break;case"ArrowRight":"horizontal"===orientation&&(isDirectionLTR?moveNext():movePrev());break;case"ArrowDown":"vertical"===orientation&&moveNext();break;case"ArrowLeft":"horizontal"===orientation&&(isDirectionLTR?movePrev():moveNext());break;case"ArrowUp":"vertical"===orientation&&movePrev()}const clampedIndex=nextIndex%triggerCount;triggerCollection[clampedIndex].ref.current?.focus()}));return(0,jsx_runtime.jsx)(AccordionImplProvider,{scope:__scopeAccordion,disabled,direction:dir,orientation,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:__scopeAccordion,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{...accordionProps,"data-orientation":orientation,ref:composedRefs,onKeyDown:disabled?void 0:handleKeyDown})})})})),[AccordionItemProvider,useAccordionItemContext]=createAccordionContext("AccordionItem"),AccordionItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,value,...accordionItemProps}=props,accordionContext=useAccordionContext("AccordionItem",__scopeAccordion),valueContext=useAccordionValueContext("AccordionItem",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion),triggerId=(0,react_id_dist.B)(),open=value&&valueContext.value.includes(value)||!1,disabled=accordionContext.disabled||props.disabled;return(0,jsx_runtime.jsx)(AccordionItemProvider,{scope:__scopeAccordion,open,disabled,triggerId,children:(0,jsx_runtime.jsx)(Root,{"data-orientation":accordionContext.orientation,"data-state":dist_getState(open),...collapsibleScope,...accordionItemProps,ref:forwardedRef,disabled,open,onOpenChange:open2=>{open2?valueContext.onItemOpen(value):valueContext.onItemClose(value)}})})}));AccordionItem.displayName="AccordionItem";var AccordionHeader=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...headerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionHeader",__scopeAccordion);return(0,jsx_runtime.jsx)(react_primitive_dist.sG.h3,{"data-orientation":accordionContext.orientation,"data-state":dist_getState(itemContext.open),"data-disabled":itemContext.disabled?"":void 0,...headerProps,ref:forwardedRef})}));AccordionHeader.displayName="AccordionHeader";var AccordionTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...triggerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionTrigger",__scopeAccordion),collapsibleContext=useAccordionCollapsibleContext("AccordionTrigger",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeAccordion,children:(0,jsx_runtime.jsx)(Trigger,{"aria-disabled":itemContext.open&&!collapsibleContext.collapsible||void 0,"data-orientation":accordionContext.orientation,id:itemContext.triggerId,...collapsibleScope,...triggerProps,ref:forwardedRef})})}));AccordionTrigger.displayName="AccordionTrigger";var AccordionContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...contentProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionContent",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,jsx_runtime.jsx)(Content,{role:"region","aria-labelledby":itemContext.triggerId,"data-orientation":accordionContext.orientation,...collapsibleScope,...contentProps,ref:forwardedRef,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...props.style}})}));function dist_getState(open){return open?"open":"closed"}AccordionContent.displayName="AccordionContent";var Root2=Accordion,Item=AccordionItem,Header=AccordionHeader,Trigger2=AccordionTrigger,Content2=AccordionContent},"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>createCollection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,context.collectionRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&array.indexOf(className)===index)).join(" ");var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/plus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Plus});const Plus=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])}}]);