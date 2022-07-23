"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3252],{167:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5856:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(744),o=n(4690),a=(n(5721),n(167)),i=["components"],c={title:"KeyboardActions",sidebar_position:3},s=void 0,p={unversionedId:"actions/keyboard-actions",id:"actions/keyboard-actions",title:"KeyboardActions",description:"appendText",source:"@site/docs/api/actions/keyboard-actions.md",sourceDirName:"actions",slug:"/actions/keyboard-actions",permalink:"/boyka-framework/api/actions/keyboard-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/keyboard-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1658589736,formattedLastUpdatedAt:"Jul 23, 2022",sidebarPosition:3,frontMatter:{title:"KeyboardActions",sidebar_position:3},sidebar:"api",previous:{title:"ElementActions",permalink:"/boyka-framework/api/actions/element-actions"},next:{title:"MouseActions",permalink:"/boyka-framework/api/actions/mouse-actions"}},l={},u=[{value:"<code>appendText</code>",id:"appendtext",level:2},{value:"<code>enterText</code>",id:"entertext",level:2},{value:"<code>pressKey</code>",id:"presskey",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"appendtext"},(0,a.kt)("inlineCode",{parentName:"h2"},"appendText")),(0,a.kt)("p",null,"This method is used to append the given text to the given element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.KeyboardActions.appendText;\n. . .\nappendText (locator, text);\n")),(0,a.kt)("h2",{id:"entertext"},(0,a.kt)("inlineCode",{parentName:"h2"},"enterText")),(0,a.kt)("p",null,"This method is used to enter the given text to the given element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.KeyboardActions.enterText;\n. . .\nenterText (locator, text);\n")),(0,a.kt)("h2",{id:"presskey"},(0,a.kt)("inlineCode",{parentName:"h2"},"pressKey")),(0,a.kt)("p",null,"This method is used to press the given key to the given element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.KeyboardActions.pressKey;\n. . .\npressKey (locator, key);\n")))}m.isMDXComponent=!0}}]);