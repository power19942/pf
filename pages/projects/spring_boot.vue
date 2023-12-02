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
              <h1 class="main-headline mb-5">Spring Boot School Management</h1>
              <p class="description mb-5">
                A simple CRUD application for school management created with Java and Spring Boot framework,
                  the app provide an API for seamless integration with other services with API explorer for managing the API directly from the browser without third party REST clients
                <br />
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
        "/images/portfolio/spring_boot/1.webp",
        "/images/portfolio/spring_boot/2.webp",
        "/images/portfolio/spring_boot/3.webp",
        "/images/portfolio/spring_boot/4.webp",
        "/images/portfolio/spring_boot/5.webp",
        "/images/portfolio/spring_boot/6.webp",
        "/images/portfolio/spring_boot/7.webp",
        "/images/portfolio/spring_boot/8.webp",
        "/images/portfolio/spring_boot/9.webp",
        "/images/portfolio/spring_boot/10.webp",
        "/images/portfolio/spring_boot/11.webp",
        "/images/portfolio/spring_boot/12.webp",
        "/images/portfolio/spring_boot/13.webp",
      ],
    };
  },
  methods: {
    changeImage() {
      console.log(this.images.length)
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
