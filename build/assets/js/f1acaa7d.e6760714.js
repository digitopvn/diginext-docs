"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[7939],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7366),a=(r(9496),r(9613));const i={sidebar_position:3},o="Create or initialize app",c={unversionedId:"cli/cli-learn-create-app",id:"cli/cli-learn-create-app",title:"Create or initialize app",description:"- Create new project & app:",source:"@site/docs/cli/cli-learn-create-app.md",sourceDirName:"cli",slug:"/cli/cli-learn-create-app",permalink:"/docs/cli/cli-learn-create-app",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/cli/cli-learn-create-app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CLI Documentation",permalink:"/docs/cli/cli-docs"},next:{title:"App\u2019s configuration",permalink:"/docs/cli/cli-learn-config-app"}},p={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-or-initialize-app"},"Create or initialize app"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create new project & app:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dx new\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[!!! DANGER !!!]")," Forcefully create new project ",(0,a.kt)("strong",{parentName:"li"},"(overwriting current directory & git repo if any)"),":",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dx new --overwrite\n\n# short term:\ndx new -o\n"))),(0,a.kt)("li",{parentName:"ul"},"Initialize a framework in the current app directory:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/source/code\ndx init\n")))))}d.isMDXComponent=!0}}]);