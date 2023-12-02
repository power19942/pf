<template>
  <div>
    <Loading :loading="isLoading" />
    <div class="header">
      <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
        <b-row>
          <b-col md="2"></b-col>
          <b-col md="8" class="text-center">
            <p class="secondary-text">PROJECT SHOWCASE</p>
            <h1 class="main-headline mb-5">Food Delivery Website</h1>
            <p class="description mb-5">
              this is a food delivery website with real-time update for the orders status
              built with Nest.js, React, Tailwindcss, Socket.IO and GraphQL
              <br> <span class='note'>note: you can click the image to play the gallery</span>
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
            <img @click="changeImage" ref="mainImage" :src="images[selectedImage]" alt="">
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
        '/images/portfolio/food_delivery/1.webp',
        '/images/portfolio/food_delivery/2.webp',
        '/images/portfolio/food_delivery/3.webp',
        '/images/portfolio/food_delivery/4.1.webp',
        '/images/portfolio/food_delivery/4.2.webp',
        '/images/portfolio/food_delivery/5.webp',
        '/images/portfolio/food_delivery/6.webp',
        '/images/portfolio/food_delivery/7.webp',
        '/images/portfolio/food_delivery/8.webp',
        '/images/portfolio/food_delivery/9.webp'
      ]
    }
  },
  methods: {
    changeImage() {
      if (this.selectedImage >= this.images.length -1) {
        this.selectedImage = -1
      }

      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top: document.querySelector('img').offsetTop + 900, behavior: 'smooth'});

    }
  }

}
</script>

<style scoped>

</style>
