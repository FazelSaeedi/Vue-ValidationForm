<template>
  <div id="app" class="container mt-5 mb-5" style="width: 500px">
    <img alt="Vue logo" src="./assets/logo.png">
    <FileValidation />
  </div>
</template>

<script>
import FileValidation from "@/components/FileValidation";

export default {
  name: 'App',
  components: {
    FileValidation
  }
}
</script>

<style>

</style>
