<template>
    <div>
        <el-row :gutter="20">

            <el-col :span="24">
                <div class="form-box">
                    <el-form :span="24" ref="formRef" :model="form" label-width="70px">
                        <el-col :span="12">
                            <el-form-item label="总账号" prop="region">
                                <el-select v-model="form.select_1" placeholder="总账号">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="子账号" prop="region">
                                <el-select v-model="form.select_2" placeholder="子账号">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="标题搜索" prop="region">
                                <el-select v-model="form.select_3" placeholder="标题搜索">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="产品编码" prop="region">
                                <el-select v-model="form.select_4" placeholder="产品编码">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="12">
                            <el-form-item label="SKU搜索" prop="region">
                                <el-select v-model="form.select_5" placeholder="SKU搜索">
                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="20">
                            <el-form-item label="日期时间">
                                <el-col :span="11">
                                    <el-form-item prop="date1">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                                        style="width: 100%;"/>
                                    </el-form-item>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-form-item prop="date2">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2"
                                                        style="width: 100%;"/>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>

                        </el-col>
                        <el-col>
                            <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                        </el-col>
                    </el-form>
                </div>
            </el-col>

            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>
                        <el-col class="line center-div" :span="2">
                            <b>产品类型</b>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round type="danger">全部(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>重点(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>原创(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>海外(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>采集(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>其他(999999)</el-button>
                        </el-col>
                        <el-col class="line center-div" :span="3">
                            <el-button round>产品库(999999)</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>
                        <el-col :span="2" class="line center-div">
                            <el-radio v-model="radio" label="1">全选</el-radio>
                        </el-col>

                        <el-col :offset="16" class="line center-div" :span="3">
                            含变体数量(999999)
                        </el-col>

                        <el-col class="line" :span="3">
                            <el-button type="primary" @click="handleSearch">添加到上传</el-button>
                        </el-col>
                    </el-row>


                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:2000px;">
                    <!--                   <el-col :span="20">-->

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


                <!--                <el-card shadow="hover" style="height:252px;">-->
                <!--                    <template #header>-->
                <!--                        <div class="clearfix">-->
                <!--                            <span>语言详情</span>-->
                <!--                        </div>-->
                <!--                    </template>-->
                <!--                    Vue-->
                <!--                    <el-progress :percentage="71.3" color="#42b983"></el-progress>-->
                <!--                    JavaScript-->
                <!--                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>-->
                <!--                    CSS-->
                <!--                    <el-progress :percentage="13.7"></el-progress>-->
                <!--                    HTML-->
                <!--                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>-->
                <!--                </el-card>-->
                <!--            </el-col>-->
                <!--            <el-col :span="16">-->
                <!--                <el-row :gutter="20" class="mgb20">-->
                <!--                    <el-col :span="8">-->
                <!--                        <el-card shadow="hover" :body-style="{ padding: '0px' }">-->
                <!--                            <div class="grid-content grid-con-1">-->
                <!--                                <i class="el-icon-user-solid grid-con-icon"></i>-->
                <!--                                <div class="grid-cont-right">-->
                <!--                                    <div class="grid-num">1234</div>-->
                <!--                                    <div>用户访问量</div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                        </el-card>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="8">-->
                <!--                        <el-card shadow="hover" :body-style="{ padding: '0px' }">-->
                <!--                            <div class="grid-content grid-con-2">-->
                <!--                                <i class="el-icon-message-solid grid-con-icon"></i>-->
                <!--                                <div class="grid-cont-right">-->
                <!--                                    <div class="grid-num">321</div>-->
                <!--                                    <div>系统消息</div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                        </el-card>-->
                <!--                    </el-col>-->
                <!--                    <el-col :span="8">-->
                <!--                        <el-card shadow="hover" :body-style="{ padding: '0px' }">-->
                <!--                            <div class="grid-content grid-con-3">-->
                <!--                                <i class="el-icon-s-goods grid-con-icon"></i>-->
                <!--                                <div class="grid-cont-right">-->
                <!--                                    <div class="grid-num">5000</div>-->
                <!--                                    <div>数量</div>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                        </el-card>-->
                <!--                    </el-col>-->
                <!--                </el-row>-->
                <!--                <el-card shadow="hover" style="height:403px;">-->
                <!--                    <template #header>-->
                <!--                        <div class="clearfix">-->
                <!--                            <span>待办事项</span>-->
                <!--                            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>-->
                <!--                        </div>-->
                <!--                    </template>-->

                <!--                    <el-table :show-header="false" :data="todoList" style="width:100%;">-->
                <!--                        <el-table-column width="40">-->
                <!--                            <template #default="scope">-->
                <!--                                <el-checkbox v-model="scope.row.status"></el-checkbox>-->
                <!--                            </template>-->
                <!--                        </el-table-column>-->
                <!--                        <el-table-column>-->
                <!--                            <template #default="scope">-->
                <!--                                <div class="todo-item" :class="{'todo-item-del': scope.row.status,}">-->
                <!--                                    {{ scope.row.title }}-->
                <!--                                </div>-->
                <!--                            </template>-->
                <!--                        </el-table-column>-->
                <!--                        <el-table-column width="60">-->
                <!--                            <template>-->
                <!--                                <i class="el-icon-edit"></i>-->
                <!--                                <i class="el-icon-delete"></i>-->
                <!--                            </template>-->
                <!--                        </el-table-column>-->
                <!--                    </el-table>-->
                <!--                </el-card>-->
            </el-col>
        </el-row>
        <!--        <el-row :gutter="20">-->
        <!--            <el-col :span="12">-->
        <!--                <el-card shadow="hover">-->
        <!--                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>-->
        <!--                </el-card>-->
        <!--            </el-col>-->
        <!--            <el-col :span="12">-->
        <!--                <el-card shadow="hover">-->
        <!--                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>-->
        <!--                </el-card>-->
        <!--            </el-col>-->
        <!--        </el-row>-->
    </div>
</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";
    import axios from "axios";
    import {useRouter} from "vue-router"

    axios.get('http://127.0.0.1:8080/login', {
        params: {
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });

    // console.log("a");
    export default {
        name: "allProduct",
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
            const imgSrc = (id) => {
                require('https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg');
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
            const tableData = [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
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
            const formRef = ref(null);
            const ada = ref(null);
            const radio = ref(0);
            const query = reactive({
                address: "",
                name: "",
                pageIndex: 1,
                pageSize: 10,
            });
            const pageTotal = ref(0);

            return {
                name,
                // data,
                options,
                options2,
                todoList,
                productDatas,
                form,
                formRef,
                radio,
                tableData,
                pageTotal,
                ada,

                // imgSrc,
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

    .center-div {
        display: flex;
        justify-content: center;
        align-items: center;
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
