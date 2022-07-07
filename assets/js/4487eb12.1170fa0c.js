"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(5721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(5731),r=n(2706),i=(n(5721),n(167)),s=["components"],o={title:"ApiRequest",sidebar_position:1},l=void 0,u={unversionedId:"builders/api-request",id:"builders/api-request",title:"ApiRequest",description:"createRequest",source:"@site/docs/api/builders/api-request.md",sourceDirName:"builders",slug:"/builders/api-request",permalink:"/boyka-framework/api/builders/api-request",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/builders/api-request.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1657188821,formattedLastUpdatedAt:"7/7/2022",sidebarPosition:1,frontMatter:{title:"ApiRequest",sidebar_position:1},sidebar:"api",previous:{title:"VerifyElementActions",permalink:"/boyka-framework/api/actions/verify-element-actions"},next:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"}},p={},d=[{value:"<code>createRequest</code>",id:"createrequest",level:2},{value:"<code>configKey</code>",id:"configkey",level:2},{value:"<code>contentType</code>",id:"contenttype",level:2},{value:"<code>header</code>",id:"header",level:2},{value:"<code>path</code>",id:"path",level:2},{value:"<code>pathParam</code>",id:"pathparam",level:2},{value:"<code>queryParam</code>",id:"queryparam",level:2},{value:"<code>body</code>",id:"body",level:2},{value:"<code>bodyObject</code>",id:"bodyobject",level:2},{value:"<code>method</code>",id:"method",level:2},{value:"<code>userName</code>",id:"username",level:2},{value:"<code>password</code>",id:"password",level:2},{value:"<code>create</code>",id:"create",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"createrequest"},(0,i.kt)("inlineCode",{parentName:"h2"},"createRequest")),(0,i.kt)("p",null,"This is a builder method to build ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always start composing the request with ",(0,i.kt)("inlineCode",{parentName:"p"},"createRequest")," method."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"configkey"},(0,i.kt)("inlineCode",{parentName:"h2"},"configKey")),(0,i.kt)("p",null,"This method is used to set the configuration key corresponding to API config block in ",(0,i.kt)("inlineCode",{parentName:"p"},"boyka-config.json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n// highlight-next-line\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"contenttype"},(0,i.kt)("inlineCode",{parentName:"h2"},"contentType")),(0,i.kt)("p",null,"This method is used to set the content type of the request. Allowed values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FORM_URLENCODED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," (",(0,i.kt)("strong",{parentName:"li"},"default"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTIPART_FORM_DATA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLAIN_TEXT"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n// highlight-next-line\n    .contentType (ContentType.JSON)\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"header"},(0,i.kt)("inlineCode",{parentName:"h2"},"header")),(0,i.kt)("p",null,"This method is used to set the header of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n// highlight-start\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n// highlight-end\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"path"},(0,i.kt)("inlineCode",{parentName:"h2"},"path")),(0,i.kt)("p",null,"This method is used to set the path of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n// highlight-next-line\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"pathparam"},(0,i.kt)("inlineCode",{parentName:"h2"},"pathParam")),(0,i.kt)("p",null,"This method is used to set the path parameter(s) of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n// highlight-next-line\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,i.kt)("h2",{id:"queryparam"},(0,i.kt)("inlineCode",{parentName:"h2"},"queryParam")),(0,i.kt)("p",null,"This method is used to set the query parameter(s) of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .queryParam ("param1", "value1")\n    .create ();\n')),(0,i.kt)("h2",{id:"body"},(0,i.kt)("inlineCode",{parentName:"h2"},"body")),(0,i.kt)("p",null,"This method is used to set the body of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .body ("{\\"name\\":\\"John\\",\\"job\\":\\"Developer\\"}")\n    .create ();\n')),(0,i.kt)("h2",{id:"bodyobject"},(0,i.kt)("inlineCode",{parentName:"h2"},"bodyObject")),(0,i.kt)("p",null,"This method is used to set the body of the request using Java object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\nfinal ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .bodyObject (user)\n    .create ();\n')),(0,i.kt)("h2",{id:"method"},(0,i.kt)("inlineCode",{parentName:"h2"},"method")),(0,i.kt)("p",null,"This method is used to set the method of the request. Following are the allowed values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPTIONS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACE"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n// highlight-next-line\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,i.kt)("h2",{id:"username"},(0,i.kt)("inlineCode",{parentName:"h2"},"userName")),(0,i.kt)("p",null,"This method is used to set the user name of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .userName ("wasiq")\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,i.kt)("h2",{id:"password"},(0,i.kt)("inlineCode",{parentName:"h2"},"password")),(0,i.kt)("p",null,"This method is used to set the password of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n    .userName ("wasiq")\n// highlight-next-line\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,i.kt)("h2",{id:"create"},(0,i.kt)("inlineCode",{parentName:"h2"},"create")),(0,i.kt)("p",null,"This method will create ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always end composing the request with ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," method."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .create ();\n')))}h.isMDXComponent=!0}}]);