<template>
    <div>
        idetile
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.idetile {
    color: #fff;
    font-weight: 700;
    width: 100%;

    h2 {
        text-align: center;
        color: #fff;
    }

    .text {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        .items {
            margin-top: 10px;
            display: grid;
            place-items: center;
            padding: 8px;
            text-align: center;
            border: 1px solid #F2F2F2;
            // background: linear-gradient(#70a1ff, #5352ed);
            // background: linear-gradient(#a4b0be, #57606f);
            border-radius: 5px;
            width: 200px;
            height: 40px;
            transition: .5s;
            overflow: hidden;
            cursor: pointer;

            // &:hover {
            //     height: 200px;
            //     // transform: rotateX(360deg);
            // }
            .title {
                height: 40px;
                font-weight: bolder;

            }

            p {
                font-size: 15px;
            }
        }

        .active {
            height: 300px;


            .title {
                transition: 1s;
                transform: scale(1.5);
            }
        }
    }
}
</style>