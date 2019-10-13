<template>
    <div class="city" >
        <div class="event-list">
            <h1>Events in {{city.name}}</h1>
                <EventList :events="events" :eventCollections="eventCollections" :slug="city.slug" :cityID="cityId"/>
        </div>
    </div>
</template>

<script>
import EventList from '@/components/EventList'

export default {
    components: {
        EventList
    },
    props: {
        slug: String,
    },
    mounted() {
        this.$store.dispatch("showCity", this.cityId)
        this.$store.dispatch("getCityEvents", this.cityId)
        this.$store.dispatch("getCityEventCollections", this.cityId)
    },
    computed: {
        cityId() {
            return this.$route.params.id
        },
        city() {
            return this.$store.state.selectedCity
        },
        events() {
            return this.$store.state.cityEvents
        },
        eventCollections(){
            return this.$store.state.cityEventCollections
        },
        updateCityHeader() {
            return this.$route.params.updateCityHeader
        }        
    },
}
</script>

<style>
.event-list {
    display: block;
    position: relative;
    width: 100%;
    padding: 0px 60px 0 20px;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    box-sizing: border-box;
    background-color: black;
}

.city h1{
    top: 110px;
    font-family: "Montserrat", arial, sans-serif;
    color: white;
    display: inline-block;
    margin-top: 40px;
    margin-left: 10px;
    margin-bottom: 0;
    font-size: 1.5rem;
    color: #fff;
    padding: 6px 12px 7px;
    border-radius: 25px;
    background: rgba(162,160,168,.24);
    box-shadow: inset 0 1px 0 rgba(72,72,72,.52);
    text-align: center;
    text-decoration: none;
    border: 2px solid #5477f5;
}

.city {
    position: absolute;
    top: 64px;
    width: 100%;
    height: 100%;
}

</style>