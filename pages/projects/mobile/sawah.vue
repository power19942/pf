<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">Sawah App</h1>
          <p class="description mb-5">
            Sawah is an application for travel
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
      '/images/portfolio/sawah/1.webp',
      '/images/portfolio/sawah/2.webp',
      '/images/portfolio/sawah/3.webp',
      '/images/portfolio/sawah/4.webp',
      '/images/portfolio/sawah/5.webp',
      '/images/portfolio/sawah/6.webp',
      '/images/portfolio/sawah/7.webp',
      '/images/portfolio/sawah/8.webp',
      '/images/portfolio/sawah/9.webp',
      '/images/portfolio/sawah/10.webp',
      '/images/portfolio/sawah/11.webp',
      '/images/portfolio/sawah/12.webp',
      '/images/portfolio/sawah/13.webp',
      '/images/portfolio/sawah/14.webp',
      '/images/portfolio/sawah/15.webp',
      '/images/portfolio/sawah/16.webp',
      '/images/portfolio/sawah/17.webp',
      '/images/portfolio/sawah/18.webp',
      '/images/portfolio/sawah/19.webp',
      '/images/portfolio/sawah/20.webp',
      '/images/portfolio/sawah/21.webp',
      '/images/portfolio/sawah/22.webp',
      '/images/portfolio/sawah/23.webp',
      '/images/portfolio/sawah/24.webp',
      '/images/portfolio/sawah/25.webp',
      '/images/portfolio/sawah/26.webp',
      '/images/portfolio/sawah/27.webp',
      '/images/portfolio/sawah/28.webp',
      '/images/portfolio/sawah/29.webp',
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
