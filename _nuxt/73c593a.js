(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{491:function(t,e,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("c5ce328c",content,!0,{sourceMap:!1})},517:function(t,e,o){"use strict";o(491)},518:function(t,e,o){var n=o(15)(!1);n.push([t.i,":root{--looks:#2cb34a}.action-row{display:flex;flex-direction:row;justify-content:center}.safaricom-color{background-color:#2cb34a;background-color:var(--looks)}.safaricom-color-txt{color:#2cb34a!important;color:var(--looks)!important}.c2b-summary{font-size:15px}",""]),t.exports=n},526:function(t,e,o){"use strict";o.r(e);o(10),o(56);var n={data:function(){var t=this;return{phone:"",maxDigits:10,loading:!1,selection:2,selectedAmount:50,rules:[function(e){return e.length<=t.maxDigits||"Max ".concat(t.maxDigits," digits.")}],options:[{amount:10},{amount:20},{amount:50},{amount:100},{amount:500},{amount:1e3}]}},computed:{amount:{get:function(){return this.selectedAmount},set:function(t){var e,o=this;this.options.filter((function(option,n){return option.amount===parseInt(t)&&(o.selection=n,e=!0),!1})),e||(this.selection=this.options.length),this.selectedAmount=t}}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},handleChipChange:function(t){parseInt(t)===this.options.length?this.selectedAmount=200:this.selectedAmount=this.options[t].amount}}},r=(o(517),o(39)),c=o(57),l=o.n(c),m=o(204),d=o(427),v=o(426),h=o(588),f=o(596),x=o(438),C=o(439),_=o(187),y=o(505),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",outlined:"",color:"#2C2C39"}},[o("template",{slot:"progress"},[o("v-progress-linear",{attrs:{color:"#2cb34a",height:"5",indeterminate:""}})],1),t._v(" "),o("v-card-title",{staticClass:"pb-0"},[t._v("Lipa na M-pesa C2B")]),t._v(" "),o("v-card-text",[o("div",{staticClass:"text-subtitle-1"},[t._v("Customer to Business (Buygoods)")])]),t._v(" "),o("v-divider",{staticClass:"mx-4"}),t._v(" "),o("v-card-title",[t._v("Amounts")]),t._v(" "),o("v-card-text",[o("v-chip-group",{attrs:{"active-class":"safaricom-color white--text",column:""},on:{change:t.handleChipChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[t._l(t.options,(function(option){return o("v-chip",{key:option.amount},[t._v("\n                kes "+t._s(option.amount.toLocaleString())+"\n            ")])})),t._v(" "),o("v-chip",[t._v("Other")])],2)],1),t._v(" "),o("div",[o("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Custom amount:",counter:t.maxDigits,type:"number",outlined:"",hint:"The amount may be non-refundable","persistent-hint":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),o("v-divider",{staticClass:"mx-4 mt-2"}),t._v(" "),o("v-card-title",{staticClass:"pb-0"},[t._v("Summary")]),t._v(" "),o("v-col",[o("v-chip",{staticClass:"mx-2 overline",attrs:{outlined:"",label:"",color:"orange"}},[o("span",{staticClass:"c2b-summary"},[t._v("Buygoods number: 584 4989")])]),t._v(" "),o("v-chip",{staticClass:"mx-2 mt-4 overline",attrs:{outlined:"",label:"",color:"orange"}},[o("span",{staticClass:"c2b-summary"},[t._v("Amount: "+t._s(t.selectedAmount.toLocaleString()))])]),t._v(" "),o("v-text-field",{staticClass:"px-2 mt-4",attrs:{color:"orange",dense:"",label:"Tel:",counter:"10",type:"number",outlined:"",hint:"Your valid Safaricom number, e.g: 07XX XXX XXX","persistent-hint":""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),o("v-divider",{staticClass:"mx-4 my-2"}),t._v(" "),o("v-card-actions",{staticClass:"action-row"},[o("v-btn",{staticClass:"safaricom-color-txt mb-4",attrs:{outlined:""},on:{click:t.reserve}},[t._v("\n            Check Payment\n        ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VChip:h.a,VChipGroup:f.a,VCol:x.a,VDivider:C.a,VProgressLinear:_.a,VTextField:y.a})}}]);