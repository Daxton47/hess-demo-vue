(function(t){function e(e){for(var i,o,s=e[0],c=e[1],A=e[2],d=0,u=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,A||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var A=0;A<s.length;A++)e(s[A]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"06a1":function(t,e){t.exports="data:image/webp;base64,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"},"134b":function(t,e,a){"use strict";a("7dd1")},1730:function(t,e,a){"use strict";a("ca11")},"1e2f":function(t,e,a){"use strict";a("d953")},"49eb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23");function n(t,e,a,n,r,o){var s=Object(i["A"])("the-nav"),c=Object(i["A"])("router-view");return Object(i["t"])(),Object(i["f"])(i["a"],null,[Object(i["j"])(s),Object(i["j"])(c)],64)}var r=a("06a1"),o=a.n(r),s=function(t){return Object(i["w"])("data-v-b03d689e"),t=t(),Object(i["u"])(),t},c={id:"app-nav",class:"d-flex align-items-center justify-content-between"},A=s((function(){return Object(i["g"])("img",{src:o.a,alt:"Hess Energy Solutions",style:{width:"60px"}},null,-1)})),l={class:"d-flex align-items-center"},d={class:"navigation"},u=Object(i["i"])("Home"),x={class:"navigation"},p=Object(i["i"])("Products"),f={class:"navigation"},b=Object(i["i"])("Free Quote"),m={class:"navigation"},k=Object(i["i"])("Services");function y(t,e,a,n,r,o){var s=Object(i["A"])("router-link"),y=Object(i["A"])("base-modal");return Object(i["t"])(),Object(i["f"])("nav",c,[Object(i["j"])(s,{to:"/",class:"navbar-brand"},{default:Object(i["E"])((function(){return[A]})),_:1}),Object(i["g"])("div",l,[Object(i["g"])("div",d,[Object(i["j"])(s,{to:"/",class:"nav-link active"},{default:Object(i["E"])((function(){return[u]})),_:1})]),Object(i["g"])("div",x,[Object(i["j"])(s,{to:"/",class:"nav-link active"},{default:Object(i["E"])((function(){return[p]})),_:1})]),Object(i["g"])("div",f,[Object(i["j"])(s,{to:"/",class:"nav-link active"},{default:Object(i["E"])((function(){return[b]})),_:1})]),Object(i["g"])("div",m,[Object(i["j"])(s,{to:"/",class:"nav-link active"},{default:Object(i["E"])((function(){return[k]})),_:1})])]),Object(i["g"])("div",null,[Object(i["g"])("button",{style:{cursor:"pointer"},onClick:e[0]||(e[0]=function(){return o.toggleModal&&o.toggleModal.apply(o,arguments)})},"Login / Register")]),Object(i["j"])(y,{open:r.loginIsOpen,header:!1,size:"xl"},null,8,["open"])])}var h={data:function(){return{loginIsOpen:!1}},methods:{toggleModal:function(){this.loginIsOpen=!this.loginIsOpen}},mounted:function(){var t=document.getElementById("app-nav");window.addEventListener("scroll",(function(){t.classList.toggle("fixed-nav",window.scrollY>50)}))}},g=(a("1e2f"),a("6b0d")),v=a.n(g);const j=v()(h,[["render",y],["__scopeId","data-v-b03d689e"]]);var O=j,B={name:"App",components:{TheNav:O}};a("1730");const w=v()(B,[["render",n]]);var G=w,D=a("6c02"),E=a("7fd2"),S=a.n(E),T=a("7f72"),F=a.n(T),V=a("97ac"),P=a.n(V),C=function(t){return Object(i["w"])("data-v-44e84b2c"),t=t(),Object(i["u"])(),t},z={class:"landing-section"},M=Object(i["h"])('<div class="container d-flex flex-column py-sm-8 py-md-0 pt-5 pb-2" data-v-44e84b2c><div class="row align-items-center min-vh-100" data-v-44e84b2c><div class="col-12" data-v-44e84b2c><div class="row align-items-center" data-v-44e84b2c><div class="col-lg-9 col-xl-8 col-xxl-7 mb-5" data-v-44e84b2c><h1 class="branding-display" data-v-44e84b2c> H.E.S.S. Energy Solutions </h1><h3 class="sub-branding-display" data-v-44e84b2c>The pioneers in lithium batteries.</h3><div class="d-flex align-items-center" style="margin-top:2rem;" data-v-44e84b2c><button class="me-2" data-v-44e84b2c>Shop Products</button><button data-v-44e84b2c>Our Team</button></div></div></div></div></div><div class="row justify-content-center" data-v-44e84b2c><div class="col-lg-9 text-center" data-v-44e84b2c><h2 class="pb-3 pt-2 underline" data-v-44e84b2c></h2><p class="brand-blurb" data-v-44e84b2c>H.E.S.S. Energy Storage Systems is well known as an experienced and professional San Francisco -based lithium power source producer. We provide clients with top of the line services that cater to their specific project needs and management requirements, and all at the most competitive rates. Contact us today and find out how we can help.</p></div></div></div>',1),R=C((function(){return Object(i["g"])("i",{class:"fas fa-arrow-down fa-lg"},null,-1)})),H=[R],I={id:"product-section",style:{margin:"6rem 5rem"}},Q={class:"container"},Y=C((function(){return Object(i["g"])("div",{class:"text-center"},[Object(i["g"])("h3",{class:"section-title"},"Products")],-1)})),J={class:"d-flex align-items-start justify-content-around"},X={class:"product-card shadow"},Z=C((function(){return Object(i["g"])("div",{class:"position-relative",style:{overflow:"hidden","border-top-right-radius":"4px","border-top-left-radius":"4px"}},[Object(i["g"])("img",{src:S.a,alt:""})],-1)})),L={class:"content"},q=C((function(){return Object(i["g"])("h5",null,"Forklifts",-1)})),N=C((function(){return Object(i["g"])("p",null,"We boast the best in the industry forklifts: zero maintenace, plug-and-go units. Includes real-time data tracking of battery health.",-1)})),W=Object(i["i"])("Learn More"),U=C((function(){return Object(i["g"])("div",{class:"product-progress"},null,-1)})),K={class:"product-card shadow"},_=C((function(){return Object(i["g"])("div",{class:"position-relative",style:{overflow:"hidden","border-top-right-radius":"4px","border-top-left-radius":"4px"}},[Object(i["g"])("img",{src:F.a,alt:""})],-1)})),$={class:"content"},tt=C((function(){return Object(i["g"])("h5",null,"Tug Carts",-1)})),et=C((function(){return Object(i["g"])("p",null,"Fast Opportunity Charging High Cycle Life (4,000+ Cycles) Longer Run Times With Increased Power Drop In Units (Plug & Play) ",-1)})),at=Object(i["i"])("Learn More"),it=C((function(){return Object(i["g"])("div",{class:"product-progress"},null,-1)})),nt={class:"product-card shadow"},rt=C((function(){return Object(i["g"])("div",{class:"position-relative",style:{overflow:"hidden","border-top-right-radius":"4px","border-top-left-radius":"4px"}},[Object(i["g"])("img",{src:P.a,alt:""})],-1)})),ot={class:"content"},st=C((function(){return Object(i["g"])("h5",null,"Off-Grid Units",-1)})),ct=C((function(){return Object(i["g"])("p",null,"Made Custom To You Quick Delivery Times 5 Year, 4,000 Cycle Warranty 5 Year BMS Warranty ",-1)})),At=Object(i["i"])("Learn More"),lt=C((function(){return Object(i["g"])("div",{class:"product-progress"},null,-1)}));function dt(t,e,a,n,r,o){var s=Object(i["A"])("router-link");return Object(i["t"])(),Object(i["f"])(i["a"],null,[Object(i["g"])("section",z,[M,Object(i["j"])(i["b"],{name:"fade"},{default:Object(i["E"])((function(){return[r.isScrolled?Object(i["e"])("",!0):(Object(i["t"])(),Object(i["f"])("div",{key:0,class:"scroll-down-button",onClick:e[0]||(e[0]=function(){return o.scrollPage&&o.scrollPage.apply(o,arguments)})},H))]})),_:1})]),Object(i["g"])("section",I,[Object(i["g"])("div",Q,[Y,Object(i["g"])("div",J,[Object(i["g"])("div",X,[Z,Object(i["g"])("div",L,[q,N,Object(i["j"])(s,{to:"/"},{default:Object(i["E"])((function(){return[W]})),_:1})]),U]),Object(i["g"])("div",K,[_,Object(i["g"])("div",$,[tt,et,Object(i["j"])(s,{to:"/"},{default:Object(i["E"])((function(){return[at]})),_:1})]),it]),Object(i["g"])("div",nt,[rt,Object(i["g"])("div",ot,[st,ct,Object(i["j"])(s,{to:"/"},{default:Object(i["E"])((function(){return[At]})),_:1})]),lt])])])])],64)}var ut=a("94f1"),xt=a.n(ut),pt={},ft={data:function(){return{direction:"forward",isScrolled:!1}},mounted:function(){var t=this;pt=xt.a.loadAnimation({container:document.getElementById("battery-charging"),renderer:"svg",loop:!1,autoplay:!1,animationData:a("60f8")}),pt.play(),window.addEventListener("scroll",(function(){t.isScrolled=window.scrollY>40}))},methods:{retriggerAnimation:function(){pt.pause();var t=pt.currentFrame;console.log(t),"forward"==this.direction?(pt.setDirection(-1),this.direction="backward"):(pt.setDirection(1),this.direction="forward"),pt.play()},scrollPage:function(){var t=document.getElementById("product-section");window.scrollTo({top:t.offsetTop+60,left:0,behavior:"smooth"})}}};a("624c");const bt=v()(ft,[["render",dt],["__scopeId","data-v-44e84b2c"]]);var mt=bt,kt=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",component:mt}]}),yt=kt,ht=(a("ab8b"),a("7b17"),{key:0,class:"backdrop"}),gt={class:"hs-modal-header"},vt={class:"hs-modal-content"};function jt(t,e,a,n,r,o){return Object(i["t"])(),Object(i["f"])(i["a"],null,[a.open?(Object(i["t"])(),Object(i["f"])("div",ht)):Object(i["e"])("",!0),a.open?(Object(i["t"])(),Object(i["f"])("div",{key:1,class:Object(i["p"])(["hs-modal",o.modalSize])},[Object(i["g"])("div",gt,[a.header?Object(i["z"])(t.$slots,"header",{key:0},void 0,!0):Object(i["e"])("",!0)]),Object(i["g"])("div",vt,[Object(i["z"])(t.$slots,"default",{},void 0,!0)])],2)):Object(i["e"])("",!0)],64)}var Ot={props:["title","open","size","header"],computed:{modalSize:function(){switch(this.size){case"sm":return"hs-modal-sm";case"md":return"hs-modal-md";case"lg":return"hs-modal-lg";case"xl":return"hs-modal-xl";default:return"hs-modal-md"}}},watch:{open:function(t){console.log("open changed"),console.log(t),document.body.style.overflow=t?"hidden":"initial"}}};a("134b");const Bt=v()(Ot,[["render",jt],["__scopeId","data-v-15b8676c"]]);var wt=Bt,Gt=a("86e6"),Dt=Object(i["d"])(G);Dt.use(Gt["a"]),Dt.use(yt),Dt.component("base-modal",wt),Dt.mount("#app")},"60f8":function(t){t.exports=JSON.parse('{"v":"5.6.8","fr":60,"ip":0,"op":420,"w":512,"h":512,"nm":"battery","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"borde","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[258,274,0],"ix":2},"a":{"a":0,"k":[88.75,211.443,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[14.85,0],[0,0],[0,-14.85],[0,0],[-14.85,0],[0,0],[0,14.849],[0,0]],"o":[[0,0],[-14.85,0],[0,0],[0,14.849],[0,0],[14.85,0],[0,0],[0,-14.85]],"v":[[61.5,-211.193],[-61.5,-211.193],[-88.5,-184.193],[-88.5,184.194],[-61.5,211.194],[61.5,211.194],[88.5,184.194],[88.5,-184.193]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,-10.199],[0,0],[10.199,0],[0,0],[0,10.198],[0,0],[-10.199,0]],"o":[[10.199,0],[0,0],[0,10.198],[0,0],[-10.199,0],[0,0],[0,-10.199],[0,0]],"v":[[61.5,-202.689],[79.996,-184.193],[79.996,184.194],[61.5,202.689],[-61.5,202.689],[-79.996,184.194],[-79.996,-184.193],[-61.5,-202.689]],"c":true},"ix":2},"nm":"Trazado 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Combinar trazados 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.470999983245,0.760999971278,0.847000002394,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[88.75,211.444],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":6,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"rayo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[257.5,258.5,0],"ix":2},"a":{"a":0,"k":[44.75,80.75,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":60,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":90,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":120,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":150,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":180,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":210,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":240,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":270,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":299,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":330,"s":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":360,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":390,"s":[80,80,100]},{"t":419,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[21.5,-80.5],[-44.5,11.5],[-6.5,11.5],[-23.5,80.5],[44.5,-11.5],[6.5,-11.5]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.987999949736,0.933000033509,0.128999986836,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[44.75,80.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"punta","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[258,39,0],"ix":2},"a":{"a":0,"k":[33.25,14.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-33,0],[0,0]],"o":[[0,0],[0,0],[33,0],[0,0]],"v":[[0,14],[-33,14],[0,-14],[33,14]],"c":false},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.470999983245,0.760999971278,0.847000002394,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[33.25,14.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"brillo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[263.2,274.035,0],"ix":2},"a":{"a":0,"k":[63,190.897,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-9.789],[0,0],[10.082,0],[0,0],[2.499,1.303],[-0.521,0],[0,0],[0,10.322],[0,0],[5.942,3.111]],"o":[[0,0],[0,10.322],[0,0],[-2.981,0],[0.511,0.05],[0,0],[10.081,0],[0,0],[0,-7.27],[9.368,0.81]],"v":[[63,-172.199],[63,172.13],[44.669,190.898],[-54.703,190.898],[-63,188.853],[-61.457,188.922],[37.916,188.922],[56.246,170.155],[56.246,-174.175],[46.213,-190.897]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[63,190.897],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"cristal","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[258,274,0],"ix":2},"a":{"a":0,"k":[70.5,193.295,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[10.45,0],[0,0],[0,10.449],[0,0],[-10.45,0],[0,0],[0,-10.451],[0,0]],"o":[[0,0],[-10.45,0],[0,0],[0,-10.451],[0,0],[10.45,0],[0,0],[0,10.449]],"v":[[51.5,193.296],[-51.5,193.296],[-70.5,174.296],[-70.5,-174.295],[-51.5,-193.295],[51.5,-193.295],[70.5,-174.295],[70.5,174.296]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.8,0.878,0.957,0.46,0.635,0.82,0.902,1,0.471,0.761,0.847,0,0.4,0.5,0.4,1,0.4],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Relleno de degradado 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[70.5,193.295],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":1,"nm":"Capa de ajuste 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[256,256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[4.308,3.88],[0,0],[0,0],[3.921,-4.893],[0,0],[0,0],[-5.089,-5.605],[0,0],[0,0],[-4.168,4.645],[0,0]],"o":[[0,0],[-4.308,-3.88],[0,0],[0,0],[-3.921,4.893],[0,0],[0,0],[5.089,5.605],[0,0],[0,0],[4.168,-4.645],[0,0]],"v":[[327.982,95.438],[322.933,86.067],[313.688,81.125],[202.125,80.938],[192.733,86.357],[187.938,95.438],[187.914,450.771],[192.286,461.208],[202.063,467.021],[314,466.959],[323.707,461.582],[328.045,452.834]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"sw":512,"sh":512,"sc":"#ffffff","ip":0,"op":420,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"liquidoCapaFrontal","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.853},"o":{"x":0.167,"y":0.167},"t":0,"s":[553.75,1651,0],"to":[111.067,-55.815,0],"ti":[-199.015,100.011,0]},{"i":{"x":0.833,"y":0.835},"o":{"x":0.167,"y":0.326},"t":328,"s":[1255.972,1298.111,0],"to":[36.911,-18.549,0],"ti":[-20.599,10.352,0]},{"t":419,"s":[1343.75,1254,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[532,532,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[14.25,0],[0,0],[15.008,0],[0,0],[17.25,0],[0,0],[17.25,0],[0,0],[15.25,0],[0,0],[15.25,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-14.25,0],[0,0],[-15.5,0],[0,0],[-17.25,0],[0,0],[-17.25,0],[0,0],[-15.25,0],[0,0],[-15.25,0]],"v":[[-372.5,-214.5],[-372,126.5],[-33.5,126.5],[-33.531,-214.5],[-58.25,-217.5],[-82.25,-214.5],[-109.25,-211.5],[-140.25,-214.5],[-171.25,-217.5],[-203.25,-214.5],[-234.25,-211.5],[-264.25,-214.5],[-292.25,-217.5],[-318.25,-214.5],[-346.25,-211.5]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[1,0.843137264252,0,1]},{"t":270,"s":[0.537254901961,0.890196078431,0.243137254902,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-121.205,-166.039],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[26,26],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[14.25,0],[0,0],[15.008,0],[0,0],[17.25,0],[0,0],[17.25,0],[0,0],[15.25,0],[0,0],[15.25,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-14.25,0],[0,0],[-15.5,0],[0,0],[-17.25,0],[0,0],[-17.25,0],[0,0],[-15.25,0],[0,0],[-15.25,0]],"v":[[-372.5,-214.5],[-372,126.5],[-33.5,126.5],[-33.531,-214.5],[-58.25,-217.5],[-82.25,-214.5],[-109.25,-211.5],[-140.25,-214.5],[-171.25,-217.5],[-203.25,-214.5],[-234.25,-211.5],[-264.25,-214.5],[-292.25,-217.5],[-318.25,-214.5],[-346.25,-211.5]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0.890196084976,0.243137255311,0.243137255311,1]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":90,"s":[1,0.843137264252,0,1]},{"t":270,"s":[0.537254901961,0.890196078431,0.243137254902,1]}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Relleno 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-33.08,-166.039],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[26,26],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":540,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":1,"nm":"Capa de ajuste 2","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[256,256,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":0,"k":{"i":[[0,0],[4.308,3.88],[0,0],[0,0],[3.921,-4.893],[0,0],[0,0],[-5.089,-5.605],[0,0],[0,0],[-4.168,4.645],[0,0]],"o":[[0,0],[-4.308,-3.88],[0,0],[0,0],[-3.921,4.893],[0,0],[0,0],[5.089,5.605],[0,0],[0,0],[4.168,-4.645],[0,0]],"v":[[327.982,95.438],[322.933,86.067],[313.688,81.125],[202.125,80.938],[192.733,86.357],[187.938,95.438],[187.938,450.771],[192.286,461.208],[202.063,467.021],[314,466.959],[323.707,461.582],[328.045,452.834]],"c":true},"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Máscara 1"}],"sw":512,"sh":512,"sc":"#ffffff","ip":0,"op":660,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"liquidoCapaTrasera","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[-40.25,1651,0],"to":[-111.067,-55.815,0],"ti":[199.015,100.012,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":328,"s":[-742.472,1298.111,0],"to":[-36.911,-18.549,0],"ti":[20.599,10.352,0]},{"t":419,"s":[-830.25,1254,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-532,532,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[14.25,0],[0,0],[15.008,0],[0,0],[17.25,0],[0,0],[17.25,0],[0,0],[15.25,0],[0,0],[15.25,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-14.25,0],[0,0],[-15.5,0],[0,0],[-17.25,0],[0,0],[-17.25,0],[0,0],[-15.25,0],[0,0],[-15.25,0]],"v":[[-372.5,-214.5],[-372,126.5],[-33.5,126.5],[-33.531,-214.5],[-58.25,-217.5],[-82.25,-214.5],[-109.25,-211.5],[-140.25,-214.5],[-171.25,-217.5],[-203.25,-214.5],[-234.25,-211.5],[-264.25,-214.5],[-292.25,-217.5],[-318.25,-214.5],[-346.25,-211.5]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,0.753,0.075,0.075,0.46,0.753,0.394,0.075,1,0.753,0.714,0.075]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0,0.8,0.878,0.957,0.46,0.776,0.796,0.516,1,0.753,0.714,0.075]},{"t":270,"s":[0,0.8,0.878,0.957,0.46,0.482,0.824,0.714,1,0.165,0.769,0.471]}],"ix":9}},"s":{"a":0,"k":[-132,-62],"ix":5},"e":{"a":0,"k":[-19,68],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Relleno de degradado 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-121.205,-166.039],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[26,26],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[14.25,0],[0,0],[15.008,0],[0,0],[17.25,0],[0,0],[17.25,0],[0,0],[15.25,0],[0,0],[15.25,0]],"o":[[0,0],[0,0],[0,0],[0,0],[-14.25,0],[0,0],[-15.5,0],[0,0],[-17.25,0],[0,0],[-17.25,0],[0,0],[-15.25,0],[0,0],[-15.25,0]],"v":[[-372.5,-214.5],[-372,126.5],[-33.5,126.5],[-33.531,-214.5],[-58.25,-217.5],[-82.25,-214.5],[-109.25,-211.5],[-140.25,-214.5],[-171.25,-217.5],[-203.25,-214.5],[-234.25,-211.5],[-264.25,-214.5],[-292.25,-217.5],[-318.25,-214.5],[-346.25,-211.5]],"c":true},"ix":2},"nm":"Trazado 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Trazo 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,0.753,0.075,0.075,0.46,0.753,0.394,0.075,1,0.753,0.714,0.075]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":90,"s":[0,0.8,0.878,0.957,0.46,0.776,0.796,0.516,1,0.753,0.714,0.075]},{"t":270,"s":[0,0.8,0.878,0.957,0.46,0.482,0.824,0.714,1,0.165,0.769,0.471]}],"ix":9}},"s":{"a":0,"k":[-132,-62],"ix":5},"e":{"a":0,"k":[-19,68],"ix":6},"t":2,"h":{"a":0,"k":0,"ix":7},"a":{"a":0,"k":0,"ix":8},"nm":"Relleno de degradado 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-33.08,-166.039],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[26,26],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Forma 1","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":420,"st":0,"bm":0}],"markers":[]}')},"624c":function(t,e,a){"use strict";a("49eb")},"7dd1":function(t,e,a){},"7f72":function(t,e,a){t.exports=a.p+"img/baggage-tug.a68cc87f.jpg"},"7fd2":function(t,e,a){t.exports=a.p+"img/forklift.03ccb7de.jpg"},"97ac":function(t,e,a){t.exports=a.p+"img/generators.5f57d9b0.jpg"},ca11:function(t,e,a){},d953:function(t,e,a){}});
//# sourceMappingURL=app.4a3bcbdf.js.map