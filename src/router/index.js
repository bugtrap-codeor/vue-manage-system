import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import {userInfo} from "../utils/userInfo"
import store from "vuex"
// import { useStore } from "vuex";

const routes = [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: "/inner",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/allProduct",
                name: "allProduct",
                meta: {
                    title: '所有商品'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/product/AllProduct.vue")
            }, {
                path: "/myProduct",
                name: "myProduct",
                meta: {
                    title: '我的产品'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/product/MyProduct.vue")
            }, {
                path: "/myUpload",
                name: "myUpload",
                meta: {
                    title: '我的上传'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/MyUpload.vue")
            }, {
                path: "/allUpload",
                name: "allUpload",
                meta: {
                    title: '所有上传'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/AllUpload.vue")
            }, {
                path: "/myBuy",
                name: "myBuy",
                meta: {
                    title: '我的订单'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/buy/MyBuy.vue")
            }, {
                path: "/allBuy",
                name: "allBuy",
                meta: {
                    title: '所有订单'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/buy/AllBuy.vue")
            }, {
                path: "/companyManage",
                name: "companyManage",
                meta: {
                    title: '公司管理'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/company/CompanyManage.vue")
            }, {
                path: "/authorization",
                name: "authorization",
                meta: {
                    title: '授权'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/Authorization.vue")
            }, {
                path: "/recharge",
                name: "recharge",
                meta: {
                    title: '充值'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/Recharge.vue")
            }, {
                path: "/reportForm",
                name: "reportForm",
                meta: {
                    title: '报表'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/ReportForm.vue")
            }, {
                path: "/collect",
                name: "collect",
                meta: {
                    title: '采集商品'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/Collect.vue")
            }, {
                path: "/productRecycling",
                name: "productRecycling",
                meta: {
                    title: '产品回收站'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/product/ProductRecycling.vue")
            }, {
                path: "/uploadProduct",
                name: "uploadProduct",
                meta: {
                    title: '上传商品'
                },
                component: () => import ( /* webpackChunkName: "table" */ "../views/product/UploadProduct.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/Tabs.vue")
            }, {
                path: "/companyInner",
                name: "companyInner",
                meta: {
                    title: '公司详情'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/inner/CompanyInner.vue")
            }, {
                path: "/companyCreate",
                name: "companyCreate",
                meta: {
                    title: '公司创建'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/company/CompanyCreate.vue")
            }, {
                path: "/memberCreate",
                name: "memberCreate",
                meta: {
                    title: '成员创建'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/company/MemberCreate.vue")
            }, {
                path: "/buyInner",
                name: "buyInner",
                meta: {
                    title: '订单详情'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/inner/BuyInner.vue")
            }, {
                path: "/ean",
                name: "ean",
                meta: {
                    title: 'EAN生成'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/EAN.vue")
            }
            // , {
            //     path: "/donate",
            //     name: "donate",
            //     meta: {
            //         title: '鼓励作者'
            //     },
            //     component: () => import ( /* webpackChunkName: "donate" */ "../views/Donate.vue")
            // }, {
            //     path: "/permission",
            //     name: "permission",
            //     meta: {
            //         title: '权限管理',
            //         permission: true
            //     },
            //     component: () => import ( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            // }, {
            //     path: "/i18n",
            //     name: "i18n",
            //     meta: {
            //         title: '国际化语言'
            //     },
            //     component: () => import ( /* webpackChunkName: "i18n" */ "../views/I18n.vue")
            // }, {
            //     path: "/upload",
            //     name: "upload",
            //     meta: {
            //         title: '上传插件'
            //     },
            //     component: () => import ( /* webpackChunkName: "upload" */ "../views/Upload.vue")
            // }, {
            //     path: "/icon",
            //     name: "icon",
            //     meta: {
            //         title: '自定义图标'
            //     },
            //     component: () => import ( /* webpackChunkName: "icon" */ "../views/Icon.vue")
            // }
            , {
                path: '/productInner',
                name: 'productInner',
                meta: {
                    title: '商品详情'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/inner/ProductInner.vue')
            }
            , {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/404.vue')
            }
            , {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */ '../views/403.vue')
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            },
            // {
            //     path: '/editor',
            //     name: 'editor',
            //     meta: {
            //         title: '富文本编辑器'
            //     },
            //     component: () => import (/* webpackChunkName: "editor" */ '../views/Editor.vue')
            // }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
//

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} | vue-manage-system`;
//     const role = localStorage.getItem('ms_username');
//     if (!role && to.path !== '/login') {
//         next('/login');
//     } else if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin'
//             ? next()
//             : next('/403');
//     } else {
//         next();
//     }
// });

export default router;