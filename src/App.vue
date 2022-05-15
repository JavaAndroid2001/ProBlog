<template>
  <div id="app">
    <!-- 导航栏 -->
    <Nav></Nav>
    <router-view />

  </div>
</template>

<script>
import Nav from "./components/nav.vue";
export default {
  components: {
    Nav,
  }
}</script>
<style lang="scss">
#app {
  // background-color: #487eb0;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  // background-image: url('@/assets/imgs/bg.png');
  background-color: #353b48;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // user-select: none;
}

img {
  user-select: none;
}
</style>
