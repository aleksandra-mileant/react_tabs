(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),i=n(5),b=n(7),r=n(6),l=n(1),o=n.n(l),d=(n(12),n(0)),u=function(t){var e=t.tabs,n=t.onTabSelected,c=t.selectedTab;return Object(d.jsxs)("div",{className:"has-text-centered",children:[Object(d.jsx)("ul",{className:"buttons",children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",className:"button is-warning is-light",onClick:function(){return n(t)},children:t.title})},t.id)}))}),Object(d.jsx)("p",{className:"content is-medium",children:c.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(t){Object(b.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:j[0]},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(d.jsxs)("div",{className:"App box",children:[Object(d.jsx)("h1",{className:"title is-3 has-text-centered",children:"Selected tab is: ".concat(t.title)}),Object(d.jsx)(u,{tabs:j,selectedTab:t,onTabSelected:this.onTabSelected})]})}}]),n}(o.a.Component);n(14);a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1c9db0da.chunk.js.map