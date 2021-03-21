/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'
import image from './modules/image'
import offer from './modules/offer'
import livingRoom from './modules/categories/livingRoom'
import bedroom from './modules/categories/bedroom'
import kitchen from './modules/categories/kitchen'
import diningRoom from './modules/categories/diningRoom'
import office from './modules/categories/office'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        admin,
        image,
        offer,
        cart,
        livingRoom,
        bedroom,
        kitchen,
        diningRoom,
        office
    }
})