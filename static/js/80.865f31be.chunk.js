"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[80],{1687:function(n,e,r){r.d(e,{Df:function(){return s},Ke:function(){return h},Pg:function(){return d},Ph:function(){return x}});var t=r(5861),a=r(7757),i=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="866c584b953aab9d6c2151363c4952f3",u=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s={fetchTrendingMovies:u},p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d={fetchMovieById:p},f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(e,{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h={fetchMovieByPathname:f},l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(e),{params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x={fetchMovieByQuery:l}},3174:function(n,e,r){r.d(e,{Z:function(){return g}});var t,a,i,c,o,u=r(1087),s=r(7689),p=r(5230),d=r(168),f=r(6444),h=f.ZP.div(t||(t=(0,d.Z)(["\n  padding-top: 60px;\n  padding-bottom: 50px;\n"]))),l=f.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 30px;\n  width: 100%;\n"]))),x=f.ZP.li(i||(i=(0,d.Z)(["\n  cursor: pointer;\n  flex-basis: calc((100% - 30px) / 2);\n  max-width: calc((100% - 30px) / 2);\n\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 60px) / 3);\n    max-width: calc((100% - 60px) / 3);\n  }\n\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc((100% - 90px) / 4);\n    max-width: calc((100% - 90px) / 4);\n  }\n"]))),m=f.ZP.img(c||(c=(0,d.Z)(["\n  border-radius: 5px;\n  width: 100%;\n"]))),v=f.ZP.h2(o||(o=(0,d.Z)(["\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.4;\n  color: #ffa500;\n  margin-top: 10px;\n"]))),w=r(184),g=function(n){var e=n.data,r=(0,s.TH)(),t=r.pathname,a=function(n){var e=n;if(e.length>30){var r=e.lastIndexOf(" ",32);e=e.slice(0,r)+"..."}return e};return(0,w.jsx)(h,{children:(0,w.jsx)(l,{children:e.map((function(n){return(0,w.jsx)(x,{children:(0,w.jsxs)(u.rU,{to:"/"===t?"movies/".concat(n.id):"".concat(n.id),state:{from:r},children:[(0,w.jsx)(m,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):p,alt:n.original_title}),(0,w.jsx)(v,{children:a(n.title)})]})},n.id)}))})})}},8080:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a,i,c=r(3433),o=r(5861),u=r(9439),s=r(7757),p=r.n(s),d=r(2791),f=r(1087),h=r(7689),l=r(1687),x=r(3174),m=r(854),v=r(168),w=r(6444),g=w.ZP.form(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  gap: 20px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),Z=w.ZP.input(a||(a=(0,v.Z)(["\n  width: 100%;\n  border: 1px solid #000000;\n  border-radius: 4px;\n  color: #000000;\n  font-size: 18px;\n  letter-spacing: 0.03em;\n  line-height: 1.25;\n  padding: 12px;\n\n  &::placeholder {\n    color: #000000;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 80%;\n  }\n"]))),b=w.ZP.button(i||(i=(0,v.Z)(["\n  background-color: #ffa500;\n  width: 100%;\n  font-size: 18px;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #ff8a00;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 20%;\n  }\n"]))),y=r(184),j=function(n){var e=n.onSubmit;return(0,y.jsxs)(g,{onSubmit:e,children:[(0,y.jsx)(Z,{type:"text",name:"query",placeholder:"Enter the name of the movie here..."}),(0,y.jsx)(b,{type:"submit",children:"Search"})]})},k=function(){var n=(0,f.lr)(),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=r.get("query"),i=(0,d.useState)([]),s=(0,u.Z)(i,2),v=s[0],w=s[1],g=(0,d.useState)(!1),Z=(0,u.Z)(g,2),b=Z[0],k=Z[1],P=(0,d.useState)(null),_=(0,u.Z)(P,2),S=_[0],q=_[1];(0,d.useEffect)((function(){k(!0);var n=function(){var n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Ph.fetchMovieByQuery(a);case 3:e=n.sent,w((0,c.Z)(e)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),q(n.t0);case 10:return n.prev=10,k(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n(a)}),[a]);return(0,y.jsxs)("main",{children:[(0,y.jsx)("h2",{children:"Search your movies"}),b&&(0,y.jsx)(m.Z,{}),(0,y.jsx)(j,{onSubmit:function(n){n.preventDefault();var e=n.target;t({query:e.elements.query.value.trim()}),e.reset()}}),""===a&&(0,y.jsx)("p",{children:"There is something with your query. Please provide correct one"}),0===v.length&&(0,y.jsx)("p",{children:"We can't find a video for this query: ".concat(a)}),a&&!b&&(0,y.jsx)(x.Z,{data:v}),(0,y.jsx)(h.j3,{}),S&&(0,y.jsx)("p",{children:"Something went wrong. Try again later"})]})}},5230:function(n,e,r){n.exports=r.p+"static/media/placeholder.2fb9d191680d09ea65e4.jpg"}}]);
//# sourceMappingURL=80.865f31be.chunk.js.map