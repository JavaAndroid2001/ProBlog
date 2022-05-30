<template>
  <div class="content">
    <iframe
      src="https://progweb.xyz/#/"
      width="393px"
      height="851px"
      frameborder="0"
      scrolling="yes"
    ></iframe>
    <div class="text">
      <div class="items name">
        <h2>📌 项目名称</h2>
        <h3>公司应聘试题 <span>(可简单交互)</span></h3>
      </div>
      <div class="items">
        <h2>🌧️ 项目背景</h2>
        <p>一家公司的应聘试题，要求是考察一个小时内的完成度</p>
      </div>
      <div class="items">
        <h2>🥝 使用技术</h2>
        <div class="art">
          <p>🍞 uni-app</p>
          <p>🍉 Echarts</p>
        </div>
      </div>
      <div class="items">
        <h2>⏳ 项目耗时</h2>
        <p>2022/5/24 - 2022/5/25</p>
      </div>
      <div class="items">
        <h2>🌼 个人总结</h2>
        <p>
          项目本身并无难度，一个页面平均耗时<span>1.5</span>个小时，在没写之前对于
          <span>Echarts</span
          >可能还是不太熟练，此次算是对<span>Echarts</span>的复习,
          还顺便更深入的学习了<span>Grid</span>布局，
          快速收款页面的键盘使用了<span>Grid</span>进行布局
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dri {
  width: 100%;
  height: 1px;
  background-color: #000;
}
.content {
  width: 100vw;
  height: 100vh;
  background-color: #34495e;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  user-select: none;
  .text {
    width: 500px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 3px 3px 10px #000;
    // 使用技术
    .art {
      display: flex;
      p {
        color: #fff;
        margin: 0 5px;
        height: 30px;
        background-color: #8e44ad;
        border-radius: 5px;
        padding: 0 10px;
        display: grid;
        place-items: center;
        font-weight: 60;
        box-shadow: 3px 3px 3px #000;
      }
    }
    .items {
      margin-bottom: 20px;
      h2 {
        margin-bottom: 10px;
      }
      p {
        span {
          color: red;
          margin: 0 5px;
          font-weight: 600;
        }
      }
      h3 {
        span {
          font-size: 15px;
          font-weight: bolder;
        }
      }
    }
    .name {
      padding-bottom: 20px;
      border-bottom: 1px solid #7f8c8d;
    }
  }
}
</style>