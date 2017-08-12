<template>
    <div class="allgoods">
        <h2>全部商品</h2>
        <div class="aal-goods">
            <div class="goods-item" v-for="good in goods">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img">
                </a>
                <div class="iteminfo">
                    <p>{{good.name}}</p>
                    <p class="new">
                        <b>￥</b>
                        <em>{{good.currentPrice}}</em>
                    </p>
                    <p class="old">
                        <i>￥</i>
                        <del>{{good.originalPrice}}</del>
                    </p>
                    <div class="shopping-cart clearfix " >
                        <a href="#"><img src="../assets/images/shoppingcar.png" alt=""></a>
                    </div>
                </div>

            </div>
        </div>
        <!--底部导航-->
        <navbar></navbar>
    </div>

</template>

<script>
    import axios from 'axios'
    import Navbar from '../components/navbar.vue'

    export default {
        data () {
            return{
                goods: []
            }
        },
        created () {
            this.getGoods()
        },
        methods: {
            getGoods: function () {
                let that = this;
                let url = '/api/v1/goods';
                axios.get(url)
                    .then(function (response) {
                        console.log(response.data);
                        that.goods = response.data;
                    });
            }
        },
        components :{
            Navbar
        }
    }
</script>

<style>
    @import '/src/assets/css/base.css';
    .allgoods{
        width: 100%;
        border: n;
        /*position: relative;*/
    }
    .allgoods h2{
        margin: 10px 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #cccccc;
    }
    .aal-goods{
        padding: 0 20px;
        position: relative;
    }
    .goods-item{
        margin-top: 30px;
        border-bottom: 1px solid #cccccc;
        /*position: relative;*/

    }
    .goods-item a .logo-img{
        float: left;
        width: 60% ;
    }
    .iteminfo .new{
        color: brown;
    }
    .iteminfo p{
        font-size: 20px;
        margin-bottom: 20px;
    }
    .shopping-cart{
        /*float: right;*/
        margin-bottom: 20px;
        margin-left: 280px;
    }


</style>