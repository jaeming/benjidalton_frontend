<template lang='pug'>
  #app
    nav#app-nav
      .title Benji Dalton
      .links
        router-link.link(to='/') Home
        router-link.link(to='/') Posts
        router-link.link(to='/') Music
        router-link.link(to='/about') About
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
    line-height: 2.8rem;
    color: rgb(255, 255, 255);
    padding-left: .5rem;
    font-family: Lobster;
    font-size: 1.2rem;
  }
  .links {
    float: right;
    padding-right: .5rem;
  }
  .link {
    font-size: .78rem;
    color: rgb(255, 255, 255);
    line-height: 2.8rem;
    letter-spacing: .8px;
    margin: 0 .4rem;
  }
}
#main-layout {
  margin: 1.6rem;
}
</style>
