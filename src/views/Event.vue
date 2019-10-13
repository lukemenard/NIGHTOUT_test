
<template>
    <div class="wrapper">
        <div class="page">
            <div class="search-close">
                <router-link :to="{name: 'city', params: {slug: slug, id: cityId}}">
                    X
                </router-link>
            </div>
            <div class="hero-event">
                <div class="hero-background">
                    <img v-bind:src="imageURL" alt="">
                </div>
                <div class="hero-contents">
                    <div class="event-title-and-tickets">
                        <div class="poster-wrapper">
                            <div class="event-poster">
                                <img v-bind:src="posterImage">
                            </div>
                        </div>
                        <div class="event-details-wrapper">
                            <div class="event-details">
                                <div class="event-title">
                                    <h1>{{event.title}}</h1>
                                </div>
                                <div class="event-details">
                                    <div class="organization">
                                        <h3>{{organization}}</h3>
                                    </div>
                                    <div class="teaser">
                                        <p>{{event.teaser}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("showEvent", this.eventId)
    },
    props: {
        event: Object,
        slug: String,
        EventId: Number,
        cityId: Number
    },
    computed: {
        // event(){
        //     // return this.$route.params.event
        //     return this.$store.state.selectedEvent
        // },
        // eventId(){
        //     return this.$route.params.event.id
        // },
        imageURL(){
            return this.event.image_src ? this.event.image_src : this.event.poster_url.small
        }, 
        posterImage(){
            return this.event.image_src ? this.event.image_src : this.event.images.poster
        },
        organization(){
            return this.event.organization_name ? this.event.organization_name : this.event.organization.name
        }
    }
}
</script>



<style scoped>
    .wrapper {
        background-color: black;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: auto;
        min-height: 100vh;
        height: 2000px;
        font-size: 1.6em;
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 5000;
    }

    .page {
        color: #fff;
        border-color: #e6e6e6;
        flex-grow: 1;
        width: 100%;
    }

    .search-close {
        font-family: Arial;
        font-size: 20px;
        line-height: 35px;
        position: fixed;
        top: 100px;
        right: 10px;
        display: block;
        width: 35px;
        color: #95979c;
        z-index: 1000;
    }

    .hero-event {
        background-color: #222;
        /* padding: 130px 20px 80px; */
        display: block;
        position: fixed;
        top: 60px;
        width: 100%;
        height: 800px;
    }

    .hero-background img{
        display: block;
        opacity: 0.2;
        height: 700px;
        width: 100%;
        background-size: cover;
        z-index: 0;
    }


    .hero-contents {
        margin: 0 auto;
        max-width: 960px;
        display: flex;
        position: absolute;
        height: 284px;
        width: 100%;
        top: 150px;
        margin-left: 20px;
        justify-content: center;
    }

    .event-title-and-tickets {
        display: flex;
        width: 95%;
        box-sizing: border-box;
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .poster-wrapper {
        position: relative;
        box-sizing: border-box;
        flex-basis: 33.333%;
        max-width: 33.333%;
    }

    .event-poster img{
        /* display: block; */
        width: 100%;
        height: auto;
        max-height: 300px;
        overflow: hidden;
        z-index: 1000;
        top: 0;
        border-radius: 4px;
        border: 3px solid white;
    }

    .event-details-wrapper {
        display: flex;
        flex-basis: 66.6667%;
        max-width: 66.6667%;
        box-sizing: border-box;
        position: relative;
        justify-content: left;
    }

    .event-details {
        padding: 0;
        margin-left: 50px;
        margin-right: 50px;
    }

    .event-title {
        font-size: .75rem;
    }

    .organization {
        font-size: 1.25rem;
        margin-left: -30px;
        margin-top: -10px;
    }

    .teaser {
        font-size: 1rem;
        margin-left: -30px; 
        margin-top: -10px;
    }

</style>