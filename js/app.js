(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"155b":function(t,e,i){},"3b3e":function(t,e,i){},"4e92":function(t,e,i){"use strict";var n=i("f7f0"),s=i.n(n);s.a},"4f6f":function(t,e,i){"use strict";var n=i("3b3e"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("section",{staticClass:"main"},[t._m(0),i("div",{staticClass:"map",attrs:{id:"map"}},[i("div",{attrs:{id:"legend"}},[i("svg",{attrs:{width:"32px",height:"50px",fill:"#000000",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 32 50.036","enable-background":"new 0 0 100 100",xmlns:"http://www.w3.org/2000/svg","xmlns:bx":"https://boxy-svg.com"}},[i("circle",{staticStyle:{fill:"rgb(255, 255, 255)"},attrs:{cx:"16",cy:"21",r:"9.625"}}),i("g",{attrs:{transform:"matrix(0.440792, 0, 0, 0.440792, -6.039605, 4.79604)"}},[i("path",{staticStyle:{fill:"rgb(245, 219, 55)"},attrs:{d:"M50,5C32.459,5,18.239,19.22,18.239,36.761C18.239,54.302,50,95,50,95s31.761-40.698,31.761-58.239   C81.761,19.22,67.541,5,50,5z M50.183,56.702c-11.206,0-20.29-9.084-20.29-20.29c0-11.205,9.084-20.289,20.29-20.289   c11.206,0,20.289,9.084,20.289,20.289C70.473,47.618,61.389,56.702,50.183,56.702z"}})]),i("text",{staticStyle:{"white-space":"pre",fill:"rgb(51, 51, 51)","font-family":"Oswald","font-size":"14.3px","text-anchor":"middle"},attrs:{x:"15.993",y:"26.593"}})]),t._v(" number of girls' stories ")])]),i("div",{staticClass:"left-col"},[i("div",{staticClass:"search-form"},[i("div",{staticClass:"search"},[i("dropdown",{attrs:{title:"Filter stories by location",items:t.locations},on:{change:t.onLocationChange}})],1)]),i("p",{staticClass:"explain"},[t._v("Choose your location to see the stories nearest your area or click a pin on the map to find out more.")]),i("tags-component",{attrs:{tags:t.availableTags,values:t.tags},on:{input:t.onTagsChange,reset:t.resetFilter}})],1)]),t.itemsToShowInPopUp.length>0?i("popup",{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock",value:t.itemsToShowInPopUp.length>0,expression:"itemsToShowInPopUp.length > 0"}],attrs:{baseUrl:t.config.baseUrl,items:t.itemsToShowInPopUp,geoJson:t.geoJson,center:t.popupMapCenter},on:{close:function(e){t.itemsToShowInPopUp=[]},onTagsChange:t.onTagsChange}}):t._e()],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left-col"},[i("h1",{staticClass:"title"},[t._v("Girls’ rights in the UK")]),i("p",{staticClass:"text"},[t._v(" Across the UK, girls are saying loud and clear that their rights aren’t being met. From public sexual harassment to stereotyping and feeling unsafe at school and online, they’re facing the daily reality of gender inequality in the UK. Explore the map to discover the issues they’ve told us matter the most to them. ")])])}],a=(i("4de4"),i("4160"),i("c975"),i("d81d"),i("ac1f"),i("1276"),i("498a"),i("159b"),i("e11e")),r=i("369b"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tags-wrapper"},[i("h3",{staticClass:"title"},[t._v(" Filter stories by theme ")]),i("div",{staticClass:"tags"},[t._l(t.tags,(function(e,n){return i("button",{key:n,class:{"tag-active":t.selected.indexOf(e)>=0,tag:!0},attrs:{type:"button"},on:{click:function(i){return t.clickOnTag(e)}}},[t._v(" "+t._s(e)+" ")])})),i("button",{staticClass:"tag-reset tag",attrs:{type:"button"},on:{click:function(e){return t.$emit("reset")}}},[t._v("Reset")])],2)])},c=[],h=(i("a434"),i("d3b7"),i("ddb0"),{name:"tags",props:{values:Array,tags:Array},data:function(){return{selected:[]}},watch:{values:function(t){this.values&&(this.selected=this.values)},selected:function(){this.$emit("input",this.selected)}},mounted:function(){this.values&&(this.selected=this.values)},computed:{},methods:{clickOnTag:function(t){var e=this.selected.indexOf(t);e<0?this.selected.push(t.trim().toLowerCase()):this.selected.splice(e,1),this.$emitToWindow("tagClick",t)},selectAll:function(){var t=this;this.allSelected?this.selected=[]:(this.selected=[],this.tags.forEach((function(e){t.selected.push(e)})))}}}),u=h,d=(i("65f01"),i("2877")),p=Object(d["a"])(u,l,c,!1,null,null,null),f=p.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"popup-container"},[i("div",{staticClass:"close-btn",on:{click:t.close}},[i("span",[t._v("Back to map")]),i("button",[i("svg",{staticClass:"close",attrs:{width:"100%",viewBox:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("g",{attrs:{id:"Desktop_Story",transform:"translate(-715.000000, -33.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[i("g",{attrs:{id:"Overlay"}},[i("g",{attrs:{id:"Close",transform:"translate(706.000000, 24.000000)"}},[i("path",{attrs:{d:"M26.7037037,31 C27.1666667,31 27.6296296,30.8148148 27.962963,30.4814815 L30.4814815,27.962963 C30.8148148,27.6296296 31,27.1666667 31,26.7037037 C31,26.2407407 30.8148148,25.7777778 30.4814815,25.4444444 L25.037037,20 L30.4814815,14.5555556 C30.8148148,14.2222222 31,13.7592593 31,13.2962963 C31,12.8333333 30.8148148,12.3703704 30.4814815,12.037037 L27.962963,9.51851852 C27.6296296,9.18518519 27.1666667,9 26.7037037,9 C26.2407407,9 25.7777778,9.18518519 25.4444444,9.51851852 L20,14.962963 L14.5555556,9.51851852 C14.2222222,9.18518519 13.7592593,9 13.2962963,9 C12.8333333,9 12.3703704,9.18518519 12.037037,9.51851852 L9.51851852,12.037037 C9.18518519,12.3703704 9,12.8333333 9,13.2962963 C9,13.7592593 9.18518519,14.2222222 9.51851852,14.5555556 L14.962963,20 L9.51851852,25.4444444 C9.18518519,25.7777778 9,26.2407407 9,26.7037037 C9,27.1666667 9.18518519,27.6296296 9.51851852,27.962963 L12.037037,30.4814815 C12.3703704,30.8148148 12.8333333,31 13.2962963,31 C13.7592593,31 14.2222222,30.8148148 14.5555556,30.4814815 L20,25.037037 L25.4444444,30.4814815 C25.7777778,30.8148148 26.2407407,31 26.7037037,31 Z"}})])])])])])])]),i("div",{staticClass:"modal-map"},[i("div",{attrs:{id:"popup-map"}})]),t.item?i("section",{staticClass:"modal"},[i("div",[t.items.length>1?i("div",{staticClass:"transition"},[t.counter>0?i("button",{staticClass:"btn btn-orange btn-transition",on:{click:function(e){return t.setCounter(t.counter-1)}}},[i("span",[t._v("Previous")]),t.isMobile?t._e():i("span",[t._v(" story")])]):t._e(),i("span",{staticClass:"counter"},[t._v(t._s(t.counter+1)+" of "+t._s(t.items.length))]),t.counter<t.items.length-1?i("button",{staticClass:"btn btn-orange btn-transition",on:{click:function(e){return t.setCounter(t.counter+1)}}},[i("span",[t._v("Next")]),t.isMobile?t._e():i("span",[t._v(" story")])]):t._e()]):t._e(),i("div",{staticClass:"top"},[i("h1",{staticClass:"title"},[t._v(t._s(t.item.name)+", "+t._s(t.item.age))]),i("h3",{staticClass:"title"},[t._v(t._s(t.item.location))])]),t.item.youtubeURL?i("div",{staticClass:"video"},[i("div",{attrs:{name:"fade"}},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"play",on:{click:[function(e){t.visible=!t.visible},t.playVideo]}},[i("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 86 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("g",{attrs:{"stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("g",{attrs:{transform:"translate(-164.000000, -579.000000)"}},[i("g",{attrs:{transform:"translate(16.000000, 497.000000)"}},[i("g",{attrs:{transform:"translate(148.000000, 82.000000)"}},[i("circle",{attrs:{id:"Oval",fill:"#CF4B00",cx:"43",cy:"43",r:"43"}}),i("polygon",{attrs:{id:"Triangle",fill:"#FFFFFF",transform:"translate(45.500000, 42.500000) rotate(90.000000) translate(-45.500000, -42.500000) ",points:"45.5 31 60 54 31 54"}})])])])])])])]),i("youtube",{ref:"youtube",attrs:{"video-id":t.getId(t.item.youtubeURL),showinfo:"0"}})],1):t._e(),t.item.photoURL&&t.item.photoURL.length>0?i("img",{staticClass:"photo",attrs:{src:t.item.photoURL,alt:"photo"}}):t._e(),i("div",{staticClass:"text"},[i("div",{domProps:{innerHTML:t._s(t.itemText)}})]),t.item.callToAction&&t.item.callToAction.text?i("a",{staticClass:"btn btn-red",attrs:{href:t.item.callToAction.url,target:"_blank"}},[t._v(" "+t._s(t.item.callToAction.text)+" ")]):t._e(),i("div",{staticClass:"tags-wrapper"},[i("div",{staticClass:"tags"},t._l(t.themeTags,(function(e,n){return i("button",{key:n,staticClass:"tag tag-active",attrs:{type:"button"},on:{click:function(i){t.clickOnTag(e.trim().toLowerCase())}}},[t._v(t._s(e))])})),0)])])]):t._e()])])},m=[],v=(i("a9e3"),{name:"Popup",props:{baseUrl:String,items:Array,geoJson:Object,center:Array,itemIndex:{type:Number,default:0}},data:function(){return{map:void 0,visible:!0,counter:0,marker:void 0,item:void 0}},mounted:function(){this.setCounter(this.itemIndex),this.map=a["map"]("popup-map",{continuousWorld:!0,zoomControl:!1,dragging:!1,scrollWheelZoom:!1,static:!0}).setView(this.center?this.center:[54.904571379248125,-3.436872187499991],7.5),a["geoJson"](this.geoJson,{clickable:!0}).addTo(this.map),this.updateMarker()},watch:{center:function(){this.updateMarker()},items:function(){this.updateMarker()}},methods:{setCounter:function(t){this.counter=t,this.items[this.counter]&&(this.item=this.items[this.counter],this.$emitToWindow("storyOpen",this.item))},updateMarker:function(){this.map&&(this.marker&&this.map.removeLayer(this.marker),this.marker=a["marker"](this.center,{icon:a["divIcon"]({html:'<svg width="32px" fill="#000000" version="1.1" x="0px" y="0px" viewBox="0 0 32 50.036" enable-background="new 0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"><circle style="fill: rgb(255, 255, 255);" cx="16" cy="21" r="9.625"/><g transform="matrix(0.440792, 0, 0, 0.440792, -6.039605, 4.79604)"><path d="M50,5C32.459,5,18.239,19.22,18.239,36.761C18.239,54.302,50,95,50,95s31.761-40.698,31.761-58.239   C81.761,19.22,67.541,5,50,5z M50.183,56.702c-11.206,0-20.29-9.084-20.29-20.29c0-11.205,9.084-20.289,20.29-20.289   c11.206,0,20.289,9.084,20.289,20.289C70.473,47.618,61.389,56.702,50.183,56.702z" style="fill: rgb(245, 219, 55); fill-opacity: 1;"/></g><text x="15.993" y="26.593" style="white-space: pre; fill: rgb(51, 51, 51); font-size: 14.3px; text-anchor: middle;">'+this.items.length+"</text></svg>",iconSize:new a["Point"](32,50),iconAnchor:new a["Point"](16,50)})}).addTo(this.map),this.map.panTo(new a["LatLng"](this.center[0],this.center[1])))},getId:function(t){return this.$youtube.getIdFromUrl(t)},close:function(){this.$emit("close")},clickOnTag:function(t){this.$emit("onTagsChange",[t]),this.$emitToWindow("tagClick",t)}},computed:{isMobile:function(){return window.innerWidth<=768},player:function(){return this.$refs.youtube.player},itemText:function(){return this.lquo+this.item.text+this.rquo},lquo:function(){return'<div class="quo left-quo"><svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M13.43 460.275C2.834 450.34.848 445.705.583 431.005c0-6.755 0-55.362.132-108.207.133-52.845 0-100.128-.53-105.293-.53-7.152 0-12.847 2.517-24.502 5.828-26.754 9.933-41.19 13.244-46.223 1.855-2.782 5.563-9.404 8.212-14.834 14.039-27.813 44.766-57.613 75.493-73.109 23.972-12.185 48.74-20.132 76.288-24.502 19.204-3.046 25.43-1.854 33.508 6.225l5.43 5.43 1.06 28.873c1.192 32.448.397 39.6-5.828 49.401-5.562 8.742-7.02 9.669-21.72 12.98-12.98 3.046-25.562 8.476-42.78 18.41-7.284 4.238-9.139 6.224-14.171 14.833-3.179 5.43-7.682 14.966-10.066 21.191-3.841 10.33-4.238 12.847-4.768 31.522l-.662 20.131h36.82c36.819 0 36.951 0 46.752 3.576 9.536 3.444 9.8 3.709 13.244 10.86l3.444 7.418.132 87.413c.133 103.836.133 103.041-10.728 109.796l-6.622 4.106-89.135.397-89.135.397-7.284-7.02zM297.522 460.937c-9.933-9.271-12.847-16.026-12.847-28.873 0-5.827.265-52.183.53-103.041.397-50.859.133-98.671-.53-106.22-1.06-12.185-.794-15.496 1.855-28.078 5.827-27.681 10.463-43.575 14.039-49.005 1.854-2.914 5.562-9.403 8.079-14.436 2.516-5.033 8.344-14.304 12.98-20.397 29.667-40.13 79.598-67.414 139.595-76.685 19.072-2.913 23.84-1.986 31.654 6.49l5.695 6.093.927 31.124c1.06 34.965.53 38.541-7.416 49.402l-4.636 6.49-15.76 3.84c-11.92 2.914-19.073 5.563-29.668 11.125-7.55 4.106-15.496 8.61-17.483 9.934-5.033 3.576-13.244 17.747-18.94 32.978-4.502 11.655-4.767 13.774-5.562 32.052l-.795 19.601h74.964l9.668 3.576c9.271 3.444 9.801 3.841 12.715 10.331l3.046 6.622.265 88.076c.265 75.36.132 89.4-1.722 97.61l-1.987 9.537-8.079 4.106-8.079 3.973H304.145l-6.623-6.225z"/></svg></div>'},rquo:function(){return'<div class="quo right-quo"><svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M18.645 466.596c-4.105-.927-7.284-3.046-11.522-7.55l-5.695-6.092L.5 421.83c-1.06-34.965-.53-38.541 7.416-49.402l4.636-6.49 15.76-3.84c11.92-2.914 19.073-5.563 29.668-11.126 7.55-4.105 15.496-8.609 17.483-9.933 5.033-3.576 13.244-17.747 18.94-32.979 4.502-11.655 4.767-13.774 5.562-32.051l.795-19.602H25.797l-9.668-3.576c-9.271-3.443-9.8-3.84-12.715-10.33l-3.046-6.623-.265-88.075c-.265-75.36-.132-89.4 1.722-97.611l1.987-9.536 8.079-4.106 8.079-3.973h175.885l6.623 6.225c9.933 9.27 12.847 16.026 12.847 28.873 0 5.827-.265 52.183-.53 103.041-.397 50.859-.132 98.67.53 106.22 1.06 12.185.794 15.496-1.854 28.078-5.828 27.681-10.464 43.574-14.04 49.005-1.854 2.913-5.562 9.403-8.079 14.436-10.198 20.131-26.886 39.203-49.534 56.421-25.296 19.204-63.175 34.436-100.392 40.263-6.49 1.06-13.112 2.12-14.57 2.384-1.456.132-5.164-.132-8.21-.927zM302.34 466.199c-4.37-1.192-8.079-3.312-11.787-7.02l-5.43-5.43-1.06-28.873c-1.192-32.449-.397-39.6 5.828-49.402 5.562-8.74 7.02-9.668 21.72-12.98 12.98-3.045 25.562-8.475 42.78-18.409 7.284-4.238 9.139-6.225 14.171-14.833 3.18-5.43 7.682-14.967 10.066-21.192 3.841-10.33 4.238-12.847 4.768-31.389l.662-20.264H347.24c-36.82 0-36.952 0-46.753-3.576-9.536-3.443-9.8-3.708-13.244-10.86l-3.444-7.417-.132-87.413c-.133-103.836-.133-103.041 10.728-109.796l6.622-4.106 89.135-.397 89.135-.398 7.284 7.02c10.596 9.933 12.582 14.569 12.847 29.27 0 6.755 0 55.362-.132 108.207-.133 52.845 0 100.26.53 105.293.53 7.152 0 12.847-2.517 24.502-5.828 26.754-9.933 41.19-13.244 46.223-1.855 2.781-5.563 9.404-8.212 14.834-14.039 27.813-44.766 57.613-75.493 73.109-23.972 12.185-48.74 20.131-76.288 24.502-12.847 1.987-16.29 2.119-21.72.795z"/></svg></div>'},themeTags:function(){return this.item?this.item.themeTags.split(","):[]}}}),w=v,b=(i("4f6f"),i("ec61"),Object(d["a"])(w,g,m,!1,null,"293ed854",null)),x=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown"},[i("a",{ref:"dropdownButton",staticClass:"input dropdown-button",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.isShowing=!t.isShowing}}},[t._v(t._s(t.value)+" "),i("svg",{class:{down:!t.isShowing},attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"}},[i("polygon",{attrs:{points:"7.302 12.227 9.578 14.546 16 8 9.578 1.454 7.302 3.772 9.841 6.361 0 6.361 0 9.64 9.841 9.64",fill:"#000000","fill-rule":"evenodd"}})])]),i("ul",{class:{show:t.isShowing}},[i("li",{class:{active:-1==t.selected}},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.setIndex(-1)}}},[t._v(" Any ")])]),t._l(t.items,(function(e,n){return i("li",{key:n,class:{active:t.selected==n}},[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.setIndex(n)}}},[t._v(" "+t._s(e)+" ")])])}))],2)])},C=[],k={name:"Dropdown",props:{title:String,items:Array},data:function(){return{isShowing:!1,selected:void 0}},computed:{value:function(){return this.selected>=0&&this.items[this.selected]?this.items[this.selected]:this.title}},mounted:function(){var t=this;document.body.addEventListener("click",(function(e){e.target!=t.$refs.dropdownButton&&(t.isShowing=!1)}))},methods:{setIndex:function(t){this.selected=t,this.isShowing=!1,this.$emit("change",this.items[this.selected])}}},T=k,_=(i("4e92"),Object(d["a"])(T,y,C,!1,null,"1fca5462",null)),L=_.exports,S={name:"app",components:{popup:x,"tags-component":f,dropdown:L},data:function(){return{config:void 0,geoJson:void 0,map:null,tags:[],items:[],itemsToShow:[],itemsToShowInPopUp:[],popupMapCenter:void 0,markersToShow:[],geoJsonLayer:void 0,showModalMap:!1,autocompleteResults:[]}},watch:{itemsToShow:function(){this.showMarkers()}},computed:{zoomLevel:function(){return window.innerWidth<768?4.8:5.8},availableTags:function(){var t=[];return this.items.length>0&&this.items.forEach((function(e){if(e&&e.themeTags){var i=e.themeTags.split(",");i.forEach((function(e){e=e.trim().toLowerCase(),t.indexOf(e)<0&&t.push(e)}))}})),t},locations:function(){var t=[];return this.items.length>0&&this.items.forEach((function(e){t.indexOf(e.location)<0&&t.push(e.location)})),t}},mounted:function(){this.config=window.PGRConfig,this.config&&this.init()},methods:{onLocationChange:function(t){this.location=t,this.$emitToWindow("locationSelect",t),this.filter()},onTagsChange:function(t){this.itemsToShowInPopUp=[],this.tags=t,this.filter()},filter:function(){var t=this;this.itemsToShow=this.items.filter((function(e){var i=!0;return i=!t.location||!t.location.length||!(!e.location||e.location!=t.location),i&&t.filterItemByTags(e)}))},filterItemByTags:function(t){var e=this;if(this.tags&&this.tags.length>0){var i=!1,n=t.themeTags.split(",");return n.forEach((function(t){t=t.trim().toLowerCase(),e.tags.indexOf(t)>=0&&(i=!0)})),i}return!0},resetFilter:function(){this.tags=[],this.location=void 0,this.$children[0].setIndex(-1)},removeMarkers:function(){for(var t in this.markersToShow)this.map.removeLayer(this.markersToShow[t]);this.markersToShow=[]},addMarkers:function(){for(var t,e,i=this,n=[],s=[],o=0;o<this.itemsToShow.length;o++)e=this.itemsToShow[o],n=[e.coordinates.lat,e.coordinates.lng],s.indexOf(n)<0&&s.push(n);s.forEach((function(e,n){var s=a["divIcon"]({html:'<svg width="32px" fill="#000000" version="1.1" x="0px" y="0px" viewBox="0 0 32 50.036" enable-background="new 0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com"><circle style="fill: rgb(255, 255, 255);" cx="16" cy="21" r="9.625"/><g transform="matrix(0.440792, 0, 0, 0.440792, -6.039605, 4.79604)"><path d="M50,5C32.459,5,18.239,19.22,18.239,36.761C18.239,54.302,50,95,50,95s31.761-40.698,31.761-58.239   C81.761,19.22,67.541,5,50,5z M50.183,56.702c-11.206,0-20.29-9.084-20.29-20.29c0-11.205,9.084-20.289,20.29-20.289   c11.206,0,20.289,9.084,20.289,20.289C70.473,47.618,61.389,56.702,50.183,56.702z" style="fill: rgb(245, 219, 55);"/></g><text x="15.993" y="26.593" style="white-space: pre; fill: rgb(51, 51, 51); font-size: 14.3px; text-anchor: middle;">'+i.getItemsByLatLng(e[0],e[1]).length+"</text></svg>",iconSize:new a["Point"](32,50),iconAnchor:new a["Point"](16,50)});t=a["marker"](e,{icon:s}).on("click",(function(t){i.onMarkerClick(t)})),i.markersToShow.push(t),t.addTo(i.map)}))},onMarkerClick:function(t){t.latlng.lat&&t.latlng.lng&&(this.itemsToShowInPopUp=this.getItemsByLatLng(t.latlng.lat,t.latlng.lng),this.popupMapCenter=[t.latlng.lat,t.latlng.lng],this.$emitToWindow("markerClick",{lat:t.latlng.lat,lng:t.latlng.lng}))},showMarkers:function(){if(!this.map)return!1;this.removeMarkers(),this.itemsToShow.length>0&&this.addMarkers()},getItemsByLatLng:function(t,e){var i=[];return this.itemsToShow.forEach((function(n,s){n.coordinates.lat==t&&n.coordinates.lng==e&&i.push(n)})),i},init:function(){var t=this;this.get(this.config.geoJSONPath,(function(e){t.geoJson=t.validateJsonString(e),t.geoJson&&(t.initMap(),t.loadData(),t.showMarkers())}))},loadData:function(){var t=this;this.get(this.config.CSVPath,(function(e){var i,n=r["parse"](e),s=[];if(n){for(var o=1;o<n.data.length;o++){i=n.data[o];var a=parseFloat(+i[4]),l=parseFloat(+i[5]);isNaN(a)||isNaN(l)||s.push({name:i[0],age:i[1],location:i[2],region:i[3],coordinates:{lat:parseFloat(+i[4]),lng:parseFloat(+i[5])},themeTags:i[6],photoURL:i[7],youtubeURL:i[8],text:i[9],callToAction:{url:i[10],text:i[11]}})}t.items=s,t.itemsToShow=t.items}}))},initMap:function(){var t=this;this.map=a["map"]("map",{zoomLevel:this.zoomLevel,continuousWorld:!0,zoomControl:!1,dragging:!1,touchZoom:!1,doubleClickZoom:!1,boxZoom:!1,tap:!1,scrollWheelZoom:!1,static:!0}),this.map.setView([54.904571379248125,-3.436872187499991],this.zoomLevel),this.geoJsonLayer=a["geoJson"](this.geoJson,{clickable:!0}).addTo(this.map),this.map.fitBounds(this.geoJsonLayer.getBounds()),window.addEventListener("resize",(function(){t.map.fitBounds(t.geoJsonLayer.getBounds())}))},shuffle:function(t){var e,i,n=t.length;while(0!==n)i=Math.floor(Math.random()*n),n-=1,e=t[n],t[n]=t[i],t[i]=e;return t},get:function(t,e){var i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&200===i.status&&e(i.responseText)},i.open("GET",t,!0),i.send()},validateJsonString:function(t){var e=!1;try{e=JSON.parse(t)}catch(i){return!1}return e}}},M=S,O=(i("034f"),Object(d["a"])(M,s,o,!1,null,null,null)),P=O.exports,I=i("e0ec"),z=i.n(I),F=i("82de");n["a"].config.productionTip=!1,n["a"].use(z.a),n["a"].use(F["a"]),n["a"].prototype.$emitToWindow=function(t,e){if(window.PGRConfig&&window.PGRConfig.events){var i=window.PGRConfig.events[t];i&&setTimeout((function(){i(e)}))}},new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"65f01":function(t,e,i){"use strict";var n=i("f725"),s=i.n(n);s.a},"85ec":function(t,e,i){},ec61:function(t,e,i){"use strict";var n=i("155b"),s=i.n(n);s.a},f725:function(t,e,i){},f7f0:function(t,e,i){}});
//# sourceMappingURL=app.js.map
