(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(9),n=c.n(s),i=(c(15),c(10)),a=c(3),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(2),m=c.n(b),u=(c(21),c(8)),h=c.n(u),v="https://www.omdbapi.com/?apikey=44b91b2&t=";function O(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(m.a.mark((function e(t){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){var t=e.addMovie,c=e.isMoviesIncludes,s=Object(r.useState)(null),n=Object(a.a)(s,2),i=n[0],j=n[1],b=Object(r.useState)(""),u=Object(a.a)(b,2),v=u[0],x=u[1],p=Object(r.useState)(""),f=Object(a.a)(p,2),N=f[0],g=f[1],y=Object(r.useCallback)(Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==v.trim().length){e.next=5;break}x(""),g("Title is empty"),e.next=9;break;case 5:return e.next=7,O(v);case 7:"False"!==(t=e.sent).Response?j(t):(g(t.Error),j(null));case 9:case"end":return e.stop()}}),e)}))),[i,v]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:h()("input",{"is-danger":0!==N.length}),value:v,onChange:function(e){x(e.target.value),g("")}})}),0!==N.length&&Object(l.jsx)("p",{className:h()("help",{"is-danger":0!==N.length}),children:N})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:y,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){i&&!c(i)?(t(i),x(""),j(null)):(i||g("Pls choose the movie"),i&&c(i)&&g("Movie already in the list"))},children:"Add to the list"})})]})]}),i&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:i})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{addMovie:function(e){s([].concat(Object(i.a)(c),[e]))},isMoviesIncludes:function(e){return c.some((function(t){return t.imdbID===e.imdbID}))}})})]})};n.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b5a7d16c.chunk.js.map