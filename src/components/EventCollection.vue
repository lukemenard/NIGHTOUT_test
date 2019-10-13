<template>
    <router-link :to="{name: 'collection', params: {CollectionId: eventCollection.id, cityId: cityId, slug: slug}}">
        <div class="collection-wrapper">
            <div class="collection-title">
                <h2>{{eventCollection.title}}</h2>
            </div>
                <div class="collection-description-and-tag">
                    <div class="collection-description">
                        {{eventCollection.description}}
                    </div>
                <router-link :cityId="cityId" :to="{name: 'collection', params: {CollectionId: eventCollection.id, cityId: cityId, slug: slug}}" class="collection-tag">
                    CURATED COLLECTION >
                </router-link>
                <div class="hero-layout">
                    <router-link :cityId="cityId" :to="{name: 'collection', params: {CollectionId: eventCollection.id, cityId: cityId, slug: slug}}">
                        <img :src=eventCollection.image_src class="hero-layout-image"/>
                        <span class="view-collection">View Collection</span>
                    </router-link>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        eventCollection: Object,
        slug: String,
        CollectionId: Number,
        cityId: Number
    },
    computed: {
        // cityId() {
        //     return this.$route.params.id
        // }
    }
}
</script>

<style scoped>
    .collection-wrapper {
        position: absolute;
        display: block;
        width: 100%;
        padding-top: 2rem;
        padding-right: 0;
        padding-bottom: 1rem;
        padding-left: 0;
    }

    .collection-title {
        margin-top: 0;
        margin-bottom: 1rem;
        display: inline-block;
        vertical-align: middle;
        max-width: 58%;
        color: white;
    }

    h2 {
        font-size: 1.5554rem;
        font-family: 'Montserrat', arial, sans-serif;
        font-weight: bold;
    }

    .collection-description-and-tag {
        position: relative;
        display: block;
        padding: 0 0 5px;
    }

    .collection-description {
        display: block;
        margin-top: -15px;
        margin-bottom: 10px;
        max-width: 640px;
        color: #a0a0a0;
    }

    .collection-tag {
        color: #ffb000;
        position: absolute;
        right: 0;
        top: 0;
        /* bottom: 7px; */
        font-size: 10px;
        letter-spacing: 1px;
        box-sizing: border-box;
        z-index: 1000;
    }

    .hero-layout {
        display: block;
        position: relative;
        height: 490px;
        background: #555;
        border-radius: 4px;
        overflow: hidden;
        box-sizing: border-box;
    }

    .hero-layout-image {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .view-collection {
        position: absolute;
        left: 40px;
        color: #fff;
        bottom: 30px;
        font-size: 22px;
        z-index: 100;
    }

</style>


