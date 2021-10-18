<template>
  <div id="app">
    <router-link to="/home">home</router-link> | 
    <router-link to="/about">about</router-link>
    <h1>hello vue-mock-cli</h1>
    <router-view/>
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
