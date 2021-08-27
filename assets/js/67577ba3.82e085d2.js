(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9687],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4274:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={id:"config_path_changes",title:"Config path changes",hide_title:!0},l=void 0,p={unversionedId:"upgrades/0.11_to_1.0/config_path_changes",id:"version-1.1/upgrades/0.11_to_1.0/config_path_changes",isDocsHomePage:!1,title:"Config path changes",description:"Config path changes",source:"@site/versioned_docs/version-1.1/upgrades/0.11_to_1.0/config_path_changes.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/config_path_changes",permalink:"/docs/upgrades/0.11_to_1.0/config_path_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/0.11_to_1.0/config_path_changes.md",version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630064856,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"config_path_changes",title:"Config path changes",hide_title:!0},sidebar:"version-1.1/docs",previous:{title:"Automatic schema-matching",permalink:"/docs/upgrades/1.0_to_1.1/automatic_schema_matching"},next:{title:"Adding an @package directive",permalink:"/docs/upgrades/0.11_to_1.0/adding_a_package_directive"}},s=[{value:"Config path changes",id:"config-path-changes",children:[]},{value:"Migration examples",id:"migration-examples",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"config-path-changes"},"Config path changes"),(0,i.kt)("p",null,"Hydra 1.0 adds a new ",(0,i.kt)("inlineCode",{parentName:"p"},"config_name")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," and changes the meaning of the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_path"),".\nPreviously, ",(0,i.kt)("inlineCode",{parentName:"p"},"config_path")," encapsulated two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search path relative to the declaring python file."),(0,i.kt)("li",{parentName:"ul"},"Optional config file (.yaml) to load.")),(0,i.kt)("p",null,"Having both of those things in the same parameter does not work well if you consider configs that are not files\nsuch as Structured Configs. In addition, it prevents overriding just the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_name")," or just the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_path")),(0,i.kt)("p",null,"A second change is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"config_name")," no longer requires a file extension. For configs files the ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," extension\nwill be added automatically when the file is loaded."),(0,i.kt)("p",null,"This change is backward compatible, but support for the old style is deprecated and will be removed in the next major Hydra version."),(0,i.kt)("h2",{id:"migration-examples"},"Migration examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="config.yaml")\n')),(0,i.kt)("p",null,"Becomes: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_name="config")\n')),(0,i.kt)("p",null,"And"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},'@hydra.main(config_path="conf/config.yaml")\n')),(0,i.kt)("p",null,"Becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},'@hydra.main(config_path="conf", config_name="config")\n')))}u.isMDXComponent=!0}}]);