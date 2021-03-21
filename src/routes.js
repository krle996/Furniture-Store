/*eslint-disable */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

import Home from './components/home/Index.vue'
import AboutUs from './components/home/AboutUs.vue'
import CustomFurniture from './components/home/CustomFurniture.vue'
import Contact from './components/home/Contact.vue'
import Login from './components/signin/Login.vue'
import Register from './components/signin/Register.vue'
import Cart from './components/cart/ShoppingCart.vue'
import LivingRoom from './components/categories/livingRoom/LivingRoom.vue'
import EnertainmentCenter from './components/categories/livingRoom/EntertainmentCenter.vue'
import EnertainmentCenterPost from './components/categories/livingRoom/EntertainmentCenterPost.vue'
import TVshelves from './components/categories/livingRoom/TVshelves.vue'
import TVshelfPost from './components/categories/livingRoom/TVshelfPost.vue'
import CornerSets from './components/categories/livingRoom/CornerSets.vue'
import CornerSetPost from './components/categories/livingRoom/CornerSetPost.vue'
import Sofas from './components/categories/livingRoom/Sofas.vue'
import SofaPost from './components/categories/livingRoom/SofaPost.vue'
import Armchairs from './components/categories/livingRoom/Armchairs.vue'
import ArmchairPost from './components/categories/livingRoom/ArmchairPost.vue'
import Bedroom from './components/categories/bedroom/Bedroom.vue'
import Beds from './components/categories/bedroom/Beds.vue'
import BedPost from './components/categories/bedroom/BedPost.vue'
import Wardrobes from './components/categories/bedroom/Wardrobes.vue'
import WardrobePost from './components/categories/bedroom/WardrobePost.vue'
import Cabinets from './components/categories/bedroom/Cabinets.vue'
import CabinetPost from './components/categories/bedroom/CabinetPost.vue'
import Kitchen from './components/categories/kitchen/Kitchen.vue'
import KitchenPost from './components/categories/kitchen/KitchenPost.vue'
import DiningRoom from './components/categories/diningRoom/DiningRoom.vue'
import Tables from './components/categories/diningRoom/Tables.vue'
import TablePost from './components/categories/diningRoom/TablePost.vue'
import Chairs from './components/categories/diningRoom/Chairs.vue'
import ChairPost from './components/categories/diningRoom/ChairPost.vue'
import Office from './components/categories/office/Office.vue'
import OfficeTables from './components/categories/office/OfficeTables.vue'
import OfficeTablePost from './components/categories/office/OfficeTablePost.vue'
import OfficeChairs from './components/categories/office/OfficeChairs.vue'
import OfficeChairPost from './components/categories/office/OfficeChairPost.vue'
import NotFound from './components/home/PageNotFound.vue'

Vue.use(VueRouter);

const authGuard = {
    beforeEnter: (to, from, next) => {
        if(store.state.admin.token){
            next();
        } else {
            next('/');
        }
    }
}

const routes = [
    { path: '/', component: Home },
    { path: '/o-nama', component: AboutUs },
    { path: '/nameštaj-po-meri', component: CustomFurniture },
    { path: '/login', component: Login },
    { path: '/registracija', component: Register },
    { path: '/korpa', component: Cart, ...authGuard },
    { path: '/kontakt', component: Contact },
    { path: '/proizvodi/dnevna-soba', component: LivingRoom },
    { path: '/proizvodi/dnevna-soba/regali', component: EnertainmentCenter },
    { path: '/proizvodi/dnevna-soba/regali/:id', component: EnertainmentCenterPost },
    { path: '/proizvodi/dnevna-soba/tv-komode', component: TVshelves },
    { path: '/proizvodi/dnevna-soba/tv-komode/:id', component: TVshelfPost },
    { path: '/proizvodi/dnevna-soba/ugaone-garniture', component: CornerSets },
    { path: '/proizvodi/dnevna-soba/ugaone-garniture/:id', component: CornerSetPost },
    { path: '/proizvodi/dnevna-soba/ležajevi', component: Sofas },
    { path: '/proizvodi/dnevna-soba/ležajevi/:id', component: SofaPost },
    { path: '/proizvodi/dnevna-soba/fotelje', component: Armchairs },
    { path: '/proizvodi/dnevna-soba/fotelje/:id', component: ArmchairPost },
    { path: '/proizvodi/spavaća-soba', component: Bedroom },
    { path: '/proizvodi/spavaća-soba/kreveti', component: Beds },
    { path: '/proizvodi/spavaća-soba/kreveti/:id', component: BedPost },
    { path: '/proizvodi/spavaća-soba/ormari', component: Wardrobes },
    { path: '/proizvodi/spavaća-soba/ormari/:id', component: WardrobePost },
    { path: '/proizvodi/spavaća-soba/komode', component: Cabinets },
    { path: '/proizvodi/spavaća-soba/komode/:id', component: CabinetPost },
    { path: '/proizvodi/kuhinje', component: Kitchen },
    { path: '/proizvodi/kuhinje/:id', component: KitchenPost },
    { path: '/proizvodi/trpezarija', component: DiningRoom },
    { path: '/proizvodi/trpezarija/stolovi', component: Tables },
    { path: '/proizvodi/trpezarija/stolovi/:id', component: TablePost },
    { path: '/proizvodi/trpezarija/stolice', component: Chairs },
    { path: '/proizvodi/trpezarija/stolice/:id', component: ChairPost },
    { path: '/proizvodi/kancelarija', component: Office },
    { path: '/proizvodi/kancelarija/stolovi', component: OfficeTables },
    { path: '/proizvodi/kancelarija/stolovi/:id', component: OfficeTablePost },
    { path: '/proizvodi/kancelarija/stolice', component: OfficeChairs },
    { path: '/proizvodi/kancelarija/stolice/:id', component: OfficeChairPost },
    { path: '*', component: NotFound }
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(from, to, savedPosition){
        return {
            x: 0,
            y: 0
        }
    }
})