<template>
    <div class="event-list">
        <div class="event-collection">
            <span v-for="eventCollection in eventCollections" :key="eventCollection.id">
                <EventCollection :eventCollection="eventCollection" :key="eventCollection.id" :cityId="eventCollection.city_ids[0]" />
            </span>
        </div>
        <div class="event-list-title">
            Upcoming
        </div>
        <div class="event-listing">
            <span v-for="event in events" :key="event.id" class="listing-span">
                <EventListing :event="event" />
            </span>
        </div>
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
    },
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