<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:100px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            查询
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            <el-input placeholder="请输入内容" v-model="input" clearable/>
                        </el-col>

                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button round type="primary">查询</el-button>
                        </el-col>
                        <el-col :offset="5" :span="2" style="margin: 5px" class="center-div">
                            <el-button round type="warning">
                                <router-link :to="{path:'memberCreate',query:{setid:123456}}">
                                    添加成员
                                </router-link>
                            </el-button>
                        </el-col>
                        <el-col :offset="5" :span="2" style="margin: 5px" class="center-div">
                            <el-button round type="warning">
                                <router-link :to="{path:'companyCreate',query:{setid:123456}}">
                                    添加公司
                                </router-link>
                            </el-button>
                        </el-col>

                    </el-row>
                </el-card>

                <el-card shadow="hover" class="mgb20" style="height:950px;">
                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                prop="companyId"
                                label="编号"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="companyName"
                                label="公司名称"
                                width="120">
                            <router-link :to="{path:'companyInner',query:{setid:123456}}">
                                dad
                            </router-link>
                        </el-table-column>
                        <el-table-column
                                prop="companyUpper"
                                label="上级公司"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="sku"
                                label="SKU"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="telName"
                                label="联系人"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="telPhone"
                                label="联系方式"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="lastMoney"
                                label="余额"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="createTime"
                                label="创建时间"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="状态"
                                show-overflow-tooltip>
                            可用
                        </el-table-column>
                    </el-table>
                    <el-dialog title="选择模板" width="40%" :modelValue=dialogVisible
                               @close="closeDialogAddgsVisible">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item >
                                <el-checkbox v-model="checked">允许子成员查看公司其他产品</el-checkbox>
                            </el-form-item>
                            <el-form-item >
                                <el-checkbox v-model="checked">允许子成员删除公司其他产品</el-checkbox>
                            </el-form-item>

                        </el-form>
                    </el-dialog>
                    <div class="pagination">
                        <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex"
                                       :page-size="query.pageSize" :total="pageTotal"
                                       @current-change="handlePageChange"/>
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";

    export default {
        name: "companyManage",
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
                select_1: "",
                select_2: "",
                select_3: "",
                select_4: "",
                select_5: "",
                select_6: "",
                date1: "",
                date2: "",

            });
            const refData = ref(null)
            const tableData = reactive([{
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',
            }, {
                companyId: '213432434',
                companyName: '2016-05-03',
                companyUpper: '啦啦啦',
                sku: '21425334564',
                telName: '231',
                telPhone: '3123',
                lastMoney: '1323',
                operate: '233',
                createTime: '213',

            }])
            const formRef = ref(null);
            const radio = ref(0);
            const multipleTable = ref(0);
            const query = reactive({
                address: "",
                name: "",
                pageIndex: 1,
                pageSize: 10,
            });
            const pageTotal = ref(0);
            const input = ref(null);
            const dialogVisible = ref(false);
            let multipleSelection = ref([]);
            const resetDateFilter = () => {
                this.$refs.filterTable.clearFilter('date');
            }
            const clearFilter = () => {
                this.$refs.filterTable.clearFilter();
            }
            const handleSelectionChange = (val) => {
                multipleSelection = val;
            }
            const filterTag = (value, row) => {
                return row.productStatus === value;
            }
            const filterHandler = (value, row, column) => {
                const property = column['property'];
                return row[property] === value;
            }
            return {
                name,
                data,
                options,
                options2,
                todoList,
                form,
                formRef,
                dialogVisible,
                radio,
                tableData,
                pageTotal,
                handleSelectionChange,
                query,
                handleSearch,
                role,
                filterTag,
                input,
                refData,
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
    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
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
