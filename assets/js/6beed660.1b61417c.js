(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(8),a=(n(0),n(266)),o=n(273),c={id:"plugins",title:"Hydra plugins types",sidebar_label:"Hydra plugins"},s={unversionedId:"advanced/plugins",id:"advanced/plugins",isDocsHomePage:!1,title:"Hydra plugins types",description:"Hydra can be extended via plugins.",source:"@site/docs/advanced/plugins.md",slug:"/advanced/plugins",permalink:"/docs/next/advanced/plugins",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/plugins.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619143409,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Hydra plugins",sidebar:"docs",previous:{title:"Compose API",permalink:"/docs/next/advanced/compose_api"},next:{title:"Application packaging",permalink:"/docs/next/advanced/app_packaging"}},u=[{value:"Plugin discovery",id:"plugin-discovery",children:[]},{value:"Plugin types",id:"plugin-types",children:[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]},{value:"SearchPathPlugin",id:"searchpathplugin",children:[]},{value:"ConfigSource",id:"configsource",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hydra can be extended via plugins.\nThe example plugins ",Object(a.b)(o.b,{to:"examples/plugins",mdxType:"GithubLink"},"here")," can help you get started with plugin development."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you develop plugins, please join the ",Object(a.b)("a",{href:"https://hydra-framework.zulipchat.com/#narrow/stream/233935-Hydra-plugin.20dev.20announcements"},"Plugin developer announcement chat channel"),"."))),Object(a.b)("h2",{id:"plugin-discovery"},"Plugin discovery"),Object(a.b)("p",null,"The plugin discovery process runs whenever Hydra starts. During plugin discovery, Hydra scans for plugins in all the submodules of ",Object(a.b)("inlineCode",{parentName:"p"},"hydra_plugins"),". Hydra will import each module and look for plugins defined in that module.\nAny module under ",Object(a.b)("inlineCode",{parentName:"p"},"hydra_plugins")," that is slow to import will slow down the startup of ",Object(a.b)("em",{parentName:"p"},"ALL")," Hydra applicaitons.\nPlugins with expensive imports can exclude individual files from this by prefixing them with ",Object(a.b)("inlineCode",{parentName:"p"},"_")," (but not ",Object(a.b)("inlineCode",{parentName:"p"},"__"),").\nFor example, the file ",Object(a.b)("inlineCode",{parentName:"p"},"_my_plugin_lib.py")," would not be imported and scanned, while ",Object(a.b)("inlineCode",{parentName:"p"},"my_plugin_lib.py")," would be."),Object(a.b)("h2",{id:"plugin-types"},"Plugin types"),Object(a.b)("h3",{id:"sweeper"},"Sweeper"),Object(a.b)("p",null,"A sweeper is responsible for converting command line arguments list into multiple jobs.\nFor example, the basic built-in sweeper takes arguments like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov,adam learning_rate=0.01,0.1 \n")),Object(a.b)("p",null,"And creates 4 jobs with the following parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"batch_size=128 optimizer=nesterov learning_rate=0.01\nbatch_size=128 optimizer=nesterov learning_rate=0.1\nbatch_size=128 optimizer=adam learning_rate=0.01\nbatch_size=128 optimizer=adam learning_rate=0.1\n")),Object(a.b)("h3",{id:"launcher"},"Launcher"),Object(a.b)("p",null,"Launchers are responsible for launching a job to a specific environment.\nA Launcher is taking a batch of argument lists like the one above and launches a job for each one.\nThe job uses those arguments to compose its configuration.\nThe basic launcher simply launches the job locally. "),Object(a.b)("h3",{id:"searchpathplugin"},"SearchPathPlugin"),Object(a.b)("p",null,"A config path plugin can manipulate the search path.\nThis can be used to influence the default Hydra configuration to be more appropriate to a specific environment,\nor just add new entries to the search path to make more configurations available to the Hydra app."),Object(a.b)("p",null,"SearchPathPlugin plugins are discovered automatically by Hydra and are being called to manipulate the search path before\nthe configuration is composed."),Object(a.b)("p",null,"Many other plugins also implement SearchPathPlugin to add their configuration to the config search path once they are installed. "),Object(a.b)("h3",{id:"configsource"},"ConfigSource"),Object(a.b)("p",null,"ConfigSource plugins can be used to allow Hydra to access configuration in non-standard locations when composing the config.\nThis can be used to enable to access an in-house private config store, or as a way to access configs from public sources like GitHub or S3."))}d.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},268:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(11),o=n(267),c=n(7),s=Object(i.createContext)({collectLink:function(){}}),u=n(269),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,b=e.href,g=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],m=e.autoAddBaseUrl,y=void 0===m||m,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(i.useContext)(s),D=f||b,P=Object(o.a)(D),A=null==D?void 0:D.replace("pathname://",""),x=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,V=Object(i.useRef)(!1),k=p?a.e:a.c,C=c.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!C&&P&&window.docusaurus.prefetch(x),function(){C&&d&&d.disconnect()}}),[x,C,P]);var _=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,L=!x||!P||_;return x&&P&&!_&&!h&&w.collectLink(x),L?r.a.createElement("a",Object.assign({href:x},D&&!P&&{target:"_blank",rel:"noopener noreferrer"},O)):r.a.createElement(k,Object.assign({},O,{onMouseEnter:function(){V.current||(window.docusaurus.preload(x),V.current=!0)},innerRef:function(e){var t,n;C&&e&&P&&(t=e,n=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:v,activeClassName:g}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(10),r=n(267);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(r){var i={};e.exports={useAllDocsData:function(){return i},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var i=n(23),r=n(38),a=n(272);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=i.useLocation().pathname;return a.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=i.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=i.useLocation().pathname;return a.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=i.useLocation().pathname;return a.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=i.useLocation().pathname;return a.getDocVersionSuggestions(n,r)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var i=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!i.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!i.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!i.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var i=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),a=r.activeVersion!==i;return{latestDocSuggestion:a?null==r?void 0:r.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:a?i:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var i=n(3),r=n(0),a=n.n(r),o=n(268),c=n(10),s=n(270);function u(e){return a.a.createElement(o.a,Object(i.a)({},e,{to:(t=e.to,r=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);