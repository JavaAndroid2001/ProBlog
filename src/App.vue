<template>
  <div id="app">
    <!-- 导航栏 -->
    <!-- <Nav></Nav> -->
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  user-select: none;
}
</style>
