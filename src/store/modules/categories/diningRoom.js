/* eslint-disable */
import Vue from 'vue'

const diningRoom = {
    namespaced: true,
    state: {
        tables: null,
        tablePost: null,
        chairs: null,
        chairPost: null
    },
    getters: {
        getTables(state){
            return state.tables;
        },
        getTablePost(state){
            return state.tablePost;
        },
        getChairs(state){
            return state.chairs;
        },
        getChairPost(state){
            return state.chairPost;
        },
    },
    mutations: {
        getTables(state, items){
            state.tables = items;
        },
        getTablePost(state, post){
            state.tablePost = post;
        },
        getChairs(state, items){
            state.chairs = items;
        },
        getChairPost(state, post){
            state.chairPost = post;
        },
        clearPost(state){
            state.tablePost = null;
            state.chairPost = null;
        }
    },
    actions: {
        getTables({commit}, payload){
            Vue.http.get(`trpezarija/trpezarijski_stolovi.json?orderBy="$key"&limitToLast=${payload.limit}`)
            .then(response => response.json())
            .then(responseData => {
                const items = [];
                for(let key in responseData){
                    items.push({
                        ...responseData[key],
                        id: key
                    })
                }
                commit("getTables", items.reverse());
            })
        },
        getTablePost({commit}, payload){
            Vue.http.get(`trpezarija/trpezarijski_stolovi.json?orderBy="$key"&equalTo="${payload}"`)
            .then(response => response.json())
            .then(responseData => {
                let post = {};
                for(let key in responseData){
                    post = {
                        ...responseData[key]
                    }
                }
                commit("getTablePost", post);
            })
        },
        insertTable({commit, state}, payload) {
            Vue.http.post(`trpezarija/trpezarijski_stolovi.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.tables.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getTables', newItems);
                    location.reload();
                })
        },
        deleteTable({ commit, state }, payload) {
            Vue.http.delete(`trpezarija/trpezarijski_stolovi/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.tables.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getTables', newItems);
                })
        },
        getChairs({commit}, payload){
            Vue.http.get(`trpezarija/trpezarijske_stolice.json?orderBy="$key"&limitToLast=${payload.limit}`)
            .then(response => response.json())
            .then(responseData => {
                const items = [];
                for(let key in responseData){
                    items.push({
                        ...responseData[key],
                        id: key
                    })
                }
                commit("getChairs", items.reverse());
            })
        },
        getChairPost({commit}, payload){
            Vue.http.get(`trpezarija/trpezarijske_stolice.json?orderBy="$key"&equalTo="${payload}"`)
            .then(response => response.json())
            .then(responseData => {
                let post = {};
                for(let key in responseData){
                    post = {
                        ...responseData[key]
                    }
                }
                commit("getChairPost", post);
            })
        },
        insertChair({commit, state}, payload) {
            Vue.http.post(`trpezarija/trpezarijske_stolice.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.chairs.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getChairs', newItems);
                    location.reload();
                })
        },
        deleteChair({ commit, state }, payload) {
            Vue.http.delete(`trpezarija/trpezarijske_stolice/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.chairs.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getChairs', newItems);
                })
        },
    }
}

export default diningRoom;