<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:90px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>导出产品</b>
                        </el-col>
                        <el-col class="line center-div" :span="2">
                            <b>开始编号</b>
                        </el-col>

                        <el-col class="line center-div" :span="3">
                            <el-input placeholder="请输入内容" v-model="input" clearable/>
                        </el-col>
                        <el-col class="line center-div" :span="2">
                            <b>结束编号</b>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-input placeholder="请输入内容" v-model="input" clearable/>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:120px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>产品ID</b>
                        </el-col>
                        <el-col class="line center-div" :span="10">
                            <el-input
                                    type="textarea"
                                    :rows="4"
                                    placeholder="请输入内容"
                                    v-model="textarea">
                            </el-input>
                        </el-col>
                        <el-col class="line center-div" :span="2">
                            <el-button type="primary" round>查询</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:140px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>授权店铺</b>
                        </el-col>

                        <el-select v-model="form.select_1" placeholder="请选择">
                            <el-option key="bbk" label="步步高" value="bbk"></el-option>
                            <el-option key="xtc" label="小天才" value="xtc"></el-option>
                            <el-option key="imoo" label="imoo" value="imoo"></el-option>
                        </el-select>


                    </el-row>
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>更新选项</b>
                        </el-col>
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="全部" name="type"></el-checkbox>
                            <el-checkbox label="基本信息" name="type"></el-checkbox>
                            <el-checkbox label="关系" name="type"></el-checkbox>
                            <el-checkbox label="图片" name="type"></el-checkbox>
                            <el-checkbox label="库存" name="type"></el-checkbox>
                            <el-checkbox label="价格" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>选择分类</b>
                        </el-col>
                        <el-col class="line center-div" :span="4">
                            <el-select v-model="form.select_1" placeholder="请选择">
                                <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                <el-option key="imoo" label="imoo" value="imoo"></el-option>
                            </el-select>
                        </el-col>
                        <el-col class="line center-div" :span="2">
                            <b>分类节点id</b>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-input placeholder="请输入内容" v-model="input" clearable/>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button type="primary" round @click="dialogVisible = true">选择模板</el-button>
                            <el-dialog title="选择模板" width="60%" :modelValue=dialogVisible
                                       @close="closeDialogAddgsVisible" >
                                <el-table
                                        :data="tableData"
                                        ref="refData"
                                        stripe
                                        style="width: 100%">
                                    <el-table-column
                                            prop="type"
                                            label="分类">
                                    </el-table-column>
                                    <el-table-column
                                            prop="uploadId"
                                            label="节点id"
                                            width="180">
                                    </el-table-column>
                                </el-table>
                            </el-dialog>
                        </el-col>
                    </el-row>

                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:80px;">


                    <el-row>
                        <el-col :span="2" class=" center-div">
                            <el-radio v-model="radio" label="1">全选</el-radio>
                        </el-col>

                        <el-col :offset="15" class="line center-div" :span="3">
                            含变体数量(999999)
                        </el-col>
                        <el-col class="line" :span="3">
                            <el-button type="primary" round>上传</el-button>
                        </el-col>
                    </el-row>


                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";

    export default {
        name: "uploadProduct",
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
            const closeDialogAddgsVisible = () => {

            };
            const handleSearch = () => {

            };
            const form = reactive({
                select_1: "",
                select_2: "",
                select_3: "",
                select_4: "",
                select_5: "",
                select_6: "",
                date1: "",
                date2: "",
                type: ["全部"]

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
            const addForm = reactive({
                stauts: 0,
                ptypeList: "",
                pageIndex: 1,
                pageSize: 10,
            });
            const pageTotal = ref(0);
            const input = ref(null);
            const textarea = ref(null);
            const dialogVisible = ref(false);
            const addsForm = ref(false);

            return {
                name,
                data,
                addsForm,
                options,
                options2,
                todoList,
                form,
                formRef,
                radio,
                tableData,
                pageTotal,
                query,
                closeDialogAddgsVisible,
                handleSearch,
                input,
                addForm,
                dialogVisible,
                textarea,
                role,
            };
        },
    };
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
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
