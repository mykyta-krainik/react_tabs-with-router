(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=(c(0),c(4)),i=c(2),j=c(6),b=c.n(j),r=c(1),l=function(e){var t=e.to,c=e.linkText;return Object(r.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",linkText:"Home"}),Object(r.jsx)(l,{to:"/tabs",linkText:"Tabs"})]})})})},o=(c(15),c(16),c(17),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})}),x=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},O=function(e){var t=e.tabs,c=e.selectedTabId;return Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":e.id===c}),children:Object(r.jsx)(a.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var e,t=Object(i.i)().tabId,c=void 0===t?"":t;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(O,{tabs:h,selectedTabId:c}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:c?null===(e=h.find((function(e){return e.id===c})))||void 0===e?void 0:e.content:"Please select a tab"})]})},m=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},v=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{element:Object(r.jsx)(o,{}),children:[Object(r.jsx)(i.c,{path:"/",element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.c,{path:"tabs",children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(u,{})}),Object(r.jsx)(i.c,{path:":tabId",element:Object(r.jsx)(u,{})})]}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(m,{})})]})})})};s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.fa127180.chunk.js.map