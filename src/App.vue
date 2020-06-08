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
          <li><a href="#portfolio"><i class="bx bx-book-content"></i> Projects</a></li>
          <!-- <li><a href="#resume"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li> -->
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
            <img src="assets/img/profile_pic.png" class="img-fluid" alt="">
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
          <br>
        </div>

        <div class="row skills-content">

          <div class="container">
            <div class="row">
              <a href="https://www.ruby-lang.org/en/"> 
                <img
                  id="ruby-logo"
                  class="rounded-circle img-thumbnail float-left"
                  src="assets/img/ruby.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://rubyonrails.org/">
                <img
                  id="rails-logo"
                  class="rounded-circle img-thumbnail float-left"
                  src="assets/img/rails.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://www.javascript.com/">
                <img
                  id="JS-logo"
                  class="rounded-circle img-thumbnail float-left"
                  src="assets/img/javascript.png"
                  height="200"
                  width="200"
                />
               </a>
              <a href="https://vuejs.org/">
                <img
                  id="vue-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/vue.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://www.typescriptlang.org/">
                <img
                  id="typescript-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/typescript.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://angular.io/">
                <img
                  id="angular-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/angular.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://html.com/">
                <img
                  id="html5-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/html5.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                <img
                  id="css-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/css.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://www.postgresql.org/">
                <img
                  id="postgreSQL-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/postgreSQL.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://getbootstrap.com/">
                <img
                  id="bootstrap-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/bootstrap.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://materializecss.com/">
                <img
                  id="materialize-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/materialize.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://git-scm.com/">
                <img
                  id="git-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/git.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://github.com/">
                <img
                  id="github-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/github.png"
                  height="200"
                  width="200"
                />
              </a>
              <a href="https://www.npmjs.com/">
                <img
                  id="npm-logo"
                  class="rounded-circle img-thumbnail"
                  src="assets/img/npm.png"
                  height="200"
                  width="200"
                />
              </a>

              </div>
              <div class="section-title">
                <h2>Adding Soon</h2>
                <h4>Always learning new things</h4>
                 <br>
              </div>
              <div class="row">
                <a href="https://dotnet.microsoft.com/">
                  <img
                    id=".net-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/net.png"
                    height="200"
                    width="200"
                  />
                </a>
                <a href="https://reactjs.org/">
                  <img
                    id="react-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/react.png"
                    height="200"
                    width="200"
                  />
                </a>
                <a href="https://www.python.org/">
                  <img
                    id="python-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/python.png"
                    height="200"
                    width="200"
                  />
                </a>
                <a href="https://www.djangoproject.com/">
                  <img
                    id="django-logo"
                    class="rounded-circle img-thumbnail"
                    src="assets/img/django.png"
                    height="200"
                    width="200"
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
                  width="700"
                  height="500"
                />
            </div>
              <div class="col-md-4 ">
                <div class="description">
                  <h4 class="info-title text-danger">Tech Stack</h4>
                  <img class="img-stack" width="50" height="50" src="assets/img/ruby.png"  />
                  <img class="img-stack" width="80" height="80" src="assets/img/rails.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/vue.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/css.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/html5.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/javascript.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/bootstrap.png"  />
                  <img class="img-stack" width="50" height="50" src="assets/img/postgreSQL.png"  />
                </div>
                <div class="description">
                  <h4 class="info-title text-info">Features</h4>
                  <p>App that allows the user to create an account and log the hikes that they have gone on and save pictures from their hikes. I also integrated the ability to search for a place to hike utilizing the Mapbox API. </p>
                </div>
                <a href="https://github.com/cranderson9/mini_capstone"  class="badge badge-danger">
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
                  width="700"
                  height="500"
                />
            </div>
              <div class="col-md-4 ">
                <div class="description">
                  <h4 class="info-title text-danger">Tech Stack</h4>
                  <img class="img-stack" width="50" height="50" src="assets/img/ruby.png" />
                  <img class="img-stack" width="80" height="80" src="assets/img/rails.png" />
                  <img class="img-stack" width="50" height="50" src="assets/img/postgreSQL.png" />
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

     <!-- ======= Resume Section ======= -->
    <!-- <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          <p>As a teacher, helping others and lifelong learning are very important to me. I have worked with a wide variety of students, teachers, and parents, collaborating with others from all different backgrounds toward common goals. Prior experience teaching coding to students and training teachers in educational technology combined with a coding bootcamp education allow me to write clean, efficient code and continue improving my skill sets and contributions.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Cale Anderson</h4>
              <p><em>Innovative and deadline-driven web developer with a passion for learning new things.</em></p>
              <ul>
                <li>Kewaskum, Wi</li>
                <li>(262) 707-6553</li>
                <li>caleanderson9@gmail.com</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Full Stack Web Developer Certficate </h4>
              <h5>2020</h5>
              <p><em>Actualize Coding Bootcamp: Chicago, Ill</em></p>
              <p>Actualize is an intensive 18 week program focusing on full stack web development. I was challenged every day to learn and use new technologies and ideas. A lot of focus was on how to think like a developer. During my time I learned technologies and skills such as: Ruby, Ruby on Rails, JavaScript, Java, CSS, HTML, Vue.js, APIs, Visual Studio Code, Insomnia, Git/ Github,Pair programming, and Test driven development</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Science in Education </h4>
              <h5>2006 - 2011</h5>
              <p><em>Marian University: Fond du Lac, Wi</em></p>
              <p>I learned the most current teaching practices and methods. My experience culminated with a semester long student teaching placement.</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Elementary Teacher</h4>
              <h5>July 2019 - Present</h5>
              <p><em>West Bend School District, West Bend, Wi </em></p>
              <ul>
                <li>Coordinated with my grade level team to deliver high quality instruction throughout the Covid-19 outbreak.</li>
                <li>Utilized technology to personalize learning for my students so that they can all learn at their own pace. </li>
                <li>Trained many teachers within my building on digital learning during the Covid-19 outbreak.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Instructional Technology Coach</h4>
              <h5>August 2017 - July 2019</h5>
              <p><em>West Bend School District, West Bend, Wi</em></p>
              <ul>
                <li>Taught coding through pair-programming to elementary and middle school age students  to help prepare them for the 21st century workforce.</li>
                <li>Presented at state conferences on teaching coding to elementary students.</li>
                <li>Trained new employees in best educational technology practices over a 1 year period.</li>
                <li>Coordinated and led monthly technology training to all staff.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Elementary Teacher</h4>
              <h5>August 2014 - August 2017</h5>
              <p><em>West Bend School District, West Bend, Wi</em></p>
              <ul>
                <li>Sought new learning by being a member of a Google for Education cohort within my district.</li>
                <li>Reviewed technology requirements for lesson-planning and curriculum development</li>
                <li>Troubleshooted and trained fellow teachers with technology to increase comfort using it within their classroom.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Elementary Teacher</h4>
              <h5>August 2011 - July 2014</h5>
              <p><em>Cedarburg School District, Cedarburg, Wi</em></p>
              <ul>
                <li>Initiated a grant for Chromebooks for our school which inspired adoption for all classrooms within the school.</li>
                <li>Spearheaded a committee that focused on finding ways to help our most challenging students in the school.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>End Resume Section -->

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
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
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
