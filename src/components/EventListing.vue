<template>
    <div class="event-wrapper">
        <div class="event">
            <div class="meta-content">
                <div class="poster-wrapper">
                    <router-link :cityId="cityId" :EventId="event.id" :to="{name: 'event', params: {EventId: event.id, event: event, imageURL: imageURL, slug: slug, cityId: cityId}}" class="poster-link">
                        <img :src="imageURL" class="poster"/>
                    </router-link>
                </div>
                <div class="title-and-description">
                    <div class="event-title">
                        <router-link :cityId="cityId" :EventId="event.id" :to="{name: 'event', params: {EventId: event.id, event: event, imageURL: imageURL, slug: slug, cityId: cityId}}" class="title-link">
                            <h5 class="title">{{event.title}}</h5>
                        </router-link>
                    </div>
                    <div class="event-date">
                        <span class="date">
                            <!-- {{timestampToDate}} -->
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        event: Object,
        id: Number,
        slug: String,
        cityId: Number
    },
    computed: {
        eventId(){
            return this.$attrs.collectionEventId ? this.$attrs.collectionEventId : this.$route.params.id
        },
        imageURL(){
            return this.event.image_src ? this.event.image_src : this.event.poster_url.small
        },  
    },
    methods: {
        timestampToDate(){
            this.$store.dispatch("timestampToDate", this.eventId)
        }
    }
}

</script>

<style lang="scss">
.event-wrapper {
    position: relative;
    width: 25%;
    margin: 10px;
}

.event {
    left: 0;
    width: 100%;
    min-width: 220px;
    box-sizing: border-box;
}

.meta-content {
    display: block;    
}

.poster-wrapper {

    border-radius: 4px;
}

.poster-link {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    background-size: cover;
    background-position: center;
    background-image: no-repeat;
    box-sizing: border-box;
}

.poster {
    height: 290px;
    width: 204px;;
}

.title {
    padding: 5px;
    max-width: 200px;
}

</style>