<template>
    <div class="event-list">
        <div class="event-collection">
            <span v-for="eventCollection in eventCollections" :key="eventCollection.id">
                <EventCollection :eventCollection="eventCollection" :CollectionId="eventCollections[0].id" :cityId="cityId" :slug="slug" />
            </span>
            <!-- <router-view /> -->
        </div>
        <div class="event-list-title">
            Upcoming
        </div>
        <div class="event-listing">
            <span v-for="event in events" :key="event.id" class="listing-span">
                <EventListing :event="event" :EventId="event.id" :slug="slug" :cityId="cityId"/>
            </span>
            <!-- <router-view /> -->
        </div>
        <router-view/>
    </div>
</template>

<script>
import EventListing from '@/components/EventListing'
import EventCollection from '@/components/EventCollection'

export default {
    components: {
        EventListing,
        EventCollection
    },
    props: {
        events: Array,
        eventCollections: Array,
        slug: String,
        // CollectionId: Number,
        EventId: Number,
        // cityId: Number
    },
    computed: {
        cityId(){
            return this.$store.state.selectedCity.id
        },
        CollectionId() {
            return this.$store.state.selectedEventCollection.id
        },
    }
}
</script>

<style lang="scss">


.event-list {
    background-color: black;
    height: 10000px;
    width: 100%;
}

.event-collection {
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 100%;
    width: 100%;
    position: absolute;
}

.event-list-title {
    position: absolute;
    top: 675px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: inline-block;
    vertical-align: middle;
    max-width: 58%;
    color: white;
    font-size: 1.5554rem;
    font-family: 'Montserrat', arial, sans-serif;
    font-weight: bold;
}

.event-listing {
    left: 0;
    position: absolute;
    top: 750px;
    background-color: black;
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 20px;
}

.listing-span {
    height: 400px;
    width: 200px;
}

</style>