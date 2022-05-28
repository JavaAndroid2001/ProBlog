<template>
    <div class="content">
        <!-- 头像等信息 -->
        <div class="content-left">
            <div class="nk">
                <img src="https://q1.qlogo.cn/g?b=qq&nk=614537575&s=640">
            </div>
            <!-- idetile -->
            <Idetile />
        </div>
        <div class="content-right">
            <ul>
                <li v-for="i in 10" :key="i">
                    <img src="https://q1.qlogo.cn/g?b=qq&nk=614537575&s=640">
                    <div class="list">
                        <div class="title">
                            标题标题标题标题标题标题标题标题标题
                            {{ i }}
                        </div>
                        <div class="text">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Idetile from "../components/idetile.vue";

export default {
    data() {
        return {
            titleData: [
                '热爱生活，热爱学习，热爱工作',
                '能够独立开发',
                '精通Web前端三剑客',
                '熟练掌握Vue，UniApp，Element开发框架',
                '有良好的笔记习惯，代码规范，能够对UI进行高度还原',
            ],

            idetileData: {
                items: {
                    data: [
                        {
                            title: '自我介绍',
                            content: [
                                '热爱生活，热爱学习，热爱工作',
                                '能够独立开发',
                                '精通Web前端三剑客',
                                '熟练掌握Vue，UniApp，Element开发框架',
                                '有良好的笔记习惯，代码规范，能够对UI进行高度还原',
                            ],
                            LinColor: 'background: linear-gradient(#70a1ff, #5352ed);'
                        },
                        {
                            title: '我生活的地方',
                            content: [
                                '热爱生活，热爱学习，热爱工作',
                                '能够独立开发',
                                '精通Web前端三剑客',
                                '熟练掌握Vue，UniApp，Element开发框架',
                                '有良好的笔记习惯，代码规范，能够对UI进行高度还原',
                            ],
                            LinColor: 'background: linear-gradient(#70a1ff, #5352ed);'
                        },
                    ]
                }
            },
            curID: 0
        }
    },
    components: {
        Idetile,

    },
    methods: {
        activeClick(index) {
            this.curID = index
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 20px;
    height: 100%;
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