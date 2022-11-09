<template>
<div>
  <div class="header">
    <b-container style="height: 100%" class="d-flex flex-column justify-content-center align-items-start">
      <b-row>
        <b-col md="2"></b-col>
        <b-col md="8"  class="text-center">
          <p class="secondary-text">updated at 1/2021</p>
          <h1 class="main-headline mb-5">My Updated Resume</h1>
          <p class="description mb-5">
            here are all of my skills and field of experiences
            I have experiences in multiple languages and frameworks
            and able to learn any new technology to get the work done with the best quality
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
          <iframe class="resume-preview" src="/files/resume.pdf" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
name: "menhag",

}
</script>

<style scoped>

</style>
