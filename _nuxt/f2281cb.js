(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{428:function(e,t,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(8).default)("31010a58",content,!0,{sourceMap:!1})},432:function(e,t,n){"use strict";n(428)},433:function(e,t,n){var r=n(7)((function(i){return i[1]}));r.push([e.i,".fade-enter-active[data-v-34fbb0cd],.fade-leave-active[data-v-34fbb0cd]{transition:opacity .5s}.fade-enter[data-v-34fbb0cd],.fade-leave-to[data-v-34fbb0cd]{opacity:0}",""]),e.exports=r},437:function(e,t,n){"use strict";n.r(t);n(32),n(15),n(40);var r={props:{servicerequest:{type:String,default:""}},data:function(){return{baseColor:this.$vuetify.theme.defaults.dark.base,ewt:5e3,swt:6e4,status:{loading:!1,success:!1,error:!1,msg:""},valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=32||"Name must be less than 32 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],message:"",messageRules:[function(e){return e.length<=256||"Message must be less than 256 characters"}]}},watch:{servicerequest:function(e){this.message=e}},methods:{reset:function(){this.$refs.form.resetValidation()},resetContent:function(){this.email="",this.name="",this.message="",this.reset()},resetStatus:function(e){var t=this;setTimeout((function(){t.status.waiting=!1,t.status.loading=!1,t.status.success=!1,t.status.error=!1}),e)},send:function(){var e=this;this.$refs.form.validate()&&(this.status.loading||this.status.waiting?console.log("Waiting ..."):(this.status.loading=!0,this.status.waiting=!0,this.status.success=!1,this.status.error=!1,fetch("".concat("https://kimapi.netlify.app","/.netlify/functions/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,email:this.email,message:this.message})}).then((function(t){e.status.loading=!1,t.ok?(e.status.msg="Message sent successfully",e.status.success=!0,e.resetStatus(e.swt),e.resetContent()):(e.status.msg="Oops something happened, please wait a while and try again!!",e.status.error=!0,e.resetStatus(e.ewt))})).catch((function(t){console.log(t),e.status.msg="Oops something happened, please wait a while and try again!!",e.status.loading=!1,e.status.error=!0,e.resetStatus(e.ewt)}))))}}},l=(n(432),n(26)),o=n(39),c=n.n(o),d=n(541),m=n(192),f=n(390),v=n(532),h=n(168),w=n(529),_=n(533),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mt-2 pt-4 card",attrs:{color:e.baseColor,outlined:""}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticClass:"mb-1",attrs:{counter:32,rules:e.nameRules,label:"Name",name:"name",required:"",outlined:""},on:{blur:function(t){return e.reset()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{staticClass:"mb-1",attrs:{rules:e.emailRules,label:"E-mail",name:"email",required:"",outlined:""},on:{blur:function(t){return e.reset()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),n("v-textarea",{staticClass:"card",attrs:{rules:e.messageRules,counter:256,outlined:"",name:"Message",label:"Message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.status.error||e.status.success?n("v-alert",{attrs:{outlined:"",type:e.status.error?"warning":"success",prominent:"",border:"left"}},[e._v("\n        "+e._s(e.status.msg)+"\n      ")]):e._e()],1),e._v(" "),n("div",{staticClass:"d-flex flex-row justify-center"},[n("v-btn",{attrs:{loading:e.status.loading,large:"",rounded:"",color:e.status.error?"#F44336":"#4CAF50"},on:{click:e.send}},[!e.status.loading&&e.status.success?n("v-icon",[e._v("mdi-check-bold")]):e._e(),e._v(" "),!e.status.loading&&e.status.error?n("v-icon",[e._v("mdi-alert-circle")]):e._e(),e._v(" "),e.status.loading||e.status.success||e.status.error?e._e():n("span",[e._v("\n          Send Message\n        ")])],1)],1)],1)],1)}),[],!1,null,"34fbb0cd",null);t.default=component.exports;c()(component,{VAlert:d.a,VBtn:m.a,VCard:f.a,VForm:v.a,VIcon:h.a,VTextField:w.a,VTextarea:_.a})}}]);