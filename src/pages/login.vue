<template>
    <div class="login-layout">
        <!-- 登陆的头部-->
        <div class="login-header">
            <h3>邮箱登陆</h3>
        </div>
        <!--登陆主体-->
        <div class="login-main">
            <div class="login-main-top">
                <h2>凹凹啦</h2>
                <label><input type="text" placeholder="凹凹啦邮箱账号"></label><br>
                <label> <input type="text" placeholder="密码"></label><br>
                <label><input type="button" value="登陆" class="login-btn"></label><br>
            </div>
            <div class="login-main-footer">
                <a href="#" class="login-reg">去注册</a>
                <a href="#" class="login-pwd">忘记密码</a>
            </div>
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

    .login-layout {
        width: 100%;
        max-width: 640px;
        min-width: 320px;
        margin: 0 auto;
        background-color: #fff;

    }
    .login-layout .login-header{
        max-width: 640px;
        min-width: 320px;
        width: 100%;
        height: 60px;
        background-color: rgba(201,21,35,0);
        margin: 0 auto;
        /*padding: 5px 50px 0 150px;*/
        position: relative;
        border-bottom: 1px solid #eeeeee;
    }
    .login-layout .login-header h3{
        width: 100%;
        height: 100%;
        padding-top: 15px;
        text-align: center;

    }
    .login-main{
        position: relative;
        padding: 10px 50px 10px 50px;
    }
    .login-main .login-main-top h2{
        text-align: center;
        color: #d8505c;
        margin: 20px 0;
    }
    .login-main .login-main-top input{
        width: 100%;
        height: 30px;
        border: 1px solid #cccccc;
        padding-left: 5px;
        margin-bottom: 10px;
    }
    .login-main-top .login-btn{
        margin-bottom: 20px;
    }
    .login-main-footer .login-pwd{
        float: right;
    }
</style>
