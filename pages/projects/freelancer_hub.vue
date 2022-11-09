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
              <h1 class="main-headline mb-5">Freelancer-Hub Website</h1>
              <p class="description mb-5">
                Freelancer-Hub is an Advanced freelancing portal like khamast and fivver built with Django
                <br>
                  <a href='https://drive.google.com/file/d/1lKApP7tcoQT3VdbgqSNuO94af7STqEn8/view?usp=sharing'>Video Demo</a>
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
        "/images/portfolio/freelancer_hub/1.webp",
        "/images/portfolio/freelancer_hub/2.webp",
        "/images/portfolio/freelancer_hub/3.webp",
        "/images/portfolio/freelancer_hub/4.webp",
        "/images/portfolio/freelancer_hub/5.webp",
        "/images/portfolio/freelancer_hub/6.webp",
        "/images/portfolio/freelancer_hub/7.webp",
        "/images/portfolio/freelancer_hub/8.webp",
        "/images/portfolio/freelancer_hub/9.webp",
        "/images/portfolio/freelancer_hub/10.webp",
        "/images/portfolio/freelancer_hub/11.webp",
        "/images/portfolio/freelancer_hub/12.webp",
        "/images/portfolio/freelancer_hub/13.webp",
        "/images/portfolio/freelancer_hub/14.webp",
        "/images/portfolio/freelancer_hub/15.webp",
        "/images/portfolio/freelancer_hub/16.webp",
        "/images/portfolio/freelancer_hub/17.webp",
        "/images/portfolio/freelancer_hub/18.webp",
        "/images/portfolio/freelancer_hub/19.webp",
        "/images/portfolio/freelancer_hub/20.webp",
        "/images/portfolio/freelancer_hub/21.webp",
        "/images/portfolio/freelancer_hub/22.webp",
        "/images/portfolio/freelancer_hub/23.webp",
        "/images/portfolio/freelancer_hub/24.webp",
        "/images/portfolio/freelancer_hub/25.webp",
        "/images/portfolio/freelancer_hub/26.webp",
        "/images/portfolio/freelancer_hub/27.webp",
        "/images/portfolio/freelancer_hub/28.webp",
        "/images/portfolio/freelancer_hub/29.webp",
        "/images/portfolio/freelancer_hub/30.webp",
        "/images/portfolio/freelancer_hub/31.webp",
        "/images/portfolio/freelancer_hub/32.webp",
        "/images/portfolio/freelancer_hub/33.webp",
        "/images/portfolio/freelancer_hub/34.webp",
        "/images/portfolio/freelancer_hub/35.webp",
        "/images/portfolio/freelancer_hub/36.webp",
      ],
    };
  },
  methods: {
    changeImage() {
      if (this.selectedImage >= this.images.length - 1) {
        this.selectedImage = 0
      }
      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top: document.querySelector('img').offsetTop + 900, behavior: 'smooth'});
    }
  },
};
</script>

<style scoped>
</style>
