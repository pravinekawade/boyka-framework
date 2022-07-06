"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1934],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(5731),a=n(2706),o=(n(5721),n(167)),i=["components"],s={sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},u=void 0,c={unversionedId:"guides/api/compose-request",id:"guides/api/compose-request",title:"\ud83c\udfd7\ufe0f Compose Request",description:"For API automation, we have created ApiRequest class which you can utilize to build API requests.",source:"@site/docs/framework-docs/guides/api/compose-request.md",sourceDirName:"guides/api",slug:"/guides/api/compose-request",permalink:"/boyka-framework/docs/guides/api/compose-request",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/guides/api/compose-request.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1657130264,formattedLastUpdatedAt:"7/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration file",permalink:"/boyka-framework/docs/guides/api/setup-config"},next:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"}},p={},l=[{value:"Example",id:"example",level:2}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For API automation, we have created ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequest")," class which you can utilize to build API requests."),(0,o.kt)("p",null,"This class has a builder pattern which allows you to build API requests in a fluent way."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's create an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequest")," and build a request for ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users")," with body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// This key refers to config key under API section.\nfinal String API_CONFIG_KEY = "test_reqres";\n\n// Create request body object.\nfinal User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\n// Build API request.\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .configKey (API_CONFIG_KEY)\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Similarly, you can build a request for other types of requests by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestMethod")," enum."))))}m.isMDXComponent=!0}}]);