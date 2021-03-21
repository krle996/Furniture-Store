/* eslint-disable */
import Vue from 'vue'

const offer = {
    namespaced: true,
    state: {
        offerPost: null
    },
    getters: {
        getOffer(state){
            return state.offerPost;
        }
    },
    mutations: {
        getOffer(state, offer){
            state.offerPost = offer;
        }
    },
    actions: {
        getOffer({commit}, payload){
            Vue.http.get(`ponuda.json?orderBy="$key"&limitToLast=${payload.limit}`)
            .then(response => response.json())
            .then( responseData => {
                const items = [];
                for ( let key in responseData) {
                    items.push({
                        ...responseData[key],
                        id: key
                    })
                }
                commit("getOffer", items.reverse());
            })
        },
        insertOffer({commit, state}, payload) {
            Vue.http.post(`ponuda.json`, payload)
                .then(response => {
                    let newItems = [];
                    state.offerPost.forEach(item => {
                        newItems.push(item);
                    });
                    commit('getOffer', newItems);
                    location.reload();
                })
        },
        deleteOffer({ commit, state }, payload) {
            Vue.http.delete(`ponuda/${payload}.json`)
                .then(response => {
                    let newItems = [];
                    state.offerPost.forEach(item => {
                        if (item.id != payload) {
                            newItems.push(item);
                        }
                    });
                    commit('getOffer', newItems);
                })
        },
    }
}

export default offer;