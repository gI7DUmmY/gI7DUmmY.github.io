(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("04f5"),i=r.n(n);i.a},"04f5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c");var n=r("ecee"),i=r("c074"),a=r("7a55"),s=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"row"},[r("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.ajouter(t.player)}}},[r("div",{staticClass:"input-field col s6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.player,expression:"player"}],staticClass:"validate",attrs:{type:"text",id:"input-player",placeholder:"pseudo"},domProps:{value:t.player},on:{input:function(e){e.target.composing||(t.player=e.target.value)}}}),r("label",{attrs:{for:"pseudo"}},[t._v("Joueur à inscrire")]),r("button",{staticClass:"waves-effect waves-light btn",attrs:{type:"submit"}},[t._v("\n              Inscrire\n            ")])])])]),t.joueurs.length>0?r("div",{staticClass:"row"},[r("p",[t._v("Total: "),r("strong",[t._v(t._s(t.total))]),t._v(" joueur(s)")]),r("button",{staticClass:"waves-effect waves-light btn red lighten-1",attrs:{id:"vider"},on:{click:t.vider}},[t._v("\n        Vider\n      ")]),r("table",{staticClass:"striped centered",attrs:{id:"tableau"}},[r("thead",[r("tr",[r("th",[t._v("Suppr.")]),r("th",[t._v("Pseudo")]),r("th",{attrs:{id:"filtre"},on:{click:t.toggle}},[t._v("\n              Payé  "),r("font-awesome-icon",{attrs:{icon:t.eye_icon,size:"lg"}})],1)])]),r("tbody",{attrs:{id:"tbody"}},t._l(t.liste,function(e){return r("tr",{key:e.id,attrs:{hidden:e.hidden}},[r("td",[r("i",{staticClass:"material-icons small",on:{click:function(r){t.suppr(e.id)}}},[t._v("delete")])]),r("td",[t._v(t._s(e.nom))]),r("td",[r("div",{staticClass:"switch"},[r("label",[t._v("\n                  Non \n                  "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.payed,expression:"joueur.payed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.payed)?t._i(e.payed,null)>-1:e.payed},on:{change:function(r){var n=e.payed,i=r.target,a=!!i.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);i.checked?o<0&&t.$set(e,"payed",n.concat([s])):o>-1&&t.$set(e,"payed",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"payed",a)}}}),r("span",{staticClass:"lever"}),t._v(" Oui\n                ")])])])])}))]),r("br"),t._m(1)]):t._e()])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h2",{staticClass:"center-align"},[n("img",{attrs:{src:r("e69a"),alt:"fig-blue",height:"55px",width:"auto"}}),t._v("\n        Tournoi ATB\n        "),n("img",{attrs:{src:r("d02d"),alt:"fig-red",height:"55px",width:"auto"}})]),n("div",{staticClass:"center-align",attrs:{id:"top"}},[n("img",{staticClass:"circle",attrs:{src:r("aa56"),alt:"logo-club",height:"60px",width:"auto"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed-action-btn"},[r("a",{staticClass:"btn-floating btn-small waves-effect waves-light teal lighten-1",attrs:{href:"#top"}},[r("i",{staticClass:"material-icons"},[t._v("keyboard_arrow_up")])])])}],c=(r("ac6a"),{name:"app",data:function(){return{joueurs:[],player:null,filtered:!1,clear:!1}},computed:{total:function(){return this.joueurs.length},liste:function(){return this.joueurs.slice().reverse()},eye_icon:function(){return this.filtered?"eye-slash":"eye"}},methods:{ajouter:function(t){t&&(this.joueurs.push({id:Date.now(),nom:t,payed:!1,hidden:!1}),this.player="")},suppr:function(t){this.joueurs=this.joueurs.filter(function(e){return t!==e.id})},vider:function(){this.clear=confirm("Effacer la liste?"),!0===this.clear&&(this.joueurs=[],this.filtered=!1,this.clear=!1)},toggle:function(){this.filtered=!this.filtered,this.filtered?this.joueurs.forEach(function(t){var e=t;e.payed&&(e.hidden=!0)}):this.joueurs.forEach(function(t){var e=t;e.hidden&&(e.hidden=!1)})}}}),u=c,d=(r("034f"),r("2877")),p=Object(d["a"])(u,o,l,!1,null,null,null),f=p.exports;n["library"].add(i["a"],i["b"]),s["a"].component("font-awesome-icon",a["FontAwesomeIcon"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(f)}}).$mount("#app")},aa56:function(t,e,r){t.exports=r.p+"img/cropped-ATB-white.0b3c4b39.png"},d02d:function(t,e,r){t.exports=r.p+"img/figure-rouge.06f8071e.jpg"},e69a:function(t,e,r){t.exports=r.p+"img/figure-bleue.280227ed.jpg"}});
//# sourceMappingURL=app.fee6f60e.js.map