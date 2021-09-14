<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="100px"
      class="demo-form"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-button @click="submit">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      form: {
        name: null,
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      },
    }
  },
  methods: {
    submit() {
      console.log('submit');
      this.fetchData();
    },
    fetchData() {
      this.$http.get('/api/test/test1').then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
