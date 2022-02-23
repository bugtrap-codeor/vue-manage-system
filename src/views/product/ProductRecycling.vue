<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>

                        <el-col :offset="1" :span="2">
                            <el-button type="danger" round>彻底删除</el-button>
                        </el-col>
                        <el-col :offset="1" :span="2">
                            <el-button type="primary" round>恢复</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:2000px;">
                    <el-row :span="24" :gutter="2">
                        <div class="grid-size" v-for="productData in productDatas">
                            <el-col :span="5">
                                <router-link :to="{path:'productInner',query:{setid:123456}}">
                                    <el-image style="width: 250px; height: 250px" fit="cover" class="table-td-thumb"
                                              :src="productData.imgSrc">
                                    </el-image>
                                </router-link>
                            </el-col>
                            <el-col style="width: 250px">
                                <b class="only2row">
                                    {{productData.title}}
                                </b>
                            </el-col>
                            <el-col style="width: 80px;font-size: 12px;color: #97a8be">
                                {{productData.companyName}}
                            </el-col>
                            <el-col :offset="7" style="width: 80px;font-size: 12px;color: #97a8be">
                                {{productData.peopleName}}
                            </el-col>
                            <el-col style="width: 250px;font-size: 15px;color: #97a8be">
                                时间：{{productData.date}}
                            </el-col>
                            <el-col style="width: 200px;font-size: 15px;color: #97a8be">
                                编号：{{productData.number}}
                            </el-col>
                            <el-col style="width: 50px;font-size: 25px;color: #00a5fd">
                                ￥{{productData.money}}
                            </el-col>
                        </div>

                    </el-row>
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
        name: "productRecycling",
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
            const productDatas = reactive([
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
                {
                    imgSrc: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                    title: 'Making a plan is very important for a bigger project. Think about it, how many times do you find yourself searching your keys at the last minute',
                    companyName: '所属公司名称',
                    peopleName: '所属人名称',
                    date: '2020-20-20 20:20:20',
                    number: '1514245254242',
                    money: '43',
                },
            ])

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
                productDatas,
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
