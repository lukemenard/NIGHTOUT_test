<template>
  <div id="app">
    <header>
      <div class="header-navigations">
        <div class="hamburger">
          <div class="patty"></div>
          <div class="patty"></div>
          <div class="patty"></div>
        </div>
        <div class="logo">
          <a href=""/>
        </div>
        <div class="header-city-select">
          <a href="" class="header-select">
            <router-link :to="{name: 'search'}">
              Search Cities
            </router-link>
          </a>
        </div>
      </div>
    </header>
    <div class="hero">
      <div class="hero-image">
      </div>
    </div>
    <main>
      <router-view/>
    </main>
  </div>
</template>


<style lang="scss">
  body, html{
    height: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  html {
    font-family: lato, helvetica, arial, sans-serif;
    font-size: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
    background-color: black;
  }

  header {
    position: fixed;
    height: 64px;
    width: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    background: #111;
    top: 0;
    z-index: 9996;
    perspective: 2000px;
  }

  .header-navigations {
    position: relative;
    display: block;
  }

  .hamburger {
    position: absolute;
    margin: 0;
    width: 45px;
    height: 45px;
    top: 5px;
    left: 0;
    z-index: 9999;
    background: 0;
    box-sizing: border-box;
  }

  .hamburger .patty {
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    background: #fff;
    opacity: 1;
    left: 15px;
  }

  .hamburger .patty:first-child {
    top: 20px;
  }

  .hamburger .patty:nth-child(2) {
    top: 25px;
    width: 16px;
  }

  .hamburger .patty:nth-child(3) {
    top: 30px;
  }

  .patty:hover {
    background: #5477f5;
  }

  .logo a {
    height: 30px;
    width: 100%;
    display: block;
  }

  a {
    box-sizing: border-box;
    background-color: transparent;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    color: white;
  }

  .logo {
    background-image: url(https://nightout.com/assets/account/icon-n-shield-3da16f684a7e129dcce25190ee9feda6.svg);
    width: 150px;
    height: 30px;
    background-size: 150px 30px;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    z-index: 9994;
    font-size: 0;
    top: 15px;
  }

  .header-city-select {
    position: absolute;
    left: 110px;
    top: 12px;
    display: block;
  }

  .header-select {
    display: inline-block;
    font-size: .9rem;
    color: #fff;
    padding: 6px 12px 7px;
    border-radius: 25px;
    background: rgba(162,160,168,.24);
    box-shadow: inset 0 1px 0 rgba(72,72,72,.52);
    text-align: center;
    text-decoration: none;
  }

   .header-select:hover {
      background-color: #5477f5;
      opacity: 0.8;
    }

  .hero {
    z-index: 1;
  }

  .hero-image {
    background-image: url(https://nightout.s3.amazonaws.com/media/features/10029/small-072cd1424d62d9c3.jpeg?1570117000);
    // position: absolute;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 2000px;
    // width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // display: block;
    // object-fit: cover;
    // object-position: center;
  }

</style>
