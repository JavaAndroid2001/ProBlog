<template>
  <div class="container">
    <div class="items">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="titile">{{ item.labe }}</div>
        <div class="isOpen">是否可交互：{{ item.isOpen ? "⭕" : "❌" }}</div>
        <div class="isEnd">开发进度：{{ item.isEnd ? "⭕" : "👷‍♂️" }}</div>
        <div class="sort">技术栈：uni-app</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          labe: "60S读懂我",
          isOpen: false,
          // 开发进度 1 为已完工，2为正在施工
          isEnd: false,
          sort: "uni-app",
        },
        {
          labe: "公司应聘试题",
          isOpen: true,
          // 开发进度 1 为已完工，2为正在施工
          isEnd: true,
          sort: "uni-app",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 5px;
  background: linear-gradient(#3498db, #9b59b6);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #f2f2f2;
  border-radius: 10px;
}
.container {
  width: 400px;
  height: 100vh;
  //   background-color: #fff;
  background: linear-gradient(#2ecc71, #3498db);
  display: flex;
  flex-direction: column;
  // border: 1px solid #000;
  padding: 10px;
  overflow-y: scroll;

  .items {
    user-select: none;
    .item {
      cursor: pointer;
      height: 200px;
      background-color: #fff;
      box-shadow: 3px 3px 3px #000;
      margin: 10px;
      border: 1px solid #f2f2f2;
      padding: 10px;
      display: grid;
      place-items: center;
      border-radius: 5px;
      font-weight: 600;
      //   background: linear-gradient(#3498db, #9b59b6);
      .titile {
        font-size: 24px;
        font-weight: 600;
      }
      .isOpen {
        font-weight: 600;
      }
    }
  }
}
</style>
