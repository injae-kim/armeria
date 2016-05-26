(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},"5h1i":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return l})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var r,n=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("xCMr"),l="Calling a Thrift service",o={},s=(r="Tip",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={pageTitle:l,_frontmatter:o},m=c.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(m,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"calling-a-thrift-service",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#calling-a-thrift-service","aria-label":"calling a thrift service permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Calling a Thrift service"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#see-also"},"See also"))),Object(i.b)(s,{mdxType:"Tip"},Object(i.b)("p",null,"Visit ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),Object(i.b)("p",null,"Let's assume we have the following Thrift IDL, served at ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/hello"),", just like what we\nused in ",Object(i.b)("a",{parentName:"p",href:"/docs/server-thrift"},"Running a Thrift service"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-protobuf"},"namespace java com.example.thrift.hello\n\nservice HelloService {\n    string hello(1:string name)\n}\n")),Object(i.b)("p",null,"Making a call starts from creating a client:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.client.Clients;\n\nHelloService.Iface helloService = Clients.newClient(\n        "tbinary+http://127.0.0.1:8080/hello",\n        HelloService.Iface.class); // or AsyncIface.class\n\nString greeting = helloService.hello("Armerian World");\nassert greeting.equals("Hello, Armerian World!");\n')),Object(i.b)("p",null,"Note that we added the serialization format of the call using the ",Object(i.b)("inlineCode",{parentName:"p"},"+")," operator in the scheme part of the URI.\nBecause we are calling a Thrift server, we should choose: ",Object(i.b)("inlineCode",{parentName:"p"},"tbinary"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tcompact"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tjson")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ttext"),"."),Object(i.b)("p",null,"Since we specified ",Object(i.b)("inlineCode",{parentName:"p"},"HelloService.Iface")," as the client type, ",Object(i.b)("inlineCode",{parentName:"p"},"Clients.newClient()")," will return a synchronous\nclient implementation. If we specified ",Object(i.b)("inlineCode",{parentName:"p"},"HelloService.AsyncIface"),", the calling code would have looked like\nthe following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.thrift.ThriftFuture;\nimport com.linecorp.armeria.common.util.CompletionActions;\nimport com.linecorp.armeria.client.Clients;\n\nHelloService.AsyncIface helloService = Clients.newClient(\n        "tbinary+http://127.0.0.1:8080/hello",\n        HelloService.AsyncIface.class);\n\nThriftFuture<String> future = new ThriftFuture<String>();\nhelloService.hello("Armerian World", future);\n\nfuture.thenAccept(response -> assert response.equals("Hello, Armerian World!"))\n      .exceptionally(cause -> {\n          cause.printStackTrace();\n          return null;\n      });\n\n// You can also wait until the call is finished.\nString reply = future.get();\n')),Object(i.b)("p",null,"The example above introduces a new class called ",Object(i.b)("a",{parentName:"p",href:"type://ThriftFuture:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/ThriftFuture.html"},"type://ThriftFuture"),". It is a subtype of Java 8\nCompletableFuture_ that implements Thrift ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/bd964c7f3460c308161cb6eb90583874a7d8d848/lib/java/src/org/apache/thrift/async/AsyncMethodCallback.java#L22"},"AsyncMethodCallback"),". Once passed as a callback of an asynchronous\nThrift call, ",Object(i.b)("a",{parentName:"p",href:"type://ThriftFuture:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/ThriftFuture.html"},"type://ThriftFuture")," will complete itself when the reply is received or the call\nfails. You'll find it way more convenient to consume the reply than ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/bd964c7f3460c308161cb6eb90583874a7d8d848/lib/java/src/org/apache/thrift/async/AsyncMethodCallback.java#L22"},"AsyncMethodCallback")," thanks to the rich set\nof methods provided by ",Object(i.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/CompletableFuture.html"},"CompletableFuture"),"."),Object(i.b)("p",null,"You can also use the builder pattern for client construction:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\n\nHelloService.Iface helloService =\n    Clients.builder("tbinary+http://127.0.0.1:8080/hello")\n           .responseTimeoutMillis(10000)\n           .decorator(LoggingClient.newDecorator())\n           .build(HelloService.Iface.class); // or AsyncIface.class\n\nString greeting = helloService.hello("Armerian World");\nassert greeting.equals("Hello, Armerian World!");\n')),Object(i.b)("p",null,"As you might have noticed already, we decorated the client using ",Object(i.b)("a",{parentName:"p",href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"},"type://LoggingClient"),", which logs all\nrequests and responses. You might be interested in decorating a client using other decorators, for example\nto gather metrics. Please also refer to ",Object(i.b)("a",{parentName:"p",href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"},"type://ClientBuilder")," for more configuration options."),Object(i.b)("h2",{id:"see-also",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/server-thrift"},"Running a Thrift service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/client-decorator"},"Decorating a client")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/client-custom-http-headers"},"Sending custom HTTP headers"))))}d.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),c=a("/94A"),l=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-thrift-mdx-8d7ff5983a356e1bf5fb.js.map