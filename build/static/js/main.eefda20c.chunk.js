(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){e.exports=t.p+"static/media/B358AC13-B442-48F2-A77F-C3E1371A4BA8_1_105_c.004afe7e.jpeg"},108:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(26),r=t.n(l),o=(t(73),t(8)),i=(t(74),t(126)),m=t(125),s=t(38),u=t.n(s),d=t(60),p=t.n(d),E=t(39),h=t.n(E),v=t(61),f=t.n(v),b=t(62),O=t.n(b),g=t(56),j=(t.n(g).a.create({baseURL:"http://localhost:8080"}),t(25)),N=t.n(j),_=(N.a.initializeApp({apiKey:"AIzaSyAGXTmXxneUqtrm8gq71-_3LABxlWpbRWI",authDomain:"whatsapp-clone-5d2d3.firebaseapp.com",databaseURL:"https://whatsapp-clone-5d2d3.firebaseio.com",projectId:"whatsapp-clone-5d2d3",storageBucket:"whatsapp-clone-5d2d3.appspot.com",messagingSenderId:"808418233869",appId:"1:808418233869:web:93bed18c8324a8d43b0f44"}),N.a.firestore()),w=N.a.auth(),y=new N.a.auth.GoogleAuthProvider,S=_,C=Object(n.createContext)(),A=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(C.Provider,{value:Object(n.useReducer)(a,t)},l)},I=function(){return Object(n.useContext)(C)},R=t(17);var k=function(){var e=Object(R.a)(w),a=Object(o.a)(e,1)[0],t=I(),l=Object(o.a)(t,2),r=l[0].activeRoom,s=(l[1],Object(n.useState)("")),d=Object(o.a)(s,2),E=d[0],v=d[1],b=Object(n.useState)(""),g=Object(o.a)(b,2),j=(g[0],g[1],Object(n.useState)([])),_=Object(o.a)(j,2),y=_[0],C=_[1];return Object(n.useEffect)((function(){r&&S.collection("rooms").doc(null===r||void 0===r?void 0:r.id).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return C(e.docs.map((function(e){return e.data()})))}))}),[r]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat_header"},c.a.createElement(i.a,null),c.a.createElement("div",{className:"chat_header_info"},c.a.createElement("h3",null,null===r||void 0===r?void 0:r.roomName),c.a.createElement("p",null,"last seen at...")),c.a.createElement("div",{className:"chat_headerRight"},c.a.createElement(m.a,null,c.a.createElement(u.a,null)),c.a.createElement(m.a,null,c.a.createElement(p.a,null)),c.a.createElement(m.a,null,c.a.createElement(h.a,null)))),c.a.createElement("div",{className:"chat_body"},null===y||void 0===y?void 0:y.map((function(e){var t=e.message,n=e.timestamp;return c.a.createElement("p",{key:n,className:"chat_message"},c.a.createElement("span",{className:"chat_name"},a.displayName.substring(0,8)),t,c.a.createElement("span",{className:"chat_timestamp"},new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat_footer"},c.a.createElement(f.a,null),c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==E&&(S.collection("rooms").doc(null===r||void 0===r?void 0:r.id).collection("messages").add({message:E,timestamp:N.a.firestore.FieldValue.serverTimestamp()}),v(""))}(e)},className:"form_footer"},c.a.createElement("input",{disabled:!r,value:E,onChange:function(e){return v(e.target.value)},placeholder:"type a msg",type:"text"}),c.a.createElement(O.a,null))))},x=(t(105),t(106),t(65)),B=t.n(x),U=t(64),D=t.n(U),L=(t(107),t(63));t(108);var T=function(e){var a=e.id,t=e.roomName,n=I(),l=Object(o.a)(n,2);Object(L.a)(l[0]);var r=l[1],m=Object(R.a)(w),s=Object(o.a)(m,1)[0];return c.a.createElement("div",{onClick:function(){r({type:"ACTIVE_ROOM",roomInfo:{id:a,roomName:t}})},id:a,className:"sidebarchat"},c.a.createElement(i.a,{src:s.photoURL}),c.a.createElement("div",{className:"sidebarChat_info"},c.a.createElement("h2",null,t),c.a.createElement("p",null)))};t(109);var W=function(){var e=Object(R.a)(w),a=Object(o.a)(e,1)[0],t=Object(n.useState)(""),l=Object(o.a)(t,2),r=l[0],s=l[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],v=p[1];return Object(n.useEffect)((function(){S.collection("rooms").onSnapshot((function(e){return v(e.docs.map((function(e){return{id:e.id,room:e.data()}})))}))}),[E]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar_header"},c.a.createElement(m.a,{onClick:function(){return w.signOut()}},c.a.createElement(i.a,{src:a.photoURL})),c.a.createElement("div",{className:"sidebar_header_right"},c.a.createElement(m.a,null,c.a.createElement(D.a,null)),c.a.createElement(m.a,null,c.a.createElement(B.a,null)),c.a.createElement(m.a,null,c.a.createElement(h.a,null)))),c.a.createElement("div",{className:"sidebar_search"},c.a.createElement("div",{className:"sidebar_search_container"},c.a.createElement(u.a,null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(console.log(r),S.collection("rooms").add({roomName:r}),s(""))},action:""},c.a.createElement("input",{value:r,onChange:function(e){return s(e.target.value)},placeholder:"search or start new chat",type:"text"})))),c.a.createElement("div",{className:"sidebar_chats"},E.map((function(e){return c.a.createElement(T,{key:e.id,id:e.id,roomName:e.room.roomName})}))))},F=t(35),M=t(5),P=function(){var e=Object(R.a)(w);Object(o.a)(e,1)[0];return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){w.signInWithPopup(y).then((function(e){console.log(e)}))}},"log in with google"))};var V=function(){var e=Object(R.a)(w),a=Object(o.a)(e,1)[0];return c.a.createElement("div",{className:"App"},a?c.a.createElement("div",{className:"app_body"},c.a.createElement(F.a,null,c.a.createElement(M.c,null,c.a.createElement(M.a,{exact:!0,path:"/"},c.a.createElement(W,null),c.a.createElement(k,null)),c.a.createElement(M.a,{path:"/rooms/:roomId"},c.a.createElement(W,null),c.a.createElement(k,null))))):c.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=t(42);var z=function(e,a){switch(a.type){case"ACTIVE_ROOM":return Object(q.a)(Object(q.a)({},e),{},{activeRoom:a.roomInfo});default:return{state:e}}};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,{initialState:{activeRoom:null},reducer:z},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a,t){e.exports=t(111)},73:function(e,a,t){},74:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.eefda20c.chunk.js.map