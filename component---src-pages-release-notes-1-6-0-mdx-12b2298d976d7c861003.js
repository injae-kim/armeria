(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var r=t("wFql"),n=t("q1tI"),i=t.n(n),o=t("2+3N"),c=t("1lec"),s=t("+ejy"),l=t("+9zj"),p=r.a.Title;a.a=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(c).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var n=Object(l.a)(e.location),m=e.version||n.substring(n.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?i.a.createElement(p,{id:"release-notes",level:1},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},"s/C9":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return b}));var r=t("zLVn"),n=(t("q1tI"),t("7ljp")),i=t("JkCF"),o={},c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},s=c("Tip"),l=c("ThankYou"),p={_frontmatter:o},m=i.a;function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)(m,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"7th April 2021"),Object(n.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now send and handle multipart requests and responses. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/253"},"#253")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3327"},"#3327")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'// Send a multipart message.\nWebClient client = WebClient.of("http://example.com/");\nBodyPart part1 = BodyPart.of(ContentDisposition.of("form-data", "username"), "Armeria");\nBodyPart part2 = BodyPart.of(ContentDisposition.of("form-data", "password"), "mypassword");\nMultipart multipart = Multipart.of(part1, part2);\nclient.execute(multipart.toHttpRequest("/login"));\n\n// Handle a multipart message.\nServer.builder()\n      .service("/login", (ctx, req) -> {\n          Multipart multipart = Multipart.from(req);\n          multipart.aggregate().thenApply(aggregated -> {\n              assert aggregated.field("username").contentUtf8().equals("Armeria");\n              assert aggregated.field("password").contentUtf8().equals("mypassword");\n              ...\n          }));\n     });\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Armeria now provides various useful extensions and conversions for Scala. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3395"},"#3395")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"See ",Object(n.b)("a",{parentName:"li",href:"/docs/advanced-scala"},"Scala integration")," for the full features."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now create a ",Object(n.b)("a",{parentName:"p",href:"type://StreamMessage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html"},"type://StreamMessage")," from a ",Object(n.b)("inlineCode",{parentName:"p"},"Path")," or a ",Object(n.b)("inlineCode",{parentName:"p"},"File"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3344"},"#3344")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'Path path = Paths.get("...");\nStreamMessage<HttpData> publisher = StreamMessage.of(path);\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now filter or transform values of a ",Object(n.b)("a",{parentName:"p",href:"type://StreamMessage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html"},"type://StreamMessage")," using\n",Object(n.b)("a",{parentName:"p",href:"type://StreamMessage#filter(Predicate):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html#filter(java.util.function.Predicate)"},"type://StreamMessage#filter(Predicate)")," or ",Object(n.b)("a",{parentName:"p",href:"type://StreamMessage#map(Function):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html#map(java.util.function.Function)"},"type://StreamMessage#map(Function)"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3351"},"#3351")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"// Filter.\nStreamMessage<Integer> source = StreamMessage.of(1, 2, 3, 4, 5);\nStreamMessage<Integer> even = source.filter(x -> x % 2 == 0);\n\n// Transform.\nStreamMessage<Integer> source = StreamMessage.of(1, 2, 3, 4, 5);\nStreamMessage<Boolean> isEven = source.map(x -> x % 2 == 0);\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now send a different response depending on the exception. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3209"},"#3209")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3413"},"#3413")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"Server.builder().exceptionHandler((ctx, cause) -> {\n    if (cause instanceof RequestTimeoutException) {\n        // The request timed out!\n        return AggregatedHttpResponse.of(...);\n    }\n\n    // Return null to let ExceptionHandler.ofDefault() convert the exception.\n    return null;\n})...\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now convert an exception into an ",Object(n.b)("a",{parentName:"p",href:"type://RpcResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RpcResponse.html"},"type://RpcResponse")," in ",Object(n.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3349"},"#3349")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3383"},"#3383")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'THttpService.builder()\n            .addService("hello", helloService)\n            .exceptionHandler((ctx, cause) -> {\n                if (cause instanceof IllegalArgumentException) {\n                    return RpcResponse.of(new CustomizedException("Bad Request!"));\n                }\n                ...\n            })\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now set a response timeout and attributes using ",Object(n.b)("a",{parentName:"p",href:"type://WebClientRequestPreparation:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClientRequestPreparation.html"},"type://WebClientRequestPreparation"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3347"},"#3347")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3357"},"#3357")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'WebClient client = ...;\nclient.prepare()\n      .get("/my-service")\n      .responseTimeout(Duration.ofSeconds(3))\n      .attr(USER_ID, userId)\n      .attr(USER_SECRET, secret)\n      .execute();\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now specify additional error details to a gRPC response when an exception is raised in a gRPC service.\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3307"},"#3307")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3329"},"#3329")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"GrpcService.builder()\n           .exceptionMapping((cause, metadata) -> {\n               if (throwable instanceof AuthError) {\n                   metadata.put(KEY, toMetadata(cause))\n                   return Status.UNAUTHENTICATED.withCause(cause);\n               }\n               ...\n           })\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now customize the success condition of a metric. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3404"},"#3404")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3410"},"#3410")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"MetricCollectingService.builder(...)\n                       .successFunction((context, log) -> {\n                            final int statusCode = log.responseHeaders().status().code();\n                            return (statusCode >= 200 && statusCode < 400) || statusCode == 404;\n                        });\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now fluently build a ",Object(n.b)("a",{parentName:"p",href:"type://DecodingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/encoding/DecodingClient.html"},"type://DecodingClient")," using the ",Object(n.b)("a",{parentName:"p",href:"type://DecodingClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/encoding/DecodingClientBuilder.html"},"type://DecodingClientBuilder"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3348"},"#3348")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3372"},"#3372")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"DecodingClient.builder()\n              .autoFillAcceptEncoding(false)\n              .strictContentEncoding(true)\n              .newDecorator();\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now fluently build an ",Object(n.b)("a",{parentName:"p",href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"},"type://HttpRequest")," with a ",Object(n.b)("inlineCode",{parentName:"p"},"Publisher<HttpData>"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3343"},"#3343")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'StreamMessage<HttpData> publisher = StreamMessage.of(...);\nHttpRequest.builder()\n           .method(HttpMethod.GET)\n           .path("/")\n           .content(MediaType.PLAIN_TEXT_UTF_8, publisher)\n           .build();\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now convert a stream of Protobuf Messages into\n",Object(n.b)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/rfc7464/"},"JSON Text sequences")," using an annotated service. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3394"},"#3394")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'@Get("/items")\n@ProducesJsonSequences\npublic Publisher<MyProtobufMessage> protobufJsonSeqPublisher() {\n    return StreamMessage.of(MyProtobufMessage.newBuilder()...build(),\n                            MyProtobufMessage.newBuilder()...build());\n}\n\n@Get("/items")\n@ProducesJsonSequences\npublic Stream<MyProtobufMessage> protobufJsonSeqPublisher() {\n    return Stream.of(MyProtobufMessage.newBuilder()...build(),\n                     MyProtobufMessage.newBuilder()...build());\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now customize the default service name of a ",Object(n.b)("a",{parentName:"p",href:"type://RequestLog:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RequestLog.html"},"type://RequestLog"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3232"},"#3232")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3366"},"#3366")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'Server.builder()\n      .defaultServiceNaming(ctx -> {\n          final ServiceConfig config = ctx.config();\n          return config.route().patternString();\n     });\n// For a specific service.\nServer.builder()\n      .route().path("/")\n      .defaultServiceNaming(...)\n      ...\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now check if the current request is matched by any routes or not. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3365"},"#3365")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3378"},"#3378")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = ...\nsb.decorator((delegate, ctx, req) -> {\n    if (ctx.config().route().isFallback()) {\n        // This request is not matched any routes.\n    }\n    return delegate.serve(ctx, req);\n});\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService")," does not trace requests for ",Object(n.b)("a",{parentName:"p",href:"type://TransientService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/TransientService.html"},"type://TransientService")," such as\n",Object(n.b)("a",{parentName:"p",href:"type://HealthCheckService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/healthcheck/HealthCheckService.html"},"type://HealthCheckService")," anymore. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3382"},"#3382")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You should specify ",Object(n.b)("a",{parentName:"li",href:"type://TransientServiceOption#WITH_TRACING:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/TransientServiceOption.html#WITH_TRACING"},"type://TransientServiceOption#WITH_TRACING")," if you want to trace them.")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"HealthCheckService.builder()\n                  .transientServiceOptions(WITH_TRACING)\n                  ...\n                  .build();\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now clean up resources by overriding ",Object(n.b)("a",{parentName:"p",href:"type://FilteredStreamMessage#onCancellation(Subscriber):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/FilteredStreamMessage.html#onCancellation(org.reactivestreams.Subscriber)"},"type://FilteredStreamMessage#onCancellation(Subscriber)"),"\nwhen ",Object(n.b)("inlineCode",{parentName:"p"},"Subscription.cancel()")," is called. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3375"},"#3375")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"new MyFilteredHttpResponse(res) {\n    ...\n    @Override\n    protected void onCancellation(Subscriber<? super U> subscriber) {\n        // Clean up resources.\n    }\n}\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now easily set 'cookie' or 'set-cookie' headers. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3388"},"#3388")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3391"},"#3391")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'Cookie cookie = Cookie.of("cookie", "value");\nRequestHeaders headers = RequestHeaders.builder(HttpMethod.GET, "/")\n                                       .cookie(cookie)\n                                       .build();\nassert headers.cookies().equals(Cookies.of(cookie));\n\nCookie setCookie1 = ...\nCookie setCookie2 = ...\nResponseHeaders headers = ResponseHeaders.builder(HttpStatus.OK)\n                                         .cookies(setCookie1, setCookie2)\n                                         .build();\nassert headers.cookies().equals(Cookies.of(setCookie1, setCookie2));\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use ",Object(n.b)("inlineCode",{parentName:"p"},"req.root_id")," ",Object(n.b)("a",{parentName:"p",href:"type://BuiltInProperty:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/BuiltInProperty.html"},"type://BuiltInProperty")," to log the ID of ",Object(n.b)("a",{parentName:"p",href:"type://RequestContext#root():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#root()"},"type://RequestContext#root()"),".\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3429"},"#3429")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3433"},"#3433"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use Thrift 0.14.0 with the new ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-thrift0.14")," module. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3470"},"#3470")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3422"},"#3422"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use OAuth 2.0 related features with the new ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-oauth2")," module. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2268"},"#2268")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2840"},"#2840")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/rfc7662/"},"OAuth 2.0 server-side token authorization")," using\n",Object(n.b)("a",{parentName:"li",href:"type://OAuth2TokenIntrospectionAuthorizer:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/auth/oauth2/OAuth2TokenIntrospectionAuthorizer.html"},"type://OAuth2TokenIntrospectionAuthorizer")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.4"},"Client credential grants")," using\n",Object(n.b)("a",{parentName:"li",href:"type://OAuth2ClientCredentialsGrant:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/auth/oauth2/OAuth2ClientCredentialsGrant.html"},"type://OAuth2ClientCredentialsGrant")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.3"},"Resource Owner Password Credentials Grant"),"\nusing ",Object(n.b)("a",{parentName:"li",href:"type://OAuth2ResourceOwnerPasswordCredentialsGrant:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/auth/oauth2/OAuth2ResourceOwnerPasswordCredentialsGrant.html"},"type://OAuth2ResourceOwnerPasswordCredentialsGrant")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/rfc7009/"},"OAuth 2.0 Token Revocation")," using ",Object(n.b)("a",{parentName:"li",href:"type://TokenRevocation:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/auth/oauth2/TokenRevocation.html"},"type://TokenRevocation"))),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",{parentName:"li"},"  OAuth 2.0 features are currently experimental, so you should be careful using the feature."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use ",Object(n.b)("a",{parentName:"p",href:"https://jakarta.ee/specifications/restful-ws/"},"Jakarta RESTful Web Services"),"\non top of Armeria with the ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-resteasy")," module. ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3285"},"#3285")," ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3296"},"#3296")),Object(n.b)(s,{mdxType:"Tip"},Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-resteasy")," is currently experimental, so you should be careful using the feature.")))),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Various improvements for documentation. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3237"},"#3237")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3289"},"#3289")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3361"},"#3361")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3390"},"#3390")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3401"},"#3401")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3427"},"#3427"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"NullPointerException")," in ",Object(n.b)("a",{parentName:"li",href:"type://HttpResponseDecoder"},"type://HttpResponseDecoder"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3036"},"#3036")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3407"},"#3407")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"405 Method Not Allowed")," when the exact and param path are defined with\ndifferent HTTP methods. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3330"},"#3330")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3340"},"#3340")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"Address family not supported by protocol")," or ",Object(n.b)("inlineCode",{parentName:"li"},"Connection refused")," error anymore\non certain machines with IPv6 enabled. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3425"},"#3425")),Object(n.b)("li",{parentName:"ul"},"The Unicode characters like emojis in a JSON response are now rendered correctly\nin ",Object(n.b)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3396"},"#3396")),Object(n.b)("li",{parentName:"ul"},"You no longer see the wrong response body when the payload violates the protocol or is too large. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3419"},"#3419")),Object(n.b)("li",{parentName:"ul"},"You can now use the Thrift client and service that is generated by\n",Object(n.b)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/THRIFT-2469"},Object(n.b)("inlineCode",{parentName:"a"},"java:fullcamel"))," option of Thrift compiler.\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3269"},"#3269")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3360"},"#3360")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3369"},"#3369")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SmartLifecycle")," for Armeria server graceful shutdown is only created when the Armeria server is created\nby Spring integration. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3300"},"#3300")),Object(n.b)("li",{parentName:"ul"},"You can now use ",Object(n.b)("a",{parentName:"li",href:"https://scalapb.github.io/docs/sealed-oneofs/"},"Sealed oneofs")," message from ScalaPB\nwith JSON for gRPC and annotated services. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3342"},"#3342")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3394"},"#3394")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"CancellationException")," when an ",Object(n.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse")," is fully consumed on server-side.\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3387"},"#3387")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("a",{parentName:"li",href:"type://ClosedSteamException"},"type://ClosedSteamException")," in Jetty service when it fails to write to an\n",Object(n.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),". ",Object(n.b)("inlineCode",{parentName:"li"},"EofException")," is raised instead. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3412"},"#3412")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"IllegalStateException")," when ",Object(n.b)("a",{parentName:"li",href:"type://RequestContextHooks:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/reactor3/RequestContextHooks.html"},"type://RequestContextHooks")," is enabled. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3441"},"#3441")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3442"},"#3442")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ArmeriaServerHttpResponse")," of Spring Webflux integration now correctly propagates\nReactor's ",Object(n.b)("a",{parentName:"li",href:"https://projectreactor.io/docs/core/release/reference/#context"},Object(n.b)("inlineCode",{parentName:"a"},"Context")),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3439"},"#3439")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3443"},"#3443"))),Object(n.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"N/A")),Object(n.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"type://ServiceRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html"},"type://ServiceRequestContext")," is added to the parameter of ",Object(n.b)("inlineCode",{parentName:"p"},"handleMessage")," in\n",Object(n.b)("a",{parentName:"p",href:"type://AbstractUnaryGrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/protocol/AbstractUnaryGrpcService.html"},"type://AbstractUnaryGrpcService"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3403"},"#3403")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The return type is also changed to ",Object(n.b)("inlineCode",{parentName:"li"},"CompletionStage"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3409"},"#3409"))),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"protected abstract CompletionStage<byte[]> handleMessage(\n        ServiceRequestContext ctx, byte[] message);\n\nprotected final CompletionStage<ByteBuf> handleMessage(\n        ServiceRequestContext ctx, ByteBuf message) {...}\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"type://GrpcStatusFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/grpc/GrpcStatusFunction.html"},"type://GrpcStatusFunction")," now extends ",Object(n.b)("inlineCode",{parentName:"p"},"BiFunction<Throwable, Metadata, Status>"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3329"},"#3329"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"numberSteps")," method in ",Object(n.b)("a",{parentName:"p",href:"type://WeightRampingUpStrategyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/WeightRampingUpStrategyBuilder.html"},"type://WeightRampingUpStrategyBuilder")," is now changed to ",Object(n.b)("inlineCode",{parentName:"p"},"totalSteps"),". ",Object(n.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3377"},"#3377")))),Object(n.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bucket4J 4.10.0 → 6.2.0"),Object(n.b)("li",{parentName:"ul"},"Curator 4.3.0 → 5.1.0",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"ZooKeeper 3.5.8 → 3.6.2"))),Object(n.b)("li",{parentName:"ul"},"Dropwizard 2.0.18 → 2.0.20"),Object(n.b)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.17 → 4.1.18"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.35.0 → 1.36.1"),Object(n.b)("li",{parentName:"ul"},"Jackson 2.12.0 → 2.12.2"),Object(n.b)("li",{parentName:"ul"},"java-jwt 3.12.1 → 3.14.0"),Object(n.b)("li",{parentName:"ul"},"Jetty 9.4.36 → 9.4.39"),Object(n.b)("li",{parentName:"ul"},"Micrometer 1.6.3 → 1.6.5"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.58 → 4.1.63",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.36 → 2.0.38"),Object(n.b)("li",{parentName:"ul"},"Netty io_uring transport 0.0.3 → 0.0.5"))),Object(n.b)("li",{parentName:"ul"},"OpenSAML 3.4.5 → 3.4.6",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Shibboleth java-support 7.5.1 → 7.5.2"))),Object(n.b)("li",{parentName:"ul"},"Reactor 3.4.2 → 3.4.4",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Reactor Kotlin extensions 1.1.2 → 1.1.3"))),Object(n.b)("li",{parentName:"ul"},"RxJava 3.0.9 → 3.0.11, 2.2.20 → 2.2.21"),Object(n.b)("li",{parentName:"ul"},"ScalaPb 0.10.10 → 0.11.0"),Object(n.b)("li",{parentName:"ul"},"Spring Boot 2.4.2 → 2.4.4"),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.41 → 9.0.44, 8.5.61 → 8.5.64")),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(n.b)(l,{usernames:["andrey-tpt","andrew-teirney","anuraaga","eisig","eugene70","ghkim3221","hyangtack","heka1024","heowc","hexoul","ikhoon","JunoJunho","kojilin","ks-yim","mauhiz","max904-github","minwoox","nirvanarsc","okue","policeman-kh","probepark","richieyan","selectAll","szeiger","trustin","Waynefn"],mdxType:"ThankYou"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-6-0-mdx-12b2298d976d7c861003.js.map