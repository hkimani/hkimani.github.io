(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(t,e,n){"use strict";n.r(e);n(11),n(285);var o={props:{progress:{type:Number,default:90},size:{type:Number,default:100},description:{type:String,default:"My description"},thickness:{type:Number,default:10},fontsize:{type:String,default:"1.3rem"}},data:function(){return{options:{color:"#7579ff","empty-color":"#324c7e",size:this.size,thickness:this.thickness,"empty-thickness":3,"line-mode":"out 5",animation:"rs 700 1000","font-size":this.fontsize,"font-color":"white"}}}},r=n(26),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"d-flex flex-column justify-center align-center"},[n("vue-ellipse-progress",t._b({attrs:{progress:t.progress}},"vue-ellipse-progress",t.options,!1),[n("span",{attrs:{slot:"legend-value"},slot:"legend-value"},[t._v("%")])]),t._v(" "),n("span",{staticClass:"pt-2"},[t._v(" "+t._s(t.description)+" ")])],1)])}),[],!1,null,"4fa7b717",null).exports,c={props:{progress:{type:Number,default:50},skill:{type:String,default:"Life"}}},d=n(37),m=n.n(d),v=n(174),h=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column"},[n("div",{staticClass:"d-flex"},[n("span",{staticClass:"mr-auto"},[t._v(" "+t._s(t.skill)+" ")]),t._v(" "),n("span",{staticClass:"ml-auto"},[t._v(" "+t._s(t.progress)+"%")])]),t._v(" "),n("v-progress-linear",{attrs:{color:"deep-purple accent-4"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)}),[],!1,null,"62a9c709",null),f=h.exports;m()(h,{VProgressLinear:v.a});var y={components:{Progress:l,Linear:f,Socials:n(142).default},props:{drawer:{type:Boolean,default:!1}},data:function(){return{name:"Hubert Kimani",email:"kimanihube@gmail.com",descriptions:["Full-stack software developer","System design"],softSkills:[{name:"Team Work",progress:90},{name:"Management",progress:85},{name:"Leadership",progress:85},{name:"Communication",progress:90}],skills:[{name:"Git/Github",progress:90},{name:"Javascript",progress:92},{name:"Javascript/VueJs",progress:90},{name:"Javascript/VanillaJs",progress:90},{name:"Javascript/NodeJs",progress:80},{name:"Python",progress:90},{name:"Python/Django",progress:80},{name:"Databases/SQL/ORM",progress:75},{name:"Databases/NoSQL/ODM",progress:70},{name:"HTML",progress:85},{name:"UI/UX",progress:65},{name:"Adobe XD",progress:65},{name:"CSS",progress:60}],extras:[{hint:"location",icon:"mdi-map-marker",name:"Nairobi, Kenya"},{hint:"email",icon:"mdi-email-outline",name:"kimanihubert1@gmail.com"}],languages:[{name:"English",progress:100},{name:"Swahili",progress:95}]}},computed:{image:function(){return n(248)},vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"62.7vh;":"58.5vh;")}},methods:{close:function(){this.$emit("close")}}},k=(n(321),n(176)),x=n(195),w=n(361),_=n(370),C=n(371),z=n(175),V=n(138),S=n(178),L=n(106),I=n(24),N=n(369),$=Object(r.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"base",height:"100%","max-width":"364",outlined:""}},[n("v-list",{staticClass:"px-1",attrs:{color:"base"}},[t.$vuetify.breakpoint.mdAndDown?n("v-btn",{staticClass:"close-btn",attrs:{icon:"",small:""},on:{click:function(e){return t.close()}}},[n("v-icon",[t._v(" mdi-chevron-double-left ")])],1):t._e(),t._v(" "),n("v-list-item",{staticClass:"justify-center mt-4"},[n("v-avatar",{attrs:{size:"100"}},[n("v-img",{attrs:{src:t.image,alt:t.name}})],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",{staticClass:"py-1"},[n("v-list-item-title",{staticClass:"title text-center py-2"},[t._v("\n          "+t._s(t.name)+"\n        ")]),t._v(" "),t._l(t.descriptions,(function(e,i){return n("v-list-item-subtitle",{key:i,staticClass:"text-center"},[t._v("\n          "+t._s(e)+"\n        ")])}))],2)],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-4"}),t._v(" "),n("div",{staticClass:"scrollable",style:t.vh},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"pb-2"},[n("v-icon",{staticClass:"pr-1",attrs:{left:"",dark:""}},[t._v(" mdi-map-marker ")]),t._v("\n            Nairobi, Kenya\n          ")],1),t._v(" "),n("v-list-item-subtitle",{staticClass:"pb-2"},[n("v-icon",{staticClass:"pr-1",attrs:{left:"",dark:""}},[t._v(" mdi-email-outline ")]),t._v(" "),n("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n              kimanihubert1@gmail.com\n            ")])],1)],1)],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),n("v-list-item",[n("Socials")],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),n("v-list-item",[n("v-row",{attrs:{justify:"space-around","no-gutters":""}},t._l(t.languages,(function(t,i){return n("Progress",{key:i,staticClass:"py-2",attrs:{progress:t.progress,description:t.name,size:65,thickness:5,fontsize:"0.8rem"}})})),1)],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),n("v-list-item",[n("v-row",{attrs:{justify:"space-around","no-gutters":""}},t._l(t.softSkills,(function(t,i){return n("Progress",{key:i,staticClass:"py-2",attrs:{progress:t.progress,description:t.name,size:65,thickness:5,fontsize:"0.8rem"}})})),1)],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),n("v-list-item",[n("v-row",{attrs:{"no-gutters":""}},t._l(t.skills,(function(t,i){return n("v-col",{key:i,attrs:{cols:"12"}},[n("Linear",{staticClass:"my-3",attrs:{skill:t.name,progress:t.progress}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,"e3b8cacc",null);e.default=$.exports;m()($,{Socials:n(142).default}),m()($,{VAvatar:k.a,VBtn:x.a,VCard:w.a,VCol:_.a,VDivider:C.a,VIcon:z.a,VImg:V.a,VList:S.a,VListItem:L.a,VListItemContent:I.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VRow:N.a})},142:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{socials:[{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/hubert-kimani-49727a125/",name:"LinkedIn",color:"#0A66C2"},{icon:"mdi-github",link:"https://github.com/kimanihuon",name:"Github",color:null},{icon:"mdi-stack-overflow",link:"https://stackoverflow.com/users/12130316/kimanihuon",name:"Stack Overflow",color:"#EC7C23"},{icon:"mdi-code-braces-box",link:"https://www.hackerrank.com/kimanihube",name:"HackerRank",color:"#1BA94C"}]}}},r=(n(303),n(26)),l=n(37),c=n.n(l),d=n(195),m=n(175),v=n(369),h=n(375),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"no-gutters",attrs:{justify:"center"}},t._l(t.socials,(function(e,i){return n("div",{key:i,staticClass:"py-2 px-2"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[n("a",t._g(t._b({staticClass:"anchor",attrs:{href:e.link,target:"_blank"}},"a",l,!1),r),[n("v-btn",{attrs:{color:e.color,icon:""}},[n("v-icon",{attrs:{dark:""}},[t._v("\n              "+t._s(e.icon)+"\n            ")])],1)],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(" "+t._s(e.name)+" ")])])],1)})),0)}),[],!1,null,"ee7b180e",null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:m.a,VRow:v.a,VTooltip:h.a})},182:function(t,e,n){"use strict";n.r(e);var o={},r=(n(283),n(26)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(25,(function(i){return e("li",{key:i})})),0)}),[],!1,null,"8694b4ae",null);e.default=component.exports},185:function(t,e,n){"use strict";var o=n(1),r=n(242),l=n.n(r);o.a.use(l.a)},186:function(t,e,n){"use strict";n(15);var o=n(1),r=n(243),l=n.n(r);n.e(11).then(n.t.bind(null,362,7));var c={install:function(){o.a.component("LightBox",l.a)}};o.a.use(c)},188:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return d}));n(34);function o(t,body){var e=JSON.parse(localStorage.getItem(t.$route.name));e&&body&&body.scrollTo(e.x,e.y)}function r(t,e,n,body){localStorage.setItem(e.name,JSON.stringify({x:body.scrollLeft,y:body.scrollTop})),n()}function l(t,body){t&&body.scroll({top:t.offsetTop-50,left:0,behavior:"smooth"})}function c(t,e){var n=document.getElementById(e),body=document.getElementsByClassName("scrollable2")[0];"/"===t.$route.path?l(n,body):t.$router.push({path:"/#".concat(e)})}function d(t){l(document.getElementById(t.substring(1)),document.getElementsByClassName("scrollable2")[0])}},189:function(t,e,n){"use strict";e.a=[{name:"home",icon:"mdi-home"},{name:"about",icon:"mdi-information-variant"},{name:"services",icon:"mdi-cog-outline"},{name:"portfolio",icon:"mdi-briefcase-variant"},{name:"contact",icon:"mdi-phone-classic"}]},225:function(t,e,n){var content=n(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6570a8f6",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("49e2d511",content,!0,{sourceMap:!1})},233:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("197ed509",content,!0,{sourceMap:!1})},236:function(t,e,n){var content=n(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("5b85cd04",content,!0,{sourceMap:!1})},238:function(t,e,n){var content=n(345);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("56b15182",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";n(36);var o=n(182),r=n(141),l=n(189),c=n(188),d={components:{Preloader:o.default,Summary:r.default},data:function(){return{small:this.$vuetify.breakpoint.mdAndDown,baseColor:this.$vuetify.theme.defaults.dark.base,loading:!0,clipped:!1,drawer:!1,fixed:!1,nav:!1,sections:l.a,miniVariant:!1,right:!0,rightDrawer:!1}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),700)},methods:{scroll:function(section){Object(c.d)(this,section,document),this.nav=!this.nav}}},m=(n(344),n(26)),v=n(37),h=n.n(v),f=n(368),y=n(376),k=n(372),x=n(195),w=n(371),_=n(175),C=n(178),z=n(106),V=n(24),S=n(87),L=n(373),I=n(377),N=n(181),$=n(374),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"gtext",attrs:{dark:""}},[n("transition",{attrs:{name:"fade"}},[t.loading?n("div",{staticClass:"d-flex contain justify-center align-center"},[n("Preloader",{staticClass:"loader"})],1):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.loading?n("v-overlay",{attrs:{opacity:"1"}}):t._e()],1),t._v(" "),t.loading?t._e():n("v-main",[t.$vuetify.breakpoint.mdAndDown?n("v-app-bar",{attrs:{color:t.baseColor,fixed:"",dense:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-chevron-double-right")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-app-bar-nav-icon",{on:{click:function(e){t.nav=!t.nav}}})],1):t._e(),t._v(" "),t.small?n("v-navigation-drawer",{attrs:{color:t.baseColor,absolute:"",temporary:""},model:{value:t.nav,callback:function(e){t.nav=e},expression:"nav"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Hubert Kimani ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" creating dreams ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,attrs:{link:""},on:{click:function(e){return t.scroll(section.name)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(section.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(section.name))])],1)],1)})),1)],1):t._e(),t._v(" "),n("v-navigation-drawer",{attrs:{width:"344",absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("Summary",{attrs:{drawer:t.drawer},on:{close:function(e){t.drawer=!t.drawer}}})],1),t._v(" "),n("div",{class:"px-"+(t.$vuetify.breakpoint.mdAndDown?0:3)+" pt-"+(t.$vuetify.breakpoint.mdAndDown?0:3)+" "},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{Preloader:n(182).default,Summary:n(141).default}),h()(component,{VApp:f.a,VAppBar:y.a,VAppBarNavIcon:k.a,VBtn:x.a,VDivider:w.a,VIcon:_.a,VList:C.a,VListItem:z.a,VListItemContent:V.a,VListItemIcon:S.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VMain:L.a,VNavigationDrawer:I.a,VOverlay:N.a,VSpacer:$.a})},248:function(t,e,n){t.exports=n.p+"img/selfie.7022d8a.jpg"},252:function(t,e,n){n(253),t.exports=n(254)},277:function(t,e,n){"use strict";n(225)},278:function(t,e,n){(e=n(7)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},283:function(t,e,n){"use strict";n(227)},284:function(t,e,n){(e=n(7)(!1)).push([t.i,"ul[data-v-8694b4ae]{list-style-type:none}.wrapper[data-v-8694b4ae]{width:auto;height:auto}ul[data-v-8694b4ae]{display:grid;grid-template-columns:repeat(5,1fr);-webkit-animation:rot-data-v-8694b4ae 16s linear infinite;animation:rot-data-v-8694b4ae 16s linear infinite}@-webkit-keyframes rot-data-v-8694b4ae{to{transform:rotate(1turn)}}@keyframes rot-data-v-8694b4ae{to{transform:rotate(1turn)}}li[data-v-8694b4ae]{width:40px;height:40px;background:#651fff;border-radius:4px;box-shadow:0 0 1px #fff,0 0 5px #651fff,0 0 10px #651fff,0 0 15px #651fff,0 0 25px #651fff,0 0 55px #651fff;-webkit-animation:scale-data-v-8694b4ae .8s linear infinite alternate;animation:scale-data-v-8694b4ae .8s linear infinite alternate}@-webkit-keyframes scale-data-v-8694b4ae{to{transform:scale(.1);opacity:0}}@keyframes scale-data-v-8694b4ae{to{transform:scale(.1);opacity:0}}li[data-v-8694b4ae]:first-child{z-index:24}li[data-v-8694b4ae]:nth-child(2){z-index:23}li[data-v-8694b4ae]:nth-child(3){z-index:22}li[data-v-8694b4ae]:nth-child(4){z-index:21}li[data-v-8694b4ae]:nth-child(5){z-index:20}li[data-v-8694b4ae]:nth-child(6){z-index:19}li[data-v-8694b4ae]:nth-child(7){z-index:18}li[data-v-8694b4ae]:nth-child(8){z-index:17}li[data-v-8694b4ae]:nth-child(9){z-index:16}li[data-v-8694b4ae]:nth-child(10){z-index:15}li[data-v-8694b4ae]:nth-child(11){z-index:14}li[data-v-8694b4ae]:nth-child(12){z-index:13}li[data-v-8694b4ae]:nth-child(13){z-index:12}li[data-v-8694b4ae]:nth-child(14){z-index:11}li[data-v-8694b4ae]:nth-child(15){z-index:10}li[data-v-8694b4ae]:nth-child(16){z-index:9}li[data-v-8694b4ae]:nth-child(17){z-index:8}li[data-v-8694b4ae]:nth-child(18){z-index:7}li[data-v-8694b4ae]:nth-child(19){z-index:6}li[data-v-8694b4ae]:nth-child(20){z-index:5}li[data-v-8694b4ae]:nth-child(21){z-index:4}li[data-v-8694b4ae]:nth-child(22){z-index:3}li[data-v-8694b4ae]:nth-child(23){z-index:2}li[data-v-8694b4ae]:nth-child(24){z-index:1}li[data-v-8694b4ae]:nth-child(25){z-index:0}li[data-v-8694b4ae]:nth-child(24){-webkit-animation-delay:.9s;animation-delay:.9s}li[data-v-8694b4ae]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}li[data-v-8694b4ae]:nth-child(8){-webkit-animation-delay:.4s;animation-delay:.4s}li[data-v-8694b4ae]:nth-child(14){-webkit-animation-delay:.6s;animation-delay:.6s}li[data-v-8694b4ae]:nth-child(20){-webkit-animation-delay:.8s;animation-delay:.8s}li[data-v-8694b4ae]:nth-child(3){-webkit-animation-delay:.3s;animation-delay:.3s}li[data-v-8694b4ae]:nth-child(9){-webkit-animation-delay:.5s;animation-delay:.5s}li[data-v-8694b4ae]:nth-child(15){-webkit-animation-delay:.7s;animation-delay:.7s}li[data-v-8694b4ae]:nth-child(4){-webkit-animation-delay:.4s;animation-delay:.4s}li[data-v-8694b4ae]:nth-child(10){-webkit-animation-delay:.6s;animation-delay:.6s}li[data-v-8694b4ae]:nth-child(5){-webkit-animation-delay:.5s;animation-delay:.5s}li[data-v-8694b4ae]:first-child{-webkit-animation-delay:.1s;animation-delay:.1s}li[data-v-8694b4ae]:nth-child(6){-webkit-animation-delay:.2s;animation-delay:.2s}li[data-v-8694b4ae]:nth-child(11){-webkit-animation-delay:.3s;animation-delay:.3s}li[data-v-8694b4ae]:nth-child(16){-webkit-animation-delay:.4s;animation-delay:.4s}li[data-v-8694b4ae]:nth-child(21){-webkit-animation-delay:.5s;animation-delay:.5s}li[data-v-8694b4ae]:nth-child(7){-webkit-animation-delay:.3s;animation-delay:.3s}li[data-v-8694b4ae]:nth-child(12){-webkit-animation-delay:.4s;animation-delay:.4s}li[data-v-8694b4ae]:nth-child(17){-webkit-animation-delay:.5s;animation-delay:.5s}li[data-v-8694b4ae]:nth-child(22){-webkit-animation-delay:.6s;animation-delay:.6s}li[data-v-8694b4ae]:nth-child(13){-webkit-animation-delay:.5s;animation-delay:.5s}li[data-v-8694b4ae]:nth-child(18){-webkit-animation-delay:.6s;animation-delay:.6s}li[data-v-8694b4ae]:nth-child(19),li[data-v-8694b4ae]:nth-child(23){-webkit-animation-delay:.7s;animation-delay:.7s}li[data-v-8694b4ae]:nth-child(24){-webkit-animation-delay:.8s;animation-delay:.8s}li[data-v-8694b4ae]:nth-child(25){-webkit-animation-delay:.9s;animation-delay:.9s}",""]),t.exports=e},303:function(t,e,n){"use strict";n(233)},304:function(t,e,n){(e=n(7)(!1)).push([t.i,".anchor[data-v-ee7b180e]{text-decoration:none}",""]),t.exports=e},321:function(t,e,n){"use strict";n(236)},322:function(t,e,n){(e=n(7)(!1)).push([t.i,".close-btn[data-v-e3b8cacc]{position:absolute;margin-left:295px;z-index:3}.scrollable[data-v-e3b8cacc]{overflow-y:scroll}.scrollable[data-v-e3b8cacc]::-webkit-scrollbar{width:7px}.scrollable[data-v-e3b8cacc]::-webkit-scrollbar-track{box-shadow:inset 0 0 2px grey;border-radius:10px}.scrollable[data-v-e3b8cacc]::-webkit-scrollbar-thumb{background:#070707;border-radius:10px}.scrollable[data-v-e3b8cacc]::-webkit-scrollbar-thumb:hover{background:#009eb3}",""]),t.exports=e},344:function(t,e,n){"use strict";n(238)},345:function(t,e,n){(e=n(7)(!1)).push([t.i,'html{overflow:hidden!important;scrollbar-width:none;-ms-overflow-style:none;scroll-behavior:smooth!important}html::-webkit-scrollbar{width:0;height:0}.scrollable2{overflow-y:scroll}.scrollable2::-webkit-scrollbar{width:7px}.scrollable2::-webkit-scrollbar-track{box-shadow:inset 0 0 2px grey;border-radius:10px}.scrollable2::-webkit-scrollbar-thumb{background:#070707;border-radius:10px}.scrollable2::-webkit-scrollbar-thumb:hover{background:#009eb3}.a{text-decoration:none!important;color:#2196f3!important}.card{border-color:hsla(0,0%,100%,.12)!important;border-width:thin!important}.gtext{font-family:"Poppins",sans-serif}.fade-enter-active,.fade-leave-active{transition:opacity 1s}.fade-enter,.fade-leave-to{opacity:0}.contain{position:absolute;top:0;bottom:0;left:0;right:0;z-index:10}',""]),t.exports=e},64:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(277),n(26)),l=n(37),c=n.n(l),d=n(368),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[252,7,3,8]]]);