(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),i=a.n(c),o=(a(70),a(71),a(29)),l=a.n(o),s=a(50),u=a(51),d=a(52),m=a(63),h=a(61),f=(a(73),a(6)),p=a(62),y=a(53),C=(a(172),function(e){var t=Object(n.useState)("Temp"),a=Object(f.a)(t,2),c=a[0],i=a[1],o={legend:{display:!1},title:{display:!1},scales:{type:"time",xAxes:[{display:!0,ticks:{display:!0,fontColor:"white"},gridLines:{color:"transparent",zeroLineColor:"transparent"}}],yAxes:[{ticks:{stepSize:4,fontColor:"white",callback:function(t){return a=t,"Temp"===c?e.unit?a+" \xb0C":a+" \xb0F":"Pressure"===c?a+" hPa":"Humidity"===c?a+" %":void 0;var a}},gridLines:{color:"transparent"}}]},tooltips:{enabled:!0,caretSize:10,backgroundColor:"rgba(255,255,255,0.1)"}},l={labels:Object(p.a)(e.apiData.map((function(e){return e.dt_txt.slice(10,16)}))),datasets:[{label:c,fill:!0,lineTension:.35,backgroundColor:"rgba(255,255,255,0.4)",borderColor:"rgba(255,255,255,0.75)",data:"Temp"===c?e.unit?e.apiData.map((function(t){return e.toCelsius(t.main.temp)})):e.apiData.map((function(t){return e.toFarenheit(t.main.temp)})):"Pressure"===c?e.apiData.map((function(e){return e.main.pressure})):"Humidity"===c?e.apiData.map((function(e){return e.main.humidity})):void 0}]};return r.a.createElement("div",null,r.a.createElement("button",{className:"CardChart button",onClick:function(){i("Temp")}},"Temp"),r.a.createElement("button",{className:"CardChart button",onClick:function(){i("Pressure")}},"Pressure"),r.a.createElement("button",{className:"CardChart button",onClick:function(){i("Humidity")}},"Humidity"),r.a.createElement(y.Line,{data:l,options:o}))}),E=(a(173),function(e){return r.a.createElement("div",{className:"Card-temp"},r.a.createElement("div",{className:"Card-temp-switch"},r.a.createElement("p",null,e.unit?"".concat(e.toCelsius(e.apiData[e.i].main.temp),"\xb0C"):"".concat(e.toFarenheit(e.apiData[e.i].main.temp),"\xb0F")),r.a.createElement("button",{className:"on-off-switch"},r.a.createElement("input",{type:"checkbox",id:e.id,className:"on-off-switch-checkbox",onChange:e.handleSwitch,checked:e.unit}),r.a.createElement("label",{className:"on-off-switch-label",htmlFor:e.id},r.a.createElement("span",{className:"on-off-switch-inner"}),r.a.createElement("span",{className:"on-off-switch-switch"})))))}),b=(a(174),a(54)),v=a.n(b),g=a(56),S=a.n(g),w=function(e){return r.a.createElement("div",{className:"Card-time"},r.a.createElement("button",{className:"Card-hour-up btn",onClick:e.decrementI},r.a.createElement(v.a,{style:{fontSize:40}})),r.a.createElement("h2",{className:"Card-time-display"},e.apiData[e.i].dt_txt.slice(10,16)),r.a.createElement("button",{className:"Card-hour-up btn",onClick:e.incrementI},r.a.createElement(S.a,{style:{fontSize:40}})))},D=(a(178),function(e){return r.a.createElement("div",{className:"Card-date-container"},r.a.createElement("div",{className:"Card-day"},r.a.createElement("h2",null,e.getDayOfWeek(e.data.list)),r.a.createElement("p",null,e.data.city.name," | ",e.data.city.country)),r.a.createElement("div",{className:"Card-date"},r.a.createElement("h2",null,"Date:"),r.a.createElement("p",null,e.data.list[0].dt_txt.slice(0,10))))}),k=(a(179),function(e){return r.a.createElement("div",{className:"Card-weather"},r.a.createElement("div",{className:"Card-weather-icon"},e.ChoseIcon(e.apiData)[0]),r.a.createElement("h2",null,"Weather:"),r.a.createElement("p",null,e.apiData[e.i].weather[0].description))}),N=(a(180),a(59)),O=a.n(N),j=a(32),z=a.n(j),T=a(12),I=a.n(T),x=a(30),L=a.n(x),F=a(31),A=a.n(F),P=a(58),M=a.n(P),W=a(57),_=a.n(W),H=function(e){var t=Object(n.useState)(null),a=Object(f.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(0),l=Object(f.a)(o,2),s=l[0],u=l[1],d=Object(n.useState)(!0),m=Object(f.a)(d,2),h=m[0],p=m[1];Object(n.useEffect)((function(){i(e.data),e.data.list&&8===e.data.list.length&&u(4)}),[e.data]);var y=function(e){return Math.round(100*(e-273.15+Number.EPSILON))/100},b=function(e){return Math.round(100*(1.8*e-459.67+Number.EPSILON))/100},v=function(e){var t=new Date(e[s].dt_txt).getHours();switch(e[s].weather[0].main){case"Thunderstorm":return t>18||t<6?[r.a.createElement(L.a,{style:{fontSize:100}}),"cold"]:[r.a.createElement(L.a,{style:{fontSize:100}}),"storm"];case"Drizzle":case"Rain":return t>18||t<6?[r.a.createElement(I.a,{style:{fontSize:100}}),"cold"]:[r.a.createElement(I.a,{style:{fontSize:100}}),"rainy"];case"Snow":return[r.a.createElement(_.a,{style:{fontSize:100}}),"cold"];case"Mist":return t>18||t<6?[r.a.createElement(A.a,{style:{fontSize:100}}),"cold"]:[r.a.createElement(A.a,{style:{fontSize:100}}),"mild"];case"Clouds":return t>18||t<6?[r.a.createElement(z.a,{style:{fontSize:100}}),"cold"]:[r.a.createElement(z.a,{style:{fontSize:100}}),"mild"];default:return t>18||t<6?[r.a.createElement(M.a,{style:{fontSize:100}}),"cold"]:[r.a.createElement(O.a,{style:{fontSize:100}}),"hot"]}};return r.a.createElement("div",{className:c&&!e.loading?"Card ".concat(v(c.list)[1]):"Card"},!0===e.loading?r.a.createElement("div",{className:"Card-loading"},r.a.createElement("div",{className:"Card-spinner"})):c?r.a.createElement("div",{className:"Card-content"},r.a.createElement(D,{getDayOfWeek:function(e){return["Sunday","Monday","Tuesday","Wendnesday","Thursday","Friday","Saturday"][new Date(e[s].dt_txt.slice(0,10)).getDay()]},data:c}),r.a.createElement(k,{i:s,apiData:c.list,ChoseIcon:v}),r.a.createElement(w,{incrementI:function(){return s<c.list.length-1?u(s+1):null},decrementI:function(){return s>0?u(s-1):null},apiData:c.list,i:s}),r.a.createElement(E,{id:e.id,i:s,unit:h,handleSwitch:function(){p(!h)},toFarenheit:b,toCelsius:y,apiData:c.list}),r.a.createElement(C,{unit:h,toCelsius:y,toFarenheit:b,apiData:c.list})):null)},q=a(195),B=(a(181),a(60)),J=a.n(B),V=function(e){var t=e.newCity,a=Object(n.useState)(""),c=Object(f.a)(a,2),i=c[0],o=c[1];return r.a.createElement("div",{className:"CityInput-container"},r.a.createElement("input",{onChange:function(e){o(e.target.value)},placeholder:"enter a city",className:"CityInput"}),r.a.createElement("button",{onClick:function(){t(i),console.log(i)},className:"CityInput-icon"},r.a.createElement(J.a,null)))},X=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this,e)).changeCity=function(e){n.setState({city:e},(function(){return localStorage.setItem("city",n.state.city)}))},n.sortData=function(e,t){for(var a=[],r=function(r){var c=n.state.currentDay+r;c>6&&(c-=7);var i=e.filter((function(e){return new Date(e.dt_txt).getDay()===c?e:null}));a.push(Object.assign({},t,{list:i}))},c=0;c<5;c++)r(c);n.setState({sorted:a})},n.changeLoding=function(){n.setState({loadingData:!n.state.loadingData})},n.handleTouchStart=function(e){var t=e.touches[0].clientX;n.setState({touchStartLocation:t})},n.handleTouchEnd=function(e){var t=e.changedTouches[0].clientX,a=n.state.touchStartLocation-t,r=document.querySelectorAll(".Card");a>50&&n.state.activeCard<r.length-1?n.setState({activeCard:n.state.activeCard+1},(function(){return r[n.state.activeCard].scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})):a<-50&&n.state.activeCard>0&&n.setState({activeCard:n.state.activeCard-1},(function(){return r[n.state.activeCard].scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}))};var r=localStorage.city?localStorage.getItem("city"):"London";return n.state={currentDay:(new Date).getDay(),loadingData:null,sorted:[[],[],[],[],[]],data:{},activeCard:0,city:r,touchStartLocation:null},n}return Object(d.a)(a,[{key:"makeApiCall",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.changeLoding(),e.prev=1,t=this.state.city,"bb0aa86556d170d76e5dcf7dfe019db1",a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=").concat("bb0aa86556d170d76e5dcf7dfe019db1"),e.next=7,fetch(a,{mode:"cors"});case 7:return n=e.sent,e.next=10,n.json().then((function(e){return r.sortData(e.list,e),setTimeout((function(){return r.changeLoding()}),1e3),e}));case 10:e.sent,e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),setTimeout((function(){return r.changeLoding()}),1e3),localStorage.setItem("city","London"),alert("City not found");case 18:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.makeApiCall()}},{key:"componentDidUpdate",value:function(e,t){this.state.city!==t.city&&this.makeApiCall()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,className:"CardContainer"},r.a.createElement(V,{newCity:this.changeCity}),this.state.sorted.map((function(t,a){return r.a.createElement(H,{id:Object(q.a)(),key:a,loading:e.state.loadingData,data:t})})))}}]),a}(r.a.Component),R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a(183)},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.e73f121f.chunk.js.map