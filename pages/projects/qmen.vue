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
              <h1 class="main-headline mb-5">Qmen</h1>
              <p class="description mb-5">
                Qmen is a simple QR menu for restaurants that allow the owner to create a QR code for each table for customers to easily request and pay for their orders
                with the ability to customize the menu design for each restaurant

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
        "/images/portfolio/qmen/1.webp",
        "/images/portfolio/qmen/2.webp",
        "/images/portfolio/qmen/3.webp",
        "/images/portfolio/qmen/4.webp",
        "/images/portfolio/qmen/5.webp",
        "/images/portfolio/qmen/6.webp",
        "/images/portfolio/qmen/7.webp",
        "/images/portfolio/qmen/8.webp",
        "/images/portfolio/qmen/9.webp",
        "/images/portfolio/qmen/10.webp",
        "/images/portfolio/qmen/11.webp",
        "/images/portfolio/qmen/12.webp",
        "/images/portfolio/qmen/13.webp"
      ],
    };
  },
  methods: {
    changeImage() {
      if (this.selectedImage >= this.images.length -1) {
        this.selectedImage = -1
      }
      this.$refs.mainImage.src = this.images[++this.selectedImage]
      //window.scrollTo({top: document.querySelector('img').offsetTop + 900, behavior: 'smooth'});
    }
  },
};
</script>

<style scoped>
</style>
