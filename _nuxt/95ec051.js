(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8,10],{411:function(t,e,n){t.exports=n.p+"img/dash1.da39147.png"},412:function(t,e,n){t.exports=n.p+"img/dash2.b9b892f.png"},413:function(t,e,n){t.exports=n.p+"img/dash3.f71f4e3.png"},414:function(t,e,n){t.exports=n.p+"img/dash4.9aeda07.png"},415:function(t,e,n){t.exports=n.p+"img/landing.f521d1e.png"},416:function(t,e,n){t.exports=n.p+"img/map.cb8016a.png"},417:function(t,e,n){t.exports=n.p+"img/digimatt1.6c8aa6d.jpeg"},418:function(t,e,n){t.exports=n.p+"img/digimatt2.f095f0f.jpeg"},419:function(t,e,n){t.exports=n.p+"img/digimatt3.a03ab22.jpeg"},420:function(t,e,n){t.exports=n.p+"img/rp1.2ec65a9.png"},421:function(t,e,n){t.exports=n.p+"img/rp4.7875bb6.png"},422:function(t,e,n){t.exports=n.p+"img/rp6.b9ba173.png"},423:function(t,e,n){t.exports=n.p+"img/rp7.6e20541.png"},424:function(t,e,n){t.exports=n.p+"img/rp8dash.ec8ac36.png"},425:function(t,e,n){t.exports=n.p+"img/rp9dash.b3c1482.png"},426:function(t,e,n){t.exports=n.p+"img/weskool1.bf051c6.png"},427:function(t,e,n){t.exports=n.p+"img/weskool2.6b9b21a.png"},428:function(t,e,n){t.exports=n.p+"img/weskool3.b077bcb.png"},429:function(t,e,n){t.exports=n.p+"img/weskool5.3b98f05.png"},430:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("15ee9d5d",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("31010a58",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(71),r=n(110),M=n(185);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{permanent:{type:Boolean,default:!1},minivariant:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},temporary:{type:Boolean,default:!1},nav:{type:Boolean,default:null},right:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,pages:r.b}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({scroll:function(t){Object(M.d)(this,t,document)},openDrawer:function(){}},Object(c.b)({toggle:"nav/toggle"}))},m=(n(435),n(27)),j=n(39),v=n.n(j),N=n(404),I=n(170),D=n(173),y=n(105),L=n(23),T=n(410),x=n(408),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:t.baseColor,permanent:t.permanent,"mini-variant":t.minivariant,absolute:t.absolute,temporary:t.temporary,right:t.right}},[n("v-list",{attrs:{nav:"",dense:""}},[t.permanent?t._e():n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Hubert Kimani ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" creating dreams ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.toggle()}}},[n("v-icon",[t._v("mdi-backburger")])],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,staticClass:"my-2",attrs:{to:"/#"+section.name},on:{click:function(e){return t.scroll(section.name)}}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",c,!1),o),[t._v(t._s(section.icon))])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(section.name)+" ")])])],1)})),t._v(" "),n("v-divider"),t._v(" "),t._l(t.pages,(function(e,i){return n("v-list-item",{key:"p"+i,staticClass:"my-2",attrs:{link:"",to:"/"+e.name}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on,r=o.attrs;return[n("div",{staticClass:"btn-nav"},[n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color,small:""}},"v-icon",r,!1),c),[t._v(t._s(e.icon)+"\n            ")]),t._v(" "),n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color}},"v-icon",r,!1),c),[t._v("mdi-chevron-right")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name)+" "+t._s(" page")+" ")])])],1)}))],2)],1)}),[],!1,null,"0cdc4502",null);e.default=component.exports;v()(component,{VDivider:N.a,VIcon:I.a,VList:D.a,VListItem:y.a,VListItemContent:L.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VNavigationDrawer:T.a,VTooltip:x.a})},433:function(t,e,n){"use strict";n.r(e);var o={components:{Socials:n(140).default},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base}}},c=n(27),r=n(39),M=n.n(r),l=n(193),d=n(392),m=n(391),j=n(404),v=n(465),N=n(170),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-8 mb-6",attrs:{id:"footer",dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center card",attrs:{color:t.baseColor,width:"2160",flat:"",outlined:""}},[n("v-card-text",{staticClass:"pb-0"},[n("Socials")],1),t._v(" "),n("v-card-text",[t._v("\n      Email:\n      "),n("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n        kimanihubert1@gmail.com\n      ")])]),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Crafted with\n\n      "),t._v(" "),n("v-btn",{attrs:{icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#E91E63"}},[t._v(" mdi-cards-heart ")])],1),t._v("\n\n      by\n\n      "),n("a",{staticClass:"pl-1 pr-2 a",attrs:{href:"https://github.com/kimanihuon"}},[t._v("\n        Hubert Kimani\n      ")]),t._v("\n\n      in\n\n      "),t._v(" "),n("v-btn",{attrs:{href:"https://vuejs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#41B883"}},[t._v(" mdi-vuejs ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://vuetifyjs.com/en/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#7BC6FF"}},[t._v(" mdi-vuetify ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://nuxtjs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#00C58E"}},[t._v(" mdi-nuxt ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[n("v-icon",[t._v("mdi-copyright")]),t._v("\n      "+t._s((new Date).getFullYear())+" —\n      "),n("span",[t._v("All rights reserved.")])],1)],1)],1)}),[],!1,null,"a82ac266",null);e.default=component.exports;M()(component,{Socials:n(140).default}),M()(component,{VBtn:l.a,VCard:d.a,VCardText:m.c,VDivider:j.a,VFooter:v.a,VIcon:N.a})},435:function(t,e,n){"use strict";n(430)},436:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".btn-nav[data-v-0cdc4502]{display:flex;flex-direction:row;padding:0}.btn-icon[data-v-0cdc4502]{padding:0!important;margin:0!important}",""]),t.exports=o},437:function(t,e,n){"use strict";n(431)},438:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".fade-enter-active[data-v-34fbb0cd],.fade-leave-active[data-v-34fbb0cd]{transition:opacity .5s}.fade-enter[data-v-34fbb0cd],.fade-leave-to[data-v-34fbb0cd]{opacity:0}",""]),t.exports=o},439:function(t,e,n){"use strict";function o(){return{portfolio:{posts:[{id:"cotswold",title:"Digital Matatus Cotswold",subtitle:"Data visualization tool",featuredimg:"cotswold/dash2.png",description:"Data visualization and sentiment analysis of survey data. Built using React, D3.js, OpenStreetMaps and many other innovative technologies.",images:[{src:n(412),thumb:n(412),caption:"Sentiment analysis"},{src:n(411),thumb:n(411),caption:"Transport feedback"},{src:n(416),thumb:n(416),caption:"Map"},{src:n(415),thumb:n(415),caption:"Summaries"},{src:n(413),thumb:n(413),caption:"Area chart age distribution"},{src:n(414),thumb:n(414),caption:"Pie chart age distribution"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"PostgreSQL",icon:"postgresql.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"React Js",icon:"react.svg"},{name:"Material UI",icon:"materialui.svg"},{name:"D3.Js",icon:"d3.svg"},{name:"OpenStreetMaps",icon:"leaflet.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"repoll",title:"Repoll",subtitle:"Polling application",featuredimg:"repoll/rp8dash.png",description:"Social polling application that allows users to create interactive polls that are visible across the web",images:[{src:n(424),thumb:n(424),caption:"Dashboard"},{src:n(425),thumb:n(425),caption:"Dashboard scrolled"},{src:n(420),thumb:n(420),caption:"Editor"},{src:n(421),thumb:n(421),caption:"Poll create"},{src:n(423),thumb:n(423),caption:"Add tags"},{src:n(422),thumb:n(422),captions:"Poll submit"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"DRF",icon:"django.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"Vuetify",icon:"vuetify.svg"},{name:"NuxtJs",icon:"nuxt.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"digimatt",title:"Digimatt",subtitle:"Fare price crowd sourcing tool",featuredimg:"digimatt/digimatt1.jpeg",description:"Service that allows public transport users to share their daily fare prices with the aim of preventing exploitation",images:[{src:n(417),thumb:n(417),caption:"Routes"},{src:n(418),thumb:n(418),caption:"Dashboard"},{src:n(419),thumb:n(419),caption:"Single route"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"NodeJs",icon:"nodejs.svg"},{name:"ExpressJs",icon:"express.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"PWA",icon:"pwa.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"weskool",title:"Weskool",subtitle:"Resource sharing platform",featuredimg:"weskool/weskool1.png",description:"Platform that helps students keep track of learning resources such as notes, tutorials and todo",images:[{src:n(426),thumb:n(426),caption:"Dashboard"},{src:n(427),thumb:n(427),caption:"Track editor"},{src:n(428),thumb:n(428),caption:"Profile"},{src:n(429),thumb:n(429),caption:"Chat"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"Express",icon:"express.svg"},{name:"Sockets",icon:"socket-io.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"Sockets",icon:"socket-io.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}}]},blog:{posts:[]}}}n.d(e,"a",(function(){return o}))},442:function(t,e,n){"use strict";n.r(e);n(32),n(15),n(40);var o={props:{servicerequest:{type:String,default:""}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return t.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(t){this.message=t}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(t){var e=this;setTimeout((function(){e.status.waiting=!1,e.status.loading=!1,e.status.success=!1,e.status.error=!1}),t)},send:function(){var t=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat("https://kimapi.netlify.app","/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(e){t.status.loading=!1,e.ok?(t.status.msg="Message sent successfully",t.status.success=!0,t.resetStatus(t.swt),t.resetContent()):(t.status.msg="Oops something happened, please wait a while and try again!!",t.status.error=!0,t.resetStatus(t.ewt))})).catch((function(e){console.log(e),t.status.msg="Oops something happened, please wait a while and try again!!",t.status.loading=!1,t.status.error=!0,t.resetStatus(t.ewt)}))))}}},c=(n(437),n(27)),r=n(39),M=n.n(r),l=n(546),d=n(193),m=n(392),j=n(537),v=n(170),N=n(534),I=n(538),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-2 pt-4 card",attrs:{color:t.baseColor,outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:t.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:t.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{staticClass:"card",attrs:{rules:t.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.status.error||t.status.success?n("v-alert",{attrs:{outlined:"",type:t.status.error?"warning":"success",prominent:"",border:"left"}},[t._v("\n        "+t._s(t.status.msg)+"\n      ")]):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:t.status.loading,large:"",rounded:"",color:t.status.error?"#F44336":"#4CAF50"},on:{click:t.send}},[!t.status.loading&&t.status.success?n("v-icon",[t._v("mdi-check-bold")]):t._e(),t._v(" "),!t.status.loading&&t.status.error?n("v-icon",[t._v("mdi-alert-circle")]):t._e(),t._v(" "),t.status.loading||t.status.success||t.status.error?t._e():n("span",[t._v("\n          Send Message\n        ")])],1)],1)],1)],1)}),[],!1,null,"34fbb0cd",null);e.default=component.exports;M()(component,{VAlert:l.a,VBtn:d.a,VCard:m.a,VForm:j.a,VIcon:v.a,VTextField:N.a,VTextarea:I.a})},470:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("26d84358",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n.r(e);n(142);var o=n(110),c=n(432),r=n(442),M=n(433),l=n(439),d=n(185),m={components:{Nav:c.default,ContactForm:r.default,Footer:M.default},data:function(){var t=this;return{baseColor:this.$vuetify.theme.defaults.dark.base,sections:o.a,technologies:["frontend","backend","dev"],serviceRequest:"",project:Object(l.a)().portfolio.posts.find((function(e){return e.id===t.$route.params.post}))}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"100vh;":"96vh;")},ch:function(){return this.$vuetify.breakpoint.lgAndUp?"500":this.$vuetify.breakpoint.md?"400":this.$vuetify.breakpoint.sm?"350":this.$vuetify.breakpoint.xs?"300":"500"}},mounted:function(){var body=document.querySelector(".scrollable2");Object(d.c)(this,body)},methods:{expand:function(t){this.$refs.lightbox.showImage(t)}}},j=(n(518),n(27)),v=n(39),N=n.n(v),I=n(392),D=n(391),y=n(545),L=n(547),T=n(137),x=n(402),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.baseColor,outlined:""}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{class:"scrollable2 px-4 py-4",style:t.vh},[o("section",{attrs:{id:"showcase"}},[o("span",{staticClass:"section-title"},[t._v(t._s(t.project.title)+" ")]),t._v(" "),o("v-carousel",{staticClass:"carousel-parent my-4",attrs:{height:t.ch}},t._l(t.project.images,(function(image,i){return o("v-carousel-item",{key:i,staticClass:"radius",attrs:{ripple:"",src:image.src},nativeOn:{click:function(e){return t.expand(i)}}})})),1),t._v(" "),o("client-only",{attrs:{placeholder:"Loading..."}},[o("LightBox",{ref:"lightbox",attrs:{"show-caption":!0,"show-light-box":!1,media:t.project.images}})],1)],1),t._v(" "),o("section",{staticClass:"pt-3",attrs:{id:"description"}},[o("span",{staticClass:"section-title"},[t._v(" Project details ")]),t._v(" "),o("v-card",{staticClass:"mt-4",attrs:{outlined:"",color:"#2c2c39"}},[o("v-card-text",{staticClass:"pb-0 white--text description"},[t._v("\n            Description\n          ")]),t._v(" "),o("v-card-text",{staticClass:"description"},[o("p",[t._v("\n              "+t._s(t.project.description)+"\n            ")])])],1),t._v(" "),o("v-card",{staticClass:"mt-6 pb-4",attrs:{outlined:"",color:"#2c2c39"}},[o("v-card-text",{staticClass:"pb-0 white--text description"},[t._v("\n            Technologies used\n          ")]),t._v(" "),t._l(t.technologies,(function(e,c){return o("div",{key:c},[o("v-card-subtitle",{staticClass:"pb-2"},[t._v(" "+t._s(e)+" ")]),t._v(" "),o("v-row",{staticClass:"ml-2",attrs:{"no-gutters":""}},t._l(t.project.technologies[e],(function(e,i){return o("v-card",{key:i,staticClass:"\n                  my-1\n                  px-2\n                  pt-4\n                  pb-2\n                  mx-2\n                  d-flex\n                  flex-column\n                  align-center\n                ",attrs:{height:"90",width:"150",color:"#3A3C7F"}},[o("v-img",{attrs:{"max-height":"50","max-width":"50","aspect-ratio":"1.7",contain:"",src:n(493)("./"+e.icon),alt:"stack"}}),t._v(" "),o("span",{staticClass:"img-desc pt-2"},[t._v(t._s(e.name))])],1)})),1)],1)}))],2),t._v(" "),o("v-card",{staticClass:"mt-6 pb-4",attrs:{outlined:"",color:"#2c2c39"}},[o("v-card-text",{staticClass:"pb-0 white--text description"},[t._v("\n            System design (Coming soon)\n          ")])],1)],1),t._v(" "),o("section",{staticClass:"mt-8",attrs:{id:"contact"}},[o("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),o("ContactForm",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1),t._v(" "),o("Footer")],1),t._v(" "),this.$vuetify.breakpoint.lgAndUp?o("div",[o("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])}),[],!1,null,"5b2c553e",null);e.default=component.exports;N()(component,{ContactForm:n(442).default,Footer:n(433).default,Nav:n(432).default}),N()(component,{VCard:I.a,VCardSubtitle:D.b,VCardText:D.c,VCarousel:y.a,VCarouselItem:L.a,VImg:T.a,VRow:x.a})},493:function(t,e,n){var map={"./d3.svg":494,"./django.svg":495,"./docker.svg":496,"./drf_white.png":497,"./express.svg":498,"./git-icon.svg":499,"./github.svg":500,"./javascript.svg":501,"./leaflet.svg":502,"./linux.svg":503,"./mariadb.svg":504,"./materialui.svg":505,"./mongo.svg":506,"./nodejs.svg":507,"./nuxt.svg":508,"./php-1.svg":509,"./postgresql.svg":510,"./pwa.svg":511,"./python.svg":512,"./react.svg":513,"./socket-io.svg":514,"./vscode.svg":515,"./vue.svg":516,"./vuetify.svg":517};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=493},494:function(t,e,n){t.exports=n.p+"img/d3.7060d4b.svg"},495:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2MyIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDMyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48ZyBmaWxsPSIjMkJBOTc3Ij48cGF0aCBpZD0iZGphbmdvIiBkPSJNMTE0Ljc4NCAwaDUzLjI3OHYyNDQuMTkxYy0yNy4yOSA1LjE2Mi00Ny4zOCA3LjE5My02OS4xMTcgNy4xOTNDMzMuODczIDI1MS4zMTYgMCAyMjIuMjQ1IDAgMTY2LjQxMmMwLTUzLjc5NSAzNS45My04OC43MDggOTEuNjA4LTg4LjcwOCA4LjY0IDAgMTUuMjIyLjY4IDIzLjE3NiAyLjcxN1Ywem0xLjg2NyAxMjQuNDI3Yy02LjI0LTIuMDM4LTExLjM4Mi0yLjcxNy0xNy45NjUtMi43MTctMjYuOTQ3IDAtNDIuNTEyIDE2LjQzNy00Mi41MTIgNDUuMjQzIDAgMjguMDQ2IDE0Ljg4IDQzLjUzMiA0Mi4xNyA0My41MzIgNS44OTYgMCAxMC42OTYtLjMzMiAxOC4zMDctMS4zNTF2LTg0LjcwN3oiLz48cGF0aCBkPSJNMjU1LjE4NyA4NC4yNnYxMjIuMjYzYzAgNDIuMTA1LTMuMTU0IDYyLjM1My0xMi40MTEgNzkuODEtOC42NCAxNi43ODMtMjAuMDIyIDI3LjM2Ni00My41NDEgMzkuMDU1bC00OS40MzgtMjMuMjk3YzIzLjUxOS0xMC45MyAzNC45MDEtMjAuNTg4IDQyLjE3LTM1LjMyNyA3LjYxLTE1LjA3MiAxMC4wMS0zMi41MjkgMTAuMDEtNzguNDQ1Vjg0LjI2MWg1My4yMXpNMTk2LjYwOCAwaDUzLjI3OHY1NC4xMzVoLTUzLjI3OFYweiIvPjwvZz48L3N2Zz4="},496:function(t,e,n){t.exports=n.p+"img/docker.3253a6f.svg"},497:function(t,e,n){t.exports=n.p+"img/drf_white.fa783b9.png"},498:function(t,e,n){t.exports=n.p+"img/express.75fff9b.svg"},499:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjUxLjE3MiAxMTYuNTk0TDEzOS40IDQuODI4Yy02LjQzMy02LjQzNy0xNi44NzMtNi40MzctMjMuMzE0IDBsLTIzLjIxIDIzLjIxIDI5LjQ0MyAyOS40NDNjNi44NDItMi4zMTIgMTQuNjg4LS43NjEgMjAuMTQyIDQuNjkzIDUuNDggNS40ODkgNy4wMiAxMy40MDIgNC42NTIgMjAuMjY2bDI4LjM3NSAyOC4zNzZjNi44NjUtMi4zNjUgMTQuNzg2LS44MzUgMjAuMjY5IDQuNjU3IDcuNjYzIDcuNjYgNy42NjMgMjAuMDc1IDAgMjcuNzQtNy42NjUgNy42NjYtMjAuMDggNy42NjYtMjcuNzQ5IDAtNS43NjQtNS43Ny03LjE4OC0xNC4yMzUtNC4yNy0yMS4zMzZsLTI2LjQ2Mi0yNi40NjItLjAwMyA2OS42MzdhMTkuODIgMTkuODIgMCAwIDEgNS4xODggMy43MWM3LjY2MyA3LjY2IDcuNjYzIDIwLjA3NiAwIDI3Ljc0Ny03LjY2NSA3LjY2Mi0yMC4wODYgNy42NjItMjcuNzQgMC03LjY2My03LjY3MS03LjY2My0yMC4wODYgMC0yNy43NDZhMTkuNjU0IDE5LjY1NCAwIDAgMSA2LjQyMS00LjI4MVY5NC4xOTZhMTkuMzc4IDE5LjM3OCAwIDAgMS02LjQyMS00LjI4MWMtNS44MDYtNS43OTgtNy4yMDItMTQuMzE3LTQuMjI3LTIxLjQ0Nkw4MS40NyAzOS40NDJsLTc2LjY0IDc2LjYzNWMtNi40NCA2LjQ0My02LjQ0IDE2Ljg4NCAwIDIzLjMyMmwxMTEuNzc0IDExMS43NjhjNi40MzUgNi40MzggMTYuODczIDYuNDM4IDIzLjMxNiAwbDExMS4yNTEtMTExLjI0OWM2LjQzOC02LjQ0IDYuNDM4LTE2Ljg4NyAwLTIzLjMyNCIgZmlsbD0iI0RFNEMzNiIvPjwvc3ZnPg=="},500:function(t,e,n){t.exports=n.p+"img/github.e0d7d72.svg"},501:function(t,e,n){t.exports=n.p+"img/javascript.00f3e5c.svg"},502:function(t,e,n){t.exports=n.p+"img/leaflet.eaf1455.svg"},503:function(t,e,n){t.exports=n.p+"img/linux.5888d74.svg"},504:function(t,e,n){t.exports=n.p+"img/mariadb.77cee16.svg"},505:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjAwIDQ3Ni4zMDAwMDAwMDAwMDAwNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIxOTg1Ij48cGF0aCBkPSJNMCAyNTkuOFYwbDIyNSAxMjkuOXY4Ni42TDc1IDEyOS45djE3My4yeiIgZmlsbD0iIzAwYjBmZiIvPjxwYXRoIGQ9Ik0yMjUgMTI5LjlMNDUwIDB2MjU5LjhsLTE1MCA4Ni42LTc1LTQzLjMgMTUwLTg2LjZ2LTg2LjZsLTE1MCA4Ni42eiIgZmlsbD0iIzAwODFjYiIvPjxwYXRoIGQ9Ik0yMjUgMzAzLjF2ODYuNmwxNTAgODYuNnYtODYuNnoiIGZpbGw9IiMwMGIwZmYiLz48cGF0aCBkPSJNMzc1IDQ3Ni4zbDIyNS0xMjkuOVYxNzMuMmwtNzUgNDMuM3Y4Ni42bC0xNTAgODYuNnptMTUwLTM0Ni40VjQzLjNMNjAwIDB2ODYuNnoiIGZpbGw9IiMwMDgxY2IiLz48L3N2Zz4="},506:function(t,e,n){t.exports=n.p+"img/mongo.1aca075.svg"},507:function(t,e,n){t.exports=n.p+"img/nodejs.38d424a.svg"},508:function(t,e,n){t.exports=n.p+"img/nuxt.3874d9c.svg"},509:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIxMzA5IiB2aWV3Qm94PSIwIDAgMjU2IDEzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxlbGxpcHNlIGZpbGw9IiM4OTkzQkUiIGN4PSIxMjgiIGN5PSI2Ni42MyIgcng9IjEyOCIgcnk9IjY2LjYzIi8+PHBhdGggZD0iTTM1Ljk0NSAxMDYuMDgybDE0LjAyOC03MS4wMTRIODIuNDFjMTQuMDI3Ljg3NyAyMS4wNDEgNy44OSAyMS4wNDEgMjAuMTY1IDAgMjEuMDQxLTE2LjY1NyAzMy4zMTUtMzEuNTYyIDMyLjQzOEg1Ni4xMWwtMy41MDcgMTguNDExSDM1Ljk0NXptMjMuNjcxLTMxLjU2MUw2NCA0OC4yMTloMTEuMzk3YzYuMTM3IDAgMTAuNTIgMi42MyAxMC41MiA3Ljg5LS44NzYgMTQuOTA1LTcuODkgMTcuNTM1LTE1Ljc4IDE4LjQxMmgtMTAuNTJ6TTEwMC4xOTIgODcuNjcxbDE0LjAyNy03MS4wMTNoMTYuNjU4bC0zLjUwNyAxOC40MWgxNS43OGMxNC4wMjguODc3IDE5LjI4OCA3Ljg5IDE3LjUzNSAxNi42NThsLTYuMTM3IDM1Ljk0NWgtMTcuNTM0bDYuMTM3LTMyLjQzOGMuODc2LTQuMzg0Ljg3Ni03LjAxNC01LjI2LTcuMDE0SDEyNC43NGwtNy44OSAzOS40NTJoLTE2LjY1OHpNMTUzLjQyNSAxMDYuMDgybDE0LjAyNy03MS4wMTRoMzIuNDM4YzE0LjAyOC44NzcgMjEuMDQyIDcuODkgMjEuMDQyIDIwLjE2NSAwIDIxLjA0MS0xNi42NTggMzMuMzE1LTMxLjU2MiAzMi40MzhoLTE1Ljc4MWwtMy41MDcgMTguNDExaC0xNi42NTd6bTIzLjY3LTMxLjU2MWw0LjM4NC0yNi4zMDJoMTEuMzk4YzYuMTM3IDAgMTAuNTIgMi42MyAxMC41MiA3Ljg5LS44NzYgMTQuOTA1LTcuODkgMTcuNTM1LTE1Ljc4IDE4LjQxMmgtMTAuNTIxeiIgZmlsbD0iIzIzMjUzMSIvPjwvZz48L3N2Zz4="},510:function(t,e,n){t.exports=n.p+"img/postgresql.ae92b57.svg"},511:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyI+PHBhdGggZD0iTTMzMC43IDM1Mmw3Ny43Mi0xOTJIMzU2LjlsLTUzLjE2IDEyNC4wN0wyNjUuOTMgMTYwaC0zOS42MWwtNDAuNTggMTI0LjA3bC0yOC42My01Ni41M2wtMjUuOSA3OS40NmwyNi4zIDQ1aDUwLjdsMzYuNjgtMTExLjI3bDM1IDExMS4yN3oiIGZpbGw9IiM2MjYyNjIiLz48cGF0aCBkPSJNNDguNzkgMjg2LjA5aDMxLjY1YTkzLjM5IDkzLjM5IDAgMCAwIDI1LjYyLTMuMjFsOC4xOC0yNS4xOWwyMi44OC03MC4zOWE1NS43NSA1NS43NSAwIDAgMC02LTcuODJRMTEzLjU0IDE2MCA3OS41OSAxNjBIMHYxOTJoNDguNzl6bTQxLjktODEuOTJxNi44OSA2LjkyIDYuODggMTguNTJ0LTYgMTguNTNxLTYuNjQgNy42Mi0yNC40NCA3LjYxSDQ4Ljc5di01MS41OGgxOC40MnExNi41OSAwIDIzLjQ4IDYuOTJ6bTI4Ni4xNiAxMTMuNDRsMTQuNzktMzcuMjVoNDIuNjlsLTIwLjI2LTU2LjUxTDQzOS40MSAxNjBMNTEyIDM1MmgtNTMuNTNsLTEyLjQtMzQuMzl6IiBmaWxsPSIjNjI2MjYyIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIC8+PC9zdmc+"},512:function(t,e,n){t.exports=n.p+"img/python.e6d7dc7.svg"},513:function(t,e,n){t.exports=n.p+"img/react.903d77a.svg"},514:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNOTYuNDQ3IDcuMzgyYzMyLjI2Ny04LjI3NSA2Ny45MjktMy40NTMgOTYuMzg2IDE0LjExIDM1Ljg0IDIxLjQzMyA1OS4yMzggNjEuOTc2IDU5LjgzMyAxMDMuNzEgMS4zMSA0Mi4xNS0yMC42NTkgODMuOTQ0LTU1Ljk2MyAxMDYuODY1LTM5LjI5MyAyNi40MzMtOTMuNjQ4IDI3LjQ0Ni0xMzMuNzc1IDIuMzIyLTQwLjktMjQuNDEtNjQuNzc0LTczLjY0NS01OC42NDEtMTIwLjkxNiA0Ljk0LTQ5Ljk1IDQzLjUyLTk0LjAwNSA5Mi4xNi0xMDYuMDl6IiBmaWxsPSIjMDEwMTAxIi8+PHBhdGggZD0iTTkxLjUwNSAyNy44MDNjNjAuOTY0LTI0LjQxIDEzNS43NCAyMC42NTggMTQyLjA1IDg2LjAyOCA5LjgyNCA1OC44Mi0zOC45OTUgMTE4LjU5My05OC41OSAxMjAuMzItNTYuNjc3IDUuNjU2LTExMS40NDktNDIuMzktMTEzLjA1Ni05OS4zMDQtNC4yMjctNDYuMDggMjYuMTM2LTkxLjgwMyA2OS41OTYtMTA3LjA0NHoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNOTcuNjM3IDEyMS42OWMyNy4zMjctMjIuMzI2IDU0LjA1OC00NS40MjYgODEuOTgtNjcuMDk3LTE0LjY0NiAyMi41MDUtMjkuNzA4IDQ0LjcxMS00NC4zNTQgNjcuMjE1LTEyLjU2Mi4wNi0yNS4xMjMuMDYtMzcuNjI2LS4xMTl6TTEyMC43MzcgMTM0LjEzMmMxMi42MjEgMCAyNS4xODMgMCAzNy43NDUuMTc5LTI3LjUwNSAyMi4yMDYtNTQuMTE3IDQ1LjQ4NC04Mi4wOTkgNjcuMDk2IDE0LjY0Ni0yMi41MDUgMjkuNzA4LTQ0Ljc3IDQ0LjM1NC02Ny4yNzV6IiBmaWxsPSIjMDEwMTAxIi8+PC9zdmc+"},515:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjM0IDIzNS4xIiB3aWR0aD0iMjQ4OCIgaGVpZ2h0PSIyNTAwIj48c3R5bGU+LnN0MHtmaWxsOiMwMTc5Y2J9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNODMuMyAxNDMuOWwtNTggNDUuMkwwIDE3Ni41VjU4LjdMMjUuMiA0Nmw1Ny42IDQ1LjNMMTc0IDBsNjAgMjMuOXYxODYuOWwtNTkuNyAyNC4zLTkxLTkxLjJ6bTg4LjkgMTUuOVY3NS4zbC01NC42IDQyLjMgNTQuNiA0Mi4yek0yNy4zIDE0NC42TDU2IDExOC41IDI3LjMgODkuOXY1NC43eiIvPjwvc3ZnPg=="},516:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyMTU4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjA0LjggMEgyNTZMMTI4IDIyMC44IDAgMGg5Ny45MkwxMjggNTEuMiAxNTcuNDQgMGg0Ny4zNnoiIGZpbGw9IiM0MUI4ODMiLz48cGF0aCBkPSJNMCAwbDEyOCAyMjAuOEwyNTYgMGgtNTEuMkwxMjggMTMyLjQ4IDUwLjU2IDBIMHoiIGZpbGw9IiM0MUI4ODMiLz48cGF0aCBkPSJNNTAuNTYgMEwxMjggMTMzLjEyIDIwNC44IDBoLTQ3LjM2TDEyOCA1MS4yIDk3LjkyIDBINTAuNTZ6IiBmaWxsPSIjMzU0OTVFIi8+PC9zdmc+"},517:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMTg3LjUgMjUwMCIgdmlld0JveD0iMCAwIDIxODcuNSAyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMDkzLjggMGgtNTExbDUxMSAxMjA4IiBmaWxsPSIjMTY5N2Y2Ii8+PHBhdGggZD0ibTEwOTMuOCAxNTYyLjV2OTM3LjVsLTEwOTMuOC0yMTM1LjVoNTczem0wLTE1NjIuNWg1MTFsLTUxMSAxMjA4IiBmaWxsPSIjN2JjNmZmIi8+PHBhdGggZD0ibTE2MTQuNSAzNjQuNWg1NzNsLTEwOTMuNyAyMTM1LjV2LTkzNy41eiIgZmlsbD0iI2FlZGRmZiIvPjwvc3ZnPg=="},518:function(t,e,n){"use strict";n(470)},519:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".img-desc[data-v-5b2c553e]{font-size:14px;font-weight:200}.description[data-v-5b2c553e]{font-size:16px}.carousel-parent[data-v-5b2c553e]  .v-carousel__controls,.radius[data-v-5b2c553e]  .v-image__image{border-radius:8px!important}",""]),t.exports=o}}]);