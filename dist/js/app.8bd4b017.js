(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],s=0,f=[];s<i.length;s++)r=i[s],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(t);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},l=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-07b18a43":"e82f2fa4","chunk-2d2248a4":"a5fd1581","chunk-2d22d746":"6ee7b8af","chunk-526c96d2":"daee53a2","chunk-57c1e344":"0867c855","chunk-b9392470":"ade21b42"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-07b18a43":1,"chunk-526c96d2":1,"chunk-57c1e344":1,"chunk-b9392470":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-07b18a43":"2b11972c","chunk-2d2248a4":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-526c96d2":"12f94330","chunk-57c1e344":"b371715b","chunk-b9392470":"78c3aef2"}[e]+".css",o=c.p+a,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var u=l[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete r[e],h.parentNode.removeChild(h),n(l)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=l);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:s})},12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var h=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),n("router-link",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),e._v("|\n    "),n("router-link",{attrs:{to:"/coin"}},[e._v("Coin")]),e._v("|\n    "),n("router-link",{attrs:{to:"/wallet"}},[e._v("Wallet")]),e._v("|\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},o=[],l=(n("5c0b"),n("2877")),i={},c=Object(l["a"])(i,r,o,!1,null,null,null),u=c.exports,s=n("8c4f"),f=function(){return n.e("chunk-57c1e344").then(n.bind(null,"bb51"))},h=function(){return n.e("chunk-2d2248a4").then(n.bind(null,"e124"))},d=function(){return n.e("chunk-b9392470").then(n.bind(null,"fbd4"))},p=function(){return n.e("chunk-526c96d2").then(n.bind(null,"e7fa"))},m=function(){return n.e("chunk-07b18a43").then(n.bind(null,"e053"))},b=function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},w=[{path:"/",name:"home",component:f},{path:"/dashboard",name:"dashboard",component:h},{path:"/coin",name:"coin",component:d},{path:"/coin/:coin",name:"coinDetail",props:!0,component:p},{path:"/wallet/:wallet?",name:"wallet",props:!0,component:m},{path:"/about",name:"about",component:b}],v=w;a["a"].use(s["a"]);var k=new s["a"]({mode:"history",base:"/",routes:v}),g=n("cebc"),y=n("768b"),_=(n("96cf"),n("3b8d")),S=n("2f62"),D=n("aede"),C=n("9530"),O=n.n(C);function q(){var e=Object(D["a"])(["\n  query GetWallet($wallet: String!) {\n    qAccount(wallet: $wallet) {\n      id\n      address\n      balances {\n        total_unpaid\n        total_unsold\n        total_earned\n        total_paid\n        balance\n      }\n\n      hashrate_24h {\n        timestamp\n        hashrate\n        share_count\n      }\n      workers {\n        id\n        userid\n        difficulty\n        version\n        password\n        worker\n        algo\n        extra\n        es\n        hashrate\n        reject\n        hashrate_24h {\n          hashrate\n          timestamp\n        }\n      }\n      earnings {\n        id\n        userid\n        coinid\n        blockid\n        create_time\n        amount\n        price\n        status\n        mature_time\n      }\n      # coin {\n      #   foundCoins {\n      #     id\n      #     symbol\n      #   }\n      # }\n    }\n  }\n"]);return q=function(){return e},e}function x(){var e=Object(D["a"])(["\n  query GetCoinDetail($coinSymbol: String!) {\n    qCoins(query: $coinSymbol) {\n      symbol\n      name\n      algo\n      port\n      price_sats\n      height\n      difficulty\n      reward\n      shares\n      workers\n      ttf\n      network_ttf\n      pool_ttf\n      block_time\n      notes\n      exchange_volume\n      link_site\n      link_exchange\n      link_bitcointalk\n      link_github\n      link_explorer\n      mature_blocks\n      # blocks_24h\n      # block_data {\n      #   timesincelast\n      #   lastblockheight\n      #   blocks_1h\n      #   blocks_1d\n      #   blocks_7d\n      #   blocks_30d\n      # }\n      blocks {\n        height\n        difficulty\n        time\n        category\n        confirmations\n        amount\n      }\n    }\n  }\n"]);return x=function(){return e},e}function j(){var e=Object(D["a"])(["\n  query GetCoinsSummary {\n    qCoins {\n      symbol\n      name\n      algo\n      port\n      hashrate\n      new\n      profit\n      coin_type\n      pool_luck\n      relative_profit\n\n      network_hashrate\n    }\n  }\n"]);return j=function(){return e},e}var P=O()(j()),W=O()(x()),T=O()(q()),E=n("2c82"),A=new E["a"]({uri:"http://ice.broke-it.net:2690/api/graphql"});A.defaultOptions={watchQuery:{fetchPolicy:"no-cache"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{errorPolicy:"all"}};var M=A;a["a"].use(S["a"]);var N=new S["a"].Store({state:{coinsSummary:[],coinDetail:{},coinDetailStatus:0,walletDetail:{},walletStatus:0,walletsCache:[]},mutations:{saveCoins:function(e,t){e.coinsSummary=t.coinsSummary},saveCoinDetail:function(e,t){e.coinDetail=t.coinDetail,e.coinDetailStatus=t.coinDetailStatus},saveWalletDetail:function(e,t){e.walletDetail=t.wallet,e.walletStatus=t.walletStatus},updateWalletsCache:function(e,t){var n=t.wallets;localStorage.setItem("wallets",JSON.stringify(n)),e.walletsCache=n}},actions:{fetchCoinsSummary:function(){var e=Object(_["a"])(regeneratorRuntime.mark(function e(t){var n,a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,M.query({query:P});case 3:a=e.sent,console.log(a.data.qCoins),r=a.data.qCoins,n("saveCoins",{coinsSummary:r});case 7:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),fetchCoinDetail:function(){var e=Object(_["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,l,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,t.state,r="",o=0,a("saveCoinDetail",{coinDetail:r,coinDetailStatus:o}),!n.coinDetail){e.next=12;break}return o=2,a("saveCoinDetail",{coinDetail:r,coinDetailStatus:o}),console.log(n.coinDetail),e.next=10,M.query({query:W,variables:{coinSymbol:n.coinDetail}});case 10:l=e.sent,l.errors?(console.log(l.errors),o=-1):(i=Object(y["a"])(l.data.qCoins,1),r=i[0],o=1);case 12:a("saveCoinDetail",{coinDetail:r,coinDetailStatus:o});case 13:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),fetchWallet:function(){var e=Object(_["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,l;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.commit,t.state,r="",o=0,a("saveWalletDetail",{wallet:r,walletStatus:o}),!n.wallet){e.next=11;break}return o=2,a("saveWalletDetail",{wallet:r,walletStatus:o}),e.next=9,M.query({query:T,variables:{wallet:n.wallet}});case 9:l=e.sent,l.errors?o=-1:(r=l.data.qAccount[0],o=1);case 11:a("saveWalletDetail",{wallet:r,walletStatus:o}),this.dispatch("addToWalletsCache",{wallet:r,walletStatus:o});case 13:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),addToWalletsCache:function(e,t){var n=e.commit,a=(e.state,JSON.parse(localStorage.getItem("wallets")));if(a||(a=[]),1==t.walletStatus){var r=t.wallet;-1===a.indexOf(r.address)&&a.push(r.address)}n("updateWalletsCache",{wallets:a})},removeFromWalletsCache:function(e,t){var n=e.commit,a=(e.state,t.wallet),r=JSON.parse(localStorage.getItem("wallets")),o=r.indexOf(a);-1!==o&&r.splice(o,1),n("updateWalletsCache",{wallets:r})}},getters:{coins:function(e){return e.coinsSummary},coinDetail:function(e){return e.coinDetail},wallet:function(e){return e.walletDetail.id},walletStatus:function(e){return e.walletStatus},wallets:function(e){return e.walletsCache},walletHashrate_24h:function(e){var t=e.walletDetail;return t.hashrate_24h},walletBalances:function(e){var t=e.walletDetail.balances,n={unsold:t.total_unsold,balance:t.balance,unpaid:t.total_unpaid,paid24h:t.total_paid,total:t.total_earned};return n},walletEarnings:function(e){var t=e.walletDetail;Object(g["a"])({},t.earnings);return console.log("earnings",t.earnings),t.earnings},walletWorkers:function(e){return e.walletDetail.workers}}});a["a"].filter("hashformatter",function(e,t){var n=["","K","M","G","T","P"],a={equihash:"sol",cuckoo:"c"},r=a[t];r||(r="H");var o=0;if(0==e)return"0 ".concat(r,"/s");while(e>1e3)e/=1e3,o++;return e=Math.round(10*e)/10,"".concat(e," ").concat(n[o]).concat(r,"/s")}),a["a"].filter("readableTimeDiff",function(e,t){var n=0,a="";switch(t){case"timeBlock":n=(new Date).getTime()/1e3-e;break;case"absolute":n=e;break}return n>86400?(n=n/60/60/24,a="d"):n>3600?(n=n/60/60,a="h"):n>60?(n/=60,a="m"):a="s","".concat(Math.round(n)).concat(a)}),a["a"].filter("diffFilter",function(e){return e>1e3?(e/=1e3,e=Math.round(10*e)/10,"".concat(e,"k")):(e=Math.round(10*e)/10,e)}),a["a"].config.productionTip=!1,new a["a"]({router:k,store:N,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.8bd4b017.js.map