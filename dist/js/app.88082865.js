(function(t){function s(s){for(var e,o,n=s[0],l=s[1],c=s[2],g=0,d=[];g<n.length;g++)o=n[g],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);h&&h(s);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,s=0;s<r.length;s++){for(var a=r[s],e=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(e=!1)}e&&(r.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},i={app:0},r=[];function o(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f36394f3"}[t]+".js"}function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var s=[],a=i[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=i[t]=[s,e]}));s.push(a[2]=e);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.src=o(t);var c=new Error;r=function(s){l.onerror=l.onload=null,clearTimeout(g);var a=i[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;c.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",c.name="ChunkLoadError",c.type=e,c.request=r,a[1](c)}i[t]=void 0}};var g=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(s)},n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/",n.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=s,l=l.slice();for(var g=0;g<l.length;g++)s(l[g]);var h=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[a("i",{staticClass:"icofont-navigation-menu"})]),a("header",{attrs:{id:"header"}},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"profile"},[a("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"assets/img/myles_mountain.jpg",alt:""}}),a("h1",{staticClass:"text-light"},[a("a",{attrs:{href:"index.html"}},[t._v("Cale Anderson")])]),a("div",{staticClass:"social-links mt-3 text-center"},[a("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/cale_anderson9"}},[a("i",{staticClass:"bx bxl-twitter"})]),a("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/cale.anderson.5"}},[a("i",{staticClass:"bx bxl-facebook"})]),a("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/caleanderson9/"}},[a("i",{staticClass:"bx bxl-linkedin"})]),a("a",{staticClass:"github",attrs:{href:"https://github.com/cranderson9"}},[a("i",{staticClass:"bx bxl-github"})])])]),a("nav",{staticClass:"nav-menu"},[a("ul",[a("li",{staticClass:"active"},[a("a",{attrs:{href:"index.html"}},[a("i",{staticClass:"bx bx-home"}),t._v(" "),a("span",[t._v("Home")])])]),a("li",[a("a",{attrs:{href:"#about"}},[a("i",{staticClass:"bx bx-user"}),t._v(" "),a("span",[t._v("About")])])]),a("li",[a("a",{attrs:{href:"#projects"}},[a("i",{staticClass:"bx bx-book-content"}),t._v(" Projects")])]),a("li",[a("a",{attrs:{href:"#contact"}},[a("i",{staticClass:"bx bx-server"}),t._v(" Contact")])])])]),a("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[a("i",{staticClass:"icofont-navigation-menu"})])])]),a("section",{staticClass:"d-flex flex-column justify-content-center align-items-center",attrs:{id:"hero"}},[a("div",{staticClass:"hero-container",attrs:{"data-aos":"fade-in"}},[a("h1",[t._v("Cale Anderson")]),a("p",[t._v("Full Stack Web Developer/ Father/ Teacher "),a("span",{staticClass:"typed",attrs:{"data-typed-items":"Full Stack Web Developer, Teacher"}})])])]),a("main",{attrs:{id:"main"}},[a("section",{staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("About")]),a("p")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4",attrs:{"data-aos":"fade-right"}},[a("img",{staticClass:"img-fluid",attrs:{src:"assets/img/profile_pic.png",alt:""}})]),a("div",{staticClass:"col-lg-8 pt-4 pt-lg-0 content",attrs:{"data-aos":"fade-left"}},[a("h3",[t._v("Full Stack Web Developer & Teacher")]),a("p",{staticClass:"font-italic"},[t._v(" I am a web developer with a passion for learning new things. I love the different components that bring a project or app to life. In my previous careers as a teacher and technology coach, growth mindset, relationships, and empathy have always been paramount, and I am bringing them my next role in software development. ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ul",[a("li",[a("i",{staticClass:"icofont-rounded-right"}),t._v(" "),a("strong",[t._v("City:")]),t._v(" Kewaskum, Wi")])])]),a("div",{staticClass:"col-lg-6"},[a("ul",[a("li",[a("i",{staticClass:"icofont-rounded-right"}),t._v(" "),a("strong",[t._v("Email:")]),t._v(" caleanderson9@gmail.com")])])])]),a("p",[t._v(" I have alaways had an interest in technolpgy but never knew exactly what area intriqued me most. It wasn't until I started teaching coding to my elementary students that it all clicked. While I love teaching and working with my students, I always felt like I was destined to do more. Learning to code has been challenging and I love the challenge. This is what attracted to me devlopment. There is always room for growth. I will never know everything and there will always be something new to learn. As a web developer, I strive to to build dynamic web applications and offer innovative solutions to complex problems. ")])])])])]),a("section",{staticClass:"skills section-bg",attrs:{id:"skills"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("Tech Stack")]),a("p"),a("br")]),a("div",{staticClass:"row skills-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("a",{attrs:{href:"https://www.ruby-lang.org/en/"}},[a("img",{staticClass:"rounded-circle img-thumbnail float-left",attrs:{id:"ruby-logo",src:"assets/img/ruby.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://rubyonrails.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail float-left",attrs:{id:"rails-logo",src:"assets/img/rails.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.javascript.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail float-left",attrs:{id:"JS-logo",src:"assets/img/javascript.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://vuejs.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"vue-logo",src:"assets/img/vue.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.typescriptlang.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"typescript-logo",src:"assets/img/typescript.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://angular.io/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"angular-logo",src:"assets/img/angular.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://html.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"html5-logo",src:"assets/img/html5.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.w3.org/Style/CSS/Overview.en.html"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"css-logo",src:"assets/img/css.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.postgresql.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"postgreSQL-logo",src:"assets/img/postgreSQL.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://getbootstrap.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"bootstrap-logo",src:"assets/img/bootstrap.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://materializecss.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"materialize-logo",src:"assets/img/materialize.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://git-scm.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"git-logo",src:"assets/img/git.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://github.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"github-logo",src:"assets/img/github.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.npmjs.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"npm-logo",src:"assets/img/npm.png",height:"200",width:"200"}})])]),a("div",{staticClass:"section-title"},[a("h2",[t._v("Adding Soon")]),a("h4",[t._v("Always learning new things")]),a("br")]),a("div",{staticClass:"row"},[a("a",{attrs:{href:"https://dotnet.microsoft.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:".net-logo",src:"assets/img/net.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://reactjs.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"react-logo",src:"assets/img/react.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.python.org/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"python-logo",src:"assets/img/python.png",height:"200",width:"200"}})]),a("a",{attrs:{href:"https://www.djangoproject.com/"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"django-logo",src:"assets/img/django.png",height:"200",width:"200"}})])])])])])]),a("section",{staticClass:"projects section-bg",attrs:{id:"projects"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",{staticClass:"center"},[t._v("Projects")])]),a("h3",[t._v("Bootrax Hiking App")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"assets/img/boottrax.png",width:"700",height:"500"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/ruby.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"80",height:"80",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/vue.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/css.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/html5.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/javascript.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/bootstrap.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/postgreSQL.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. ")])]),a("div",{staticClass:"row"},[a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/capstone_boottrax_frontend"}},[t._v(" GitHub frontend ")])]),a("br"),a("div",{staticClass:"row"},[a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/Capstone-BootTrax"}},[t._v(" GitHub backend ")])])])]),a("br"),a("hr"),a("br"),a("h3",[t._v("This Site")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"assets/img/personal_site.png",width:"700",height:"500"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/ruby.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"80",height:"80",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/vue.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/css.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/html5.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/javascript.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/bootstrap.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. ")])]),a("div",{staticClass:"row"},[a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/cranderson9.github.io"}},[t._v(" GitHub ")])])])]),a("br"),a("hr"),a("br"),a("h3",[t._v("Backend Shopping App")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"assets/img/mini_capstone.png",width:"700",height:"500"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/ruby.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"80",height:"80",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/postgreSQL.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("E-commerce app utilizing join tables, JWT authentication and a shopping cart.")])]),a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/mini_capstone"}},[t._v(" GitHub ")])])])])]),a("section",{staticClass:"contact",attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("Contact")]),a("p",[t._v("Have a question or interested in working together?")])]),a("div",{staticClass:"row",attrs:{"data-aos":"fade-in"}},[a("div",{staticClass:"col-lg-7 mt-5 mt-lg-0 d-flex align-center"},[a("form",{staticClass:"php-email-form",attrs:{action:"forms/contact.php",method:"post",role:"form"}},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"name"}},[t._v("Your Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}}),a("div",{staticClass:"validate"})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"name"}},[t._v("Your Email")]),a("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email","data-rule":"email","data-msg":"Please enter a valid email"}}),a("div",{staticClass:"validate"})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Subject")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}}),a("div",{staticClass:"validate"})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Message")]),a("textarea",{staticClass:"form-control",attrs:{name:"message",rows:"10","data-rule":"required","data-msg":"Please write something for us"}}),a("div",{staticClass:"validate"})]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"loading"},[t._v("Loading")]),a("div",{staticClass:"error-message"}),a("div",{staticClass:"sent-message"},[t._v("Your message has been sent. Thank you!")])]),a("div",{staticClass:"text-center"},[a("button",{attrs:{type:"submit"}},[t._v("Send Message")])])])])])])])]),a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"copyright"},[t._v(" © Copyright "),a("strong",[a("span",[t._v("Cale Anderson 2020")])])]),a("div",{staticClass:"credits"},[t._v(" Designed by "),a("a",{attrs:{href:"https://bootstrapmade.com/"}},[t._v("BootstrapMade")])])])]),a("a",{staticClass:"back-to-top",attrs:{href:"#"}},[a("i",{staticClass:"icofont-simple-up"})])])}],o=a("2877"),n={},l=Object(o["a"])(n,i,r,!1,null,null,null),c=l.exports,g=(a("d3b7"),a("8c4f")),h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],m=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},u=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},v=p,f=(a("8f11"),Object(o["a"])(v,m,u,!1,null,"ebbc34ee",null)),b=f.exports,C={name:"Home",components:{HelloWorld:b}},w=C,_=Object(o["a"])(w,h,d,!1,null,null,null),k=_.exports;e["a"].use(g["a"]);var y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],x=new g["a"]({mode:"history",base:"/",routes:y}),j=x;e["a"].config.productionTip=!1,new e["a"]({router:j,render:function(t){return t(c)}}).$mount("#app")},"8f11":function(t,s,a){"use strict";var e=a("df05"),i=a.n(e);i.a},cf05:function(t,s,a){t.exports=a.p+"img/logo.82b9c7a5.png"},df05:function(t,s,a){}});
//# sourceMappingURL=app.88082865.js.map