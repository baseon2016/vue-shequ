(function(t){function e(e){for(var s,c,o=e[0],l=e[1],r=e[2],p=0,d=[];p<o.length;p++)c=o[p],n[c]&&d.push(n[c][0]),n[c]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,r||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-shequ/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0607":function(t,e,a){},"09aa":function(t,e,a){},"150b":function(t,e,a){},"1b9d":function(t,e,a){"use strict";var s=a("e4a2"),n=a.n(s);n.a},3607:function(t,e,a){"use strict";var s=a("979f"),n=a.n(s);n.a},"3f15":function(t,e,a){"use strict";var s=a("0607"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shequ"},[a("Header"),a("div",{staticClass:"container"},[a("router-view")],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"logo"},[a("router-link",{style:{color:"#fff"},attrs:{to:t.$publicUrl+"/"}},[a("img",{attrs:{src:"https://www.vue-js.com/public/images/vue.png"}}),t._v("\n        Vue.js\n      ")])],1),t._m(0),a("ul",{staticClass:"navigation"},[a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:t.$publicUrl+"/"}},[t._v("Home")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("微信公众号")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("Vue2.0")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("参考资料")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("Api")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("关于")])],1),a("li",[a("router-link",{style:{color:"#fff"},attrs:{to:"/"}},[t._v("注册")])],1)]),t.userinfo?a("router-link",{staticClass:"mymessages",attrs:{to:this.$publicUrl+"/my/messages"}},[t.newMessages?a("span",{staticClass:"message-count"},[t._v(t._s(t.newMessages))]):t._e(),t._v(" 未读消息\n    ")]):t._e(),t.userinfo?a("router-link",{staticClass:"postTitle",attrs:{to:this.$publicUrl+"/topic/create"}},[t._v("发布话题")]):t._e(),t.userinfo?a("div",{staticClass:"logout"},[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("button",{on:{click:t.logout}},[t._v("退出")])]):a("div",{staticClass:"login"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.usertoken,expression:"usertoken"}],attrs:{type:"text"},domProps:{value:t.usertoken},on:{input:function(e){e.target.composing||(t.usertoken=e.target.value)}}}),a("button",{on:{click:t.login}},[t._v("登录")])])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("input",{attrs:{type:"text"}})])}],l=a("bc3a"),r=a.n(l),u={name:"headernav",data:function(){return{usertoken:"8f8bbbad-f0ff-4f15-8f5f-750f4d34aba0",userinfo:null,newMessages:null}},methods:{login:function(){var t=this;this.$router.push(this.$publicUrl+"/"),r.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.usertoken}).then(function(e){console.log(e.data),t.userinfo=e.data,localStorage.setItem("token",t.usertoken),localStorage.setItem("userId",e.data.id),r.a.get("https://www.vue-js.com/api/v1/message/count",{params:{accesstoken:localStorage.getItem("token")}}).then(function(e){console.log(e.data),t.newMessages=e.data.data})})},logout:function(){this.$router.push(this.$publicUrl+"/"),this.userinfo=null,localStorage.removeItem("token")}},created:function(){var t=this;localStorage.getItem("token")&&r.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:localStorage.getItem("token")}).then(function(e){t.userinfo=e.data,r.a.get("https://www.vue-js.com/api/v1/message/count",{params:{accesstoken:localStorage.getItem("token")}}).then(function(e){console.log(e.data),t.newMessages=e.data.data})})}},p=u,d=(a("8baf"),a("2877")),f=Object(d["a"])(p,c,o,!1,null,null,null),v=f.exports,m={name:"app",components:{Header:v}},h=m,b=(a("034f"),Object(d["a"])(h,n,i,!1,null,null,null)),_=b.exports,g=(a("150b"),a("be35"),a("672e"),a("450d"),a("101e")),j=a.n(g);s["default"].use(j.a);var y=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home panel"},[a("div",{staticClass:"topic-main"},[a("ul",{staticClass:"nav"},[a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=all"?"active":t.$route.fullPath===t.$publicUrl+"/"?"active":"",attrs:{to:t.$publicUrl+"/?tab=all"},nativeOn:{click:function(e){t.total=857}}},[t._v("全部")])],1),a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=good"?"active":"",attrs:{to:t.$publicUrl+"/?tab=good"},nativeOn:{click:function(e){t.total=15}}},[t._v("精华")])],1),a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=weex"?"active":"",attrs:{to:t.$publicUrl+"/?tab=weex"},nativeOn:{click:function(e){t.total=3}}},[t._v("weex")])],1),a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=share"?"active":"",attrs:{to:t.$publicUrl+"/?tab=share"},nativeOn:{click:function(e){t.total=246}}},[t._v("分享")])],1),a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=ask"?"active":"",attrs:{to:t.$publicUrl+"/?tab=ask"},nativeOn:{click:function(e){t.total=578}}},[t._v("问答")])],1),a("li",[a("router-link",{class:t.$route.fullPath===t.$publicUrl+"/?tab=job"?"active":"",attrs:{to:t.$publicUrl+"/?tab=job"},nativeOn:{click:function(e){t.total=30}}},[t._v("招聘")])],1)]),a("div",{staticClass:"topics"},[t.topics.length?a("ul",{staticClass:"topics-list"},t._l(t.topics,function(e){return a("li",{key:e.id},[a("router-link",{staticClass:"author-avatar",attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[a("img",{attrs:{src:e.author.avatar_url}})]),a("div",{staticClass:"reply-count"},[a("span",{staticClass:"count_of_replies"},[t._v(t._s(e.reply_count))]),a("span",{staticClass:"count_seperator"},[t._v("/")]),a("span",{staticClass:"count_of_visits"},[t._v(t._s(e.visit_count))])]),a("div",{staticClass:"topics-title-wrapper"},[t.$route.fullPath===t.$publicUrl+"/"||t.$route.fullPath===t.$publicUrl+"/?tab=all"||e.top||e.good?a("span",{class:{tab:!0,active:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"share"===e.tab?"分享":"ask"===e.tab?"问答":"job"===e.tab?"招聘":"weex"))]):t._e(),a("router-link",{staticClass:"topic-title",attrs:{to:t.$publicUrl+"/topic/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),a("span",{staticClass:"last-reply"},[t._v(t._s(t.moment(e.last_reply_at)))])],1)}),0):a("div",[a("img",{style:{width:"100%"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"}})]),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":20,"pager-count":5,total:t.total},on:{"current-change":t.changePage}})],1)])])},C=[],w=a("c1df"),$=a.n(w),x={name:"home",data:function(){return{topics:[],total:857}},methods:{moment:function(t){return $.a.locale("zh-cn"),$()(t).fromNow()},changePage:function(t){var e=this.$route.query.tab||"all";this.$router.push($publicUrl+"/?tab=".concat(e,"&page=").concat(t))}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",a=this.$route.query.page||1;this.topics=[],r.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(a)).then(function(e){t.topics=e.data.data})}}},created:function(){var t=this;r.a.get("https://www.vue-js.com/api/v1/topics").then(function(e){console.log(e.data.data),console.log(t.$publicUrl),t.topics=e.data.data})}},U=x,E=(a("8b71"),Object(d["a"])(U,k,C,!1,null,null,null)),O=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic-wrapper"},[t.topic?a("div",{staticClass:"main"},[a("article",{staticClass:"topic panel"},[a("div",{staticClass:"article-head"},[a("div",{staticClass:"article-head-title"},[a("div",{staticClass:"title-text"},[t.topic.good||t.topic.top?a("span",{staticClass:"tab active"},[t._v(t._s(t.topic.top?"置顶":t.topic.good?"精华":""))]):t._e(),a("span",{staticClass:"title"},[t._v(t._s(t.topic.title))])]),t.loggedin?a("span",{class:t.isCollected?"decollect collect":"collect",on:{click:t.userCollect}},[t._v(t._s(t.isCollected?"取消收藏":"加入收藏"))]):t._e()]),a("p",{staticClass:"changes"},[a("span",[a("b",[t._v("·")]),t._v("\n            发布于"+t._s(t.moment(t.topic.creat_at))+"\n          ")]),a("span",[a("b",[t._v("·")]),t._v("\n            作者"+t._s(t.topic.author.loginname)+"\n          ")]),a("span",[a("b",[t._v("·")]),t._v("\n            "+t._s(t.topic.visit_count)+"次浏览\n          ")]),a("span",[a("b",[t._v("·")]),t._v("\n            来自"+t._s(t.topic.tab)+"\n          ")])])]),a("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.topic.content)}},[t._v(t._s(t.topic.content))])]),a("div",{staticClass:"topic-reply panel"},[a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title"},[t._v(t._s(t.topic.reply_count)+" 回复")])]),a("ul",t._l(t.topic.replies,function(e,s){return a("li",{key:e.id,class:{"reply-item":!0,"reply-highlight":e.ups.length>=2}},[a("div",{staticClass:"reply-author"},[a("img",{attrs:{src:e.author.avatar_url}}),a("div",{staticClass:"user-info"},[a("span",{staticClass:"reply-avatar"},[t._v(t._s(e.author.loginname))]),a("span",{staticClass:"reply-date"},[t._v(t._s(s+1+"楼·"+t.moment(e.create_at)))])]),a("div",{staticClass:"user-action"},[a("span",{class:{iconfont:!0,icondianzan:!0,"up-btn":!0,active:t.isUped(e)},on:{click:function(a){return t.userUp(e)}}},[t._v(t._s(e.ups.length?e.ups.length:""))]),t.loggedin?a("span",{staticClass:"iconfont iconreply reply-btn",on:{click:function(a){return t.showreply(e)}}}):t._e()])]),a("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}},[t._v(t._s(e.content))]),t.reReply.find(function(t){return t.index===e.id})?a("div",{staticClass:"post-reply panel"},[t._m(0,!0),a("div",{staticClass:"postarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reReply.find(function(t){return t.index===e.id}).text,expression:"reReply.find(ele=>ele.index===item.id).text"}],attrs:{cols:"10",rows:"3"},domProps:{value:t.reReply.find(function(t){return t.index===e.id}).text},on:{keyup:function(a){if(!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.replytoReply(e,t.reReply.find(function(t){return t.index===e.id}))},input:function(a){a.target.composing||t.$set(t.reReply.find(function(t){return t.index===e.id}),"text",a.target.value)}}}),a("button",{staticClass:"submit",on:{click:function(a){t.replytoReply(e,t.reReply.find(function(t){return t.index===e.id}))}}},[t._v("回复")])])]):t._e()])}),0)]),a("div",{staticClass:"post-reply panel"},[t._m(1),a("div",{staticClass:"postarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postText,expression:"postText"}],attrs:{cols:"10",rows:"3"},domProps:{value:t.postText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.postReply(e)},input:function(e){e.target.composing||(t.postText=e.target.value)}}}),a("button",{staticClass:"submit",on:{click:t.postReply}},[t._v("回复")])])])]):a("div",[a("img",{style:{width:"100%"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"}})])])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title"},[t._v("回复他（她）")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title"},[t._v("添加回复")])])}],z={name:"topic",data:function(){return{topic:null,isCollected:!1,postText:"",reReply:[]}},computed:{loggedin:function(){return localStorage.getItem("token")}},methods:{isUped:function(t){return-1!=t.ups.indexOf(localStorage.getItem("userId"))},findreReplyTxt:function(t,e){if(t.index===e.id)return t.text},moment:function(t){return $.a.locale("zh-cn"),$()(t).fromNow()},userCollect:function(){var t=this,e={accesstoken:localStorage.getItem("token"),topic_id:this.topic.id};this.isCollected?r.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){t.isCollected=!1}):r.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){t.isCollected=!0})},userUp:function(t){localStorage.getItem("token")&&r.a.post("https://www.vue-js.com/api/v1/reply/".concat(t.id,"/ups"),{accesstoken:localStorage.getItem("token")}).then(function(e){"up"===e.data.action?t.ups.push(localStorage.getItem("userId")):t.ups=t.ups.filter(function(t){return t!=localStorage.getItem("userId")})})},showreply:function(t){var e={index:t.id,text:"@".concat(t.author.loginname," ")};this.reReply.push(e)},postReply:function(){var t=this;this.postText.trim()?r.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:localStorage.getItem("token"),content:this.postText}).then(function(e){t.postText="",r.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.topic.id)).then(function(e){t.topic=e.data.data})}):alert("填写内容不能为空")},replytoReply:function(t,e){var a=this;e.text.trim()?r.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:localStorage.getItem("token"),content:e.text,reply_id:t.id}).then(function(e){a.reReply=a.reReply.filter(function(e){return e.index!=t.id}),r.a.get("https://www.vue-js.com/api/v1/topic/".concat(a.topic.id)).then(function(t){a.topic=t.data.data})}):alert("填写内容不能为空")}},created:function(){var t=this;r.a.get("https://www.vue-js.com/api/v1/topic/".concat(this.$route.params.id)).then(function(e){t.topic=e.data.data,console.log(e.data.data)})}},I=z,S=(a("1b9d"),Object(d["a"])(I,T,R,!1,null,null,null)),P=S.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.userImg?a("div",{staticClass:"user"},[a("div",{staticClass:"panel"},[t._m(0),a("div",{staticClass:"main-inner user-info"},[a("div",[a("img",{attrs:{src:t.userImg}}),a("span",{staticClass:"user-name"},[t._v(t._s(t.$route.params.loginname))])]),a("p",[t._v(t._s(this.score)+" 积分")]),t.collectTopics.length?a("p",[t._v(t._s(t.collectTopics.length)+"话题收藏")]):t._e(),a("p",[t._v("注册时间 "+t._s(t.moment(t.createUser_at)))])])]),a("div",{staticClass:"panel"},[t._m(1),a("div",{staticClass:"main-inner topics"},[a("ul",{staticClass:"topics-list"},t._l(t.recentTopics,function(e){return a("li",{key:e.id},[a("router-link",{staticClass:"author-avatar",attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[a("img",{attrs:{src:e.author.avatar_url}})]),a("div",{staticClass:"reply-count"}),a("div",{staticClass:"topics-title-wrapper"},[a("router-link",{staticClass:"topic-title",attrs:{to:t.$publicUrl+"/topic/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),a("span",{staticClass:"last-reply"},[t._v(t._s(t.moment(e.last_reply_at)))])],1)}),0)]),a("div",{staticClass:"panel-foot"},[a("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.$route.params.loginname+"/topics"}},[t._v("查看更多»")])],1)]),a("div",{staticClass:"panel"},[t._m(2),a("div",{staticClass:"main-inner topics"},[a("ul",{staticClass:"topics-list"},t._l(t.recentReplies,function(e){return a("li",{key:e.id},[a("router-link",{staticClass:"author-avatar",attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[a("img",{attrs:{src:e.author.avatar_url}})]),a("div",{staticClass:"reply-count"}),a("div",{staticClass:"topics-title-wrapper"},[a("router-link",{staticClass:"topic-title",attrs:{to:t.$publicUrl+"/topic/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),a("span",{staticClass:"last-reply"},[t._v(t._s(t.moment(e.last_reply_at)))])],1)}),0)]),a("div",{staticClass:"panel-foot"},[a("router-link",{attrs:{to:t.$publicUrl+"/user/"+t.$route.params.loginname+"/replies"}},[t._v("查看更多»")])],1)])]):a("div",[a("img",{style:{width:"100%"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"}})])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title push-home"},[t._v("主页")]),a("span",{staticClass:"divider"},[t._v("/")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",[t._v("最近创建的话题")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",[t._v("最近参与的话题")])])}],N={name:"user",data:function(){return{userImg:null,score:null,collectTopics:null,createUser_at:null,recentTopics:null,recentReplies:null}},methods:{moment:function(t){return $.a.locale("zh-cn"),$()(t).fromNow()}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this;r.a.get("https://www.vue-js.com/api/v1/user/".concat(this.$route.params.loginname)).then(function(e){console.log(e.data.data),t.userImg=e.data.data.avatar_url,t.score=e.data.data.score,t.collectTopics=e.data.data.collect_topics,t.createUser_at=e.data.data.create_at,t.recentTopics=e.data.data.recent_topics,t.recentReplies=e.data.data.recent_replies})}}},created:function(){var t=this;r.a.get("https://www.vue-js.com/api/v1/user/".concat(this.$route.params.loginname)).then(function(e){console.log(e.data.data),t.userImg=e.data.data.avatar_url,t.score=e.data.data.score,t.collectTopics=e.data.data.collect_topics,t.createUser_at=e.data.data.create_at,t.recentTopics=e.data.data.recent_topics,t.recentReplies=e.data.data.recent_replies})}},A=N,D=(a("3607"),Object(d["a"])(A,M,q,!1,null,null,null)),G=D.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recent-topics"})},H=[],F={name:"recenttopics"},K=F,L=Object(d["a"])(K,J,H,!1,null,null,null),B=L.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recent-replies"})},Q=[],W={name:"recentreplies"},X=W,Y=Object(d["a"])(X,V,Q,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.aaa?a("div",{staticClass:"mymessages"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-head"},[a("router-link",{attrs:{to:t.$publicUrl+"/"}},[a("span",{staticClass:"panel-head-title push-home"},[t._v("主页")])]),a("span",{staticClass:"divider"},[t._v("/")]),a("span",{staticClass:"new-messages"},[t._v("新消息")])],1),a("div",{staticClass:"main-inner new-messages"},[t.hasNotReadMessages.length?a("ul",t._l(t.hasNotReadMessages,function(e){return a("li",{key:e.id,staticClass:"message"},[a("div",{staticClass:"message-info"},[a("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),a("span",[t._v(t._s("at"===e.type?" 在话题 ":" 回复了你的话题 "))]),a("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))]),a("span",[t._v(t._s("at"===e.type?" 中@了你":""))])],1),t._m(0,!0)])}),0):a("div",{staticClass:"message"},[a("p",[t._v("无消息")])])])]),a("div",{staticClass:"panel"},[t._m(1),a("div",{staticClass:"main-inner old-messages"},[t.hasReadMessages.length?a("ul",t._l(t.hasReadMessages,function(e){return a("li",{key:e.id,staticClass:"message"},[a("div",{staticClass:"message-info"},[a("router-link",{attrs:{to:t.$publicUrl+"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),a("span",[t._v(t._s("at"===e.type?" 在话题 ":" 回复了你的话题 "))]),a("router-link",{attrs:{to:t.$publicUrl+"/topic/"+e.topic.id}},[t._v(t._s(e.topic.title))]),a("span",[t._v(t._s("at"===e.type?" 中@了你":""))])],1),t._m(2,!0)])}),0):a("div",{staticClass:"message"},[a("p",[t._v("无消息")])])])])]):a("div",[a("img",{style:{width:"100%"},attrs:{src:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"}})])])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"unread"},[a("img",{attrs:{src:"https://www.vue-js.com/public/images/checkmark_icon&16.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title"},[t._v("过往信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"marked-icon"},[a("img",{attrs:{src:"https://www.vue-js.com/public/images/checkmark_icon&16.png"}})])}],at={name:"mymessages",data:function(){return{aaa:!0,hasReadMessages:[],hasNotReadMessages:[]}},created:function(){var t=this;r.a.get("https://www.vue-js.com/api/v1/messages",{params:{accesstoken:localStorage.getItem("token")}}).then(function(e){t.hasReadMessages=e.data.data.has_read_messages,t.hasNotReadMessages=e.data.data.hasnot_read_messages,console.log(e.data.data)})}},st=at,nt=(a("3f15"),Object(d["a"])(st,tt,et,!1,null,null,null)),it=nt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-wrapper"},[a("div",{staticClass:"create-topic panel"},[t._m(0),a("div",{staticClass:"create-topic-main"},[a("div",[a("span",[t._v("选择板块：")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],staticClass:"selector",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),a("option",{attrs:{value:"share"}},[t._v("分享")]),a("option",{attrs:{value:"ask"}},[t._v("问答")]),a("option",{attrs:{value:"job"}},[t._v("招聘")])])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"create-title",attrs:{type:"text",placeholder:"标题字数10字以上"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"quillarea"},[a("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("button",{staticClass:"submit",on:{click:t.submit}},[t._v("提交")])],1)])]),t._m(1)])},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-head"},[a("span",{staticClass:"panel-head-title push-home"},[t._v("主页")]),a("span",{staticClass:"divider"},[t._v("/")]),a("span",{staticClass:"subtext"},[t._v("发布话题")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aside"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-head"},[a("span",[t._v("Markdown 语法参考")])]),a("div",{staticClass:"main-inner"},[a("ul",[a("li",[a("span",[t._v("### 单行的标题")])]),a("li",[a("span",[t._v("**粗体**")])]),a("li",[a("span",[t._v("`console.log('行内代码')`")])]),a("li",[a("span",[t._v("```js\\n code \\n``` 标记代码块")])]),a("li",[a("span",[t._v("[内容](链接)")])]),a("li",[a("span",[t._v("![文字说明](图片链接")])])]),a("a",{attrs:{href:"http://www.ituring.com.cn/article/775"}},[t._v("Markdown 文档")])])]),a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-head"},[a("span",[t._v("话题发布指南")])]),a("div",{staticClass:"main-inner"},[a("ul",[a("li",[a("span",[t._v("尽量把话题要点浓缩到标题里")])]),a("li",[a("span",[t._v("代码含义和报错可在 SegmentFault 提问")])]),a("li",[a("span",[t._v("给话题选择合适的标签能增加浏览")])])])])])])}],lt=(a("a753"),a("8096"),a("14e1"),a("953d")),rt={name:"createtopic",data:function(){return{tab:"",content:"",title:"",editorOption:{}}},components:{quillEditor:lt["quillEditor"]},methods:{submit:function(){var t=this;r.a.post("https://www.vue-js.com/api/v1/topics",{tab:this.tab,title:this.title,content:this.content,accesstoken:localStorage.getItem("token")}).then(function(e){t.tab="",t.content="",t.title="",t.$router.push("".concat(t.$publicUrl,"/topic/").concat(e.data.topic_id)),console.log(e.data)})},onEditorBlur:function(t){},onEditorFocus:function(t){},onEditorReady:function(t){},onEditorChange:function(t){t.quill;var e=t.html;t.text;this.content=e}}},ut=rt,pt=(a("bbad"),Object(d["a"])(ut,ct,ot,!1,null,null,null)),dt=pt.exports,ft="/vue-shequ",vt=ft;s["default"].use(y["a"]);var mt=[{component:O,path:vt+"/"},{component:dt,path:vt+"/topic/create"},{component:P,path:vt+"/topic/:id"},{component:G,path:vt+"/user/:loginname"},{component:B,path:vt+"/user/:loginname/topics"},{component:Z,path:vt+"/user/:loginname/replies"},{component:it,path:vt+"/my/messages"}],ht=new y["a"]({mode:"history",routes:mt}),bt=ht;s["default"].prototype.$publicUrl=vt,s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(_)},router:bt}).$mount("#app")},"64a9":function(t,e,a){},"782e":function(t,e,a){},"8b71":function(t,e,a){"use strict";var s=a("e3a2"),n=a.n(s);n.a},"8baf":function(t,e,a){"use strict";var s=a("782e"),n=a.n(s);n.a},"979f":function(t,e,a){},bbad:function(t,e,a){"use strict";var s=a("09aa"),n=a.n(s);n.a},be35:function(t,e,a){},e3a2:function(t,e,a){},e4a2:function(t,e,a){}});
//# sourceMappingURL=app.aa3c552c.js.map