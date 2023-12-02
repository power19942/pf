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
              <h1 class="main-headline mb-5">Whatsapp React Native</h1>
              <p class="description mb-5">
                Whatsapp clone build with React Native
                <br />
                <span class="note"
                  >note: you can click the image to play the gallery</span
                >
              </p>
            </b-col>
            <b-col md="2"></b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <b-row>
           <b-col md="3"></b-col>
          <b-col md="6">
            <div class="project-main-image">
              <img
                @click="changeImage"
                ref="mainImage"
                :src="images[selectedImage]"
                alt=""
              />
            </div>
          </b-col>
           <b-col md="3"></b-col>
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
        "/images/portfolio/whatsapp_rn/1.webp",
        "/images/portfolio/whatsapp_rn/2.webp",
        "/images/portfolio/whatsapp_rn/3.webp",
        "/images/portfolio/whatsapp_rn/4.webp",
        "/images/portfolio/whatsapp_rn/5.webp",
        "/images/portfolio/whatsapp_rn/6.webp",
        "/images/portfolio/whatsapp_rn/7.webp",
        "/images/portfolio/whatsapp_rn/8.webp",
        "/images/portfolio/whatsapp_rn/9.webp",
        "/images/portfolio/whatsapp_rn/10.webp",
        "/images/portfolio/whatsapp_rn/11.webp",
        "/images/portfolio/whatsapp_rn/12.webp",
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
