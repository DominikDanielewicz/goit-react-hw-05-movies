"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{687:function(e,r,t){t.d(r,{Df:function(){return o},Ke:function(){return v},Pg:function(){return p},Ph:function(){return l}});var n=t(861),a=t(757),i=t.n(a),s=t(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="866c584b953aab9d6c2151363c4952f3",u=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o={fetchTrendingMovies:u},d=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p={fetchMovieById:d},h=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get(r,{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v={fetchMovieByPathname:h},f=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l={fetchMovieByQuery:f}},399:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(861),a=t(439),i=t(757),s=t.n(i),c=t(791),u=t(689),o=t(687),d=t(87),p=t(230),h=t(184),v=function(e){var r=e.data,t=r.poster_path,n=r.title,a=r.original_title,i=r.vote_average,s=r.overview,c=r.genres,u="User Score: ".concat((10*i).toFixed(0),"%"),o=t?"https://image.tmdb.org/t/p/w500".concat(t):p,v=null===c||void 0===c?void 0:c.map((function(e){return e.name})).join(" ");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:o,alt:a})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:n}),(0,h.jsx)("p",{children:u})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:s})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:v})]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional Information"}),(0,h.jsx)(d.OL,{to:"cast",children:"Cast"}),(0,h.jsx)(d.OL,{to:"reviews",children:"Reviews"})]})]})},f=t(854),l=t(134),x=function(e){var r=e.to,t=e.children;return(0,h.jsxs)(d.rU,{to:r,children:[(0,h.jsx)(l.kyg,{size:"14"}),t]})},m=function(){var e,r,t=(0,u.UO)().movieId,i=(0,c.useState)([]),d=(0,a.Z)(i,2),p=d[0],l=d[1],m=(0,c.useState)(!1),j=(0,a.Z)(m,2),g=j[0],w=j[1],k=(0,c.useState)(null),y=(0,a.Z)(k,2),b=y[0],Z=y[1],_=null!==(e=null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";return(0,c.useEffect)((function(){w(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Pg.fetchMovieById(t);case 3:r=e.sent,l(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Z(e.t0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e(t)}),[t]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{to:_,children:"Go back"}),g?(0,h.jsx)(f.Z,{}):(0,h.jsx)(v,{data:p}),(0,h.jsx)(u.j3,{}),b&&(0,h.jsx)("p",{children:"Something went wrong. Try again later"})]})}},230:function(e,r,t){e.exports=t.p+"static/media/placeholder.2fb9d191680d09ea65e4.jpg"}}]);
//# sourceMappingURL=399.91f72c3f.chunk.js.map