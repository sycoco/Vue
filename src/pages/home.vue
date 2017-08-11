<template>
    <!-- 布局的盒子-->
    <div class="aal-layout">
        <!--头部banner-->
        <div class="aal-banner">
            <img src="../assets/images/bg2-small.png">
        </div>
        <!--导航模块-->
        <div class="aal-main clearfix">
            <div class="logo clearfix">
                <img src="../assets/images/logo.jpg" alt="">
            </div>
            <ul class="clearfix">
                <li><a href="#">我的订单</a></li>
                <li><a href="#">上新商品</a><i></i></li>
                <li><a href="#">全部商品</a><i></i></li>
            </ul>
            <div class="aal-search">
                <form>
                    <span class="icon-search"></span>
                    <input type="search" placeholder="搜索商品"/>
                </form>
            </div>
        </div>
        <!--产品展示模块-->
        <div class="aal-product">
            <ul>
                <li><a href="#"><img src="../assets/images/bg1.jpg" alt=""/></a></li>
                <li><a href="#"><img src="../assets/images/bg2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="../assets/images/bg3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="../assets/images/bg3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="../assets/images/bg3.jpg" alt=""/></a></li>
            </ul>
            <ol>
                <li class="current"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>
        </div>
        <!--明星产品-->
        <div class="aal-star">
            <ul>
                <li>
                    <a href="#">
                        <img src="../assets/images/sk2.jpg" alt=""/>
                        <p>SK-ll</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/xsl.jpg" alt=""/>
                        <p>希思黎</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/HR.jpg" alt=""/>
                        <p>HR</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../assets/images/esld.jpg" alt=""/>
                        <p>雅诗兰黛</p>
                    </a>
                </li>
            </ul>
        </div>
        <!--产品列表-->
        <div class="aal-list clearfix">
            <ul>
                <li>
                    <a href="#">
                        <p>美容仪器</p>
                        <img src="../assets/images/ln-big.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>阿玛尼</p>
                        <img src="../assets/images/amn-big.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>海蓝之谜</p>
                        <img src="../assets/images/hlzm-big.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>SK-II</p>
                        <img src="../assets/images/sk-big.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>希思黎</p>
                        <img src="../assets/images/xsl-big.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>赫连娜</p>
                        <img src="../assets/images/HR1.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>雅诗兰黛</p>
                        <img src="../assets/images/es1.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>肌肤之钥</p>
                        <img src="../assets/images/cpb.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>黛珂</p>
                        <img src="../assets/images/dk.jpg" alt="">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>茵芙纱</p>
                        <img src="../assets/images/ipsa.jpg" alt="">
                    </a>
                </li>
            </ul>
        </div>
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
    </div>
</template>

<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'

    export default {
        data () {
            return{
                listArr: [],
            }
        },
        created () {
            this.loadList();
        },
        methods: {
            loadList: function() {
                console.log("初始化加载数据开始...");
            }
        }
    }
</script>

<style>
    @import '/src/assets/css/base.css';
    @import '/src/assets/css/index.css';
</style>