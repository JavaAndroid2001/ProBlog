<template>
    <header>
        <nav>
            <div class="iweb navlist">
                <span class="iconfont icon-yuyan"></span>
                <ul>
                    <li v-for="i in iweb" :style="{ backgroundColor: i.backColor }" :key="i.name">
                        <a target="_blank" :href="i.url">
                            <span class="iconfont" :class="[i.icons]"></span>
                            {{ i.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="zan navlist">
                <span class="iconfont icon-zan"></span>
                <p class="zanqun"></p>
            </div>
            <div class="shouye navlist">
                <span class="iconfont icon-shouye"></span>
            </div>
            <div class="sousuo navlist">
                <span class="iconfont icon-sousuo">
                </span>
                <div class="search">
                    <input type="text">
                    <p class="iconfont icon-sousuo"></p>
                </div>
            </div>
            <div class="shezhi navlist">
                <span class="iconfont icon-shezhi"></span>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            iweb: [
                {
                    url: 'https://github.com/JavaAndroid2001',
                    icons: 'icon-github-fill',
                    name: 'GitHub',
                    backColor: '#24292f'
                },
                {
                    url: 'https://space.bilibili.com/353267114?spm_id_from=333.1007.0.0',
                    icons: 'icon-bilibili-line',
                    name: 'BiliBili',
                    backColor: '#fb7299'
                },
                {
                    url: '',
                    icons: 'icon-youjian',
                    name: 'Mail',
                    backColor: '#249be0'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/css/nav_css.scss";
</style>