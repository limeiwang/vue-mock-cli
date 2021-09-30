<template>
  <div id="app">
    <h1>hello vue-mock-cli</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$http.posts().then(res => {
      console.log(res, 1);
    }).catch(err=>{
      console.log(err, 2);
    });
  }
};
</script>
<style>

</style>
