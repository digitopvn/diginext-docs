"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[892],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7366),r=(n(9496),n(9613));const i={sidebar_position:3},a="Development Workflow",l={unversionedId:"contributing/development-workflow",id:"contributing/development-workflow",title:"Development Workflow",description:"Fork these repos:",source:"@site/docs/contributing/development-workflow.md",sourceDirName:"contributing",slug:"/contributing/development-workflow",permalink:"/docs/contributing/development-workflow",draft:!1,editUrl:"https://github.com/digitopvn/diginext-docs/tree/main/docs/contributing/development-workflow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Code of Conduct",permalink:"/docs/contributing/code-of-conduct"},next:{title:"Development Environment - Initial Setup",permalink:"/docs/contributing/development-environment-setup"}},p={},s=[{value:"Diginext Server &amp; CLI",id:"diginext-server--cli",level:2},{value:"Development Tools",id:"development-tools",level:3},{value:"Workspace Dashboard",id:"workspace-dashboard",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-workflow"},"Development Workflow"),(0,r.kt)("h1",{id:"first-thing-first"},"First thing first"),(0,r.kt)("p",null,"Fork these repos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/digitopvn/diginext"},"Diginext (Server & CLI)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/digitopvn/diginext-admin"},"Diginext Dashboard (Admin UI)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/digitopvn/diginext-docs"},"Diginext Documentation"))),(0,r.kt)("h1",{id:"with-docker-compose"},"With Docker Compose"),(0,r.kt)("p",null,"The fastest way to start developing Diginext is using Docker Compose, since mostly everything (like developer tools) is pre-installed and pre-configurated inside the container images."),(0,r.kt)("p",null,"You can use this example ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.dev.example.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nnetworks:\n    bridge:\n        driver: bridge\nvolumes:\n        mongo:\n    home:\n    node:\nservices:\n    mongo:\n        ports:\n            - \'27017:27017\'\n        container_name: mongo\n        restart: always\n        logging:\n            driver: none\n        networks:\n            - bridge\n        environment:\n            - MONGO_INITDB_ROOT_USERNAME=root\n            - MONGO_INITDB_ROOT_PASSWORD=diginext\n        image: mongo\n        volumes:\n            - mongo:/data/db\n    diginext:\n        container_name: diginext\n        build:\n            context: .\n            dockerfile: Dockerfile.dev\n        working_dir: /usr/app/\n        ports:\n            - "6969:6969"\n        networks:\n            - bridge\n        entrypoint: /usr/app/scripts/startup-dev.sh\n        volumes:\n            # docker.sock -> comment this out if you\'re using PODMAN\n            - "/var/run/docker.sock:/var/run/docker.sock"\n            # Persist NODE_MODULES & HOME DIR with named Docker volume\n            - node:/usr/app/node_modules/\n            - home:/home/app/\n            # Persist data with host path -> HOST:CONTAINER\n            - ./src:/usr/app/src\n            - ./public:/usr/app/public\n            - ./storage:/var/app/storage\n            - ./scripts:/usr/app/scripts\n        environment:\n            - NODE_ENV=development\n            - PORT=6969\n            - BASE_URL=http://localhost:6969\n            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext?authSource=admin\n            - CLI_MODE=server\n            - JWT_SECRET=\n            - JWT_EXPIRE_TIME=48h\n            - GOOGLE_CLIENT_ID=\n            - GOOGLE_CLIENT_SECRET=\n')),(0,r.kt)("p",null,"Start your development environment with: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose -f docker-compose.dev.yaml up --attach diginext")),(0,r.kt)("p",null,"Check out your server endpoint at: http://localhost:6969 "),(0,r.kt)("h1",{id:"manual"},"Manual"),(0,r.kt)("p",null,"Developing inside a Docker Container environment sometime consumes a lot of your computer\u2019s resources, or you just simply want to get started from scratch. "),(0,r.kt)("p",null,"There you go:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"I use ",(0,r.kt)("inlineCode",{parentName:"em"},"pnpm")," instead of ",(0,r.kt)("inlineCode",{parentName:"em"},"npm")," because I find it a bit faster. Therefore, I recommend that you also use ",(0,r.kt)("inlineCode",{parentName:"em"},"pnpm"),", especially since I have set up some scripts in ",(0,r.kt)("inlineCode",{parentName:"em"},"package.json")," that utilize ",(0,r.kt)("inlineCode",{parentName:"em"},"pnpm"),"."))),(0,r.kt)("h2",{id:"diginext-server--cli"},"Diginext Server & CLI"),(0,r.kt)("p",null,"After cloning ",(0,r.kt)("inlineCode",{parentName:"p"},"[digitopvn/diginext](https://github.com/digitopvn/diginext)"),", run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," to fetch its dependencies. Then, you can run several commands:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," runs Diginext Server locally, the Dashboard UI should be: http://localhost:6969 "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," checks the code style."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," to build the TypeScript to JavaScript at ",(0,r.kt)("inlineCode",{parentName:"li"},"dist/")," and link the current directory to global ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", so you can test your CLI commands locally.")),(0,r.kt)("h3",{id:"development-tools"},"Development Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Node.js (16+)"),(0,r.kt)("li",{parentName:"ul"},"Docker",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docker BuildX"))),(0,r.kt)("li",{parentName:"ul"},"Podman"),(0,r.kt)("li",{parentName:"ul"},"OpenSSH"),(0,r.kt)("li",{parentName:"ul"},"kubectl"),(0,r.kt)("li",{parentName:"ul"},"gcloud",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"google-cloud-sdk-gke-gcloud-auth-plugin"))),(0,r.kt)("li",{parentName:"ul"},"doctl"),(0,r.kt)("li",{parentName:"ul"},"helm")),(0,r.kt)("h2",{id:"workspace-dashboard"},"Workspace Dashboard"),(0,r.kt)("p",null,"The repository of workspace dashboard is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"[digitopvn/diginext-admin](https://github.com/digitopvn/diginext-admin)"),", clone it to your computer and place at the same level of the Diginext Server source code. "),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"- **diginext/**\n    - src/\n    - dist/\n    - public/\n    - \u2026\n- **diginext-admin/**\n    - src/\n    - pages/\n    - \u2026\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start development, your dev link should be http://localhost:3000 "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run dev")," runs Workspace Dashboard website locally."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run lint")," checks the code style."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm run export:cli")," to export Workspace Dashboard to static HTML files and copy to ",(0,r.kt)("inlineCode",{parentName:"li"},"../diginext/public")," directory")))}m.isMDXComponent=!0}}]);