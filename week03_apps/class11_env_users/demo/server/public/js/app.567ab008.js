(function(t){function n(n){for(var o,i,s=n[0],u=n[1],c=n[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,s=1;s<e.length;s++){var u=e[s];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={1:0},a=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=u;a.push([14,0]),e()})({14:function(t,n,e){t.exports=e("Vtdi")},"20M+":function(t,n,e){},"4uTN":function(t,n,e){},"5vWP":function(t,n,e){"use strict";var o=e("ebIs"),r=e.n(o);r.a},"8JEJ":function(t,n,e){"use strict";var o=e("bxcv"),r=e.n(o);r.a},Axxw:function(t,n,e){},"E+HG":function(t,n,e){},EDI0:function(t,n,e){},GHbh:function(t,n,e){"use strict";var o=e("nywK"),r=e.n(o);r.a},N92c:function(t,n,e){"use strict";var o=e("cN82"),r=e.n(o);r.a},NHTx:function(t,n,e){},"Ryf/":function(t,n,e){"use strict";var o=e("NHTx"),r=e.n(o);r.a},SpKq:function(t,n,e){},TsVX:function(t,n,e){},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var o=e("Kw5r"),r=e("jE9Z"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("Eateries Demo")]),e("nav",[e("RouterLink",{attrs:{to:"/"}},[t._v("Go to "),e("strong",[t._v("Home")])]),t._v("\n     \n    "),e("RouterLink",{attrs:{to:"/about"}},[t._v("Go to About")]),t._v("\n     \n    "),e("RouterLink",{attrs:{to:"/quadrants"}},[t._v("Go to Quadrants")]),t._v("\n     \n    "),e("RouterLink",{attrs:{to:"/auth"}},[t._v("Sign In")])],1),e("RouterView")],1)},i=[],s={},u=s,c=(e("ZL7j"),e("KHd+")),l=Object(c["a"])(u,a,i,!1,null,null,null),d=l.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("I am the Home component")]),e("p",[t._v("\n    Click "),e("router-link",{attrs:{to:"/quadrants"}},[t._v("here")]),t._v(" to get started!\n  ")],1),e("p",[t._v("\n    See hotest neighborhoods in "),e("router-link",{attrs:{to:"/quadrants/1"}},[t._v("NW")]),t._v("!\n  ")],1)])},h=[],f={},m=f,v=(e("WN2J"),Object(c["a"])(m,p,h,!1,null,"488855b1",null)),b=v.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v(t._s(t.label))]),e("button",{on:{click:function(n){t.type=t.isSignUp?"signIn":"signUp"}}},[t._v("\n    "+t._s(t.isSignUp?"Already a user? Click here to sign in":"New? Click here to sign up")+"\n  ")]),e("form",{on:{submit:function(n){return n.preventDefault(),t.handleSubmit(n)}}},[e("FormControl",{attrs:{label:"email"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],domProps:{value:t.credentials.email},on:{input:function(n){n.target.composing||t.$set(t.credentials,"email",n.target.value)}}})]),e("FormControl",{attrs:{label:"password"}},["checkbox"===(t.show?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.credentials.password)?t._i(t.credentials.password,null)>-1:t.credentials.password},on:{change:function(n){var e=t.credentials.password,o=n.target,r=!!o.checked;if(Array.isArray(e)){var a=null,i=t._i(e,a);o.checked?i<0&&t.$set(t.credentials,"password",e.concat([a])):i>-1&&t.$set(t.credentials,"password",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.credentials,"password",r)}}}):"radio"===(t.show?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:"radio"},domProps:{checked:t._q(t.credentials.password,null)},on:{change:function(n){t.$set(t.credentials,"password",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],attrs:{type:t.show?"text":"password"},domProps:{value:t.credentials.password},on:{input:function(n){n.target.composing||t.$set(t.credentials,"password",n.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:function(n){t.show=!t.show}}},[t._v("\n        "+t._s(t.show?"Hide":"Show")+"\n      ")])]),e("FormControl",[e("button",{attrs:{type:"submit"}},[t._v("\n        "+t._s(t.label)+"\n      ")])])],1)])},g=[],w="/api",y="".concat(w,"/neighborhoods"),q=("".concat(w,"/restaurants"),"".concat(w,"/auth"));function x(t){return t.ok?t.json():t.json().then(function(t){throw t.message})}function k(t){return fetch(y,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(x)}function j(){return fetch("".concat(w,"/quadrants"),{headers:{"Content-Type":"application/json"}}).then(x)}function N(t){return fetch("".concat(w,"/quadrants/").concat(t),{headers:{"Content-Type":"application/json"}}).then(function(t){return t.json()})}function S(t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(x)}function T(t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(x)}var O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"form-control"},[e("label",[t._v("\n    "+t._s(t.label)+"\n  ")]),e("div",[t._t("default")],2)])},$=[],C={props:{label:String}},L=C,E=(e("WKTX"),Object(c["a"])(L,O,$,!1,null,"9a7361ae",null)),P=E.exports,F={components:{FormControl:P},data:function(){return{credentials:{email:"",password:""},show:!1,type:"signUp"}},computed:{isSignUp:function(){return"signUp"===this.type},label:function(){return this.isSignUp?"Sign Up":"Sign In"}},methods:{handleSubmit:function(){var t=this.isSignUp?S:T;t(this.credentials).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}}},I=F,A=(e("8JEJ"),Object(c["a"])(I,_,g,!1,null,"272858e2",null)),R=A.exports,H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("I am the About component")]),e("h3",[t._v("I have cool tabs")]),e("Tabs",[e("Tab",{attrs:{name:"Tab 1"}},[e("h4",[t._v("Header for a tab")]),e("p",[t._v("some content on this tab")])]),e("Tab",{attrs:{name:"Tab 2"}},[e("h4",[t._v("Header for second tab")]),e("p",[t._v("some content on this tab")])]),e("Tab",{attrs:{name:"Tab 3"}},[e("h4",[t._v("Header for third tab")]),e("p",[t._v("some content on this tab")])])],1)],1)},U=[],J=e("eSMz"),G={components:{Tabs:J["Tabs"],Tab:J["Tab"]}},K=G,M=(e("if4L"),Object(c["a"])(K,H,U,!1,null,"58e4fff2",null)),V=M.exports,W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h2",[t._v("I am the Quadrants component")]),t.error?e("pre",[t._v(t._s(t.error))]):t._e(),t.quadrants?e("ul",t._l(t.quadrants,function(n){return e("li",{key:n.id},[e("RouterLink",{attrs:{to:"/quadrants/"+n.id}},[t._v("\n        "+t._s(n.direction)+" "+t._s(n.name)+" \n        ("+t._s(n.neighborhoodCount)+" \n        neighborhood"+t._s(1!==n.neighborhoodCount?"s":"")+")\n      ")])],1)})):t._e()])},D=[],X={data:function(){return{quadrants:null,error:null}},created:function(){var t=this;j().then(function(n){t.quadrants=n}).catch(function(n){t.error=n})}},Y=X,Z=(e("GHbh"),Object(c["a"])(Y,W,D,!1,null,"c16b1cc6",null)),z=Z.exports,Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return null!==t.quadrant?e("div",[e("h2",[t._v(t._s(t.quadrant.name)+" "+t._s(t.quadrant.direction))]),e("nav",[e("NavLink",{attrs:{to:"/quadrants/"+t.quadrant.id+"/list"}},[t._v("list")]),t._v("\n     \n    "),e("NavLink",{attrs:{to:"/quadrants/"+t.quadrant.id+"/map"}},[t._v("map")]),t._v("\n     \n    "),e("NavLink",{attrs:{to:"/quadrants/"+t.quadrant.id+"/new"}},[t._v("add")])],1),e("RouterView",{attrs:{neighborhoods:t.quadrant.neighborhoods,quadrantId:t.quadrant.id,"on-add":t.handleAdd}})],1):t._e()},B=[],tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("RouterLink",t._b({},"RouterLink",t.$attrs,!1),[e("span",{staticClass:"nav-link"},[t._t("default")],2)])},nt=[],et=(e("mdLu"),{}),ot=Object(c["a"])(et,tt,nt,!1,null,"545fdf1e",null),rt=ot.exports,at={components:{NavLink:rt},data:function(){return{quadrant:null}},created:function(){var t=this;N(this.$route.params.id).then(function(n){t.quadrant=n})},methods:{handleAdd:function(t){var n=this;return t.quadrantId=this.quadrant.id,k(t).then(function(t){n.quadrant.neighborhoods.push(t),n.$router.push("/quadrants/".concat(n.quadrantId))})}}},it=at,st=(e("dwLU"),Object(c["a"])(it,Q,B,!1,null,"abaa524e",null)),ut=st.exports,ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("Neigborhoods List")]),t.neighborhoods?e("ul",t._l(t.neighborhoods,function(n){return e("li",{key:n.id},[e("strong",[t._v(t._s(n.name))]),t._v("\n       \n      "+t._s(n.description)+"\n    ")])})):t._e()])},lt=[],dt={props:["neighborhoods"]},pt=dt,ht=(e("N92c"),Object(c["a"])(pt,ct,lt,!1,null,"4b2c3c3c",null)),ft=ht.exports,mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h3",[t._v("Neighborhoods Map")]),e("p",[t._v("\n    I would display map with \n    "+t._s(t.neighborhoods.length)+"\n    markers\n  ")])])},vt=[],bt={props:["neighborhoods"]},_t=bt,gt=(e("5vWP"),Object(c["a"])(_t,mt,vt,!1,null,"0275877e",null)),wt=gt.exports,yt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("NeighborhoodForm",{attrs:{label:"Add","on-edit":t.onAdd}})],1)},qt=[],xt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"neighborhood-form"},[e("form",{on:{submit:function(n){return n.preventDefault(),t.handleSubmit(n)}}},[e("FormControl",{attrs:{label:"Name"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.name,expression:"edit.name"}],attrs:{type:"text",name:"name",placeholder:"Name",required:""},domProps:{value:t.edit.name},on:{input:function(n){n.target.composing||t.$set(t.edit,"name",n.target.value)}}})]),e("FormControl",{attrs:{label:"Population"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.edit.population,expression:"edit.population",modifiers:{number:!0}}],attrs:{type:"number",name:"population",placeholder:"Population",required:""},domProps:{value:t.edit.population},on:{input:function(n){n.target.composing||t.$set(t.edit,"population",t._n(n.target.value))},blur:function(n){t.$forceUpdate()}}})]),e("FormControl",{attrs:{label:"Founded"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.edit.founded,expression:"edit.founded",modifiers:{number:!0}}],attrs:{type:"number",name:"founded",placeholder:"Founded",required:""},domProps:{value:t.edit.founded},on:{input:function(n){n.target.composing||t.$set(t.edit,"founded",t._n(n.target.value))},blur:function(n){t.$forceUpdate()}}})]),e("FormControl",{attrs:{label:"Description"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.description,expression:"edit.description"}],attrs:{name:"body",rows:"8",cols:"40",required:""},domProps:{value:t.edit.description},on:{input:function(n){n.target.composing||t.$set(t.edit,"description",n.target.value)}}})]),e("FormControl",[e("button",{attrs:{type:"submit"}},[t._v(t._s(t.label))]),t.onCancel?e("button",{on:{click:t.onCancel}},[t._v("\n        Cancel\n      ")]):t._e()])],1),e("pre",[t._v(t._s(t.error))])])},kt=[],jt=(e("91GP"),function(){return{name:"",quadrantId:"",population:"",founded:"",description:""}}),Nt={components:{FormControl:P},props:{neighborhood:Object,quadrants:Array,label:String,onEdit:{type:Function,required:!0},onCancel:Function},data:function(){return{error:null,edit:this.neighborhood?Object.assign({},this.neighborhood):jt()}},methods:{handleSubmit:function(){var t=this;return this.error=null,this.onEdit(this.edit).then(function(){t.edit=jt()}).catch(function(n){t.error=n})}}},St=Nt,Tt=(e("Ryf/"),Object(c["a"])(St,xt,kt,!1,null,null,null)),Ot=Tt.exports,$t={props:["onAdd"],components:{NeighborhoodForm:Ot}},Ct=$t,Lt=(e("banY"),Object(c["a"])(Ct,yt,qt,!1,null,null,null)),Et=Lt.exports,Pt=new r["a"]({routes:[{path:"/",component:b},{path:"/about",component:V},{path:"/quadrants",component:z},{path:"/auth",component:R},{path:"/quadrants/:id",component:ut,children:[{path:"list",component:ft},{path:"map",component:wt},{path:"new",component:Et},{path:"",redirect:"list"}]},{path:"*",redirect:"/"}]});e("20M+"),e("Axxw");o["a"].config.productionTip=!1,o["a"].use(r["a"]),o["a"].component("RouterLink",o["a"].component("router-link")),o["a"].component("RouterView",o["a"].component("router-view")),new o["a"]({router:Pt,render:function(t){return t(d)}}).$mount("#app")},WKTX:function(t,n,e){"use strict";var o=e("4uTN"),r=e.n(o);r.a},WN2J:function(t,n,e){"use strict";var o=e("ulLY"),r=e.n(o);r.a},ZL7j:function(t,n,e){"use strict";var o=e("EDI0"),r=e.n(o);r.a},banY:function(t,n,e){"use strict";var o=e("SpKq"),r=e.n(o);r.a},bxcv:function(t,n,e){},cN82:function(t,n,e){},dwLU:function(t,n,e){"use strict";var o=e("E+HG"),r=e.n(o);r.a},ebIs:function(t,n,e){},if4L:function(t,n,e){"use strict";var o=e("y/ST"),r=e.n(o);r.a},mdLu:function(t,n,e){"use strict";var o=e("TsVX"),r=e.n(o);r.a},nywK:function(t,n,e){},ulLY:function(t,n,e){},"y/ST":function(t,n,e){}});
//# sourceMappingURL=app.567ab008.js.map