(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),r=t.n(i),l=t("2+3N"),s=t("1lec"),c=t("+ejy"),o=t("+9zj"),b=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(o.a)(e.location),m=e.version||i.substring(i.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},LEZy:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return m}));var n,i=t("zLVn"),r=(t("q1tI"),t("7ljp")),l=t("JkCF"),s={},c=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:s},b=l.a;function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(b,Object.assign({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"14th April 2020"),Object(r.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Added ",Object(r.b)("inlineCode",{parentName:"li"},"RetryStrategy.onException()")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2652"},"#2652")),Object(r.b)("li",{parentName:"ul"},"Armeria clients can now send an ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1")," request as an alternative to an HTTP/2 PING frame. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2636"},"#2636"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This feature is disabled by default and you can enable it by:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"specifying ",Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.defaultPingIntervalMillis")," system property"),Object(r.b)("li",{parentName:"ul"},"or calling ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder.pingIntervalMillis()"),".")))))),Object(r.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DocService")," debug form now prettifies any JSON responses. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2635"},"#2635"))),Object(r.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grpc-timeout")," gRPC client header is generated correctly now. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2643"},"#2643")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"QueryParams.toQueryString()")," does not raise an exception anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2644"},"#2644")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HealthCheckedEndpointGroup")," does not raise a",Object(r.b)("inlineCode",{parentName:"li"},"ConcurrentModificationException")," anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2647"},"#2647")),Object(r.b)("li",{parentName:"ul"},"Thrift TEXT protocol does not fail to handle a recursive union struct anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2654"},"#2654")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MoreNamingConventions.prometheus()")," now appends the ",Object(r.b)("inlineCode",{parentName:"li"},"seconds")," suffix for ",Object(r.b)("inlineCode",{parentName:"li"},"LongTaskTimer")," correctly, when using legacy meter names. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2646"},"#2646")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(r.b)("inlineCode",{parentName:"li"},"DocService")," sends a request with a wrong HTTP method if a service specification contains duplicate methods. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2657"},"#2657"))),Object(r.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.defaultHttp2PingTimeoutMillis")," flag has been replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.defaultPintIntervalMillis"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"com.linecorp.armeria.defaultUseHttp2PingWhenNoActiveStreams")," flag has been removed without a replacement, because:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"HTTP/2 can send PING frame regardless of whether there is an active stream or not."),Object(r.b)("li",{parentName:"ul"},"HTTP/1 can only send ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1.1")," when there is no active stream."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder.http2PingTimeoutMillis()")," has been replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder.pingIntervalMillis()"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ServerBuilder.http2PingTimeoutMillis()")," has been replaced with ",Object(r.b)("inlineCode",{parentName:"li"},"ServerBuilder.pingIntervalMillis()"),".")),Object(r.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.10.2 → 5.11.2")),Object(r.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(r.b)(c,{usernames:["AmosDoan","anuraaga","codefromthecrypt","eugene70","gary-lo","hueneburg","huydx","ikhoon","mauhiz","minwoox","trustin"],mdxType:"ThankYou"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-3-mdx-2203bb3c7c0769ccfb2d.js.map