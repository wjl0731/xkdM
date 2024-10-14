import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import { navTo, navBack, navReLaunch } from './install/navigate'
import { msg, showModal, prePage } from './install/msg'
//挂载pinia
import { createPinia } from 'pinia'
const pinia = createPinia()



import uviewPlus from 'uview-plus'

export function createApp() {
	const app = createSSRApp(App);
    app.config.globalProperties.$api = { msg, showModal, prePage };
    app.config.globalProperties.$mHelper = { navTo, navBack, navReLaunch };
    app.use(uviewPlus)
    app.use(pinia)
    // uni.$u.config.unit = 'rpx'
	return {
		app,
	};
}
