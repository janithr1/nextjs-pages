(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{8961:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(504)}])},504:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(4051),i=t.n(n),o=t(5893),a=t(9008),s=t(214),l=t.n(s),c=t(7294),u=JSON.parse('{"vW":[{"Pillar":"Cross-Cutting Indicators","ColorBase":"#A75417","ColorTriple1":"#FFF","ColorTriple2":"#ffab8a","ColorTriple3":"#DE1568","colorMap":"stroke-pillar-dpinfrastructure"},{"Pillar":"Freedom of Expression, Assembly and Association","ColorBase":"#9C27B0","ColorTriple1":"#FFF","ColorTriple2":"#a2e0f5","ColorTriple3":"#517Ce8","colorMap":"stroke-pillar-connectivity"},{"Pillar":"Right to Privacy","ColorBase":"#887F13","ColorTriple1":"#FFF","ColorTriple2":"#ffd796","ColorTriple3":"#ed4b00","colorMap":"stroke-pillar-regulation"},{"Pillar":"Right to Equality and Non-Discrimination","ColorBase":"#17A79C","ColorTriple1":"#FFF","ColorTriple2":"#e7ff87","ColorTriple3":"#02965d","colorMap":"stroke-pillar-government"}]}');function p(e,r,t,n,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void t(c)}s.done?r(l):Promise.resolve(l).then(n,i)}function f(e){return function(){var r=this,t=arguments;return new Promise((function(n,i){var o=e.apply(r,t);function a(e){p(o,n,i,a,s,"next",e)}function s(e){p(o,n,i,a,s,"throw",e)}a(void 0)}))}}function d(){var e=u.vW,r=["Freedom of Expression, Assembly and Association","Right to Privacy","Right to Equality and Non-Discrimination"],t=(0,c.useState)(r[0]),n=t[0],s=t[1],p=(0,c.useState)([]),d=p[0],h=p[1],_=(0,c.useState)([]),g=_[0],m=_[1],v=function(){var e=f(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("pillar134",r),e.next=4,fetch("/nextjs-pages/api/digitalRightStages?pillar=".concat(r));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,h(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error fetching stages:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}(),x=function(){var r=f(i().mark((function r(t){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=4;break}return res.status(400).json({message:"Pillar is required"}),r.abrupt("return");case 4:n=e.filter((function(e){return e.Pillar===t})),m(n),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching stages:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}();(0,c.useEffect)((function(){n&&(v(n),x(n))}),[n]);var C=function(){var e=f(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(r.target.value);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{className:l().container,children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:"Digital Right Stages"}),(0,o.jsx)("meta",{name:"description",content:"Fetch and display digital right stages"})]}),(0,o.jsxs)("main",{className:l().main,children:[(0,o.jsx)("h1",{className:l().title,children:"Digital Right Stages"}),(0,o.jsx)("label",{htmlFor:"pillar-select",children:"Select Pillar:"}),(0,o.jsx)("select",{id:"pillar-select",value:n,onChange:C,children:r.map((function(e){return(0,o.jsx)("option",{value:e,children:e},e)}))}),(0,o.jsxs)("div",{className:l().stages,children:[(0,o.jsxs)("h2",{children:["Stages for ",n,":"]}),(0,o.jsx)("ul",{children:d.length>0?d.map((function(e,r){return(0,o.jsx)("li",{children:JSON.stringify(e)},r)})):(0,o.jsx)("li",{children:"No stages found for the selected pillar."})})]}),(0,o.jsxs)("div",{className:l().stages,children:[(0,o.jsxs)("h2",{children:["Initial Filter ",n,":"]}),(0,o.jsx)("ul",{children:g.length>0?g.map((function(e,r){return(0,o.jsx)("li",{children:JSON.stringify(e)},r)})):(0,o.jsx)("li",{children:"No stages found for the selected pillar."})})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,r,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return r=8961,e(e.s=r);var r}));var r=e.O();_N_E=r}]);