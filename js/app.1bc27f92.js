(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/policy-portal/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"1e28":function(e,t,a){},5144:function(e,t,a){"use strict";var i=a("6ba8"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"app",attrs:{id:"app"}},[a("Item",{attrs:{data:e.modulesData["stocktake-1"]},scopedSlots:e._u([{key:"figure",fn:function(e){return[a("AnimatedSvg",{attrs:{ratio:e.ratio,svg:"stocktake-1.svg"}})]}}])})],1)},r=[],o=(a("13d5"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("figure",[a("div",{staticClass:"inner"},[a("div",{staticClass:"info"},[a("div",{staticClass:"credits"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[e._v(e._s(e.data.authors.join(" / ")))])]),a("div",{staticClass:"read"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[e._v(e._s(e.data.readingTime))])]),a("div",{staticClass:"tags"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[e._v(e._s(e.data.tags.join(", ")))])])]),a("div",{staticClass:"text"},[a("h2",[e._v(e._s(e.data.title))]),e.ratio>.3?a("div",{staticClass:"description"},[e._v(e._s(e.data.description))]):e._e(),e.ratio>.4?a("div",{staticClass:"readbutton"},[e._v("READ")]):e._e()]),a("div",{staticClass:"circle"}),e._t("figure",null,{ratio:e.ratio})],2)]),a("article")])}),s=[],l=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),c=a("2f62");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"item",data:function(){return{offsetTop:0,height:0}},computed:u({ratio:function(){return Math.min(Math.max(this.scrollY-this.offsetTop,0),this.height-1.2*this.screenHeight)/(this.height-1.2*this.screenHeight)}},Object(c["b"])(["scrollY","screenHeight"])),mounted:function(){this.offsetTop=this.$el.offsetTop,this.height=this.$el.getBoundingClientRect().height,console.log(this.data)},props:["data"]},p=f,h=(a("5144"),a("2877")),g=Object(h["a"])(p,o,s,!1,null,"57d3da03",null),m=g.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"svg",staticClass:"slide"})},v=[],y=a("3b75"),O=a.n(y);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T={watch:{ratio:function(e){this.vivus.setFrameProgress(e),this.vivus.stop()}},computed:w({},Object(c["b"])(["isMobile"])),props:["ratio","svg"],mounted:function(){var e=this.isMobile?"mobile/":"desktop/";this.vivus=new O.a(this.$refs.svg,{type:"oneByOne",start:"manual",file:e+this.svg}),this.vivus.stop()}},j=T,k=(a("bcf5"),Object(h["a"])(j,b,v,!1,null,"229da4d4",null)),x=k.exports,F=a("b7c5"),D=!1,_={name:"app",components:{Item:m,AnimatedSvg:x},computed:{modulesData:function(){return F.modules.reduce((function(e,t){return e[t.path]=t,e}),{})}},methods:{start:function(e){},onScroll:function(e){var t=this;D||(window.requestAnimationFrame((function(){t.$store.state.scrollY=window.scrollY,D=!1})),D=!0)}},mounted:function(){window.addEventListener("scroll",this.onScroll),console.log(this.modulesData)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},S=_,C=(a("034f"),Object(h["a"])(S,n,r,!1,null,null,null)),R=C.exports;i["a"].use(c["a"]);var E=new c["a"].Store({state:{scrollY:0,screenHeight:screen.height,isMobile:!1},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({store:E,render:function(e){return e(R)}}).$mount("#app")},"6ba8":function(e,t,a){},"85ec":function(e,t,a){},b7c5:function(e){e.exports=JSON.parse('{"modules":[{"portal":["Policy","Finance"],"portal-num":0,"main-topic":"primer","path":"primer","title":"Primer to Climate Scenarios","description":"This interactive primer explains what climate change scenarios are and how they are connected to socioeconomics, energy & land use, emissions, climate change and climate impacts.","authors":["Fidel Thomet"],"readingTime":45,"gem":false,"scenario-finder":false,"data":false,"share":true,"bg":"bg3","alignRight":false,"tags":["Policy","Finance"],"dev":false},{"portal":"Policy","portal-num":1,"main-topic":"Budget","path":"stocktake-1","title":"Global Stocktake I","description":"This module explores how current decarbonization plans until 2030 relate to the long-term targets of the Paris Agreement.","authors":["Christoph Bertram","Jonas Parnow"],"readingTime":15,"gem":"https://data.ene.iiasa.ac.at/iamc-1.5c-explorer//#/workspaces/share/1a6e44c8-0963-4f28-a871-2b81bfb11def","scenario-finder":true,"data":false,"share":true,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":2,"main-topic":"Budget","path":"stocktake-2","title":"Global Stocktake II","description":"Placeholder Text TODO","authors":["Jonas Parnow"],"readingTime":15,"gem":true,"scenario-finder":false,"data":false,"share":true,"bg":"bg2","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":3,"main-topic":"Transitions","path":"transition-path-1","title":"National and sectoral transition paths","description":"We cannot predict the future, but we can create different plausible scenarios of how a future decarbonization pathway could look like. In this module you will be introduced to the concept of Electrification and to the broad strategy to go Carbon Neutral by reducing emissions.","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":25,"gem":false,"scenario-finder":false,"data":true,"share":false,"bg":"bg1","alignRight":true,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":4,"main-topic":"Transitions","path":"transition-path-2","title":"National and sectoral transition paths II","description":"Placeholder Text TODO","authors":["Falko Ueckerdt","Gunnar Luderer","Francesca Morini"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":null,"main-topic":"Demand","path":"impact-demand","title":"What is the potential impact of the demand side?","description":"Placeholder Text TODO","authors":["Arnulf Grübler","Volker Krey","Charlie Wilson","Francesca Morini"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":6,"main-topic":"Transitions","path":"land-transitions","title":"Land transitions module","description":"Placeholder Text TODO","authors":["Florian Humpenöder","Alex Popp","Fidel Thomet"],"readingTime":10,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Policy","portal-num":7,"main-topic":"Transitions","path":"land-affected","title":"How much land area is affected by and how much population is exposed to extreme events under climate change?","description":"The extent and impact of crop failures, river floods, tropical cyclones, heatwaves, wildfires, and droughts depend on the underlying meteorological, hydrological, or climatological events as well as on human factors such as land use, water and agricultural management, and population density. In this module you\'ll learn how climate change contributes to extreme events and who is most affected by those.","authors":["Katja Frieler","Jan Volkholz","Fidel Thomet"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Policy"],"dev":true},{"portal":"Finance","portal-num":1,"main-topic":"Risks","path":"transition-risk","title":"Transition risk","description":"Discover finance risks related to transitions in a variety of sectors including: Fossil fuels, End User and Power","authors":["Nico Bauer","Bas van Ruijven","Nadia Zeissig"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portal-num":2,"main-topic":"Opportunities","path":"investment-opportunities","title":"Investment Opportunities and Alignment: What are investment opportunities in a low carbon world?","description":"Placeholder Text","authors":["Bas van Ruijven","Christoph Bertram","Jonas Parnow"],"readingTime":25,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Finance","portal-num":3,"main-topic":"Risks","path":"physical-risks","title":"Physical Risks","description":"Placeholder Text TODO","authors":["Katja Frieler","Jan Volkholz ","Fidel Thomet"],"readingTime":15,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":"Policy","portal-num":5,"main-topic":"Transitions","path":"primary-energy","title":"Primary Energy Scenarios","description":"Placeholder Text TODO","authors":["Hannah Schwan","Dennis Ostendorf"],"readingTime":15,"gem":false,"scenario-finder":false,"data":true,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"finder","path":"finder","title":"Scenario Finder","description":"Placeholder Text TODO","authors":["Jonas Parnow"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":"Policy","portal-num":[8,9,10],"main-topic":"Extreme Events","path":"earth","title":"Senses Earth","description":"Discover how different regions will be impacted by extreme events in the next 100 years.","authors":["Fidel Thomet"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"IIASA Database","path":"database","title":"Link to IIASA Database","description":"Placeholder Text TODO","authors":["Volker Krey"],"readingTime":null,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true},{"portal":null,"portal-num":null,"main-topic":"Budget","path":"film","title":"CO2 Film","description":"Placeholder Text TODO","authors":["Boris Müller"],"readingTime":8,"gem":false,"scenario-finder":false,"data":false,"share":false,"bg":"bg3","alignRight":false,"tags":["Finance","Policy"],"dev":true}]}')},bcf5:function(e,t,a){"use strict";var i=a("1e28"),n=a.n(i);n.a}});
//# sourceMappingURL=app.1bc27f92.js.map