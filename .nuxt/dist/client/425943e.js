(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{287:function(t,e,r){"use strict";r.r(e);r(70);var n=r(27),o={head:function(){return{title:"Nuxtjs by FREMZUCK"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("https://picsum.photos/v2/list?limit=24");case 3:return n=e.sent,e.abrupt("return",{photos:n});case 5:case"end":return e.stop()}}),e)})))()}},c=r(56),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row mb-3"},[r("div",{staticClass:"football"},[r("b-row",{attrs:{cols:"4"}},t._l(t.photos,(function(e){return r("b-col",{key:e.id},[r("b-img",{attrs:{src:e.download_url,fluid:"",alt:e.author}}),t._v(" "),r("div",{staticClass:"underimg"},[t._v(t._s(e.author))])],1)})),1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);