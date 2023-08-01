"use strict";(self.webpackChunkdiginext=self.webpackChunkdiginext||[]).push([[7275],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?o.createElement(g,a(a({ref:n},c),{},{components:t})):o.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7366),r=(t(9496),t(9613));const i={sidebar_position:1},a="Server - With Docker Compose",s={unversionedId:"installation/server-with-docker-compose",id:"installation/server-with-docker-compose",title:"Server - With Docker Compose",description:"For simple installation, you usually like to spin up the Diginext build server with Docker / Docker Compose.",source:"@site/docs/installation/server-with-docker-compose.md",sourceDirName:"installation",slug:"/installation/server-with-docker-compose",permalink:"/docs/installation/server-with-docker-compose",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation/server-with-docker-compose.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Server - With Kubernetes",permalink:"/docs/installation/server-with-kubernetes"}},p={},l=[{value:"Using Docker Engine as the builder",id:"using-docker-engine-as-the-builder",level:2},{value:"Using Podman Engine",id:"using-podman-engine",level:2},{value:"Podman in Podman? RunC? Containerd?",id:"podman-in-podman-runc-containerd",level:3}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"server---with-docker-compose"},"Server - With Docker Compose"),(0,r.kt)("p",null,"For simple installation, you usually like to spin up the Diginext build server with Docker / Docker Compose. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Diginext Build Server")," provides 2 popular container engines - ",(0,r.kt)("strong",{parentName:"p"},"Docker & Podman")," - to help you build your container apps."),(0,r.kt)("h2",{id:"using-docker-engine-as-the-builder"},"Using Docker Engine as the builder"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 This is the concept of ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/docker-can-now-run-within-docker/"},"Docker-in-Docker"),". Click on the link if you want to learn more.")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.example-docker.yaml")," template which I provided in the repository, rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.docker.yaml")," and modify some environment variables as the following instruction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nnetworks:\n    bridge:\n        driver: bridge\nservices:\n    mongo:\n        ports:\n            - \'27017\'\n        container_name: mongo\n        restart: always\n        logging:\n            options:\n                max-size: 1g\n        networks:\n            - bridge\n        environment:\n            - MONGO_INITDB_ROOT_USERNAME=root\n            - MONGO_INITDB_ROOT_PASSWORD=diginext\n        image: mongo\n        volumes:\n            - ./storage/mongo:/data/db\n    diginext:\n        image: "digitop/diginext:latest"\n        container_name: diginext\n        working_dir: /usr/app/\n        ports:\n            - "6969:6969"\n        restart: unless-stopped\n        depends_on:\n            - mongo\n        networks:\n            - bridge\n        privileged: true\n        entrypoint: /usr/app/scripts/startup.sh\n        volumes:\n            # DOCKER SOCK\n            - "/var/run/docker.sock:/var/run/docker.sock"\n            # CACHE NODE_MODULES & HOME DIR\n            - /usr/app/node_modules/\n            - /home/app/\n            # HOST:CONTAINER\n            - ./storage:/var/app/storage\n        environment:\n            - NODE_ENV=production\n            - PORT=6969\n            - BASE_URL=http://localhost:6969\n            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext?authSource=admin\n            - CLI_MODE=server\n            - BUILDER=docker\n            - JWT_SECRET=\n            - JWT_EXPIRE_TIME=48h\n            - GOOGLE_CLIENT_ID=\n            - GOOGLE_CLIENT_SECRET=\n')),(0,r.kt)("p",null,"Now spin it up with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose -f docker-compose.dev.yaml up\n\n# if everything is goingg well without any errors, you can kill the process and start it up again in background with\ndocker compose -f docker-compose.dev.yaml up -d\n")),(0,r.kt)("p",null,"Your server should be ready at: http://localhost:6969 "),(0,r.kt)("p",null,"Click on the link and check it out."),(0,r.kt)("h2",{id:"using-podman-engine"},"Using Podman Engine"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Podman-in-Docker"))),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.example-podman.yaml")," template which I provided in the repository, notice the differences in environment variables (",(0,r.kt)("inlineCode",{parentName:"p"},"BUILDER=podman"),") and some ",(0,r.kt)("strong",{parentName:"p"},"security & capability limits")," for the Diginext container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nnetworks:\n    bridge:\n        driver: bridge\nvolumes:\n    mongo:\n        external: true\n        name: mongo\nservices:\n    # mongo database\n    mongo:\n        image: mongo\n        container_name: mongo\n        restart: always\n        ports:\n            - \'27017\'\n        networks:\n            - bridge\n        logging:\n            options:\n                max-size: 1g\n        volumes:\n            - mongo:/data/db\n        environment:\n            - MONGO_INITDB_ROOT_USERNAME=root\n            - MONGO_INITDB_ROOT_PASSWORD=diginext\n    # build server\n    diginext:\n        image: digitop/diginext:beta\n        container_name: diginext\n        working_dir: /usr/app/\n        ports:\n            - "6969:6969"\n        restart: unless-stopped\n        networks:\n            - bridge\n        depends_on:\n            - mongo\n        # ----------- [START] FOR PODMAN TO RUN INSIDE DOCKER WITHOUT PRIVILEDGE MODE ----------\n        devices:\n            - "/dev/fuse"\n        security_opt:\n            - "seccomp=unconfined"\n            - "label=disable"\n        cap_add:\n            - sys_admin\n            - mknod\n        # ----------- [END] FOR PODMAN TO RUN INSIDE DOCKER WITHOUT PRIVILEDGE MODE ----------\n        volumes:\n            # PERSIST NODE_MODULES & HOME DIR\n            - /usr/app/node_modules/\n            - /home/app/\n            # HOST:CONTAINER\n            - ./storage:/var/app/storage\n        environment:\n            - TZ=Asia/Ho_Chi_Minh\n            - NODE_ENV=production\n            - PORT=6969\n            - BASE_URL=http://localhost:6969\n            - MONGODB_CONNECTION_STRING=mongodb://root:diginext@mongo:27017/diginext-cli?authSource=admin\n            - CLI_MODE=server\n            - JWT_SECRET= # <--- insert here\n            - JWT_EXPIRE_TIME=48h\n            - GOOGLE_CLIENT_ID= # <--- insert here\n            - GOOGLE_CLIENT_SECRET= # <--- insert here\n            - BUILDER=podman # <---- select PODMAN as a main builder here\n')),(0,r.kt)("p",null,"Similar with the above method, you can spin up your build server container with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"docker compose -f docker-compose.dev.yaml up -d\n")),(0,r.kt)("p",null,"Then access http://localhost:6969 to see if everything is up."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 I highly recommend using Podman as a builder instead of Docker due to security risk, read more about it here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/Security-51f72063bcd0461b93258af6d9459bb4?pvs=21"},"Security"))),(0,r.kt)("h3",{id:"podman-in-podman-runc-containerd"},"Podman in Podman? RunC? Containerd?"),(0,r.kt)("p",null,"Sorry, this is too much for me at the moment \ud83d\ude05\xa0 But I believe the concept should remain similar. "),(0,r.kt)("p",null,"Please feel free to contribute if you\u2019re up to. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udd0e For example: ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-inside-container"},"Podman in Podman"))))}m.isMDXComponent=!0}}]);