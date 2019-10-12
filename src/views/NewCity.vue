<template>
    <div class="new-city-wrapper">
        <div class="new-city-form">
            <div class="form-close">
                <router-link :to="{name: 'search'}">
                    X
                </router-link>
            </div>
            <div class="form-content">
                <h3 class="form-heading">Where are we going?</h3>
                <div class="form-input">
                    <h4>City Name</h4>
                    <input type="text" v-model="name" />
                </div>
                <div class="form-input">
                    <h4>State Abbreviation</h4>
                    <input type="text" v-model="state" />
                </div>
                <div class="form-input">
                    <h4>State Name</h4>
                    <input type="text" v-model="state_name" />
                </div>
                <div class="form-input">
                    <h4>Slug</h4>
                    <input type="text" v-model="slug" />
                </div>
                <div class="form-input">
                    <h4>Latitude</h4>
                    <input type="number" v-model.number="lat" />
                </div>
                <div class="form-input">
                    <h4>Longitude</h4>
                    <input type="number" v-model.number="lng" />
                </div>
                <div class="form-submit">
                    <input type="submit" value="Add City" v-on:click="submit" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: '',
        state: '',
        state_name: '',
        slug: '',
        lat: 0,
        lng: 0
    }),
    methods: {
        submit: function(){
            const { name, state, state_name, slug, lat, lng } = this
            const addConfig = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "OAuth db8vk2r6tdvenlycs75cwkju4xx7y5v"
                },
                body: JSON.stringify({
                    name,
                    state,
                    state_name,
                    slug,
                    lat,
                    lng
                })
            }
            const results = fetch(`https://nightout.com/api/cities`, addConfig)
            .then(results => JSON.parse(results))
            // .then(results => console.log(results))
            // .then(results => {
            //     commit("setCities", results)
            // })
            // .catch((error) => {
            //     console.log(error)
            // })
        }
    }
}  
</script>


<style scoped>
    .new-city-wrapper {
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

    .new-city-wrapper:after {
        display: inline-block;
        height: 100%;
        margin-left: -.05em;
        vertical-align: middle;
    }

    .form-close {
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

    .new-city-form {
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

    .form-content {
        position: relative;
        margin: 0 auto;
        display: block;
    }

    .form-heading {
        color: white;
        text-align: center;
        margin-top: 0;
        font-size: 1.1312rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        letter-spacing: 0.05rem;
    }

    input {
        display: block;
        margin-top: 1.35rem;
        padding: 10px;
        border: 0;
        outline: 0;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        overflow: visible;
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        font-family: "Montserrat", sans-serif;

    }

    .form-submit {
        margin-top: 50px;
        box-shadow: 3px 3px  gray;
        -moz-box-shadow: 3px 3px  gray;
        -webkit-box-shadow: 3px 3px  gray;
        -o-box-shadow: 3px 3px  gray;
        border-radius: 4px;
        font-family: "Montserrat", sans-serif;
    }

    .form-submit input:hover {
        background-color: #5477f5;
        cursor: pointer;
    }

</style>