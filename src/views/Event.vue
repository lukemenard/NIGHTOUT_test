
<template>
    <div class="wrapper">
        <div class="page">
            <div class="hero-event">
                <div class="hero-background">
                    <img v-bind:src="imageURL" alt="">
                </div>
                <div class="hero-contents">
                    <div class="event-title-and-tickets">
                        <div class="poster-wrapper">
                            <div class="event-poster">
                                <img v-bind:src="event.images.poster">
                            </div>
                        </div>
                        <div class="event-details-wrapper">
                            <div class="event-details">
                                <div class="event-title">
                                    <h1>{{event.title}}</h1>
                                </div>
                                <div class="event-details">
                                    <div class="organization">
                                        <h3>{{event.organization.name}}</h3>
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
    props: {
        event: Object
    },
    data: function (){
        return {
            imageURL: this.$route.params.imageURL
        }
    },
    computed: {
        event(){
            return this.$route.params.event
        }
    }
}
    // data: function (){
    //     return {
    //         event: this.$route.params.event
    //     }
    // }
    
</script>



<style scoped>
    .wrapper {
        background-color: #fff;
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
    }

    .page {
        color: #fff;
        border-color: #e6e6e6;
        flex-grow: 1;
        width: 100%;
    }

    .hero-event {
        background-color: #222;
        /* padding: 130px 20px 80px; */
        display: block;
        position: absolute;
        top: 60px;
        width: 100%;
        height: 700px;
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
        justify-content: center;
    }

    .event-details {
        padding: 0;
        margin-left: 30px;
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