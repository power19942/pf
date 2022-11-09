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
              <h1 class="main-headline mb-5">PyDelivery Website</h1>
              <p class="description mb-5">
                PyDelivery is an Advanced delivery system built with Django
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
        "/images/portfolio/pydelivery/1.webp",
        "/images/portfolio/pydelivery/2.webp",
        "/images/portfolio/pydelivery/3.webp",
        "/images/portfolio/pydelivery/4.webp",
        "/images/portfolio/pydelivery/5.webp",
        "/images/portfolio/pydelivery/6.webp",
        "/images/portfolio/pydelivery/7.webp",
        "/images/portfolio/pydelivery/8.webp",
        "/images/portfolio/pydelivery/9.webp",
        "/images/portfolio/pydelivery/10.webp",
        "/images/portfolio/pydelivery/11.webp",
        "/images/portfolio/pydelivery/12.webp",
        "/images/portfolio/pydelivery/13.webp",
        "/images/portfolio/pydelivery/14.webp",
        "/images/portfolio/pydelivery/15.webp",
        "/images/portfolio/pydelivery/16.webp",
        "/images/portfolio/pydelivery/17.webp",
        "/images/portfolio/pydelivery/18.webp",
        "/images/portfolio/pydelivery/19.webp",
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
