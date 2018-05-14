webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{title:this.title,author:this.author,text:this.text}})],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App",data:function(){return{title:"Barefoot Filmmaking Manifesto",author:"Sally Potter",text:[{main:"The best time to start is now",sub:"(don’t wait)"},{main:"Take responsibility for everything",sub:"(it saves time)"},{main:"Don’t blame anyone or anything",sub:"(including yourself)"},{main:"Give up being a moviemaker victim",sub:"(of circumstance, weather, lack of money, mean financiers, vicious critics, greedy distributors, indifferent public, etc.)"},{main:"You can’t always choose what happens while you are making a film, but you can choose your point of view about what happens",sub:"(creative perspective)"},{main:"Mistakes are your best teacher",sub:"(so welcome them)"},{main:"Turn disaster to advantage",sub:"(there will be many)"},{main:"Only work on something you believe in",sub:"(life is too short to practice insincerity)"},{main:"Choose your team carefully and honour them",sub:"(never speak negatively about your, colleagues)"},{main:"Ban the word 'compromise' (or the phrase 'it will do')",sub:"(the disappointment in yourself will haunt you later)"},{main:"Be prepared to work harder than anyone you are employing"},{main:"Be ruthless – be ready to throw away your favourite bits",sub:"(you may well be, attached to what is familiar rather than what is good)"},{main:"Aim beyond your limits (and help others to go beyond theirs)",sub:"(the thrill of the learning curve)"},{main:"When in doubt, project yourself ten years into the future and look back  – what will you be proud of having done?",sub:"(indecision is a lack of the longer view or wider perspective)"},{main:"Practice no waste – psychic ecology – prevent brain pollution",sub:"(don’t add to the proliferation of junk)"},{main:"Be an anorak – keep your sense of wonder and enthusiasm",sub:"(cynicism will kill your joy and motivation)"},{main:"Get some sleep when you can",sub:"(you wont get much later)"}]}}},s,!1,function(t){n("jEsK")},null,null).exports,o=n("/ocq"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._l(t.text,function(e,i){return[n("div",{staticClass:"line",style:t.getLinePosition(i)},[n("p",{staticClass:"main",style:t.getMainPosition(i)},[t._v("\n        "+t._s(e.main)+"\n      ")]),t._v(" "),n("p",{staticClass:"sub",style:t.getSubPosition(i)},[t._v("\n        "+t._s(e.sub)+"\n      ")])])]})],2)},staticRenderFns:[]};var l=n("VU/8")({name:"Version1",props:["title","text"],data:function(){return{msg:"This is Version1",scrollDist:90}},methods:{getLinePosition:function(t){return{height:0===t?"120vh":"unset"}},getMainPosition:function(t){return 0===t?{top:this.scrollDist+"vh",position:"sticky"}:null},getSubPosition:function(t){return 0===t?{top:this.scrollDist+10+"vh",position:"sticky","margin-bottom":"0"}:null}}},r,!1,function(t){n("tCf3")},"data-v-3785b1a0",null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"grid"},t._l(t.text,function(e){return n("div",{staticClass:"cell"},[n("div",{staticClass:"text"},[n("div",{staticClass:"main"},[t._v(t._s(e.main))]),t._v(" "),n("div",{staticClass:"sub"},[t._v(t._s(e.sub))])])])}))])},staticRenderFns:[]};var u=n("VU/8")({name:"Version2",props:["title","author","text"],data:function(){return{msg:"This is Version 2"}}},c,!1,function(t){n("uGSb")},"data-v-602282d3",null).exports,h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._l(t.text,function(e){return[n("div",{staticClass:"main"},[t._v("\n      "+t._s(e.main)+"\n    ")]),t._v(" "),n("div",{staticClass:"sub"},[t._v("\n      "+t._s(e.sub)+"\n    ")])]})],2)},staticRenderFns:[]};var m=n("VU/8")({name:"Version3",props:["title","text","author"],data:function(){return{msg:"This is Version 3"}}},h,!1,function(t){n("bEwC")},"data-v-37fdb605",null).exports,d={name:"Version4",props:["title","author","text"],data:function(){return{msg:"This is Version 4",callout:{main:[],active:!1},mutableText:[],hasBeenClicked:[]}},created:function(){this.mutableText=this.text.map(function(t,e){return{main:t.main,sub:t.sub,orig_i:e}}),this.hasBeenClicked=this.text.map(function(t){return!1}),console.log(this.hasBeenClicked)},methods:{handleClick:function(){if(this.mutableText.length>0){var t=Math.round(Math.random()*this.mutableText.length-1),e=this.mutableText.splice(t,1);this.hasBeenClicked[e[0].orig_i]=!0,this.callout.main.splice(0,0,e[0].main+" "+e[0].sub),this.callout.active=!0}},exportToPDF:function(){n("m/C5")(document.getElementById("manifesto"),{margin:5,filename:"manifesto.pdf",html2canvas:{dpi:192,letterRendering:!0}})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"col1"},[n("div",{staticClass:"col1-text-wrapper"},[t._l(t.text,function(e,i){return n("div",{staticClass:"cell"},[n("div",{staticClass:"text"},[n("div",{staticClass:"main",class:{clicked:t.hasBeenClicked[i]},on:{click:t.handleClick}},[t._v(t._s(e.main)+" "+t._s(e.sub))])])])}),t._v(" "),t.callout.active?n("button",{staticClass:"export",on:{click:t.exportToPDF}},[t._v("Export to PDF")]):t._e()],2)]),t._v(" "),t.callout.active?n("div",{staticClass:"callout",attrs:{id:"manifesto"}},[t._l(t.callout.main,function(e){return n("div",{staticClass:"callout-text",style:{fontFamily:"Futura Std"}},[t._v(t._s(e))])}),t._v(" "),n("div",{staticClass:"attribution",style:{fontFamily:"Futura Std"}},[t._v("From the '"),n("a",{attrs:{href:"http://sallypotter.com/blog/details/13630/barefoot-filmmaking"}},[t._v(t._s(t.title))]),t._v("' by "+t._s(t.author))])],2):t._e()])},staticRenderFns:[]};var v=n("VU/8")(d,p,!1,function(t){n("SB/q")},"data-v-05c92b24",null).exports,f={name:"Version2",props:["title","author","text"],data:function(){return{msg:"This is Version 2",colors:["#962b63","#0d105c","#174976","#9f160d","#98b8c9","#e18d21","#25575f","#a6545c","#7da19b","#856781","#6b6a71","#a64913","#962b63","#0d105c","#174976","#e18d21","#98b8c9"],numClicks:0,isMain:!0}},computed:{styleObj:function(){var t=this.isMain?this.colors[this.numClicks]:"unset",e=this.isMain?"white":this.colors[this.numClicks];return{backgroundColor:t,color:e,borderColor:e}}},methods:{handleClick:function(){this.numClicks+=1,this.isMain=!0}},mounted:function(){console.log(this.text.length,this.colors.length)}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",style:t.styleObj},[n("div",{staticClass:"main",style:t.styleObj,on:{mouseover:function(e){t.isMain=!t.isMain}}},[t._v("\n    "+t._s(t.isMain?t.text[t.numClicks].main:t.text[t.numClicks].sub)+"\n  ")]),t._v(" "),t.numClicks<16?n("button",{staticClass:"next",style:t.styleObj,on:{click:t.handleClick}},[t._v("Next")]):t._e()])},staticRenderFns:[]};var _=n("VU/8")(f,b,!1,function(t){n("ylEB")},"data-v-e872a796",null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainNav"},[n("header",[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h3",[t._v(t._s("by "+t.author))])]),t._v(" "),n("p",[t._v("(5 Iterations for ‘Typography and Visual Design‘ at Parson School of Design)")]),t._v(" "),n("h3",[n("router-link",{attrs:{to:"/1"}},[t._v("Version 1")])],1),t._v(" "),n("h3",[n("router-link",{attrs:{to:"/2"}},[t._v("Version 2")])],1),t._v(" "),n("h3",[n("router-link",{attrs:{to:"/3"}},[t._v("Version 3")])],1),t._v(" "),n("h3",[n("router-link",{attrs:{to:"/4"}},[t._v("Version 4 [FINAL]")])],1),t._v(" "),n("h3",[n("router-link",{attrs:{to:"/5"}},[t._v("Version 5")])],1)])},staticRenderFns:[]};var g=n("VU/8")({name:"MainNav",props:["title","author","text"],data:function(){return{msg:"This is the Main Navigation"}}},y,!1,function(t){n("O3Yf")},null,null).exports;i.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"Version4",component:v},{path:"/all",name:"MainNav",component:g,props:!0},{path:"/1",name:"Version1",component:l,props:!0},{path:"/2",name:"Version2",component:u,props:!0},{path:"/3",name:"Version3",component:m},{path:"/4",name:"Version4",component:v},{path:"/5",name:"Version5",component:_}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:C,components:{App:a},template:"<App/>"})},O3Yf:function(t,e){},"SB/q":function(t,e){},bEwC:function(t,e){},jEsK:function(t,e){},tCf3:function(t,e){},uGSb:function(t,e){},ylEB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3c7a70bc0ee95a89ccb7.js.map