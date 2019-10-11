<template>
    <div class="search-wrapper">
        <div class="city-search">
            <div class="search-close">
                <router-link :to="{name: 'index'}">
                    X
                </router-link>
            </div>
            <div class="city-search-content">
                <h3 class="search-heading">Where are we going?</h3>
                <div class="search lead">
                    <input
                        class="form-control"
                        type="text"
                        v-model="searchQuery"
                        placeholder="Search by city name"
                    />
                </div>
                <div class="search-cities">
                    <a href="" class>
                        Add a New City
                    </a> 
                    <div v-for="city in filteredCities" :key="city.id">
                        <router-link :to="{name: 'city', params: {id: city.id, slug: city.slug}}">
                            {{city.name}}
                            <span class="link-sub-text">
                                {{city.state_name}}
                            </span>
                        </router-link >   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        name: "Cities-Search",
        props: {
            city: Object,
        },
        data() {
            return {
                searchQuery:'',
            };
        },
        mounted() {
            this.$store.dispatch("getCities")
            this.$store.dispatch("getPopularCities")
        },

        computed: {
            cities() {
                return this.$store.state.cities
            },
            popularCities() {
                return this.$store.state.popularCities
            },
            filteredCities (){
                if(this.searchQuery){
                    return this.cities.filter((city)=>{
                        return city.name.startsWith(this.searchQuery);
                    })  
                }else{
                    return this.popularCities;
                }
            }
        }
    }
</script>

<style scoped>
    .search-wrapper {
        display: block;
        backface-visibility: hidden;
        position: fixed;
        z-index: 10000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        text-align: center;
        padding: 10px;
        vertical-align: middle;
        background: rgba(43,46,56,.9);
    }
    .search-wrapper:after {
        display: inline-block;
        height: 100%;
        margin-left: -.05em;
        vertical-align: middle;
    }

    .search-close {
        font-family: Arial;
        font-size: 15px;
        line-height: 35px;
        position: absolute;
        top: 5px;
        right: 5px;;
        display: block;
        width: 35px;
        color: #95979c;
        z-index: 1000;
    }

    .city-search {
        color: #fff;
        background-color: #000;
        min-height: 570px;
        max-width: 512px;
        width: 100%;
        min-width: 300px;;
        display: inline-block;
        text-align: left;
        position: relative;
        vertical-align: middle;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 20px;
        /* opacity: 0.85; */
        border-radius: 4px;
        transform: translateZ(0);
    }
    .city-search-content {
        position: relative;
        margin: 0 auto;
        display: block;
    }

    .search-heading {
        color: white;
        text-align: center;
        margin-top: 0;
        font-size: 1.1312rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        letter-spacing: 0.05rem;
    }

    .search input{
        display: block;
        margin-top: 1.35rem;
        padding: 10px;
        border: 0;
        outline: 0;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        -webkit-appearance: none;
    }

    input {
        -webkit-tap-highlight-color: transparent;
        overflow: visible;
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    .search-cities {
        margin-top: 20px;
        display: block;
    }

    .search-cities a {
        display: block;
        color: #fff;
        opacity: .85;
        padding: 10px;
        border-radius: 4px;
    }

    a {
        box-sizing: border-box;
        text-decoration: none;
        text-shadow: none;
        outline: 0;
        cursor: pointer;
        background-color: transparent;
    }

    a:hover {
        background-color: #5477f5;
    }

    .search-cities .link-sub-text {
        display: block;
        font-size: .8rem;
        opacity: .65;
    }
</style>