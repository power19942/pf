<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded" class="mx-auto">
      <b-container>
        <b-navbar-brand to="/">Omar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/resume">Resume</b-nav-item>
            <b-nav-item href="https://www.linkedin.com/in/omar-jakmira-238a54114/" target="_blank" >Linkedin</b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
