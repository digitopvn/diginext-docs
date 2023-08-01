"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[9759],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7366),a=(n(9496),n(9613));const l={sidebar_position:7},c="Kubectl command enhancement",i={unversionedId:"cli/cli-learn-kubectl-enhancement",id:"cli/cli-learn-kubectl-enhancement",title:"Kubectl command enhancement",description:"Service",source:"@site/docs/cli/cli-learn-kubectl-enhancement.md",sourceDirName:"cli",slug:"/cli/cli-learn-kubectl-enhancement",permalink:"/docs/cli/cli-learn-kubectl-enhancement",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/cli/cli-learn-kubectl-enhancement.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Take down apps",permalink:"/docs/cli/cli-learn-take-down"},next:{title:"Container registry helper commands",permalink:"/docs/cli/cli-learn-registry-helper"}},o={},p=[{value:"Service",id:"service",level:2},{value:"Ingress",id:"ingress",level:2},{value:"Deployment",id:"deployment",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubectl-command-enhancement"},"Kubectl command enhancement"),(0,a.kt)("h2",{id:"service"},"Service"),(0,a.kt)("p",null,"(TBU)"),(0,a.kt)("h2",{id:"ingress"},"Ingress"),(0,a.kt)("p",null,"(TBU)"),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," of all containers of a deployment:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dx kb set deploy\n# [1] select cluster\n# [2] select namespace\n# [3] select deployment\n# [4] select propery: "image"\n# [5] input the new image\'s URL\n'))),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"port")," of all containers of a deployment:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dx kb set deploy\n# [1] select cluster\n# [2] select namespace\n# [3] select deployment\n# [4] select propery: "port"\n# [5] input the new port number\n'))),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"imagePullSecrets")," of a deployment:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dx kb set deploy\n# [1] select cluster\n# [2] select namespace\n# [3] select deployment\n# [4] select propery: "imagePullSecrets"\n# [5] input the new secret name\n')))))}u.isMDXComponent=!0}}]);