(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{499:function(t,e,o){var content=o(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("c5ce328c",content,!1,{sourceMap:!1})},529:function(t,e,o){"use strict";o(499)},530:function(t,e,o){var n=o(16)(!1);n.push([t.i,":root{--looks:#2cb34a}.action-row{display:flex;flex-direction:row;justify-content:center}.safaricom-color{background-color:#2cb34a;background-color:var(--looks)}.safaricom-color-txt{color:#2cb34a!important;color:var(--looks)!important}.c2b-summary{font-size:15px}",""]),t.exports=n},548:function(t,e,o){"use strict";o.r(e);o(11),o(3),o(57);var n={data:function(){var t=this;return{phone:"",maxDigits:10,loading:!1,selection:0,selectedAmount:1,rules:[function(e){return e.length<=t.maxDigits||"Max ".concat(t.maxDigits," digits.")}],options:[{amount:1},{amount:10},{amount:20},{amount:50}]}},computed:{amount:{get:function(){return this.selectedAmount},set:function(t){var e,o=this;this.options.filter((function(option,n){return option.amount===parseInt(t)&&(o.selection=n,e=!0),!1})),e||(this.selection=this.options.length),this.selectedAmount=t}}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)},handleChipChange:function(t){void 0!==t?parseInt(t)===this.options.length?this.selectedAmount=100:this.selectedAmount=this.options[t].amount:this.selectedAmount=0}}},r=(o(529),o(37)),c=o(56),l=o.n(c),m=o(429),d=o(428),v=o(627),h=o(636),f=o(440),x=o(441),C=o(192),_=o(514),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374",outlined:"",color:"#2C2C39"}},[o("template",{slot:"progress"},[o("v-progress-linear",{attrs:{color:"#2cb34a",height:"5",indeterminate:""}})],1),t._v(" "),o("v-card-title",{staticClass:"pb-0"},[t._v("Lipa na M-pesa C2B")]),t._v(" "),o("v-card-text",[o("div",{staticClass:"text-subtitle-1"},[t._v("Customer to Business (Buygoods)")])]),t._v(" "),o("v-divider",{staticClass:"mx-4"}),t._v(" "),o("v-card-title",[t._v("Amounts")]),t._v(" "),o("v-card-text",[o("v-chip-group",{attrs:{"active-class":"safaricom-color white--text",column:""},on:{change:t.handleChipChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[t._l(t.options,(function(option){return o("v-chip",{key:option.amount},[t._v("\n                kes "+t._s(option.amount.toLocaleString())+"\n            ")])})),t._v(" "),o("v-chip",[t._v("Other")])],2)],1),t._v(" "),o("div",[o("v-text-field",{staticClass:"px-4",attrs:{dense:"",label:"Custom amount:",counter:t.maxDigits,type:"number",outlined:"",hint:"The amount may be non-refundable","persistent-hint":""},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t._v(" "),o("v-divider",{staticClass:"mx-4 mt-2"}),t._v(" "),o("v-card-title",{staticClass:"pb-0"},[t._v("Summary")]),t._v(" "),o("v-col",{staticClass:"mb-4"},[o("v-chip",{staticClass:"mx-2 overline",attrs:{outlined:"",label:"",color:"orange"}},[o("span",{staticClass:"c2b-summary"},[t._v("Buygoods number: 584 4989")])]),t._v(" "),o("v-chip",{staticClass:"mx-2 mt-4 overline",attrs:{outlined:"",label:"",color:"orange"}},[o("span",{staticClass:"c2b-summary"},[t._v("Amount: "+t._s(t.selectedAmount.toLocaleString()))])])],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VCardText:d.c,VCardTitle:d.d,VChip:v.a,VChipGroup:h.a,VCol:f.a,VDivider:x.a,VProgressLinear:C.a,VTextField:_.a})}}]);