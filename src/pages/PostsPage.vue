<template>
  <div class="container pt-3">
    <div class="card">
      <div class="card-header">Posts Page</div>
      <div class="card-body">
        <posts-list :posts="posts"></posts-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsList from "../components/PostsList";

export default {
  created() {
    this.getPosts()
      .then(() => console.log("post fetched..."))
      .catch((e) => console.log("Error : ", e));
  },

  computed: {
    ...mapGetters({
      posts: "posts/getUsers",
    }),
  },

  methods: {
    ...mapActions({
      getPosts: "posts/fetchPosts",
    }),
  },

  components: {
    PostsList,
  },
};
</script>