(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,a,t){e.exports=t(57)},47:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(35),l=t.n(s),r=t(4),i=t(10),o=t(19),m=t(6),d=t(8),u=t(12),h=t(11),p=t(13),E=t(17),f=(t(47),function(){return c.a.createElement("div",{className:"home-page"},c.a.createElement("img",{className:"home-page-img",width:"100%",src:"https://images.pexels.com/photos/1262971/pexels-photo-1262971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}),c.a.createElement("p",{className:"home-page-sign"},"phones for everyone"))}),g=t(15),v=t.n(g),N=t(18),b=function(){var e=Object(N.a)(v.a.mark(function e(){var a,t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/phone-catalogue-static/api/phones.json",e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(N.a)(v.a.mark(function e(a){var t,n,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(a,".json"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),k=function(){return c.a.createElement("section",{className:"animation"},c.a.createElement("div",{className:"cssload-loader"},c.a.createElement("div",{className:"cssload-top"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-bottom"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-left"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"}))))))),c.a.createElement("div",{className:"cssload-right"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"},c.a.createElement("div",{className:"cssload-square"})))))))))},y=t(40),w=t(61),P=function(e){var a=e.image,t=c.a.useState(0),n=Object(y.a)(t,2),s=n[0],l=n[1];return c.a.createElement(w.a,{style:{height:"60vh",width:"60vw"},index:s,onRequestChange:function(e){l(e)}},a.map(function(e){return c.a.createElement(w.b,{objectFit:"contain",key:e,src:e})}))},C=function(e){var a=e.currentPhone;return c.a.createElement("section",{className:"section-specifications"},c.a.createElement("div",{className:"specifications_sign"},"Specifications"),c.a.createElement("div",{className:"specifications"},c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Hardware"),c.a.createElement("p",null,"Accelerometer: ",a.hardware.accelerometer?"Yes":"No"),c.a.createElement("p",null,"Audio Jack: ",a.hardware.audioJack),c.a.createElement("p",null,"Cpu: ",a.hardware.cpu),c.a.createElement("p",null,"Fm-Radio: ",a.hardware.fmRadio?"Yes":"No"),c.a.createElement("p",null,"Physical Keyboard: ",a.hardware.physicalKeyboard?"Yes":"No"),c.a.createElement("p",null,"Usb: ",a.hardware.usb)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Connectivity"),c.a.createElement("p",null,"Bluetooth: ",a.connectivity.bluetooth),c.a.createElement("p",null,"Cell: ",a.connectivity.cell),c.a.createElement("p",null,"Gps: ",a.connectivity.gps?"Yes":"No"),c.a.createElement("p",null,"Infrared: ",a.connectivity.infrared?"Yes":"No"),c.a.createElement("p",null,"Wifi: ",a.connectivity.wifi)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Battary"),c.a.createElement("p",null,"Stand by Time: ",a.battery.standbyTime),c.a.createElement("p",null,"Talking Time: ",a.battery.talkTime),c.a.createElement("p",null,"Type: ",a.battery.type)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Display"),c.a.createElement("p",null,"Screen Resolution: ",a.display.screenResolution),c.a.createElement("p",null,"Screen Size: ",a.display.screenSize),c.a.createElement("p",null,"Touc hScreen: ",a.display.touchScreen?"Yes":"No")),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Size and weight "),c.a.createElement("p",null,a.sizeAndWeight.dimensions.join(", ")),c.a.createElement("p",null,"Weight: ",a.sizeAndWeight.weight)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Operating system"),c.a.createElement("p",null,"Os: ",a.android.os),c.a.createElement("p",null,"Ui: ",a.android.ui)),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Camera"),c.a.createElement("p",null,"Primary: ",a.camera.primary),c.a.createElement("p",null,"Features: ",a.camera.features.join(", "))),c.a.createElement("div",{className:"specifications_details"},c.a.createElement("p",{className:"specifications_details-sign"},"Storage"),c.a.createElement("p",null,"Flash: ",a.storage.flash," "),c.a.createElement("p",null,"Ram: ",a.storage.ram))))},j=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={currentPhone:[],currentImage:0,isLoaded:!1,isLoading:!1},t.componentDidMount=Object(N.a)(v.a.mark(function e(){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.phone,t.setState({isLoading:!0}),e.next=4,_(a.id);case 4:n=e.sent,t.setState({currentPhone:n,isLoaded:!0,isLoading:!1});case 6:case"end":return e.stop()}},e)})),t.handleChangePhoto=function(e){t.setState({currentImage:e})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state,a=e.currentPhone,t=e.isLoading,n=e.isLoaded,s=this.props.handleClickAddPhoneToCart;return n?c.a.createElement("main",null,c.a.createElement("section",{className:"phone-details"},c.a.createElement("button",{className:"phone-details_add",onClick:function(){return s(a)}},"Add to Cart"),c.a.createElement(r.b,{className:"cart-phones_link-back-phone-details",to:"/phones"},"Go back to catalog")),c.a.createElement("p",{className:"phone-details_name"},a.name),c.a.createElement("div",{className:"phone-details_header"},c.a.createElement("div",{className:"phone-details_images"},c.a.createElement(P,{image:a.images}))),c.a.createElement("div",{className:"phone-details-wrapper_description"},c.a.createElement("div",{className:"phone-details_description",title:a.description},a.description)),c.a.createElement(C,{currentPhone:a})):c.a.createElement("div",{className:"load-sign"},t?c.a.createElement(k,null):"")}}]),a}(c.a.Component),x=function(e){var a=e.handleChangeFilter,t=e.visiblePhones;return c.a.createElement("div",{className:"search_list"},c.a.createElement("input",{className:"search_field",type:"text",name:"search-field",value:t.name,onChange:a,placeholder:"Search phone"}))},O=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={phones:[],visiblePhones:[],isLoaded:!1,isLoading:!1,direction:1,valueForSearch:""},t.componentDidMount=Object(N.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.next=3,b();case 3:a=e.sent,t.setState({phones:a,visiblePhones:a,isLoaded:!0,isLoading:!1});case 5:case"end":return e.stop()}},e)})),t.debounce=function(e,a){var t=0;return function(){for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];clearTimeout(t),t=setTimeout(function(){return e.apply(void 0,c)},a)}},t.handleChangeFilter=function(e){var a=e.target.value;t.setState({valueForSearch:a.toLowerCase()})},t.wrapper=t.debounce(t.handleChangeFilter,1e3),t.getFilteredPhones=function(e){return t.state.visiblePhones.filter(function(a){return a.name.toLowerCase().includes(e)})},t.getSortedBy=function(e){switch(e.target.value){case"age":return t.setState(function(e){return{visiblePhones:Object(i.a)(e.phones).sort(function(e,a){return e.age-a.age})}});case"alphabet":return t.setState(function(e){return{visiblePhones:Object(i.a)(e.phones).sort(function(e,a){return e.name.localeCompare(a.name)})}});default:return t.setState(function(e){return{visiblePhones:e.phones}})}},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.valueForSearch,n=a.isLoading,s=a.isLoaded,l=this.props.id,i=this.getFilteredPhones(t);return s?l?c.a.createElement(j,{phone:i.find(function(e){return e.id===l}),handleClickAddPhoneToCart:this.props.handleClickAddPhoneToCart}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("div",{className:"search_field-grid"},c.a.createElement(x,{className:"search_field",visiblePhones:i,handleChangeFilter:this.handleChangeFilter})),c.a.createElement("div",{className:"catalog"},i.map(function(a){return c.a.createElement("div",{className:"catalog_phone",key:a.id},c.a.createElement("section",{className:"catalog_phone-add-grid"},c.a.createElement("button",{className:"catalog_phone-add",onClick:function(){return e.props.handleClickAddPhoneToCart(a)}},"Add to Cart")),c.a.createElement(r.c,{className:"catalog_phone-text-decoration",to:"/phones/".concat(a.id)},c.a.createElement("img",{className:"catalog_phone-img",src:a.imageUrl,alt:a.name}),c.a.createElement("div",{className:"catalog_phone-name"},a.name)))})))):c.a.createElement("div",{className:"load-sign"},n?c.a.createElement(k,null):"")}}]),a}(c.a.Component),S=function(){return c.a.createElement("div",{className:"error-message"},c.a.createElement("div",{className:"error-image"}),c.a.createElement(r.b,{to:"/",className:"back-to-home-error-button"},"Back to Home Page"))},A=function(){return c.a.createElement("section",{className:"footer-bottom-x"},c.a.createElement("div",{className:"footer-size"},c.a.createElement("div",{className:"footer"},c.a.createElement("iframe",{src:"//ntmaker.gfto.ru/newneontext/?image_height=100&image_width=200&image_font_shadow_width=30&image_font_size=30&image_background_color=000000&image_text_color=FF0000&image_font_shadow_color=F7406B&image_url=&image_text=Phone Catalog&image_font_family=CocaCola&",frameborder:"no",scrolling:"no",width:"200",height:"100"})),c.a.createElement("div",{className:"footer-list-links"},c.a.createElement("div",null,c.a.createElement(r.b,{className:"footer-link",to:"/",exact:!0},"Home Page")," ",c.a.createElement("br",null),c.a.createElement(r.b,{className:"footer-link",to:"/phones"},"Phone Catalog")),c.a.createElement("div",null,c.a.createElement(r.b,{className:"footer-link",to:"/cart"},"Cart")," ",c.a.createElement("br",null),c.a.createElement(r.b,{className:"footer-link",to:"/contacts"},"Contacts")))))},q=function(e){var a=e.selectedPhones,t=e.deletePhone,n=e.increaseAmount,s=e.decreaseAmount;return c.a.createElement("div",null,c.a.createElement("div",{className:"cart-phones"},c.a.createElement(r.b,{className:"cart-phones_link-back",to:"/phones"},"Go back to catalog"),c.a.createElement("p",{className:"cart-phone_sign"},"There are"," ",a.length," ",a.length>=2?"phones":"phone"," ","in your cart")),a.map(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"cart-phone_table"},c.a.createElement(r.b,{className:"catalog_phone-text-decoration",to:"/phones/".concat(e.id)},c.a.createElement("img",{src:e.image,alt:e.name,className:"cart-phone_table-img"}),c.a.createElement("p",{className:"cart-phone_table-name"},e.name)),c.a.createElement("div",{className:"cart-phone_table-grid"},c.a.createElement("button",{className:"cart-phone_table-amount-btn",onClick:function(){return n(e.id)}},"+"),c.a.createElement("p",{className:"cart-phone_table-amount-sign"},"Amount:"," ",e.amount),c.a.createElement("button",{className:"cart-phone_table-amount-btn",onClick:function(){return s(e.id)}},"-"),c.a.createElement("div",null,c.a.createElement("button",{className:"cart-phone_table-remove-btn",onClick:function(){return t(e.id)}},"Remove from cart")))))}))},F=function(){return c.a.createElement("div",{className:"contacts-details "},c.a.createElement("h2",null,"Alexandr Alexandrov"),c.a.createElement("p",null,"FrontEnd Developer"),c.a.createElement("p",null,"Dnepr, Ukraine"),c.a.createElement("p",null,"+38(099)-647-26-71 (Telegram, Viber)"),c.a.createElement("p",null,"Email: alexandrov6927@gmail.com"),c.a.createElement("p",null,"Skype: alexandrov6927"),c.a.createElement("p",null,c.a.createElement("a",{className:"contacts-link",href:"https://www.linkedin.com/in/aleksandr-aleksandrov-1040a8116/"},"LinkedIn")),c.a.createElement("p",null,c.a.createElement("a",{className:"contacts-link",href:"https://github.com/Alexandr123454?tab=repositories"},"GitHub")))},T=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(c)))).state={selectedPhones:[]},t.handleClickAddPhoneToCart=function(e){t.setState(function(a){return{selectedPhones:a.selectedPhones.find(function(a){return a.id===e.id})?a.selectedPhones.map(function(a){return a.id===e.id?Object(o.a)({},a,{amount:a.amount+1}):a}):[].concat(Object(i.a)(a.selectedPhones),[{name:e.name,id:e.id,image:e.imageUrl||e.images[0],amount:1}])}})},t.deletePhone=function(e){t.setState(function(a){return{selectedPhones:a.selectedPhones.filter(function(a){return a.id!==e})}})},t.increaseAmount=function(e){t.setState(function(a){return{selectedPhones:a.selectedPhones.map(function(a){return a.id===e?Object(o.a)({},a,{amount:a.amount+1}):Object(o.a)({},a)})}})},t.decreaseAmount=function(e){t.setState(function(a){return{selectedPhones:a.selectedPhones.map(function(a){return a.id===e&&a.amount>1?Object(o.a)({},a,{amount:a.amount-1}):Object(o.a)({},a)})}})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state.selectedPhones;return c.a.createElement("div",{className:"app"},c.a.createElement("nav",{className:"header"},c.a.createElement("ul",{className:"nav-list"},c.a.createElement("li",null,c.a.createElement(r.c,{to:"/",exact:!0,className:"nav-list-link-logo"},c.a.createElement("iframe",{className:"iframe-link",src:"//ntmaker.gfto.ru/newneontext/?image_height=100&image_width=200&image_font_shadow_width=30&image_font_size=30&image_background_color=000000&image_text_color=FF0000&image_font_shadow_color=F7406B&image_url=&image_text=Phone Catalog&image_font_family=CocaCola&",frameborder:"no",scrolling:"no",width:"200",height:"100"}))),c.a.createElement("div",{className:"nav-list-header-links"},c.a.createElement("li",null,c.a.createElement(r.c,{to:"/",exact:!0,className:"nav-list-link"},c.a.createElement("p",{className:"home-page-link"},"Home Page"))),c.a.createElement("li",null,c.a.createElement(r.c,{className:"nav-list-link",to:"/phones"},c.a.createElement("p",{className:"phone-catalog"},"Phone Catalog"))),c.a.createElement("li",null,c.a.createElement(r.c,{to:"/cart",className:"nav-list-link"},c.a.createElement("p",{className:"cart"},"Cart",c.a.createElement("sup",{className:0===a.length?"cart-amount-none":"cart-amount"},a.length," ")))),c.a.createElement("li",null,c.a.createElement(r.c,{to:"/contacts",className:"nav-list-link"},c.a.createElement("p",{className:"contacts"},"Contacts")))))),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return c.a.createElement(f,null)}}),c.a.createElement(E.a,{exact:!0,path:"/phones/:id?",render:function(a){var t=a.match;return c.a.createElement(O,{handleClickAddPhoneToCart:e.handleClickAddPhoneToCart,deletePhone:e.deletePhone,id:t.params.id})}}),c.a.createElement(E.a,{path:"/cart",render:function(){return c.a.createElement(q,{selectedPhones:a,deletePhone:e.deletePhone,increaseAmount:e.increaseAmount,decreaseAmount:e.decreaseAmount})}}),c.a.createElement(E.a,{exact:!0,path:"/contacts",render:function(){return c.a.createElement(F,null)}}),c.a.createElement(E.a,{component:S})),c.a.createElement(A,null))}}]),a}(c.a.Component);l.a.render(c.a.createElement(r.a,null,c.a.createElement(T,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3494a395.chunk.js.map