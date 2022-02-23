<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>
                        <el-col :span="4">
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button type="primary" round @click="search">搜索</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:850px;">
                    <el-table
                            :data="tableData"
                            ref="refData"
                            stripe
                            style="width: 100%"
                    >
                        <el-table-column
                                prop="uploadId"
                                label="上传编号"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="authUser"
                                label="授权用户"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="productId"
                                label="产品id">
                        </el-table-column>
                        <el-table-column
                                prop="amazonType"
                                label="Amazon类目">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="分类类型">
                        </el-table-column>
                        <el-table-column
                                prop="updateTime"
                                label="更新时间">
                        </el-table-column>

                        <el-table-column
                                prop="productStatus"
                                label="标签"
                                width="100"
                                :filters="[{ text: 'success', value: 'success' }, { text: 'fail', value: 'fail' }]"
                                :filter-method="filterTag"
                                filter-placement="bottom-end">
                            <template #default="scope">
                                <el-tag @click.native="dialogVisible=true"
                                        :type="scope.row.productStatus === 'success' ? 'success' : 'primary'"
                                >{{scope.row.productStatus}}
                                </el-tag>

                            </template>

                        </el-table-column>
                        <el-table-column
                                prop="operator"
                                label="操作人">
                        </el-table-column>
                    </el-table>
                    <el-dialog title="失败原因" width="60%" :modelValue=dialogVisible>
                        失败原因失败原因失败原因失败原因失败原因失败原因失败原因失败原因
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
        name: "myUpload",
        components: {Schart},
        data(){
          return{
            input: "",

          }
        },
        methods:{
          search() {

          }
        },
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
            const input = ref(null);
            const dialogVisible = ref(false);
            const resetDateFilter = () => {
                this.$refs.filterTable.clearFilter('date');
            }
            const clearFilter = () => {
                this.$refs.filterTable.clearFilter();
            }
            const formatter = (row, column) => {
                return row.address;
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
                query,
                handleSearch,
                dialogVisible,
                role,
                filterTag,
                input,
                refData,
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

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
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


    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

</style>
