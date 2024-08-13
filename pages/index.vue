<template>
  <div>
    <!--    <div class="loader">-->
    <!--      <div class="lds-ripple">-->
    <!--        <div></div>-->
    <!--        <div></div>-->
    <!--      </div>-->
    <!--      <p class="text-center" style="color: #B7B4B9">the site may be a bit slow for the first time due to the number of high-quality images please be patient-->
    <!--        :)</p>-->
    <!--    </div>-->
    <div class="header">
      <b-container
        style="height: 100%"
        class="d-flex flex-column justify-content-center align-items-start"
      >
        <b-row>
          <b-col md="12">
            <h1 class="main-headline mb-5">
              Hi, I'm Omar Jakmira,
              <a class="position-relative throw-line">a Full Stack Developer</a>
            </h1>
            <p class="about-me mb-5">
              I build high-quality mobile and web applications for businesses
              and individuals around the globe. if you need a modern and
              powerful website send me an email
            </p>
            <button @click="scrollToMyWork" class="main-btn main-btn-lg">
              see my work
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <section class="work-gallery">
      <b-container>
        <!--        Resume Builder-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Resume Builder SAAS</h2>
                <div class="tags-container">
                  <span class="badge badge-light">NextJS</span>
                  <span class="badge badge-light">React</span>
                  <span class="badge badge-light">SAAS</span>
                </div>
                <div class="work-description">
                  A simple resume builder saas that allows users to build a resume in 5 minutes
                </div>

                <nuxt-link to="/projects/resume-builder" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/resume-builder/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        Jobber-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Jobber App</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Microservices</span>
                  <span class="badge badge-light">NodeJs</span>
                  <span class="badge badge-light">Elastic Stak</span>
                  <span class="badge badge-light">Socket.IO</span>
                </div>
                <div class="work-description">
                  obber App is a Fiverr clone built using microservices pattern for
                  the backend and React for the frontend
                </div>

                <nuxt-link to="/projects/jobber" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/jobber/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Freelancer-Hub-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Freelancer-Hub</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Django</span>
                </div>
                <div class="work-description">
                  Freelancer-Hub is an Advanced freelancing portal like khamast and fiverr built with Django
                  <br>
                  <a href='https://drive.google.com/file/d/1lKApP7tcoQT3VdbgqSNuO94af7STqEn8/view?usp=sharing'>Video Demo</a>
                </div>

                <nuxt-link to="/projects/freelancer_hub" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/freelancer_hub/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Uber-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Uber Clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Flutter</span>
                  <span class="badge badge-light">Mapbox</span>
                  <span class="badge badge-light">Firebase</span>
                </div>
                <div class="work-description">
                  Uber clone made with flutter, Firebase and Mapbox API
                </div>

                <nuxt-link to="/projects/mobile/uber" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    class="work-image-head"
                    style="width:40%;top:-60px"
                    src="/images/portfolio/uber/9.webp"
                    alt=""
                  />
                  <img
                    class="work-image-tail"
                    style="width:40%;bottom:-60px"
                    src="/images/portfolio/uber/8.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Sparaat-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Sparaat</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">Vue.js</span>
                  <span class="badge badge-light">Debugging</span>
                  <span class="badge badge-light">SysAdmin</span>
                </div>
                <div class="work-description">
                Sparaat is a web and mobile app specialized in auto-spare parts. Sparaat helps the buyer searching for used or new spare parts and give them the opportunity to compare suppliers' prices and choose the best
                </div>

                <nuxt-link to="/projects/sparaat" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/sparaat/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Auction-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Auction App</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Microservices</span>
                  <span class="badge badge-light">.NET</span>
                  <span class="badge badge-light">NextJs</span>
                  <span class="badge badge-light">SignalR</span>
                </div>
                <div class="work-description">
                  Auction App built using microservices pattern with .NET echosystem and NextJs
                </div>

                <nuxt-link to="/projects/auction" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/auction/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

         <!--        pydelivery-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">PyDelivery</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Python</span>
                  <span class="badge badge-light">Django</span>
                </div>
                <div class="work-description">
                  an Advanced Delivery system built with Django 3.2
                </div>

                <nuxt-link to="/projects/pydelivery" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    style="width: 90%"
                    class="work-image-head-big"
                    src="/images/portfolio/pydelivery/11.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        pycommerce-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">PyCommerce</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Python</span>
                  <span class="badge badge-light">Django</span>
                </div>
                <div class="work-description">
                  an Advanced ecommerce application built with Django 3.2
                </div>

                <nuxt-link to="/projects/pycommerce" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    style="width: 90%"
                    class="work-image-head-big"
                    src="/images/portfolio/pycommerce/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        DDD Mailing-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">DDD Mailing</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">InertiaJs</span>
                  <span class="badge badge-light">VueJs</span>
                  <span class="badge badge-light">Domain-driven design</span>
                </div>
                <div class="work-description">
                  Mail subscription tool built with laravel and Domain-driven design patterns
                </div>

                <nuxt-link to="/projects/ddd_mail" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    style="width: 90%"
                    class="work-image-head-big"
                    src="/images/portfolio/ddd_mailing/2.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Spring Boot-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Spring Boot School Management</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Java</span>
                  <span class="badge badge-light">Spring Boot</span>
                  <span class="badge badge-light">Spring Security</span>
                  <span class="badge badge-light">Thymeleaf</span>
                  <span class="badge badge-light">REST API</span>
                  <span class="badge badge-light">Hal Explorer</span>
                </div>
                <div class="work-description">
                  A simple CRUD application for school management created with Java and Spring Boot framework,
                  <br/>
                  the app provide an API for seamless integration with other services with API explorer for managing the API directly from the browser without third party REST clients
                </div>

                <nuxt-link to="/projects/spring_boot" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    style="width: 90%"
                    class="work-image-head-big"
                    src="/images/portfolio/spring_boot/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        Ticketing -->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Ticket reservation Microservices</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Node.JS</span>
                  <span class="badge badge-light">Typescript</span>
                  <span class="badge badge-light">Message Broker</span>
                  <span class="badge badge-light">Docker</span>
                  <span class="badge badge-light">K8s</span>
                </div>
                <div class="work-description">
                  this is a complete ticket reservation system implemented using typescript and Microservices architecture with CI/CD pipeline using github actions for testing and deployment
                </div>

                <nuxt-link to="/projects/ticketing" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/ticketing/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Fancy-Theme -->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">WooCommerce Theme</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Wordpress</span>
                  <span class="badge badge-light">WooCommerce</span>
                </div>
                <div class="work-description">
                  a custom wordpress theme with WooCommerce support
                </div>

                <nuxt-link to="/projects/fancy-theme" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/fancy-theme/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

         <!--        Whatsapp RN-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Whatsapp React Native</h2>
                <div class="tags-container">
                  <span class="badge badge-light">React Native</span>
                  <span class="badge badge-light">Redux Toolkit</span>
                  <span class="badge badge-light">Firebase</span>
                </div>
                <div class="work-description">
                  Whatsapp clone built with React Native
                </div>

                <nuxt-link to="/projects/whatsapp_rn" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    style="width:40%;bottom:-10%"
                    src="/images/portfolio/whatsapp_rn/4.webp"
                    alt=""
                  />
                  <img
                    class="work-image-tail"
                    style="width:40%;top:-20%"
                    src="/images/portfolio/whatsapp_rn/7.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

         <!--        Trello-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Trello Clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Angular</span>
                  <span class="badge badge-light">NodeJs</span>
                  <span class="badge badge-light">Typescript</span>
                </div>
                <div class="work-description">
                  a Trello clone built with Angular14 and NodeJs
                </div>

                <nuxt-link to="/projects/trello" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/trello/4.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        GoWatcher-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">GoWatcher</h2>
                <div class="tags-container">
                  <span class="badge badge-light">GoLang</span>
                  <span class="badge badge-light">WebSockets</span>
                </div>
                <div class="work-description">
                  GoWatcher is a simple service monitor that can monitor HTTP ,HTTPS and SSL for your websites in real-time
                </div>

                <nuxt-link to="/projects/go_watcher" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/go_watcher/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

         <!--        Snippetbox-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Snippetbox</h2>
                <div class="tags-container">
                  <span class="badge badge-light">GoLang</span>
                </div>
                <div class="work-description">
                  Snippetbox is a simple clone of github gist built with golang
                </div>

                <nuxt-link to="/projects/snippetbox" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/snippetbox/3.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        InterviewIO-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">InterviewIO</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Node.JS</span>
                  <span class="badge badge-light">Socket.IO</span>
                  <span class="badge badge-light">Peer.JS</span>
                  <span class="badge badge-light">WebRTC</span>
                </div>
                <div class="work-description">
                  Interview developers online in real-time with video chat to find your best candidates easily with no time
                  <br>
                  <a href='https://drive.google.com/file/d/14wGiLoOdBHsKHCAmJTi1Lp_BO7yiaV6w/view?usp=sharing'>Video Demo</a>
                </div>

                <nuxt-link to="/projects/interviewio" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/interviewio/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Discord-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Discord Clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Node.JS</span>
                  <span class="badge badge-light">Express.JS</span>
                  <span class="badge badge-light">Socket.IO</span>
                  <span class="badge badge-light">MongoDB</span>
                  <span class="badge badge-light">WebRTC</span>
                </div>
                <div class="work-description">
                  Discord clone with real-time messaging and group video calls with the ability of screen sharing
                </div>

                <nuxt-link to="/projects/discord" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/discord/2.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Twitter-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Twitter Clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Node.JS</span>
                  <span class="badge badge-light">Express.JS</span>
                  <span class="badge badge-light">Socket.IO</span>
                  <span class="badge badge-light">MongoDB</span>
                </div>
                <div class="work-description">
                  Twitter clone with real-time notifications and group messaging
                </div>

                <nuxt-link to="/projects/twitter" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/twitter/6.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        Qmen-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Qmen</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Django</span>
                  <span class="badge badge-light">React</span>
                </div>
                <div class="work-description">
                  Qmen is a simple QR menu for restaurants that allow the owner to create a QR code for each table for customers to easily request and pay for their orders
                </div>

                <nuxt-link to="/projects/qmen" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/qmen/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>



        <!--        Foodie-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Foodie App</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Flutter</span>
                  <span class="badge badge-light">Flutter_Bloc</span>
                  <span class="badge badge-light">Django</span>
                </div>
                <div class="work-description">
                 a Mobile application and Dashboard for Food delivery built with Flutter and Django
                </div>

                <nuxt-link to="/projects/mobile/foodie" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    style="width:40%;top:0"
                    src="/images/portfolio/foodie/0.webp"
                    alt=""
                  />
                  <img
                    class="work-image-tail"
                    style="width:40%;bottom:-5%"
                    src="/images/portfolio/foodie/00.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        Shopify-Store-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Shopify + Next.JS Ecommerce</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Headless Shopify</span>
                  <span class="badge badge-light">Next.JS</span>
                </div>
                <div class="work-description">
                  Simple headless Shopify ecommerce with Next.JS
                  <br>
                </div>

                <nuxt-link to="/projects/shopify_store" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/shopify_store/2.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        Whatsapp clone-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Whatsapp Clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">React</span>
                  <span class="badge badge-light">Material UI</span>
                  <span class="badge badge-light">Firebase</span>
                </div>
                <div class="work-description">
                 Complete Whatsapp Clone
                  <br>
                </div>

                <nuxt-link to="/projects/whatsapp" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/whatsapp/2.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


<!--        Crypto Dashboard-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Crypto Currency Dashboard</h2>
                <div class="tags-container">
                  <span class="badge badge-light">React</span>
                </div>
                <div class="work-description">
                  Dashboard for tracking crypto currencies prices
                  <br>
                </div>

                <nuxt-link to="/projects/crypto_dash" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/crypto_dash/1.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        Self-hosted devops pipeline-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Self-Hostied Devops Pipeline</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Self-Hostied GitLab</span>
                  <span class="badge badge-light">Self-Hostied Jenkins</span>
                  <span class="badge badge-light">Laravel</span>
                </div>
                <div class="work-description">
                 Complete Self-Hostied Devops Pipeline for Laravel development
                  <br>
                </div>

                <nuxt-link to="/projects/devops" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/devops/5.webp"
                    alt=""
                  />

                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        FlutterBNB-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">FlutterBnb</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Flutter</span>
                  <span class="badge badge-light">Provider</span>
                  <span class="badge badge-light">Django Rest Framework</span>
                </div>
                <div class="work-description">
                  a simple flutter clone of AirBnb App <br> <a href='https://drive.google.com/file/d/1wubwos20UEG0uu5th_zV6ZkAbsZUbBDL/view?usp=sharing'>Video Demo</a>
                </div>

                <nuxt-link to="/projects/mobile/flutter_bnb" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/flutter_bnb/7.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/flutter_bnb/8.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        webRTC chat-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">WebRTC Video Chat</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Javascript</span>
                  <span class="badge badge-light">WebRTC</span>
                </div>
                <div class="work-description">
                  an advanced one-to-one video chat application
                </div>

                <nuxt-link to="/projects/webrtc_chat" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/webrtc_chat/5.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>


        <!--        food delivery web-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Food Delivery Website</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Nest.js</span>
                  <span class="badge badge-light">React</span>
                  <span class="badge badge-light">Tailwindcss</span>
                  <span class="badge badge-light">Socket.IO</span>
                  <span class="badge badge-light">GraphQL</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  this is a food delivery website with real-time update for the
                  orders status built with Nest.js, React, Tailwindcss,
                  Socket.IO and GraphQL
                </div>

                <nuxt-link to="/projects/food_delivery" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    style="width: 90%"
                    class="work-image-head-big"
                    src="/images/portfolio/food_delivery/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--       asp.net microservices-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Asp.Net Microservices</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Asp.Net Core</span>
                  <span class="badge badge-light">SqlServer</span>
                  <span class="badge badge-light">PostgresSql</span>
                  <span class="badge badge-light">MongoDB</span>
                  <span class="badge badge-light">Grpc</span>
                  <span class="badge badge-light">Redis</span>
                  <span class="badge badge-light">RabbitMQ</span>
                </div>
                <div class="work-description">
                  a complete microservices application contain 15 containers
                  work togather using docker and docker-compose
                </div>

                <nuxt-link
                  to="/projects/asp_microservices"
                  class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/aspnet_microservices/2.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--       React chat -->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Complete Chat Application</h2>
                <div class="tags-container">
                  <span class="badge badge-light">React</span>
                  <span class="badge badge-light">MySql</span>
                  <span class="badge badge-light">Socket.IO</span>
                </div>
                <div class="work-description">
                  this is a complete real-time chat application built with
                  react, mysql and socket.io
                  <br />
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1m-53py2cVoIlSTMYOeSHtoWN7nhEUzku/view?usp=sharing"
                    >video demo</a
                  >
                </div>

                <nuxt-link to="/projects/react_chat" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/react_chat/2.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--       Favorite Places -->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">Favorite Places</h2>
                <div class="tags-container">
                  <span class="badge badge-light">React</span>
                  <span class="badge badge-light">Grqphql</span>
                </div>
                <div class="work-description">
                  a simple real-time map application to share your favorite
                  places with others
                </div>

                <nuxt-link to="/projects/fav_places" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/fav_places/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        eShop web-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">eShop Online E-Commerce</h2>
                <div class="tags-container">
                  <span class="badge badge-light">ASP.NET Core</span>
                  <span class="badge badge-light">EF Core</span>
                  <span class="badge badge-light">Angular</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  eShop is a complete E-Commerce platform for Selling Products
                  online Built with ASP.Net Core and Angular 10
                  <br />
                  the admin panel is in laravel and blade and the rest of the
                  project build as API/Client
                </div>

                <nuxt-link to="/projects/eshop_web" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/eshop_web/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        eshop-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Project</div>
                <h2 class="work-title">eShop ecommerce</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Android</span>
                  <span class="badge badge-light">Kotlin</span>
                  <span class="badge badge-light">Firebase</span>
                </div>
                <div class="work-description">
                  a native ecommerce mobile application built with kotlin and
                  firebase
                  <br />
                  I used kotlin, Navigation component and Firebase
                </div>

                <nuxt-link to="/projects/mobile/eshop" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/eshop/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/eshop/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        menhag-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Work In Progress</div>
                <h2 class="work-title">Learn Arabic With Menhag</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">Vuejs</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  This is Menhag a website intended for students who want to
                  learn Arabic the project is built with laravel 8 and vuejs 3
                  <br />
                  the admin panel is in laravel and blade and the rest of the
                  project build as API/Client
                </div>

                <nuxt-link to="/projects/menhag" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/menhag/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/menhag/2.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        lablab redesign -->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Project for fun</div>
                <h2 class="work-title">Lablab Redesign</h2>
                <div class="tags-container">
                  <span class="badge badge-light">AdobeXD</span>
                </div>
                <div class="work-description">
                  This is an unofficial redesign for lablab website using
                  AdobeXD
                </div>

                <nuxt-link to="/projects/redesign/lablab" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/lablab/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/lablab/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        facebook clone-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Project for fun</div>
                <h2 class="work-title">Facebook clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">Vuejs</span>
                  <span class="badge badge-light">TDD</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  This is a small Facebook clone built while I'm learning vuejs
                  and laravel TDD
                </div>

                <nuxt-link to="/projects/facebook_clone" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/facebook/3.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/facebook/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        dribbble clone-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Project for fun</div>
                <h2 class="work-title">Dribbble clone</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">Vuejs</span>
                  <span class="badge badge-light">Nuxt</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  This is a small Dribbble clone built while I'm learning vuejs
                  and nuxt
                </div>

                <nuxt-link to="/projects/dribbble_clone" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head-big"
                    src="/images/portfolio/dribble/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        sawah-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Work</div>
                <h2 class="work-title">Sawah</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Xamarin</span>
                  <span class="badge badge-light">C#</span>
                </div>
                <div class="work-description">
                  Sawah is an application for travel
                </div>

                <nuxt-link to="/projects/mobile/sawah" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/sawah/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/sawah/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        dealz-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Work</div>
                <h2 class="work-title">Dealz</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">jQuery</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  Dealz is an open market for selling and bartering electrical
                  devices
                  <br />
                  with beautiful an easy to use UI
                </div>

                <nuxt-link to="/projects/dealz" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/dealz/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/dealz/6.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        kodwa-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Work</div>
                <h2 class="work-title">Kodwa</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Laravel</span>
                  <span class="badge badge-light">jQuery</span>
                  <span class="badge badge-light">MySql</span>
                </div>
                <div class="work-description">
                  Kodwa is a small social network between students and their
                  role models
                  <br />
                  with beautiful an easy to use UI
                </div>

                <nuxt-link to="/projects/kodwa" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/kodwa/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/kodwa/10.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        food recipes-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Project for fun</div>
                <h2 class="work-title">Food Recipes</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Android</span>
                  <span class="badge badge-light">Kotlin</span>
                  <span class="badge badge-light">Jetpack</span>
                </div>
                <div class="work-description">
                  a native mobile application that I built while learning
                  android jetpack
                  <br />
                  I used kotlin, HILT, Coroutines, and jetpack libraries like
                  ROOM, ViewModel, and others
                </div>

                <nuxt-link to="/projects/mobile/recipes" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/recipes/1.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/recipes/4.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
          </b-row>
        </div>

        <!--        resalati-->
        <div class="work">
          <b-row>
            <b-col md="6" sm="12">
              <div class="work-left">
                <div class="work-label">Latest Work</div>
                <h2 class="work-title">Resalati</h2>
                <div class="tags-container">
                  <span class="badge badge-light">Flutter</span>
                  <span class="badge badge-light">Android</span>
                  <span class="badge badge-light">IOS</span>
                </div>
                <div class="work-description">
                  Resalati is a social app that will send you a message every
                  day that contain some information from channels that you
                  subscribed to it
                  <br />
                  Resalati built with flutter and Bloc provider for state
                  management
                </div>

                <nuxt-link to="/projects/mobile/resalati" class="main-btn mt-5"
                  >see this project</nuxt-link
                >
              </div>
            </b-col>
            <b-col md="6" sm="12">
              <div class="work-right">
                <div class="work-images-wrapper">
                  <img
                    loading=lazy
                    class="work-image-head"
                    src="/images/portfolio/resalati/20.webp"
                    alt=""
                  />
                  <img
                    loading=lazy
                    class="work-image-tail"
                    src="/images/portfolio/resalati/1.webp"
                    alt=""
                  />
                </div>
                <img class="work-pattern" src="~/assets/images/dot.svg" />
              </div>
            </b-col>
            <b-col md="12" class="d-flex justify-content-center big-top-margin">
              <button class="main-btn" @click="viewMore" v-if="!more">
                See more
              </button>
            </b-col>
          </b-row>
        </div>

        <template v-if="more">
          <!--          lara blog-->
          <div id="more" class="work">
            <b-row>
              <b-col md="6" sm="12">
                <div class="work-left">
                  <div class="work-label">Project For Fun</div>
                  <h2 class="work-title">LaraBlog</h2>
                  <div class="tags-container">
                    <span class="badge badge-light">Laravel</span>
                    <span class="badge badge-light">jQuery</span>
                    <span class="badge badge-light">MySql</span>
                  </div>
                  <div class="work-description">
                    LaraBlog is a simple website for blogging built with minimal
                    UI
                  </div>

                  <nuxt-link to="/projects/lara_blog" class="main-btn mt-5"
                    >see this project</nuxt-link
                  >
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="work-right">
                  <div class="work-images-wrapper">
                    <img
                      loading=lazy
                      class="work-image-head"
                      src="/images/portfolio/laraBlog/2.webp"
                      alt=""
                    />
                    <img
                      loading=lazy
                      class="work-image-tail"
                      src="/images/portfolio/laraBlog/1.webp"
                      alt=""
                    />
                  </div>
                  <img class="work-pattern" src="~/assets/images/dot.svg" />
                </div>
              </b-col>
            </b-row>
          </div>
          <!--          rasheed crm-->
          <div class="work">
            <b-row>
              <b-col md="6" sm="12">
                <div class="work-left">
                  <div class="work-label">Latest Work</div>
                  <h2 class="work-title">Rasheed CRM</h2>
                  <div class="tags-container">
                    <span class="badge badge-light">Laravel</span>
                    <span class="badge badge-light">ElectronJs</span>
                    <span class="badge badge-light">ReacJs</span>
                    <span class="badge badge-light">Redux</span>
                    <span class="badge badge-light">MySql</span>
                  </div>
                  <div class="work-description">
                    Rasheed CRM is a CRM Desktop application built with web
                    technologies
                  </div>

                  <nuxt-link to="/projects/rasheed" class="main-btn mt-5"
                    >see this project</nuxt-link
                  >
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="work-right">
                  <div class="work-images-wrapper">
                    <img
                      loading=lazy
                      class="work-image-head-big"
                      src="/images/portfolio/rasheed/1.webp"
                      alt=""
                    />
                  </div>
                  <img class="work-pattern" src="~/assets/images/dot.svg" />
                </div>
              </b-col>
            </b-row>
          </div>
          <!--          aqare-->
          <div class="work">
            <b-row>
              <b-col md="6" sm="12">
                <div class="work-left">
                  <div class="work-label">Project for fun</div>
                  <h2 class="work-title">Aqare</h2>
                  <div class="tags-container">
                    <span class="badge badge-light">Laravel</span>
                    <span class="badge badge-light">Flutter</span>
                    <span class="badge badge-light">MySql</span>
                  </div>
                  <div class="work-description">
                    Aqare is a Cross-platform mobile application for real-estate
                    <br />
                    built with laravel and flutter and Bloc pattern for state
                    management
                  </div>

                  <nuxt-link to="/projects/mobile/aqare" class="main-btn mt-5"
                    >see this project</nuxt-link
                  >
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="work-right">
                  <div class="work-images-wrapper">
                    <img
                      loading=lazy
                      class="work-image-head"
                      src="/images/portfolio/aqare/10.webp"
                      alt=""
                    />
                    <img
                      loading=lazy
                      class="work-image-tail"
                      src="/images/portfolio/aqare/8.webp"
                      alt=""
                    />
                  </div>
                  <img class="work-pattern" src="~/assets/images/dot.svg" />
                </div>
              </b-col>
            </b-row>
          </div>
          <!--          katebon-->
          <div class="work">
            <b-row>
              <b-col md="6" sm="12">
                <div class="work-left">
                  <div class="work-label">Latest Work</div>
                  <h2 class="work-title">Katebon</h2>
                  <div class="tags-container">
                    <span class="badge badge-light">Laravel</span>
                    <span class="badge badge-light">jQuery</span>
                    <span class="badge badge-light">MySql</span>
                  </div>
                  <div class="work-description">
                    Katebon is a Blogging Web application built with laravel
                  </div>

                  <nuxt-link to="/projects/katebon" class="main-btn mt-5"
                    >see this project</nuxt-link
                  >
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="work-right">
                  <div class="work-images-wrapper">
                    <img
                      loading=lazy
                      class="work-image-head"
                      src="/images/portfolio/katebon/4.webp"
                      alt=""
                    />
                    <img
                      loading=lazy
                      class="work-image-tail"
                      src="/images/portfolio/katebon/2.webp"
                      alt=""
                    />
                  </div>
                  <img class="work-pattern" src="~/assets/images/dot.svg" />
                </div>
              </b-col>
            </b-row>
          </div>
          <!--          rasheed_win-->
          <div class="work">
            <b-row>
              <b-col md="6" sm="12">
                <div class="work-left">
                  <div class="work-label">Old Work</div>
                  <h2 class="work-title">Rasheed Winforms</h2>
                  <div class="tags-container">
                    <span class="badge badge-light">VB.Net</span>
                    <span class="badge badge-light">windows forms</span>
                    <span class="badge badge-light">access</span>
                  </div>
                  <div class="work-description">
                    This is my first complete desktop application for Rasheed
                    charity
                    <br />
                    I built it in 2015 using visual basic .net
                  </div>

                  <nuxt-link to="/projects/rasheed_win" class="main-btn mt-5"
                    >see this project</nuxt-link
                  >
                </div>
              </b-col>
              <b-col md="6" sm="12">
                <div class="work-right">
                  <div class="work-images-wrapper">
                    <img
                      loading=lazy
                      class="work-image-head-big"
                      src="/images/portfolio/rasheed_winform/6.webp"
                      alt=""
                    />
                  </div>
                  <img class="work-pattern" src="~/assets/images/dot.svg" />
                </div>
              </b-col>
            </b-row>
          </div>
        </template>

        <div class="what-i-do">
          <b-row>
            <b-col md="6">
              <h1>What <a class="throw-line">I do</a></h1>
            </b-col>
            <b-col md="6">
              <section class="ido-section">
                <h3>Web Development</h3>
                <p>
                  I build websites in multiple languages and frameworks like
                  Laravel, NodeJs, Asp.net Core I can also develop the front-end
                  using Angular, Vue, and React
                </p>
              </section>
              <section class="ido-section">
                <h3>Mobile Development</h3>
                <p>
                  I can build cross-platform mobile applications using flutter
                  and React Native also, I have some experience in native
                  development for android including kotlin and android jetpack
                </p>
              </section>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: "index",
  middleware: "log",
  created() {
    console.log("created");
  },
  data() {
    return {
      more: false,
    };
  },
  methods: {
    scrollToMyWork() {
      window.scrollTo({
        top: document.querySelector(".work-gallery").offsetTop - 30,
        behavior: "smooth",
      });
    },
    viewMore() {
      this.more = !this.more;
      setTimeout(() => {
        window.scrollTo({
          top: document.querySelector("#more").offsetTop - 30,
          behavior: "smooth",
        });
      }, 200);
    },
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}
</style>
