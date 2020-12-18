<template>
  <div class="container-fluid">
    <p class="lead">Posts List</p>
    <div v-for="(e, i) in posts" :key="i" class="card mb-2">
      <div class="card-body">
        <div class="media">
          <div class="media-body">
            <h5 class="mt-0">{{ e.title }}</h5>
            {{ e.body }}
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="btn-group">
          <button @click="editPost(e.id)" type="button" class="btn btn-outline-primary btn-sm">
            Edit
          </button>
          <button @click="deletePost(e.id)" type="button" class="btn btn-outline-warning btn-sm">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    posts: Array,
  },

  methods: {
    ...mapActions({
      delete: 'posts/deletePost'
    }),
    editPost(id) {
      console.log("Editing post with id = " + id);
      this.$router.push('/post-form/' + id);
    },

    deletePost(id) {
      console.log("Deleting post with id = " + id);
      if (confirm('Are you sure?')){
        this.delete(id)
          .then(() => console.log('Successfully deleted....'))
          .catch( e => console.log("Error: " , e));
      }
    },
  },
};
</script>