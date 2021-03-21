/* eslint-disable */
import Vue from 'vue'

const kitchen = {
    namespaced: true,
    state: {
        kitchen: null,
        kitchenPost: null
    },
    getters: {
        getKitchen(state) {
            return state.kitchen;
        },
        getKitchenPost(state) {
            return state.kitchenPost;
        },
    },
    mutations: {
        getKitchen(state, items) {
            state.kitchen = items;
        },
        getKitchenPost(state, post) {
            state.kitchenPost = post;
        },
        clearPost(state) {
            state.kitchenPost = null;
        },
    },
    actions: {
        getKitchen({ commit }, payload) {
            Vue.http.get(`kuhinja.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getKitchen", items.reverse());
                })
        },
        getKitchenPost({ commit }, payload) {
            Vue.http.get(`kuhinja.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getKitchenPost", post);
                })
        },
        insertKitchen({commit, state}, payload) {
            Vue.http.post(`kuhinja.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.kitchen.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getKitchen', newItems);
                    location.reload();
                })
        },
        deleteKitchen({ commit, state }, payload) {
            Vue.http.delete(`kuhinja/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.kitchen.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getKitchen', newItems);
                })
        }
    }
}

export default kitchen;