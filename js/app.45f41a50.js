(function(t){function e(e){for(var i,n,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/policy-portal/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d07":function(t,e,a){},2215:function(t,e,a){"use strict";var i=a("e537"),s=a.n(i);s.a},"244f":function(t,e,a){"use strict";var i=a("d7ef"),s=a.n(i);s.a},3171:function(t,e,a){},"4e31":function(t,e,a){},"4f57":function(t,e,a){},"52eb":function(t,e,a){},5381:function(t,e,a){"use strict";var i=a("df20"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"app",attrs:{id:"app"}},[a("SensesMenu"),t.isMobile?t._e():a("Navigation"),t.isMobile?a("NavigationMobile"):t._e(),a("SensesDownload",{attrs:{selected:t.selected,ids:t.ids,title:t.title,close:t.close}}),t._l(t.modulesData,(function(e){return a("Item",{key:e.path+"-"+t.reflowTime,attrs:{data:e,id:"to-"+e.path},scopedSlots:t._u([{key:"figure",fn:function(e){return["intro"===e.data.path?a("Home",{attrs:{mobile:t.isMobile}}):"earth"===e.data.path?a("Earth",{attrs:{ratio:e.ratio,mobile:t.isMobile}}):"end"===e.data.path?a("End",{attrs:{mobile:t.isMobile}}):a("div",[a("ModuleText",{attrs:{data:e.data,ratio:e.ratio,mobile:t.isMobile,active:t.active},on:{"update:active":t.updateActive}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})],1)]}}],null,!0)})}))],2)},o=[],n=(a("ac1f"),a("5319"),a("5530")),r=a("9365"),l=a("ebdf"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item",class:{scroller:!t.data.simple}},[a("figure",[t._t("figure",null,{ratio:t.ratio,data:t.data})],2),a("article")])},d=[],p=a("2f62"),u={name:"item",data:function(){return{offsetTop:0,height:0}},computed:Object(n["a"])({ratio:function(){return Math.min(Math.min(Math.max(this.scrollY-this.offsetTop,0),this.height)/this.height*1.5,1)}},Object(p["c"])(["scrollY","screenHeight"])),methods:{reflow:function(){this.offsetTop=this.$el.offsetTop,this.height=this.$el.getBoundingClientRect().height}},watch:{ratio:function(t){this.$store.state.activePortalPath!==this.data.path&&(this.$store.state.activePortalPath=this.data.path)}},mounted:function(){setTimeout(this.reflow,1)},props:["data","simple"]},h=u,m=(a("f090"),a("2877")),f=Object(m["a"])(h,c,d,!1,null,"6df0b2e0",null),v=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:t.isMobile?"mobile":"desktop"},[t._m(0),a("div",{staticClass:"down_arrow"},[t._v("↓")]),!1===t.isMobile?a("img",{staticClass:"plan",attrs:{src:(t.isMobile?"mobile":"desktop")+"/home.svg"}}):t._e(),a("a",{attrs:{id:"primer",href:"https://www.climatescenarios.org/primer/"}},[a("img",{staticClass:"plan",attrs:{src:(t.isMobile?"mobile":"desktop")+"/primer.svg"}})])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inner"},[a("h1",[t._v("Welcome to the Senses Policy Portal.")]),a("div",{staticClass:"text"},[a("span",[t._v(" Here you can explore a curated sets of learning modules regarding Policy related aspects of Climate Change."),a("br"),t._v(" You can scroll three different chapters: "),a("span",{staticClass:"dotted"},[t._v("Budgets")]),t._v(", "),a("span",{staticClass:"dotted"},[t._v("Transitions")]),t._v(" and "),a("span",{staticClass:"dotted"},[t._v("Extreme Events")]),t._v(". ")]),a("br"),a("span",[a("a",[t._v("If you are interested in all the Senses Project material refer to the Toolkit.")])]),a("span",[a("br"),t._v(" In the "),a("span",{staticClass:"dotted"},[t._v("Budgets")]),t._v(" chapter you will be introduced to the near and long-term plans to reach Net Zero emissions in the next century. The "),a("span",{staticClass:"dotted"},[t._v("Transitions")]),t._v(" section is dedicated to different kind of transitions that might occur. From energetic to land transitions, you will be provided with a complete overview of how our future will look like. The "),a("span",{staticClass:"dotted"},[t._v("Extreme Events")]),t._v(" chapter is dedicated to the extent and impact of Climate Change according to the predictions. ")])])])}],w={computed:Object(n["a"])({},Object(p["c"])(["isMobile"]))},y=w,k=(a("c2d4"),Object(m["a"])(y,g,b,!1,null,"23bc9da2",null)),C=k.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[{open:t.open},t.activePortal&&t.activePortal.path],on:{click:t.click}},[a("div",{staticClass:"info"},[t._v(t._s(t.activePortal&&t.activePortal.maintopic))]),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v("Policy Portal")]),a("div",{staticClass:"position"},[a("div",{staticClass:"portal"},[t._v(t._s(t.activePortal&&t.activePortal.maintopic))]),a("div",{staticClass:"circle"})]),t._m(0),a("img",{staticClass:"naviImage",attrs:{src:"desktop/navigation.svg"}})])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"link"},[a("a",{staticClass:"intro",attrs:{href:"#/intro"}}),a("a",{staticClass:"stocktake-1",attrs:{href:"#/stocktake-1"}}),a("a",{staticClass:"stocktake-2",attrs:{href:"#/stocktake-2"}}),a("a",{staticClass:"transition-path-1",attrs:{href:"#/transition-path-1"}}),a("a",{staticClass:"transition-path-2",attrs:{href:"#/transition-path-2"}}),a("a",{staticClass:"primary-energy",attrs:{href:"#/primary-energy"}}),a("a",{staticClass:"land-transitions",attrs:{href:"#/land-transitions"}}),a("a",{staticClass:"land-affected",attrs:{href:"#/land-affected"}}),a("a",{staticClass:"earth",attrs:{href:"#/earth"}}),a("a",{staticClass:"end",attrs:{href:"#/end"}})])}],x={computed:Object(n["a"])({},Object(p["b"])(["activePortal"]),{},Object(p["c"])(["navigationOpen","reflowTime"]),{open:function(){return this.activePortal&&"intro"!==this.activePortal.path}}),methods:{click:function(){}}},T=x,E=(a("2215"),Object(m["a"])(T,_,P,!1,null,"4d4a4802",null)),O=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.activePortal&&"intro"!==t.activePortal.path?a("div",{staticClass:"container",class:[{open:t.open},t.activePortal&&t.activePortal.path],on:{click:t.click}},[a("div",{staticClass:"info"},[t._v(t._s(t.activePortal&&t.activePortal.mainTopic))]),a("div",{staticClass:"content"},[a("div",{staticClass:"position"},[a("div",{staticClass:"portal"},[t._v(t._s(t.activePortal&&t.activePortal.mainTopic))]),a("div",{staticClass:"circle"})]),a("img",{staticClass:"naviImage",attrs:{src:"mobile/navigation.svg"}})])]):t._e()},D=[],L={computed:Object(n["a"])({},Object(p["b"])(["activePortal"]),{},Object(p["c"])(["navigationOpen","reflowTime"]),{open:function(){return this.navigationOpen}}),methods:{click:function(){this.$store.state.navigationOpen=!this.navigationOpen}}},F=L,M=(a("5381"),Object(m["a"])(F,S,D,!1,null,"c2108fe6",null)),R=M.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:{mobile:t.mobile}},[a("div",{staticClass:"dot"}),a("div",{staticClass:"inner"},[a("h1",[a("a",{attrs:{href:"#",target:"_blank"}},[t._v(" Continue on the Finance Portal. "),!0==={mobile:t.mobile}?a("br"):t._e(),a("span",{staticClass:"right_arrow"},[t._v("→")])])])]),(t.mobile,t._e())])},I=[],B={props:["mobile"]},$=B,A=(a("244f"),Object(m["a"])($,j,I,!1,null,"4b93b52d",null)),V=A.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"svg",staticClass:"svg"},[a("svg",{attrs:{width:"100%",height:"20000px",preserveAspectRatio:"xMinYMax slice",viewBox:"0 0 674 4511",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M151 0V230.251C151 248.93 166.069 264.112 184.748 264.25L387.051 265.75C405.73 265.888 420.799 281.07 420.799 299.749V660C420.799 678.778 436.022 694 454.799 694H637C655.778 694 671 709.222 671 728V1062.5C671 1081.28 655.778 1096.5 637 1096.5H454.799C436.022 1096.5 420.799 1111.72 420.799 1130.5V1562.24C420.799 1580.93 405.726 1596.11 387.044 1596.24L36.7559 1598.76C18.0739 1598.89 3 1614.07 3 1632.76V2140L6.81575 2833.51C6.91796 2852.09 21.9109 2867.14 40.4866 2867.32L387.41 2870.68C405.947 2870.86 420.924 2885.85 421.08 2904.39L424.625 3326.2L420.799 3755V4149V4320V4511",stroke:"url(#paint0_linear)",strokes:"#000","stroke-width":"1"}}),a("defs",[a("linearGradient",{attrs:{id:"paint0_linear",x1:"129.479",y1:"1723.14",x2:"169.746",y2:"4513.41",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#CBF5E5"}}),a("stop",{attrs:{offset:"0.268825","stop-color":"#00643B"}}),a("stop",{attrs:{offset:"0.339653","stop-color":"#8BDEBB"}}),a("stop",{attrs:{offset:"0.929892","stop-color":"#97E6C4"}}),a("stop",{attrs:{offset:"1","stop-color":"#B035C9"}})],1)],1)])])},J=[],H={watch:{ratio:function(t){}},props:["ratio"],mounted:function(){}},G=H,K=(a("b4bf"),Object(m["a"])(G,N,J,!1,null,"35c167de",null)),q=K.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"svg",staticClass:"svg"})},z=[],Y=a("3b75"),U=a.n(Y),Z={watch:{ratio:function(t){this.vivus.setFrameProgress(t),this.vivus.stop()}},props:["ratio","svg"],mounted:function(){this.vivus=new U.a(this.$refs.svg,{type:"oneByOne",start:"manual",file:this.svg}),this.vivus.stop()}},Q=Z,X=(a("b2d8"),Object(m["a"])(Q,W,z,!1,null,"479ae72c",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",class:[t.data.path,{mobile:t.mobile}]},[a("div",{staticClass:"header"},[t._v(t._s(t.data.maintopic))]),a("div",{staticClass:"info"},[a("div",{staticClass:"credits"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.authors.join(" / ")))])]),a("div",{staticClass:"read"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.readingTime)+" minutes")])]),t.data.downloadIDs?a("div",{staticClass:"tags"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content",on:{click:t.onClick}},[a("a",[t._v("Download Extras")])])]):t._e()]),a("div",{staticClass:"circle"}),a("div",{staticClass:"text"},[a("h2",{style:(t.mobile,{left:"10px"})},[t._v(t._s(t.data.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ratio>.3,expression:"ratio > 0.3"}],staticClass:"description",style:(t.mobile,{left:"10px"})},[t._v(t._s(t.data.description))]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ratio>.5,expression:"ratio> 0.5"}],staticClass:"readbutton"},[a("a",{staticClass:"readspan",attrs:{href:t.data.link}},[t._v("READ")])])]),a("div",{staticClass:"circle"}),a("div",{staticClass:"background"}),a("img",{staticClass:"backgroundPath",attrs:{src:"desktop/background/"+t.data.path+".svg"}})])},at=[],it={props:["data","ratio","mobile","active"],methods:{onClick:function(){this.$emit("update:active",this.data.id,this.data.downloadIDs,this.data.title)}}},st=it,ot=(a("ce65"),Object(m["a"])(st,et,at,!1,null,"2f3807aa",null)),nt=ot.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container earth",class:{mobile:t.mobile}},[a("div",{staticClass:"item",class:{visible:!0}},[t.mobile?t._e():a("div",{staticClass:"earths"},t._l(9,(function(e){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.earthVisible(e,[0,.3]),expression:"earthVisible(i, [0, 0.3])"}],key:"crops"+e,attrs:{src:"desktop/earth/crops/"+e+".png",alt:"Earth"}})})),0),t.mobile?a("div",{staticClass:"earths"},[t.mobile?a("img",{attrs:{src:"mobile/earth/crops/1.png",alt:"Earth"}}):t._e()]):t._e(),t._m(0)]),a("div",{staticClass:"item",class:{visible:t.ratio>.3}},[t.mobile?t._e():a("div",{staticClass:"earths"},t._l(9,(function(e){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.earthVisible(e,[.3,.6]),expression:"earthVisible(i, [0.3, 0.6])"}],key:"crops"+e,attrs:{src:"desktop/earth/floodings/"+e+".png",alt:"Earth"}})})),0),t.mobile?a("div",{staticClass:"earths"},[t.mobile?a("img",{attrs:{src:"mobile/earth/floodings/1.png",alt:"Earth"}}):t._e()]):t._e(),t._m(1)]),a("div",{staticClass:"item",class:{visible:t.ratio>.6}},[t.mobile?t._e():a("div",{staticClass:"earths"},t._l(9,(function(e){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.earthVisible(e,[.6,.9]),expression:"earthVisible(i, [0.6, 0.9])"}],key:"crops"+e,attrs:{src:"desktop/earth/wildfires/"+e+".png",alt:"Earth"}})})),0),t.mobile?a("div",{staticClass:"earths"},[t.mobile?a("img",{attrs:{src:"mobile/earth/wildfires/1.png",alt:"Earth"}}):t._e()]):t._e(),t._m(2)]),(t.mobile,t._e())])},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Crops")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("crop failures")]),t._v(" in 100 years. ")]),a("a",{staticClass:"readbutton",attrs:{href:"https://dev.climatescenarios.org/earth/"}},[t._v("GO TO SENSES EARTH")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Floodings")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("floodings")]),t._v(" in 100 years. ")]),a("a",{staticClass:"readbutton",attrs:{href:"https://dev.climatescenarios.org/earth/"}},[t._v("GO TO SENSES EARTH")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Wildfires")]),a("div",{staticClass:"description"},[t._v(" Discover how different regions will be impacted by "),a("span",{staticClass:"dotted"},[t._v("wildfires")]),t._v(" in 100 years. ")]),a("a",{staticClass:"readbutton",attrs:{href:"https://dev.climatescenarios.org/earth/"}},[t._v("GO TO SENSES EARTH")])])}],ct={props:["ratio","mobile"],methods:{earthVisible:function(t,e){var a=[1,9],i=(this.ratio-e[0])/(e[1]-e[0]),s=Math.min(Math.max(i,0),1),o=Math.floor(a[0]+(a[1]-a[0])*s);return t===o}}},dt=ct,pt=(a("bf9e"),Object(m["a"])(dt,rt,lt,!1,null,"1b14319a",null)),ut=pt.exports,ht=!1,mt={name:"app",components:{Home:C,Navigation:O,End:V,Item:v,AnimatedSvg:tt,ModuleText:nt,Earth:ut,BackgroundLine:q,SensesMenu:r["a"],NavigationMobile:R,SensesDownload:l["a"]},data:function(){return{active:!1,selected:"",ids:[],title:"",close:""}},computed:Object(n["a"])({},Object(p["c"])(["isMobile","activePortal","reflowTime"]),{},Object(p["b"])(["modulesData"])),methods:{getSvgPath:function(t){var e=this.isMobile?"mobile/":"desktop/";return e+t+".svg"},onScroll:function(t){var e=this;ht||(window.requestAnimationFrame((function(){e.$store.state.scrollY=window.scrollY,ht=!1})),ht=!0)},reflow:function(t){var e=this;this.$store.state.isMobile=window.innerWidth<700,this.$store.state.reflowTime=Date.now(),"load"===t.type&&setTimeout((function(){e.$store.state.activePortalPath="intro"}),100)},hashchange:function(){var t=document.getElementById(location.hash.replace("#/","to-")).offsetTop+10;window.scrollTo({top:t,behavior:"smooth"})},updateActive:function(t,e,a){console.log(t,e,a),this.selected=t,this.ids=e,this.title=a}},mounted:function(){console.log(this.updateActive),console.log(this.modulesData),window.addEventListener("scroll",this.onScroll),window.addEventListener("load",this.reflow),window.addEventListener("resize",this.reflow),window.addEventListener("hashchange",this.hashchange)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("load",this.reflow),window.removeEventListener("resize",this.reflow),window.removeEventListener("hashchange",this.hashchange)}},ft=mt,vt=(a("5c0b"),Object(m["a"])(ft,s,o,!1,null,null,null)),gt=vt.exports,bt=(a("99af"),a("4de4"),a("7db0"),a("a9e3"),a("8ba4"),a("b7c5"));i["a"].use(p["a"]);var wt=new p["a"].Store({state:{scrollY:0,screenHeight:window.innerHeight,isMobile:window.innerWidth<700,activePortalPath:"intro",navigationOpen:!1,reflowTime:null},getters:{modulesData:function(t){var e,a=[{path:"intro",maintopic:"Intro",portalnum:-1,simple:!0},{path:"earth",maintopic:"Extreme Events",portalnum:7,simple:t.isMobile},{path:"end",maintopic:"Continue",portalnum:100}];return(e=bt.generals.filter((function(t){return"Policy"===t.portal&&Number.isInteger(t.portalnum)}))).concat.apply(e,a).sort((function(t,e){return t.portalnum-e.portalnum}))},activePortal:function(t,e){return e.modulesData.find((function(e){return e.path===t.activePortalPath}))}},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:wt,render:function(t){return t(gt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),s=a.n(i);s.a},"9c0c":function(t,e,a){t.exports={colorViolet:"#4E40B2",colorRed:"#C8005F",colorOrange:"#e66b46",colorYellow:"#FFAC00",colorGreen:"#00CC84",colorBlue:"#00A5D5",colorPurple:"#B035C9",colorNeon:"#5263ff",colorAccent:"#4E40B2",colorDefault:"#202022",colorWhite:"#fff",colorPaleGray:"#d8d8e4",colorLightGray:"#a4a4ad",colorGray:"#8a8a93",colorDarkGray:"#75757a",colorDeepGray:"#48484c",colorBlack:"#202022"}},b2d8:function(t,e,a){"use strict";var i=a("3171"),s=a.n(i);s.a},b4bf:function(t,e,a){"use strict";var i=a("4f57"),s=a.n(i);s.a},b7c5:function(t){t.exports=JSON.parse('{"generals":[{"portal":["Policy","Finance"],"portalnum":0,"link":"https://climatescenarios.org/primer/","maintopic":"primer","path":"primer","id":"primer","title":"Primer to Climate Scenarios","subtitle":"Learn module","description":"This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate change and climate impacts.","keywords":"ssp","authors":["Elmar Kriegler","Cornelia Auer","Lavinia Baumstark","Jan Volkholz","Volker Krey","Kasper Kok","Henrik Carlsen","Fidel Thomet"],"readingTime":45,"downloadIDs":[1,2,3],"gems":[{"title":"Risk factor pathways","url":"https://gems-gilt.now.sh/#/finance-wyman-indicators"}],"bg":"bg3","alignRight":false,"tags":["Policy","Finance","Regional"],"type":["Learn"],"dev":false},{"portal":"Policy","portalnum":1,"link":"https://dev.climatescenarios.org/stocktake/","maintopic":"Budget","path":"stocktake-1","id":"stocktake-1","title":"Global Stocktake","subtitle":"Learn module","description":"This general explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.","keywords":"","authors":["Christoph Bertram","Jonas Parnow"],"readingTime":15,"downloadIDs":[1],"bg":"bg1","alignRight":true,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":2,"link":"https://...","maintopic":"Budget","path":"stocktake-2","id":"stocktake-2","title":"Global Stocktake II","subtitle":"Learn module","description":"Placeholder Text TODO","keywords":"","authors":["Christoph Bertram","Jonas Parnow"],"visible":false,"readingTime":15,"downloadIDs":[1],"bg":"bg2","alignRight":true,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":3,"link":"https://dev.climatescenarios.org/sector-transition/","maintopic":"Transitions","path":"transition-path-1","id":"transition-path-1","title":"Towards an electric future","subtitle":"Learn module","description":"We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","keywords":"","authors":["Falko Ueckerdt","Felix Schreyer","Francesca Morini"],"readingTime":25,"downloadIDs":false,"bg":"bg1","alignRight":true,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":4,"link":"https://...","maintopic":"Transitions","path":"transition-path-2","id":"transition-path-2","title":"National and sectoral transition paths II","subtitle":"Learn module","description":"Placeholder Text TODO","keywords":"","authors":["Falko Ueckerdt","Felix Schreyer","Francesca Morini"],"visible":false,"readingTime":25,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":null,"link":"https://...","maintopic":"Demand","path":"impact-demand","id":"impact-demand","title":"What is the potential impact of the demand side?","subtitle":"Learn module","description":"Placeholder Text TODO","keywords":"","authors":["Arnulf Grübler","Volker Krey","Charlie Wilson","Francesca Morini"],"visible":false,"readingTime":null,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":6,"link":"https://dev.climatescenarios.org/land-use/","maintopic":"Transitions","path":"land-transitions","id":"land-transitions","title":"Land transitions general","subtitle":"Learn module","description":"Today, most of the global ice-free land is used by humans in some way or another. Land use change and sustainable land management play an important role in climate change adaptation and mitigation. But they also have an impact on food security, desertification, land degradation.","keywords":"","authors":["Florian Humpenöder","Alex Popp","Fidel Thomet"],"readingTime":10,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":[8,9,10],"link":"https://dev.climatescenarios.org/earth/","linkText":"Explore the module","maintopic":"Extreme Events","path":"extreme-events","id":"extreme-events","title":"Senses Earth","subtitle":"Explore module","description":"Discover how different regions will be impacted by extreme events in the next 100 years.","keywords":"","authors":["Fidel Thomet"],"readingTime":null,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"type":["Explore"],"dev":true},{"portal":"Finance","portalnum":2,"link":"https://dev.climatescenarios.org/investment-opportunities/","maintopic":"Opportunities","path":"investment-opportunities","id":"investment-opportunities","title":"Investment Opportunities and Alignment","subtitle":"Learn module","description":"What are near-time investment requirements for meeting stringent climate targets in a low carbon world?","keywords":"","authors":["Bas van Ruijven","Christoph Bertram","Jonas Parnow"],"readingTime":25,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"type":["Learn"],"dev":true},{"portal":"Policy","portalnum":5,"link":"https://dev.climatescenarios.org/primary-energy-scenarios/","maintopic":"Transitions","path":"primary-energy","id":"primary-energy","title":"Primary Energy Scenarios","subtitle":"Learn module","description":"Learn about the concept of primary energy sources like coal, oil and solar radiation. This module explains conversion processes and scenarios in the SSP worlds.","keywords":"","authors":["Hannah Schwan","Dennis Ostendorf"],"readingTime":15,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Policy","Finance"],"type":["Learn"],"dev":true},{"portal":null,"portalnum":null,"link":"https://dev.climatescenarios.org/finder/","linkText":"Explore the data","maintopic":"finder","path":"finder","id":"finder","title":"Scenario Finder","subtitle":"Explore module","description":"This explore module allows you to quickly filter all avialable scenarios from the IAMC 1.5 database","keywords":"","authors":["Volker Krey","Jonas Parnow"],"readingTime":null,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"type":["Explore","Database"],"dev":true},{"portal":null,"portalnum":null,"link":"https://dev.climatescenarios.org/technique-finder/","linkText":"Explore the data","maintopic":"finder","path":"technique-finder","id":"technique-finder","title":"Co-Creation Techniques Finder","subtitle":"Explore module","description":"This explore module allows you to quickly filter co-creation techniques","keywords":"","authors":["Sara Talebian","Lotte de Jong","Simona Pedde","Jonas Parnow"],"bg":"bg3","alignRight":false,"tags":["Regional"],"type":["Explore","Database"]},{"linkText":"Explore the data","maintopic":"finder","path":"risk-finder","id":"risk-finder","title":"Risk Finder","subtitle":"Explore module","description":"This explore module allows you to quickly filter risks","keywords":"","authors":["Sara Talebian","Jonas Parnow"],"visible":true,"bg":"bg3","alignRight":false,"tags":["Regional"],"type":["Explore","Database"]},{"path":"step-by-step","id":"step-by-step","title":"Step-by-step guide","subtitle":"Learn module","description":"Practitioners’ step-by-step guide to co-producing socioeconomic Scenarios with Stakeholders to strengthening the link between global and regional scenarios using co-production techniques.","keywords":"","authors":["Jonas Parnow"],"visible":true,"bg":"bg3","alignRight":false,"tags":["Regional"],"type":["Learn"]},{"portal":null,"portalnum":null,"maintopic":"IIASA Database","link":"https://data.ene.iiasa.ac.at/iamc-1.5c-explorer/","linkText":"Visit the website","path":"database","id":"database","title":"Scenario Explorer","subtitle":"Database","description":"This Scenario Explorer presents an ensemble of quantitative, model-based climate change mitigation pathways.","keywords":"","authors":["Daniel Huppmann","Elmar Kriegler","Volker Krey","Keywan Riahi","Joeri Rogelj","Steven K. Rose","John Weyant"],"readingTime":null,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"type":["Database"],"dev":true},{"portal":null,"portalnum":null,"link":"https://uclab.fh-potsdam.de/projects/co2/","linkText":"Watch the film","maintopic":"Budget","path":"film","id":"film","title":"A Brief History Of CO2 Emissions","subtitle":"Learn film","description":"Greenhouse gas emissions are one of the driving forces behind climate change. In our short film “A Brief History of CO2 Emissions”, we visualize the geographic distribution and the historic dimension of carbon dioxide emissions.","keywords":"","authors":["Julian Braun","Jürgen Claus","Susanne Droege","Elmar Kriegler","Boris Müller","Mareike Schodder"],"readingTime":8,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"type":["Learn","Media"],"dev":true},{"portal":"Policy","portalnum":7,"link":"https://dev.climatescenarios.org/land-affected/","maintopic":"Transitions","path":"land-affected","id":"land-affected","title":"Extreme Events","subtitle":"Learn module","description":"The extent and impact of crop failures, river floods, tropical cyclones, heatwaves, wildfires, and droughts depend on the underlying meteorological, hydrological, or climatological events as well as on human factors such as land use, water and agricultural management, and population density.","keywords":"","authors":["Katja Frieler","Jan Volkholz","Fidel Thomet"],"visible":false,"readingTime":25,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"type":["Learn"],"dev":true},{"portal":"Finance","portalnum":1,"link":"https://dev.climatescenarios.org/transition-risk/","maintopic":"Risks","path":"transition-risk","id":"transition-risk","title":"Fossil Fuels Risks","subtitle":"Learn module","description":"Discover finance risks related to transitions in a variety of sectors including: Fossil fuels, End User and Power","keywords":"","authors":["Nico Bauer","Bas van Ruijven","Nadia Zeissig"],"visible":false,"data":false,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"type":["Learn"],"dev":true},{"portal":"Finance","portalnum":3,"link":"https://dev.climatescenarios.org/physical-risks/","maintopic":"Risks","path":"physical-risks","id":"physical-risks","title":"Physical Risks","subtitle":"Learn module","description":"Placeholder Text TODO","keywords":"","authors":["Katja Frieler","Jan Volkholz","Fidel Thomet"],"visible":false,"readingTime":15,"downloadIDs":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"type":["Learn"],"dev":true}]}')},bf9e:function(t,e,a){"use strict";var i=a("4e31"),s=a.n(i);s.a},c2d4:function(t,e,a){"use strict";var i=a("0d07"),s=a.n(i);s.a},c6d8:function(t,e,a){},ce65:function(t,e,a){"use strict";var i=a("c6d8"),s=a.n(i);s.a},d7ef:function(t,e,a){},df20:function(t,e,a){},e537:function(t,e,a){},f090:function(t,e,a){"use strict";var i=a("52eb"),s=a.n(i);s.a}});
//# sourceMappingURL=app.45f41a50.js.map