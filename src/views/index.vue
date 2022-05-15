<template>
    <div class="content">
        <!-- 头像等信息 -->
        <div class="content-left">
            <div class="nk">
                <img src="https://q1.qlogo.cn/g?b=qq&nk=614537575&s=640">
            </div>
            <div class="idetile">
                <h2>小柴Prog</h2>
                <div class="text">
                    我只是一个 <span class="sty">催逝员</span>
                    <br />
                    味道不咸不淡
                    <br />
                    你看我是苦<span class="sty">是甜</span>
                    <br />
                    虽然来自<span class="sty">重庆</span>
                    <br />
                    还有点<span class="sty">荣幸</span>
                    <br />
                    但我和鸡绝对不会<span class="sty">同命</span>
                    <el-button>默认按钮</el-button>
                </div>
            </div>
        </div>
        <div class="content-right">
            <ul>
                <li v-for="i in 4">
                    <img src="https://q1.qlogo.cn/g?b=qq&nk=614537575&s=640">
                    <div class="list">
                        <div class="title">
                            标题标题标题标题标题标题标题标题标题
                            {{ i }}
                        </div>
                        <div class="text">
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈

                        </div>
                    </div>
                </li>


            </ul>
        </div>
    </div>
</template>

<script>
import Nav from "../components/nav.vue";
export default {
    components: {
        Nav
    }
}
</script>

<style lang="scss" scoped>
.content {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 20px;
    height: 100vh;
    width: 90vw;
    background-color: rgba($color: #000, $alpha: .2);
    border-radius: 10px;
    padding: 20px;
    box-shadow: -2px 5px 10px #000;

    .content-left {
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 250px;
        height: 100%;
        box-shadow: -2px 3px 5px #E2E2E2;
        border-radius: 10px;
        margin-right: 20px;
        // background-color: #000;

        .nk {
            width: 150px;
            height: 150px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: -2px 3px 5px #000;
            // box-shadow: -2px 3px 5px #E2E2E2;
            margin-bottom: 20px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .idetile {
            color: #fff;
            font-weight: 700;
            width: 100%;

            h2 {
                text-align: center;
                color: #fff;
            }

            .text {
                margin-top: 20px;
                width: 100%;
                height: 400px;
                border-radius: 10px;
                border: 1px solid rgba($color: #fff, $alpha: .5);
                text-decoration: underline 10px;
                padding: 10px;
                line-height: 40px;

                .sty {
                    font-size: 40px;
                    font-style: italic;
                    color: red;
                }
            }
        }
    }

    .content-right {
        width: 1100px;
        height: 100%;
        // background-color: rgba($color: #000, $alpha: .2);
        border-radius: 10px;
        box-shadow: -2px 3px 5px #E2E2E2;
        border-radius: 10px;
        margin-left: 20px;
        padding: 25px 15px;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            li {
                color: #fff;
                display: flex;
                list-style: none;
                width: 100%;
                height: 140px;
                border-radius: 10px;
                box-shadow: -2px 5px 10px #000;
                padding: 10px;
                font-weight: bolder;

                img {
                    width: 120px;
                    height: 100%;
                    border-radius: 10px;
                    margin-right: 20px;
                }

                .title {
                    font-size: 25px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .text {
                    text-indent: 30px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }

    }
}
</style>