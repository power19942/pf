import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    changeImage() {
      this.isLoading = true;
      if (this.selectedImage >= this.images.length -1) {
        this.selectedImage = -1;
      }

      this.$refs.mainImage.src = this.images[++this.selectedImage];
      //  setTimeout(() => {
      this.isLoading = false;
      //  }, 0);
      //window.scrollTo({top: document.querySelector('img').offsetTop + 900, behavior: 'smooth'});
    },
  }
})
