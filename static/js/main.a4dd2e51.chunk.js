(this["webpackJsonpphp-cms-client"]=this["webpackJsonpphp-cms-client"]||[]).push([[0],{30:function(e,t,n){e.exports=n(49)},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),i=n.n(c),u=n(5),s=n(3),l=n.n(s),o=n(7),h=n(1),f=n(2),m=n(13),p=function(){function e(t){Object(h.a)(this,e),this.status=200,this.success=!1,this.data=void 0,this.message="",this.data=t}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.status=parseInt(e.status),this.success=!!e.success,e.message&&(this.message="".concat(e.message)),this}}]),e}(),E=!0,d="https://jaspress.lichte.info/api",b="http://localhost:8073/Projects/jaspress-api/api",v=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"get",value:function(t,n){return new Promise(function(){var a=Object(o.a)(l.a.mark((function a(r){var c,i,u;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(c=new URL("".concat(e.baseUrl).concat(t))).searchParams.delete("license"),c.searchParams.append("license",n),a.next=5,fetch(c.href,{headers:e.headers(),credentials:"include"});case 5:return i=a.sent,a.next=8,i.json();case 8:u=a.sent,r(new p(u).deserialize(u));case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},{key:"post",value:function(t,n){return function(a){return new Promise(function(){var r=Object(o.a)(l.a.mark((function r(c){var i;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(e.baseUrl).concat(t),{method:"POST",body:JSON.stringify(Object(m.a)({},a,{license:n})),headers:e.headers(),credentials:"include"});case 2:return r.next=4,r.sent.json();case 4:i=r.sent,c(new p(i).deserialize(i));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}}},{key:"makeGetRequest",value:function(){var t=Object(o.a)(l.a.mark((function t(n,a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.get(a,I.license).then((function(e){t(new p(n.deserialize(e.data.data)).deserialize(e))}))})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"makePostRequest",value:function(){var t=Object(o.a)(l.a.mark((function t(n,a,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){e.post(a,I.license)(r).then((function(e){t(new p(n.deserialize(e.data.data)).deserialize(e))}))})));case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()}]),e}();v.baseUrl=E?d:b,v.headers=function(){return{}};var g=v,O=function(){function e(){Object(h.a)(this,e),this.key="",this.value="",this.defaultValue="",this.cssProperty=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.key=e.key,this.value=e.value,this.defaultValue=e.defaultValue,e.cssProperty&&(this.cssProperty=e.cssProperty),this}}]),e}(),y=function(){function e(){Object(h.a)(this,e),this.id=0,this.email="",this.isAdmin=!1}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.id&&(this.id=parseInt(e.id)),e.email&&(this.email="".concat(e.email)),e.isAdmin&&(this.isAdmin=!!e.isAdmin),this):this}}]),e}(),j=function(){function e(){Object(h.a)(this,e),this.settings=[],this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.settings&&(this.settings=e.settings.map((function(e){return(new O).deserialize(e)}))),e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),w=function(){function e(){Object(h.a)(this,e),this.content="",this.htmlContent="",this.description=""}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e.content&&(this.content=e.content),e.htmlContent&&(this.htmlContent=e.htmlContent),e.description&&(this.description=e.description),this}}]),e}(),k=function(){function e(){Object(h.a)(this,e),this.slug="",this.title="",this.markdown=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this.slug=e.slug,this.title=e.title,this.markdown=(new w).deserialize(e.markdown),this}}]),e}(),S=function(){function e(){Object(h.a)(this,e),this.page=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.page&&(this.page=(new k).deserialize(e.page)),this):this}}]),e}(),R=function(){function e(){Object(h.a)(this,e),this.baseApiUrl=""}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(this.baseApiUrl="".concat(e.base_api_url),this):this}}]),e}(),x=function(){function e(){Object(h.a)(this,e),this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),N=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"deserialize",value:function(e){return this}}]),e}(),T=function(){function e(){Object(h.a)(this,e),this.user=null}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(e.user&&(this.user=(new y).deserialize(e.user)),this):this}}]),e}(),_=function(){function e(){Object(h.a)(this,e),this.totalRequests=0,this.requestsByPath={}}return Object(f.a)(e,[{key:"deserialize",value:function(e){var t=this;return e?(this.totalRequests=parseInt(e.totalRequests),Object.keys(e.requestsByPath).forEach((function(n){return t.requestsByPath[n]=parseInt(e.requestsByPath[n])})),this):this}}]),e}(),z=function(){function e(){Object(h.a)(this,e),this.statistics=new _}return Object(f.a)(e,[{key:"deserialize",value:function(e){return e?(this.statistics=(new _).deserialize(e.statistics),this):this}}]),e}(),I=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"getConfig",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new R,"/config/get.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"preflight",value:function(){var t=Object(o.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.license=n,t.abrupt("return",g.makeGetRequest(new j,"/preflight.php"));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPage",value:function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new S,"/page/get.php?p=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"doLogin",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new x,"/auth/login.php",{email:t,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makePostRequest(new T,"/auth/register.php",{email:t,password:n}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new N,"/auth/logout.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getStatistics",value:function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.makeGetRequest(new z,"/admin/statistics/get.php"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();I.license="";var L,P=n(8);!function(e){e[e.SET_USER=0]="SET_USER",e[e.SET_SETTINGS=1]="SET_SETTINGS",e[e.SET_ERROR=2]="SET_ERROR"}(L||(L={}));var D,M=L,U=function(e){return e.user},A=function(e){return e.settings},C=function(e){return e.error};function q(e){var t,n=e.settings,a="html {\n        ".concat(n.filter((function(e){return null!=e.cssProperty})).map((function(e){return"".concat(e.cssProperty,": ").concat(e.value,";")})).join(""),"\n    }");return document.title=(null===(t=n.find((function(e){return"APP_NAME"===e.key})))||void 0===t?void 0:t.value)||"",r.a.createElement("style",null,a)}!function(e){e[e.INVALID_LICENSE=0]="INVALID_LICENSE",e[e.SERVER_ERROR=1]="SERVER_ERROR",e[e.NOT_FOUND=2]="NOT_FOUND"}(D||(D={}));var V=D;function F(e){switch(e){case 200:return null;case 404:return D.NOT_FOUND;case 500:return D.SERVER_ERROR}return D.SERVER_ERROR}function G(e){var t=function(e){switch(e){case V.INVALID_LICENSE:return r.a.createElement("p",null,"Invalid License!");case V.SERVER_ERROR:return r.a.createElement("p",null,"Unexpected Server error");case V.NOT_FOUND:return r.a.createElement("p",null,"Not found")}return r.a.createElement("p",null,"An error occurred")}(e.errorType);return r.a.createElement("section",null,t)}var B=n(6),H=n(14);function J(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),h=o[0],f=o[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(i,h)}},"Login"))}var W=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"login",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.doLogin(t,n);case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.register(t,n);case 2:return a=e.sent,e.abrupt("return",a.data.user);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.doLogout();case 2:return t=e.sent,e.abrupt("return",200===t.status);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();function K(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(P.b)(),s=Object(H.g)();return Object(a.useEffect)((function(){i({type:M.SET_USER,user:n})}),[n,i]),r.a.createElement("div",{className:"login-page"},r.a.createElement(J,{onSubmit:function(e,t){W.login(e,t).then((function(e){c(e),(null===e||void 0===e?void 0:e.isAdmin)?s.push("/admin"):s.push("/")}))}}),r.a.createElement(B.b,{to:"/auth/register"},"Sign up instead"))}function Q(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(P.b)();return Object(a.useEffect)((function(){W.logout().then((function(e){e&&i({type:M.SET_USER,user:null}),c(!1)}))}),[i]),n?r.a.createElement(r.a.Fragment,null):r.a.createElement(H.a,{to:"/auth/login"})}function X(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),h=o[0],f=o[1];return r.a.createElement("div",{className:"login-form"},r.a.createElement("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)}}),r.a.createElement("input",{type:"password",value:h,onChange:function(e){return f(e.target.value)}}),r.a.createElement("button",{onClick:function(){return t(i,h)}},"Login"))}function Y(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(P.b)(),s=Object(H.g)();return Object(a.useEffect)((function(){i({type:M.SET_USER,user:n})}),[n,i]),r.a.createElement("div",{className:"register-page"},r.a.createElement(X,{onSubmit:function(e,t){W.register(e,t).then((function(e){c(e),s.push("/")}))}}),r.a.createElement(B.b,{to:"/auth/login"},"Log in instead"))}var Z=function(e){var t=Object(H.h)().path;return r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"".concat(t,"/login")},r.a.createElement(K,null)),r.a.createElement(H.b,{path:"".concat(t,"/register")},r.a.createElement(Y,null)),r.a.createElement(H.b,{path:"".concat(t,"/logout")},r.a.createElement(Q,null)),r.a.createElement(H.b,{path:"".concat(t,"/*")},r.a.createElement(G,{errorType:V.NOT_FOUND})))};n(41),n(42);function $(e){var t=e.x,n=e.width,a=e.height,c=[{x:t+n/2,y:0},{x:t,y:a},{x:t+n,y:a}],i=Math.floor(101*Math.random())+15;return r.a.createElement("polygon",{className:"blade",points:c.map((function(e){return Object(m.a)({},e,{y:e.y+(120-a)})})).map((function(e){return"".concat(e.x," ").concat(e.y)})).join(", "),fill:"rgb(".concat(i,", 140, ").concat(i,")"),style:{animationDuration:"".concat(Math.floor(3e3*Math.random()-500)+500,"ms")}})}function ee(){for(var e=[],t=0;t<800;t++){var n=Math.floor(101*Math.random())+60;e.push({x:8*t,width:Math.round(n/12),height:n})}return r.a.createElement("g",{className:"grass"},e.map((function(e){return r.a.createElement($,Object.assign({},e,{key:e.x}))})))}var te=n(29),ne=function(e){var t=e.p1,n=e.p2,a=Object(te.a)(e,["p1","p2"]);return r.a.createElement("line",Object.assign({className:"sun-shine"},a,{x1:t.x,y1:t.y,x2:n.x,y2:n.y}))};function ae(e){for(var t=e.radius,n=e.shines,c=e.shineLengthLong,i=e.shineLengthShort,s=Object(a.useState)(0),l=Object(u.a)(s,2),o=l[0],h=l[1],f=2*Math.PI/o,m=[],p=0;p<o;p++){var E=t+(p%2===0?c:i),d=f*p;m.push({p1:{x:(t+10)*Math.cos(d)-140,y:300+(t+10)*Math.sin(d)},p2:{x:E*Math.cos(d)-140,y:300+E*Math.sin(d)}})}return r.a.createElement("g",{className:"sun",onAnimationEnd:function(){return h(n)}},r.a.createElement("circle",{cx:-140,cy:300,r:t}),m.map((function(e,t){return r.a.createElement(ne,Object.assign({key:"".concat(e.p1.x,",").concat(e.p1.y)},e))})))}var re=function(e){var t=e.onClick,n=e.text,c=e.pos,i=e.scale,s=e.animationDelay,l=e.color,o=Object(a.useState)(i),h=Object(u.a)(o,2),f=h[0],m=h[1],p=ce();return r.a.createElement("g",{className:"cloud",style:{animationDelay:"".concat(s,"ms")}},r.a.createElement("g",{transform:"translate(".concat(c.x,", ").concat(c.y,")"),onClick:t,onMouseEnter:function(){return m(i)},onMouseLeave:function(){return m(i)}},r.a.createElement("circle",{cx:0,cy:0,r:30*f,fill:l,className:"base",style:{animationDuration:"".concat(p,"ms")}}),r.a.createElement("circle",{cx:120*f,cy:0,r:30*f,fill:l,className:"base",style:{animationDuration:"".concat(p,"ms")}}),r.a.createElement("rect",{width:120*f,height:60*f,x:0,y:-30*f,fill:l,className:"base",style:{animationDuration:"".concat(p,"ms")}}),r.a.createElement("circle",{cx:80*f,cy:-30*f,r:50*f,fill:l,className:"big",style:{animationDuration:"".concat(ce(),"ms")}}),r.a.createElement("circle",{cx:25*f,cy:-30*f,r:30*f,fill:l,className:"small",style:{animationDuration:"".concat(ce(),"ms")}}),r.a.createElement("text",{x:60*f,y:-5*f,dominantBaseline:"middle",textAnchor:"middle",style:{animationDuration:"".concat(ce(),"ms")}},n)))};function ce(){return e=2e3,t=5e3,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e;var e,t}function ie(e){var t=e.links,n=Object(H.g)(),a=function(){if(window.innerHeight<600)return.7;if(window.innerHeight<700)return.75;if(window.innerHeight<800)return.85;return 1}();return r.a.createElement("div",{className:"svg-scene"},r.a.createElement("svg",null,r.a.createElement(ae,{radius:80,shineLengthLong:70,shineLengthShort:50,shines:16}),r.a.createElement(ee,null),t.map((function(e,t){return r.a.createElement(re,{key:e.target,text:e.title,onClick:function(){return n.push(e.target)},pos:{x:ue(),y:120*(t+2)*a},scale:a,animationDelay:3e3+600*t,color:"#fff"})}))),r.a.createElement("div",{className:"ground"}))}function ue(){var e=window.innerWidth-160;return Math.floor(Math.random()*(e-40+1))+40}function se(){Object(P.c)(U);return r.a.createElement("div",{className:"home-page"},r.a.createElement(ie,{links:[{target:"/about",title:"About"},{target:"/team",title:"Team"},{target:"/einrichtung",title:"Einrichtung"},{target:"/impressum",title:"Impressum"}]}))}var le=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:"admin-page ".concat(n)},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(B.b,{to:"/"},"Start")),r.a.createElement("li",null,r.a.createElement(B.b,{to:"/admin"},"Dashboard"))),r.a.createElement("hr",null)),r.a.createElement("main",null,t))};function oe(){return r.a.createElement(le,{className:"dashboard"},r.a.createElement("h1",null,"Dashboard"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(B.b,{to:"/admin/statistics"},"Statistics")),r.a.createElement("li",null,r.a.createElement(B.b,{to:"/admin/pages"},"Pages")),r.a.createElement("li",null,r.a.createElement(B.b,{to:"/admin/files"},"Files"))))}var he=n(28),fe=n.n(he);n(47);function me(e){var t=e.color,n=e.loading,c=e.delayMs,i=Object(a.useState)(n),s=Object(u.a)(i,2),l=s[0],o=s[1];return Object(a.useEffect)((function(){n||setTimeout((function(){return o(!1)}),c||0)}),[n,c]),r.a.createElement("div",{className:"loading loading-fs","data-active":l?"yes":"no"},r.a.createElement(fe.a,{color:t,loading:!0,size:25}))}function pe(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),s=Object(u.a)(i,2),l=s[0],o=s[1];return Object(a.useEffect)((function(){I.getStatistics().then((function(e){200===e.status&&c(e.data.statistics),o(!1)}))}),[c]),r.a.createElement(le,{className:"statistics"},r.a.createElement(me,{color:"#0a0",loading:l}),null!=n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,null===n||void 0===n?void 0:n.totalRequests)))}var Ee=function(e){var t=e.user,n=Object(H.h)().path;return null!=t&&t.isAdmin?r.a.createElement(H.d,null,r.a.createElement(H.b,{exact:!0,path:"".concat(n,"/")},r.a.createElement(oe,null)),r.a.createElement(H.b,{exact:!0,path:"".concat(n,"/statistics")},r.a.createElement(pe,null)),r.a.createElement(H.b,{path:"*"},r.a.createElement(G,{errorType:V.NOT_FOUND}))):r.a.createElement(H.a,{to:"/auth/logout"})};function de(e){return r.a.createElement(B.a,null,r.a.createElement(H.d,null,r.a.createElement(H.b,{path:"/auth"},r.a.createElement(Z,e)),r.a.createElement(H.b,{path:"/admin"},r.a.createElement(Ee,e)),r.a.createElement(H.b,{exact:!0,path:"/"},r.a.createElement(se,null)),r.a.createElement(H.b,{path:"*"},r.a.createElement(G,{errorType:V.NOT_FOUND}))))}n(48);function be(e){var t=e.license,n=Object(P.b)(),c=Object(P.c)(A),i=Object(P.c)(C),s=Object(P.c)(U),l=Object(a.useState)(!0),o=Object(u.a)(l,2),h=o[0],f=o[1];return Object(a.useEffect)((function(){t?I.getConfig().then((function(e){200!==e.status?n({type:M.SET_ERROR,error:F(e.status)}):(g.baseUrl=e.data.baseApiUrl,I.preflight(t).then(function(e){return function(t){200===t.status?(e({type:M.SET_SETTINGS,settings:t.data.settings}),e({type:M.SET_USER,user:t.data.user})):e({type:M.SET_ERROR,error:401===t.status?V.INVALID_LICENSE:F(t.status)})}}(n)))})):n({type:M.SET_ERROR,error:V.INVALID_LICENSE})}),[n,t]),Object(a.useEffect)((function(){null!=c&&f(!1)}),[c]),null!=i?r.a.createElement(G,{errorType:i}):r.a.createElement(r.a.Fragment,null,null!=c&&r.a.createElement(q,{settings:c}),r.a.createElement(me,{color:"#0a0",loading:h}),!h&&r.a.createElement(de,{user:s}))}var ve=function e(){Object(h.a)(this,e),this.user=null,this.settings=null,this.error=null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.SET_USER:return Object(m.a)({},e,{user:t.user});case M.SET_SETTINGS:return Object(m.a)({},e,{settings:t.settings});case M.SET_ERROR:return Object(m.a)({},e,{error:t.error})}return e},Oe=n(20),ye=Object(Oe.b)(ge);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P.a,{store:ye},r.a.createElement(be,{license:"123"}))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a4dd2e51.chunk.js.map