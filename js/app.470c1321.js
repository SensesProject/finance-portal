(function(t){function e(e){for(var o,i,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,n=1;n<r.length;n++){var l=r[n];0!==s[l]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},s={app:0},a=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/policy-portal/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var f=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"019b":function(t,e,r){},"034f":function(t,e,r){"use strict";var o=r("85ec"),s=r.n(o);s.a},"3f40":function(t,e,r){"use strict";var o=r("79d3"),s=r.n(o);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"app",attrs:{id:"app"}},[r("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[r("Slide1",{attrs:{ratio:t.ratio}})]}}])}),r("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[r("Slide2",{attrs:{ratio:t.ratio}})]}}])}),r("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[r("Slide1",{attrs:{ratio:t.ratio}})]}}])}),r("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[r("Slide2",{attrs:{ratio:t.ratio}})]}}])}),r("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[r("Slide1",{attrs:{ratio:t.ratio}})]}}])})],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("figure",[t._m(0),t._t("figure",null,{ratio:t.ratio})],2),r("article")])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("div",{staticClass:"credits"},[r("div",{staticClass:"icon"}),r("span",[t._v("PARNOW J., BERTHRAM C.")])]),r("div",{staticClass:"read"},[r("div",{staticClass:"icon"}),r("span",[t._v("15 MINS.")])]),r("div",{staticClass:"tags"},[r("div",{staticClass:"icon"}),r("span",[t._v("sdjapsid asdasd")])])])}],l=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),c=r("2f62");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(l["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"item",data:function(){return{offsetTop:0,height:0}},computed:d({ratio:function(){return Math.min(Math.max(this.scrollY-this.offsetTop,0),this.height-1.2*this.screenHeight)/(this.height-1.2*this.screenHeight)}},Object(c["b"])(["scrollY","screenHeight"])),mounted:function(){this.offsetTop=this.$el.offsetTop,this.height=this.$el.getBoundingClientRect().height}},u=p,h=(r("3f40"),r("2877")),F=Object(h["a"])(u,i,n,!1,null,"d8fadf68",null),y=F.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slide"},[r("svg",{attrs:{width:"763px",height:"349px",viewBox:"0 0 763 349",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("title",[t._v("Group 4")]),r("desc",[t._v("Created with Sketch.")]),r("defs",[r("linearGradient",{attrs:{x1:"1.06476664%",y1:"100%",x2:"14.4284751%",y2:"100%",id:"linearGradient-1"}},[r("stop",{attrs:{"stop-color":"#5263FF",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#0BBFB0",offset:"100%"}})],1),r("linearGradient",{attrs:{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"linearGradient-2"}},[r("stop",{attrs:{"stop-color":"#0BBFB0",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),r("linearGradient",{attrs:{x1:"50%",y1:"62.503104%",x2:"50%",y2:"3.061617e-15%",id:"linearGradient-3"}},[r("stop",{attrs:{"stop-color":"#FFFFFF",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#0BBFB0",offset:"100%"}})],1),r("linearGradient",{attrs:{x1:"52.5183741%",y1:"50%",x2:"0%",y2:"50%",id:"linearGradient-4"}},[r("stop",{attrs:{"stop-color":"#FFFFFF",offset:"0%"}}),r("stop",{attrs:{"stop-color":"#0BBFB0",offset:"100%"}})],1)],1),r("g",{attrs:{id:"Re-Desing_V04",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"Policy-Portal-Stocktake-unroll",transform:"translate(-105.000000, -373.000000)"}},[r("g",{attrs:{id:"cover",transform:"translate(12.000000, 17.000000)"}},[r("g",{attrs:{id:"Group-4",transform:"translate(95.000000, 321.000000)"}},[r("path",{attrs:{d:"M10,205 L75.8356808,205 C86.329091,205 94.8356808,196.49341 94.8356808,186 L94.8356808,142 C94.8356808,131.50659 103.342271,123 113.835681,123 L144.659811,123 L705,123",id:"Path-17",stroke:"url(#linearGradient-1)"}}),r("path",{attrs:{d:"M157,123 L235.412809,123 L235.512842,123 C247.110821,123 256.512842,132.40202 256.512842,144 L256.512842,144 C256.512842,155.59798 265.914862,165 277.512842,165 L315.547448,165 C327.145428,165 336.547448,155.59798 336.547448,144 L336.547448,144 C336.547448,132.40202 345.949469,123 357.547448,123 L386.12342,123 C397.721399,123 407.12342,132.40202 407.12342,144 L407.12342,144 C407.12342,155.59798 416.52544,165 428.12342,165 L565.109904,165 C576.707883,165 586.109904,155.59798 586.109904,144 L586.109904,144 C586.109904,132.40202 595.511924,123 607.109904,123 L682,123",id:"Path-18",stroke:"#0BBFB0"}}),r("circle",{attrs:{id:"Oval-12",stroke:"#FFFFFF","stroke-width":"2",fill:"#5263FF",cx:"9",cy:"205",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"234",cy:"123",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy-2",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"291",cy:"165",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy-3",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"365",cy:"123",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy-4",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"455",cy:"165",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy-5",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"528",cy:"165",r:"10"}}),r("circle",{attrs:{id:"Oval-12-Copy-7",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"484",cy:"200",r:"7"}}),r("circle",{attrs:{id:"Oval-12-Copy-6",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"698",cy:"123",r:"10"}}),r("text",{attrs:{id:"PRIMER",transform:"translate(40.909903, 156.989592) rotate(-45.000000) translate(-40.909903, -156.989592) ","font-family":"IBMPlexSans, IBM Plex Sans","font-size":"14","font-weight":"normal","letter-spacing":"0.7781246",fill:"#5263FF"}},[r("tspan",{attrs:{x:"6.40990258",y:"161.989592"}},[t._v("PRIMER")])]),r("text",{attrs:{id:"BUDGET",transform:"translate(268.403806, 78.474874) rotate(-45.000000) translate(-268.403806, -78.474874) ","font-family":"IBMPlexSans, IBM Plex Sans","font-size":"14","font-weight":"normal","letter-spacing":"0.7781246",fill:"#0BBFB0"}},[r("tspan",{attrs:{x:"229.903806",y:"83.4748737"}},[t._v("BUDGET")])]),r("text",{attrs:{id:"TRANSITIONS",transform:"translate(411.403806, 54.474874) rotate(-45.000000) translate(-411.403806, -54.474874) ","font-family":"Consolas","font-size":"14","font-weight":"normal","letter-spacing":"0.7781246",fill:"#0BBFB0"}},[r("tspan",{attrs:{x:"341.903806",y:"57.4748737"}},[t._v("TRANSITIONS")])]),r("text",{attrs:{id:"EXTREME-EVENTS",transform:"translate(757.217514, 60.282486) rotate(-45.000000) translate(-757.217514, -60.282486) ","font-family":"IBMPlexSans, IBM Plex Sans","font-size":"14","font-weight":"normal","letter-spacing":"0.7781246",fill:"#0BBFB0"}},[r("tspan",{attrs:{x:"696.217514",y:"56.2824856"}},[t._v("EXTREME")]),r("tspan",{attrs:{x:"696.217514",y:"74.2824856"}},[t._v("EVENTS")])]),r("path",{attrs:{d:"M455,164 L455,187 C455,194.179702 460.820298,200 468,200 L484,200",id:"Path-19",stroke:"#0BBFB0","stroke-dasharray":"2"}}),r("path",{attrs:{d:"M698.666667,163.815789 L698.666667,287",id:"Path-36",stroke:"url(#linearGradient-2)","stroke-dasharray":"2"}}),r("path",{attrs:{d:"M699,123 L699,146 C699,153.179702 704.820298,159 712,159 L743,159",id:"Path-19-Copy",stroke:"#0BBFB0","stroke-dasharray":"2"}}),r("path",{attrs:{d:"M699,146 L699,167 C699,174.179702 704.820298,180 712,180 L743,180",id:"Path-19-Copy-2",stroke:"#0BBFB0","stroke-dasharray":"2"}}),r("circle",{attrs:{id:"Oval-12-Copy-7",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"741.5",cy:"159.5",r:"6.5"}}),r("circle",{attrs:{id:"Oval-12-Copy-8",stroke:"#FFFFFF","stroke-width":"2",fill:"#0BBFB0",cx:"741.5",cy:"182.5",r:"6.5"}}),r("path",{attrs:{d:"M365,124 L365,219.366197 C365,229.859607 356.49341,238.366197 346,238.366197 L169,238.366197 C158.50659,238.366197 150,246.872787 150,257.366197 L150,356",id:"Path-34",stroke:"url(#linearGradient-3)","stroke-dasharray":"2"}}),r("path",{attrs:{d:"M529,165 L529,248.407407 C529,257.243963 536.163444,264.407407 545,264.407407 L683,264.407407 C691.836556,264.407407 699,271.570851 699,280.407407 L699,385",id:"Path-35",stroke:"url(#linearGradient-4)","stroke-dasharray":"2"}})])])])])])])},B=[],x={props:["ratio"]},g=x,m=Object(h["a"])(g,v,B,!1,null,"a9cd56b8",null),w=m.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slide"},[r("svg",{attrs:{width:"934px",height:"432px",viewBox:"0 0 934 432"}},[r("circle",{staticStyle:{"mix-blend-mode":"screen"},attrs:{id:"Oval-13-Copy-7",fill:"#99F0E9",cx:"467",cy:"230",r:162*t.ratio}})]),r("svg",{ref:"svg",attrs:{width:"934px",height:"432px",viewBox:"0 0 934 432",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("title",[t._v("Group 6")]),r("desc",[t._v("Created with Sketch.")]),r("defs"),r("g",{attrs:{id:"Re-Desing_V04",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{id:"Policy-Portal-Stocktake-unroll",transform:"translate(-45.000000, -818.000000)"}},[r("g",{attrs:{id:"Group-6",transform:"translate(45.000000, 818.000000)"}},[r("g",{attrs:{id:"Group-25",transform:"translate(0.000000, 48.000000)","stroke-width":"2"}},[r("path",{attrs:{d:"M0,290 L934,290",id:"Path-37",stroke:"#0BBFB0"}}),r("polyline",{attrs:{id:"Path-29",stroke:"#9BE8C7",points:"88 78.6037736 170.501992 26.6528302 214.414343 12 314.215139 175.845283 428.653386 275.750943 548.414343 338.358491 660.191235 355.675472 756 365"}}),r("polyline",{attrs:{id:"Path-38",stroke:"#99F0E9",points:"89 75.8947368 172.830645 33.3082707 210.08871 20 287.266129 74.5639098 415.008065 276.849624 465.572581 315.443609 540.08871 355.368421 627.91129 374 749 374"}}),r("polyline",{attrs:{id:"Path-39",stroke:"#005F57",points:"101 60.4260563 205.954825 12.6373239 276.367556 6 313.566735 63.0809859 368.036961 211.757042 402.579055 280.785211 469.00616 337.866197 534.104723 369.725352 609.831622 383 709.472279 383 748 383"}}),r("path",{attrs:{d:"M16,118 L16,118 C25.1395358,118 34.1241686,115.6396 42.0835492,111.147454 L53.7731613,104.550026 C58.2386583,102.029771 62.5036987,99.1697909 66.5305475,95.995388 L75.8826128,88.6230667 C82.3852176,83.497002 87.9554344,77.2882785 92.3485477,70.2696629 L93.0014267,69.2265971 C96.9233839,62.9607196 102.421498,57.8341844 108.946058,54.3595506 C126.871369,44.6367041 130.854772,38.8913858 130.854772,31.8202247 C130.854772,24.9523208 138.370155,18.0844168 153.400923,11.2165129 L153.400923,11.2165131 C154.445759,10.7391032 155.482292,10.243725 156.510059,9.73059917 L176,0",id:"Path-27",stroke:"#0BBFB0"}})]),r("text",{attrs:{id:"Scenarios","font-family":"IBMPlexMono, IBM Plex Mono","font-size":"10","font-weight":"normal","letter-spacing":"0.5558032",fill:"#524DFF"}},[r("tspan",{attrs:{x:"831.498886",y:"376"}},[t._v("Scenarios")])]),r("path",{attrs:{d:"M819.5,381.5 L737.5,399.5",id:"Path-40-Copy-2",stroke:"#524DFF","stroke-width":"0.5"}}),r("text",{attrs:{id:"01.","font-family":"IBMPlexMono-Bold, IBM Plex Mono","font-size":"14","font-weight":"bold","letter-spacing":"0.8303558",fill:"#0BBFB0"}},[r("tspan",{attrs:{x:"427",y:"58"}},[t._v("01.")])]),r("text",{attrs:{id:"READ","font-family":"IBMPlexMono-BoldItalic, IBM Plex Mono","font-size":"20","font-style":"italic","font-weight":"bold","letter-spacing":"0.5558033",fill:"#1A1A1A"}},[r("tspan",{attrs:{x:"442",y:"367"}},[t._v("READ")])]),r("text",{attrs:{id:"Global-Stocktake-I","font-family":"IBMPlexMono-BoldItalic, IBM Plex Mono","font-size":"48","font-style":"italic","font-weight":"bold","line-spacing":"48","letter-spacing":"0.5558033",fill:"#1A1A1A"}},[r("tspan",{attrs:{x:"475",y:"178"}},[t._v("Global")]),r("tspan",{attrs:{x:"475",y:"226"}},[t._v("Stocktake I")])]),r("text",{attrs:{id:"This-module-explores","font-family":"IBMPlexSans, IBM Plex Sans","font-size":"14","font-weight":"normal","letter-spacing":"0.5558033",fill:"#1A1A1A"}},[r("tspan",{attrs:{x:"475",y:"266"}},[t._v(" This module explores how current decarbonization ")]),r("tspan",{attrs:{x:"475",y:"284"}},[t._v(" plans until 2030 relate to the long-term targets of ")]),r("tspan",{attrs:{x:"475",y:"302"}},[t._v("the Paris Agreement.")])]),r("text",{attrs:{id:"Current-CO2-Emission","font-family":"IBMPlexMono, IBM Plex Mono","font-size":"10","font-weight":"normal","letter-spacing":"0.5558032",fill:"#524DFF"}},[r("tspan",{attrs:{x:"39.1640664",y:"16"}},[t._v("Current CO2 Emissions")])]),r("text",{attrs:{id:"Net-Zero","font-family":"IBMPlexMono, IBM Plex Mono","font-size":"10","font-weight":"normal","letter-spacing":"0.5558032",fill:"#524DFF"}},[r("tspan",{attrs:{x:"2.2767872",y:"408"}},[t._v("Net Zero")])]),r("path",{attrs:{d:"M99,26 L138,68",id:"Path-40",stroke:"#524DFF","stroke-width":"0.5"}}),r("path",{attrs:{d:"M78,339 L27.5,391.5",id:"Path-40-Copy",stroke:"#524DFF","stroke-width":"0.5"}})])])])])])},P=[],b=r("3b75"),C=r.n(b),M={watch:{ratio:function(t){this.vivus.setFrameProgress(t),this.vivus.stop()}},props:["ratio"],mounted:function(){this.vivus=new C.a(this.$refs.svg,{type:"oneByOne",start:"manual"}),this.vivus.stop()}},O=M,S=(r("b52a"),Object(h["a"])(O,k,P,!1,null,"3124dbb2",null)),_=S.exports,L=!1,I={name:"app",components:{Item:y,Slide1:w,Slide2:_},methods:{start:function(t){},onScroll:function(t){var e=this;L||(window.requestAnimationFrame((function(){e.$store.state.scrollY=window.scrollY,L=!1})),L=!0)}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},E=I,j=(r("034f"),Object(h["a"])(E,s,a,!1,null,null,null)),G=j.exports;o["a"].use(c["a"]);var T=new c["a"].Store({state:{scrollY:0,screenHeight:screen.height},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({store:T,render:function(t){return t(G)}}).$mount("#app")},"79d3":function(t,e,r){},"85ec":function(t,e,r){},b52a:function(t,e,r){"use strict";var o=r("019b"),s=r.n(o);s.a}});
//# sourceMappingURL=app.470c1321.js.map