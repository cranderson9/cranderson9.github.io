<template>
  <div id="app">
    <!-- ======= Mobile nav toggle button ======= -->
  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="assets/img/myles_mountain.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Cale Anderson</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://twitter.com/cale_anderson9" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/cale.anderson.5" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.linkedin.com/in/caleanderson9/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          <a href="https://github.com/cranderson9" class="github"><i class="bx bxl-github"></i></a>
        </div>
      </div>

      <nav class="nav-menu">
        <ul>
          <li class="active"><a href="index.html"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#projects"><i class="bx bx-book-content"></i> Projects</a></li>
          <li><a href="#contact"><i class="bx bx-server"></i> Contact</a></li>

        </ul>
      </nav><!-- .nav-menu -->
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Cale Anderson</h1>
      <p>Full Stack Web Developer/ Father/ Teacher <span class="typed" data-typed-items="Full Stack Web Developer, Teacher"></span></p>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p></p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img id="profile-pic" src="assets/img/profile_pic.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Web Developer &amp; Teacher</h3>
            <p class="font-italic">
              I am a web developer with a passion for learning new things. I love the different components that bring a project or app to life. In my previous careers as a teacher and technology coach, growth mindset, relationships, and empathy have always been paramount, and I am bringing them my next role in software development.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>City:</strong>  Kewaskum, Wi</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> caleanderson9@gmail.com</li>
                
                </ul>
              </div>
            </div>
            <p>
             I have alaways had  an interest in technolpgy but never knew exactly what area intriqued me most. It wasn't until I started teaching coding to my elementary students that it all clicked. While I love teaching and working with my students, I always felt like I was destined to do more. Learning to code has been challenging and I love the challenge. This is what attracted to me devlopment. There is always room for growth. I will never know everything and there will always be something new to learn. As a web developer, I strive to to build dynamic web applications and offer innovative solutions to complex problems. 
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    

    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Tech Stack</h2>
          <p></p>
        </div>

        <div class="row skills-content">

          <div class="container">
            <div class="row">
              <a href="https://www.javascript.com/" target="_blank">
                <img
                  id="JS-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-javascript-96.png"
                />
               </a>
              <a href="https://vuejs.org/" target="_blank">
                <img
                  id="vue-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-vue-js-96.png"
                />
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                  id="typescript-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-typescript-96.png"
                />
              </a>
              <a href="https://angular.io/" target="_blank">
                <img
                  id="angular-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-angularjs-96.png"
                />
              </a>
              <a href="https://html.com/" target="_blank">
                <img
                  id="html5-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-html-5-96.png"
                />
              </a>
              <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                <img
                  id="css-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-css3-96.png"
                />
              </a>
              <a href="https://www.postgresql.org/" target="_blank">
                <img
                  id="postgreSQL-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-postgresql-96.png"
                />
              </a>
              <a href="https://getbootstrap.com/" target="_blank">
                <img
                  id="bootstrap-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-bootstrap-96.png"
                />
              </a>
              <a href="https://materializecss.com/" target="_blank">
                <img
                  id="materialize-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/materialize.png"
                  width="115"
                />
              </a>
              <a href="https://git-scm.com/" target="_blank">
                <img
                  id="git-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-git-96.png"
                />
              </a>
              <a href="https://github.com/" target="_blank">
                <img
                  id="github-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-github-96.png"
                />
              </a>
              <a href="https://www.npmjs.com/" target="_blank">
                <img
                  id="npm-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-npm-96.png"
                />
              </a>
              <a href="https://www.ruby-lang.org/en/" target="_blank"> 
                <img
                  id="ruby-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/icons8-ruby-programming-language-96.png"
                />
              </a>
              <a href="https://rubyonrails.org/" target="_blank">
                <img
                  id="rails-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/ruby-on-rails.jpeg"
                  width="105"
                />
              </a>
              <a href="https://www.netlify.com/" target="_blank">
                <img
                  id="netlify-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/netlify.png"
                  width="105"
                />
              </a>
              </div>
              <br>
              <br>
              <div class="section-title" >
                <h2>Adding Soon</h2>
                <h4>Always learning new things</h4>
                 <br>
              </div>
              <div class="row">
                <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">
                  <img
                    id="C#"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/icons8-c-sharp-logo-96.png"
                  />
                </a>
                <a href="https://dotnet.microsoft.com/" target="_blank">
                  <img
                    id="net-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/dotnet.svg"
                    width="110"
                  />
                </a>
                <a href="https://reactjs.org/" target="_blank">
                  <img
                    id="react-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/icons8-react-96.png"
                  />
                </a>
                <a href="https://www.python.org/" target="_blank">
                  <img
                    id="python-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/icons8-python-96.png"
                  />
                </a>
                <a href="https://www.djangoproject.com/" target="_blank">
                  <img
                    id="django-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/icons8-django-96.png"
                  />
                </a>
            </div>
          </div>
        </div>  
      </div>
    </section><!-- End Skills Section -->

   

    <!-- ======= Project Section ======= -->
    <section id="projects" class="projects section-bg">
      <div class="container">

        <div class="section-title" >
          <h2 class="center">Projects</h2>
        </div>
          <h3>Bootrax Hiking App</h3>
        <div class="row">
            <div class="col-md-8">
                <img
                  src="assets/img/boottrax.png"  
                />
            </div>
              <div class="col-md-4 ">
                <div class="description">
                  <h4 class="info-title text-danger">Tech Stack</h4>
                  <img class="img-stack" src="assets/img/icons8-ruby-programming-language-48.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/rails.png"  />
                  <img class="img-stack" src="assets/img/icons8-vue-js-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-css3-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-html-5-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-javascript-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-bootstrap-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-postgresql-48.png"  />
                </div>
                <div class="description">
                  <h4 class="info-title text-info">Features</h4>
                  <p>App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. </p>
                </div>

                  <a href="https://github.com/cranderson9/capstone_boottrax_frontend"  class="badge badge-danger">
                  GitHub frontend 
                  </a>
                
                <br>
                  <a href="https://github.com/cranderson9/Capstone-BootTrax"  class="badge badge-danger">
                  GitHub backend
                  </a>
              </div>
        </div>
              <br>
              <hr/>
              <br>
          <h3>This Site</h3>
        <div class="row">
            <div class="col-md-8">
                <img
                  src="assets/img/personal_site.png"  
                />
            </div>
              <div class="col-md-4 ">
                <div class="description">
                  <h4 class="info-title text-danger">Tech Stack</h4>
                  <img class="img-stack" src="assets/img/icons8-ruby-programming-language-48.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/rails.png"  />
                  <img class="img-stack" src="assets/img/icons8-vue-js-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-css3-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-html-5-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-javascript-48.png"  />
                  <img class="img-stack" src="assets/img/icons8-bootstrap-48.png"  />
                  <img class="img-stack" width="45" height="45" src="assets/img/netlify.png"  />
                </div>
                <div class="description">
                  <h4 class="info-title text-info">Features</h4>
                  <p>App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. </p>
                </div>
                  <a href="https://github.com/cranderson9/cranderson9.github.io"  class="badge badge-danger">
                  GitHub 
                  </a>
              </div>
        </div>
        <br>
        <hr/>
        <br>
        <h3>Backend Shopping App</h3>
        <div class="row">
            <div class="col-md-8">
                <img
                  src="assets/img/mini_capstone.png"  
                />
            </div>
              <div class="col-md-4 ">
                <div class="description">
                  <h4 class="info-title text-danger">Tech Stack</h4>
                  <img class="img-stack" src="assets/img/icons8-ruby-programming-language-48.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/rails.png"  />
                  <img class="img-stack" src="assets/img/icons8-postgresql-48.png"  />
                </div>
                <div class="description">
                  <h4 class="info-title text-info">Features</h4>
                  <p>E-commerce app utilizing join tables, JWT authentication and a shopping cart.</p>
                </div>
                <a href="https://github.com/cranderson9/mini_capstone"  class="badge badge-danger">
                GitHub
                </a>
              </div>
        </div>

      </div>
    </section><!-- End Projects Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Have a question or interested in working together?</p>
        </div>

        <div class="row" data-aos="fade-in">

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-center">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                
                
              </div>
              
              
              <div class="text-center" >
                <a href="mailto:cranderson9@gmail.com" target="_blank" class="btn btn-primary contact-button">Contact Me</button> </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

    

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Cale Anderson 2020</span></strong>
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End  Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<style>

</style>
