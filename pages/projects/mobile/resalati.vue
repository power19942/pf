<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">Resalati App</h1>
          <p class="description mb-5">
            Resalati is a social app that will send you a message every day that contain some information from channels that you subscribed to it
            Resalati built with flutter and Provider for state management
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
        <div class="project-main-image-mobile">
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
  data(){
  return {
    selectedImage:0,
    images:[
      '/images/portfolio/resalati/1.webp',
      '/images/portfolio/resalati/2.webp',
      '/images/portfolio/resalati/3.webp',
      '/images/portfolio/resalati/4.webp',
      '/images/portfolio/resalati/5.webp',
      '/images/portfolio/resalati/6.webp',
      '/images/portfolio/resalati/7.webp',
      '/images/portfolio/resalati/8.webp',
      '/images/portfolio/resalati/9.webp',
      '/images/portfolio/resalati/10.webp',
      '/images/portfolio/resalati/11.webp',
      '/images/portfolio/resalati/12.webp',
      '/images/portfolio/resalati/13.webp',
      '/images/portfolio/resalati/14.webp',
      '/images/portfolio/resalati/15.webp',
      '/images/portfolio/resalati/16.webp',
      '/images/portfolio/resalati/17.webp',
      '/images/portfolio/resalati/18.webp',
      '/images/portfolio/resalati/19.webp',
      '/images/portfolio/resalati/20.webp',
      '/images/portfolio/resalati/21.webp',
      '/images/portfolio/resalati/22.webp',
      '/images/portfolio/resalati/23.webp',
      '/images/portfolio/resalati/24.webp',
      '/images/portfolio/resalati/25.webp',
      '/images/portfolio/resalati/26.webp',
      '/images/portfolio/resalati/27.webp',
      '/images/portfolio/resalati/28.webp',
      '/images/portfolio/resalati/29.webp',
    ]
  }
  },
  methods:{
    changeImage(){
      if (this.selectedImage >= this.images.length -1 -1){
        this.selectedImage = -1
      }

      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top:document.querySelector('img').offsetTop + 900,behavior:'smooth'});

    }
  }

}
</script>

<style scoped>

</style>
