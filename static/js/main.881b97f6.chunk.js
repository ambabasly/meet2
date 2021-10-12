(this.webpackJsonpmeet2=this.webpackJsonpmeet2||[]).push([[0],{134:function(e,t,n){},202:function(e,t,n){},222:function(e,t,n){},357:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(65),i=n.n(r),s=(n(202),n(23)),c=n(30),l=n(24),u=n(25),d=n(3),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showDetails:!1},e}return Object(c.a)(n,[{key:"showDetails",value:function(){!1===this.state.showDetails?this.setState({showDetails:!0}):this.setState({showDetails:!1})}},{key:"buttonText",value:function(){return!1===this.state.showDetails?"more details":"less details"}},{key:"eventDetails",value:function(e){return!1===this.state.showDetails?"":e.description}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"event-title",children:t.summary}),Object(d.jsx)("h2",{className:"event-location",children:t.location}),Object(d.jsx)("p",{className:"event-start",children:new Date(t.start.dateTime).toString()}),Object(d.jsx)("p",{className:"event-details",children:this.eventDetails(t)}),Object(d.jsx)("button",{className:"details-btn",onClick:function(){e.showDetails(t)},children:this.buttonText()})]})}}]),n}(a.Component),g=h,f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)(g,{event:e}),Object(d.jsx)("hr",{})]},e.id)}))})}}]),n}(a.Component),v=f,p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,background:"#fff"}},a.color="blue",a}return n}(p),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:"white"}},a.color="red",a}return n}(p),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,background:"white"}},a.color="#f8a01f",a}return n}(p),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(""===n&&e.setState({suggestions:[],query:"",showSuggestions:!1}),0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t,0)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(b,{text:this.state.infoText}),Object(d.jsx)("label",{children:"Search your city: "}),Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),E=w,O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;if(n<0||n>32)return e.setState({numberOfEvents:"",errorText:"Select number between 1 to 32"});e.setState({numberOfEvents:n,errorText:""}),e.props.updateEventCount(t.target.value)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(d.jsxs)("div",{className:"events-container",children:[Object(d.jsx)("label",{className:"number-of-events",children:"Number of Events: "}),Object(d.jsx)("input",{type:"number",className:"change-number",value:e,onChange:this.handleInputChanged}),Object(d.jsx)(m,{text:this.state.errorText})]})}}]),n}(a.Component),A=O,I=n(191),y=n(33),x=n.n(y),S=n(74),C=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],R=n(119),k=n.n(R),Q=n(75),B=n.n(Q),T=(n(134),function(){var e=Object(S.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(S.a)(x.a.mark((function e(t){var n,a,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jvdgml66d0.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(S.a)(x.a.mark((function e(){var t,n,a,o,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,k.a.get("https://jvdgml66d0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,i=r.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",o&&U(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(S.a)(x.a.mark((function e(){var t,n,a,o,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return B.a.done(),e.abrupt("return",C);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),B.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,Y();case 11:if(!(n=e.sent)){e.next=21;break}return F(),a="https://jvdgml66d0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,k.a.get(a);case 17:return(o=e.sent).data&&(r=N(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),B.a.done(),e.abrupt("return",o.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){var t=e.map((function(e){return e.location}));return Object(I.a)(new Set(t))};n(222);var D=function(e){return e.showWelcomeScreen?Object(d.jsxs)("div",{className:"WelcomeScreen",children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxJJREFUeJztnIlzG+UZh/mTkgAJAwRC4ku25UOWb1nxLeu2TtvyfcWO4zSQcE0oA0NT0kmHkjYECgyFobR0mGFgoBToBQN0oLQUCrRhEpjpT1qskfbblVd6FdvQ38wzGtm7+2m137Pv977f7uqaXYeGCSmZa7Z9D8h3GgpERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApERFAgIoICEREUiIigQEQEBSIiKBARQYGICApEROwggW6qGgHbvhukKKwKtPvQ8LUVHrA7835PRSkftlv5z8Fq740ZafZWegabRrsaQtt+REhRWBXoLtfES75FcK5v6k7XxPmBmRstR4uqGt9611hFjW+1M7knf1HQETnRPXZ79/iTQ3NPD88965n3NUeyS6+v8Nxa5cVrtc2/7UeKGGJVoA57KOSI1NX6E85YuCWq4W4MZ1fYX+W9sdJYKUjT0xDqtIec9UHdInut/5H+6d6Ndg5Ue5c6kmd6J+90jd9a7d1X6TnePeZ3RPDPbT9SxBCrAjXXBQKOiM3mH2gKI2xotNQHtKUYgJ4fmX9meK6yxqdue3PVyB3d457m0bXOMd2i+9ypDnuw3R68ODj7knfxbN8UHMU/YSeWXlfhGWuN9TWGR3LCEtlRlCeJRvg57U7d3TNRbTMQKD0SVXsRh/Ca/SeiEZKelc5kQ63/lGscyRDyKkj20OHJproARkysgwgEk2psvt6cUFcsXfbQb0cWclloT8D4khvE13m4d0rXZptdH1z/TyhbFYY+RizZY3l9DGpIfXyOCDr48IYfGATxT7y5p2eiXDuGpOqb5Hou74ZXugXZOr6prkGAk2Hb+3Jb2ESgVFv83p6J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",alt:"logo",className:"image"}),Object(d.jsx)("h1",{children:'Welcome to the Meet app "LinkUp"'}),Object(d.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(d.jsx)("div",{className:"button_cont",align:"center",children:Object(d.jsxs)("div",{class:"google-btn",children:[Object(d.jsx)("div",{class:"google-icon-wrapper",children:Object(d.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(d.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(d.jsx)("b",{children:"Sign in with google"})})]})}),Object(d.jsx)("a",{href:"https://ambabasly.github.io/meet2/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},L=n(18),W=n(359),K=n(366),P=n(182),J=n(95),Z=function(e){var t=e.events,n=Object(a.useState)([]),o=Object(L.a)(n,2),r=o[0],i=o[1];Object(a.useEffect)((function(){i((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))}))}),[t]);var s=["#de960b","#c99d49","#90681c","#a5884f","#e4b862"];return Object(d.jsx)(W.a,{height:400,children:Object(d.jsx)(K.a,{width:400,height:400,children:Object(d.jsx)(P.a,{data:r,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:r.map((function(e,t){return Object(d.jsx)(J.a,{fill:s[t%s.length],name:e.name},"cell-".concat(t))}))})})})},X=n(363),H=n(364),M=n(187),q=n(188),z=n(78),V=n(192),_=(n(357),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t){G().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t})),o=e.state.numberOfEvents;e.setState({events:a.slice(0,o),currentLocation:t})}))},e.updateEventCount=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n,t)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t=localStorage.getItem("access_token"),n=!T(t).error,a=new URLSearchParams(window.location.search).get("code");this.setState({showWelcomeScreen:!(a||n)}),(a||n)&&this.mounted&&(G().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:N(t)})})),navigator.onLine?(console.log("offline"),this.setState({warningText:"You are currently offline"})):(console.log("online"),this.setState({warningText:"Warning: the events you are viewing may no longer be current. To ensure you see the latest information, make sure you are connected to the internet"})))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){if(void 0===this.state.showWelcomeScreen)return Object(d.jsx)("div",{className:"App"});var e=this.state,t=e.locations,n=e.numberOfEvents;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Meet App"}),Object(d.jsx)("h4",{children:"Choose your nearest city"}),Object(d.jsx)(j,{text:this.state.warningText}),Object(d.jsx)(E,{locations:t,updateEvents:this.updateEvents}),Object(d.jsx)(A,{numberOfEvents:n,updateEventCount:this.updateEventCount}),Object(d.jsxs)("div",{className:"data-vis-wrapper",children:[Object(d.jsx)(Z,{events:this.state.events}),Object(d.jsx)(W.a,{height:400,children:Object(d.jsxs)(X.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(H.a,{}),Object(d.jsx)(M.a,{type:"category",dataKey:"city",name:"city",label:{value:"city",position:"insideBottomCenter",dy:20}}),Object(d.jsx)(q.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events",label:{value:"number of events",angle:-90,position:"insideLeft"}}),Object(d.jsx)(z.a,{cursor:{strokeDasharray:"3 3"}}),Object(d.jsx)(V.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(d.jsx)(v,{events:this.state.events}),Object(d.jsx)(D,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){Y()}})]})}}]),n}(a.Component)),$=_,ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,367)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))},ae=n(189);i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet2","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne(),ae.config("6022c75a808a44ff96ab04b94dfdd841").install()}},[[358,1,2]]]);
//# sourceMappingURL=main.881b97f6.chunk.js.map