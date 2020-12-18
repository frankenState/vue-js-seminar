import axios from 'axios';
// $.ajax(...)
export default ({
    namespaced: true,
    state: {
        posts: null,
    },
    getters: {
        getUsers(state) {
            return state.posts;
        }
    },
    mutations: {
        SET_POSTS(state, payload){
            state.posts = payload;
        },
        NEW_POST(state, payload){
            state.posts.unshift(payload);
        },
    },
    actions: {
        async fetchPosts({commit}){
            try {
                let posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');

                console.log("POSTS => ", posts);
                commit('SET_POSTS', posts.data);

            } catch (e){
                console.log(e);
            }
        },

        async newPost({commit}, post){
            try {
                await axios.post('https://jsonplaceholder.typicode.com/posts');

                console.log("New Post Created...");

                post.id = new Date().getMilliseconds();

                commit('NEW_POST', post);

            } catch (e){
                console.log("Error: ", e);
            }
        },
        
        async updatePost({commit, state}, payload){
            try {

                await axios.put('https://jsonplaceholder.typicode.com/posts/' + payload.id);

                let posts = Object.assign([], state.posts);

                posts = posts.map( post => post.id === payload.id ? payload : post );

                commit('SET_POSTS', posts);

            } catch (e){
                console.log("Error : ", e);
            }
        },

        async deletePost({commit, state}, payload){
            try {
                await axios.delete('https://jsonplaceholder.typicode.com/posts/' + payload);

                let posts = Object.assign([], state.posts);

                posts = posts.filter(post => post.id !== payload);

                commit('SET_POSTS', posts);
            } catch (e){
                console.log("Error: ", e);
            }
        }
    }
})