(window["webpackJsonpgoit-react-hw-03-02"]=window["webpackJsonpgoit-react-hw-03-02"]||[]).push([[0],{28:function(e,t,a){e.exports={app:"App_app__2CbUm"}},29:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__VqdiJ"}},3:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__2PoJN",stats:"PhotoCard_stats__1o768",statsItem:"PhotoCard_statsItem__GOVxS",fullscreenButton:"PhotoCard_fullscreenButton__1cDGE",galleryItem:"PhotoCard_galleryItem__2Drbi"}},33:function(e,t,a){e.exports=a(61)},5:function(e,t,a){e.exports={gallery:"Gallery_gallery__3gv1H",button:"Gallery_button__10MxW",spinner:"Gallery_spinner__2d8KM","sk-bouncedelay":"Gallery_sk-bouncedelay__cmb6r",bounce1:"Gallery_bounce1__1lsBy",bounce2:"Gallery_bounce2__2VAe8"}},6:function(e,t,a){e.exports={lightbox:"Modal_lightbox__2S8Fi",lightbox__overlay:"Modal_lightbox__overlay__3Ycmv",lightbox__content:"Modal_lightbox__content__10gbs",lightbox___image:"Modal_lightbox___image__3aCBw",lightbox__button:"Modal_lightbox__button__3bcdG"}},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),c=a.n(o),l=a(9),s=a(4),i=a.n(s),u=a(16),m=a(15),g=a(10),p=a(11),d=a(13),b=a(12),h=a(14),_=a(17),y=(a(39),a(28)),f=a.n(y),v=a(29),E=a.n(v);var O=function(e){var t=e.execOnSubmit;return r.a.createElement("form",{className:E.a.searchForm,onSubmit:t},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images..."}))},w=a(3),x=a.n(w);var j=function(e){var t=e.galleryItem,a=t.webformatURL,n=t.largeImageURL,o=t.likes,c=t.views,l=t.comments,s=t.downloads,i=t.type,u=t.tags,m=e.showingModal,g=e.toToggleModal;return r.a.createElement("li",{className:x.a.galleryItem},r.a.createElement("div",{className:x.a.photoCard},r.a.createElement("img",{src:a,alt:"".concat(i," with tags: ").concat(u)}),r.a.createElement("div",{className:x.a.stats},r.a.createElement("p",{className:x.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),o),r.a.createElement("p",{className:x.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),c),r.a.createElement("p",{className:x.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),l),r.a.createElement("p",{className:x.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),!m&&r.a.createElement("button",{type:"button",className:x.a.fullscreenButton},r.a.createElement("i",{className:"material-icons",onClick:function(e){return g(e,n)}},"zoom_out_map"))))},M=a(5),k=a.n(M);var N=function(e){var t=e.showingModal,a=e.galleryItems,n=e.isLoading,o=e.toLoadMore,c=e.toToggleModal;return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:k.a.gallery},a.map(function(e){return r.a.createElement(j,{key:e.id,galleryItem:e,toToggleModal:c,showingModal:t})})),r.a.createElement("button",{className:k.a.button,type:"button",onClick:o,name:"LoadMore",disabled:n},n?"Loading ":"Load more",n?r.a.createElement("span",{className:k.a.spinner},r.a.createElement("div",{className:k.a.bounce1}),r.a.createElement("div",{className:k.a.bounce2}),r.a.createElement("div",{className:k.a.bounce3})):"")))},P=a(6),I=a.n(P),C=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleEscKey=function(e){27===e.keyCode&&a.props.toToggleModal(e,"")},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEscKey,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEscKey,!1)}},{key:"render",value:function(){var e=this.props,t=e.toToggleModal,a=e.srcURL;return r.a.createElement("div",{className:I.a.lightbox},r.a.createElement("div",{className:I.a.lightbox__overlay}),r.a.createElement("div",{className:I.a.lightbox__content,onClick:function(e){return t(e,"")}},r.a.createElement("img",{className:I.a.lightbox___image,src:a,alt:""})),r.a.createElement("button",{type:"button",className:I.a.lightbox__button},r.a.createElement("i",{className:"material-icons",onClick:function(e){return t(e,"")}},"close")))}}]),t}(n.Component);C.defaultProps={srcURL:""};var S=C,L=a(30),D=a.n(L);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T={baseUrl:"https://pixabay.com/api/",key:"13247929-24969c80cab3ee5b7c0b2131a",imageType:"photo",orientation:"horizontal",q:"",page:1,perPage:12},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{q:"",page:1},t=q({},T,{},e),a="".concat(t.baseUrl,"?")+"key=".concat(t.key,"&&")+"image_type=".concat(t.imageType,"&&")+"orientation=".concat(t.orientation,"&&")+"per_page=".concat(t.perPage,"&&")+"q=".concat(t.q,"&&")+"page=".concat(t.page),n=D.a.get(a).then(function(e){return e.data.hits}).catch(function(e){return console.log("err",e)});return n};function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var B={galleryItems:[],page:1,q:"",loading:!1,showingModal:!1,largeImageURL:""},F=function(e){function t(){var e;return Object(g.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).handleLoadMoreClick=Object(m.a)(i.a.mark(function t(){var a,n,r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(function(e,t){return{loading:!0,page:e.page+1}});case 2:return a=e.state,n=a.q,r=a.page,t.next=5,G({q:n,page:r});case 5:return o=t.sent,t.next=8,e.setState(function(e,t){return{loading:!1,galleryItems:[].concat(Object(u.a)(e.galleryItems),Object(u.a)(o))}});case 8:window.scrollBy(0,window.innerHeight-100);case 9:case"end":return t.stop()}},t)})),e.handleSearchSubmit=function(){var t=Object(m.a)(i.a.mark(function t(a){var n,r,o,c,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target[0].value,a.target[0].value="",!(n.length<3)){t.next=6;break}return _.b.warn("At least 3 characters to start search !",{autoClose:5e3}),t.abrupt("return");case 6:return t.next=8,e.setState({q:n,loading:!0,page:1});case 8:return r=e.state,o=r.q,c=r.page,t.next=11,G({q:o,page:c});case 11:l=t.sent,e.setState({galleryItems:l,loading:!1});case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.toggleModal=function(){var t=Object(m.a)(i.a.mark(function t(a,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a.target===a.currentTarget||a instanceof KeyboardEvent)){t.next=3;break}return t.next=3,e.setState(function(e){return{showingModal:!e.showingModal,largeImageURL:n}});case 3:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(l.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},B),e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.galleryItems,a=e.loading,n=e.showingModal,o=e.largeImageURL;return r.a.createElement("div",{className:f.a.app},r.a.createElement(O,{execOnSubmit:this.handleSearchSubmit}),void 0===t?r.a.createElement("p",null,"Network error ..."):r.a.createElement(N,{galleryItems:t,isLoading:a,toLoadMore:this.handleLoadMoreClick,toToggleModal:this.toggleModal,showingModal:n}),n&&r.a.createElement(S,{toToggleModal:this.toggleModal,srcURL:o}),r.a.createElement(_.a,null))}}]),t}(n.Component);c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a9d99f3d.chunk.js.map