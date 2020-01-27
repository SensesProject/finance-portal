(function(t){function e(e){for(var i,n,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},r={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/policy-portal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0059":function(t,e,a){"use strict";var i=a("7211"),r=a.n(i);r.a},"02f6":function(t,e,a){"use strict";var i=a("c9cf"),r=a.n(i);r.a},"2a35":function(t,e,a){},"4f57":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"app",attrs:{id:"app"}},[a("SensesMenu"),t.isMobile?t._e():a("Navigation"),t._l(t.modulesData,(function(e){return a("Item",{key:e.path+"-"+t.reflowTime,attrs:{data:e},scopedSlots:t._u([{key:"figure",fn:function(e){return["intro"===e.data.path?a("Home"):"earth"===e.data.path?a("Earth",{attrs:{ratio:e.ratio}}):"end"===e.data.path?a("End"):a("div",[a("ModuleText",{attrs:{data:e.data,ratio:e.ratio}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})],1)]}}],null,!0)})}))],2)},s=[],n=(a("a4d3"),a("4de4"),a("4160"),a("0d03"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),o=a("9365"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",class:{scroller:!t.data.simple}},[a("figure",[t._t("figure",null,{ratio:t.ratio,data:t.data})],2),a("article")])},c=[],d=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"item",data:function(){return{offsetTop:0,height:0}},computed:f({ratio:function(){return Math.min(Math.min(Math.max(this.scrollY-this.offsetTop,0),this.height)/this.height*1.5,1)}},Object(d["c"])(["scrollY","screenHeight","loaded"])),methods:{reflow:function(){this.offsetTop=this.$el.offsetTop,this.height=this.$el.getBoundingClientRect().height}},watch:{ratio:function(t){this.$store.state.activePortalPath!==this.data.path&&(this.$store.state.activePortalPath=this.data.path)},loaded:function(){this.reflow()}},mounted:function(){setTimeout(this.reflow,1)},props:["data","simple"]},h=p,g=(a("f179"),a("2877")),v=Object(g["a"])(h,l,c,!1,null,"6d7318e2",null),m=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"down_arrow"},[t._v("↓")]),a("img",{staticClass:"plan",attrs:{src:(t.isMobile?"mobile":"desktop")+"/home.svg"}}),a("img",{staticClass:"plan",attrs:{src:(t.isMobile?"mobile":"desktop")+"/primer.svg"}})])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner"},[a("h1",[t._v("Welcome to the Senses Policy Portal.")]),a("div",{staticClass:"text"},[t._v(" Here you can explore a curated sets of learning module regarding Policy related aspects of Climate Change."),a("br"),t._v(" You can scroll three different chapters: "),a("span",{staticClass:"dotted"},[t._v("Budgets")]),t._v(", "),a("span",{staticClass:"dotted"},[t._v("Transitions")]),t._v(" and "),a("span",{staticClass:"dotted"},[t._v("Extreme Events")]),t._v("."),a("br"),t._v(" In the "),a("span",{staticClass:"dotted"},[t._v("Budgets")]),t._v(" chapter you will be introduced to the near and long-term plans to reach Net Zero emissions in the next century. The "),a("span",{staticClass:"dotted"},[t._v("Transitions")]),t._v(" section is dedicated to different kind of transitions that might occur. From energetic transitisions to land transitions, you will be provided with a complete overview of how our future will look like. The "),a("span",{staticClass:"dotted"},[t._v("Extreme Events")]),t._v(" chapter is dedicated to the extent and impact of Climate Change according to the predictions. ")])])}];function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var P={computed:O({},Object(d["c"])(["isMobile"]))},C=P,_=(a("5e9e"),Object(g["a"])(C,b,y,!1,null,"60e4bdfd",null)),T=_.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",{staticClass:"container",class:[{open:t.open},t.activePortal&&t.activePortal.path],on:{click:t.click}},[a("div",{staticClass:"info"},[t._v(t._s(t.activePortal&&t.activePortal.mainTopic))]),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v("Policy Portal")]),a("div",{staticClass:"position"},[a("div",{staticClass:"portal"},[t._v(t._s(t.activePortal&&t.activePortal.mainTopic))]),a("div",{staticClass:"circle"})]),a("img",{staticClass:"naviImage",attrs:{src:"desktop/navigation.svg"}})])]):t._e()},j=[];function E(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?E(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={computed:x({},Object(d["b"])(["activePortal"]),{},Object(d["c"])(["navigationOpen","loaded"]),{open:function(){return this.activePortal&&"intro"!==this.activePortal.path}}),methods:{click:function(){}}},S=D,F=(a("02f6"),Object(g["a"])(S,k,j,!1,null,"4cfc381d",null)),N=F.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"dot"}),a("div",{staticClass:"inner"},[a("h1",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v(" Continue on the Finance Portal. "),a("span",{staticClass:"right_arrow"},[t._v("→")])])])]),a("img",{staticClass:"backgroundPath",attrs:{src:"desktop/background/end.svg"}})])}],B={},$=B,A=(a("d56d"),Object(g["a"])($,R,M,!1,null,"56d1dd2b",null)),I=A.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"svg",staticClass:"svg"},[a("svg",{attrs:{width:"100%",height:"20000px",preserveAspectRatio:"xMinYMax slice",viewBox:"0 0 674 4511",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M151 0V230.251C151 248.93 166.069 264.112 184.748 264.25L387.051 265.75C405.73 265.888 420.799 281.07 420.799 299.749V660C420.799 678.778 436.022 694 454.799 694H637C655.778 694 671 709.222 671 728V1062.5C671 1081.28 655.778 1096.5 637 1096.5H454.799C436.022 1096.5 420.799 1111.72 420.799 1130.5V1562.24C420.799 1580.93 405.726 1596.11 387.044 1596.24L36.7559 1598.76C18.0739 1598.89 3 1614.07 3 1632.76V2140L6.81575 2833.51C6.91796 2852.09 21.9109 2867.14 40.4866 2867.32L387.41 2870.68C405.947 2870.86 420.924 2885.85 421.08 2904.39L424.625 3326.2L420.799 3755V4149V4320V4511",stroke:"url(#paint0_linear)",strokes:"#000","stroke-width":"1"}}),a("defs",[a("linearGradient",{attrs:{id:"paint0_linear",x1:"129.479",y1:"1723.14",x2:"169.746",y2:"4513.41",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#CBF5E5"}}),a("stop",{attrs:{offset:"0.268825","stop-color":"#00643B"}}),a("stop",{attrs:{offset:"0.339653","stop-color":"#8BDEBB"}}),a("stop",{attrs:{offset:"0.929892","stop-color":"#97E6C4"}}),a("stop",{attrs:{offset:"1","stop-color":"#B035C9"}})],1)],1)])])},G=[],W={watch:{ratio:function(t){}},props:["ratio"],mounted:function(){}},H=W,V=(a("b4bf"),Object(g["a"])(H,L,G,!1,null,"35c167de",null)),z=V.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"svg",staticClass:"svg"})},Y=[],U=a("3b75"),K=a.n(U),Z={watch:{ratio:function(t){this.vivus.setFrameProgress(t),this.vivus.stop()}},props:["ratio","svg"],mounted:function(){this.vivus=new K.a(this.$refs.svg,{type:"oneByOne",start:"manual",file:this.svg}),this.vivus.stop()}},q=Z,Q=(a("631f"),Object(g["a"])(q,J,Y,!1,null,"2063a348",null)),X=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[t.data.path]},[a("div",{staticClass:"header"},[t._v(t._s(t.data.mainTopic))]),a("div",{staticClass:"info"},[a("div",{staticClass:"credits"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.authors.join(" / ")))])]),a("div",{staticClass:"read"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.readingTime))])]),t.data.links?a("div",{staticClass:"tags"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},t._l(t.data.links,(function(e){return a("a",{key:e.title,attrs:{href:e.href}},[t._v(t._s(e.title))])})),0)]):t._e()]),a("div",{staticClass:"circle"}),a("div",{staticClass:"text"},[a("h2",{style:{left:40*t.ratio+"px"}},[t._v(t._s(t.data.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ratio>.3,expression:"ratio > 0.3"}],staticClass:"description",style:{left:10*t.ratio+"px"}},[t._v(t._s(t.data.description))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ratio>.5,expression:"ratio> 0.5"}],staticClass:"readbutton"},[a("span",{staticClass:"readspan"},[t._v("READ")])])]),a("div",{staticClass:"circle"}),a("div",{staticClass:"background"}),a("img",{staticClass:"backgroundPath",attrs:{src:"desktop/background/"+t.data.path+".svg"}})])},et=[],at={props:["data","ratio"]},it=at,rt=(a("59ee"),Object(g["a"])(it,tt,et,!1,null,"245c9706",null)),st=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"item",class:{visible:!0}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-1.svg",alt:"Earth"}}),t._m(0)]),a("div",{staticClass:"item",class:{visible:t.ratio>.4}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-2.svg",alt:"Earth"}}),t._m(1)]),a("div",{staticClass:"item",class:{visible:t.ratio>.6}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-3.svg",alt:"Earth"}}),t._m(2)]),a("img",{staticClass:"backgroundPath",attrs:{src:"desktop/background/earth.svg"}})])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Crops")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("crop failures")]),t._v(" in the next 100 years. ")]),a("div",{staticClass:"readbutton"},[t._v("GO TO SENSES EARTH")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Floodings")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("floodings")]),t._v(" in the next 100 years. ")]),a("div",{staticClass:"readbutton"},[t._v("GO TO SENSES EARTH")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Wildfires")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("wildfires")]),t._v(" in the next 100 years. ")]),a("div",{staticClass:"readbutton"},[t._v("GO TO SENSES EARTH")])])}],lt={props:["ratio"]},ct=lt,dt=(a("0059"),Object(g["a"])(ct,nt,ot,!1,null,"89c2034e",null)),ut=dt.exports;function ft(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ft(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ft(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var ht=!1,gt={name:"app",components:{Home:T,Navigation:N,End:I,Item:m,AnimatedSvg:X,ModuleText:st,Earth:ut,BackgroundLine:z,SensesMenu:o["a"]},computed:pt({},Object(d["c"])(["isMobile","activePortal","reflowTime"]),{},Object(d["b"])(["modulesData"])),methods:{getSvgPath:function(t){var e=this.isMobile?"mobile/":"desktop/";return e+t+".svg"},onScroll:function(t){var e=this;ht||(window.requestAnimationFrame((function(){e.$store.state.scrollY=window.scrollY,ht=!1})),ht=!0)},reflow:function(t){var e=this;this.$store.state.loaded=!0,this.$store.state.isMobile=window.innerWidth<700,this.$store.state.reflowTime=Date.now(),"load"===t.type&&setTimeout((function(){e.$store.state.activePortalPath="intro"}),1)}},mounted:function(){console.log(this.modulesData),window.addEventListener("scroll",this.onScroll),window.addEventListener("load",this.reflow),window.addEventListener("resize",this.reflow)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("load",this.reflow),window.removeEventListener("resize",this.reflow)}},vt=gt,mt=(a("5c0b"),Object(g["a"])(vt,r,s,!1,null,null,null)),bt=mt.exports,yt=(a("99af"),a("7db0"),a("4e82"),a("a9e3"),a("8ba4"),a("b7c5")),wt=[{path:"intro",mainTopic:"Intro",portalNum:-1,simple:!0},{path:"earth",mainTopic:"Extreme Events",portalNum:7},{path:"end",mainTopic:"Continue",portalNum:100}];i["a"].use(d["a"]);var Ot=new d["a"].Store({state:{scrollY:0,screenHeight:window.innerHeight,isMobile:window.innerWidth<700,activePortalPath:"intro",navigationOpen:!1,reflowTime:null,loaded:!1},getters:{modulesData:function(){var t;return(t=yt.modules.filter((function(t){return"Policy"===t.portal&&Number.isInteger(t.portalNum)}))).concat.apply(t,wt).sort((function(t,e){return t.portalNum-e.portalNum}))},activePortal:function(t,e){return e.modulesData.find((function(e){return e.path===t.activePortalPath}))}},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:Ot,render:function(t){return t(bt)}}).$mount("#app")},"59ee":function(t,e,a){"use strict";var i=a("fd8b"),r=a.n(i);r.a},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),r=a.n(i);r.a},"5e9e":function(t,e,a){"use strict";var i=a("a5d8"),r=a.n(i);r.a},"631f":function(t,e,a){"use strict";var i=a("2a35"),r=a.n(i);r.a},7211:function(t,e,a){},"8df2":function(t,e,a){},"9c0c":function(t,e,a){t.exports={colorViolet:"#4E40B2",colorRed:"#C8005F",colorOrange:"#e66b46",colorYellow:"#FFAC00",colorGreen:"#00CC84",colorBlue:"#00A5D5",colorPurple:"#B035C9",colorNeon:"#5263ff",colorAccent:"#4E40B2",colorDefault:"#202022",colorWhite:"#fff",colorPaleGray:"#d8d8e4",colorLightGray:"#a4a4ad",colorGray:"#8a8a93",colorDarkGray:"#75757a",colorDeepGray:"#48484c",colorBlack:"#202022"}},a5d8:function(t,e,a){},b4bf:function(t,e,a){"use strict";var i=a("4f57"),r=a.n(i);r.a},b7c5:function(t){t.exports=JSON.parse('{"modules":[{"portal":["Policy","Finance"],"portalNum":0,"mainTopic":"primer","path":"primer","title":"Primer to Climate Scenarios","description":"This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate change and climate impacts.","authors":["Fidel Thomet"],"readingTime":"45 minutes","gem":false,"scenariofinder":false,"data":false,"share":true,"bg":"bg3","alignRight":false,"tags":["Policy","Finance"],"dev":false},{"portal":"Policy","portalNum":1,"mainTopic":"Budget","path":"stocktake-1","title":"Global Stocktake I","description":"This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.","authors":["Christoph Bertram","Jonas Parnow"],"readingTime":"15 minutes","gem":"https://data.ene.iiasa.ac.at/iamc-1.5c-explorer//#/workspaces/share/1a6e44c8-0963-4f28-a871-2b81bfb11def","scenariofinder":"scenario","data":"dataset","share":true,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true,"links":[{"title":"data","href":"http://..."},{"title":"data2","href":"http://..."}]},{"portal":"Policy","portalNum":2,"mainTopic":"Budget","path":"stocktake-2","title":"Global Stocktake II","description":"Placeholder Text TODO - We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Jonas Parnow"],"readingTime":"15 minutes","gem":true,"scenariofinder":false,"data":false,"share":true,"bg":"bg2","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portalNum":3,"mainTopic":"Transitions","path":"transition-path-1","title":"Towards an Electric Future","description":"We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":"25 minutes","gem":false,"scenariofinder":false,"data":true,"share":false,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portalNum":4,"mainTopic":"Transitions","path":"transition-path-2","title":"Where will electricity come from?","description":"Placeholder Text TODO - We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":"25 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portalNum":null,"mainTopic":"Demand","path":"impact-demand","title":"What is the potential impact of the demand side?","description":"Placeholder Text TODO","authors":["Arnulf Grübler","Volker Krey","Charlie Wilson","Francesca Morini"],"readingTime":null,"gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true,"links":[{"title":"data","href":"http://..."},{"title":"data2","href":"http://..."}]},{"portal":"Policy","portalNum":6,"mainTopic":"Transitions","path":"land-transitions","title":"Land transitions","description":"Placeholder Text TODO - We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Florian Humpenöder","Alex Popp","Fidel Thomet"],"readingTime":"10 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portalNum":7,"mainTopic":"Transitions","path":"land-affected","title":"Extreme Events","description":"The extent and impact of crop failures, river floods, tropical cyclones, heatwaves, wildfires, and droughts depend on the underlying meteorological, hydrological, or climatological events as well as on human factors such as land use, water and agricultural management, and population density. In this module you\'ll learn how climate change contributes to extreme events and who is most affected by those.","authors":["Katja Frieler","Jan Volkholz","Fidel Thomet"],"readingTime":"25 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Finance","portalNum":1,"mainTopic":"Risks","path":"transition-risk","title":"Transition risk","description":"Discover finance risks related to transitions in a variety of sectors including: Fossil fuels, End User and Power","authors":["Nico Bauer","Bas van Ruijven","Nadia Zeissig"],"readingTime":"25 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portalNum":2,"mainTopic":"Opportunities","path":"investment-opportunities","title":"Investment Opportunities and Alignment: What are investment opportunities in a low carbon world?","description":"Placeholder Text","authors":["Bas van Ruijven","Christoph Bertram","Jonas Parnow"],"readingTime":"25 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portalNum":3,"mainTopic":"Risks","path":"physical-risks","title":"Physical Risks","description":"Placeholder Text TODO","authors":["Katja Frieler","Jan Volkholz ","Fidel Thomet"],"readingTime":"15 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Policy","portalNum":5,"mainTopic":"Transitions","path":"primary-energy","title":"Primary Energy","description":"Placeholder Text TODO - We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like.","authors":["Hannah Schwan","Dennis Ostendorf"],"readingTime":"15 minutes","gem":false,"scenariofinder":false,"data":true,"share":false,"bg":"bg3","alignRight":false,"microModule":true,"tags":["Finance"],"dev":true},{"portal":null,"portalNum":null,"mainTopic":"finder","path":"finder","title":"Scenario Finder","description":"Placeholder Text TODO","authors":["Jonas Parnow"],"readingTime":null,"gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":"Policy","portalNum":[8,9,10],"mainTopic":"Extreme Events","path":"earth","title":["Crop Failure","Wildfires","River Floods"],"description":["Discover how different regions will be impacted by crop failures in the next 100 years.","Discover how different regions will be impacted by wildfires in the next 100 years.","Discover how different regions will be impacted by river floods in the next 100 years."],"authors":["Fidel Thomet"],"readingTime":null,"gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portalNum":null,"mainTopic":"IIASA Database","path":"database","title":"Link to IIASA Database","description":"Placeholder Text TODO","authors":["Volker Krey"],"readingTime":null,"gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portalNum":null,"mainTopic":"Budget","path":"film","title":"CO2 Film","description":"Placeholder Text TODO","authors":["Boris Müller"],"readingTime":"8 minutes","gem":false,"scenariofinder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true}]}')},c016:function(t,e,a){},c9cf:function(t,e,a){},d56d:function(t,e,a){"use strict";var i=a("c016"),r=a.n(i);r.a},f179:function(t,e,a){"use strict";var i=a("8df2"),r=a.n(i);r.a},fd8b:function(t,e,a){}});
//# sourceMappingURL=app.7da62e43.js.map