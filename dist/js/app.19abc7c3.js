(function(t){function e(e){for(var n,a,l=e[0],s=e[1],c=e[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,l=1;l<r.length;l++){var s=r[l];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"10f8":function(t,e,r){},4877:function(t,e,r){"use strict";r("871c")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("HeadreComp",{on:{startSearch:t.startSearch}}),0===t.result.movie.length&&0===t.result.tv.length?r("h1",[t._v(" Nessun risultato trovato ")]):t._e(),t.result.movie.length>0?r("MainComp",{attrs:{list:t.result.movie,type:"movie"}}):t._e(),t.result.tv.length>0?r("MainComp",{attrs:{list:t.result.tv,type:"tv"}}):t._e()],1)},o=[],a=r("bc3a"),l=r.n(a),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:" col-12 d-flex align-items-center"},[t._m(0),r("div",{staticClass:"box-search col-3 offset-4 d-flex justify-content-evenly"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.strFilm,expression:"strFilm",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Cerca qui il tuo film..."},domProps:{value:t.strFilm},on:{input:function(e){e.target.composing||(t.strFilm=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("button",{staticClass:"btn btn-outline-danger",on:{click:function(e){return t.$emit("startSearch",{text:t.strFilm,type:"all"})}}},[t._v("Cerca")])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo col-3 offset-1"},[r("h1",[t._v("boolflix")])])}],u={name:"HeaderComp",data:function(){return{strFilm:""}},methods:{}},f=u,p=(r("4877"),r("2877")),d=Object(p["a"])(f,s,c,!1,null,"f8b8b2e2",null),m=d.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"p-5"},[r("h2",[t._v(t._s(t.titles[t.type]))]),r("div",{staticClass:"d-flex flex-wrap"},t._l(t.list,(function(t){return r("Card",{key:t.id,attrs:{card:t}})})),1)])},h=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"col-12 mb-5 col-md-6 col-lg-4 col-xl-3 col-xxl-2"},[r("li"),r("li",[t._v(t._s(t.card.title||t.card.name))]),r("li",[t._v(t._s(t.card.original_title||t.card.original_name))]),r("li",[t._v("Lingua: "+t._s(t.card.original_language))]),r("li",[t._v("Voto: "+t._s(t.card.vote_average))])])},b=[],_={name:"Card",props:{card:Object}},y=_,x=(r("9f5e"),Object(p["a"])(y,g,b,!1,null,"1a8c7f56",null)),C=x.exports,O={name:"MainComp",components:{Card:C},data:function(){return{titles:{movie:"Film",tv:"Serie TV"}}},props:{type:String,list:Array}},j=O,w=(r("69dc"),Object(p["a"])(j,v,h,!1,null,"38214d12",null)),S=w.exports,M={name:"App",components:{HeadreComp:m,MainComp:S},data:function(){return{apiURL:"https://api.themoviedb.org/3/search/",apiKey:"fe3d6561f77f954abef97c97d11254e0",result:{movie:[],tv:[]}}},methods:{getApi:function(t,e){var r=this;l.a.get(this.apiURL+e,{params:{api_key:this.apiKey,query:t,language:"it-IT"}}).then((function(t){r.result[e]=t.data.results,console.log("movie",r.result.movie),console.log("serie tv",r.result.tv)})).catch((function(t){console.log(t)}))},resetResults:function(){this.result.movie=[],this.result.tv=[]},startSearch:function(t){this.resetResults(),"all"===t.type&&(this.getApi(t.text,"movie"),this.getApi(t.text,"tv"))}}},P=M,$=(r("5c0b"),Object(p["a"])(P,i,o,!1,null,null,null)),F=$.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(F)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"67ba":function(t,e,r){},"69dc":function(t,e,r){"use strict";r("67ba")},"871c":function(t,e,r){},"9c0c":function(t,e,r){},"9f5e":function(t,e,r){"use strict";r("10f8")}});
//# sourceMappingURL=app.19abc7c3.js.map