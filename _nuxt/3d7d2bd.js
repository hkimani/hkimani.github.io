(window.webpackJsonp=window.webpackJsonp||[]).push([[1,8,10,12],{411:function(t,e,n){t.exports=n.p+"img/dash1.da39147.png"},412:function(t,e,n){t.exports=n.p+"img/dash2.b9b892f.png"},413:function(t,e,n){t.exports=n.p+"img/dash3.f71f4e3.png"},414:function(t,e,n){t.exports=n.p+"img/dash4.9aeda07.png"},415:function(t,e,n){t.exports=n.p+"img/landing.f521d1e.png"},416:function(t,e,n){t.exports=n.p+"img/map.cb8016a.png"},417:function(t,e,n){t.exports=n.p+"img/digimatt1.6c8aa6d.jpeg"},418:function(t,e,n){t.exports=n.p+"img/digimatt2.f095f0f.jpeg"},419:function(t,e,n){t.exports=n.p+"img/digimatt3.a03ab22.jpeg"},420:function(t,e,n){t.exports=n.p+"img/rp1.2ec65a9.png"},421:function(t,e,n){t.exports=n.p+"img/rp4.7875bb6.png"},422:function(t,e,n){t.exports=n.p+"img/rp6.b9ba173.png"},423:function(t,e,n){t.exports=n.p+"img/rp7.6e20541.png"},424:function(t,e,n){t.exports=n.p+"img/rp8dash.ec8ac36.png"},425:function(t,e,n){t.exports=n.p+"img/rp9dash.b3c1482.png"},426:function(t,e,n){t.exports=n.p+"img/weskool1.bf051c6.png"},427:function(t,e,n){t.exports=n.p+"img/weskool2.6b9b21a.png"},428:function(t,e,n){t.exports=n.p+"img/weskool3.b077bcb.png"},429:function(t,e,n){t.exports=n.p+"img/weskool5.3b98f05.png"},430:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("15ee9d5d",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("31010a58",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(71),c=n(110),l=n(185);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={props:{permanent:{type:Boolean,default:!1},minivariant:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},temporary:{type:Boolean,default:!1},nav:{type:Boolean,default:null},right:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,pages:c.b}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({scroll:function(t){Object(l.d)(this,t,document)},openDrawer:function(){}},Object(r.b)({toggle:"nav/toggle"}))},m=(n(435),n(27)),f=n(39),h=n.n(f),_=n(404),y=n(170),x=n(173),C=n(105),w=n(23),k=n(410),j=n(408),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:t.baseColor,permanent:t.permanent,"mini-variant":t.minivariant,absolute:t.absolute,temporary:t.temporary,right:t.right}},[n("v-list",{attrs:{nav:"",dense:""}},[t.permanent?t._e():n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Hubert Kimani ")]),t._v(" "),n("v-list-item-subtitle",[t._v(" creating dreams ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.toggle()}}},[n("v-icon",[t._v("mdi-backburger")])],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,staticClass:"my-2",attrs:{to:"/#"+section.name},on:{click:function(e){return t.scroll(section.name)}}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",r,!1),o),[t._v(t._s(section.icon))])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(section.name)+" ")])])],1)})),t._v(" "),n("v-divider"),t._v(" "),t._l(t.pages,(function(e,i){return n("v-list-item",{key:"p"+i,staticClass:"my-2",attrs:{link:"",to:"/"+e.name}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("div",{staticClass:"btn-nav"},[n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color,small:""}},"v-icon",c,!1),r),[t._v(t._s(e.icon)+"\n            ")]),t._v(" "),n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color}},"v-icon",c,!1),r),[t._v("mdi-chevron-right")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name)+" "+t._s(" page")+" ")])])],1)}))],2)],1)}),[],!1,null,"0cdc4502",null);e.default=component.exports;h()(component,{VDivider:_.a,VIcon:y.a,VList:x.a,VListItem:C.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VNavigationDrawer:k.a,VTooltip:j.a})},433:function(t,e,n){"use strict";n.r(e);var o={components:{Socials:n(140).default},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base}}},r=n(27),c=n(39),l=n.n(c),d=n(193),v=n(392),m=n(391),f=n(404),h=n(465),_=n(170),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-8 mb-6",attrs:{id:"footer",dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center card",attrs:{color:t.baseColor,width:"2160",flat:"",outlined:""}},[n("v-card-text",{staticClass:"pb-0"},[n("Socials")],1),t._v(" "),n("v-card-text",[t._v("\n      Email:\n      "),n("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n        kimanihubert1@gmail.com\n      ")])]),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n      Crafted with\n\n      "),t._v(" "),n("v-btn",{attrs:{icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#E91E63"}},[t._v(" mdi-cards-heart ")])],1),t._v("\n\n      by\n\n      "),n("a",{staticClass:"pl-1 pr-2 a",attrs:{href:"https://github.com/kimanihuon"}},[t._v("\n        Hubert Kimani\n      ")]),t._v("\n\n      in\n\n      "),t._v(" "),n("v-btn",{attrs:{href:"https://vuejs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#41B883"}},[t._v(" mdi-vuejs ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://vuetifyjs.com/en/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#7BC6FF"}},[t._v(" mdi-vuetify ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://nuxtjs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#00C58E"}},[t._v(" mdi-nuxt ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[n("v-icon",[t._v("mdi-copyright")]),t._v("\n      "+t._s((new Date).getFullYear())+" —\n      "),n("span",[t._v("All rights reserved.")])],1)],1)],1)}),[],!1,null,"a82ac266",null);e.default=component.exports;l()(component,{Socials:n(140).default}),l()(component,{VBtn:d.a,VCard:v.a,VCardText:m.c,VDivider:f.a,VFooter:h.a,VIcon:_.a})},434:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("398bd288",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n(430)},436:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".btn-nav[data-v-0cdc4502]{display:flex;flex-direction:row;padding:0}.btn-icon[data-v-0cdc4502]{padding:0!important;margin:0!important}",""]),t.exports=o},437:function(t,e,n){"use strict";n(431)},438:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".fade-enter-active[data-v-34fbb0cd],.fade-leave-active[data-v-34fbb0cd]{transition:opacity .5s}.fade-enter[data-v-34fbb0cd],.fade-leave-to[data-v-34fbb0cd]{opacity:0}",""]),t.exports=o},439:function(t,e,n){"use strict";function o(){return{portfolio:{posts:[{id:"cotswold",title:"Digital Matatus Cotswold",subtitle:"Data visualization tool",featuredimg:"cotswold/dash2.png",description:"Data visualization and sentiment analysis of survey data. Built using React, D3.js, OpenStreetMaps and many other innovative technologies.",images:[{src:n(412),thumb:n(412),caption:"Sentiment analysis"},{src:n(411),thumb:n(411),caption:"Transport feedback"},{src:n(416),thumb:n(416),caption:"Map"},{src:n(415),thumb:n(415),caption:"Summaries"},{src:n(413),thumb:n(413),caption:"Area chart age distribution"},{src:n(414),thumb:n(414),caption:"Pie chart age distribution"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"PostgreSQL",icon:"postgresql.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"React Js",icon:"react.svg"},{name:"Material UI",icon:"materialui.svg"},{name:"D3.Js",icon:"d3.svg"},{name:"OpenStreetMaps",icon:"leaflet.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"repoll",title:"Repoll",subtitle:"Polling application",featuredimg:"repoll/rp8dash.png",description:"Social polling application that allows users to create interactive polls that are visible across the web",images:[{src:n(424),thumb:n(424),caption:"Dashboard"},{src:n(425),thumb:n(425),caption:"Dashboard scrolled"},{src:n(420),thumb:n(420),caption:"Editor"},{src:n(421),thumb:n(421),caption:"Poll create"},{src:n(423),thumb:n(423),caption:"Add tags"},{src:n(422),thumb:n(422),captions:"Poll submit"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"DRF",icon:"django.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"Vuetify",icon:"vuetify.svg"},{name:"NuxtJs",icon:"nuxt.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"digimatt",title:"Digimatt",subtitle:"Fare price crowd sourcing tool",featuredimg:"digimatt/digimatt1.jpeg",description:"Service that allows public transport users to share their daily fare prices with the aim of preventing exploitation",images:[{src:n(417),thumb:n(417),caption:"Routes"},{src:n(418),thumb:n(418),caption:"Dashboard"},{src:n(419),thumb:n(419),caption:"Single route"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"NodeJs",icon:"nodejs.svg"},{name:"ExpressJs",icon:"express.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"}],frontend:[{name:"Javascript",icon:"javascript.svg"},{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"PWA",icon:"pwa.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}},{id:"weskool",title:"Weskool",subtitle:"Resource sharing platform",featuredimg:"weskool/weskool1.png",description:"Platform that helps students keep track of learning resources such as notes, tutorials and todo",images:[{src:n(426),thumb:n(426),caption:"Dashboard"},{src:n(427),thumb:n(427),caption:"Track editor"},{src:n(428),thumb:n(428),caption:"Profile"},{src:n(429),thumb:n(429),caption:"Chat"}],technologies:{backend:[{name:"Python",icon:"python.svg"},{name:"Django",icon:"django.svg"},{name:"Docker",icon:"docker.svg"},{name:"Javascript",icon:"javascript.svg"},{name:"Express",icon:"express.svg"},{name:"Sockets",icon:"socket-io.svg"},{name:"MariaDB",icon:"mariadb.svg"},{name:"Mongo",icon:"mongo.svg"},{name:"Linux",icon:"linux.svg"}],frontend:[{name:"VueJs",icon:"vue.svg"},{name:"VueJs",icon:"vuetify.svg"},{name:"Sockets",icon:"socket-io.svg"}],dev:[{name:"VSCode",icon:"vscode.svg"},{name:"Github",icon:"github.svg"}]}}]},blog:{posts:[]}}}n.d(e,"a",(function(){return o}))},442:function(t,e,n){"use strict";n.r(e);n(32),n(15),n(40);var o={props:{servicerequest:{type:String,default:""}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return t.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(t){this.message=t}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(t){var e=this;setTimeout((function(){e.status.waiting=!1,e.status.loading=!1,e.status.success=!1,e.status.error=!1}),t)},send:function(){var t=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat("https://kimapi.netlify.app","/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(e){t.status.loading=!1,e.ok?(t.status.msg="Message sent successfully",t.status.success=!0,t.resetStatus(t.swt),t.resetContent()):(t.status.msg="Oops something happened, please wait a while and try again!!",t.status.error=!0,t.resetStatus(t.ewt))})).catch((function(e){console.log(e),t.status.msg="Oops something happened, please wait a while and try again!!",t.status.loading=!1,t.status.error=!0,t.resetStatus(t.ewt)}))))}}},r=(n(437),n(27)),c=n(39),l=n.n(c),d=n(546),v=n(193),m=n(392),f=n(537),h=n(170),_=n(534),y=n(538),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-2 pt-4 card",attrs:{color:t.baseColor,outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:t.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:t.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{staticClass:"card",attrs:{rules:t.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.status.error||t.status.success?n("v-alert",{attrs:{outlined:"",type:t.status.error?"warning":"success",prominent:"",border:"left"}},[t._v("\n        "+t._s(t.status.msg)+"\n      ")]):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:t.status.loading,large:"",rounded:"",color:t.status.error?"#F44336":"#4CAF50"},on:{click:t.send}},[!t.status.loading&&t.status.success?n("v-icon",[t._v("mdi-check-bold")]):t._e(),t._v(" "),!t.status.loading&&t.status.error?n("v-icon",[t._v("mdi-alert-circle")]):t._e(),t._v(" "),t.status.loading||t.status.success||t.status.error?t._e():n("span",[t._v("\n          Send Message\n        ")])],1)],1)],1)],1)}),[],!1,null,"34fbb0cd",null);e.default=component.exports;l()(component,{VAlert:d.a,VBtn:v.a,VCard:m.a,VForm:f.a,VIcon:h.a,VTextField:_.a,VTextarea:y.a})},443:function(t,e,n){t.exports=n.p+"img/dev.6ac6013.svg"},444:function(t,e,n){t.exports=n.p+"img/portfolio.d523f9f.png"},445:function(t,e,n){t.exports=n.p+"img/ryan-tang-8OyZGH43-p4-unsplash.8220ce4.jpg"},446:function(t,e,n){"use strict";n.r(e);n(89);var o=n(439),r={props:{parent:{type:Boolean,default:!1}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,portfolio:this.parent?Object(o.a)().portfolio.posts.slice(0,3):Object(o.a)().portfolio.posts}}},c=(n(456),n(27)),l=n(39),d=n.n(l),v=n(193),m=n(392),f=n(391),h=n(170),_=n(137),y=n(402),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.portfolio,(function(e,i){return o("v-card",{key:i,staticClass:"mx-auto mt-4 mb-4",attrs:{color:"#2c2c39","max-width":"324",outlined:""}},[o("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",gradient:"to top, rgba(0, 0, 0, 0.7) 0%, transparent 82px",src:n(447)("./"+e.featuredimg)}},[o("v-card-title",[t._v(" "+t._s(e.title)+" ")])],1),t._v(" "),o("v-card-subtitle",{staticClass:"pb-0"},[t._v(" "+t._s(e.subtitle)+" ")]),t._v(" "),o("v-card-text",{staticClass:"text--primary mt-2"},[t._v("\n        "+t._s(e.description.substring(0,110))+"...\n      ")]),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"orange",text:"",to:"/portfolio/"+e.id+"/"}},[t._v("\n          Explore\n        ")])],1)],1)})),1),t._v(" "),o("div",{staticClass:"d-flex justify-center mb-4"},[t.parent?o("v-btn",{attrs:{text:"",color:"orange",to:"/portfolio/"}},[t._v("\n      More "),o("v-icon",[t._v(" mdi-chevron-right")])],1):t._e()],1)],1)}),[],!1,null,"0b7607ea",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VIcon:h.a,VImg:_.a,VRow:y.a})},447:function(t,e,n){var map={"./cotswold/dash1.png":411,"./cotswold/dash2.png":412,"./cotswold/dash3.png":413,"./cotswold/dash4.png":414,"./cotswold/landing.png":415,"./cotswold/map.png":416,"./dev.svg":443,"./dev_orange.svg":448,"./dev_red.svg":449,"./dev_teal.svg":450,"./digimatt/digimatt1.jpeg":417,"./digimatt/digimatt2.jpeg":418,"./digimatt/digimatt3.jpeg":419,"./portfolio.png":444,"./repoll/rp1.png":420,"./repoll/rp10 dash lite.png":451,"./repoll/rp2.png":452,"./repoll/rp3.png":453,"./repoll/rp4.png":421,"./repoll/rp5.png":454,"./repoll/rp6.png":422,"./repoll/rp7.png":423,"./repoll/rp8dash.png":424,"./repoll/rp9dash.png":425,"./ryan-tang-8OyZGH43-p4-unsplash.jpg":445,"./selfie.jpg":261,"./weskool/weskool1.png":426,"./weskool/weskool2.png":427,"./weskool/weskool3.png":428,"./weskool/weskool4.png":455,"./weskool/weskool5.png":429};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=447},448:function(t,e,n){t.exports=n.p+"img/dev_orange.ba7a22a.svg"},449:function(t,e,n){t.exports=n.p+"img/dev_red.dd59f24.svg"},450:function(t,e,n){t.exports=n.p+"img/dev_teal.d1c03bb.svg"},451:function(t,e,n){t.exports=n.p+"img/rp10 dash lite.faf3b66.png"},452:function(t,e,n){t.exports=n.p+"img/rp2.054a004.png"},453:function(t,e,n){t.exports=n.p+"img/rp3.8f3ae1a.png"},454:function(t,e,n){t.exports=n.p+"img/rp5.d79657b.png"},455:function(t,e,n){t.exports=n.p+"img/weskool4.8894f3b.png"},456:function(t,e,n){"use strict";n(434)},457:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,"",""]),t.exports=o},458:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6e744526",content,!0,{sourceMap:!1})},466:function(t,e,n){"use strict";n(458)},467:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,"[data-v-fcf69320] .typed{color:#fff!important}",""]),t.exports=o},468:function(t,e,n){"use strict";n.r(e);n(15);var o={components:{VueTyper:function(){return n.e(19).then(n.bind(null,540))}},data:function(){return{text:["I build full-stack web applications","I utilize open source technology","Tech stack: SQL/Mongo, DRF/Express, Vue, Django/Node","My most important tool is problem solving"]}}},r=(n(466),n(27)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("vue-typer",{staticClass:"text",attrs:{text:t.text,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":3e3,"erase-delay":250,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"phase"}})}),[],!1,null,"fcf69320",null);e.default=component.exports},471:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("74ed8e54",content,!0,{sourceMap:!1})},474:function(t,e,n){"use strict";n.r(e);var o=n(468),r=n(432),c=n(442),l=n(110),d=n(446),v=n(185),m=n(433),f={components:{Contact:c.default,Nav:r.default,Typer:o.default,Portfolio:d.default,Footer:m.default},data:function(){return{serviceRequest:"",baseColor:this.$vuetify.theme.defaults.dark.base,about:{image:n(443),tags:[{name:"Reliable",color:"#2196F3",icon:"mdi-check-decagram"},{name:"Goal oriented",color:"success",icon:"mdi-bullseye-arrow"},{name:"Chess",color:"#00BCD4",icon:"mdi-chess-knight"},{name:"Learning",color:"#03A9F4",icon:"mdi-head-lightbulb"},{name:"Fun",color:"#FFC107",icon:"mdi-sticker-emoji"},{name:"Cake",color:"#8D6E63",icon:"mdi-cupcake"}]},services:[{name:"Front-End Development",description:"I believe in webpages being robust and reliable with a unique personality for each project.",tools:["TypeScript","JavaScript (Vanilla, VueJS, React JS)","HTML","CSS","Vuetify, Material UI, Chakra UI","Inkline"],devtools:["VS Code","Git","Github","Bash"]},{name:"Back-End Development",description:"Proficient in implementing Server-side application logic using open source technologies and creative solutions.",tools:["TypeScript","Javascript(NodeJS, ExpressJS)","Python (Django, Flask)","Docker","Linux","PHP"],devtools:["VS Code","Git","Github","Bash"]},{name:"Full Stack Development",description:"Combining proffiency in Backend and Frontend technology to create and implement applications that scale.",tools:["VueJS, React JS","Axios","Django","SQL (PostgreSQL, MariaDB)","Node (ExpressJS)","NoSQL (MongoDB)"],devtools:["VS Code","Git","Github","Bash"]},{name:"M-pesa Integration",description:"Automating payment processes like: B2C, C2B and STK (M-pesa express) through Safaricom's daraja API.",tools:["TypeScript, Javascript, Python, PHP","Wordpress, Node, Django"]},{name:"UI/UX Design",description:"I value smooth user experience(s), effective design patterns and meaningful interactions.",devtools:["Adobe XD","Pen & Paper"]}],sections:l.a,icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"100vh;":"96vh;")}},mounted:function(){if(this.$route.hash)Object(v.a)(this.$route.hash);else{var body=document.querySelector(".scrollable2");Object(v.c)(this,body)}},methods:{request:function(t){document.getElementById("contact").scrollIntoView({behavior:"smooth"}),this.serviceRequest="I require your "+t+" services."},scroll:function(){document.getElementById("services").scrollIntoView({behavior:"smooth"})}}},h=(n(524),n(27)),_=n(39),y=n.n(_),x=n(193),C=n(392),w=n(391),k=n(539),j=n(548),V=n(403),S=n(549),D=n(170),O=n(137),M=n(402),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.baseColor,outlined:""}},[o("div",{staticClass:"d-flex flex-row"},[o("div",{class:"scrollable2 px-"+(t.$vuetify.breakpoint.mdAndDown?4:6),style:t.vh},[o("section",{staticClass:"mt-8",attrs:{id:"home"}},[o("v-img",{attrs:{"aspect-ratio":16/9,width:"803",height:""+(t.$vuetify.breakpoint.smAndDown?400:320),gradient:"to left, rgba(100,115,201,.3), rgba(25, 32, 72)",src:n(445)}},[o("v-container",{staticClass:"fill-height"},[o("div",{class:"ml-"+(t.$vuetify.breakpoint.smAndDown?2:12)},[o("span",{staticClass:"banner-text"},[t._v("Experience my Amazing")]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"banner-text"},[t._v("Dream Space! ")]),t._v(" "),o("client-only",[o("div",{staticClass:"banner-code mt-3 mb-4"},[t._v("\n                  <"),o("span",{staticClass:"tag-color"},[t._v("code")]),t._v(">\n                  "),o("Typer"),t._v("\n                  <"),o("span",{staticClass:"tag-color"},[t._v("/code")]),t._v(">\n                ")],1)]),t._v(" "),o("v-btn",{attrs:{tile:"",large:"",color:"#7579ff"},on:{click:t.scroll}},[t._v("\n                Discover\n              ")]),t._v(" "),o("br")],1)])],1)],1),t._v(" "),o("section",{staticClass:"mt-8",attrs:{id:"about"}},[o("span",{staticClass:"section-title"},[t._v("About")]),t._v(" "),o("v-card",{staticClass:"mt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",[o("v-img",{staticClass:"my-4 mx-4",attrs:{"max-height":"250","max-width":"250",src:t.about.image}})],1),t._v(" "),o("v-col",[o("v-card-subtitle",{staticClass:"about-description"},[t._v("\n                I am an open minded individual that loves exploring and\n                learning new things. Outside of software development I enjoy\n                chess, video games, sports and hanging out with friends.\n              ")]),t._v(" "),o("v-chip-group",{staticClass:"mx-4",attrs:{column:""}},t._l(t.about.tags,(function(e,i){return o("v-chip",{key:i,staticClass:"mt-4",attrs:{color:e.color,outlined:""}},[o("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")]),t._v("\n                  "+t._s(e.name)+"\n                ")],1)})),1)],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"services"}},[o("span",{staticClass:"section-title"},[t._v("What I do")]),t._v(" "),o("v-card",{staticClass:"mt-2 pt-2 card",attrs:{color:t.baseColor,outlined:""}},[o("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.services,(function(e,n){return o("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"4"}},[o("v-card",{staticClass:"my-2 mx-2",attrs:{color:"#2c2c39"}},[o("v-card-title",{staticClass:"stitle"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),o("v-card-subtitle",{staticClass:"ssubtitle"},[t._v("\n                  "+t._s(e.description)+"\n                ")]),t._v(" "),e.tools?o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                  Languages/Frameworks\n                ")]):t._e(),t._v(" "),e.tools?o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.tools,(function(e,i){return o("span",{key:i},[t._v("\n                    "+t._s(e)+" "),o("br")])})),0):t._e(),t._v(" "),e.devtools?o("v-card-title",{staticClass:"stitle stitle-color"},[t._v("\n                  Dev Tools\n                ")]):t._e(),t._v(" "),e.devtools?o("v-card-subtitle",{staticClass:"ssubtitle"},t._l(e.devtools,(function(e,i){return o("span",{key:i},[t._v("\n                    "+t._s(e)+" "),o("br")])})),0):t._e(),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"#ff9800",text:""},on:{click:function(n){return t.request(e.name)}}},[t._v("\n                    Order Now"),o("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)})),1)],1)],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"portfolio"}},[o("span",{staticClass:"section-title"},[t._v(" Featured projects ")]),t._v(" "),o("Portfolio",{attrs:{parent:""}})],1),t._v(" "),o("section",{staticClass:"mt-6",attrs:{id:"contact"}},[o("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),o("Contact",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1),t._v(" "),o("Footer")],1),t._v(" "),this.$vuetify.breakpoint.lgAndUp?o("div",[o("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])}),[],!1,null,"37363746",null);e.default=component.exports;y()(component,{Typer:n(468).default,Portfolio:n(446).default,Footer:n(433).default,Nav:n(432).default}),y()(component,{VBtn:x.a,VCard:C.a,VCardActions:w.a,VCardSubtitle:w.b,VCardTitle:w.d,VChip:k.a,VChipGroup:j.a,VCol:V.a,VContainer:S.a,VIcon:D.a,VImg:O.a,VRow:M.a})},524:function(t,e,n){"use strict";n(471)},525:function(t,e,n){var o=n(7)((function(i){return i[1]}));o.push([t.i,".banner-text[data-v-37363746]{font-weight:800;font-size:2.25rem}.section-title[data-v-37363746]{font-weight:600;font-size:17px}.banner-code[data-v-37363746],.button-style[data-v-37363746]{font-weight:500}.stitle[data-v-37363746]{font-size:1.1rem}.ssubtitle[data-v-37363746]{font-size:.9rem}.stitle-color[data-v-37363746]{color:#7579ff}.about-description[data-v-37363746]{font-size:16px;font-weight:400}.tag-color[data-v-37363746]{color:#00ff62}.img[data-v-37363746]{background-image:linear-gradient(to top right,rgba(100,115,201,.33),#192048)}",""]),t.exports=o}}]);