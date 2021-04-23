(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{266:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(266)),i={id:"composition",title:"Config composition",sidebar_label:"Config composition"},s={unversionedId:"tutorial/composition",id:"version-0.11/tutorial/composition",isDocsHomePage:!1,title:"Config composition",description:"As software gets more complex, we resort to modularity and composition to keep it manageable.",source:"@site/versioned_docs/version-0.11/tutorial/5_composition.md",slug:"/tutorial/composition",permalink:"/docs/0.11/tutorial/composition",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/5_composition.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619143409,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Config composition",sidebar:"version-0.11/docs",previous:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"},next:{title:"Multi-run",permalink:"/docs/0.11/tutorial/multi-run"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As software gets more complex, we resort to modularity and composition to keep it manageable.\nWe can do the same with configs: suppose we want our working example to support multiple databases, with\nmultiple schemas per database, and different UIs. We wouldn't write a separate class\nfor each permutation of db, schema and UI, so we shouldn't write separate configs either. We use\nthe same solution in configuration as in writing the underlying software: composition. "),Object(r.b)("p",null,"To do this in Hydra, we first add a ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," and a ",Object(r.b)("inlineCode",{parentName:"p"},"ui")," config group:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 postgresql.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 schema\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 school.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 support.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 warehouse.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 ui\n\u2502\xa0\xa0     \u251c\u2500\u2500 full.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 view.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(r.b)("p",null,"With these configs, we already have 12 possible combinations. Without composition we would need 12 separate configs,\nand a single change (such as renaming ",Object(r.b)("inlineCode",{parentName:"p"},"db.user")," to ",Object(r.b)("inlineCode",{parentName:"p"},"db.username"),") would need to be done separately in every one of them. "),Object(r.b)("p",null,"This is a maintainability nightmare -- but composition can come to the rescue."),Object(r.b)("p",null,"Configuration file: ",Object(r.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - db: mysql\n  - ui: full\n  - schema: school\n")),Object(r.b)("p",null,"The defaults are ordered:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If there are two configurations that defines the same value, the second one would win. "),Object(r.b)("li",{parentName:"ul"},"If two configurations are contributing to the same dictionary the result would be the combined dictionary.")),Object(r.b)("p",null,"When running this, we will compose a configuration with ",Object(r.b)("inlineCode",{parentName:"p"},"mysql"),", ",Object(r.b)("inlineCode",{parentName:"p"},"full")," ui and the ",Object(r.b)("inlineCode",{parentName:"p"},"school")," database schema (which we are seeing for the first time here):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nschema:\n  database: school\n  tables:\n  - fields:\n    - name: string\n    - class: int\n    name: students\n  - fields:\n    - profession: string\n    - time: data\n    - class: int\n    name: exams\nui:\n  windows:\n    create_db: true\n    view: true\n")),Object(r.b)("p",null,"In much the same way you can compose any of the other 11 configurations by adding appropriate overrides such as ",Object(r.b)("inlineCode",{parentName:"p"},"db=postgresql"),"."))}p.isMDXComponent=!0}}]);