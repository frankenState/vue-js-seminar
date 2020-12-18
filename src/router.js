import Vue from "vue";
import VueRouter from "vue-router";

import PostsPage from "./pages/PostsPage";
import PostFormPage from "./pages/PostFormPage";

Vue.use(VueRouter);

const routes = [
    {
        path: '/posts',
        name: 'Posts',
        component: PostsPage
    },
    {
        path: '/post-form/:id?',
        name: 'PostForm',
        component: PostFormPage
    },
];

const router = new VueRouter({
    routes
});

export default router;

