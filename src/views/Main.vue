<template>
  <div class="container">
    <lNav />
    <Content />
  </div>
</template>

<script>
import lNav from "../components/l-nav.vue";
import Content from "../components/content.vue";

export default {
  components: {
    lNav,
    Content,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>