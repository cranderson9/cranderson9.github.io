(function(t){function s(s){for(var e,n,o=s[0],c=s[1],l=s[2],g=0,h=[];g<o.length;g++)n=o[g],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);m&&m(s);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,s=0;s<r.length;s++){for(var a=r[s],e=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(e=!1)}e&&(r.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f36394f3"}[t]+".js"}function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var s=[],a=i[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=i[t]=[s,e]}));s.push(a[2]=e);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;r=function(s){c.onerror=c.onload=null,clearTimeout(g);var a=i[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;l.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",l.name="ChunkLoadError",l.type=e,l.request=r,a[1](l)}i[t]=void 0}};var g=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(s)},o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var g=0;g<c.length;g++)s(c[g]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[a("i",{staticClass:"icofont-navigation-menu"})]),a("header",{attrs:{id:"header"}},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"profile"},[a("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"assets/img/myles_mountain.jpg",alt:""}}),a("h1",{staticClass:"text-light"},[a("a",{attrs:{href:"index.html"}},[t._v("Cale Anderson")])]),a("div",{staticClass:"social-links mt-3 text-center"},[a("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/cale_anderson9"}},[a("i",{staticClass:"bx bxl-twitter"})]),a("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/cale.anderson.5"}},[a("i",{staticClass:"bx bxl-facebook"})]),a("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/caleanderson9/"}},[a("i",{staticClass:"bx bxl-linkedin"})]),a("a",{staticClass:"github",attrs:{href:"https://github.com/cranderson9"}},[a("i",{staticClass:"bx bxl-github"})])])]),a("nav",{staticClass:"nav-menu"},[a("ul",[a("li",{staticClass:"active"},[a("a",{attrs:{href:"index.html"}},[a("i",{staticClass:"bx bx-home"}),t._v(" "),a("span",[t._v("Home")])])]),a("li",[a("a",{attrs:{href:"#about"}},[a("i",{staticClass:"bx bx-user"}),t._v(" "),a("span",[t._v("About")])])]),a("li",[a("a",{attrs:{href:"#projects"}},[a("i",{staticClass:"bx bx-book-content"}),t._v(" Projects")])]),a("li",[a("a",{attrs:{href:"#contact"}},[a("i",{staticClass:"bx bx-server"}),t._v(" Contact")])])])]),a("button",{staticClass:"mobile-nav-toggle d-xl-none",attrs:{type:"button"}},[a("i",{staticClass:"icofont-navigation-menu"})])])]),a("section",{staticClass:"d-flex flex-column justify-content-center align-items-center",attrs:{id:"hero"}},[a("div",{staticClass:"hero-container",attrs:{"data-aos":"fade-in"}},[a("h1",[t._v("Cale Anderson")]),a("p",[t._v("Full Stack Web Developer/ Father/ Teacher "),a("span",{staticClass:"typed",attrs:{"data-typed-items":"Full Stack Web Developer, Teacher"}})])])]),a("main",{attrs:{id:"main"}},[a("section",{staticClass:"about",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("About")]),a("p")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4",attrs:{"data-aos":"fade-right"}},[a("img",{staticClass:"img-fluid",attrs:{id:"profile-pic",src:"assets/img/profile_pic.png",alt:""}})]),a("div",{staticClass:"col-lg-8 pt-4 pt-lg-0 content",attrs:{"data-aos":"fade-left"}},[a("h3",[t._v("Full Stack Web Developer & Teacher")]),a("p",{staticClass:"font-italic"},[t._v(" I am a web developer with a passion for learning new things. I love the different components that bring a project or app to life. In my previous careers as a teacher and technology coach, growth mindset, relationships, and empathy have always been paramount, and I am bringing them my next role in software development. ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("ul",[a("li",[a("i",{staticClass:"icofont-rounded-right"}),t._v(" "),a("strong",[t._v("City:")]),t._v(" Kewaskum, Wi")])])]),a("div",{staticClass:"col-lg-6"},[a("ul",[a("li",[a("i",{staticClass:"icofont-rounded-right"}),t._v(" "),a("strong",[t._v("Email:")]),t._v(" caleanderson9@gmail.com")])])])]),a("p",[t._v(" I have always had an interest in technology but never knew exactly what area intriqued me most. It wasn't until I started teaching coding to my elementary students that it all clicked. While I love teaching and working with my students, I always felt like I was destined to do more. Learning to code has been challenging and I love the challenge. This is what attracted to me devlopment. There is always room for growth. I will never know everything and there will always be something new to learn. As a web developer, I strive to to build dynamic web applications and offer innovative solutions to complex problems. ")])])])])]),a("section",{staticClass:"skills section-bg",attrs:{id:"skills"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("Tech Stack")]),a("p")]),a("div",{staticClass:"row skills-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row  center-block text-center"},[a("div",{staticClass:"col-1.5"},[a("a",{attrs:{href:"https://www.javascript.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"vue-logo",src:"assets/img/icons8-javascript-96.png"}})]),a("h6",[t._v("Javascript")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"javascript-logo",src:"assets/img/icons8-vue-js-96.png"}})]),a("h6",[t._v("Vuejs")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"typescript-logo",src:"assets/img/icons8-typescript-96.png"}})]),a("h6",[t._v("Typescript")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://angular.io/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"angular-logo",src:"assets/img/icons8-angularjs-96.png"}})]),a("h6",[t._v("Angular")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://html.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"html5-logo",src:"assets/img/icons8-html-5-96.png"}})]),a("h6",[t._v("HTML5")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.w3.org/Style/CSS/Overview.en.html",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"css-logo",src:"assets/img/icons8-css3-96.png"}})]),a("h6",[t._v("CSS3")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"postgreSQL-logo",src:"assets/img/icons8-postgresql-96.png"}})]),a("h6",[t._v("PostgreSQL")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://getbootstrap.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"bootstrap-logo",src:"assets/img/icons8-bootstrap-96.png"}})]),a("h6",[t._v("Bootstrap")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.ruby-lang.org/en/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"ruby-logo",src:"assets/img/icons8-ruby-programming-language-96.png"}})]),a("h6",[t._v("Ruby")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://rubyonrails.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"rails-logo",src:"assets/img/ruby-on-rails.jpeg",width:"108"}})]),a("h6",[t._v("Ruby on Rails")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://materializecss.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"materialize-logo",src:"assets/img/materialize.png",width:"106"}})]),a("h6",[t._v("Materialize")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://git-scm.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"git-logo",src:"assets/img/icons8-git-96.png"}})]),a("h6",[t._v("Git")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://github.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"github-logo",src:"assets/img/icons8-github-96.png"}})]),a("h6",[t._v("Github")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"npm-logo",src:"assets/img/icons8-npm-96.png"}})]),a("h6",[t._v("NPM")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.heroku.com",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"heroku-logo",src:"assets/img/icons8-heroku-96.png"}})]),a("h6",[t._v("Heroku")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"netlify-logo",src:"assets/img/netlify.png",width:"108"}})]),a("h6",[t._v("Netlify")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.heroku.com",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"heroku-logo",src:"assets/img/icons8-sass-96.png"}})]),a("h6",[t._v("Sass")])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"section-title",attrs:{id:"adding-soon"}},[a("h2",[t._v("Adding Soon")]),a("h4",[t._v("Always learning new things")]),a("br")])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row center-block text-center"},[a("div",{staticClass:"col-1.5 "},[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"C#",src:"assets/img/icons8-c-sharp-logo-96.png"}})]),a("h6",[t._v("C#")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://dotnet.microsoft.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"net-logo",src:"assets/img/dotnet.svg",width:"110"}})]),a("h6",[t._v(".NET")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://reactjs.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"react-logo",src:"assets/img/icons8-react-96.png"}})]),a("h6",[t._v("React")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.python.org/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"python-logo",src:"assets/img/icons8-python-96.png"}})]),a("h6",[t._v("Python")])]),a("div",{staticClass:"col-1.5 ml-1"},[a("a",{attrs:{href:"https://www.djangoproject.com/",target:"_blank"}},[a("img",{staticClass:"rounded-circle img-thumbnail",attrs:{id:"django-logo",src:"assets/img/icons8-django-96.png"}})]),a("h6",[t._v("Django")])])])])])])]),a("section",{staticClass:"projects section-bg",attrs:{id:"projects"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",{staticClass:"center"},[t._v("Projects")])]),a("h3",[t._v("Hiking App")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8",attrs:{id:"project-pictures"}},[a("img",{attrs:{src:"assets/img/boottrax.png"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-ruby-programming-language-48.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-vue-js-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-css3-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-html-5-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-javascript-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-bootstrap-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-postgresql-48.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. ")])]),a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/capstone_boottrax_frontend"}},[t._v(" GitHub frontend ")]),a("br"),a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/Capstone-BootTrax"}},[t._v(" GitHub backend ")])])]),a("br"),a("hr"),a("br"),a("h3",[t._v("This Site")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"assets/img/personal_site.png"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-ruby-programming-language-48.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-vue-js-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-css3-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-html-5-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-javascript-48.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-bootstrap-48.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"45",height:"45",src:"assets/img/netlify.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. ")])]),a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/cranderson9.github.io"}},[t._v(" GitHub ")])])]),a("br"),a("hr"),a("br"),a("h3",[t._v("Backend Shopping App")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("img",{attrs:{src:"assets/img/mini_capstone.png"}})]),a("div",{staticClass:"col-md-4 "},[a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-danger"},[t._v("Tech Stack")]),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-ruby-programming-language-48.png"}}),a("img",{staticClass:"img-stack",attrs:{width:"50",height:"50",src:"assets/img/rails.png"}}),a("img",{staticClass:"img-stack",attrs:{src:"assets/img/icons8-postgresql-48.png"}})]),a("div",{staticClass:"description"},[a("h4",{staticClass:"info-title text-info"},[t._v("Features")]),a("p",[t._v("E-commerce app utilizing join tables, JWT authentication and a shopping cart.")])]),a("a",{staticClass:"badge badge-danger",attrs:{href:"https://github.com/cranderson9/mini_capstone"}},[t._v(" GitHub ")])])])])]),a("section",{staticClass:"contact",attrs:{id:"contact"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("h2",[t._v("Contact")]),a("h5",[t._v("Have a question or interested in working together?")])]),a("div",{staticClass:"row",attrs:{"data-aos":"fade-in"}},[a("div",{staticClass:"col-lg-2"}),a("div",[a("a",{staticClass:"btn btn-primary contact-button",attrs:{href:"mailto:cranderson9@gmail.com",id:"contact-button",target:"_blank"}},[t._v("Contact Me")])])])])])]),a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"copyright"},[t._v(" © Copyright "),a("strong",[a("span",[t._v("Cale Anderson 2020")])])]),a("div",{staticClass:"credits"},[t._v(" Designed by "),a("a",{attrs:{href:"https://bootstrapmade.com/"}},[t._v("BootstrapMade")])])])]),a("a",{staticClass:"back-to-top",attrs:{href:"#"}},[a("i",{staticClass:"icofont-simple-up"})])])}],n=a("2877"),o={},c=Object(n["a"])(o,i,r,!1,null,null,null),l=c.exports,g=(a("d3b7"),a("8c4f")),m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},h=[],d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},u=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},v=p,b=(a("8f11"),Object(n["a"])(v,d,u,!1,null,"ebbc34ee",null)),f=b.exports,C={name:"Home",components:{HelloWorld:f}},_=C,w=Object(n["a"])(_,m,h,!1,null,null,null),k=w.exports;e["a"].use(g["a"]);var y=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],j=new g["a"]({mode:"history",base:"/",routes:y}),x=j;e["a"].config.productionTip=!1,new e["a"]({router:x,render:function(t){return t(l)}}).$mount("#app")},"8f11":function(t,s,a){"use strict";var e=a("df05"),i=a.n(e);i.a},cf05:function(t,s,a){t.exports=a.p+"img/logo.82b9c7a5.png"},df05:function(t,s,a){}});
//# sourceMappingURL=app.5fa901fb.js.map