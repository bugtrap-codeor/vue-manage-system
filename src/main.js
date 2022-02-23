import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
import Axios from 'axios'
import {userInfo} from "./utils/userInfo";
/*设置全局axios，设置后即可在其它vue中直接使用$axios */
Axios.defaults.withCredentials = false;
Axios.defaults.headers.post["Content-Type"] = "application/json";

// router.beforeEach((to, from, next) => {
//     if (to.path === "/login") {
//         return next();
//     }
//     if (!window.sessionStorage.getItem("tokenStr")) {
//         return next("/login")
//     } else {
//         userInfo(store);
//         next();
//     }
// });

const app = createApp(App)
installElementPlus(app)
app.use(store)
    .use(router)
    .mount('#app')
app.config.globalProperties.$axios=Axios;
