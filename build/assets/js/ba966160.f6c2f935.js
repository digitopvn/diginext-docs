"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[6249],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7366),i=(r(9496),r(9613));const o={sidebar_position:4},a="Container Registries",c={unversionedId:"infrastructure/container-registry",id:"infrastructure/container-registry",title:"Container Registries",description:"At the moment, dx supports these container registries:",source:"@site/docs/infrastructure/container-registry.md",sourceDirName:"infrastructure",slug:"/infrastructure/container-registry",permalink:"/docs/infrastructure/container-registry",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/infrastructure/container-registry.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Clusters",permalink:"/docs/infrastructure/cluster"},next:{title:"Cloud Databases",permalink:"/docs/infrastructure/database"}},s={},u=[{value:"Authenticate Docker Hub Registry",id:"authenticate-docker-hub-registry",level:2},{value:"Authenticate Google Container Registry",id:"authenticate-google-container-registry",level:2},{value:"Authenticate Digital Ocean Container Registry",id:"authenticate-digital-ocean-container-registry",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"container-registries"},"Container Registries"),(0,i.kt)("p",null,"At the moment, ",(0,i.kt)("inlineCode",{parentName:"p"},"dx")," supports these container registries:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Docker Hub Registry (DHR)"),(0,i.kt)("li",{parentName:"ol"},"Google Container Registry (GCR)"),(0,i.kt)("li",{parentName:"ol"},"Digital Ocean Container Registry (DOR)")),(0,i.kt)("p",null,"Don\u2019t see your container registry? Check out my ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Roadmap-6a8266c2929c48ad8d4c11c954e9d852?pvs=21"},"Roadmap")," "),(0,i.kt)("h2",{id:"authenticate-docker-hub-registry"},"Authenticate Docker Hub Registry"),(0,i.kt)("h2",{id:"authenticate-google-container-registry"},"Authenticate Google Container Registry"),(0,i.kt)("p",null,"Similar with GKE authorization, to authenticate Diginext with GCR, you need a Google Cloud Service Account, if you already got one, you only need to access Google Cloud Console and assign GCR read & write permissions to it, then get back to your workspace and fulfill the form."),(0,i.kt)("h2",{id:"authenticate-digital-ocean-container-registry"},"Authenticate Digital Ocean Container Registry"),(0,i.kt)("p",null,"DigitalOcean provides API access token to authenticate with their Container Registry"))}d.isMDXComponent=!0}}]);