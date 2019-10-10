<template>
    <div class="city" >
        <h2>{{city.name}}</h2>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("showCity", this.cityId)
    },
    computed: {
        cityId() {
            return this.$route.params.id
        },
        city() {
            return this.$store.getters.city(this.cityId)
        }
    }
}

</script>