<template>
  <div id="app" class="container mt-5 mb-5" style="width: 500px">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto d-block">
    <FormValidation />
  </div>
</template>

<script>
import FormValidation from "@/components/FormValidation";

export default {
  name: 'App',
  components: {
  FormValidation
  }
}
</script>

<style>

</style>
