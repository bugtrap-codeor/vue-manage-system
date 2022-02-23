import {getRequest} from "../api";

export const userInfo = (store) => {
    if (store.userInfo) {
        return;
    }
    getRequest("/admin/info").then(resp => {
        if (resp) {
            console.log(resp)
            store.commit("initUserInfo", resp)
        }
    })
}