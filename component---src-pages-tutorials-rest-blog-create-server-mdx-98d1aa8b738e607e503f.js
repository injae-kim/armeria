(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"3Z1l":function(e,a,t){"use strict";t.r(a),t.d(a,"pageTitle",(function(){return l})),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return h}));var r,n=t("zLVn"),i=(t("q1tI"),t("7ljp")),s=t("FvYO"),l="Creating a server",c={},o=(r="TutorialSteps",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={pageTitle:l,_frontmatter:c},p=s.a;function h(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(p,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-a-server",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#creating-a-server","aria-label":"creating a server permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Creating a server"),Object(i.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#what-you-need"},"What you need")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#1-create-a-server-instance"},"1. Create a server instance")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#2-start-the-server"},"2. Start the server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#3-run-the-server-and-service"},"3. Run the server and service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#whats-next"},"What's next"))),Object(i.b)("p",null,"As the first step of the tutorial, we create a server instance and run a dummy service to check that the server and service are launched.\nWe'll use Armeria's ",Object(i.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder")," for this task."),Object(i.b)(o,{current:1,mdxType:"TutorialSteps"}),Object(i.b)("h2",{id:"what-you-need",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),Object(i.b)("p",null,"No preparation is required for this step. Do check that you've prepared the ",Object(i.b)("a",{parentName:"p",href:"/tutorials/rest/blog/#prerequisites"},"prerequisites"),"."),Object(i.b)("h2",{id:"1-create-a-server-instance",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#1-create-a-server-instance","aria-label":"1 create a server instance permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Create a server instance"),Object(i.b)("p",null,"Let's create a server instance using Armeria's ",Object(i.b)("a",{parentName:"p",href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"},"type://ServerBuilder"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a ",Object(i.b)("inlineCode",{parentName:"p"},"Main")," class. You can see the full version of the file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/blob/master/tutorials/rest-api-annotated-service/src/main/java/example/armeria/server/blog/Main.java"},"here"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java",filename:"Main.java"},"package example.armeria.server.blog;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic final class Main {\n  private static final Logger logger = LoggerFactory.getLogger(Main.class);\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Main")," class, add the method, ",Object(i.b)("inlineCode",{parentName:"p"},"newServer()"),". Since a server instance requires at least one service to run with, let's add a dummy service returning ",Object(i.b)("inlineCode",{parentName:"p"},'"Hello, Armeria!"')," for now."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=10",filename:"Main.java",highlight:"10"},'import com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\n\npublic final class Main {\n  ...\n  static Server newServer(int port) {\n    ServerBuilder sb = Server.builder();\n    return sb.http(port)\n             .service("/", (ctx, req) -> HttpResponse.of("Hello, Armeria!"))\n             .build();\n  }\n  ...\n')),Object(i.b)("p",{parentName:"li"},"To learn how to add the actual blog service, see ",Object(i.b)("a",{parentName:"p",href:"/tutorials/rest/blog/add-services-to-server"},"Step 3. Add services to a server"),"."))),Object(i.b)("h2",{id:"2-start-the-server",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#2-start-the-server","aria-label":"2 start the server permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Start the server"),Object(i.b)("p",null,"Now that we have a server, have a go at starting the server with the dummy service."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("inlineCode",{parentName:"li"},"Main")," class, add the ",Object(i.b)("inlineCode",{parentName:"li"},"main()")," method."),Object(i.b)("li",{parentName:"ol"},"Call the ",Object(i.b)("inlineCode",{parentName:"li"},"newServer()")," method we implemented in step 2. Let's set the port to ",Object(i.b)("inlineCode",{parentName:"li"},"8080")," as in line 2."),Object(i.b)("li",{parentName:"ol"},"Start the server as in line 9.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=Main.java highlight=2,9 showlineno=true",filename:"Main.java",highlight:"2,9",showlineno:"true"},'public static void main(String[] args) throws Exception {\n  Server server = newServer(8080);\n\n  Runtime.getRuntime().addShutdownHook(new Thread(() -> {\n      server.stop().join();\n      logger.info("Server has been stopped.");\n  }));\n\n  server.start().join();\n\n  logger.info("Server has been started. Serving dummy service at http://127.0.0.1:{}",\n              server.activeLocalPort());\n}\n')),Object(i.b)("h2",{id:"3-run-the-server-and-service",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#3-run-the-server-and-service","aria-label":"3 run the server and service permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Run the server and service"),Object(i.b)("p",null,"As the last step, launch the server and run the service to check if you're all set to go. To run the server, run the ",Object(i.b)("inlineCode",{parentName:"p"},"main()")," method in your IDE. The server and service are launched successfully if you see the following message."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"}," Server has been started. Serving dummy service at http://127.0.0.1:8080\n")),Object(i.b)("p",null,"Open the URL ",Object(i.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080")," on a web browser and check the message ",Object(i.b)("inlineCode",{parentName:"p"},"Hello, Armeria!")," is displayed in the page."),Object(i.b)("p",null,Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.245398773006134%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAATklEQVQY052PwQkAQQgD7b9DX2oBNuCqOfwc+1puTxAEkyEhEYGqwt0xNzPDzLDWQnejqj7taCMCNMb9kZmv4HaGRX+MR+Akuql2qjzAB36NO47yT0YXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"tutorial test run",title:"tutorial test run",src:"/static/6aa849a0f01434e9873c30e3a6023ab2/a6d36/tutorial_test_run.png",srcSet:["/static/6aa849a0f01434e9873c30e3a6023ab2/222b7/tutorial_test_run.png 163w","/static/6aa849a0f01434e9873c30e3a6023ab2/ff46a/tutorial_test_run.png 325w","/static/6aa849a0f01434e9873c30e3a6023ab2/a6d36/tutorial_test_run.png 650w","/static/6aa849a0f01434e9873c30e3a6023ab2/65c7b/tutorial_test_run.png 795w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("h2",{id:"whats-next",style:{position:"relative"}},Object(i.b)("a",{parentName:"h2",href:"#whats-next","aria-label":"whats next permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What's next"),Object(i.b)("p",null,"In this step, you've built a server, added a dummy service and launched a server."),Object(i.b)("p",null,"Next, at ",Object(i.b)("a",{parentName:"p",href:"/tutorials/rest/blog/prepare-data-object"},"Step 2. Prepare a data object"),", you'll write a data object to specify and contain blog post information."),Object(i.b)(o,{current:1,mdxType:"TutorialSteps"}))}h.isMDXComponent=!0},FvYO:function(e,a,t){"use strict";var r=t("Wbzz"),n=t("q1tI"),i=t.n(n),s=t("HWmb"),l=t("+ejy");a.a=function(e){var a=Object(r.useStaticQuery)("3172452987").allMdx.nodes;return i.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:a,index:s,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-create-server-mdx-98d1aa8b738e607e503f.js.map