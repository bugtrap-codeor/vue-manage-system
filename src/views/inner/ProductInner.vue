<template>
    <div>

        <el-row :gutter="20">
            <el-col style="margin: 5px;">
                <el-button type="primary" round>保存</el-button>
            </el-col>
            <el-col :span="24">
                <el-card shadow="hover" class="mgb20" style="height:450px;">
                    <el-row :span="24">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品编号</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            123151315
                        </el-col>
                    </el-row>
                    <el-row style="height: 200px">
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品相册</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px;height: 150px">
                            <div style="position: relative;">
                                <el-checkbox class="" v-model="checked"
                                             style="position: absolute; z-index: 9;padding-left: 132px;"></el-checkbox>
                                <el-image class="table-td-thumb"
                                          src="https://lin-xin.gitee.io/images/post/wms.png"
                                          style="position: absolute;">
                                </el-image>
                            </div>
                        </el-col>
                        <el-col :span="3" style="margin: 5px;">
                            <div style="position: relative;">
                                <el-checkbox class="" v-model="checked"
                                             style="position: absolute; z-index: 9;padding-left: 132px;"></el-checkbox>
                                <el-image class="table-td-thumb"
                                          src="https://lin-xin.gitee.io/images/post/wms.png"
                                          style="position: absolute;">
                                </el-image>
                            </div>
                        </el-col>
                        <el-col :span="3" style="margin: 5px;">
                            <div style="position: relative;">
                                <el-checkbox class="" v-model="checked"
                                             style="position: absolute; z-index: 9;padding-left: 132px;"></el-checkbox>
                                <el-image class="table-td-thumb"
                                          src="https://lin-xin.gitee.io/images/post/wms.png"
                                          style="position: absolute;">
                                </el-image>
                            </div>
                        </el-col>
                        <el-col :span="3" style="margin: 5px;">
                            <div style="position: relative;">
                                <el-checkbox class="" v-model="checked"
                                             style="position: absolute; z-index: 9;padding-left: 132px;"></el-checkbox>
                                <el-image class="table-td-thumb"
                                          src="https://lin-xin.gitee.io/images/post/wms.png"
                                          style="position: absolute;">
                                </el-image>
                            </div>
                        </el-col>
                        <el-col :span="3" style="margin: 5px;">
                            <div style="position: relative;">
                                <el-checkbox class="" v-model="checked"
                                             style="position: absolute; z-index: 9;padding-left: 132px;"></el-checkbox>
                                <el-image class="table-td-thumb"
                                          src="https://lin-xin.gitee.io/images/post/wms.png"
                                          style="position: absolute;">
                                </el-image>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="success" round>保存相册</el-button>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="success" round>上传图片</el-button>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="success" round>图片删除</el-button>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <el-button type="success" round>一键删除</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品分类</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-input type="success" round></el-input>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:80px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品类型</b>
                        </el-col>
                        <el-col :span="15" style="margin: 5px">
                            <el-radio v-model="radio" label="1">重点</el-radio>
                            <el-radio v-model="radio" label="2">原创</el-radio>
                            <el-radio v-model="radio" label="3">海外</el-radio>
                            <el-radio v-model="radio" label="4">抓取</el-radio>
                            <el-radio v-model="radio" label="5">其他</el-radio>
                        </el-col>
                    </el-row>

                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:380px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>商家信息</b>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-button round>产品页</el-button>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品信息</b>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 150px">厂商名称：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 150px">品牌名称：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 150px">厂商编号：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :offset="4" :span="12" style="margin: 5px" class="center-div">
                            <div style="width: 100px">内部SKU：</div>
                            <div>
                                <el-input
                                        placeholder="请输入内容"
                                        v-model="input"
                                        clearable>
                                </el-input>
                            </div>
                            <div style="padding-left: 20px">
                                <el-input
                                        placeholder="修正SKU"
                                        v-model="input"
                                        clearable>
                                </el-input>
                            </div>
                        </el-col>
                        <el-col :span="9" style="margin: 5px" class="center-div">
                            <div style="width: 150px">来源地址：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="15" style="margin: 5px" class="center-div">
                            <div style="width: 100px">备注：</div>
                            <div style="width: 600px">
                                <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 2, maxRows: 4}"
                                        placeholder="请输入内容"
                                        v-model="textarea2">
                                </el-input>
                            </div>

                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品码</b>
                        </el-col>
                        <div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </div>
                    </el-row>

                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:580px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>成本运费</b>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 190px">采购价格(￥)：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 190px" class="center-div">国内运费(￥)：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 190px" class="center-div">包装毛重(Kg)：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">

                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <div style="width: 130px">包装尺寸(cm)：</div>
                        </el-col>
                        <el-col :span="4" class="center-div">
                            <el-input
                                    v-model="input"
                                    clearable>
                            </el-input>
                            <div style="padding: 5px">:</div>
                            <el-input
                                    v-model="input"
                                    clearable>
                            </el-input>
                            <div style="padding: 5px">:</div>
                            <el-input
                                    v-model="input"
                                    clearable>
                            </el-input>
                            <div style="padding: 5px"></div>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 190px" class="center-div">库存数量：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="6" style="margin: 5px" class="center-div">
                            <div style="width: 190px" class="center-div">利润率：</div>
                            <el-input
                                    placeholder="请输入内容"
                                    v-model="input"
                                    clearable>
                            </el-input>
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px" class="center-div">
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
                                label="加拿大"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="mexico"
                                label="墨西哥"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="england"
                                label="英国"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="france"
                                label="法国"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="germany"
                                label="德国"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="italy"
                                label="意大利"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="spain"
                                label="西班牙"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="netherlands"
                                label="荷兰"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="sweden"
                                label="瑞典"
                                show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                                prop="japanese"
                                label="日本"
                                show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                </el-card>

                
                <el-card shadow="hover" class="mgb20" style="height:720px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>产品介绍</b>
                        </el-col>
                        <el-col :span="24" style="margin: 5px" class="center-div">
                            <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 1300px">
                                <el-tab-pane label="中文" name="china" style="width: 1264px">
                                    产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    五点描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    详细描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="英语" name="english" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="法语" name="france" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="西班牙语" name="spain" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="意大利语" name="italian" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="德语" name="germany" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="荷兰语" name="dutch" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="瑞典语" name="sweden" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="波兰语" name="polish" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="日语" name="japanese" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="印度语" name="India" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                                <el-tab-pane label="阿拉伯语" name="arabic" style="width: 1264px">产品标题：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    关键字：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    重点声明：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                    产品描述：
                                    <el-button type="primary" round>一键翻译</el-button>
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea2">
                                    </el-input>
                                </el-tab-pane>
                            </el-tabs>
                        </el-col>
                    </el-row>
                </el-card>
                <el-card shadow="hover" class="mgb20" style="height:1280px;">
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                            <b>规格变体</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px" class="center-div">
                            <div style="width: 190px">变体参数：</div>
                            <el-button type="primary" round @click="dialogVisible = true">添加/更改</el-button>
                            <el-dialog title="变体参数" width="50%" :modelValue=dialogVisible
                                       @close="closeDialogAddgsVisible">
                                <el-form :inline="true" label-width="80px">
                                    <el-form-item label="颜色" label-width="300px">
                                    </el-form-item>
                                    <el-form-item label="尺寸" label-width="300px">
                                    </el-form-item>
                                    <el-form-item label="结果">
                                        <el-input style="width: 300px" type="textarea" :rows="4" placeholder="请输入内容"
                                                  v-model="textarea"></el-input>
                                    </el-form-item>
                                    <el-form-item label="结果">
                                        <el-input style="width: 300px" type="textarea" :rows="4" placeholder="请输入内容"
                                                  v-model="textarea"></el-input>
                                    </el-form-item>
                                    <el-form-item label="颜色快速选择" label-width="100px">
                                        <el-button size="small" round>米色</el-button>
                                        <el-button size="small" round>黑色</el-button>
                                        <el-button size="small" round>蓝色</el-button>
                                        <el-button size="small" round>青铜</el-button>
                                        <el-button size="small" round>棕色</el-button>
                                        <el-button size="small" round>铜</el-button>
                                        <el-button size="small" round>奶油</el-button>
                                        <el-button size="small" round>金</el-button>
                                        <el-button size="small" round>绿色</el-button>
                                        <el-button size="small" round>灰色</el-button>
                                        <el-button size="small" round>金属</el-button>
                                        <el-button size="small" round>多色</el-button>
                                        <el-button size="small" round>橙子</el-button>
                                        <el-button size="small" round>粉</el-button>
                                        <el-button size="small" round>紫色</el-button>
                                        <el-button size="small" round>红</el-button>
                                        <el-button size="small" round>银</el-button>
                                        <el-button size="small" round>白色</el-button>
                                        <el-button size="small" round>黄色</el-button>
                                    </el-form-item>
                                    <el-form-item label="尺寸快速选择" label-width="100px">
                                        <el-button size="small" round>A</el-button>
                                        <el-button size="small" round>B</el-button>
                                        <el-button size="small" round>C</el-button>
                                        <el-button size="small" round>D</el-button>
                                        <el-button size="small" round>E</el-button>
                                        <el-button size="small" round>F</el-button>
                                        <el-button size="small" round>G</el-button>
                                        <el-button size="small" round>H</el-button>
                                        <el-button size="small" round>I</el-button>
                                        <el-button size="small" round>J</el-button>
                                        <el-button size="small" round>K</el-button>
                                        <el-button size="small" round>L</el-button>
                                        <el-button size="small" round>M</el-button>
                                        <el-button size="small" round>N</el-button>
                                        <el-button size="small" round>O</el-button>
                                        <el-button size="small" round>P</el-button>
                                        <el-button size="small" round>Q</el-button>
                                        <el-button size="small" round>R</el-button>
                                        <el-button size="small" round>S</el-button>
                                        <el-button size="small" round>T</el-button>
                                    </el-form-item>

                                    <el-form-item  label-width="600px" label=" ">
                                        <el-button type="primary">确 定</el-button>
                                        <el-button @click="dialogVisible = false">取 消</el-button>
                                    </el-form-item>
                                </el-form>


                            </el-dialog>
                        </el-col>
                        <el-col :span="3" style="margin: 5px" class="center-div">
                            <el-button type="primary" round>保存修改</el-button>

                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>
                        <el-col :span="2" style="margin: 5px;" class="center-div">
                            <b>颜色(color)</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px;" class="center-div">
                            Red Brown Black Orange
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="2" style="margin: 5px" class="center-div">
                        </el-col>

                        <el-col :span="2" style="margin: 5px;" class="center-div">
                            <b>尺寸(sizeNam)</b>
                        </el-col>
                        <el-col :span="4" style="margin: 5px;" class="center-div">
                            S M 4XL 7XL 5XL XXL
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-table
                                ref="multipleTable"
                                :data="variantTable"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    prop="id"
                                    label="序号"
                                    width="60">
                            </el-table-column>
                            <el-table-column
                                    prop="variantName"
                                    label="变体组合"
                                    width="120">
                            </el-table-column>
                            <el-table-column
                                    label="SKU修正">
                                <template #default="scope">
                                    <el-input size="small" v-model="scope.row.variantSKU"/>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="加价(人民币)">
                                <template #default="scope">
                                    <el-input size="small" v-model="scope.row.variantAddMoney"/>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="库存">
                                <template #default="scope">
                                    <el-input size="small" v-model="scope.row.inventory"/>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="UPC/EAN">
                                <template #default="scope">
                                    <el-input size="small" v-model="scope.row.variantUPCEAN"/>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="operate"
                                    width="60"
                                    label="操作"
                                    show-overflow-tooltip>
                                <el-link type="danger">删除</el-link>
                            </el-table-column>
                            <el-table-column
                                    prop="selectPhoto"
                                    label="选择图片"
                                    width="200"
                                    show-overflow-tooltip>
                                <el-button type="primary" size="mini" round @click="dialogVisible2 = true">选择图片</el-button>
                                <el-button type="primary" size="mini" round>一键添加</el-button>
                            </el-table-column>
                            <el-table-column
                                    prop="hasPhoto"
                                    label="已选图片"
                                    show-overflow-tooltip>

                            </el-table-column>

                        </el-table>
                    </el-row>
                    <el-dialog title="选择图片" width="40%" :modelValue=dialogVisible2
                               @close="closeDialogAddgsVisible">
                        <div>

                        <el-image style="width: 50px; height: 50px; margin: 10px;border: 2px solid red;"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px "
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        <el-image style="width: 50px; height: 50px; margin: 10px"
                                  src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'>
                        </el-image>
                        </div>
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary">确 定</el-button>
                    </el-dialog>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    import Schart from "vue-schart";
    import {reactive, ref} from "vue";

    export default {
        name: "productInner",
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
            const dialogVisible = ref(false);
            const dialogVisible2 = ref(false);
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
                dialogVisible2,
                handleClick,
                activeName,
                variantTable,
                handleSearch,
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
