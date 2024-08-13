<template>
  <div>
    <Loading :loading="isLoading" />
    <div>
      <div class="header">
        <b-container
          style="height: 100%"
          class="d-flex flex-column justify-content-center"
        >
          <b-row>
            <b-col md="2"></b-col>
            <b-col md="8" class="text-center">
              <p class="secondary-text">PROJECT SHOWCASE</p>
              <h1 class="main-headline mb-5">Jobber App</h1>
              <p class="description mb-5">
                Jobber App is a Fiverr clone built using microservices pattern for
                the backend and React for the frontend
                <br>it also has Elastic Stack integration for Logging and Observability

                <span class='note'>note: you can click the image to play the gallery</span>
              </p>
            </b-col>
            <b-col md="2"></b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="project-main-image">
              <img
                @click="changeImage"
                ref="mainImage"
                :src="images[selectedImage]"
                alt=""
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "menhag",
  data() {
    return {
      selectedImage: 0,
      images: [
        "/images/portfolio/jobber/1.webp",
        "/images/portfolio/jobber/2.webp",
        "/images/portfolio/jobber/3.webp",
        "/images/portfolio/jobber/4.webp",
        "/images/portfolio/jobber/5.webp",
        "/images/portfolio/jobber/6.webp",
        "/images/portfolio/jobber/7.webp",
        "/images/portfolio/jobber/8.webp",
        "/images/portfolio/jobber/9.webp",
        "/images/portfolio/jobber/10.webp",
        "/images/portfolio/jobber/11.webp",
        "/images/portfolio/jobber/12.webp",
        "/images/portfolio/jobber/13.webp",
        "/images/portfolio/jobber/14.webp",
        "/images/portfolio/jobber/15.webp",
        "/images/portfolio/jobber/16.webp",
        "/images/portfolio/jobber/17.webp",
        "/images/portfolio/jobber/18.webp",
        "/images/portfolio/jobber/19.webp",
        "/images/portfolio/jobber/20.webp",
        "/images/portfolio/jobber/21.webp",
        "/images/portfolio/jobber/22.webp",
        "/images/portfolio/jobber/23.webp",
        "/images/portfolio/jobber/24.webp",
        "/images/portfolio/jobber/25.webp",
        "/images/portfolio/jobber/26.webp",
      ],
    };
  },
  methods: {
    changeImage() {
      if (this.selectedImage >= this.images.length -1) {
        this.selectedImage = -1
      }
      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top: document.querySelector('img').offsetTop + 900, behavior: 'smooth'});
    }
  },
};
</script>

<style scoped>
</style>
