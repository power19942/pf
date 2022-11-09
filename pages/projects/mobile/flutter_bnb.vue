<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">FlutterBnb</h1>
          <p class="description mb-5">
            a simple flutter clone of AirBnb App with API built by Django Rest Framework
            <br>
            <a href='https://drive.google.com/file/d/1wubwos20UEG0uu5th_zV6ZkAbsZUbBDL/view?usp=sharing'>Video Demo</a>
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
      '/images/portfolio/flutter_bnb/1.webp',
      '/images/portfolio/flutter_bnb/2.webp',
      '/images/portfolio/flutter_bnb/3.webp',
      '/images/portfolio/flutter_bnb/4.webp',
      '/images/portfolio/flutter_bnb/5.webp',
      '/images/portfolio/flutter_bnb/6.webp',
      '/images/portfolio/flutter_bnb/7.webp',
      '/images/portfolio/flutter_bnb/8.webp',
    ]
  }
  },
  methods:{
    changeImage(){
      if (this.selectedImage >= this.images.length -1){
        this.selectedImage = 0
      }

      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top:document.querySelector('img').offsetTop + 900,behavior:'smooth'});

    }
  }

}
</script>

<style scoped>

</style>
