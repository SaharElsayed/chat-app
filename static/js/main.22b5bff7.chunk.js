(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"text":"hey here non blocked message","sender":"user","date":"12:00:30"},{"id":2,"text":"here some more message","sender":"user","date":"12:10:00"},{"id":3,"text":"here message send after block","sender":"user","date":"12:35:10"},{"id":4,"text":"hello, buddy..","sender":"interlocutor","date":"12:36:10"},{"id":5,"text":"tetetete","sender":"interlocutor","date":"12:36:40"}]')},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(3),c=n.n(s),o=(n(14),n(4)),i=n(5),l=n(9),d=n(7),u=n.p+"static/media/user.c2f3f511.svg",j=(n(15),n(0)),f=function(e){var t=e.avatar,n=e.size,a=e.extraClass;return Object(j.jsx)("div",{className:"avatar-wrapper-".concat(n," d-flex flex-center justify-center ").concat(a),children:Object(j.jsx)("img",{"data-testid":"avatar-img",className:"user-vatar-".concat(n),src:t,alt:"interlocutor icon"})})};f.defaultProps={avatar:u,size:"small",extraClass:""};var m=f,x=(n(17),function(e){var t=e.name;return Object(j.jsxs)("div",{className:"conversataion-header d-flex flex-center",children:[Object(j.jsx)(m,{size:"large",extraClass:"mr-10"}),Object(j.jsx)("h3",{"data-testid":"user-name",className:"user-name mb-0",children:t})]})});x.defaultProps={name:"Marc"};var b=x,h=(n(18),function(e){var t=e.sender,n=e.body,a=e.date,r=e.isLastInterlocutorMsg;return Object(j.jsxs)("div",{className:"d-flex  ".concat("user"===t?"justify-end":"flex-center"),children:["interlocutor"===t&&r&&Object(j.jsx)(m,{size:"small",extraClass:"mr-10"}),Object(j.jsxs)("div",{className:"msg ".concat(t,"-msg ").concat("interlocutor"!==t||r?"":"ml-50"),children:[Object(j.jsx)("p",{"data-testid":"msg-text",children:n}),Object(j.jsx)("small",{"data-testid":"msg-date",children:a})]})]})}),v=n(8),p=(n(19),function(e){var t=e.theme,n=e.text,a=e.isDisabled;return Object(j.jsx)("button",{disabled:a,className:"btn ".concat(t),children:n})}),g=(n(20),function(e){var t=e.type,n=e.placeholder,a=e.value,r=e.onChangeHandler;return Object(j.jsx)("input",{className:"input",value:a,onChange:function(e){return r(e)},type:t,placeholder:n})});g.defaultProps={type:"text",placeholder:"Type a message..."};var O=g,y=(n(21),function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{className:"conversation-footer d-flex flex-center",children:[Object(j.jsx)(O,{value:n,onChangeHandler:function(e){r(e.target.value)}}),Object(j.jsx)(p,{isDisabled:0===n.length&&"disabled",theme:"primary",text:"Send"})]})}),C=n(6),N=(n(22),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).scrollToBottom=function(){e.messagesEnd.scrollIntoView({behavior:"smooth"})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"renderConversation",value:function(e){var t=e.filter((function(e){return"interlocutor"===e.sender})),n=t[t.length-1];return e.map((function(e){var t=e.id,a=e.text,r=e.sender,s=e.date;return Object(j.jsx)(h,{isLastInterlocutorMsg:t===n.id,sender:r,body:a,date:s},"msg-".concat(t))}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"msgs-container p-20",children:[this.renderConversation(C),Object(j.jsx)("div",{ref:function(t){e.messagesEnd=t}})]}),Object(j.jsx)(y,{})]})}}]),n}(a.Component));n(23),n(24);var k=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(N,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),T()}],[[25,1,2]]]);
//# sourceMappingURL=main.22b5bff7.chunk.js.map