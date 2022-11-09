<template>
<div>
  <Loading :loading="isLoading" />
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">PROJECT SHOWCASE</p>
          <h1 class="main-headline mb-5">Foodie</h1>
          <p class="description mb-5">
            a Mobile application and Dashboard for Food delivery built with Flutter and Django

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
      '/images/portfolio/foodie/1.webp',
      '/images/portfolio/foodie/2.webp',
      '/images/portfolio/foodie/3.webp',
      '/images/portfolio/foodie/4.webp',
      '/images/portfolio/foodie/5.webp',
      '/images/portfolio/foodie/6.webp',
      '/images/portfolio/foodie/7.webp',
      '/images/portfolio/foodie/8.webp',
      '/images/portfolio/foodie/9.webp',
      '/images/portfolio/foodie/10.webp',
      '/images/portfolio/foodie/11.webp',
      '/images/portfolio/foodie/12.webp',
      '/images/portfolio/foodie/13.webp',
      '/images/portfolio/foodie/14.webp',
      '/images/portfolio/foodie/15.webp',
      '/images/portfolio/foodie/16.webp',
      '/images/portfolio/foodie/17.webp',
      '/images/portfolio/foodie/18.webp',
      '/images/portfolio/foodie/19.webp',
      '/images/portfolio/foodie/20.webp',
      '/images/portfolio/foodie/21.webp',
      '/images/portfolio/foodie/22.webp',
      '/images/portfolio/foodie/23.webp',
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
