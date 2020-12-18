<template>
  <div class="container-fluid">
    <p class="lead">Post Form</p>
    <form @submit.prevent="savePost">
      <div class="form-group">
        <small>Title</small>
        <input
          v-model="post.title"
          type="text"
          class="form-control"
          placeholder="Post Title"
          required
        />
      </div>
      <div class="form-group">
        <small>Title</small>
        <textarea
          v-model="post.body"
          type="text"
          class="form-control"
          placeholder="Post Title"
          rows="5"
          required
        />
      </div>
      <div class="btn-group">
        <button type="submit" class="btn btn-outline-primary btn-sm">
          {{ isEditing ? "Update" : "Submit" }}
        </button>
        <button
          @click="clearPost"
          type="button"
          class="btn btn-outline-warning btn-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      isEditing: false,
      post: { id: "", title: "", body: "" },
    };
  },

  created() {
    if (this.$route.params.id !== undefined) {
      let id = this.$route.params.id;
      let post = this.posts.find((post) => post.id == id);
      this.post = post;
      this.isEditing = true;
    }
  },

  computed: {
    ...mapGetters({
      posts: "posts/getUsers",
    }),
  },

  methods: {
    ...mapActions({
      newPost: "posts/newPost",
      updatePost: "posts/updatePost",
    }),
    savePost() {
      if (!this.isEditing)
        this.newPost(this.post)
          .then(() => console.log("new post was added..."))
          .catch((e) => console.log("Error : ", e));
      else
        this.newPost(this.post)
          .then(() => console.log("new post was added..."))
          .catch((e) => console.log("Error : ", e));

      // this.this.clearPost();
      this.$router.push("/posts");
    },
    clearPost() {
      this.post = { id: "", title: "", body: "" };
    },
  },
};
</script>