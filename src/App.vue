<template>
  <div id="app">
    <div id="nav">
      <header>두산아파트 리모델링 자료모음</header>
      <router-link to="/">홈</router-link> |
      <router-link to="/why">왜 리모델링</router-link> |
      <router-link to="/flyer">전단지</router-link> |
      <router-link to="/first">1차자료</router-link> |
      <router-link to="/goods">아파트장점</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Gamja Flower', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
