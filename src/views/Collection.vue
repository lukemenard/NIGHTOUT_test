<template>
    <div class="collection-wrapper">
        <div class="search-close">
            <router-link :to="{name: 'city', params: {slug: slug, id: cityId}}">
                X
            </router-link>
        </div>
        <div class="title-and-description">
            <div class="collection-title-open">
                <h2>{{eventCollection.title}}</h2>
            </div>
            <div class="collection-description-open">
                {{eventCollection.description}}
            </div>
        </div>
        <div class="collection">
            <div class="wrapper">
                <span v-for="event in eventCollection.unifiers" :key="event.id" class="listing-span">
                    <div class="listing-wrapper">
                        <EventListing :event="event" :slug="slug" :cityId="cityId"/>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import EventListing from '@/components/EventListing'

export default {
    props: {
        slug: String,
        CollectionId: Number,
        cityId: Number,
        id: Number
    },
    mounted(){
        this.$store.dispatch("showEventCollection", this.CollectionId)
    },
    components: {
        EventListing
    },
    computed: {
        eventCollection(){
            return this.$store.getters.eventCollection(this.CollectionId)
        },
        // CollectionId(){
        //     return this.$route.params.id
        // },
    }
}   
</script>

<style scoped>

    .collection-wrapper {
        background-color: black;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: auto;
        min-height: 100vh;
        height: 2000px;
        width: 100%;
        position: absolute;
        top: 60px;
        z-index: 5000;
        /* padding-left: 20px !important; */
    }

   .search-close {
        font-family: Arial;
        font-size: 20px;
        line-height: 35px;
        position: fixed;
        top: 180px;
        right: 20px;
        display: block;
        width: 35px;
        color: #95979c;
        z-index: 7000;
    }

    .collection {
        position: absolute;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: black;
        width: 100%;
        top: 0;
        height: 4000px;
        justify-content: space-around;
    }

    .title-and-description{
        position: fixed;
        width: 100%;
        height: 110px;
        background-color: gray;
        z-index: 6000;
        border-bottom: 5px solid #5477f5;
        top: 0;
        margin-top: 60px;
        left: 0;
        right: 0;
    }

    .collection-title-open {
        position: fixed;
        top: 50px;
        margin-top: 0;
        margin-bottom: 1rem;
        /* margin-left: 120px !important; */
        display: inline-block;
        vertical-align: middle;
        max-width: 58%;
        color: white;
        margin-left: 30px;
        margin-top: 10px;
    }   

    .collection-description-open {
        position: fixed;
        top: 120px;
        color: white;
        margin-left: 30px !important;
    }

    .listing-span {
        height: 400px;
        width: 200px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: 1000px;
        /* padding-left: 7.5%;
        padding-right: 7.5%; */
    }

</style>