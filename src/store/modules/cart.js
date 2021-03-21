/* eslint-disable */
import Vue from 'vue'

let cartLS = localStorage.getItem("cart");
let countLS = localStorage.getItem("count");

const cart = {
    namespaced: true,
    state: {
        cart: cartLS ? JSON.parse(cartLS) : [],
        count: countLS ? JSON.parse(countLS) : 0,
        msg: false
    },
    getters: {
        addToCart(state) {
            return state.cart;
        },

        totalPrice(state) {
            let total = 0;
            
            state.cart.forEach(item => {
                total = total + (item.productPrice * item.productQuantity);
            });
            return total;
        },

        isEmpty(state) {
            if (state.cart == ![]) {
                return false;
            } else {
                return true;
            }
        },

    },
    mutations: {
        addToCart(state, product) {

            let sameProduct = state.cart.find(item => item.productId == product.productId);

            if (sameProduct) {
                sameProduct.productQuantity++;
            } else {
                state.cart.push(product);
                state.count++;
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("count", JSON.stringify(state.count));
        },

        removeProduct(state, product) {
            let index = state.cart.indexOf(product);
            state.cart.splice(index, 1);
            state.count--;

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("count", JSON.stringify(state.count));

        },

        cleanCart(state) {
            state.cart = [];
            state.count = 0;

            localStorage.setItem("cart", JSON.stringify(state.cart));
            localStorage.setItem("count", JSON.stringify(state.count));


        },

        incrementQuantity(state, id){

            state.cart.forEach(element => {
                if(element.productId === id){
                    element.productQuantity++
                }
            });

            localStorage.setItem('cart', JSON.stringify(state.cart));

        },

        decrementQuantity(state, id){

            state.cart.forEach(element => {
                if(element.productId === id){
                    element.productQuantity--
                }
            });

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
    actions: {
        orderProducts({commit, state}, payload){

            let cart = JSON.parse(localStorage.getItem('cart'));

            let order = [];

            order.push(payload);
            order.push(cart);

            Vue.http.post(`narudžbine.json`, order)
            .then( response => response.json() )
            .then( response => {
                console.log(response);
            } )

            state.msg = true;
            setTimeout(() => {
                state.msg = false;
            },5000)

            state.cart = [];
            state.count = 0;
            localStorage.removeItem("cart");
            localStorage.removeItem("count");
            

        }
    }

}

export default cart;