/* eslint-disable */
import Vue from 'vue'
import router from '../../routes'

const image = {
    namespaced: true,
    state: {
        imageUpload: null
    },
    getters: {
        imageUpload(state) {
            return state.imageUpload;
        }
    },
    mutations: {
        imageUpload(state, imageData) {
            state.imageUpload = imageData.secure_url;
        },
        clearImageUpload(state){
            state.imageUpload = null; 
        }
    },
    actions: {
        imageUpload({ commit }, file) {
            const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dpb88svrv/image/upload';
            const cloudinaryPreset = 'cvezdid7';

            let formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', cloudinaryPreset);

            Vue.http.post(cloudinaryUrl, formData, {
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => response.json())
                .then(response => {
                    commit("imageUpload", response);
                })

        }
    }
}

export default image;