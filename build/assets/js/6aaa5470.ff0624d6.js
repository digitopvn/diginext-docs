"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[2213],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7366),a=(r(9496),r(9613));const o={sidebar_position:5},i="Extra Configuration",s={unversionedId:"installation/extra-config",id:"installation/extra-config",title:"Extra Configuration",description:"System packages",source:"@site/docs/installation/extra-config.md",sourceDirName:"installation",slug:"/installation/extra-config",permalink:"/docs/installation/extra-config",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/installation/extra-config.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface (CLI)",permalink:"/docs/installation/cli-installation"},next:{title:"Command Line Interface (CLI)",permalink:"/docs/category/command-line-interface-cli"}},c={},l=[{value:"System packages",id:"system-packages",level:3},{value:"<strong>TLS &amp; Reverse Proxy</strong>",id:"tls--reverse-proxy",level:3}],p={toc:l},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"extra-configuration"},"Extra Configuration"),(0,a.kt)("h3",{id:"system-packages"},"System packages"),(0,a.kt)("p",null,"If you\u2019re on Linux OS and want the build server to start up every reboot, you might want to enable Diginext server as a system service (with ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl")," for example)."),(0,a.kt)("h3",{id:"tls--reverse-proxy"},(0,a.kt)("strong",{parentName:"h3"},"TLS & Reverse Proxy")),(0,a.kt)("p",null,"The Coder server can directly use TLS certificates with\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CODER_TLS_ENABLE")),"\xa0and accompanying configuration flags. However, Coder can also run behind a reverse-proxy to terminate TLS certificates from LetsEncrypt, for example."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/coder/coder/tree/main/examples/web-server/apache"},"Apache"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/coder/coder/tree/main/examples/web-server/caddy"},"Caddy"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/coder/coder/tree/main/examples/web-server/nginx"},"NGINX")))))}u.isMDXComponent=!0}}]);