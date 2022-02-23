<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
                 text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {computed, watch} from "vue";
    import {useStore} from "vuex";
    import {useRoute} from "vue-router";

    export default {
        setup() {
            const items = [
                {
                    icon: "el-icon-lx-calendar",
                    index: "1",
                    title: "产品",
                    subs: [
                        {
                            index: "/collect",
                            title: "采集商品",
                        },
                        {
                            index: "/myProduct",
                            title: "我的产品",
                        },
                        {
                            index: "/allProduct",
                            title: "所有商品",
                        },
                        {
                            index: "/productRecycling",
                            title: "产品回收站",
                        },
                    ],
                },
                {
                    icon: "el-icon-lx-calendar",
                    index: "2",
                    title: "订单",
                    subs: [
                        {
                            index: "/myBuy",
                            title: "我的订单",
                        },
                        {
                            index: "/allBuy",
                            title: "所有订单",
                        },
                    ],
                },
                {
                    icon: "el-icon-lx-calendar",
                    index: "3",
                    title: "上传",
                    subs: [
                        {
                            index: "/uploadProduct",
                            title: "上传商品",
                        },
                        {
                            index: "/myUpload",
                            title: "我的上传",
                        },
                        {
                            index: "/allUpload",
                            title: "所有上传",
                        },
                    ],
                },
                {
                    icon: "el-icon-lx-calendar",
                    index: "4",
                    title: "管理",
                    subs: [
                        {
                            index: "/companyManage",
                            title: "公司管理",
                        },
                        {
                            index: "/authorization",
                            title: "授权",
                        },
                        {
                            index: "/recharge",
                            title: "充值",
                        },
                        {
                            index: "/ean",
                            title: "EAN生成",
                        },
                    ],
                },
                {
                    icon: "el-icon-lx-cascades",
                    index: "/reportForm",
                    title: "报表",
                },


                // {
                //     icon: "el-icon-lx-cascades",
                //     index: "/table",
                //     title: "基础表格",
                // },
                // {
                //     icon: "el-icon-lx-copy",
                //     index: "/tabs",
                //     title: "tab选项卡",
                // },
                // {
                //     icon: "el-icon-lx-calendar",
                //     index: "3",
                //     title: "表单相关",
                //     subs: [
                //         {
                //             index: "/form",
                //             title: "基本表单",
                //         },
                //         {
                //             index: "/upload",
                //             title: "文件上传",
                //         },
                //         {
                //             index: "4",
                //             title: "三级菜单",
                //             subs: [
                //                 {
                //                     index: "/editor",
                //                     title: "富文本编辑器",
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     icon: "el-icon-lx-emoji",
                //     index: "/icon",
                //     title: "自定义图标",
                // },
                // {
                //     icon: "el-icon-pie-chart",
                //     index: "/charts",
                //     title: "schart图表",
                // },
                // {
                //     icon: "el-icon-lx-global",
                //     index: "/i18n",
                //     title: "国际化功能",
                // },
                // {
                //     icon: "el-icon-lx-warn",
                //     index: "7",
                //     title: "错误处理",
                //     subs: [
                //         {
                //             index: "/permission",
                //             title: "权限测试",
                //         },
                //         {
                //             index: "/404",
                //             title: "404页面",
                //         },
                //     ],
                // },
                // {
                //     icon: "el-icon-lx-redpacket_fill",
                //     index: "/donate",
                //     title: "支持作者",
                // },
            ];

            const route = useRoute();

            const onRoutes = computed(() => {
                return route.path;
            });

            const store = useStore();
            const collapse = computed(() => store.state.collapse);

            return {
                items,
                onRoutes,
                collapse,
            };
        },
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar > ul {
        height: 100%;
    }
</style>
