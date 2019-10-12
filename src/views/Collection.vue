<template>
    <div>
        <div class="title-and-description">
            <div class="collection-title">
                <h2>{{eventCollection.title}}</h2>
            </div>
            <div class="collection-description">
                {{eventCollection.description}}
            </div>
        </div>
        <div class="collection">
            <div class="wrapper">
                <span v-for="event in eventCollection.unifiers" :key="event.id" class="listing-span">
                    <div class="listing-wrapper">
                        <EventListing :event="event" :eventCollection="eventCollection" :collectionEventId="event.id"/>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import EventListing from '@/components/EventListing'

export default {
    mounted(){
        this.$store.dispatch("showEventCollection", this.eventCollectionId)
    },
    components: {
        EventListing
    },
    computed: {
        eventCollection(){
            return this.$store.getters.eventCollection(this.eventCollectionId)
        },
        eventCollectionId(){
            return this.$route.params.id
        },
    }
}   
</script>

<style scoped>

    .collection {
        position: absolute;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: black;
        height: 100%;
        width: 100%;
        top: 0;
        height: 2000px;
        padding-top: 200px;
        justify-content: space-around;
    }

    .title-and-description{
        position: fixed;
        width: 100%;
        height: 100px;
        background-color: gray;
        z-index: 1000;
        border-bottom: 5px solid #5477f5;
        top: 0;
        margin-top: 60px;
    }

    .collection-title {
        position: fixed;
        top: 50px;
        margin-top: 0;
        margin-bottom: 1rem;
        display: inline-block;
        vertical-align: middle;
        max-width: 58%;
        color: white;
        margin-left: 30px;
        margin-top: 10px;
    }   

    .collection-description {
        position: fixed;
        top: 120px;
        color: white;
        margin-left: 30px;
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
        padding-left: 7.5%;
        padding-right: 7.5%;
    }

</style>