<template>
    <el-card shadow="hover" class="mgb20" style="height:130px;">
        <el-row :gutter="20">
            <el-col :span="3" class="center-div">
                通过网络采集(仅1688)
            </el-col>
            <el-col :span="10"  class="center-div">
                <el-input placeholder="请输入网址" v-model="address" clearable/>
            </el-col>
            <el-col :span="2" class="center-div">
                <el-button type="primary" round @click="collection">采集</el-button>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="2" class="center-div">
                新建空白采集
            </el-col>
            <el-col :span="2" class="center-div">
                <el-button type="primary" round @click="create">新建</el-button>
            </el-col>
        </el-row>
    </el-card>
</template>

<script>
    import Schart from "vue-schart";

    export default {
        name: "collect",
        components: {Schart},
        data(){
          return{
            address:""
          }
        },
        methods:{
          collection(){

          },
          create(){

          }
        },
        setup() {
            const name = localStorage.getItem("ms_username");
            const role = name === "admin" ? "超级管理员" : "普通用户";

            return {
                name,
                role,
            };
        },
    };
</script>

<style scoped>

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }
    .mgb20 {
        margin-bottom: 20px;
    }
    .el-row {
        margin-bottom: 20px;
    }
    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }


    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }
    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
