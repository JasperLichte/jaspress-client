(this["webpackJsonpphp-cms-client"]=this["webpackJsonpphp-cms-client"]||[]).push([[0],{34:function(e,t,n){e.exports=n(60)},45:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),u=n(4),s=n(1),l=n.n(s),o=n(7),m=n(2),f=n(3),h=n(9),p=function(){function e(t){Object(m.a)(this,e),this.status=200,this.success=!1,this.data=void 0,this.message="",this.data=t}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.status=parseInt(e.status),this.success=!!e.success,e.message&&(this.message="".concat(e.message)),this}}]),e}(),d=!0,E="https://jaspress.lichte.info/api",b="http://localhost:8073/Projects/jaspress-api/api",v=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"get",value:function(t,n){return new Promise(function(){var a=Object(o.a)(l.a.mark((function a(r){var c,i,u;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(c=new URL("".concat(e.baseUrl).concat(t))).searchParams.delete("license"),c.searchParams.append("license",n),a.next=5,fetch(c.href,{headers:e.headers(),credentials:"include"});case 5:return i=a.sent,a.next=8,i.json();case 8:u=a.sent,r(new p(u).deserialize(u));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"post",value:function(t,n){return function(a){return new Promise(function(){var r=Object(o.a)(l.a.mark((function r(c){var i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e.baseUrl).concat(t),{method:"POST",body:JSON.stringify(Object(h.a)({},a,{license:n})),headers:e.headers(),credentials:"include"});case 2:return r.next=4,r.sent.json();case 4:i=r.sent,c(new p(i).deserialize(i));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}}},{key:"makeGetRequest",value:function(){var t=Object(o.a)(l.a.mark((function t(n,a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.get(a,C.license).then((function(e){t(new p(n.deserialize(e.data.data)).deserialize(e))}))})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"makePostRequest",value:function(){var t=Object(o.a)(l.a.mark((function t(n,a,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.post(a,C.license)(r).then((function(e){t(new p(n.deserialize(e.data.data)).deserialize(e))}))})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()}]),e}();v.baseUrl=d?E:b,v.headers=function(){return{}};var g=v,O=function(){function e(){Object(m.a)(this,e),this.key="",this.value="",this.defaultValue="",this.cssProperty=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.key=e.key,this.value=e.value,this.defaultValue=e.defaultValue,e.cssProperty&&(this.cssProperty=e.cssProperty),this}}]),e}(),y=function(){function e(){Object(m.a)(this,e),this.id=0,this.email="",this.isAdmin=!1}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.id&&(this.id=parseInt(e.id)),e.email&&(this.email="".concat(e.email)),e.isAdmin&&(this.isAdmin=!!e.isAdmin),this):this}}]),e}(),j=function(){function e(){Object(m.a)(this,e),this.settings=[],this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.settings&&(this.settings=e.settings.map((function(e){return(new O).deserialize(e)}))),e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),w=function(){function e(){Object(m.a)(this,e),this.content="",this.htmlContent="",this.description=""}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e.content&&(this.content=e.content),e.htmlContent&&(this.htmlContent=e.htmlContent),e.description&&(this.description=e.description),this}}]),e}(),S=function(){function e(){Object(m.a)(this,e),this.slug="",this.title="",this.markdown=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.slug=e.slug,this.title=e.title,this.markdown=(new w).deserialize(e.markdown),this}}]),e}(),k=function(){function e(){Object(m.a)(this,e),this.page=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.page&&(this.page=(new S).deserialize(e.page)),this):this}}]),e}(),x=function(){function e(){Object(m.a)(this,e),this.baseApiUrl=""}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(this.baseApiUrl="".concat(e.base_api_url),this):this}}]),e}(),N=function(){function e(){Object(m.a)(this,e),this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),R=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this}}]),e}(),T=function(){function e(){Object(m.a)(this,e),this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),_=function(){function e(){Object(m.a)(this,e),this.totalRequests=0,this.requestsByPath={}}return Object(f.a)(e,[{key:"deserialize",value:function(e){var t=this;return e?(this.totalRequests=parseInt(e.totalRequests),Object.keys(e.requestsByPath).forEach((function(n){return t.requestsByPath[n]=parseInt(e.requestsByPath[n])})),this):this}}]),e}(),M=function(){function e(){Object(m.a)(this,e),this.statistics=new _}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(this.statistics=(new _).deserialize(e.statistics),this):this}}]),e}(),C=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"getConfig",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new x,"/config/get.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"preflight",value:function(){var t=Object(o.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.license=n,t.abrupt("return",g.makeGetRequest(new j,"/preflight.php"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPage",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new k,"/page/get.php?p=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createPage",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new R,"/admin/page/new.php",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"editPage",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new R,"/admin/page/edit.php",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"doLogin",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new N,"/auth/login.php",{email:t,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new T,"/auth/register.php",{email:t,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new R,"/auth/logout.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getStatistics",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new M,"/admin/statistics/get.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();C.license="";var D,I=n(8);!function(e){e[e.SET_USER=0]="SET_USER",e[e.SET_SETTINGS=1]="SET_SETTINGS",e[e.SET_ERROR=2]="SET_ERROR",e[e.SET_THEME=3]="SET_THEME"}(D||(D={}));var P,L=D,z=function(e){return e.user},U=function(e){return e.settings},F=function(e){return e.error},q=function(e){return e.theme};function A(e){var t=e.settings,n="html {\n        ".concat(t.filter((function(e){return null!=e.cssProperty})).map((function(e){return"".concat(e.cssProperty,": ").concat(e.value,";")})).join(""),"\n    }");return r.a.createElement("style",null,n)}!function(e){e[e.INVALID_LICENSE=1]="INVALID_LICENSE",e[e.SERVER_ERROR=2]="SERVER_ERROR",e[e.NOT_FOUND=3]="NOT_FOUND"}(P||(P={}));var G=P;function V(e){switch(e){case 200:return null;case 404:return P.NOT_FOUND;case 500:return P.SERVER_ERROR}return P.SERVER_ERROR}function B(e){var t=e.errorType,n=e.message,a=function(e){switch(e){case G.INVALID_LICENSE:return r.a.createElement("p",null,n||"Invalid License!");case G.SERVER_ERROR:return r.a.createElement("p",null,n||"Unexpected Server error");case G.NOT_FOUND:return r.a.createElement("p",null,n||"Not found")}return r.a.createElement("p",null,"An error occurred")}(t);return r.a.createElement("section",null,a)}var H=n(14);function W(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),m=o[0],f=o[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(i,m)}},"Login"))}var J=function(){function e(){Object(m.a)(this,e)}return Object(f.a)(e,null,[{key:"login",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.doLogin(t,n);case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.register(t,n);case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.doLogout();case 2:return t=e.sent,e.abrupt("return",200===t.status);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),K=n(6);function Q(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(I.b)(),s=Object(H.g)();return Object(a.useEffect)((function(){i({type:L.SET_USER,user:n})}),[n,i]),r.a.createElement("div",{className:"login-page"},r.a.createElement(W,{onSubmit:function(e,t){J.login(e,t).then((function(e){c(e),(null===e||void 0===e?void 0:e.isAdmin)?s.push("/admin"):s.push("/")}))}}),r.a.createElement(K.b,{to:"/auth/register"},"Sign up instead"))}function X(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(I.b)();return Object(a.useEffect)((function(){J.logout().then((function(e){e&&i({type:L.SET_USER,user:null}),c(!1)}))}),[i]),n?r.a.createElement(r.a.Fragment,null):r.a.createElement(H.a,{to:"/auth/login"})}function Y(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),m=o[0],f=o[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(i,m)}},"Login"))}function Z(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(I.b)(),s=Object(H.g)();return Object(a.useEffect)((function(){i({type:L.SET_USER,user:n})}),[n,i]),r.a.createElement("div",{className:"register-page"},r.a.createElement(Y,{onSubmit:function(e,t){J.register(e,t).then((function(e){c(e),s.push("/")}))}}),r.a.createElement(K.b,{to:"/auth/login"},"Log in instead"))}var $=function(e){var t=Object(H.i)().path;return r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"".concat(t,"/login")},r.a.createElement(Q,null)),r.a.createElement(H.b,{path:"".concat(t,"/register")},r.a.createElement(Z,null)),r.a.createElement(H.b,{path:"".concat(t,"/logout")},r.a.createElement(X,null)),r.a.createElement(H.b,{path:"".concat(t,"/*")},r.a.createElement(B,{errorType:G.NOT_FOUND})))};n(45),n(46);function ee(e){var t=e.x,n=e.width,a=e.height,c=[{x:t+n/2,y:0},{x:t,y:a},{x:t+n,y:a}],i=Math.floor(3e3*Math.random()-500)+500,u=Math.floor(101*Math.random())+15;return r.a.createElement("polygon",{className:"blade",points:c.map((function(e){return Object(h.a)({},e,{y:e.y+(120-a)})})).map((function(e){return"".concat(e.x," ").concat(e.y)})).join(", "),fill:"rgb(".concat(u,", 140, ").concat(u,")"),style:{animationDuration:"".concat(i,"ms, 2s"),animationDelay:"0s, ".concat(i,"ms")}})}function te(){for(var e=[],t=0;t<window.innerWidth/8;t++){var n=Math.floor(101*Math.random())+60;e.push({x:8*t,width:Math.round(n/12),height:n})}return r.a.createElement("g",{className:"grass"},e.map((function(e){return r.a.createElement(ee,Object.assign({},e,{key:e.x}))})))}var ne=n(33),ae=function(e){var t=e.p1,n=e.p2,a=e.filter,c=Object(ne.a)(e,["p1","p2","filter"]);return r.a.createElement("line",Object.assign({className:"sun-shine",filter:a},c,{x1:t.x,y1:t.y,x2:n.x,y2:n.y}))};function re(e){for(var t=e.radius,n=e.shines,c=e.shineLengthLong,i=e.shineLengthShort,s=Object(a.useState)(0),l=Object(u.a)(s,2),o=l[0],m=l[1],f=Object(a.useState)(""),h=Object(u.a)(f,2),p=h[0],d=h[1],E=2*Math.PI/o,b=[],v=0;v<o;v++){var g=t+(v%2===0?c:i),O=E*v;b.push({p1:{x:(t+10)*Math.cos(O)-140,y:300+(t+10)*Math.sin(O)},p2:{x:g*Math.cos(O)-140,y:300+g*Math.sin(O)},filter:""})}return r.a.createElement("g",{className:"sun",onAnimationEnd:function(){m(n),d("url(#softGlow)")}},r.a.createElement("defs",null,r.a.createElement("filter",{id:"softGlow",height:"300%",width:"300%",x:"-75%",y:"-75%"},r.a.createElement("feMorphology",{operator:"dilate",radius:"4",in:"SourceAlpha",result:"thicken"}),r.a.createElement("feGaussianBlur",{in:"thicken",stdDeviation:"40",result:"blurred"}),r.a.createElement("feFlood",{floodColor:"#f3f35c",result:"glowColor"}),r.a.createElement("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlow_colored"}),r.a.createElement("feMerge",null,r.a.createElement("feMergeNode",{in:"softGlow_colored"}),r.a.createElement("feMergeNode",{in:"SourceGraphic"})))),r.a.createElement("circle",{cx:-140,cy:300,r:t,filter:p}),b.map((function(e,t){return r.a.createElement(ae,Object.assign({key:"".concat(e.p1.x,",").concat(e.p1.y)},e))})))}var ce=function(e){var t=e.onClick,n=e.text,c=e.pos,i=e.scale,s=e.animationDelay,l=Object(a.useState)(i),o=Object(u.a)(l,2),m=o[0],f=o[1],h=function(){return e=2e3,t=5e3,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e;var e,t}(),p=Math.floor(14001*Math.random())+4e3;return r.a.createElement("g",{className:"cloud",style:{animationDelay:"".concat(s,"ms, 0ms")}},r.a.createElement("g",{transform:"translate(".concat(c.x,", ").concat(c.y,")"),onClick:t,onMouseEnter:function(){return f(i)},onMouseLeave:function(){return f(i)}},r.a.createElement("circle",{cx:0,cy:0,r:30*m,className:"base",style:{animationDuration:ie(h,p)}}),r.a.createElement("circle",{cx:120*m,cy:0,r:30*m,className:"base",style:{animationDuration:ie(h,p)}}),r.a.createElement("rect",{width:120*m,height:60*m,x:0,y:-30*m,className:"base",style:{animationDuration:ie(h,p)}}),r.a.createElement("circle",{cx:80*m,cy:-30*m,r:50*m,className:"big",style:{animationDuration:ie(h,p)}}),r.a.createElement("circle",{cx:25*m,cy:-30*m,r:30*m,className:"small",style:{animationDuration:ie(h,p)}}),r.a.createElement("text",{x:60*m,y:-5*m,dominantBaseline:"middle",textAnchor:"middle",style:{animationDuration:ie(h,p)}},n)))},ie=function(e,t){return"".concat(e,"ms, ").concat(t,"ms")};function ue(e){var t=e.links,n=Object(H.g)(),a=function(){if(window.innerHeight<600)return.7;if(window.innerHeight<700)return.75;if(window.innerHeight<800)return.85;return 1}();return r.a.createElement("div",{className:"svg-scene"},r.a.createElement("svg",null,r.a.createElement(re,{radius:80,shineLengthLong:70,shineLengthShort:50,shines:16}),r.a.createElement(te,null),t.map((function(e,t){return r.a.createElement(ce,{key:e.target,text:e.title,onClick:function(){return n.push(e.target)},pos:{x:se(),y:120*(t+2)*a},scale:a,animationDelay:3e3+600*t})}))),r.a.createElement("div",{className:"ground"}))}function se(){var e=window.innerWidth<=600?80:40,t=window.innerWidth-160;return window.innerWidth>1080&&(e=(window.innerWidth-1e3)/2,t=window.innerWidth-(window.innerWidth-1e3)/2),Math.floor(Math.random()*(t-e+1))+e}function le(){return Object(a.useEffect)((function(){document.body.classList.add("home")}),[]),r.a.createElement("div",{className:"home-page"},r.a.createElement(ue,{links:[{target:"/-/about",title:"\xdcber uns"},{target:"/-/team",title:"Team"},{target:"/-/einrichtung",title:"Einrichtung"},{target:"/-/impressum",title:"Impressum"}]}),r.a.createElement("h1",null,"Kinderstube Sethweg e.V."))}function oe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dashboard"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(K.b,{to:"/admin/impressum"},"Impressum")),r.a.createElement("li",null,r.a.createElement(K.b,{to:"/admin/statistics"},"Statistics"))))}var me=n(30),fe=n.n(me);n(51);function he(e){var t=e.color,n=e.loading,c=e.delayMs,i=e.fullScreen,s=Object(a.useState)(n),l=Object(u.a)(s,2),o=l[0],m=l[1];return Object(a.useEffect)((function(){n||setTimeout((function(){return m(!1)}),c||0)}),[n,c]),void 0===i&&(i=!1),r.a.createElement("div",{className:"loading ".concat(i&&" loading-fs"),"data-active":o?"yes":"no"},r.a.createElement(fe.a,{color:t,loading:!0,size:25}))}function pe(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),l=s[0],o=s[1];return Object(a.useEffect)((function(){C.getStatistics().then((function(e){200===e.status&&c(e.data.statistics),o(!1)}))}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{color:"#0a0",loading:l}),null!=n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,null===n||void 0===n?void 0:n.totalRequests)))}var de=function(e){var t=e.children;e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(K.b,{to:"/"},"Start")),r.a.createElement("li",null,r.a.createElement(K.b,{to:"/admin"},"Dashboard"))),r.a.createElement("hr",null)),r.a.createElement("main",null,t))};function Ee(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(null),s=Object(u.a)(i,2),l=s[0],o=s[1],m=Object(a.useState)(null),f=Object(u.a)(m,2),h=f[0],p=f[1];return Object(a.useEffect)((function(){C.getPage(e).then((function(e){c(!1),200===e.status?o(e.data.page):p(V(e.status))}))}),[e]),{page:l,loading:r,error:h}}var be=n(31),ve=(n(52),function(e){var t=e.md,n=Object(a.useRef)();return r.a.createElement("div",{className:"markdown-to-jsx",ref:n},r.a.createElement(be.a,{options:{}},t))});n(53);function ge(e){var t=e.slug,n=e.onSave,c=e.title,i=Ee(t),s=i.page,m=i.error,f=i.loading,h=Object(a.useState)(""),p=Object(u.a)(h,2),d=p[0],E=p[1],b=Object(a.useState)(c||""),v=Object(u.a)(b,2),g=v[0],O=v[1];function y(){return(y=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.createPage({p:t,content:d,title:g});case 2:return n=e.sent,e.abrupt("return",V(n.status));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.editPage({p:t,content:d,title:g});case 2:return n=e.sent,e.abrupt("return",V(n.status));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e;null!=s&&(E((null===s||void 0===s||null===(e=s.markdown)||void 0===e?void 0:e.content)||""),O((null===s||void 0===s?void 0:s.title)||""))}),[s]),r.a.createElement("div",{className:"edit-markdown-page"},r.a.createElement(he,{color:"#0a0",loading:f}),m&&m!==G.NOT_FOUND&&r.a.createElement(B,{errorType:m}),!f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"left"},m===G.NOT_FOUND&&""===g&&r.a.createElement("input",{value:g,onChange:function(e){return O(e.target.value)}}),r.a.createElement("textarea",{value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement(ve,{md:d}),r.a.createElement("button",{className:"save-btn",onClick:function(){m===G.NOT_FOUND?function(){return y.apply(this,arguments)}().then(n):function(){return j.apply(this,arguments)}().then(n)},disabled:""===t||""===d},"Save")))}var Oe=function(e){var t=e.user,n=Object(H.i)().path,a=Object(H.g)();return null!=t&&t.isAdmin?r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"".concat(n,"/")},r.a.createElement(de,null,r.a.createElement(oe,null))),r.a.createElement(H.b,{exact:!0,path:"".concat(n,"/impressum")},r.a.createElement(de,null,r.a.createElement(ge,{slug:"impressum",title:"Impressum",onSave:function(e){if(null==e)return a.push("/-/impressum")}}))),r.a.createElement(H.b,{exact:!0,path:"".concat(n,"/statistics")},r.a.createElement(de,null,r.a.createElement(pe,null))),r.a.createElement(H.b,{path:"*"},r.a.createElement(B,{errorType:G.NOT_FOUND}))):r.a.createElement(H.a,{to:"/auth/logout"})},ye={nav:{bg:"#222",font:"#ccc",activeFont:"#fff",activeBg:"transparent"},footer:{bg:"#222",font:"#ccc"}},je=n(16);function we(e){var t,n=Ee(e.slug),c=n.page,i=n.loading,u=n.error;return Object(a.useEffect)((function(){null!=c&&(document.title=c.title)}),[c]),r.a.createElement("section",null,r.a.createElement(he,{loading:i,color:"#0a0",delayMs:500,fullScreen:!1}),null==c?null==u?"":r.a.createElement(B,{errorType:u}):r.a.createElement(ve,{md:(null===c||void 0===c||null===(t=c.markdown)||void 0===t?void 0:t.content)||""}))}n(55),n(56);var Se=function(e){var t=e.theme,n=e.user;return r.a.createElement("footer",{className:"footer",style:{backgroundColor:t.footer.bg,color:t.footer.font}},r.a.createElement("div",null,null==n?r.a.createElement(K.b,{to:"/auth/login"},"Login"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,null===n||void 0===n?void 0:n.email),r.a.createElement("div",null,r.a.createElement(K.b,{to:"/auth/logout"},"Logout")),(null===n||void 0===n?void 0:n.isAdmin)&&r.a.createElement("div",null,r.a.createElement(K.b,{to:"/admin"},"Dashboard")))))},ke={initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},xe={duration:1,type:"tween",ease:"anticipate"},Ne=function(e){var t=e.children,n=e.theme,c=e.user,i=Object(I.b)();return Object(a.useEffect)((function(){i({type:L.SET_THEME,theme:n})}),[n,i]),r.a.createElement(je.b.div,{className:"page-content",initial:"initial",animate:"in",exit:"out",variants:ke,transition:xe},t,r.a.createElement(Se,{theme:n,user:c}))};function Re(e){return r.a.createElement(Ne,Object.assign({theme:Object(h.a)({},ye,{nav:Object(h.a)({},ye.nav,{bg:"purple",font:"#fff"}),footer:Object(h.a)({},ye.footer,{bg:"purple",font:"#fff"})})},e),r.a.createElement(we,{slug:"impressum"}))}n(57),n(58);var Te=function(e){var t=e.theme;return r.a.createElement("nav",{className:"nav",style:{backgroundColor:t.nav.bg,color:t.nav.font}},r.a.createElement("h1",null,r.a.createElement(K.b,{to:"/"},"Start")),r.a.createElement("ul",null,[{target:"/-/about",title:"\xdcber uns"},{target:"/-/team",title:"Team"},{target:"/-/einrichtung",title:"Einrichtung"},{target:"/-/impressum",title:"Impressum"}].map((function(e){return r.a.createElement("li",{key:e.target},r.a.createElement(K.c,{to:e.target,activeClassName:"active",activeStyle:{color:t.nav.activeFont,backgroundColor:t.nav.activeBg}},e.title))}))))},_e={initial:{opacity:0,x:"-100vw",scale:.8},in:{opacity:1,x:0,scale:1},out:{opacity:0,x:"100vw",scale:1.2}},Me={duration:1,type:"tween",transition:"anticipate"},Ce=function(e){var t=e.children,n=(e.user,Object(I.c)(q));return r.a.createElement(je.b.div,{className:"page",initial:"initial",animate:"in",exit:"out",variants:_e,transition:Me},r.a.createElement(Te,{theme:n}),r.a.createElement("div",{className:"content"},r.a.createElement("main",null,t)))},De=function(e){var t=Object(H.i)().path,n=Object(H.h)();return r.a.createElement(Ce,e,r.a.createElement(je.a,{exitBeforeEnter:!1},r.a.createElement(H.d,{location:n,key:n.pathname},r.a.createElement(H.b,{path:"".concat(t,"/impressum")},r.a.createElement(Re,e)),r.a.createElement(H.b,{path:"".concat(t,"/*")},r.a.createElement(Ne,Object.assign({theme:Object(h.a)({},ye)},e),r.a.createElement(B,{errorType:G.NOT_FOUND,message:"Seite nicht gefunden"}))))))};function Ie(e){return document.body.className="",r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/auth"},r.a.createElement($,e)),r.a.createElement(H.b,{path:"/admin"},r.a.createElement(Oe,e)),r.a.createElement(H.b,{path:"/-"},r.a.createElement(De,e)),r.a.createElement(H.b,{exact:!0,path:"/"},r.a.createElement(le,null)),r.a.createElement(H.b,{path:"*"},r.a.createElement(B,{errorType:G.NOT_FOUND})))}n(59);function Pe(e){var t=e.license,n=Object(I.b)(),c=Object(I.c)(U),i=Object(I.c)(F),s=Object(I.c)(z),l=Object(a.useState)(!0),o=Object(u.a)(l,2),m=o[0],f=o[1];return Object(a.useEffect)((function(){t?C.getConfig().then((function(e){200!==e.status?n({type:L.SET_ERROR,error:V(e.status)}):(g.baseUrl=e.data.baseApiUrl,C.preflight(t).then(function(e){return function(t){200===t.status?(e({type:L.SET_SETTINGS,settings:t.data.settings}),e({type:L.SET_USER,user:t.data.user})):e({type:L.SET_ERROR,error:401===t.status?G.INVALID_LICENSE:V(t.status)})}}(n)))})):n({type:L.SET_ERROR,error:G.INVALID_LICENSE})}),[n,t]),Object(a.useEffect)((function(){null!=c&&f(!1)}),[c]),null!=i?r.a.createElement(B,{errorType:i}):r.a.createElement(K.a,null,null!=c&&r.a.createElement(A,{settings:c}),r.a.createElement(he,{color:"#0a0",loading:m,fullScreen:!0}),!m&&r.a.createElement(Ie,{user:s}))}var Le=function e(){Object(m.a)(this,e),this.user=null,this.settings=null,this.error=null,this.theme=ye},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.SET_USER:return Object(h.a)({},e,{user:t.user});case L.SET_SETTINGS:return Object(h.a)({},e,{settings:t.settings});case L.SET_ERROR:return Object(h.a)({},e,{error:t.error});case L.SET_THEME:return Object(h.a)({},e,{theme:t.theme})}return e},Ue=n(21),Fe=Object(Ue.b)(ze);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{store:Fe},r.a.createElement(Pe,{license:"a58Gx?64"}))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f9a9471.chunk.js.map