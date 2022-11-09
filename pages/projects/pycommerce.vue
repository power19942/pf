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
              <h1 class="main-headline mb-5">PyCommerce Website</h1>
              <p class="description mb-5">
                PyCommerce is an Advanced ecommerce application built with Django
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
        "/images/portfolio/pycommerce/1.webp",
        "/images/portfolio/pycommerce/2.webp",
        "/images/portfolio/pycommerce/3.webp",
        "/images/portfolio/pycommerce/4.webp",
        "/images/portfolio/pycommerce/5.webp",
        "/images/portfolio/pycommerce/6.webp",
        "/images/portfolio/pycommerce/7.webp",
        "/images/portfolio/pycommerce/8.webp",
        "/images/portfolio/pycommerce/9.webp",
        "/images/portfolio/pycommerce/10.webp",
        "/images/portfolio/pycommerce/11.webp",
        "/images/portfolio/pycommerce/12.webp",
        "/images/portfolio/pycommerce/13.webp",
        "/images/portfolio/pycommerce/14.webp",
        "/images/portfolio/pycommerce/15.webp",
        "/images/portfolio/pycommerce/16.webp",
        "/images/portfolio/pycommerce/17.webp",
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
