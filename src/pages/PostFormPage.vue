<template>
  <div class="container pt-3">
    <div class="card">
      <div class="card-header">Post Form Page</div>
      <div class="card-body">
        <post-form></post-form>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "../components/PostForm";

export default {
  components: {
    PostForm
  },
  created() {
  console.log("Query=>", this.$route.params);
  }
};
</script>