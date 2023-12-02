<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">Uber Clone</h1>
          <p class="description mb-5">
            Uber clone made with flutter and Mapbox API

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
  data(){
  return {
    selectedImage:0,
    images:[
      '/images/portfolio/uber/1.webp',
      '/images/portfolio/uber/2.webp',
      '/images/portfolio/uber/3.webp',
      '/images/portfolio/uber/4.webp',
      '/images/portfolio/uber/5.webp',
      '/images/portfolio/uber/6.webp',
      '/images/portfolio/uber/7.webp',
      '/images/portfolio/uber/8.webp',
      '/images/portfolio/uber/9.webp',
      '/images/portfolio/uber/10.webp',
      '/images/portfolio/uber/11.webp',
      '/images/portfolio/uber/12.webp',
      '/images/portfolio/uber/13.webp',
      '/images/portfolio/uber/14.webp',
      '/images/portfolio/uber/15.webp',
      '/images/portfolio/uber/16.webp',
      '/images/portfolio/uber/17.webp',
      '/images/portfolio/uber/18.webp',
      '/images/portfolio/uber/19.webp',
      '/images/portfolio/uber/20.webp',
      '/images/portfolio/uber/21.webp',
      '/images/portfolio/uber/22.webp',
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
