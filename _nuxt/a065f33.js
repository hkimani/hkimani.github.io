(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{203:function(t,e,r){"use strict";var n=r(204);e.a=n.a},447:function(t,e,r){"use strict";var n={checkaccount:"https://pay.digitalmediawards.com/src/endpoints/checkaccount.php",stk:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/transactions/c2b/stkpush",stkquery:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/transactions/c2b/stkquery",token:"https://payments.hubertkimani.me:3000/.netlify/functions/app/v1/token/fetch",socket:"https://payments.hubertkimani.me:3000",mail:"https://kimapi.netlify.app"};e.a=function(){return n}},448:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5db1c400",content,!0,{sourceMap:!1})},449:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},489:function(t,e,r){"use strict";r(8),r(5),r(10),r(11),r(7),r(12);var n=r(2),o=(r(33),r(448),r(89)),c=r(203),l=r(85),d=r(44),h=r(28),v=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(6),m=r(9);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(c.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(l.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(l.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},493:function(t,e,r){"use strict";var n=r(2),o=(r(33),r(50),r(158),r(10),r(7),r(57),r(157),r(8),r(5),r(11),r(12),r(6)),c=r(90),l=r(126);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},494:function(t,e,r){"use strict";var n=r(29),o=(r(103),r(120)),c=r.n(o);function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e,body,r,n){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={error:null,data:null,expectedError:null},t.prev=1,t.next=4,c()({headers:{Authorization:"Bearer ".concat(r)},method:n||"post",url:e,data:body,timeout:15e3,withCredentials:!0}).then((function(t){return o.error=null,o.data=t.data,o})).catch((function(t){return t.response&&t.response.data?t.response.data.details?(o.error=t.response.data.details.errorMessage,o.data=null,"500.001.1001"===t.response.data.details.errorCode&&(o.expectedError=t.response.data.details.errorMessage)):(o.error=t.response.data,o.data=null):(o.error="Something happened. Unable to make request",o.data=null),o}));case 4:return l=t.sent,t.abrupt("return",l);case 8:return t.prev=8,t.t0=t.catch(1),o.error="Something happened. Unable to make request",o.data=null,t.abrupt("return",o);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}e.a=function(t,e,r,n){return l.apply(this,arguments)}},495:function(t,e,r){var content=r(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("95e52030",content,!0,{sourceMap:!1})},520:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(29),o=(r(103),r(524)),c=r.n(o),l=r(494),d=r(447);function h(){return v.apply(this,arguments)}function v(){return(v=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=Object(d.a)().token,r=c.a.get("publicIdentityToken"),n={error:null,token:null},!r){t.next=7;break}return n.error=null,n.token=r,t.abrupt("return",n);case 7:return t.next=9,Object(l.a)(e,{},null,"GET");case 9:if(!(o=t.sent).data){t.next=23;break}if(!o.data.token){t.next=18;break}return c.a.set("publicIdentityToken",o.data.token,{sameSite:"Strict",expires:1,path:"/mpesa-integration"}),n.error=null,n.token=o.data.token,t.abrupt("return",n);case 18:return n.error="Unable to secure the request. Please try again",n.token=null,t.abrupt("return",n);case 21:t.next=26;break;case 23:return n.error=o.error,n.token=null,t.abrupt("return",n);case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},522:function(t,e,r){"use strict";r.r(e);var n={props:{content:{type:Object,default:function(){return{type:"info",message:"processing ...",prominent:!0}}}},methods:{handleClose:function(){this.$emit("closealert")}}},o=r(39),c=r(56),l=r.n(c),d=r(489),h=r(204),v=r(439),f=r(189),m=r(438),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-alert",{attrs:{outlined:"",type:t.content.type,prominent:t.content.prominent}},[r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",{staticClass:"grow ma-0"},[t._v("\n                "+t._s(t.content.message)+"\n            ")]),t._v(" "),r("v-col",{staticClass:"shrink"},[r("v-btn",{staticClass:"ma-2",attrs:{text:"",icon:"",color:"blue lighten-2"},on:{click:t.handleClose}},[r("v-icon",[t._v("mdi-close")])],1)],1)],1)],1)],1)}),[],!1,null,"da6fc4f4",null);e.default=component.exports;l()(component,{VAlert:d.a,VBtn:h.a,VCol:v.a,VIcon:f.a,VRow:m.a})},524:function(t,e,r){t.exports=function(){"use strict";function t(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)t[e]=source[e]}return t}var e={read:function(t){return t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function r(n,o){function c(e,r,c){if("undefined"!=typeof document){"number"==typeof(c=t({},o,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),r=n.write(r,e);var l="";for(var d in c)c[d]&&(l+="; "+d,!0!==c[d]&&(l+="="+c[d].split(";")[0]));return document.cookie=e+"="+r+l}}function l(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var r=document.cookie?document.cookie.split("; "):[],o={},i=0;i<r.length;i++){var c=r[i].split("="),l=c.slice(1).join("=");'"'===l[0]&&(l=l.slice(1,-1));try{var d=e.read(c[0]);if(o[d]=n.read(l,d),t===d)break}catch(t){}}return t?o[t]:o}}return Object.create({set:c,get:l,remove:function(e,r){c(e,"",t({},r,{expires:-1}))},withAttributes:function(e){return r(this.converter,t({},this.attributes,e))},withConverter:function(e){return r(t({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}return r(e,{path:"/"})}()},525:function(t,e,r){"use strict";r(495)},526:function(t,e,r){var n=r(15)(!1);n.push([t.i,":root{--looks:#2cb34a}.action-row{display:flex;flex-direction:row;justify-content:center}.safaricom-color{background-color:#2cb34a;background-color:var(--looks)}.safaricom-color-txt{color:#2cb34a!important;color:var(--looks)!important}",""]),t.exports=n},556:function(t,e,r){"use strict";r.r(e);var n,o=r(29),c=(r(103),r(10),r(57),r(17),r(494)),l=r(447),d=r(520),h=0,v=!1,f="kimanihubert1@gmail.com",m=function(t){return new Promise((function(e,r){setTimeout((function(){e(!0)}),t)}))};function _(){return(_=Object(o.a)(regeneratorRuntime.mark((function t(body,e){var r,o,_,x,y,k,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(l.a)().stk,o=Object(l.a)().stkquery,t.next=4,Object(d.a)();case 4:if(!(_=t.sent).error){t.next=8;break}return e("error",_.error),t.abrupt("return");case 8:return x=_.token,t.next=11,Object(c.a)(r,body,x);case 11:if(!(y=t.sent).error){t.next=15;break}return e("error",y.error),t.abrupt("return");case 15:if(0!==parseInt(y.data.ResponseCode)){t.next=34;break}return e("info","Request has been sent to the phone number. Waiting for response ..."),n=y.data.CheckoutRequestID,k={service:"stkstatus",CheckoutRequestID:n},t.next=21,m(8e3).then((function(){return""}));case 21:if(!(h<15&&!1===v)){t.next=32;break}return h+=1,t.next=25,Object(c.a)(o,k,x);case 25:return(C=t.sent).data?C.data.ResultCode?(v=!0,e("success",C.data.ResultDesc),0===parseInt(C.data.ResultCode)?e("success",C.data.ResultDesc):e("warning",C.data.ResultDesc)):e("warning","The transaction is being processed ..."):C.expectedError?e("warning","The transaction is being processed ..."):(v=!0,e("error",C.error)),t.next=29,m(6e3).then((function(){return""}));case 29:15===h&&e("warning","Verification timeout. The response is taking too long to arrive, if you had already paid, send an enquiry to: ".concat(f)),t.next=21;break;case 32:h=0,v=!1;case 34:return t.abrupt("return",y);case 35:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(t,e){return _.apply(this,arguments)},y={components:{Alert:r(522).default},data:function(){var t=this;return{showAlert:!1,alertContent:{type:"info",message:"message",prominent:!0},phone:"",valid:!0,maxDigits:5,phoneMaxDigits:10,loading:!1,selection:2,selectedAmount:50,amountRules:[function(t){return!!t||"Valid amount is required"}],phoneRules:[function(t){return!!t||"Phone number is required"},function(e){return e.length<=t.phoneMaxDigits||"Phone number too long. Max ".concat(t.phoneMaxDigits," digits.")}],options:[{amount:10},{amount:20},{amount:50},{amount:100}]}},computed:{amount:{get:function(){return this.selectedAmount},set:function(t){var e,r=this;this.options.filter((function(option,n){return option.amount===parseInt(t)&&(r.selection=n,e=!0),!1})),e||(this.selection=this.options.length),this.selectedAmount=t}}},methods:{handleClose:function(){this.showAlert=!1},updateAlert:function(t,e,r){this.alertContent.type=t,this.alertContent.message=e,this.alertContent.prominent=r||!0},submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:if(!(t.phone.length<10)){e.next=6;break}return t.updateAlert("error","Phone number is too short"),t.showAlert=!0,e.abrupt("return");case 6:return t.loading=!0,t.showAlert=!0,t.updateAlert("info","processing request ..."),e.next=11,x({TransactionType:"CustomerBuyGoodsOnline",Amount:t.amount,PartyA:t.phone,PhoneNumber:t.phone,AccountReference:"portfolio ".concat(t.phone),TransactionDesc:"Portfolio demo"},t.updateAlert);case 11:setTimeout((function(){t.loading=!1}),1500);case 12:case"end":return e.stop()}}),e)})))()},handleChipChange:function(t){parseInt(t)===this.options.length?this.selectedAmount=200:this.selectedAmount=this.options[t].amount}}},k=(r(525),r(39)),C=r(56),w=r.n(C),O=r(204),j=r(428),B=r(427),A=r(648),$=r(657),D=r(440),R=r(493),P=r(188),V=r(513),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",outlined:"",color:"#2C2C39"}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"#2cb34a",height:"5",indeterminate:""}})],1),t._v(" "),r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card-title",{staticClass:"pb-0"},[t._v("M-pesa express")]),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-subtitle-1"},[t._v("STK push")])]),t._v(" "),r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-title",[t._v("Amounts")]),t._v(" "),r("v-card-text",[r("v-chip-group",{attrs:{"active-class":"safaricom-color white--text",column:""},on:{change:t.handleChipChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[t._l(t.options,(function(option){return r("v-chip",{key:option.amount},[t._v("\n                    kes "+t._s(option.amount.toLocaleString())+"\n                ")])})),t._v(" "),r("v-chip",[t._v("Other")])],2)],1),t._v(" "),r("div",[r("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Custom amount:",counter:t.maxDigits,rules:t.amountRules,type:"number",outlined:"",hint:"The amount may be non-refundable","persistent-hint":"",required:""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),r("v-divider",{staticClass:"mx-4 mt-2"}),t._v(" "),r("v-card-title",[t._v("Phone number")]),t._v(" "),r("div",[r("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Tel:",counter:t.phoneMaxDigits,rules:t.phoneRules,type:"number",outlined:"",hint:"Your valid Safaricom number, e.g: 07XX XXX XXX","persistent-hint":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),r("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),t.showAlert?r("Alert",{staticClass:"mt-4 mx-4",attrs:{content:t.alertContent},on:{closealert:function(e){return t.handleClose()}}}):t._e(),t._v(" "),t.showAlert?r("v-divider",{staticClass:"mx-4 my-2"}):t._e(),t._v(" "),r("v-card-actions",{staticClass:"action-row"},[r("v-btn",{staticClass:"safaricom-color-txt mb-4",attrs:{outlined:"",loading:t.loading},on:{click:t.submit}},[t._v("\n                Send Request\n            ")])],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:O.a,VCard:j.a,VCardActions:B.a,VCardText:B.c,VCardTitle:B.d,VChip:A.a,VChipGroup:$.a,VDivider:D.a,VForm:R.a,VProgressLinear:P.a,VTextField:V.a})}}]);