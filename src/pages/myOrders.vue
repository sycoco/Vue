<template>
    <div class="myorders">
        <div class="cart-head">
            <a href="#"><i><</i></a>
            <h3>我的订单</h3>
        </div>
        <div class="order-list clearfix">
            <ul class="clearfix">
                <li><a href="#" class="active">全&nbsp部</a></li>
                <li><a href="#">未付款</a></li>
                <li><a href="#">待发货</a></li>
                <li><a href="#">已发货</a></li>
                <li><a href="#">已完成</a></li>
                <li><a href="#">已取消</a></li>
            </ul>
        </div>
        <div class="order-goodsinfo">
            <p class="pull-left clearfix">订单编号：1234567</p>
            <p class="pull-right clearfix">2017-07-25 &nbsp;18:10</p>
            <div class="goods-item clearfix">
                <span>雅诗兰黛肌底液</span>
                <span class="pull-right">合计： <b>￥</b><em>268.00</em></span>
                <p>已取消</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    @import '/src/assets/css/shopCart.css';
    @import '/src/assets/css/base.css';
    @import '/src/assets/css/myOrders.css';

</style>