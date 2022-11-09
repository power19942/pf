<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">eShop ecommerce</h1>
          <p class="description mb-5">
            a native ecommerce mobile application built with kotlin and firebase
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
      '/images/portfolio/eshop/1.webp',
      '/images/portfolio/eshop/2.webp',
      '/images/portfolio/eshop/3.webp',
      '/images/portfolio/eshop/4.webp',
      '/images/portfolio/eshop/5.webp',
      '/images/portfolio/eshop/6.webp',
      '/images/portfolio/eshop/7.webp',
      '/images/portfolio/eshop/8.webp',
      '/images/portfolio/eshop/9.webp',
      '/images/portfolio/eshop/10.webp',
      '/images/portfolio/eshop/11.webp',
      '/images/portfolio/eshop/12.webp',
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
