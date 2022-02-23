<template>
    <div style="">
        <el-row>
            <el-col :span="18" style="height: 100vh;" class="left_box">
                <transition name="el-zoom-in-center">
                    <p style="font-size: 60px;color:#333;position: relative;left:16%;top:20%;">EasyPermissions</p>
                </transition>
                <p style="font-size: 50px;color:#f5f5f5;position: relative;left:16%;top:20%;">打造最简单的权限管理系统</p>

            </el-col>
            <el-col :span="6" style="height: 100vh; display: flex;flex-direction: column; align-items: center;justify-content: center;">

                <div class="login_container">
                    <div class="login_box">
                        <!--头像区域-->
                        <div class="avatar_box">
                            <img src="../../assets/logo.jpg" alt />
                        </div>
                        <el-form :model="form" ref="loginFormRef" :status-icon="true">
                            <el-form-item prop="username">
                                <el-input prefix-icon="el-icon-user-solid" placeholder="账号" v-model="form.username"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" prefix-icon="el-icon-lock" placeholder="密码" v-model="form.password"></el-input>
                            </el-form-item>
                            <el-form-item prop="code">
                                <el-row :gutter="20">
                                    <el-col :span="14">
                                        <el-input prefix-icon="el-icon-cloudy" placeholder="验证码" v-model="form.code"></el-input>
                                    </el-col>
                                    <el-col :span="10" style="height: 100%;">
                                        <img :src="vcUrl" @click="updateVerifyCode" class="code_img"/>
                                    </el-col>
                                </el-row>

                            </el-form-item>
                            <el-form-item class="btns">
                                <el-button type="primary" @click="submitLogin">登录</el-button>
                                <el-button type="info" @click="resetLoginForm">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

            </el-col>
        </el-row>
    </div>

</template>

<script>
    import {getRequest, postRequest} from "../api"
    import axios from "axios";
    export default {
        name: "login",
        data(){
            //验证码
            return{
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: '../../assets/bj.jpg',
                verifyCode:"",
                vcUrl: '/api/captcha?time='+ new Date(),
                form:{
                    username:"",
                    password:"",
                    code:""
                },
                // rules: {
                //     username: [
                //         {required: true, message: '请输入账号', trigger: 'blur'},
                //         {min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur'}
                //     ],
                //     password: [
                //         {required: true, message: '请输入密码', trigger: 'blur'},
                //         {min: 3, max: 12,message: '长度在 3 到 12 个字符', trigger: 'blur'}
                //     ],
                //     code: [
                //         // { required: true, trigger: 'blur', validator: validateVerifycode}
                //         { required: true,message: '请输入验证码', trigger: 'blur'},
                //         {min: 3, max: 6,message: '长度在 3 到 6 个字符', trigger: 'blur'}
                //     ],
                // }
            }
        },
        methods: {
            updateVerifyCode() {
                this.vcUrl = '/api/captcha?time='+ new Date();
            },
            // 点击登录按钮
            submitLogin () {
                this.$refs.loginFormRef.validate(valid => {
                    // console.log(valid)
                    if (valid) {
                        postRequest("/login", this.form).then(resp=> {
                            if (resp) {
                                //存储用户token
                                const tokenStr = resp['obj']['tokenHead'] + resp['obj']['token'];
                                window.sessionStorage.setItem('tokenStr', tokenStr);
                                // getRequest("/admin/info").then(resp=> {
                                //     console.log(resp)
                                // })
                                //跳转首页
                                this.$router.replace("/inner")
                            }
                        })
                    }
                })
            },
            // 点击重置按钮 重置表单
            resetLoginForm () {
                // console.log(this)
                this.$refs.loginFormRef.resetFields()
            },

            checkCode(){
                let url = "http://127.0.0.1:9999/checkCode/"+this.form.code;
                // console.log(url)
                this.$axios.get(url).then(res=>{
                    console.log(res);
                    if(res.code==0){
                        console.log("ss")
                    }
                }).catch(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>
    .left_box{
        margin: 0px;
        padding: 0px;
        height: 100%;
        background: url('../../assets/bj.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .login_container{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #F2F6FC;
    }
    .login_box{
        width: 80%;
        height: 50%;
        padding-left: 10%;
        padding-right: 10%;
        background-color: #F2F6FC;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
    }
    .avatar_box {
        width: 100px;
        height: 100px;
        border: 1px solid #eee;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        transform: translate(0px,-50px);
        background: #fff;
    }
    .avatar_box img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
    }
    .btns{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .code_img{
        height: 38px;
        width: 100%;
    }
</style>