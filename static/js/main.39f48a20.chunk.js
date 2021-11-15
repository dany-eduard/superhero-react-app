(this["webpackJsonpsuperhero-app"]=this["webpackJsonpsuperhero-app"]||[]).push([[1],{24:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=function(){return Object(a.jsx)("div",{className:"mt-4 d-flex justify-content-center",children:Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return b}));var a=n(13),c=n.n(a),r=n(22),s=n(23),i=n.n(s),o=n(6),l="https://superheroapi.com/api.php/",u="2043415639160984",d=function(e,t){var n=e.map((function(e){return e.value.data}));t(Object(o.b)(n))},b=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(o.d)(!0)),t.prev=1,t.next=4,i.a.get("".concat(l).concat(u,"/search/").concat(e));case 4:a=t.sent,r=a.data.results||[],n(Object(o.c)()),n(Object(o.b)(r)),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(1),new Error(t.t0);case 13:return t.prev=13,n(Object(o.d)(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()};t.a=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a,r,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Object(o.d)(!0)),a=e.map((function(e){return i.a.get("".concat(l).concat(u,"/").concat(e))})),t.prev=2,t.next=5,Promise.allSettled(a);case 5:r=t.sent,s=r.filter((function(e){return"fulfilled"===e.status})),d(s,n),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(2),new Error(t.t0);case 13:return t.prev=13,n(Object(o.d)(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(25),c=n(40),r=n.n(c),s=n(7),i=n.n(s),o=n(1),l=function(e){var t=e.autoComplete,n=void 0===t?"off":t,c=e.className,s=void 0===c?"":c,i=e.divClass,l=void 0===i?"":i,u=e.id,d=void 0===u?r()("html-input-"):u,b=e.onChange,j=e.placeholder,p=void 0===j?"":j,h=e.readOnly,f=void 0!==h&&h,v=e.resProps,O=void 0===v?{}:v,x=e.type,m=void 0===x?"text":x,g=e.value;return Object(o.jsx)("div",{className:"input-group ".concat(l),children:Object(o.jsx)("input",Object(a.a)({autoComplete:n,className:"form-control me-2 ".concat(s),id:d,type:m,value:g,readOnly:f,placeholder:p,onChange:b},O))})};l.defaultProps={autoComplete:i.a.string,className:i.a.string,divClass:i.a.string,id:i.a.string,placeholder:i.a.string,readOnly:i.a.bool,resProps:i.a.object,type:i.a.string};var u=l},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return l}));var a=n(38),c=n(18),r=Object(c.b)({name:"superHeroes",initialState:{hero:{},list:[],index:1,loading:!1},reducers:{setHero:function(e,t){e.hero=t.payload},pushHerotoList:function(e,t){var n;(n=e.list).push.apply(n,Object(a.a)(t.payload))},resetList:function(e){e.list=[]},setIndex:function(e,t){e.index=t.payload},incrementIndex:function(e){e.index+=1},resetIndex:function(e){e.index=1},decrementIndex:function(e){e.index-=1},setLoading:function(e,t){e.loading=t.payload}}}),s=r.actions,i=(s.setHero,s.pushHerotoList),o=s.resetList,l=(s.incrementIndex,s.setIndex,s.setLoading);t.a=r.reducer},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),r=n(0),s=n.n(r),i=n(18),o=n(6),l=Object(i.a)({reducer:{superHeroes:o.a}}),u=n(14),d=n(11),b=n(2),j=n(8),p=n(28),h=n(27),f=n(1),v=function(){var e=Object(u.b)(),t=Object(b.f)(),n=Object(b.e)().pathname,a=Object(r.useState)(void 0),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){i("")}),[n]),Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsx)(d.b,{className:"navbar-brand ".concat("/superhero-react-app"===n&&"active"),to:"/superhero-react-app",children:"Inicio"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(f.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(d.b,{className:"nav-link ".concat("/habilidades"===n&&"active"),to:"/habilidades",children:"Habilidades"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(d.b,{className:"nav-link ".concat("/apariencia"===n&&"active"),to:"/apariencia",children:"Apariencia"})})]}),Object(f.jsxs)("form",{className:"d-flex",onSubmit:function(n){n.preventDefault(),t("resultado-busqueda?".concat(s)),e(Object(o.c)()),s&&e(Object(h.b)(s))},children:[Object(f.jsx)(p.a,{autoComplete:"off",id:"input-search",onChange:function(e){i(e.target.value)},placeholder:"Buscar un heroe",value:s}),Object(f.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Buscar"})]})]})]})})},O=function(e){var t=e.children;return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)("main",{children:t})]})},x=n(24),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,104))})),g=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,105))})),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,106))})),N=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,107))})),C=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,108))})),k=function(){return Object(f.jsx)(d.a,{children:Object(f.jsx)(O,{children:Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(x.a,{}),children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{path:"*",element:Object(f.jsx)(N,{})}),Object(f.jsx)(b.a,{path:"/apariencia",element:Object(f.jsx)(m,{})}),Object(f.jsx)(b.a,{path:"/habilidades",element:Object(f.jsx)(y,{})}),Object(f.jsx)(b.a,{path:"/resultado-busqueda",element:Object(f.jsx)(C,{})}),Object(f.jsx)(b.a,{path:"/superhero-react-app",element:Object(f.jsx)(g,{})})]})})})})},w=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,103)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(82);c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(u.a,{store:l,children:Object(f.jsx)(k,{})})}),document.getElementById("root")),w()}},[[83,2,3]]]);
//# sourceMappingURL=main.39f48a20.chunk.js.map