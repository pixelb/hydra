(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1496],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5554:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=n(2122),r=n(9756),o=(n(7294),n(3905)),a=["components"],l={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},s=void 0,u={unversionedId:"development/contributing",id:"version-0.11/development/contributing",isDocsHomePage:!1,title:"Contributing",description:"This guide assumes you have forked and checked-out the repository.",source:"@site/versioned_docs/version-0.11/development/contributing.md",sourceDirName:"development",slug:"/development/contributing",permalink:"/docs/0.11/development/contributing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/development/contributing.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630064856,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"version-0.11/docs",previous:{title:"Ray example",permalink:"/docs/0.11/advanced/ray_example"},next:{title:"Release process",permalink:"/docs/0.11/development/release"}},d=[{value:"Environment setup",id:"environment-setup",children:[]},{value:"Nox",id:"nox",children:[]},{value:"Code style guide",id:"code-style-guide",children:[]},{value:"Testing",id:"testing",children:[{value:"With pytest",id:"with-pytest",children:[]},{value:"With nox",id:"with-nox",children:[]}]},{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide assumes you have forked and checked-out the repository.\nIt is recommended that you install Hydra in a virtual environment like conda or virtualenv."),(0,o.kt)("h3",{id:"environment-setup"},"Environment setup"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -y\n")),(0,o.kt)("div",{class:"alert alert--info",role:"alert"},(0,o.kt)("strong",null,"NOTE"),": The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on supported version of Python."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Activate the environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"conda activate hydra38\n")),(0,o.kt)("p",null,"From the source tree, install Hydra in development mode with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pip install -e ".[dev]" -e .\n')),(0,o.kt)("h2",{id:"nox"},"Nox"),(0,o.kt)("p",null,"Hydra is using a test automation tool called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/theacodes/nox"},"nox")," to manage tests, linting, code coverage etc.\n",(0,o.kt)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. You can see the full list of nox sessions with ",(0,o.kt)("inlineCode",{parentName:"p"},"nox -l")," and run specific sessions\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),(0,o.kt)("h2",{id:"code-style-guide"},"Code style guide"),(0,o.kt)("p",null,"The code need to pass verification by the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking")),(0,o.kt)("p",null,"The easiest way to run all the required verifications is with ",(0,o.kt)("inlineCode",{parentName:"p"},"nox -s lint"),"."),(0,o.kt)("p",null,"It is also recommended that you install pre-commit hooks (use ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit install"),"), this will ensure that those tests\nare ran just before you commit your code."),(0,o.kt)("p",null,"Any pull request that does not pass the linting will fail the automated testing."),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("h3",{id:"with-pytest"},"With pytest"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest plugins/NAME"),"."),(0,o.kt)("div",{class:"alert alert--info",role:"alert"},(0,o.kt)("strong",null,"NOTE"),": Some plugins supports fewer versions of Python than the Hydra core."),(0,o.kt)("h3",{id:"with-nox"},"With nox"),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'nox -s "test_core-3.6(pip install)"')," : Test on Python 3.6 with ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install")," as installation method"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8(pip install -e)"')," : Test plugins on Python 3.8 with ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install -e")," as installation method  ")),(0,o.kt)("h2",{id:"news-entries"},"NEWS Entries"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWS.md")," file is managed using ",(0,o.kt)("inlineCode",{parentName:"p"},"towncrier")," and all non trivial changes\nmust be accompanied by a news entry."),(0,o.kt)("p",null,"To add an entry to the news file, first you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",(0,o.kt)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),(0,o.kt)("p",null,"Once you have an issue or pull request, you take the number and you create a\nfile inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"news/")," directory named after that issue number with one of the following extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removal")," : Removal or deprecation of a feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feature")," : New feature"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bugfix")," : Bug fix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugin")," : New plugin, or an update to an existing plugin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure of Hydra"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs")," : Major addition or updates to documentation")),(0,o.kt)("p",null,"If your issue or PR number is ",(0,o.kt)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, then you would\ncreate a file ",(0,o.kt)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",(0,o.kt)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"news/NNNN.removal"),"). Likewise if a PR touches multiple issues/PRs you may\ncreate a file for each of them with the exact same contents and Towncrier will\ndeduplicate them."),(0,o.kt)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),(0,o.kt)("p",null,"The contents of this file is markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),(0,o.kt)("p",null,"In order to maintain a consistent style in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'))}c.isMDXComponent=!0}}]);