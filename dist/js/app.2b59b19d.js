(function(e){function t(t){for(var n,a,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{"chunk-2402fe05":"4fd4f423","chunk-7637352f":"d1e17833","chunk-e9ce6098":"a32374de",pdfjsWorker:"781657d3"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-2402fe05":1,"chunk-7637352f":1,"chunk-e9ce6098":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({pdfjsWorker:"pdfjsWorker"}[e]||e)+"."+{"chunk-2402fe05":"50cf5e21","chunk-7637352f":"eeb3796d","chunk-e9ce6098":"0d814a01",pdfjsWorker:"31d6cfe0"}[e]+".css",o=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){a[e]=0}));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("ce5b"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("layout")},i=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-list")],1),r("v-divider"),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},e._l(e.items,function(t){return r("v-list-tile",{key:t.title,attrs:{to:t.path}},[r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),1)],1),r("v-toolbar",{attrs:{color:"blue-grey darken-3\n",dark:"",fixed:"",app:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("Real Estate Web Tools")]),r("v-spacer")],1),r("v-content",[r("router-view")],1),r("v-footer",{staticClass:"footer",attrs:{color:"blue-grey darken-3",app:""}},[r("a",{attrs:{href:"//paypal.me/lvmgmt",target:"_blank"}},[r("v-btn",{attrs:{small:""}},[e._v("Donate")])],1),e._v("\n        Donations are not expected but who are we to stop you!\n        "),r("v-spacer"),r("span",{staticClass:"white--text"},[e._v("© Copyright Mark and Min")]),e._v("   \n      ")],1)],1)],1)},s=[],l=r("75fc"),p=(r("96cf"),r("3b8d")),f={data:function(){return{drawer:!1,items:[{title:"Home",icon:"home",path:"/"},{title:"Owners Statement",icon:"account_balance",path:"/appfolio"},{title:"About",icon:"question_answer",path:"/about"}],right:null}},methods:{removeAll:function(){this.$store.dispatch("clearProperties")},loadTextFromFile:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.target.files,this.$store.dispatch("analyzeStatements",Object(l["a"])(r));case 2:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},d=f,h=(r("70f3"),r("2877")),v=Object(h["a"])(d,u,s,!1,null,"cac515c0",null),m=v.exports,b={name:"app",components:{layout:m}},y=b,g=Object(h["a"])(y,c,i,!1,null,null,null),w=g.exports,k=r("8c4f"),x=function(){return r.e("chunk-2402fe05").then(r.bind(null,"bb51"))},j=function(){return r.e("chunk-e9ce6098").then(r.bind(null,"4a47"))},O=function(){return r.e("chunk-7637352f").then(r.bind(null,"f820"))},P=[{path:"/",name:"home",component:x},{path:"/appfolio",name:"appfolio",component:j},{path:"/about",name:"about",component:O}],_=P;n["default"].use(k["a"]);var C=new k["a"]({mode:"history",base:"/",routes:_}),S=(r("ac4d"),r("8a81"),r("ac6a"),r("2f62")),R=r("dede");n["default"].use(S["a"]);var E=new S["a"].Store({state:{propertyData:[]},mutations:{saveProperty:function(e,t){var r;(r=e.propertyData).push.apply(r,Object(l["a"])(t.properties))},clearProperties:function(e,t){e.propertyData=[]},clearProperty:function(e,t){e.propertyData.splice(t.index,1)}},actions:{analyzeStatements:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,c,i,u,s,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,t.state,a=!0,o=!1,c=void 0,e.prev=4,i=r[Symbol.iterator]();case 6:if(a=(u=i.next()).done){e.next=16;break}if(s=u.value,"application/pdf"!=s.type){e.next=13;break}return e.next=11,Object(R["a"])(s);case 11:l=e.sent,n("saveProperty",{properties:l});case 13:a=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](4),o=!0,c=e.t0;case 22:e.prev=22,e.prev=23,a||null==i.return||i.return();case 25:if(e.prev=25,!o){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:case"end":return e.stop()}},e,null,[[4,18,22,30],[23,,25,29]])}));function t(t,r){return e.apply(this,arguments)}return t}(),clearProperties:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,t.state,r("clearProperties");case 2:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),clearProperty:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,t.state,n("clearProperty",{index:r});case 2:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},getters:{properties:function(e){return e.propertyData}}});n["default"].filter("diffFilter",function(e){return e>1e3?(e/=1e3,e=Math.round(10*e)/10,"".concat(e,"k")):(e=Math.round(10*e)/10,e)});r("bf40");n["default"].config.productionTip=!1,n["default"].use(o.a,{theme:{primary:"#607d8b",secondary:"#03a9f4",accent:"#00bcd4",error:"#f44336",warning:"#ff9800",info:"#2196f3",success:"#4caf50"}}),new n["default"]({router:C,store:E,render:function(e){return e(w)}}).$mount("#app")},"70f3":function(e,t,r){"use strict";var n=r("86e3"),a=r.n(n);a.a},"86e3":function(e,t,r){},dede:function(e,t,r){"use strict";r.d(t,"a",function(){return l});r("456d"),r("6762"),r("2fdb"),r("a481"),r("ac4d"),r("8a81"),r("ac6a");var n=r("75fc"),a=(r("96cf"),r("3b8d")),o=r("9511"),c=r("f684"),i=function(e){return new c(function(t,r){var c=new FileReader;c.readAsArrayBuffer(e),c.onload=Object(a["a"])(regeneratorRuntime.mark(function e(){var r,a,i,u,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.getDocument({data:c.result}).promise;case 2:r=e.sent,a=[],i=1;case 5:if(!(i<r.numPages+1)){e.next=16;break}return e.next=8,r.getPage(i);case 8:return u=e.sent,e.next=11,u.getTextContent(s);case 11:l=e.sent,a.push.apply(a,Object(n["a"])(l.items));case 13:i++,e.next=5;break;case 16:t(a);case 17:case"end":return e.stop()}},e)}))})},u=function(e){var t,r,n=!1,a=[],o=[],c="",i="",u="",s={Date:0,"Payee / Payer":0,Type:0,Reference:0,Description:0,Income:0,Expense:0,Balance:0,"Cash In":0,"Cash Out":0},l="",p=!0,f=!1,d=void 0;try{for(var h,v=e[Symbol.iterator]();!(p=(h=v.next()).done);p=!0){var m=h.value,b=m.str.trim(),y=m.transform[4];n?0===b.indexOf("Ending Cash Balance")?(n=!1,r=null,o.push({property:c||"Unknown Property",period:i||"n/a",txs:a,acct_id:u})):null==r?r=parseFloat(b.replace(/,/g,"")):Object.keys(s).includes(b)||/Page.*of/.test(b)||(y>s["Balance"]?(t.balance+=b,a.push(t)):y>s["Expense"]?(t.expense+=b,t.amount-=parseFloat(b.replace(",",""))):y>s["Income"]?(t.income+=b,t.amount+=parseFloat(b.replace(",",""))):y>s["Description"]?t.desc+=" ".concat(b):y>s["Reference"]?t.ref+=b:y>s["Type"]?t.type+=b:y>s["Payee / Payer"]?t.payee+=" ".concat(b):y>s["Date"]&&(t={date:"01/01/1900",payee:"placeholder",type:"placeholder",ref:"placeholder",desc:"placeholder",income:"0",expense:"0",balance:"0",amount:0},t.date=b)):0===b.indexOf("Beginning Cash Balance as")?(n=!0,a=[]):"Properties"==l?(c=b,localStorage.getItem(c)&&(u=localStorage.getItem(c))):"Period:"==l?i=b:Object.keys(s).includes(b)&&("Cash In"==b?s["Income"]=y-10:"Cash Out"==b?s["Expense"]=y-10:s[b]=y-10),l=b}}catch(g){f=!0,d=g}finally{try{p||null==v.return||v.return()}finally{if(f)throw d}}return o},s={normalizeWhitespace:!0,disableCombineTextItems:!1},l=function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t);case 3:return r=e.sent,n=u(r),e.abrupt("return",n);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=app.2b59b19d.js.map