(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{174:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return o})),a.d(r,"metadata",(function(){return p})),a.d(r,"toc",(function(){return l})),a.d(r,"default",(function(){return s}));var n=a(3),t=a(8),i=(a(0),a(266)),o={id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},p={unversionedId:"plugins/nevergrad_sweeper",id:"version-1.0/plugins/nevergrad_sweeper",isDocsHomePage:!1,title:"Nevergrad Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/nevergrad_sweeper.md",slug:"/plugins/nevergrad_sweeper",permalink:"/docs/plugins/nevergrad_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/nevergrad_sweeper.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619143409,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Nevergrad Sweeper plugin",sidebar:"version-1.0/docs",previous:{title:"Ax Sweeper plugin",permalink:"/docs/plugins/ax_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/advanced/hydra-command-line-flags"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example of training using Nevergrad hyperparameter search",id:"example-of-training-using-nevergrad-hyperparameter-search",children:[]},{value:"Defining the parameters",id:"defining-the-parameters",children:[{value:"Defining through commandline override",id:"defining-through-commandline-override",children:[]},{value:"Defining through config file",id:"defining-through-config-file",children:[]}]}],c={toc:l};function s(e){var r=e.components,a=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-nevergrad-sweeper/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-nevergrad-sweeper",alt:"PyPI"})),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-nevergrad-sweeper",alt:"PyPI - License"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-nevergrad-sweeper",alt:"PyPI - Python Version"}),"\n",Object(i.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-nevergrad-sweeper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-nevergrad-sweeper.svg",alt:"PyPI - Downloads"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_nevergrad_sweeper/example"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_nevergrad_sweeper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," is a derivative-free optimization platform providing a library of state-of-the-art algorithms for hyperparameter search. This plugin provides Hydra applications a mechanism to use ",Object(i.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," algorithms to optimize experiment/application parameters."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-nevergrad-sweeper --upgrade\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=nevergrad")," to your command. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/sweeper: nevergrad\n")),Object(i.b)("p",null,"The default configuration is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_nevergrad_sweeper/hydra_plugins/hydra_nevergrad_sweeper/config.py"},"here"),"."),Object(i.b)("h2",{id:"example-of-training-using-nevergrad-hyperparameter-search"},"Example of training using Nevergrad hyperparameter search"),Object(i.b)("p",null,"We include an example of how to use this plugin. The file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_nevergrad_sweeper/example/my_app.py"},Object(i.b)("inlineCode",{parentName:"a"},"example/my_app.py"))," implements an example of minimizing a (dummy) function using a mixture of continuous and discrete parameters."),Object(i.b)("p",null,"You can discover the Nevergrad sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app hydra/sweeper=nevergrad --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,your_app:!0,"hydra/sweeper":"nevergrad","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_nevergrad_sweeper.core.NevergradSweeper\noptim:\n  optimizer: OnePlusOne\n  budget: 80\n  num_workers: 10\n  noisy: false\n  maximize: false\n  seed: null\nparametrization: {}\nversion: 1\n")),Object(i.b)("p",null,"The function decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"db: mnist\nlr: 0.12\ndropout: 0.33\nbatch_size=4\n")),Object(i.b)("p",null,"To run hyperparameter search and look for the best parameters for this function, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_nevergrad_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py -m\n")),Object(i.b)("p",null,"You can also override the search space parametrization:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py --multirun db=mnist,cifar batch_size=4,8,16 \\\n'lr=tag(log, interval(0.001, 1))' 'dropout=interval(0,1)'\n")),Object(i.b)("p",null,"The initialization of the sweep and the first 5 evaluations (out of 100) look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"[2020-10-08 20:13:53,592][HYDRA] NevergradSweeper(optimizer=OnePlusOne, budget=100, num_workers=10) minimization\n[2020-10-08 20:13:53,593][HYDRA] with parametrization Dict(batch_size=Choice(choices=Tuple(4,8,16),weights=Array{(1,3)}),db=Choice(choices=Tuple(mnist,cifar),weights=Array{(1,2)}),dropout=Scalar{Cl(0,1,b)}[sigma=Log{exp=2.0}],lr=Log{exp=3.162277660168379,Cl(0.001,1,b)}):{'db': 'mnist', 'lr': 0.03162277660168379, 'dropout': 0.5, 'batch_size': 8}\n[2020-10-08 20:13:53,593][HYDRA] Sweep output dir: multirun/2020-10-08/20-13-53\n[2020-10-08 20:13:55,023][HYDRA] Launching 10 jobs locally\n[2020-10-08 20:13:55,023][HYDRA]        #0 : db=mnist lr=0.03162277660168379 dropout=0.5 batch_size=16\n[2020-10-08 20:13:55,217][__main__][INFO] - dummy_training(dropout=0.500, lr=0.032, db=mnist, batch_size=16) = 13.258\n[2020-10-08 20:13:55,218][HYDRA]        #1 : db=cifar lr=0.018178519762066934 dropout=0.5061074452336254 batch_size=4\n[2020-10-08 20:13:55,408][__main__][INFO] - dummy_training(dropout=0.506, lr=0.018, db=cifar, batch_size=4) = 0.278\n[2020-10-08 20:13:55,409][HYDRA]        #2 : db=cifar lr=0.10056825918734161 dropout=0.6399687427725211 batch_size=4\n[2020-10-08 20:13:55,595][__main__][INFO] - dummy_training(dropout=0.640, lr=0.101, db=cifar, batch_size=4) = 0.329\n[2020-10-08 20:13:55,596][HYDRA]        #3 : db=mnist lr=0.06617542958182834 dropout=0.5059497416026679 batch_size=8\n[2020-10-08 20:13:55,812][__main__][INFO] - dummy_training(dropout=0.506, lr=0.066, db=mnist, batch_size=8) = 5.230\n[2020-10-08 20:13:55,813][HYDRA]        #4 : db=mnist lr=0.16717013388679514 dropout=0.6519070394318255 batch_size=4\n...\n[2020-10-08 20:14:27,988][HYDRA] Best parameters: db=cifar lr=0.11961221693764439 dropout=0.37285878409770895 batch_size=4 \n")),Object(i.b)("p",null,"and the final 2 evaluations look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"[HYDRA]     #8 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA]     #9 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA] Best parameters: db=mnist batch_size=4 lr=0.094 dropout=0.381\n")),Object(i.b)("p",null,"The run also creates an ",Object(i.b)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file in your sweep folder with the parameters recommended by the optimizer:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"best_evaluated_result: 0.381\n\nbest_evaluated_params:\n  batch_size: 4\n  db: mnist\n  dropout: 0.381\n  lr: 0.094\n\nname: nevergrad\n")),Object(i.b)("h2",{id:"defining-the-parameters"},"Defining the parameters"),Object(i.b)("p",null,"The plugin supports two types of parameters: ",Object(i.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Choice"},"Choices")," and ",Object(i.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Scalar"},"Scalars"),". They can be defined either through config file or commandline override."),Object(i.b)("h3",{id:"defining-through-commandline-override"},"Defining through commandline override"),Object(i.b)("p",null,"Hydra provides a override parser that support rich syntax. More documentation can be found in (",Object(i.b)("a",{parentName:"p",href:"/docs/advanced/override_grammar/basic"},"OverrideGrammer/Basic"),") and (",Object(i.b)("a",{parentName:"p",href:"/docs/advanced/override_grammar/extended"},"OverrideGrammer/Extended"),"). We recommend you go through them first before proceeding with this doc."),Object(i.b)("h4",{id:"choices"},"Choices"),Object(i.b)("p",null,"To override a field with choices:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"'key=1,5'\n'key=shuffle(range(1, 8))'      \n'key=range(1,5)'\n")),Object(i.b)("p",null,"You can tag an override with ",Object(i.b)("inlineCode",{parentName:"p"},"ordered")," to indicate it's a ",Object(i.b)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.TransitionChoice"},Object(i.b)("inlineCode",{parentName:"a"},"TransitionChoice"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"`key=tag(ordered, choice(1,2,3))`\n")),Object(i.b)("h4",{id:"scalar"},"Scalar"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"`key=interval(1,12)`             # Interval are float by default\n`key=int(interval(1,8))`         # Scalar bounds cast to a int\n`key=tag(log, interval(1,12))`   # call ng.p.Log if tagged with log \n")),Object(i.b)("h3",{id:"defining-through-config-file"},"Defining through config file"),Object(i.b)("h4",{id:"choices-1"},"Choices"),Object(i.b)("p",null,"Choices are defined with a list in a config file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"db:\n  - mnist\n  - cifar\n")),Object(i.b)("h4",{id:"scalars"},"Scalars"),Object(i.b)("p",null,"Scalars can be defined in config files, with fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"init"),": optional initial value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lower")," : optional lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"upper"),": optional upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," for log distributed values"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": optional step size for looking for better parameters. In linear mode, this is an additive step; in logarithmic mode it is multiplicative."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"integer"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," for integers (favor floats over integers whenever possible)")),Object(i.b)("p",null,"Providing only ",Object(i.b)("inlineCode",{parentName:"p"},"lower")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upper")," bound will set the initial value to the middle of the range and the step to a sixth of the range.\n",Object(i.b)("strong",{parentName:"p"},"Note"),": unbounded scalars (scalars with no upper and/or lower bounds) can only be defined through a config file."))}s.isMDXComponent=!0},266:function(e,r,a){"use strict";a.d(r,"a",(function(){return d})),a.d(r,"b",(function(){return u}));var n=a(0),t=a.n(n);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=t.a.createContext({}),s=function(e){var r=t.a.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},d=function(e){var r=s(e.components);return t.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},m=t.a.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return a?t.a.createElement(u,p(p({ref:r},c),{},{components:a})):t.a.createElement(u,p({ref:r},c))}));function u(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=a[c];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);