<template>
  <div class="container">
    <div class="items">
      <!-- 个人介绍 -->
      <div class="item">
        <div class="titile">60S读懂我</div>
        <div class="isOpen">
          是否可交互：
          <div class="isOpen-button"><span></span></div>
        </div>
        <div class="isEnd">人生进度：👷‍♂️(施工中)</div>
        <div class="sort">
          技术栈：
          <div class="sortItem">
            <div v-for="i in mydata.sort" :key="i">{{ i }}</div>
          </div>
        </div>
      </div>
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="titile">{{ item.lable }}</div>
        <div class="isOpen">
          是否可交互：{{ item.isOpen ? "⭕(是)" : "❌" }}
        </div>
        <div class="isEnd">
          开发进度：{{ item.isEnd ? "⭕(已完成)" : "👷‍♂️(施工中)" }}
        </div>
        <div class="sort">技术栈：uni-app</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emoji: [""],
      mydata: {
        sort: [
          "Vue(全家桶)",
          "uni-app",
          "Flutter",
          "ECharts",
          "Java",
          "SpringBoot",
        ],
      },
      data: [
        {
          lable: "公司应聘试题",
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
  // background: linear-gradient(#3498db, #9b59b6);
  background: #efefee;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #000;
  border-radius: 10px;
}
// isopen按钮
.isOpen-button {
  transform: translateX(90px);
  height: 23px;
  width: 45px;
  background-color: #2ecc71;
  border-radius: 50px;
  display: flex;
  align-items: center;
  span {
    margin-left: 2px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
  }
}
.container {
  width: 400px;
  height: 100vh;
  background-color: #efefee;
  // background: linear-gradient(#2ecc71, #3498db);
  display: flex;
  flex-direction: column;
  // border: 1px solid #000;
  padding: 10px;
  overflow-y: scroll;

  .items {
    user-select: none;
    .item {
      div {
        margin: 2px 0;
      }
      cursor: pointer;
      height: 225px;
      background-color: #fff;
      box-shadow: 2px 2px 10px #000;
      margin: 20px 10px;
      border: 1px solid #f2f2f2;
      padding: 20px;
      border-radius: 10px;
      font-size: 13px;
      // font-weight: 600;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      letter-spacing: 2px;

      // 标题
      .titile {
        font-size: 20px;
      }
      // 是否交互
      .isOpen {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        // margin-right: 70px;
      }

      // 技术
      .sort {
        .sortItem {
          display: flex;
          flex-wrap: wrap;

          div {
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            margin-right: 10px;
            margin-bottom: 10px;
            // padding: 3px 5px;
            // margin: 3px;
            border-radius: 9%;
            // width: 200px;
            height: 25px;
            // background-color: #2ecc71;
            // position: relative;
            // border: 1px solid #f9f9f9;
            border: 1px solid #d1d1d1;
            box-shadow: 3px 3px 3px #5a5a5a;
          }
        }
      }
    }
  }
}
</style>
