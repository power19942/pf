<template>
  <div>
    <Loading :loading="isLoading" />
    <div class="header">
      <b-container
        style="height: 100%"
        class="d-flex flex-column justify-content-center"
      >
        <b-row>
          <b-col md="2"></b-col>
          <b-col md="8" class="text-center">
            <p class="secondary-text">PROJECT SHOWCASE</p>
            <h1 class="main-headline mb-5">Aqare App</h1>
            <p class="description mb-5">
              Aqare is a Cross-platform mobile application for real-estate built
              with laravel and flutter
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
          <div class="project-main-image-mobile">
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
</template>

<script>
export default {
  name: "menhag",
  data() {
    return {
      selectedImage: 0,
      images: [
        "/images/portfolio/aqare/1.webp",
        "/images/portfolio/aqare/2.webp",
        "/images/portfolio/aqare/3.webp",
        "/images/portfolio/aqare/4.webp",
        "/images/portfolio/aqare/5.webp",
        "/images/portfolio/aqare/6.webp",
        "/images/portfolio/aqare/7.webp",
        "/images/portfolio/aqare/8.webp",
        "/images/portfolio/aqare/9.webp",
        "/images/portfolio/aqare/10.webp",
        "/images/portfolio/aqare/11.webp",
        "/images/portfolio/aqare/12.webp",
        "/images/portfolio/aqare/13.webp",
        "/images/portfolio/aqare/14.webp",
        "/images/portfolio/aqare/15.webp",
      ],
    };
  },
  methods: {
    changeImage() {
      if (this.selectedImage >= this.images.length - 1) {
        this.selectedImage = 0;
      }

      this.$refs.mainImage.src = this.images[++this.selectedImage];
      //window.scrollTo({top:document.querySelector('img').offsetTop + 900,behavior:'smooth'});
    },
  },
};
</script>

<style scoped>
</style>
