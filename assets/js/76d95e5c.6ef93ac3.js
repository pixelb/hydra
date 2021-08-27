(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2920],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),u=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(g,".").concat(d)]||c[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return g},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={id:"logging",title:"Logging",sidebar_label:"Logging"},g=void 0,u={unversionedId:"tutorial/logging",id:"version-0.11/tutorial/logging",isDocsHomePage:!1,title:"Logging",description:"People often do not use Python logging due to the setup cost.",source:"@site/versioned_docs/version-0.11/tutorial/9_logging.md",sourceDirName:"tutorial",slug:"/tutorial/logging",permalink:"/docs/0.11/tutorial/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/9_logging.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630064856,formattedLastUpdatedAt:"8/27/2021",sidebarPosition:9,frontMatter:{id:"logging",title:"Logging",sidebar_label:"Logging"},sidebar:"version-0.11/docs",previous:{title:"Output/Working directory",permalink:"/docs/0.11/tutorial/working_directory"},next:{title:"Debugging",permalink:"/docs/0.11/tutorial/debugging"}},p=[],s={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),(0,i.kt)("p",null,"By default Hydra logs at the INFO level to both console and a file."),(0,i.kt)("p",null,"Example of logging with Hydra:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import logging\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg):\n    log.info("Info level message")\n    log.debug("Debug level message")\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),(0,i.kt)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:\nExamples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Set ",(0,i.kt)("strong",{parentName:"li"},"all")," loggers log level to ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra.verbose=__main__")," : Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"__main__")," logger log level to ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra.verbose=[__main__,hydra]"),": Set the log levels of the loggers ",(0,i.kt)("inlineCode",{parentName:"li"},"__main__")," and hydra log to ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG"))),(0,i.kt)("p",null,"Example output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),(0,i.kt)("p",null,"Logging can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11/configure_hydra/logging"},"customized"),"."))}c.isMDXComponent=!0}}]);