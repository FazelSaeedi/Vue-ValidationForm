<template>
  <div id="app" class="container mt-5 mb-5" style="width: 500px">

    <div class="nav ml-0 nav-justified ">
      <router-link to="/Home" class="nav-link border colo">Home</router-link>
      <router-link to="/form1" class="nav-link border colo">Form1</router-link>
    </div>


    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto d-block">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
