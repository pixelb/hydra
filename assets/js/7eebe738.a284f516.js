(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6490],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:e},l),{},{components:r})):n.createElement(m,a({ref:e},l))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6712:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={id:"intro",title:"Tutorials intro"},u=void 0,s={unversionedId:"tutorials/intro",id:"version-1.1/tutorials/intro",isDocsHomePage:!1,title:"Tutorials intro",description:"Basic Tutorial",source:"@site/versioned_docs/version-1.1/tutorials/intro.md",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/tutorials/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/intro.md",version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630064856,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"intro",title:"Tutorials intro"},sidebar:"version-1.1/docs",previous:{title:"Getting started",permalink:"/docs/intro"},next:{title:"A simple command-line application",permalink:"/docs/tutorials/basic/your_first_app/simple_cli"}},l=[{value:"Basic Tutorial",id:"basic-tutorial",children:[]},{value:"Structured configs",id:"structured-configs",children:[]}],p={toc:l};function f(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"basic-tutorial"},"Basic Tutorial"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial")," covers basic Hydra concepts."),(0,i.kt)("h3",{id:"structured-configs"},"Structured configs"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/structured_config/intro"},"Structured Configs Tutorial")," shows how to create strongly typed configurations."))}f.isMDXComponent=!0}}]);