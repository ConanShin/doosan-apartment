<template>
  <div id="app">
    <header>두산아파트 리모델링 자료모음</header>
    <div id="nav">
      <router-link to="/">홍</router-link> |
      <router-link to="/flyer">전단지</router-link> |
      <router-link to="/old">과거평면도</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Nanum Pen Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  margin-top: 30px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
