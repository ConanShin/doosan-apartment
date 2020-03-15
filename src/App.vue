<template>
  <div id="app">
    <div id="nav">
      <header>두산아파트 리모델링 자료모음</header>
      <router-link to="/">홈</router-link> |
      <router-link to="/goods">자료들</router-link> |
      <router-link to="/flyer">전단지</router-link> |
      <router-link to="/trade">거래내역</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
