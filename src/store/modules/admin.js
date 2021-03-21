/* eslint-disable */
import Vue from 'vue'
import router from '../../routes'

// Login and Register URL
const FbAuth = "https://identitytoolkit.googleapis.com/v1";
// API key
const FbApiKey = "AIzaSyCcxtXN7SzKiKHdK9AHYg0o5-i_xbmkDOE";

let isAdminLS = localStorage.getItem("admin");

const admin = {
    namespaced: true,
    state: {
        token: null,
        refresh: null,
        authFailed: false,
        isAdmin: isAdminLS ? JSON.parse(isAdminLS) : false,
        msg: false
    },
    getters: {
        isAuth(state) {
            if (state.token) {
                return true;
            } else {
                return false;
            }
        }

    },
    mutations: {
        authUser(state, authData) {
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;

            if (authData.type === 'login' || 'register' && authData.load !== 'refresh' && authData.email !== 'filip@gmail.com') {
                router.push('/korpa');
                state.msg = true;
                setTimeout(() => {
                    state.msg = false;
                },5000)
            }

            if (authData.email === 'filip@gmail.com') {
                state.isAdmin = true;
                router.push('/');
            }

            localStorage.setItem("admin", JSON.stringify(state.isAdmin));

        },
        authFailed(state, type) {
            if (type === 'reset') {
                state.authFailed = false;
            } else {
                state.authFailed = true;
            }
        },
        logout(state) {

            state.token = null;
            state.refresh = null;

            localStorage.clear();

            router.push('/');

            location.reload();
        }
    },
    actions: {
        register({ commit }, payload) {
            Vue.http.post(`${FbAuth}/accounts:signUp?key=${FbApiKey}`, {
                ...payload,
                returnSecureToken: true
            })
                .then(response => response.json())
                .then(authData => {
                    console.log(authData);
                    commit("authUser", {
                        ...authData,
                        type: 'register'
                    });
                    localStorage.setItem("token", authData.idToken);
                    localStorage.setItem("refresh", authData.refreshToken);
                })
        },

        login({ commit }, payload) {
            Vue.http.post(`${FbAuth}/accounts:signInWithPassword?key=${FbApiKey}`, {
                ...payload,
                returnSecureToken: true
            })
                .then(response => response.json())
                .then(authData => {
                    console.log(authData);
                    commit("authUser", {
                        ...authData,
                        type: 'login'
                    });

                    localStorage.setItem("token", authData.idToken);
                    localStorage.setItem("refresh", authData.refreshToken);

                })
                .catch(error => {
                    commit("authFailed");
                })
        },
        refreshToken({ commit }) {
            const refreshToken = localStorage.getItem("refresh");

            if (refreshToken) {
                Vue.http.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`, {
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken
                })
                    .then(response => response.json())
                    .then(authData => {
                        console.log(authData);
                        commit("authUser", {
                            idToken: authData.id_token,
                            refreshToken: authData.refresh_token,
                            load: 'refresh'
                        });
                        localStorage.setItem("token", authData.id_token);
                        localStorage.setItem("refresh", authData.refresh_token);
                    })
            }
        }
    }
}

export default admin;