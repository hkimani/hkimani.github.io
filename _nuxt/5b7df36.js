(window.webpackJsonp=window.webpackJsonp||[]).push([[20,13,15],{447:function(t,e,n){"use strict";var r={checkaccount:"https://pay.digitalmediawards.com/src/endpoints/checkaccount.php",stk:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/transactions/c2b/stkpush",stkquery:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/transactions/c2b/stkquery",token:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/token/fetch",socket:"https://payments.hubertkimani.me:3000",mail:"https://kimapi.netlify.app"};e.a=function(){return r}},450:function(t,e,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("997e910c",content,!0,{sourceMap:!1})},451:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("589e4d90",content,!0,{sourceMap:!1})},474:function(t,e,n){"use strict";n(450)},475:function(t,e,n){var r=n(15)(!1);r.push([t.i,".btn-nav[data-v-0ba4c9da]{display:flex;flex-direction:row;padding:0}.btn-icon[data-v-0ba4c9da]{padding:0!important;margin:0!important}",""]),t.exports=r},476:function(t,e,n){"use strict";n(451)},477:function(t,e,n){var r=n(15)(!1);r.push([t.i,".fade-enter-active[data-v-4a047419],.fade-leave-active[data-v-4a047419]{transition:opacity .5s}.fade-enter[data-v-4a047419],.fade-leave-to[data-v-4a047419]{opacity:0}",""]),t.exports=r},483:function(t,e,n){t.exports=n.p+"img/clint-adair-BW0vK-FA3eg-unsplash.fdfb296.jpg"},485:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(10),n(11),n(7),n(12);var r=n(2),o=n(86),c=n(124),l=n(205);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={props:{permanent:{type:Boolean,default:!1},minivariant:{type:Boolean,default:!1},absolute:{type:Boolean,default:!1},temporary:{type:Boolean,default:!1},nav:{type:Boolean,default:null},right:{type:Boolean,default:!1},sections:{type:Array,default:function(){return[]}}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,pages:c.b}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({scroll:function(t){Object(l.d)(this,t,document)},openDrawer:function(){}},Object(o.b)({toggle:"nav/toggle"}))},v=(n(474),n(39)),f=n(56),h=n.n(f),_=n(440),y=n(189),k=n(192),x=n(119),C=n(35),w=n(446),V=n(444),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{color:t.baseColor,permanent:t.permanent,"mini-variant":t.minivariant,absolute:t.absolute,temporary:t.temporary,right:t.right}},[n("v-list",{attrs:{nav:"",dense:""}},[t.permanent?t._e():n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v("\n                    Hubert Kimani\n                ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                    creating dreams\n                ")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.toggle()}}},[n("v-icon",{attrs:{color:"#E040FB"}},[t._v("mdi-backburger")])],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.sections,(function(section,i){return n("v-list-item",{key:i,staticClass:"my-2",attrs:{to:"/#"+section.name},on:{click:function(e){return t.scroll(section.name)}}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-icon",t._g(t._b({},"v-icon",o,!1),r),[t._v(t._s(section.icon))])]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(section.name)+" ")])])],1)})),t._v(" "),n("v-divider"),t._v(" "),t._l(t.pages,(function(e,i){return n("v-list-item",{key:"p"+i,staticClass:"my-2",attrs:{link:"",to:"/"+e.name}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[n("div",{staticClass:"btn-nav"},[n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color,small:""}},"v-icon",c,!1),o),[t._v(t._s(e.icon)+"\n                        ")]),t._v(" "),n("v-icon",t._g(t._b({staticClass:"btn-icon",attrs:{color:e.color}},"v-icon",c,!1),o),[t._v("mdi-chevron-right")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.name)+" "+t._s(" page")+" ")])])],1)}))],2)],1)}),[],!1,null,"0ba4c9da",null);e.default=component.exports;h()(component,{VDivider:_.a,VIcon:y.a,VList:k.a,VListItem:x.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VNavigationDrawer:w.a,VTooltip:V.a})},486:function(t,e,n){"use strict";n.r(e);n(23),n(57),n(17);var r=n(447),o={props:{servicerequest:{type:String,default:""}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return t.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(t){this.message=t}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(t){var e=this;setTimeout((function(){e.status.waiting=!1,e.status.loading=!1,e.status.success=!1,e.status.error=!1}),t)},send:function(){var t=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat(Object(r.a)().mail,"/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(e){t.status.loading=!1,e.ok?(t.status.msg="Message sent successfully",t.status.success=!0,t.resetStatus(t.swt),t.resetContent()):(t.status.msg="Oops something happened, please wait a while and try again!!",t.status.error=!0,t.resetStatus(t.ewt))})).catch((function(e){console.log(e),t.status.msg="Oops something happened, please wait a while and try again!!",t.status.loading=!1,t.status.error=!0,t.resetStatus(t.ewt)}))))}}},c=(n(476),n(39)),l=n(56),d=n.n(l),m=n(489),v=n(204),f=n(428),h=n(493),_=n(189),y=n(513),k=n(518),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-2 pt-4 card",attrs:{color:t.baseColor,outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:t.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:t.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(e){return t.reset()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-textarea",{staticClass:"card",attrs:{rules:t.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.status.error||t.status.success?n("v-alert",{attrs:{outlined:"",type:t.status.error?"warning":"success",prominent:"",border:"left"}},[t._v("\n                "+t._s(t.status.msg)+"\n            ")]):t._e()],1),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:t.status.loading,large:"",rounded:"",color:t.status.error?"#F44336":"#4CAF50"},on:{click:t.send}},[!t.status.loading&&t.status.success?n("v-icon",[t._v("mdi-check-bold")]):t._e(),t._v(" "),!t.status.loading&&t.status.error?n("v-icon",[t._v("mdi-alert-circle")]):t._e(),t._v(" "),t.status.loading||t.status.success||t.status.error?t._e():n("span",[t._v("\n                    Send Message\n                ")])],1)],1)],1)],1)}),[],!1,null,"4a047419",null);e.default=component.exports;d()(component,{VAlert:m.a,VBtn:v.a,VCard:f.a,VForm:h.a,VIcon:_.a,VTextField:y.a,VTextarea:k.a})},487:function(t,e,n){"use strict";n.r(e);var r={components:{Socials:n(206).default},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base}}},o=n(39),c=n(56),l=n.n(c),d=n(204),m=n(428),v=n(427),f=n(440),h=n(519),_=n(189),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"mt-8 mb-6",attrs:{id:"footer",dark:"",padless:""}},[n("v-card",{staticClass:"white--text text-center card",attrs:{color:t.baseColor,width:"2160",flat:"",outlined:""}},[n("v-card-text",{staticClass:"pb-0"},[n("Socials")],1),t._v(" "),n("v-card-text",[t._v("\n            Email:\n            "),n("a",{staticClass:"a",attrs:{href:"mailto:kimanihubert1@gmail.com"}},[t._v("\n                kimanihubert1@gmail.com\n            ")])]),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n            Crafted with\n\n            "),t._v(" "),n("v-btn",{attrs:{icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#E91E63"}},[t._v("\n                    mdi-cards-heart\n                ")])],1),t._v("\n\n            by\n\n            "),n("a",{staticClass:"pl-1 pr-2 a",attrs:{href:"https://github.com/kimanihuon"}},[t._v("\n                Hubert Kimani\n            ")]),t._v("\n\n            in\n\n            "),t._v(" "),n("v-btn",{attrs:{href:"https://vuejs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#41B883"}},[t._v("\n                    mdi-vuejs\n                ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://vuetifyjs.com/en/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#7BC6FF"}},[t._v("\n                    mdi-vuetify\n                ")])],1),t._v(" "),n("v-btn",{attrs:{href:"https://nuxtjs.org/",target:"_blank",icon:"",small:""}},[n("v-icon",{staticClass:"mx-1",attrs:{small:"",color:"#00C58E"}},[t._v("\n                    mdi-nuxt\n                ")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[n("v-icon",[t._v("mdi-copyright")]),t._v("\n            "+t._s((new Date).getFullYear())+" —\n            "),n("span",[t._v("All rights reserved.")])],1)],1)],1)}),[],!1,null,"a2bd68ea",null);e.default=component.exports;l()(component,{Socials:function(){return Promise.resolve().then(n.bind(null,206)).then((function(t){return t.default||t}))}}),l()(component,{VBtn:d.a,VCard:m.a,VCardText:v.c,VDivider:f.a,VFooter:h.a,VIcon:_.a})},494:function(t,e,n){"use strict";var r=n(29),o=(n(103),n(120)),c=n.n(o);function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(e,body,n,r){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={error:null,data:null,expectedError:null},t.prev=1,t.next=4,c()({headers:{Authorization:"Bearer ".concat(n)},method:r||"post",url:e,data:body,timeout:15e3,withCredentials:!0}).then((function(t){return o.error=null,o.data=t.data,o})).catch((function(t){return t.response&&t.response.data?t.response.data.details?(o.error=t.response.data.details.errorMessage,o.data=null,"500.001.1001"===t.response.data.details.errorCode&&(o.expectedError=t.response.data.details.errorMessage)):(o.error=t.response.data,o.data=null):(o.error="Something happened. Unable to make request",o.data=null),o}));case 4:return l=t.sent,t.abrupt("return",l);case 8:return t.prev=8,t.t0=t.catch(1),o.error="Something happened. Unable to make request",o.data=null,t.abrupt("return",o);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.a=function(t,e,n,r){return l.apply(this,arguments)}},495:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("95e52030",content,!0,{sourceMap:!1})},496:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("c5ce328c",content,!0,{sourceMap:!1})},499:function(t,e,n){var content=n(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0217e75f",content,!0,{sourceMap:!1})},520:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(29),o=(n(103),n(524)),c=n.n(o),l=n(494),d=n(447);function m(){return v.apply(this,arguments)}function v(){return(v=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=Object(d.a)().token,n=c.a.get("publicIdentityToken"),r={error:null,token:null},!n){t.next=7;break}return r.error=null,r.token=n,t.abrupt("return",r);case 7:return t.next=9,Object(l.a)(e,{},null,"GET");case 9:if(!(o=t.sent).data){t.next=23;break}if(!o.data.token){t.next=18;break}return c.a.set("publicIdentityToken",o.data.token,{sameSite:"Strict",expires:1,path:"/mpesa-integration"}),r.error=null,r.token=o.data.token,t.abrupt("return",r);case 18:return r.error="Unable to secure the request. Please try again",r.token=null,t.abrupt("return",r);case 21:t.next=26;break;case 23:return r.error=o.error,r.token=null,t.abrupt("return",r);case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},522:function(t,e,n){"use strict";n.r(e);var r={props:{content:{type:Object,default:function(){return{type:"info",message:"processing ...",prominent:!0}}}},methods:{handleClose:function(){this.$emit("closealert")}}},o=n(39),c=n(56),l=n.n(c),d=n(489),m=n(204),v=n(439),f=n(189),h=n(438),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-alert",{attrs:{outlined:"",type:t.content.type,prominent:t.content.prominent}},[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",{staticClass:"grow ma-0"},[t._v("\n                "+t._s(t.content.message)+"\n            ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"blue lighten-2"},on:{click:t.handleClose}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)],1)}),[],!1,null,"da6fc4f4",null);e.default=component.exports;l()(component,{VAlert:d.a,VBtn:m.a,VCol:v.a,VIcon:f.a,VRow:h.a})},525:function(t,e,n){"use strict";n(495)},526:function(t,e,n){var r=n(15)(!1);r.push([t.i,":root{--looks:#2cb34a}.action-row{display:flex;flex-direction:row;justify-content:center}.safaricom-color{background-color:#2cb34a;background-color:var(--looks)}.safaricom-color-txt{color:#2cb34a!important;color:var(--looks)!important}",""]),t.exports=r},527:function(t,e,n){"use strict";n(496)},528:function(t,e,n){var r=n(15)(!1);r.push([t.i,":root{--looks:#2cb34a}.action-row{display:flex;flex-direction:row;justify-content:center}.safaricom-color{background-color:#2cb34a;background-color:var(--looks)}.safaricom-color-txt{color:#2cb34a!important;color:var(--looks)!important}.c2b-summary{font-size:15px}",""]),t.exports=r},532:function(t,e,n){"use strict";n(499)},533:function(t,e,n){var r=n(15)(!1);r.push([t.i,"[data-v-2b0a6812] .v-snack__content{padding:5px!important}",""]),t.exports=r},552:function(t,e,n){var content=n(602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7bb6b10c",content,!0,{sourceMap:!1})},556:function(t,e,n){"use strict";n.r(e);var r,o=n(29),c=(n(103),n(10),n(57),n(17),n(494)),l=n(447),d=n(520),m=0,v=!1,f="kimanihubert1@gmail.com",h=function(t){return new Promise((function(e,n){setTimeout((function(){e(!0)}),t)}))};function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function t(body,e){var n,o,_,y,k,x,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)().stk,o=Object(l.a)().stkquery,t.next=4,Object(d.a)();case 4:if(!(_=t.sent).error){t.next=8;break}return e("error",_.error),t.abrupt("return");case 8:return y=_.token,t.next=11,Object(c.a)(n,body,y);case 11:if(!(k=t.sent).error){t.next=15;break}return e("error",k.error),t.abrupt("return");case 15:if(0!==parseInt(k.data.ResponseCode)){t.next=34;break}return e("info","Request has been sent to the phone number. Waiting for response ..."),r=k.data.CheckoutRequestID,x={service:"stkstatus",CheckoutRequestID:r},t.next=21,h(8e3).then((function(){return""}));case 21:if(!(m<15&&!1===v)){t.next=32;break}return m+=1,t.next=25,Object(c.a)(o,x,y);case 25:return(C=t.sent).data?C.data.ResultCode?(v=!0,e("success",C.data.ResultDesc),0===parseInt(C.data.ResultCode)?e("success",C.data.ResultDesc):e("warning",C.data.ResultDesc)):e("warning","The transaction is being processed ..."):C.expectedError?e("warning","The transaction is being processed ..."):(v=!0,e("error",C.error)),t.next=29,h(6e3).then((function(){return""}));case 29:15===m&&e("warning","Verification timeout. The response is taking too long to arrive, if you had already paid, send an enquiry to: ".concat(f)),t.next=21;break;case 32:m=0,v=!1;case 34:return t.abrupt("return",k);case 35:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t,e){return _.apply(this,arguments)},k={components:{Alert:n(522).default},data:function(){var t=this;return{showAlert:!1,alertContent:{type:"info",message:"message",prominent:!0},phone:"",valid:!0,maxDigits:5,phoneMaxDigits:10,loading:!1,selection:0,selectedAmount:1,amountRules:[function(t){return!!t||"Valid amount is required. 1 Shilling or more."},function(t){return t>0||"1 Shilling or more."}],phoneRules:[function(t){return!!t||"Phone number is required"},function(e){return e.length<=t.phoneMaxDigits||"Phone number too long. Max ".concat(t.phoneMaxDigits," digits.")}],options:[{amount:1},{amount:10},{amount:20},{amount:50}]}},computed:{amount:{get:function(){return this.selectedAmount},set:function(t){var e,n=this;this.options.filter((function(option,r){return option.amount===parseInt(t)&&(n.selection=r,e=!0),!1})),e||(this.selection=this.options.length),this.selectedAmount=t}}},methods:{handleClose:function(){this.showAlert=!1},updateAlert:function(t,e,n){this.alertContent.type=t,this.alertContent.message=e,this.alertContent.prominent=n||!0},submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:if(!(t.phone.length<10)){e.next=6;break}return t.updateAlert("error","Phone number is too short"),t.showAlert=!0,e.abrupt("return");case 6:return t.loading=!0,t.showAlert=!0,t.updateAlert("info","processing request ..."),e.next=11,y({TransactionType:"CustomerBuyGoodsOnline",Amount:t.amount,PartyA:t.phone,PhoneNumber:t.phone,AccountReference:"portfolio ".concat(t.phone),TransactionDesc:"Portfolio demo"},t.updateAlert);case 11:setTimeout((function(){t.loading=!1}),1500);case 12:case"end":return e.stop()}}),e)})))()},handleChipChange:function(t){void 0!==t?parseInt(t)===this.options.length?this.selectedAmount=100:this.selectedAmount=this.options[t].amount:this.selectedAmount=0}}},x=(n(525),n(39)),C=n(56),w=n.n(C),V=n(204),j=n(428),S=n(427),O=n(648),A=n(657),M=n(440),R=n(493),T=n(188),B=n(513),component=Object(x.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",outlined:"",color:"#2C2C39"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"#2cb34a",height:"5",indeterminate:""}})],1),t._v(" "),n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card-title",{staticClass:"pb-0"},[t._v("M-pesa express")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-subtitle-1"},[t._v("STK push")])]),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-title",[t._v("Amounts")]),t._v(" "),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"safaricom-color white--text",column:""},on:{change:t.handleChipChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[t._l(t.options,(function(option,e){return n("v-chip",{key:e},[t._v("\n                    kes "+t._s(option.amount.toLocaleString())+"\n                ")])})),t._v(" "),n("v-chip",[t._v("Other")])],2)],1),t._v(" "),n("div",[n("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Custom amount:",counter:t.maxDigits,rules:t.amountRules,type:"number",outlined:"",hint:"The amount may be non-refundable","persistent-hint":"",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),n("v-divider",{staticClass:"mx-4 mt-2"}),t._v(" "),n("v-card-title",[t._v("Phone number")]),t._v(" "),n("div",[n("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Tel:",counter:t.phoneMaxDigits,rules:t.phoneRules,type:"number",outlined:"",hint:"Your valid Safaricom number, e.g: 07XX XXX XXX","persistent-hint":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),n("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),t.showAlert?n("Alert",{staticClass:"mt-4 mx-4",attrs:{content:t.alertContent},on:{closealert:function(e){return t.handleClose()}}}):t._e(),t._v(" "),t.showAlert?n("v-divider",{staticClass:"mx-4 my-2"}):t._e(),t._v(" "),n("v-card-actions",{staticClass:"action-row"},[n("v-btn",{staticClass:"safaricom-color-txt mb-4",attrs:{outlined:"",loading:t.loading},on:{click:t.submit}},[t._v("\n                Send Request\n            ")])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:V.a,VCard:j.a,VCardActions:S.a,VCardText:S.c,VCardTitle:S.d,VChip:O.a,VChipGroup:A.a,VDivider:M.a,VForm:R.a,VProgressLinear:T.a,VTextField:B.a})},557:function(t,e,n){"use strict";n.r(e);n(10),n(57);var r={data:function(){var t=this;return{phone:"",maxDigits:10,loading:!1,selection:0,selectedAmount:1,rules:[function(e){return e.length<=t.maxDigits||"Max ".concat(t.maxDigits," digits.")}],options:[{amount:1},{amount:10},{amount:20},{amount:50}]}},computed:{amount:{get:function(){return this.selectedAmount},set:function(t){var e,n=this;this.options.filter((function(option,r){return option.amount===parseInt(t)&&(n.selection=r,e=!0),!1})),e||(this.selection=this.options.length),this.selectedAmount=t}}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},handleChipChange:function(t){void 0!==t?parseInt(t)===this.options.length?this.selectedAmount=100:this.selectedAmount=this.options[t].amount:this.selectedAmount=0}}},o=(n(527),n(39)),c=n(56),l=n.n(c),d=n(428),m=n(427),v=n(648),f=n(657),h=n(439),_=n(440),y=n(188),k=n(513),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",outlined:"",color:"#2C2C39"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"#2cb34a",height:"5",indeterminate:""}})],1),t._v(" "),n("v-card-title",{staticClass:"pb-0"},[t._v("Lipa na M-pesa C2B")]),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-subtitle-1"},[t._v("Customer to Business (Buygoods)")])]),t._v(" "),n("v-divider",{staticClass:"mx-4"}),t._v(" "),n("v-card-title",[t._v("Amounts")]),t._v(" "),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"safaricom-color white--text",column:""},on:{change:t.handleChipChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[t._l(t.options,(function(option){return n("v-chip",{key:option.amount},[t._v("\n                kes "+t._s(option.amount.toLocaleString())+"\n            ")])})),t._v(" "),n("v-chip",[t._v("Other")])],2)],1),t._v(" "),n("div",[n("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Custom amount:",counter:t.maxDigits,type:"number",outlined:"",hint:"The amount may be non-refundable","persistent-hint":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),n("v-divider",{staticClass:"mx-4 mt-2"}),t._v(" "),n("v-card-title",{staticClass:"pb-0"},[t._v("Summary")]),t._v(" "),n("v-col",{staticClass:"mb-4"},[n("v-chip",{staticClass:"mx-2 overline",attrs:{outlined:"",label:"",color:"orange"}},[n("span",{staticClass:"c2b-summary"},[t._v("Buygoods number: 584 4989")])]),t._v(" "),n("v-chip",{staticClass:"mx-2 mt-4 overline",attrs:{outlined:"",label:"",color:"orange"}},[n("span",{staticClass:"c2b-summary"},[t._v("Amount: "+t._s(t.selectedAmount.toLocaleString()))])])],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:m.c,VCardTitle:m.d,VChip:v.a,VChipGroup:f.a,VCol:h.a,VDivider:_.a,VProgressLinear:y.a,VTextField:k.a})},558:function(t,e,n){"use strict";n.r(e);var r={props:{snackbarState:{type:Boolean,default:!1},message:{type:String,default:"Initializing ..."},messageType:{type:String,default:"info"}},data:function(){return{timeout:6e4}},computed:{snackbar:{get:function(){return this.snackbarState},set:function(t){this.$emit("updateSnack",t)}}}},o=(n(532),n(39)),c=n(56),l=n.n(c),d=n(489),m=n(204),v=n(439),f=n(189),h=n(438),_=n(600),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{staticClass:"snackTop",attrs:{timeout:t.timeout,right:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("v-alert",{staticClass:"ma-0",attrs:{outlined:"",type:t.messageType,prominent:"",border:"left"}},[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",{staticClass:"grow ma-0"},[t._v("\n                "+t._s(t.message)+"\n            ")]),t._v(" "),n("v-col",{staticClass:"shrink"},[n("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)],1)}),[],!1,null,"2b0a6812",null);e.default=component.exports;l()(component,{VAlert:d.a,VBtn:m.a,VCol:v.a,VIcon:f.a,VRow:h.a,VSnackbar:_.a})},601:function(t,e,n){"use strict";n(552)},602:function(t,e,n){var r=n(15)(!1);r.push([t.i,".decription-link[data-v-2761d822]{text-decoration:none!important;color:#2cb34a}.emoji[data-v-2761d822]{font-size:19px}",""]),t.exports=r},650:function(t,e,n){"use strict";n.r(e);var r=n(29),o=(n(103),n(208)),c=n(124),l=n(485),d=n(486),m=n(487),v=n(556),f=n(557),h=n(205),_=(n(27),n(580)),y=n(447),k=n(520);function x(t){return C.apply(this,arguments)}function C(){return(C=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.a)();case 2:n=t.sent,(r=Object(_.io)(Object(y.a)().socket,{auth:{token:n.token}})).on("connect_error",(function(t){t instanceof Error?e({state:!0,message:t.message,type:"error"}):e({state:!0,message:"Unable to establish secure connection",type:"error"})})),r.on("transaction",(function(t){e({state:!0,message:"Transaction received from ".concat(t.phoneNumber,". Amount: ").concat(t.amount),type:"info"})})),r.on("test",(function(t){e({state:!0,message:t,type:"info"})}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var main=n(558),w={components:{Summary:o.default,Contact:d.default,Nav:l.default,Footer:m.default,MpesaCard:v.default,MpesaC2BCard:f.default,SnackAlert:main.default},beforeRouteLeave:function(t,e,n){var body=document.querySelector(".scrollable2");Object(h.b)(t,e,n,body)},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$seoMeta,e.next=3,r({title:"M-pesa integration - Hubert Kimani",description:"Mpesa integration services using daraja API and other diverse technologies",url:"https://hubertkimani.me/mpesa-integration",image:"https://hubertkimani.me"+n(483)});case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,snackBarState:!0,snackBarMessage:"Initializing ...",snackBarType:"info",switchEnabled:!0,serviceRequest:"",sections:c.a,show:!1}},head:function(t){return{title:"M-pesa integration - Hubert Kimani",meta:(0,t.$seoMeta)({title:"M-pesa integration - Hubert Kimani",description:"Mpesa integration services using daraja API and other diverse technologies",url:"https://hubertkimani.me/mpesa-integration",image:"https://hubertkimani.me"+n(483)},!1)}},computed:{vh:function(){return"height: "+(this.$vuetify.breakpoint.mdAndDown?"100vh;":"96vh;")},small:function(){return this.$vuetify.breakpoint.mdAndDown}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.updateSnackState);case 2:case"end":return e.stop()}}),e)})))()},methods:{updateSnackState:function(t){this.snackBarState=t.state,this.snackBarMessage=t.message,this.snackBarType=t.type},handleSwitchToggle:function(t){},handleSnackUpdate:function(t){this.snackBarState=t}}},V=(n(601),n(39)),j=n(56),S=n.n(j),O=n(428),A=n(439),M=n(440),R=n(438),T=n(654),component=Object(V.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"end","no-gutters":""}},[n("snack-alert",{attrs:{"snackbar-state":t.snackBarState&&t.switchEnabled,message:t.snackBarMessage,"message-type":t.snackBarType},on:{updateSnack:t.handleSnackUpdate}}),t._v(" "),n("v-col",{staticClass:"d-none d-lg-flex",attrs:{lg:"3",justify:"start"}},[n("Summary")],1),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"9"}},[n("v-card",{class:t.small?"mt-10":"mt-0",attrs:{color:t.baseColor,outlined:""}},[n("div",{staticClass:"d-flex flex-row"},[n("div",{class:"scrollable2 px-4",style:t.vh},[n("section",{staticClass:"mt-6",attrs:{id:"mpesa-services"}},[n("span",{staticClass:"section-title"},[t._v("Mpesa Integration Services")]),t._v(" "),n("v-divider",{staticClass:"my-4"}),t._v(" "),n("div",[t._v("\n                            I'll help you add automated payment confirmation\n                            and validation services to your online webpage\n                            or app through\n                            "),n("a",{staticClass:"decription-link",attrs:{href:"https://www.safaricom.co.ke/business/corporate/m-pesa-payment-services/m-pesa-api",target:"_blank"}},[t._v("Safaricom's Integration platform.")]),t._v("\n                            Try out the M-pesa express option below with\n                            "),n("strong",[t._v("your own")]),t._v(" phone number to\n                            receive a payment request directly to your\n                            phone, which you can decline, or not\n                            "),n("span",{staticClass:"emoji"},[t._v("😊")]),t._v(".\n                            "),n("br"),t._v(" "),n("br"),t._v("\n                            A more conventional C2B (Customer to Business)\n                            payment Integration can also be performed as per\n                            your requirements. Which you can also try below\n                            using my M-pesa buy goods option.\n                            "),n("br"),t._v(" "),n("br"),t._v("\n                            Disclaimer: All services renderd are subject to\n                            "),n("a",{staticClass:"decription-link",attrs:{href:"https://www.safaricom.co.ke/about/media-center/publications/terms-and-conditions/m-pesa-products-terms-and-conditions",target:"_blank"}},[t._v("Safaricom's terms and conditions.")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v("\n                            Once a payment is complete a notification can be\n                            sent to a browser or to a mobile phone with the\n                            relevant information and with the particulars of\n                            the payment. To demonstrate the functionality of\n                            this feature click on enable notifications\n                            below. You can switch it off to disable the\n                            notifications in future.\n                        ")]),t._v(" "),n("v-divider",{staticClass:"mt-4"}),t._v(" "),n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-switch",{attrs:{inset:"",label:"Notifications: "+(t.switchEnabled?"Enabled":"Disabled")},on:{change:t.handleSwitchToggle},model:{value:t.switchEnabled,callback:function(e){t.switchEnabled=e},expression:"switchEnabled"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pt-0",attrs:{xs:"12",sm:"12",md:"6"}},[n("MpesaCard")],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{xs:"12",sm:"12",md:"6"}},[n("MpesaC2BCard")],1)],1),t._v(" "),n("div")],1),t._v(" "),n("section",{staticClass:"mt-12",attrs:{id:"contact"}},[n("span",{staticClass:"section-title"},[t._v("Say Hi 👋")]),t._v(" "),n("Contact",{staticClass:"px-4 py-4",attrs:{servicerequest:t.serviceRequest}})],1),t._v(" "),n("Footer")],1),t._v(" "),t.$vuetify.breakpoint.lgAndUp?n("div",[n("Nav",{attrs:{sections:t.sections,permanent:!0,minivariant:!0}})],1):t._e()])])],1)],1)}),[],!1,null,"2761d822",null);e.default=component.exports;S()(component,{Summary:function(){return Promise.resolve().then(n.bind(null,208)).then((function(t){return t.default||t}))},Footer:function(){return Promise.resolve().then(n.bind(null,487)).then((function(t){return t.default||t}))},Nav:function(){return Promise.resolve().then(n.bind(null,485)).then((function(t){return t.default||t}))}}),S()(component,{VCard:O.a,VCol:A.a,VDivider:M.a,VRow:R.a,VSwitch:T.a})}}]);