<template>
    <div>
        <app-carousel/>
        <app-aboutus/>
        <app-offer/>
        <app-custom-furniture/>
    </div>
</template>

<script>
import Carousel from './Carousel'
import AboutUsCard from './AboutUsCard'
import Offer from './Offer'
import CustomFurnitureCard from './CustomFurnitureCard'

export default {
    components: {
        'app-carousel': Carousel,
        'app-aboutus': AboutUsCard,
        'app-offer': Offer,
        'app-custom-furniture': CustomFurnitureCard
    }
}
</script>