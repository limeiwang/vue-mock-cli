<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FbPage :schema="schema"/>
  </div>
</template>

<script>
import finbox from '../../components/finbox/src';
import list from '../schema/list';
export default {
  data() {
    return {
      schema: {}
    };
  },

  components: {
    FbPage: finbox.components.FbPage
  },

  created() {
    this.schema = list();
  }
};
</script>
