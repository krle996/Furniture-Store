/* eslint-disable */
import Vue from 'vue'

const livingRoom = {
    namespaced: true,
    state: {
        eCenters: null,
        eCenterPost: null,
        tvShelves: null,
        tvShelfPost: null,
        cornerSets: null,
        cornerSetPost: null,
        sofas: null,
        sofaPost: null,
        armchairs: null,
        armchairPost: null
    },
    getters: {
        getECs(state) {
            return state.eCenters;
        },
        getECPost(state) {
            return state.eCenterPost;
        },
        getTVShelves(state) {
            return state.tvShelves;
        },
        getTVShelfPost(state) {
            return state.tvShelfPost;
        },
        getCornerSets(state) {
            return state.cornerSets;
        },
        getCornerSetPost(state) {
            return state.cornerSetPost;
        },
        getSofas(state) {
            return state.sofas;
        },
        getSofaPost(state) {
            return state.sofaPost;
        },
        getArmchairs(state) {
            return state.armchairs;
        },
        getArmchairPost(state) {
            return state.armchairPost;
        }
    },
    mutations: {
        getECs(state, items) {
            state.eCenters = items;
        },
        getECPost(state, post) {
            state.eCenterPost = post;
        },
        getTVShelves(state, items) {
            state.tvShelves = items;
        },
        getTVShelfPost(state, post) {
            state.tvShelfPost = post;
        },
        getCornerSets(state, items) {
            state.cornerSets = items;
        },
        getCornerSetPost(state, post) {
            state.cornerSetPost = post;
        },
        getSofas(state, items) {
            state.sofas = items;
        },
        getSofaPost(state, post) {
            state.sofaPost = post;
        },
        getArmchairs(state, items) {
            state.armchairs = items;
        },
        getArmchairPost(state, post) {
            state.armchairPost = post;
        },
        clearPost(state) {
            state.eCenterPost = null;
            state.tvShelfPost = null;
            state.cornerSetPost = null;
            state.sofaPost = null;
            state.armchairPost = null;
        }
    },
    actions: {
        getECs({ commit }, payload) {
            Vue.http.get(`dnevna_soba/regali.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getECs", items.reverse());
                })
        },
        getECPost({ commit }, payload) {
            Vue.http.get(`dnevna_soba/regali.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getECPost", post);
                })
        },
        insertEC({ commit, state }, payload) {
            Vue.http.post(`dnevna_soba/regali.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.eCenters.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getECs', newItems);
                    location.reload();
                })
        },
        deleteEC({ commit, state }, payload) {
            Vue.http.delete(`dnevna_soba/regali/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.eCenters.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getECs', newItems);
                })
        },
        getTVShelves({ commit }, payload) {
            Vue.http.get(`dnevna_soba/tv_komode.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getTVShelves", items.reverse());
                })
        },
        getTVShelfPost({ commit }, payload) {
            Vue.http.get(`dnevna_soba/tv_komode.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getTVShelfPost", post);
                })
        },
        insertTVShelf({ commit, state }, payload) {
            Vue.http.post(`dnevna_soba/tv_komode.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.tvShelves.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getTVShelves', newItems);
                    location.reload();
                })
        },
        deleteTVShelf({ commit, state }, payload) {
            Vue.http.delete(`dnevna_soba/tv_komode/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.tvShelves.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getTVShelves', newItems);
                })
        },
        getCornerSets({ commit }, payload) {
            Vue.http.get(`dnevna_soba/ugaone_garniture.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getCornerSets", items.reverse());
                })
        },
        getCornerSetPost({ commit }, payload) {
            Vue.http.get(`dnevna_soba/ugaone_garniture.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getCornerSetPost", post);
                })
        },
        insertCornerSet({ commit, state }, payload) {
            Vue.http.post(`dnevna_soba/ugaone_garniture.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.cornerSets.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getCornerSets', newItems);
                    location.reload();
                })
        },
        deleteCornerSet({ commit, state }, payload) {
            Vue.http.delete(`dnevna_soba/ugaone_garniture/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.cornerSets.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getCornerSets', newItems);
                })
        },
        getSofas({ commit }, payload) {
            Vue.http.get(`dnevna_soba/ležajevi.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getSofas", items.reverse());
                })
        },
        getSofaPost({ commit }, payload) {
            Vue.http.get(`dnevna_soba/ležajevi.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getSofaPost", post);
                })
        },
        insertSofa({ commit, state }, payload) {
            Vue.http.post(`dnevna_soba/ležajevi.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.sofas.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getSofas', newItems);
                    location.reload();
                })
        },
        deleteSofa({ commit, state }, payload) {
            Vue.http.delete(`dnevna_soba/ležajevi/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.sofas.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getSofas', newItems);
                })
        },
        getArmchairs({ commit }, payload) {
            Vue.http.get(`dnevna_soba/fotelje.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(responseData => {
                    const items = [];
                    for (let key in responseData) {
                        items.push({
                            ...responseData[key],
                            id: key
                        })
                    }
                    commit("getArmchairs", items.reverse());
                })
        },
        getArmchairPost({ commit }, payload) {
            Vue.http.get(`dnevna_soba/fotelje.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(responseData => {
                    let post = {};
                    for (let key in responseData) {
                        post = {
                            ...responseData[key]
                        }
                    }
                    commit("getArmchairPost", post);
                })
        },
        insertArmchair({ commit, state }, payload) {
            Vue.http.post(`dnevna_soba/fotelje.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.armchairs.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getArmchairs', newItems);
                    location.reload();
                })
        },
        deleteArmchair({ commit, state }, payload) {
            Vue.http.delete(`dnevna_soba/fotelje/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.armchairs.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getArmchairs', newItems);
                })
        },
    }
}

export default livingRoom;