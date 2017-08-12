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
    @import '/src/assets/css/allgoods.css';



</style>