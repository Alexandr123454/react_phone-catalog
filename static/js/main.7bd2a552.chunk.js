(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(22),r=t.n(c),l=t(6),i=t(7),o=(t(30),function(){return s.a.createElement("div",null,"Bye World")}),m=t(4),u=t.n(m),d=t(8),v=t(11),p=t(12),E=t(14),h=t(13),N=t(15),g=function(){var e=Object(d.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static/api/phones.json",e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(u.a.mark(function e(a){var t,n,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(a,".json"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),b=function(){return s.a.createElement("section",{className:"animation"},s.a.createElement("div",{className:"cssload-loader"},s.a.createElement("div",{className:"cssload-top"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-bottom"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-left"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"}))))))),s.a.createElement("div",{className:"cssload-right"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"},s.a.createElement("div",{className:"cssload-square"})))))))))},q=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(s)))).state={currentPhone:[],currentImage:0,isLoaded:!1,isLoading:!1},t.componentDidMount=Object(d.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,f(t.props.phone.id);case 3:a=e.sent,t.setState({currentPhone:a,isLoaded:!0,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t.handleChangePhoto=function(e){t.setState({currentImage:e})},t}return Object(N.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.currentPhone,n=a.isLoading,c=a.isLoaded,r=a.currentImage;return console.log(t),c?s.a.createElement("main",null,s.a.createElement("div",{className:"phone-details_name"},t.name),s.a.createElement("article",{className:"phone-details_header"},s.a.createElement("div",{className:"phone-details_images"},t.images.map(function(a,n){return s.a.createElement("img",{name:a,onClick:function(){return e.handleChangePhoto(n)},src:a,alt:t.name,className:"phone-details_images-img"})})),s.a.createElement("div",null,s.a.createElement("img",{src:t.images[r],alt:t.name,className:"phone-details_images-current-img"})))):s.a.createElement("div",{className:"load-sign"},n?s.a.createElement(b,null):"")}}]),a}(s.a.Component),j=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(s)))).state={phones:[],isLoaded:!1,isLoading:!1},t.componentDidMount=Object(d.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,g();case 3:a=e.sent,t.setState({phones:a,isLoaded:!0,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t}return Object(N.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.state,a=e.phones,t=e.isLoading,n=e.isLoaded,c=this.props.id;return n?c?s.a.createElement(q,{phone:a.find(function(e){return e.id===c})}):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"catalog"},a.map(function(e){return s.a.createElement("div",{className:"catalog_phone",key:e.id},s.a.createElement(l.b,{to:"/phones/".concat(e.id)},s.a.createElement("img",{className:"catalog_phone-img",src:e.imageUrl,alt:""}),s.a.createElement("div",{className:"catalog_phone-name"},e.name)))}))):s.a.createElement("div",{className:"load-sign"},t?s.a.createElement(b,null):"")}}]),a}(s.a.Component),k=function(){return s.a.createElement("div",null,"Aleksandr Aleksandrov")},w=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("nav",null,s.a.createElement("ul",{className:"nav-list"},s.a.createElement("li",null,s.a.createElement(l.b,{to:"/",exact:!0},s.a.createElement("div",{className:"logo-size"},s.a.createElement("div",{className:"logo"})))),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/cart"},s.a.createElement("div",{className:"cart"}))),s.a.createElement("li",null,s.a.createElement(l.b,{className:"nav-list-link",activeClassName:"active-nav_link",to:"/phones"},"Phone Catalog")),s.a.createElement("li",null,s.a.createElement(l.b,{className:"nav-list-link",activeClassName:"active-nav_link",to:"/contacts"},"Contacts")))),s.a.createElement(i.a,{exact:!0,path:"/",render:function(){return s.a.createElement(o,null)}}),s.a.createElement(i.a,{exact:!0,path:"/phones/:id?",render:function(e){var a=e.match;return s.a.createElement(j,{id:a.params.id})}}),s.a.createElement(i.a,{path:"/contacts",render:function(){return s.a.createElement(k,null)}}))};r.a.render(s.a.createElement(l.a,null,s.a.createElement(w,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7bd2a552.chunk.js.map