<template>
    <div class="allgoods">
        <h2>全部商品</h2>
        <div class="aal-goods">
            <div class="goods-item">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img">
                </a>
                <div class="iteminfo">
                    <p>雅诗兰黛</p>
                    <p class="new">
                        <b>￥</b>
                        <em>268.00</em>
                    </p>
                    <p class="old">
                        <i>￥</i>
                        <del>1268.00</del>
                    </p>
                    <div class="shopping-cart clearfix " >
                        <a href="#"><img src="../assets/images/shoppingcar.png" alt=""></a>
                    </div>
                </div>

            </div>
            <div class="goods-item">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img">
                </a>
                <div class="iteminfo">
                    <p>雅诗兰黛</p>
                    <p class="new">
                        <b>￥</b>
                        <em>268.00</em>
                    </p>
                    <p class="old">
                        <i>￥</i>
                        <del>1268.00</del>
                    </p>
                    <div class="shopping-cart clearfix " >
                        <a href="#"><img src="../assets/images/shoppingcar.png" alt=""></a>
                    </div>
                </div>

            </div>
            <div class="goods-item">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img">
                </a>
                <div class="iteminfo">
                    <p>雅诗兰黛</p>
                    <p class="new">
                        <b>￥</b>
                        <em>268.00</em>
                    </p>
                    <p class="old">
                        <i>￥</i>
                        <del>1268.00</del>
                    </p>
                    <div class="shopping-cart clearfix " >
                        <a href="#"><img src="../assets/images/shoppingcar.png" alt=""></a>
                    </div>
                </div>

            </div>
            <div class="goods-item">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img">
                </a>
                <div class="iteminfo">
                    <p>雅诗兰黛</p>
                    <p class="new">
                        <b>￥</b>
                        <em>268.00</em>
                    </p>
                    <p class="old">
                        <i>￥</i>
                        <del>1268.00</del>
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
    import Navbar from '../components/navbar.vue'

    export default {
        data () {
            return{

            }
        },
        created () {

        },
        methods: {

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