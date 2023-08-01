"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[8867],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=o,h=c["".concat(u,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7366),o=(n(9496),n(9613));const a={sidebar_position:1},i="Overview",l={unversionedId:"contributing/contributing",id:"contributing/contributing",title:"Overview",description:"The following is a set of guidelines for contributing to Diginext. Please spend several minutes reading these guidelines before you create an issue or pull request.",source:"@site/docs/contributing/contributing.md",sourceDirName:"contributing",slug:"/contributing/",permalink:"/docs/contributing/",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/contributing/contributing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/category/contributing"},next:{title:"Code of Conduct",permalink:"/docs/contributing/code-of-conduct"}},u={},s=[{value:"Architecture",id:"architecture",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Open Development",id:"open-development",level:2},{value:"Branch Organization",id:"branch-organization",level:2},{value:"Bugs",id:"bugs",level:2},{value:"Proposing a Change",id:"proposing-a-change",level:2},{value:"Create a Pull Request",id:"create-a-pull-request",level:2},{value:"Being a Collaborator",id:"being-a-collaborator",level:2},{value:"<strong>Working on your first Pull Request?</strong>",id:"working-on-your-first-pull-request",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The following is a set of guidelines for contributing to ",(0,o.kt)("strong",{parentName:"p"},"Diginext"),". Please spend several minutes reading these guidelines before you create an issue or pull request."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"First thing first, study our ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture"},"Architecture")," to understand how the project is structured."),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"We have adopted a ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/code-of-conduct"},"Code of Conduct")," that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/code-of-conduct"},"Contributor Covenant Code of Conduct")),(0,o.kt)("h2",{id:"open-development"},"Open Development"),(0,o.kt)("p",null,"All work on Diginext happens directly on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/digitopvn/diginext"},"GitHub"),". Both core team members and external contributors send pull requests which go through the same review process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Wanna give me a hand?"))," "),(0,o.kt)("p",null,"Get started here: ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/development-workflow"},"Development Workflow")," "),(0,o.kt)("h2",{id:"branch-organization"},"Branch Organization"),(0,o.kt)("p",null,"According to our ",(0,o.kt)("a",{parentName:"p",href:"notion://www.notion.so/changelog#release-schedule"},"release schedule"),", we maintain two branches, ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"feature"),". If you send a bugfix pull request, please do it against the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch, if it's a feature pull request, please do it against the ",(0,o.kt)("inlineCode",{parentName:"p"},"feature")," branch."),(0,o.kt)("h2",{id:"bugs"},"Bugs"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/digitopvn/diginext/issues"},"GitHub Issues")," for bug tracking. The best way to get your bug fixed is by providing reproduction steps with this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/digitopvn/diginext/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%5D"},"template"),"."),(0,o.kt)("p",null,"Before you report a bug, please make sure you've searched existing issues, and read our ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/FAQ-10d5eed0f5bf44749c0997a29aebe6b6?pvs=21"},"FAQ"),"."),(0,o.kt)("h2",{id:"proposing-a-change"},"Proposing a Change"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you intend to change the public API/command, I also recommend to use my ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/digitopvn/diginext/issues/new?assignees=&labels=&template=propose_change.md&title="},"issue template")," to create a proposal."),(0,o.kt)("li",{parentName:"ul"},"If you are about to propose a new feature, double check our ",(0,o.kt)("a",{parentName:"li",href:"https://www.notion.so/Roadmap-6a8266c2929c48ad8d4c11c954e9d852?pvs=21"},"Roadmap")," to see if it\u2019s there or not, if not, you can use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/digitopvn/diginext/issues/new?assignees=&labels=&template=propose_change.md&title="},"issue template")," to create a proposal.")),(0,o.kt)("h2",{id:"create-a-pull-request"},"Create a Pull Request"),(0,o.kt)("p",null,"Check out this article: ",(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Pull-Request-f4a5bbbc6f4c46099ca73c98c9dc3bb9?pvs=21"},"Pull Request")," "),(0,o.kt)("h2",{id:"being-a-collaborator"},"Being a Collaborator"),(0,o.kt)("p",null,"If you are an active contributor and are willing to work with Diginext in our opensource workflow, please feel free to give me a hand:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Pull-Request-f4a5bbbc6f4c46099ca73c98c9dc3bb9?pvs=21"},"Pull Request")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/contributing/development-workflow"},"Development Workflow")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Development-Environment-Initial-Setup-a0fd98b3c0194c31820e436c3c057fe0?pvs=21"},"Development Environment - Initial Setup")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"working-on-your-first-pull-request"},(0,o.kt)("strong",{parentName:"h3"},"Working on your first Pull Request?")),(0,o.kt)("p",null,"You can learn how from this ",(0,o.kt)("em",{parentName:"p"},"free")," series ",(0,o.kt)("a",{parentName:"p",href:"https://kcd.im/pull-request"},"How to Contribute to an Open Source Project on GitHub")))}d.isMDXComponent=!0}}]);