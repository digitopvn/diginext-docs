"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[3581],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(7366),i=(n(9496),n(9613));const l={sidebar_position:4},o="Command Line Interface (CLI)",r={unversionedId:"installation/cli-installation",id:"installation/cli-installation",title:"Command Line Interface (CLI)",description:"is the developer-friendly tool to help you communicate with the build server and also assists you in daily basis development tasks, such as git and deploy apps, etc.",source:"@site/docs/installation/cli-installation.md",sourceDirName:"installation",slug:"/installation/cli-installation",permalink:"/docs/installation/cli-installation",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/installation/cli-installation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Server - Manual installation",permalink:"/docs/installation/server-manual-installation"},next:{title:"Extra Configuration",permalink:"/docs/installation/extra-config"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Connect with Diginext server",id:"connect-with-diginext-server",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Developers",id:"developers",level:3},{value:"DevOps",id:"devops",level:3},{value:"What you can do with <code>dx</code>?",id:"what-you-can-do-with-dx",level:2},{value:"What\u2019s next?",id:"whats-next",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,i.kt)("p",null,"is the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"developer-friendly"))," tool to help you communicate with the build server and also assists you in daily basis development tasks, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," apps, etc."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("strong",{parentName:"p"},"Command Line Interface (CLI)")," is simple & straightforward, you only need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.js")," (16+), then install ",(0,i.kt)("inlineCode",{parentName:"p"},"dx")," directly from NPM package library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @topgroup/diginext --location=global\n")),(0,i.kt)("p",null,"That's it!"),(0,i.kt)("h2",{id:"connect-with-diginext-server"},"Connect with Diginext server"),(0,i.kt)("p",null,"To interact with your workspace\u2019s resources, such as deploying apps for example, you will need to connect your CLI with the server with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dx login <build-server-url>\n\n# example\ndx login http://localhost:6969\n")),(0,i.kt)("p",null,"This would open a new tab on your browser and request for authentication, just follow the login steps and copy the access token string."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"It depends on the role you're playing, or the purpose that brings you here. You might need to install some dependency packages:"),(0,i.kt)("h3",{id:"developers"},"Developers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")," is the only one package you should care.")),(0,i.kt)("h3",{id:"devops"},"DevOps"),(0,i.kt)("p",null,"Well, ",(0,i.kt)("inlineCode",{parentName:"p"},"dx")," comes with a set of enhancement commands to help you interact with the infrastructure, so you will need to install:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),":"),(0,i.kt)("li",{parentName:"ul"},"If your infrastructure is provided by Google Cloud, install ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud"),":"),(0,i.kt)("li",{parentName:"ul"},"If your infrastructure is provided by Digital Ocean, install ",(0,i.kt)("inlineCode",{parentName:"li"},"doctl"),":"),(0,i.kt)("li",{parentName:"ul"},"If you want to use ",(0,i.kt)("inlineCode",{parentName:"li"},"helm")," enhancement commands, install ",(0,i.kt)("inlineCode",{parentName:"li"},"helm"),":"),(0,i.kt)("li",{parentName:"ul"},"If you want to build the container on your machine, install ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"podman"))),(0,i.kt)("h2",{id:"what-you-can-do-with-dx"},"What you can do with ",(0,i.kt)("inlineCode",{parentName:"h2"},"dx"),"?"),(0,i.kt)("p",null,"Find out here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Command-Line-Interface-CLI-9a7cb013548e485582c002658822f8e4?pvs=21"},"Command Line Interface (CLI)")," "),(0,i.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Quick-start-d4e78e0e8ee141cf85585d2a27280396?pvs=21"},"Quick start")))}u.isMDXComponent=!0}}]);