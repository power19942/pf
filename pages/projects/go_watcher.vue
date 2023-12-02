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
              <h1 class="main-headline mb-5">GoWatcher</h1>
              <p class="description mb-5">
                GoWatcher is a simple service monitor that can monitor HTTP ,HTTPS and SSL for your websites in real-time
                with the ability to notify the user on error by E-mail ans SMS

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
        "/images/portfolio/go_watcher/1.webp",
        "/images/portfolio/go_watcher/2.webp",
        "/images/portfolio/go_watcher/3.webp",
        "/images/portfolio/go_watcher/4.webp",
        "/images/portfolio/go_watcher/5.webp",
        "/images/portfolio/go_watcher/6.webp",
        "/images/portfolio/go_watcher/7.webp",
        "/images/portfolio/go_watcher/8.webp",
        "/images/portfolio/go_watcher/9.webp",
        "/images/portfolio/go_watcher/10.webp",
        "/images/portfolio/go_watcher/11.webp",
        "/images/portfolio/go_watcher/12.webp"
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
