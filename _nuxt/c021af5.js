(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{408:function(t,e,o){var content=o(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("0fee64de",content,!0,{sourceMap:!1})},413:function(t,e,o){"use strict";o.r(e);var r=o(378),n=o(400),l=o(189),c=o(188),d=o(401),f=o(379),v={components:{Contact:n.default,Nav:r.default,Portfolio:d.default,Footer:f.default},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,serviceRequest:"",sections:l.a,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"100vh;":"96vh;")}},mounted:function(){var body=document.querySelector(".scrollable2");Object(c.c)(this,body)},methods:{}},m=(o(450),o(26)),h=o(37),y=o.n(h),C=o(361),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.baseColor,outlined:""}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{class:"scrollable2 px-4",style:t.vh},[o("section",{staticClass:"mt-6",attrs:{id:"services"}},[o("span",{staticClass:"section-title"},[t._v("Some projects I've done")]),t._v(" "),o("portfolio")],1),t._v(" "),o("section",{staticClass:"mt-12",attrs:{id:"contact"}},[o("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),o("Contact",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1),t._v(" "),o("Footer")],1),t._v(" "),this.$vuetify.breakpoint.lgAndUp?o("div",[o("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])}),[],!1,null,"4eb75990",null);e.default=component.exports;y()(component,{Portfolio:o(401).default,Footer:o(379).default,Nav:o(378).default}),y()(component,{VCard:C.a})},450:function(t,e,o){"use strict";o(408)},451:function(t,e,o){(e=o(7)(!1)).push([t.i,".img[data-v-4eb75990]{background-image:linear-gradient(to top right,rgba(100,115,201,.33),#192048)}",""]),t.exports=e},503:function(t,e,o){"use strict";o.r(e);var r=o(141),n=o(188),l=o(413),c={components:{Summary:r.default,PortfolioBody:l.default},beforeRouteLeave:function(t,e,o){var body=document.querySelector(".scrollable2");Object(n.b)(t,e,o,body)},data:function(){return{show:!1}}},d=o(26),f=o(37),v=o.n(f),m=o(370),h=o(369),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{justify:"end","no-gutters":""}},[e("v-col",{staticClass:"d-none d-lg-flex",attrs:{lg:"3",justify:"start"}},[e("Summary")],1),this._v(" "),e("v-col",{attrs:{cols:"12",lg:"9"}},[e("portfolio-body")],1)],1)}),[],!1,null,"2c23affc",null);e.default=component.exports;v()(component,{Summary:o(141).default,PortfolioBody:o(413).default}),v()(component,{VCol:m.a,VRow:h.a})}}]);