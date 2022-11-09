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
              <h1 class="main-headline mb-5">Sparaat Website</h1>
              <p class="description mb-5">
                My main responsibilities on this project were
                debugging deep and tricky bugs,
                adding new features,
                monitoring the server
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
        "/images/portfolio/sparaat/0.webp",
        "/images/portfolio/sparaat/1.webp",
        "/images/portfolio/sparaat/2.webp",
        "/images/portfolio/sparaat/3.webp",
        "/images/portfolio/sparaat/4.webp",
        "/images/portfolio/sparaat/5.webp",
        "/images/portfolio/sparaat/6.webp",
        "/images/portfolio/sparaat/7.webp",
        "/images/portfolio/sparaat/8.webp",
        "/images/portfolio/sparaat/9.webp",
        "/images/portfolio/sparaat/10.webp",
        "/images/portfolio/sparaat/11.webp",
        "/images/portfolio/sparaat/12.webp",
        "/images/portfolio/sparaat/13.webp",
        "/images/portfolio/sparaat/14.webp",
        "/images/portfolio/sparaat/15.webp",
        "/images/portfolio/sparaat/16.webp",
        "/images/portfolio/sparaat/17.webp",
        "/images/portfolio/sparaat/18.webp",
        "/images/portfolio/sparaat/19.webp",
        "/images/portfolio/sparaat/20.webp",
        "/images/portfolio/sparaat/21.webp",
        "/images/portfolio/sparaat/22.webp",
        "/images/portfolio/sparaat/23.webp",
        "/images/portfolio/sparaat/24.webp",
        "/images/portfolio/sparaat/25.webp",
        "/images/portfolio/sparaat/26.webp",
        "/images/portfolio/sparaat/27.webp",
        "/images/portfolio/sparaat/28.webp",
        "/images/portfolio/sparaat/29.webp",
        "/images/portfolio/sparaat/30.webp",
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
