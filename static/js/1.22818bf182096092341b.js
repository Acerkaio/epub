webpackJsonp([1],{"07ZH":function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o("unWt"),n=o("b8iQ"),i=o("gbRG"),r=window.ePub,s={data:function(){return{reader:null,title:"Acerkaio 的书架",books:[{id:"1",name:"呵呵哒",author:"陈建行",content:"123"},{id:"2",name:"致我们即将逝去的青春",author:"陈建行",content:"123"}],page:{menu:[{type:"icon",icon:"add",click:this.add,title:"添加本地书籍"},{type:"icon",icon:"apps",href:"https://blog.acerkaio.top/",target:"_blank",title:"Acerkaio"}]}}},mounted:function(){this.init()},destroyed:function(){},methods:{add:function(){document.getElementById("file").click()},init:function(){var t=this;this.reader=n.a,console.log("初始化"),e.a.init(function(){e.a.getBooks(function(a){console.log("获取所有书籍"),console.log(a),t.books=a,t.$storage.get("init",!1)||(t.$storage.set("init",!0),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/01安达与岛村.epub",1),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/02安达与岛村.epub",2),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/03安达与岛村.epub",3),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/04安达与岛村.epub",4),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/05安达与岛村.epub",5),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/06安达与岛村.epub",6),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/07安达与岛村.epub",7),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/08安达与岛村.epub",8),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/09安达与岛村.epub",9),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/安达与岛村/10安达与岛村.epub",10),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/%E5%AE%89%E8%BE%BE%E4%B8%8E%E5%B2%9B%E6%9D%91/%E7%9F%AD%E7%AF%87%20%E5%AE%89%E8%BE%BE%E4%B8%8E%E5%B2%9B%E6%9D%91.epub",11),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/转生王和天才千金的魔法革命/01转生王和天才千金的魔法革命.epub",12),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/转生王和天才千金的魔法革命/02转生王和天才千金的魔法革命.epub",13),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/转生王和天才千金的魔法革命/03转生王和天才千金的魔法革命.epub",14),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/转生王和天才千金的魔法革命/04转生王和天才千金的魔法革命.epub",15),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/转生王和天才千金的魔法革命/05转生公主与天才千金的魔法革命.epub",16),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/%E8%BD%AC%E7%94%9F%E7%8E%8B%E5%92%8C%E5%A4%A9%E6%89%8D%E5%8D%83%E9%87%91%E7%9A%84%E9%AD%94%E6%B3%95%E9%9D%A9%E5%91%BD/-%E7%AF%87%20%E8%BD%AC%E7%94%9F%E7%8E%8B%E5%92%8C%E5%A4%A9%E6%89%8D%E5%8D%83%E9%87%91%E7%9A%84%E9%AD%94%E6%B3%95%E9%9D%A9%E5%91%BD.epub",17),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 01-tc.epub",18),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 02-tc.epub",19),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 03-tc.epub",20),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 04-tc.epub",21),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 05-tc.epub",22),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 06-tc.epub",23),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 07-tc.epub",24),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 08-tc.epub",25),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 09-tc.epub",26),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 10-tc.epub",27),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 11-tc.epub",28),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 12-tc.epub",29),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 13-tc.epub",30),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 14-tc.epub",31),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 15-tc.epub",32),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 16-tc.epub",33),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 17-tc.epub",34),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 18-tc.epub",35),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 19-tc.epub",36),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 - 20-tc.epub",37),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 短篇 - 01-tc.epub",38),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔女之旅 番外 - 01-tc.epub",39),t.addBookFromUrl("https://jsdelivr.pai233.top/gh/Acerkaio/apidata@main/maj/魔之旅 - 20.epub",40))})})},addLink:function(){var t=prompt("请输入链接");console.log(t),this.addBookFromUrl(t)},addBookFromUrl:function(t,a){var o=this;this.book=r(t,{width:400,height:600,spreads:!1,restore:!0}),this.book.getMetadata().then(function(n){console.log("getMetadata"),console.log(n),e.a.init(function(){e.a.addBook({type:"link",id:""+a,name:n.bookTitle,author:n.creator,content:t},function(){e.a.getBooks(function(t){console.log("获取所有书籍"),o.books=t,console.log(t)})})})})},remove:function(t){var a=this;e.a.init(function(){e.a.deleteBook(t.id,function(t){e.a.getBooks(function(t){console.log("获取所有书籍"),console.log(t),a.books=t})})})},download:function(t){var a=t.content;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,"dl.epub");else{var o=document.createElement("a");o.href=window.URL.createObjectURL(a),o.download="dl.epub",o.click(),window.URL.revokeObjectURL(o.href)}},fileChange:function(t){var a=this;if(t.target.files.length){var o=t.target.files[0];console.log(o.name);var n=new FileReader;n.onload=function(t){var o=t.target.result;a.book=r({bookPath:o,restore:!1}),a.book.getMetadata().then(function(t){a.meta=t,console.log("getMetadata"),console.log(t),Object(i.a)(a.book,function(n){console.log("首页封面"),console.log(n),e.a.init(function(){e.a.addBook({id:""+(new Date).getTime(),name:t.bookTitle,author:t.creator,content:o,cover:n},function(){e.a.getBooks(function(t){console.log("获取所有书籍"),a.books=t,console.log(t)})})})})})},n.readAsArrayBuffer(o)}}}},d={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("my-page",{staticClass:"page-home",attrs:{title:t.title,page:t.page}},[o("div",{attrs:{id:"main"}},[o("ul",{staticClass:"book-list"},t._l(t.books,function(a){return o("li",{staticClass:"item"},[o("router-link",{staticClass:"link",attrs:{to:"/books/"+a.id,title:a.name}},[a.cover?o("img",{staticClass:"cover",attrs:{src:a.cover}}):t._e(),t._v(" "),a.cover?t._e():o("div",{staticClass:"cover-text"},[t._v("没有封面")])]),t._v(" "),o("div",{staticClass:"name"},[t._v(t._s(a.name))]),t._v(" "),o("a",{staticClass:"remove",attrs:{href:"#"},on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.remove(a)}}},[t._v("删除")])],1)}),0),t._v(" "),t.books.length?t._e():o("div",{staticClass:"empty-box"},[o("img",{attrs:{src:"/static/img/empty.svg"}}),t._v(" "),o("div",{staticClass:"text"},[t._v("暂无书籍，你可以添加右上角的“+”添加书籍")])]),t._v(" "),o("ui-raised-button",{staticClass:"file-btn",staticStyle:{display:"none"},attrs:{label:"从文件中导入"}},[o("input",{staticClass:"ui-file-button",attrs:{type:"file",id:"file"},on:{change:function(a){return t.fileChange(a,1)}}})])],1)])},staticRenderFns:[]};var p=o("VU/8")(s,d,!1,function(t){o("FUKB")},"data-v-b98643ac",null);a.default=p.exports},"9bBU":function(t,a,o){o("mClu");var e=o("FeBl").Object;t.exports=function(t,a,o){return e.defineProperty(t,a,o)}},C4MV:function(t,a,o){t.exports={default:o("9bBU"),__esModule:!0}},FUKB:function(t,a,o){var e=o("qexZ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("rjj0")("b90099ae",e,!0,{})},Zrlr:function(t,a,o){"use strict";a.__esModule=!0,a.default=function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}},b8iQ:function(t,a,o){"use strict";var e=o("Zrlr"),n=o.n(e);a.a=function t(){n()(this,t)}},gbRG:function(t,a,o){"use strict";function e(t,a){t.coverUrl().then(function(t){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(){var t=o.response,e=new FileReader;e.onload=function(){a&&a(e.result)},e.readAsDataURL(t)},o.open("GET",t),o.send()})}o.d(a,"a",function(){return e})},mClu:function(t,a,o){var e=o("kM2E");e(e.S+e.F*!o("+E39"),"Object",{defineProperty:o("evD5").f})},qexZ:function(t,a,o){(t.exports=o("FZ+f")(!0)).push([t.i,"\n@-webkit-keyframes rotate-data-v-b98643ac {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-data-v-b98643ac {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.book-list[data-v-b98643ac]:after {\n  clear: both;\n  content: '.';\n  display: block;\n  height: 0;\n  line-height: 0;\n  overflow: hidden;\n}\n.book-list .item[data-v-b98643ac] {\n  position: relative;\n  float: left;\n  width: 140px;\n  height: 196px;\n  margin-right: 16px;\n  margin-bottom: 76px;\n  background-color: #fff;\n  /*background-image: url(\"/static/img/bg_1.jpg\");*/\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n}\n.book-list .link[data-v-b98643ac] {\n  display: block;\n  height: 100%;\n  margin-bottom: 16px;\n  color: inherit;\n}\n.book-list .cover[data-v-b98643ac] {\n  max-width: 100%;\n}\n.book-list .cover-text[data-v-b98643ac] {\n  line-height: 196px;\n  text-align: center;\n  color: #999;\n}\n.book-list .author[data-v-b98643ac] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.book-list .remove[data-v-b98643ac] {\n  display: none;\n}\n.empty-box[data-v-b98643ac] {\n  width: 480px;\n  margin: 80px auto;\n  padding: 32px;\n  text-align: center;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.12);\n}\n.empty-box img[data-v-b98643ac] {\n    margin-bottom: 16px;\n    width: 100px;\n    -webkit-animation: rotate-data-v-b98643ac 5s infinite linear;\n            animation: rotate-data-v-b98643ac 5s infinite linear;\n}\n.empty-box .text[data-v-b98643ac] {\n    color: #999;\n}\n","",{version:3,sources:["/home/acerkaio/桌面/书架/epub-front/src/views/Book.vue"],names:[],mappings:";AACA;AACA;IACI,kCAAkC;YAC1B,0BAA0B;CACrC;CACA;AACD;AACA;IACI,kCAAkC;YAC1B,0BAA0B;CACrC;CACA;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,UAAU;EACV,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,kDAAkD;EAClD,yFAAyF;UACjF,iFAAiF;CAC1F;AACD;EACE,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,oBAAoB;EACpB,iBAAiB;EACjB,wBAAwB;CACzB;AACD;EACE,cAAc;CACf;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,sDAAsD;UAC9C,8CAA8C;CACvD;AACD;IACI,oBAAoB;IACpB,aAAa;IACb,6DAA6D;YACrD,qDAAqD;CAChE;AACD;IACI,YAAY;CACf",file:"Book.vue",sourcesContent:["\n@-webkit-keyframes rotate-data-v-b98643ac {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes rotate-data-v-b98643ac {\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.book-list[data-v-b98643ac]:after {\n  clear: both;\n  content: '.';\n  display: block;\n  height: 0;\n  line-height: 0;\n  overflow: hidden;\n}\n.book-list .item[data-v-b98643ac] {\n  position: relative;\n  float: left;\n  width: 140px;\n  height: 196px;\n  margin-right: 16px;\n  margin-bottom: 76px;\n  background-color: #fff;\n  /*background-image: url(\"/static/img/bg_1.jpg\");*/\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n          box-shadow: 0 1px 6px rgba(0, 0, 0, 0.117647), 0 1px 4px rgba(0, 0, 0, 0.117647);\n}\n.book-list .link[data-v-b98643ac] {\n  display: block;\n  height: 100%;\n  margin-bottom: 16px;\n  color: inherit;\n}\n.book-list .cover[data-v-b98643ac] {\n  max-width: 100%;\n}\n.book-list .cover-text[data-v-b98643ac] {\n  line-height: 196px;\n  text-align: center;\n  color: #999;\n}\n.book-list .author[data-v-b98643ac] {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.book-list .remove[data-v-b98643ac] {\n  display: none;\n}\n.empty-box[data-v-b98643ac] {\n  width: 480px;\n  margin: 80px auto;\n  padding: 32px;\n  text-align: center;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 0.5px 1px 0 rgba(0, 0, 0, 0.12);\n}\n.empty-box img[data-v-b98643ac] {\n    margin-bottom: 16px;\n    width: 100px;\n    -webkit-animation: rotate-data-v-b98643ac 5s infinite linear;\n            animation: rotate-data-v-b98643ac 5s infinite linear;\n}\n.empty-box .text[data-v-b98643ac] {\n    color: #999;\n}\n"],sourceRoot:""}])},unWt:function(t,a,o){"use strict";var e=o("Zrlr"),n=o.n(e),i=o("wxAW"),r=o.n(i),s=void 0,d=new(function(){function t(){n()(this,t),this.DB_NAME="dbName",this.OBJECT="Book"}return r()(t,[{key:"init",value:function(t){var a=this,o=indexedDB.open("dbName3",1);o.onerror=function(t){console.log("连接数据库失败")},o.onsuccess=function(t){console.log("连接数据库成功")},o.onupgradeneeded=function(t){t.target.result.createObjectStore(a.OBJECT,{keyPath:"id",autoIncrement:!1}),console.log("创建对象仓库成功")},o.onsuccess=function(o){var e=o.target.result.transaction(a.OBJECT,"readwrite");s=e.objectStore(a.OBJECT),t&&t()}}},{key:"init2",value:function(){s.put({id:"2",userName:"asd",age:24});s.get("2").onsuccess=function(){},s.delete("2").onsuccess=function(){console.log("删除数据成功")}}},{key:"getBooks",value:function(t){var a=[];s.openCursor().onsuccess=function(o){var e=o.target.result;e?(a.push(e.value),e.continue()):t&&t(a)}}},{key:"getBook",value:function(t,a){s.get(t).onsuccess=function(t){console.log("getBook"),a&&a(t.target.result)}}},{key:"addBook",value:function(t,a){s.put(t).onsuccess=function(){console.log("保存成功"),a&&a()}}},{key:"deleteBook",value:function(t,a){s.delete(t).onsuccess=function(){console.log("删除数据成功"),a&&a()}}}]),t}());a.a=d},wxAW:function(t,a,o){"use strict";a.__esModule=!0;var e,n=o("C4MV"),i=(e=n)&&e.__esModule?e:{default:e};a.default=function(){function t(t,a){for(var o=0;o<a.length;o++){var e=a[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),(0,i.default)(t,e.key,e)}}return function(a,o,e){return o&&t(a.prototype,o),e&&t(a,e),a}}()}});
//# sourceMappingURL=1.22818bf182096092341b.js.map