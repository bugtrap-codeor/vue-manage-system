<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:120px;">
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>基本信息</b>
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>订单ID</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            1234565765432
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>店铺</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            SZND(日本)
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>总数量</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            1
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>总采购价(￥)</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            213434242
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>订单状态</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            已付款
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>亚马逊单号</b>
                        </el-col>
                        <el-col :span="5" style="margin: 5px" class="center-div">
                            213-4342-4213-4342-13
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>购买日期</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            2155-21-12 12:1232:153
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:200px;">
                    <el-row :span="24">
                        <el-col :span="3" style="height: 150px; width: 150px">
                            <el-image class="table-td-thumb"
                                      src="https://lin-xin.gitee.io/images/post/wms.png">
                            </el-image>
                        </el-col>
                        <el-col :span="20">
                            <el-row>
                                发生的年份的费独守空房啊反对法法发顺丰的雷克萨斯那地方 反对是否是敌方as分身乏术法放散阀撒旦法暗示法啊撒旦法
                            </el-row>
                            <el-row>
                                <el-col :span="2"><b>SKU: </b></el-col>
                                <el-col :span="4">asdfghjklkjhgfds</el-col>
                                <el-col :span="2"><b>ASIN: </b></el-col>
                                <el-col :span="4">HSHVCGHDJLKMMMK</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="2"><b>数量: </b></el-col>
                                <el-col :span="4">1234567</el-col>
                                <el-col :span="2"><b>金额: </b></el-col>
                                <el-col :span="4">213456786543</el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="2"><b>颜色: </b></el-col>
                                <el-col :span="4">red</el-col>
                                <el-col :span="2"><b>尺寸: </b></el-col>
                                <el-col :span="4">1321</el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:320px;">
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>寄件信息</b>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>收件人：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            而非还哦分噢发呢奥法
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>TEL：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            3123-1212-2133-21123
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>收件人国家</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            JP
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <b>收件人国家(中文): </b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            日本
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>ZIP邮编：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            3123-1212-2133-21123
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>州: </b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            水电费不舒服
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>市: </b>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            日本大幅度的说法方式敌方
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>街道：</b>
                        </el-col>
                        <el-col :span="8" style="margin: 5px" class="center-div">
                            个暗示法撒旦法撒大概是撒旦法第三方付按时发放
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>详细信息: </b>
                        </el-col>
                        <el-col :span="15" style="margin: 5px" class="center-div">
                            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"/>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:320px;">
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>国际物流</b>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="primary" round @click="dialogVisible3=true">添加</el-button>
                            <el-dialog title="添加物流" width="65%" :modelValue=dialogVisible3
                                       @close="closeDialogAddgsVisible">
                                <el-row :span="24">
                                    <el-col :span="4" style="height: 150px; width: 150px">
                                        <el-image class="table-td-thumb"
                                                  src="https://lin-xin.gitee.io/images/post/wms.png">
                                        </el-image>
                                    </el-col>
                                    <el-col :span="20">
                                        <el-row>
                                            发生的年份的费独守空房啊反对法法发顺丰的雷克萨斯那地方 反对是否是敌方as分身乏术法放散阀撒旦法暗示法啊撒旦法
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2"><b>SKU: </b></el-col>
                                            <el-col :span="4">asdfghjklkjhgfds</el-col>
                                            <el-col :span="2"><b>数量: </b></el-col>
                                            <el-col :span="4">1</el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2"><b>颜色: </b></el-col>
                                            <el-col :span="4">red</el-col>
                                            <el-col :span="2"><b>大小: </b></el-col>
                                            <el-col :span="4">1233</el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2"><b>运输数量: </b></el-col>
                                            <el-col :span="4">111</el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>
                                <el-row :span="24">
                                    <el-col :span="4" class="center-div">
                                        <b>运单信息</b>
                                    </el-col>
                                    <el-col :span="20">
                                        <el-row>
                                            <el-col :span="2"  class="center-div"><b>中文: </b></el-col>
                                            <el-col :span="4" class="center-div">asdfghjklkjhgfds</el-col>
                                            <el-col :span="2"  class="center-div"><b>英文: </b></el-col>
                                            <el-col :span="4" class="center-div">1</el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2" class="center-div"><b>重量(Kg): </b></el-col>
                                            <el-col :span="4" class="center-div">asdfghjklkjhgfds</el-col>
                                            <el-col :span="2" class="center-div"><b>体积(cm): </b></el-col>
                                            <el-col :span="2">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                            <el-col :span="1" class="center-div">
                                                *
                                            </el-col>
                                            <el-col :span="2">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                            <el-col :span="1" class="center-div">
                                                *
                                            </el-col>
                                            <el-col :span="2">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2" class="center-div"><b>物流: </b></el-col>
                                            <el-col :span="5">
                                                <el-select v-model="form.select_5" placeholder="SKU搜索">
                                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :span="5">
                                                <el-select v-model="form.select_5" placeholder="SKU搜索">
                                                    <el-option key="bbk" label="步步高" value="bbk"></el-option>
                                                    <el-option key="xtc" label="小天才" value="xtc"></el-option>
                                                    <el-option key="imoo" label="imoo" value="imoo"></el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :span="2" class="center-div"><b>IOSS号: </b></el-col>
                                            <el-col :span="4">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2" class="center-div"><b>运单号: </b></el-col>
                                            <el-col :span="4">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                            <el-col :span="2" class="center-div"><b>追踪号: </b></el-col>
                                            <el-col :span="4">
                                                <el-input v-model="input" clearable/>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="2" class="center-div">
                                                <el-button type="primary" round>生成运单号</el-button>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>


                            </el-dialog>
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <b>国际物流单号: </b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            YT2651651515115151
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>国际跟踪号：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            3123-1212-2133-21123
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>国际运费: </b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            12331
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="1" style="margin: 5px" class="center-div">
                            <b>线路: </b>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            [云途]日大师的大大的本大幅度的说法方式敌方
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>重量：</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            1233
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>发货时间：</b>
                        </el-col>
                        <el-col :span="5" style="margin: 5px" class="center-div">
                            5222-33-33 12:12:12
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>物流状态: </b>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            未发货
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>物流时间：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            1233-21-12 12:12:12
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>同步状态：</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            已同步
                        </el-col>
                    </el-row>
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="primary" round>作废</el-button>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="primary" round>编辑</el-button>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:250px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>订单明细</b>
                        </el-col>
                    </el-row>
                    <el-table
                            ref="multipleTable"
                            :data="internationalMoney"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @selection-change="handleSelectionChange">
                        <el-table-column
                                prop="emptyId"
                                label=""
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="canada"
                                label="订单金额(汇率 0.2651)"
                                width="190">
                        </el-table-column>
                        <el-table-column
                                prop="mexico"
                                label="Amazon佣金"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="france"
                                label="采购价"
                                show-overflow-tooltip>
                            <el-input  v-model="input" clearable/>
                        </el-table-column>
                        <el-table-column
                                prop="france"
                                label="到账金额"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="germany"
                                label="物流费"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="germany"
                                label="打包费"
                                show-overflow-tooltip>
                            <el-input  v-model="input" clearable/>
                        </el-table-column>
                        <el-table-column
                                prop="italy"
                                label="平台佣金"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="spain"
                                label="退货费用"
                                show-overflow-tooltip>
                            <el-input  v-model="input" clearable/>
                        </el-table-column>
                        <el-table-column
                                prop="netherlands"
                                label="利润"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="sweden"
                                label="利润率"
                                show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";

    export default {
        name: "buyInner",
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
                name: "",
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
                emptyId: '国际币种',
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
                emptyId: '人民币',
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
            },])
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
            let dialogVisible = ref(false);
            let dialogVisible2 = ref(false);
            let dialogVisible3 = ref(false);
            let multipleSelection = ref([]);
            const resetDateFilter = () => {
                this.$refs.filterTable.clearFilter('date');
            }
            const closeDialogAddgsVisible = () => {
                dialogVisible = false;
                dialogVisible2 = false;
                dialogVisible3 = false;
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
                dialogVisible2,
                dialogVisible3,
                handleClick,
                activeName,
                variantTable,
                handleSearch,
                closeDialogAddgsVisible,
                role,
                dialogVisible,
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
