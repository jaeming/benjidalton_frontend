<template lang='pug'>
  #app
    nav#app-nav
      .title Benji Dalton
      .links
        router-link.link(:to='{name: "home"}') Home
        router-link.link(to='/about') About
        router-link.link(to='/music') Music
        router-link.link(to='/contact') Contact
    main#main-layout
      router-view
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Lobster);
@import 'assets/style/reset';
body {
  font-family: Roboto;
  background-image: url('assets/image/bg.jpg');
  background-size: cover;
  background-attachment: fixed;
}
a {
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
#app-nav {
  width: 100%;
  height: 2.6rem;
  background: rgba(66, 66, 66, 0.678);
  .title {
    float: left;
    line-height: 2.6rem;
    color: rgb(255, 255, 255);
    padding-left: 1rem;
    font-family: Lobster;
    font-size: 1.2rem;
  }
  .links {
    float: right;
    padding-right: 1rem;
  }
  .link {
    font-size: .78rem;
    color: rgb(255, 255, 255);
    line-height: 2.65rem;
    letter-spacing: .8px;
    margin: 0 .4rem;
  }
}
#main-layout {
  margin: 1.6rem;
}

.container {
  max-width: 60rem;
  margin: 0 auto;
}

.entry {
  padding: 1rem;
  margin: 1.2rem auto;
  background: rgba(37, 37, 37, 0.418);
  color: whitesmoke;
}
.post-title {
  margin-bottom: 1rem;
  a {
    font-size: 1.5rem;
    font-family: Montserrat;
    color: #fff;
  }
}
.router-link-exact-active {
  background: rgba(255, 255, 255, 0.192);
  padding: .17rem .5rem;
}
</style>
