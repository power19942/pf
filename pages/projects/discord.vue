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
              <h1 class="main-headline mb-5">Discord Clone</h1>
              <p class="description mb-5">
                Discord clone with real-time messaging and group video calls with the ability of screen sharing
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
  name: "twitter",
  data() {
    return {
      selectedImage: 0,
      images: [
        "/images/portfolio/discord/1.webp",
        "/images/portfolio/discord/2.webp",
        "/images/portfolio/discord/3.webp",
        "/images/portfolio/discord/4.webp",
        "/images/portfolio/discord/5.webp",
        "/images/portfolio/discord/6.webp",
        "/images/portfolio/discord/7.webp",
        "/images/portfolio/discord/8.webp",
        "/images/portfolio/discord/9.webp",
        "/images/portfolio/discord/10.webp",
        "/images/portfolio/discord/11.webp",
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
