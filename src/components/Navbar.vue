<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Vue App</a>
      <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> -->
      <div class="navbar-nav float-left">
        <router-link class="nav-link" to="/posts">Posts</router-link>
        <router-link class="nav-link" to="/post-form">Post Form</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>