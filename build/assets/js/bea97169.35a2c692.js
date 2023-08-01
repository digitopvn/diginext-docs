"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[2043],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7366),i=(n(9496),n(9613));const o={sidebar_position:5},a="Builds",l={unversionedId:"deployment/builds",id:"deployment/builds",title:"Builds",description:"Builds in Diginext are similar to the container images of your app, just with some additional metadata information of the source code, build date, build environment and the author.",source:"@site/docs/deployment/builds.md",sourceDirName:"deployment",slug:"/deployment/builds",permalink:"/docs/deployment/builds",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/deployment/builds.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy Environments",permalink:"/docs/deployment/deploy-environment"},next:{title:"Releases",permalink:"/docs/deployment/releases"}},s={},u=[{value:"Statuses",id:"statuses",level:3}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"builds"},"Builds"),(0,i.kt)("p",null,"Builds in Diginext are similar to the container images of your app, just with some additional metadata information of the source code, build date, build environment and the author."),(0,i.kt)("h3",{id:"statuses"},"Statuses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start"),(0,i.kt)("li",{parentName:"ul"},"Building"),(0,i.kt)("li",{parentName:"ul"},"Success"),(0,i.kt)("li",{parentName:"ul"},"Failed")))}p.isMDXComponent=!0}}]);