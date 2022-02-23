<template>
    <div>
        <el-row :gutter="20">

            <el-col :offset="22" :span="2">
                <el-button type="primary" round @click="dialogVisible = true">添加</el-button>
                <el-dialog title="添加授权" width="40%" :modelValue=dialogVisible
                           @close="closeDialogAddgsVisible">
                    <el-form ref="form" :model="form" label-width="150px">
                        <el-form-item label="店铺别名">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Amazon账户">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="开户区域">
                            <el-select v-model="form.region" placeholder="请选择活动区域">
                                <el-option label="北美" value="shanghai"></el-option>
                                <el-option label="欧洲" value="shsdsddanghai"></el-option>
                                <el-option label="日本" value="shandghai"></el-option>
                                <el-option label="澳大利亚" value="beijsding"></el-option>
                                <el-option label="印度" value="beijdsdsing"></el-option>
                                <el-option label="阿联酋" value="beisdjing"></el-option>
                                <el-option label="新加坡" value="beisdadjing"></el-option>
                                <el-option label="沙特阿拉伯" value="dsadada"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Merchant ID">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="授权令牌">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">添加</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>


                </el-dialog>
            </el-col>
            <el-col :span="24">
                <el-table
                        :data="tableData"
                        ref="refData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="type"
                            label="店铺名称">
                    </el-table-column>
                    <el-table-column
                            prop="uploadId"
                            label="账户"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="authUser"
                            label="授权国家"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="productId"
                            label="授权时间">
                    </el-table-column>
                    <el-table-column
                            prop="updateTime"
                            label="设置">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";
    import {useRouter} from "vue-router"

    export default {
        name: "authorization",
        components: {Schart},
        setup() {
            const name = localStorage.getItem("ms_username");
            const role = name === "admin" ? "超级管理员" : "普通用户";

            const data = reactive([
                {
                    name: "2018/09/04",
                    value: 1083,
                },
                {
                    name: "2018/09/05",
                    value: 941,
                },
                {
                    name: "2018/09/06",
                    value: 1139,
                },
                {
                    name: "2018/09/07",
                    value: 816,
                },
                {
                    name: "2018/09/08",
                    value: 327,
                },
                {
                    name: "2018/09/09",
                    value: 228,
                },
                {
                    name: "2018/09/10",
                    value: 1065,
                },
            ]);
            const options = {
                type: "bar",
                title: {
                    text: "最近一周各品类销售图",
                },
                xRorate: 25,
                labels: ["周一", "周二", "周三", "周四", "周五"],
                datasets: [
                    {
                        label: "家电",
                        data: [234, 278, 270, 190, 230],
                    },
                    {
                        label: "百货",
                        data: [164, 178, 190, 135, 160],
                    },
                    {
                        label: "食品",
                        data: [144, 198, 150, 235, 120],
                    },
                ],
            };
            const options2 = {
                type: "line",
                title: {
                    text: "最近几个月各品类销售趋势图",
                },
                labels: ["6月", "7月", "8月", "9月", "10月"],
                datasets: [
                    {
                        label: "家电",
                        data: [234, 278, 270, 190, 230],
                    },
                    {
                        label: "百货",
                        data: [164, 178, 150, 135, 160],
                    },
                    {
                        label: "食品",
                        data: [74, 118, 200, 235, 90],
                    },
                ],
            };
            const todoList = reactive([
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: false,
                },
                {
                    title: "今天要修复100个bug",
                    status: true,
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true,
                },
            ]);
            const handleSearch = () => {

            };
            const form = reactive({
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''

            });
            const tableData = reactive([{
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'fail',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'fail',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }, {
                uploadId: '5151513',
                authUser: 'dasdi dsa fa sd(西班牙)',
                productId: '1561511513',
                amazonType: '帽子/运动衫/Ssdifhu',
                type: '帽子/运动衫/Ssdifhudsdda',
                updateTime: '2021-23-21 123:515:58',
                productStatus: 'success',
                operator: '张三',
            }])
            const formRef = ref(null);
            const radio = ref(0);
            const query = reactive({
                address: "",
                name: "",
                pageIndex: 1,
                pageSize: 10,
            });
            const pageTotal = ref(0);
            const dialogVisible = ref(false);

            return {
                name,
                data,
                options,
                options2,
                dialogVisible,
                todoList,
                form,
                formRef,
                radio,
                tableData,
                pageTotal,
                query,
                handleSearch,
                role,
            };
        },
    };
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }

    .grid-size {
        width: 250px;
        margin: 10px;
    }

    .only2row {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
