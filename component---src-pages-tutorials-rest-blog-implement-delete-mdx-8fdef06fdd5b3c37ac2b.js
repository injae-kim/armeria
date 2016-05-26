(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{FvYO:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),o=a.n(r),i=a("HWmb"),l=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("3172452987").allMdx.nodes;return o.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"tutorials",menuTitle:!0,pageTitleSuffix:"Armeria tutorial"}))}},HWmb:function(e){e.exports=JSON.parse('{"root":["index"],"Useful links":{"User manual":"/docs","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"REST service":["rest/blog","rest/blog/create-server","rest/blog/prepare-data-object","rest/blog/add-services-to-server","rest/blog/implement-create","rest/blog/implement-read","rest/blog/implement-update","rest/blog/implement-delete"],"gRPC service":{"Coming soon":null},"Thrift service":{"Coming soon":null}}')},UOaV:function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return i})),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("FvYO"),i="Implementing DELETE operation",l={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=c("TutorialSteps"),s=c("Warning"),b={pageTitle:i,_frontmatter:l},m=o.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"implementing-delete-operation",style:{position:"relative"}},Object(r.b)("a",{parentName:"h1",href:"#implementing-delete-operation","aria-label":"implementing delete operation permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implementing DELETE operation"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#what-you-need"},"What you need"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#1-map-http-method"},"1. Map HTTP method"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#2-handle-parameters"},"2. Handle parameters"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#3-implement-service-code"},"3. Implement service code")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#delete-a-blog-post"},"Delete a blog post")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#handle-exceptions"},"Handle exceptions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-blocking"},"Add blocking")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#4-return-response"},"4. Return response"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#5-test-deleting-a-blog-post"},"5. Test deleting a blog post"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"#next-step"},"Next step")))),Object(r.b)("p",null,"In this step, we'll write a method for deleting a blog post. By completing this step, you'll learn to map your service with the HTTP DELETE (",Object(r.b)("a",{parentName:"p",href:"type://@Delete:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Delete.html"},"type://@Delete"),") method, customize an exception handler, and use a blocking task executor."),Object(r.b)(p,{current:7,mdxType:"TutorialSteps"}),Object(r.b)("h2",{id:"what-you-need",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#what-you-need","aria-label":"what you need permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"What you need"),Object(r.b)("p",null,"You must have the following files ready for deleting a blog post. You can always ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria-examples/blob/master/tutorials/rest-api-annotated-service/src/main/java/example/armeria/server/blog/"},"download")," the full version, instead of creating one yourself."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Main.java from ",Object(r.b)("a",{parentName:"li",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server")),Object(r.b)("li",{parentName:"ul"},"BlogPost.java from ",Object(r.b)("a",{parentName:"li",href:"/tutorials/rest/blog/prepare-data-object"},"Step 2. Prepare a data object")),Object(r.b)("li",{parentName:"ul"},"BlogService.java from ",Object(r.b)("a",{parentName:"li",href:"/tutorials/rest/blog/add-services-to-server"},"Step 3. Add services to a server"))),Object(r.b)(s,{mdxType:"Warning"},Object(r.b)("p",null,"To test deleting a blog post, you need to have blog posts created, which requires you to have the creation method implemented in the BlogService.java. See ",Object(r.b)("a",{parentName:"p",href:"/tutorials/rest/blog/implement-create"},"Step 4. Implement CREATE")," for instructions.")),Object(r.b)("h2",{id:"1-map-http-method",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#1-map-http-method","aria-label":"1 map http method permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"1. Map HTTP method"),Object(r.b)("p",null,"Let's start ",Object(r.b)("a",{parentName:"p",href:"/docs/server-annotated-service#mapping-http-service-methods"},"mapping the HTTP DELETE method")," with our service method:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Declare a service method, ",Object(r.b)("inlineCode",{parentName:"li"},"deleteBlogPost()")," in the class ",Object(r.b)("inlineCode",{parentName:"li"},"BlogService"),"."),Object(r.b)("li",{parentName:"ol"},"Map this service method with the HTTP DELETE method by adding the ",Object(r.b)("a",{parentName:"li",href:"type://@Delete:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Delete.html"},"type://@Delete")," annotation."),Object(r.b)("li",{parentName:"ol"},"Bind the endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/blogs")," to the method.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=6",filename:"BlogService.java",highlight:"6"},'import com.linecorp.armeria.server.annotation.Delete;\n\npublic final class BlogService {\n  ...\n\n  @Delete("/blogs")\n  public void deleteBlogPost(int id) {\n    // Delete a blog post\n  }\n}\n')),Object(r.b)("h2",{id:"2-handle-parameters",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#2-handle-parameters","aria-label":"2 handle parameters permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"2. Handle parameters"),Object(r.b)("p",null,"Let's take the blog post ID (",Object(r.b)("inlineCode",{parentName:"p"},"id"),") as a path parameter for identifying the post to delete."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Take in the ID value as a path parameter by adding ",Object(r.b)("inlineCode",{parentName:"p"},"/blogs/:id")," to the ",Object(r.b)("a",{parentName:"p",href:"type://@Delete:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Delete.html"},"type://@Delete")," annotation.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/server-annotated-service#parameter-injection"},"Inject the path parameter")," to the service method by annotating the parameter with ",Object(r.b)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=6-7",filename:"BlogService.java",highlight:"6-7"},'import com.linecorp.armeria.server.annotation.Param;\n\npublic final class BlogService {\n  ...\n\n  @Delete("/blogs/:id")\n  public void deleteBlogPost(@Param int id) {\n    // Delete a blog post\n  }\n}\n')))),Object(r.b)("h2",{id:"3-implement-service-code",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#3-implement-service-code","aria-label":"3 implement service code permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"3. Implement service code"),Object(r.b)("p",null,"In this step, write the code to delete a blog post, handle an exception, and block the operation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#delete-a-blog-post"},"Delete a blog post")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#handle-exceptions"},"Handle exceptions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-blocking"},"Add blocking"))),Object(r.b)("h3",{id:"delete-a-blog-post",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#delete-a-blog-post","aria-label":"delete a blog post permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Delete a blog post"),Object(r.b)("p",null,"Deleting a given blog post in this tutorial means removing a blog post from the map, ",Object(r.b)("inlineCode",{parentName:"p"},"blogPosts"),". However, in real services you would be performing this action on a database."),Object(r.b)("p",null,"To delete a blog post, copy line 3 into the ",Object(r.b)("inlineCode",{parentName:"p"},"deleteBlogPost()")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.Java highlight=3 showlineno=true",filename:"BlogService.Java",highlight:"3",showlineno:"true"},'@Delete("/blogs/:id")\npublic void deleteBlogPost(@Param int id) {\n  BlogPost removed = blogPosts.remove(id);\n}\n')),Object(r.b)("h3",{id:"handle-exceptions",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#handle-exceptions","aria-label":"handle exceptions permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Handle exceptions"),Object(r.b)("p",null,"What if there is no such post to delete? We can check if the blog exists before attempting to remove the blog post. Here, let's handle it after the attempt."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Throw an ",Object(r.b)("inlineCode",{parentName:"p"},"IllegalArgumentException")," if no blog post exists with a given ID."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java",filename:"BlogService.java"},'@Delete("/blogs/:id")\npublic void deleteBlogPost(@Param int id) {\n  ...\n\n  if (removed == null) {\n    throw new IllegalArgumentException("The blog post does not exist. id: " + id);\n  }\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create an exception handler for the blog service:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Create a file, BadRequestExceptionHandler.java."),Object(r.b)("li",{parentName:"ol"},"In the file, declare a custom exception handler implementing Armeria's ",Object(r.b)("a",{parentName:"li",href:"type://ExceptionHandlerFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ExceptionHandlerFunction.html"},"type://ExceptionHandlerFunction")," interface.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BadRequestExceptionHandler.java",filename:"BadRequestExceptionHandler.java"},"package example.armeria.server.blog;\n\nimport com.linecorp.armeria.server.annotation.ExceptionHandlerFunction;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\npublic class BadRequestExceptionHandler implements ExceptionHandlerFunction {\n  private static final ObjectMapper mapper = new ObjectMapper();\n}\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Implement your own exception handler by overriding the default ",Object(r.b)("inlineCode",{parentName:"p"},"handleException()")," method. Add a code block for handling the ",Object(r.b)("inlineCode",{parentName:"p"},"IllegalArgumentException")," thrown. For this tutorial, return a BAD REQUEST as the response."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BadRequesExceptionHandler.java highlight=11,15,17",filename:"BadRequesExceptionHandler.java",highlight:"11,15,17"},'import com.fasterxml.jackson.databind.node.ObjectNode;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.server.ServiceRequestContext;\n\npublic class BadRequestExceptionHandler implements ExceptionHandlerFunction {\n  ...\n\n  @Override\n  public HttpResponse handleException(ServiceRequestContext ctx, HttpRequest req, Throwable cause) {\n    if (cause instanceof IllegalArgumentException) {\n        String message = cause.getMessage();\n        ObjectNode objectNode = mapper.createObjectNode();\n        objectNode.put("error", message);\n        return HttpResponse.ofJson(HttpStatus.BAD_REQUEST, objectNode);\n    }\n    return ExceptionHandlerFunction.fallthrough();\n  }\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Assign the exception handler to the ",Object(r.b)("inlineCode",{parentName:"p"},"deleteBlogPost()")," method by annotating the ",Object(r.b)("inlineCode",{parentName:"p"},"deletePost()")," method with the ",Object(r.b)("a",{parentName:"p",href:"type://@ExceptionHandler:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ExceptionHandler.html"},"type://@ExceptionHandler")," as follows."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=2",filename:"BlogService.java",highlight:"2"},'import com.linecorp.armeria.server.annotation.ExceptionHandler;\n\n@Delete("/blogs/:id")\n@ExceptionHandler(BadRequestExceptionHandler.class)\npublic void deleteBlogPost(@Param int id) { ... }\n')))),Object(r.b)("h3",{id:"add-blocking",style:{position:"relative"}},Object(r.b)("a",{parentName:"h3",href:"#add-blocking","aria-label":"add blocking permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Add blocking"),Object(r.b)("p",null,"With real services, accessing and operating on a database takes time. We need to hand over such blocking tasks to ",Object(r.b)("a",{parentName:"p",href:"/docs/server-annotated-service#specifying-a-blocking-task-executor"},"blocking task executor")," so that the EventLoop isn't blocked. There are a few options to implement this; we'll annotate our service method with the ",Object(r.b)("a",{parentName:"p",href:"type://@Blocking:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Blocking.html"},"type://@Blocking"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=6",filename:"BlogService.java",highlight:"6"},'import com.linecorp.armeria.server.annotation.Blocking;\n\npublic final class BlogService {\n  ...\n\n  @Blocking\n  @Delete("/blogs/:id")\n  @ExceptionHandler(BadRequestExceptionHandler.class)\n  public void deleteBlogPost(@Param int id) { ... }\n}\n')),Object(r.b)("h2",{id:"4-return-response",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#4-return-response","aria-label":"4 return response permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"4. Return response"),Object(r.b)("p",null,"We've already handled returning the not found error in the ",Object(r.b)("a",{parentName:"p",href:"#handle-exceptions"},"exception handling section"),". Here, we'll return a response for successful deletion."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Replace the return type of the ",Object(r.b)("inlineCode",{parentName:"li"},"deleteBlogPost()")," method from ",Object(r.b)("inlineCode",{parentName:"li"},"void")," to ",Object(r.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),"."),Object(r.b)("li",{parentName:"ol"},"Return a response using Armeria's ",Object(r.b)("a",{parentName:"li",href:"type://HttpResponse:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html"},"type://HttpResponse"),", containing ",Object(r.b)("a",{parentName:"li",href:"type://HttpStatus#NO_CONTENT:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpStatus.html#NO_CONTENT"},"type://HttpStatus#NO_CONTENT"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java",metastring:"filename=BlogService.java highlight=9,11",filename:"BlogService.java",highlight:"9,11"},'import com.linecorp.armeria.common.HttpResponse;\n\npublic final class BlogService {\n  ...\n\n  @Blocking\n  @Delete("/blogs/:id")\n  @ExceptionHandler(BadRequestExceptionHandler.class)\n  public HttpResponse deleteBlogPost(@Param int id) {\n    ...\n    return HttpResponse.of(HttpStatus.NO_CONTENT);\n  }\n}\n')),Object(r.b)("h2",{id:"5-test-deleting-a-blog-post",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#5-test-deleting-a-blog-post","aria-label":"5 test deleting a blog post permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"5. Test deleting a blog post"),Object(r.b)("p",null,"Let's test deleting a blog post."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run the server like we did in ",Object(r.b)("a",{parentName:"p",href:"/tutorials/rest/blog/create-server"},"Step 1. Create a server")," by running the ",Object(r.b)("inlineCode",{parentName:"p"},"main()"),' method or using Gradle. When you see the message, "Server has been started", you can try testing service methods.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a couple of blog posts to test deleting a blog post and get the ID value returned. Enter the cURL commands below."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ curl --request POST \'localhost:8080/blogs\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{"title":"First post for testing", "content":"Test deletion."}\'\n')),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ curl --request POST \'localhost:8080/blogs\' \\\n-H \'Content-Type: application/json\' \\\n-d \'{"title":"Second post for testing", "content":"Test deleting a post."}\'\n')),Object(r.b)("p",{parentName:"li"},"For each command, you'll get a response similar to the following."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'{"id":0,"title":"First post for testing","content":"Test deletion.","createdAt":...,"modifiedAt":...}\n\n{"id":1,"title":"Second post for testing","content":"Test deleting a post.","createdAt":...,"modifiedAt":...}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Let's delete the second blog with the ID, ",Object(r.b)("inlineCode",{parentName:"p"},"0"),". Since our service method doesn't return anything, you won't see any response."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ curl --request DELETE 'localhost:8080/blogs/0'\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Let's retrieve the blog post list to see if the post has been deleted successfully."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ curl --request GET 'localhost:8080/blogs'\n")),Object(r.b)("p",{parentName:"li"},"  The response contains only one blog post. We can tell that the blog post with the ID ",Object(r.b)("inlineCode",{parentName:"p"},"0")," has been removed."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'{"id":1,"title":"Second post for testing","content":"Test deleting a post.","createdAt":...,"modifiedAt":...}\n')),Object(r.b)("p",{parentName:"li"},"You can test this also with Armeria's ",Object(r.b)("a",{parentName:"p",href:"/docs/server-docservice"},"Documentation service"),". See ",Object(r.b)("a",{parentName:"p",href:"/tutorials/rest/blog/add-services-to-server#using-docservice-after-adding-service-methods"},"Using DocService after adding service methods")," for instructions."))),Object(r.b)("h2",{id:"next-step",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#next-step","aria-label":"next step permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Next step"),Object(r.b)("p",null,"In this step, we've written a method for a DELETE operation and used Armeria's annotations; ",Object(r.b)("a",{parentName:"p",href:"type://@Delete:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Delete.html"},"type://@Delete"),", ",Object(r.b)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param"),", ",Object(r.b)("a",{parentName:"p",href:"type://@ExceptionHandler:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ExceptionHandler.html"},"type://@ExceptionHandler")," and ",Object(r.b)("a",{parentName:"p",href:"type://@Blocking:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Blocking.html"},"type://@Blocking"),"."),Object(r.b)("p",null,"We've come to the end of this tutorial. Next, try adding more service methods to the tutorial or have a go at developing a service of your own."),Object(r.b)(p,{current:7,mdxType:"TutorialSteps"}))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-rest-blog-implement-delete-mdx-8fdef06fdd5b3c37ac2b.js.map