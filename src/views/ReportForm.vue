<template>
    <div>
        <el-card shadow="hover" class="mgb20" style="height:180px;" >
            <el-row>
                <el-col :span="2" style="margin: 5px" class="center-div">
                    <b >时间</b>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_time" label="1">全部</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_time" label="2">近一星期</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_time" label="3">近一个月</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_time" label="4">自定义</el-radio>

                </el-col>
                <el-col :span="3" style="margin: 5px">
                    <el-date-picker
                            v-model="radio_date"
                            type="daterange"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="margin: 5px" class="center-div">
                    <b >店铺</b>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_site" label="1">全部</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_site" label="2">日本店</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-radio v-model="radio_site" label="3">美国店</el-radio>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-button type="primary" round @click="search">搜索</el-button>
                </el-col>
                <el-col :span="3" style="margin: 5px" class="center-div">
                    <el-button type="primary" round  @click="dialogVisible = true">导出</el-button>
                </el-col>

            </el-row>
        </el-card>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            label="日期"
                            show-overflow-tooltip>
                        <template #default="scope">
                            <router-link :to="{path:'buyInner',query:{setid:123456}}">
                                {{ scope.row.amazonId }}
                            </router-link>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="buyTime"
                            label="订单数量"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="buyMoney"
                            label="订单金额"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="amazonProfit"
                            label="Amazon佣金"
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
                            label="国际运费"
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
        name: "reportForm",
        data(){
          //验证码
          return{
            radio_time:"1",
            radio_date:"",
            radio_site:"2"
            // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            // url: '../../assets/bj.jpg',
            // verifyCode:"",
            // vcUrl: '/api/captcha?time='+ new Date(),
            // form:{
            //   username:"",
            //   password:"",
            //   code:""
            // },
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
          // 搜索
          search() {

          },
          // 导出
          dialogVisible() {

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
    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
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
