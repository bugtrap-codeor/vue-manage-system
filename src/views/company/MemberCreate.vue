<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:300px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>编号</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                           1223
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>成员名称</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="成员名称"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>SKU前缀</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="SKU"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>上级公司</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            上级公司名称
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>联系人</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="联系人"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>联系方式</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="联系方式"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>用户名</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="用户名"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>密码</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="密码"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>确认密码</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input
                                    placeholder="密码"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="primary" round>提交创建</el-button>
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
        name: "memberCreate.vue",
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
            const internationalMoney = reactive([{
                emptyId: '运费(￥)',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }, {
                emptyId: '售价(￥)',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }, {
                emptyId: '外币',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }, {
                emptyId: '优化',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }, {
                emptyId: '最终售价',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }, {
                emptyId: '利润(￥)',
                canada: '0',
                mexico: '0',
                england: '0',
                france: '0',
                germany: '0',
                italy: '0',
                spain: '0',
                netherlands: '0',
                sweden: '0',
                japanese: '0',
            }])
            const variantTable = reactive([{
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, {
                id: '1',
                variantName: 'Red-M',
                variantSKU: '0',
                variantAddMoney: '0',
                inventory: '0',
                variantUPCEAN: '0',
                operate: '0',
                selectPhoto: '0',
                hasPhoto: '0',
            }, ])
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
            const checked = ref(null);
            const activeName = ref("china");
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
            const handleClick = (tab, event) => {
                console.log(tab, event);
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
                radio,
                checked,
                internationalMoney,
                pageTotal,
                handleSelectionChange,
                query,
                handleClick,
                activeName,
                variantTable,
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
        width: 150px;
        height: 150px;
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
