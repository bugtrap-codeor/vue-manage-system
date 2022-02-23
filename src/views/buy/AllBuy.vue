<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card :model="order_information" shadow="hover" class="mgb20" style="height:130px;">
                    <el-row>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="订单id" v-model="order_information.id" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="亚马逊订单id" v-model="order_information.amazon_id" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="关联id" v-model="order_information.association_id" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="产品SKU" v-model="order_information.product_SKU" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="产品asin码" v-model="order_information.product_asin_code" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="国内物流单号" v-model="order_information.domestic_order" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-input placeholder="国际物流单号" v-model="order_information.international_order" clearable/>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-form-item prop="region">
                                <el-select v-model="order_information.site_select" placeholder="站点选择">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4" style="margin: 5px">
                            <el-date-picker
                                    v-model="start_date"
                                    type="date"
                                    placeholder="开始日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="4" style="margin: 5px">
                            <el-date-picker
                                    v-model="end_date"
                                    type="date"
                                    placeholder="结束日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="2" style="margin: 5px">
                            <el-button type="primary" round>搜索</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card :model="order_status" shadow="hover" class="mgb20" style="height:150px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>订单状态</b>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button type="danger" round>全部(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>待付款(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>已付款(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>虚发货(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>已采购(999999)</el-button>
                        </el-col>

                        <el-col class="line center-div" :span="3">
                            <el-button round>国际已发货(999999)</el-button>
                        </el-col>

                        <el-col class="line center-div" :span="3">
                            <el-button round>退货(999999)</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>异常订单</b>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round type="danger">全部(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>国际物流异常(999999)</el-button>
                        </el-col>

                    </el-row>
                  
                </el-card>

                <el-card :model="order_summary" shadow="hover" class="mgb20" style="height:100px;">
                    <el-row>
                        订单数：0
                        销售额：0
                        订单到账金额：0
                        采购价：0
                        佣金：0
                        运费：0
                    </el-row>

                    <el-row>
                        虚发货订单数：0
                        虚发货订单数金额：0
                        虚发货扣费佣金：0
                        退款扣费佣金：0
                        利润：0
                        利润率：0
                    </el-row>

                </el-card>

                <el-card :model="order_details" shadow="hover" class="mgb20" style="height:950px;">

                    <el-table
                            ref="multipleTable"
                            :data="tableData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                label="亚马逊单号"
                                show-overflow-tooltip>
                            <template #default="scope">
                                <router-link :to="{path:'buyInner',query:{setid:123456}}">
                                    {{ scope.row.amazonId }}
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="buyTime"
                                label="下单时间"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                label="图片"
                                width="50"
                                show-overflow-tooltip>
                            <template #default="scope">
                                <el-image class="table-td-thumb" :src="scope.row.photo">
                                </el-image>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="buyMoney"
                                label="订单金额"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="amazonProfit"
                                label="亚马逊佣金"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="amazonProfit"
                                label="亚马逊税费"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="getMoney"
                                label="到账金额"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="purchasePrice"
                                label="采购价"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="internationalTransportMoney"
                                label="物流费"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="internationalTransportMoney"
                                label="打包费"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="platformMoney"
                                label="平台佣金"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="profit"
                                label="利润"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="profitRate"
                                label="利润率"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                label="状态"
                                show-overflow-tooltip>
                            国际已发货
                        </el-table-column>
                    </el-table>
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
        name: "allBuy",
        data(){
          return{
            order_information:{
              id:"",
              amazon_id:"",
              association_id:"",
              product_SKU:"",
              product_asin_code:"",
              domestic_order:"",
              international_order:"",
              site_select:""
            }
          }
        },
        methods: {
          clickSearch(){

          },

        },
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
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',
            }, {
                buyId: '213432434',
                buyTime: '2016-05-03',
                photo: 'https://lin-xin.gitee.io/images/post/wms.png',
                amazonId: '21425334564',
                buyMoney: '231',
                amazonProfit: '3123',
                getMoney: '1323',
                purchasePrice: '233',
                internationalTransportMoney: '213',
                platformMoney: '313',
                returnMoney: '5225',
                profit: '520',
                profitRate: '0.89',

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
                radio,
                tableData,
                pageTotal,
                handleSelectionChange,
                query,
                handleSearch,
                role,
                multipleTable,
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
