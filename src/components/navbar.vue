<template>
    <!--底部导航-->
    <div class="aal-footnav ">
        <ul class="clearfix">
            <li>
                <a href="#"><img src="../assets/images/home.png" alt=""></a>
            </li>
            <li>
                <a href="#">全部商品</a>
            </li>
            <li>
                <a href="#">购物车</a>
            </li>
            <li>
                <a href="#">我的订单</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return{

            }
        },
        created () {

        },
        methods: {

        }
    }
</script>

<style>
    .aal-footnav {
        position: relative;
        font-size: 16px;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #cccccc;
    }
    .aal-footnav ul{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
    }
    .aal-footnav ul li{
        position: relative;
        height: 40px;
        line-height: 40px;
        float: left;
        width: 25%;
        border-top: 1px solid #cccccc;
        border-right: 1px solid #cccccc;
        overflow: hidden;
    }
    .aal-footnav ul li a img {
        display: block;
        margin: 3px auto;
    }
    #app{
        position: relative;
    }
</style>
