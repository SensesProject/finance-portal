(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/policy-portal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00cb":function(t,e,a){},"297a":function(t,e,a){},"3daa":function(t,e,a){"use strict";var r=a("9d02"),i=a.n(r);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"app",attrs:{id:"app"}},[a("SensesMenu"),a("Item",{attrs:{data:t.modulesData["stocktake-1"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["stocktake-2"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["land-affected"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["transition-path-1"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["transition-path-2"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["primary-energy"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{attrs:{data:t.modulesData["land-transitions"]},scopedSlots:t._u([{key:"figure",fn:function(e){return[a("Layout",{attrs:{data:e.data}}),a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:t.getSvgPath(e.data.path)}})]}}])}),a("Item",{scopedSlots:t._u([{key:"figure",fn:function(t){return[a("Earth",{attrs:{ratio:t.ratio}})]}}])})],1)},n=[],s=(a("a4d3"),a("4de4"),a("4160"),a("13d5"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),o=a("9365"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("figure",[t._t("figure",null,{ratio:t.ratio,data:t.data})],2),a("article")])},c=[],d=a("2f62");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"item",data:function(){return{offsetTop:0,height:0}},computed:f({ratio:function(){return Math.min(Math.max(this.scrollY-this.offsetTop,0),this.height-1.2*this.screenHeight)/(this.height-1.2*this.screenHeight)}},Object(d["b"])(["scrollY","screenHeight"])),mounted:function(){this.offsetTop=this.$el.offsetTop,this.height=this.$el.getBoundingClientRect().height},props:["data"]},h=p,g=(a("5dc6"),a("2877")),m=Object(g["a"])(h,l,c,!1,null,"39acf1c5",null),v=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"svg",staticClass:"svg"})},y=[],O=a("3b75"),P=a.n(O),w={watch:{ratio:function(t){this.vivus.setFrameProgress(t),this.vivus.stop()}},props:["ratio","svg"],mounted:function(){this.vivus=new P.a(this.$refs.svg,{type:"oneByOne",start:"manual",file:this.svg}),this.vivus.stop()}},T=w,_=(a("ecb9"),Object(g["a"])(T,b,y,!1,null,"5446c8de",null)),k=_.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"info"},[a("div",{staticClass:"credits"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.authors.join(" / ")))])]),a("div",{staticClass:"read"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.readingTime))])]),a("div",{staticClass:"tags"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[t._v(t._s(t.data.tags.join(", ")))])])]),a("div",{staticClass:"text"},[a("h2",[t._v(t._s(t.data.title))]),t.ratio>.3?a("div",{staticClass:"description"},[t._v(t._s(t.data.description))]):t._e(),t.ratio>.4?a("div",{staticClass:"readbutton"},[t._v("READ")]):t._e()]),a("div",{staticClass:"circle"})])},C=[],j={props:["data","ratio"]},x=j,D=(a("3daa"),Object(g["a"])(x,S,C,!1,null,"1e491d6e",null)),F=D.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"item",class:{visible:!0}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-1.svg",alt:"Earth"}}),t._m(0)]),a("div",{staticClass:"item",class:{visible:t.ratio>.4}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-2.svg",alt:"Earth"}}),t._m(1)]),a("div",{staticClass:"item",class:{visible:t.ratio>.8}},[a("img",{staticClass:"earthsvg",attrs:{src:"desktop/earth-3.svg",alt:"Earth"}}),t._m(2)])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Crop Failures")]),a("div",{staticClass:"description"},[t._v("The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.")]),a("div",{staticClass:"readbutton"},[t._v("GO TO HEART")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Floodings")]),a("div",{staticClass:"description"},[t._v("The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.")]),a("div",{staticClass:"readbutton"},[t._v("GO TO HEART")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h2",[t._v("Wildfires")]),a("div",{staticClass:"description"},[t._v("The percentage of wildfires will increase of 50% in the next 30 years due to temperature increasing.")]),a("div",{staticClass:"readbutton"},[t._v("GO TO HEART")])])}],A={props:["ratio"]},I=A,B=(a("9030"),Object(g["a"])(I,E,R,!1,null,"f51626f4",null)),L=B.exports,M=a("b7c5");function G(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function $(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?G(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var H=!1,J={name:"app",components:{Item:v,AnimatedSvg:k,Layout:F,Earth:L,SensesMenu:o["a"]},computed:$({modulesData:function(){return M.modules.reduce((function(t,e){return t[e.path]=e,t}),{})}},Object(d["b"])(["isMobile"])),methods:{getSvgPath:function(t){var e=this.isMobile?"mobile/":"desktop/";return e+t+".svg"},onScroll:function(t){var e=this;H||(window.requestAnimationFrame((function(){e.$store.state.scrollY=window.scrollY,H=!1})),H=!0)}},mounted:function(){window.addEventListener("scroll",this.onScroll),console.log(this.modulesData)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},N=J,W=(a("5c0b"),Object(g["a"])(N,i,n,!1,null,null,null)),Y=W.exports;r["a"].use(d["a"]);var V=new d["a"].Store({state:{scrollY:0,screenHeight:screen.height,isMobile:!1},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:V,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),i=a.n(r);i.a},"5dc6":function(t,e,a){"use strict";var r=a("297a"),i=a.n(r);i.a},7251:function(t,e,a){},9030:function(t,e,a){"use strict";var r=a("00cb"),i=a.n(r);i.a},"9c0c":function(t,e,a){t.exports={colorViolet:"#4E40B2",colorRed:"#C8005F",colorOrange:"#e66b46",colorYellow:"#FFAC00",colorGreen:"#00CC84",colorBlue:"#00A5D5",colorPurple:"#B035C9",colorNeon:"#5263ff",colorAccent:"#4E40B2",colorDefault:"#202022",colorWhite:"#fff",colorPaleGray:"#d8d8e4",colorLightGray:"#a4a4ad",colorGray:"#8a8a93",colorDarkGray:"#75757a",colorDeepGray:"#48484c",colorBlack:"#202022"}},"9d02":function(t,e,a){},b7c5:function(t){t.exports=JSON.parse('{"modules":[{"portal":["Policy","Finance"],"portal-num":0,"main-topic":"primer","path":"primer","title":"Primer to Climate Scenarios","description":"This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate change and climate impacts.","authors":["Fidel Thomet"],"readingTime":45,"gem":false,"scenario-finder":false,"data":false,"share":true,"bg":"bg3","alignRight":false,"tags":["Policy","Finance"],"dev":false},{"portal":"Policy","portal-num":1,"main-topic":"Budget","path":"stocktake-1","title":"Global Stocktake I","description":"This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.","authors":["Christoph Bertram","Jonas Parnow"],"readingTime":15,"gem":"https://data.ene.iiasa.ac.at/iamc-1.5c-explorer//#/workspaces/share/1a6e44c8-0963-4f28-a871-2b81bfb11def","scenario-finder":true,"data":false,"share":true,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":2,"main-topic":"Budget","path":"stocktake-2","title":"Global Stocktake II","description":"Placeholder Text TODO","authors":["Jonas Parnow"],"readingTime":15,"gem":true,"scenario-finder":false,"data":false,"share":true,"bg":"bg2","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":3,"main-topic":"Transitions","path":"transition-path-1","title":"National and sectoral transition paths","description":"We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":25,"gem":false,"scenario-finder":false,"data":true,"share":false,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":4,"main-topic":"Transitions","path":"transition-path-2","title":"National and sectoral transition paths II","description":"Placeholder Text TODO","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":null,"main-topic":"Demand","path":"impact-demand","title":"What is the potential impact of the demand side?","description":"Placeholder Text TODO","authors":["Arnulf Grübler","Volker Krey","Charlie Wilson","Francesca Morini"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":6,"main-topic":"Transitions","path":"land-transitions","title":"Land transitions module","description":"Placeholder Text TODO","authors":["Florian Humpenöder","Alex Popp","Fidel Thomet"],"readingTime":10,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":7,"main-topic":"Transitions","path":"land-affected","title":"How much land area is affected by and how much population is exposed to extreme events under climate change?","description":"The extent and impact of crop failures, river floods, tropical cyclones, heatwaves, wildfires, and droughts depend on the underlying meteorological, hydrological, or climatological events as well as on human factors such as land use, water and agricultural management, and population density. In this module you\'ll learn how climate change contributes to extreme events and who is most affected by those.","authors":["Katja Frieler","Jan Volkholz","Fidel Thomet"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Finance","portal-num":1,"main-topic":"Risks","path":"transition-risk","title":"Transition risk","description":"Discover finance risks related to transitions in a variety of sectors including: Fossil fuels, End User and Power","authors":["Nico Bauer","Bas van Ruijven","Nadia Zeissig"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portal-num":2,"main-topic":"Opportunities","path":"investment-opportunities","title":"Investment Opportunities and Alignment: What are investment opportunities in a low carbon world?","description":"Placeholder Text","authors":["Bas van Ruijven","Christoph Bertram","Jonas Parnow"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portal-num":3,"main-topic":"Risks","path":"physical-risks","title":"Physical Risks","description":"Placeholder Text TODO","authors":["Katja Frieler","Jan Volkholz ","Fidel Thomet"],"readingTime":15,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Policy","portal-num":5,"main-topic":"Transitions","path":"primary-energy","title":"Primary Energy Scenarios","description":"Placeholder Text TODO","authors":["Hannah Schwan","Dennis Ostendorf"],"readingTime":15,"gem":false,"scenario-finder":false,"data":true,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"finder","path":"finder","title":"Scenario Finder","description":"Placeholder Text TODO","authors":["Jonas Parnow"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":"Policy","portal-num":[8,9,10],"main-topic":"Extreme Events","path":"earth","title":"Senses Earth","description":"Discover how different regions will be impacted by extreme events in the next 100 years.","authors":["Fidel Thomet"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"IIASA Database","path":"database","title":"Link to IIASA Database","description":"Placeholder Text TODO","authors":["Volker Krey"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"Budget","path":"film","title":"CO2 Film","description":"Placeholder Text TODO","authors":["Boris Müller"],"readingTime":8,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true}]}')},ecb9:function(t,e,a){"use strict";var r=a("7251"),i=a.n(r);i.a}});
//# sourceMappingURL=app.dad5500b.js.map