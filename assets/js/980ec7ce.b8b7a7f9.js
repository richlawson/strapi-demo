"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9521],{780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={title:"Review Workflows",description:"Guide for review workflows in the content-manager.",tags:["content-manager","review-workflows"]},i=void 0,s={unversionedId:"docs/core/content-manager/review-workflows",id:"docs/core/content-manager/review-workflows",title:"Review Workflows",description:"Guide for review workflows in the content-manager.",source:"@site/docs/docs/01-core/content-manager/02-review-workflows.mdx",sourceDirName:"docs/01-core/content-manager",slug:"/docs/core/content-manager/review-workflows",permalink:"/docs/core/content-manager/review-workflows",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/content-manager/02-review-workflows.mdx",tags:[{label:"content-manager",permalink:"/tags/content-manager"},{label:"review-workflows",permalink:"/tags/review-workflows"}],version:"current",sidebarPosition:2,frontMatter:{title:"Review Workflows",description:"Guide for review workflows in the content-manager.",tags:["content-manager","review-workflows"]},sidebar:"docs",previous:{title:"Relations",permalink:"/docs/core/content-manager/relations"},next:{title:"useContentTypes",permalink:"/docs/core/content-manager/hooks/use-content-types"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Nullish stages",id:"nullish-stages",level:3},{value:"List view",id:"list-view",level:3},{value:"Edit view",id:"edit-view",level:3},{value:"License limits",id:"license-limits",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Review workflows are disabled for all content-types by default and have to be enabled for each of them individually. More about how to\n",(0,a.kt)("a",{parentName:"p",href:"/docs/settings/review-workflows#edit--create-view"},"enable review-workflows for a content-type"),". The feature itself is visible in two places\nof the content-manager: list and edit view."),(0,a.kt)("h3",{id:"nullish-stages"},"Nullish stages"),(0,a.kt)("p",null,"Entities which are not created through the admin API, content API or entity service will not have a stage assigned by default (e.g. lifecycle methods). This\nmeans at any place in the admin app displaying a stage, it has to be prepared to receive ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," and should not crash."),(0,a.kt)("h3",{id:"list-view"},"List view"),(0,a.kt)("p",null,"If the feature is enabled for a content-type a new column will show up, displaying the current stage of an entity. If no stage was assigned to an entity,\nthe column is displayed as empty."),(0,a.kt)("p",null,"The information which stage is currently assigned to an entity is send as part of the content-type response payload for each entity in the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi_stage"),".\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"/settings/review-workflows"},"type definitions")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  // ... entity attributes\n  strapi_stage?: Stage | null\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/content-manager/content-types")," returns whether the feature is enabled for the content-type. ",(0,a.kt)("inlineCode",{parentName:"p"},"options.reviewWorkflows")," is either ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Downgrading from EE to CE won't delete the associated review workflow data and ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/content-manager/content-types")," still returns true. The admin app had to\nadd an additional check if the feature toggle returned in ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1337/admin/project-type")," is enabled."),(0,a.kt)("h3",{id:"edit-view"},"Edit view"),(0,a.kt)("p",null,"If the feature is enabled on the current content-type, the selected stage will show up in the information sidebar next to the edit view. Users\ncan select any other stage of the current workflow provided they have the necessary permissions to change the current stage see ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/admin/ee/review-workflows"},"EE Review Workflows"),"."),(0,a.kt)("p",null,"Stage assignments are decoupled from entities, meaning updating entity attributes won't set the selected stage at the same time. Instead the stage select\ncomponent will trigger an atomic update on the admin API to assign/ update a stage to the current entity."),(0,a.kt)("p",null,"Because of this decoupling, stages ",(0,a.kt)("strong",{parentName:"p"},"can not be assigned on entity creation")," and only after they have been created."),(0,a.kt)("p",null,"Information about which stage is currently assigned to an entity is sent as part of the entity response payload in the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"strapi_stage"),".\nPlease refer to the ",(0,a.kt)("a",{parentName:"p",href:"/settings/review-workflows"},"type definitions")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  // ... entity attributes\n  strapi_stage?: Stage | null\n}\n")),(0,a.kt)("h4",{id:"license-limits"},"License limits"),(0,a.kt)("p",null,"If the user has exceeded the license limit (based on their license) for either the number of workflows or the number of stages of the workflow assigned\nto the entities content-type, any stage update action will trigger a license-limit overlay and abort the request."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);