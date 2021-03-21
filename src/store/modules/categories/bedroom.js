/* eslint-disable */
import Vue from 'vue'

const bedroom = {
    namespaced: true,
    state: {
        beds: null,
        bedPost: null,
        wardrobes: null,
        wardrobePost: null,
        cabinets: null,
        cabinetPost: null
    },
    getters: {
        getBeds(state) {
            return state.beds;
        },
        getBedPost(state) {
            return state.bedPost;
        },
        getWardrobes(state) {
            return state.wardrobes;
        },
        getWardrobePost(state) {
            return state.wardrobePost;
        },
        getCabinets(state) {
            return state.cabinets;
        },
        getCabinetPost(state) {
            return state.cabinetPost;
        }
    },
    mutations: {
        getBeds(state, items) {
            state.beds = items;
        },
        getBedPost(state, post) {
            state.bedPost = post;
        },
        getWardrobes(state, items) {
            state.wardrobes = items;
        },
        getWardrobePost(state, post) {
            state.wardrobePost = post;
        },
        getCabinets(state, items) {
            state.cabinets = items;
        },
        getCabinetPost(state, post) {
            state.cabinetPost = post;
        },
        clearPost(state){
            state.bedPost = null;
            state.wardrobePost = null;
            state.cabinetPost = null;
        }
    },
    actions: {
        getBeds({ commit }, payload) {
            Vue.http.get(`spavaća_soba/kreveti.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getBeds", items.reverse());
                })
        },
        getBedPost({ commit }, payload) {
            Vue.http.get(`spavaća_soba/kreveti.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getBedPost", post);
                })
        },
        insertBed({commit, state}, payload) {
            Vue.http.post(`spavaća_soba/kreveti.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.beds.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getBeds', newItems);
                    location.reload();
                })
        },
        deleteBed({ commit, state }, payload) {
            Vue.http.delete(`spavaća_soba/kreveti/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.beds.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getBeds', newItems);
                })
        },
        getWardrobes({ commit }, payload) {
            Vue.http.get(`spavaća_soba/ormari.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getWardrobes", items.reverse());
                })
        },
        getWardrobePost({ commit }, payload) {
            Vue.http.get(`spavaća_soba/ormari.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getWardrobePost", post);
                })
        },
        insertWardrobe({commit, state}, payload) {
            Vue.http.post(`spavaća_soba/ormari.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.wardrobes.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getWardrobes', newItems);
                    location.reload();
                })
        },
        deleteWardrobe({ commit, state }, payload) {
            Vue.http.delete(`spavaća_soba/ormari/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.wardrobes.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getWardrobes', newItems);
                })
        },
        getCabinets({ commit }, payload) {
            Vue.http.get(`spavaća_soba/komode.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getCabinets", items.reverse());
                })
        },
        getCabinetPost({ commit }, payload) {
            Vue.http.get(`spavaća_soba/komode.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getCabinetPost", post);
                })
        },
        insertCabinet({commit, state}, payload) {
            Vue.http.post(`spavaća_soba/komode.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.cabinets.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getCabinets', newItems);
                    location.reload();
                })
        },
        deleteCabinet({ commit, state }, payload) {
            Vue.http.delete(`spavaća_soba/komode/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.cabinets.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getCabinets', newItems);
                })
        },
    }
}

export default bedroom;