<template>
    <div class="shop-cart">
        <div class="cart-head">
            <a href="#"><i><</i></a>
            <h3>购物车</h3>
        </div>
        <!--🈶️购物车没有商品时显示的页面-->
        <!--<div class="cart-main">-->
            <!--<div class="cart-content">-->
                <!--<p>购物车快饿扁了</p>-->
                <!--<a href="#"><p>去逛逛</p></a>-->
            <!--</div>-->
        <!--</div>-->


        <!--️购物车有商品时显示的页面-->
        <div class="cart-main">

            <div class="goods-item clearfix">
                <a href="#">
                    <img src="../assets/images/esld.jpg" alt=""  class="logo-img pull-left">
                </a>
                <div class="iteminfo pull-left">
                    <p class="pull-left">雅诗兰黛</p>
                    <ul class="new pull-right">
                       <li>-</li>
                       <li>1</li>
                       <li>+</li>
                    </ul>
                    <p class="old">
                        <b>￥</b>
                        <b>1268.00</b>
                    </p>

                </div>

            </div>

            <div class="cart-footer">
            <span>合计</span>
            <span>
            <b>￥</b>
            <em>268.00</em>
            </span>
            <button>立即下单</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    @import '/src/assets/css/base.css';
    @import '/src/assets/css/shopCart.css';

</style>