import config from "@/config/index.js";
import { useUserState } from '@/store';
import { msg } from '@/install/msg'
import { navReLaunch } from '@/install/navigate'

// 返回登录页面
const loginOut = ()=>{
	navReLaunch('/pages/login/login')
}

const UserState = useUserState();
// 定义请求地址
const BASE_URL = config.API_BASE

const Token = () => {
    return UserState.getToken;
}

const getHeaders = () => {
    const header = {
		"app-type": 'parents_mp',
		"token": Token(),
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    return header
}
// 加载动画
let loadingCount = 0; // 记录当前显示的 loading 数量
const showLoading = () => {
    if (loadingCount === 0) {
        uni.showLoading({
            title: '加载中...',
            mask: true
        });
    }
    loadingCount++;
};
const hideLoading = () => {
    loadingCount >0 && loadingCount--;
    if (loadingCount <= 0) {
        uni.hideLoading();
    }
};

// 网络请求
const request = (obj,timeout = 6000) => {
    obj.url = obj.url ?? ''; // 请求路径
    obj.method = obj.method ?? 'GET'; //请求方式
    obj.params = obj.params ?? {}; //请求携带的数据
    obj.header = getHeaders(); //请求头信息 content-type
    obj.requestTime = obj.requestTime ?? 200 ; //多久时间内完成网络请求，则不显示提示框
    obj.loading, //是否显示请求加载中

    //定义网络请求如果在一定时间内没有完成，则显示加载中提示框，默认时间为：500毫秒
    setTimeout(() => {
        if (obj.loading) {
            showLoading();
        }
    }, obj.requestTime);

    return new Promise((resolve, reject) => {
        uni.request({
            url:  BASE_URL + obj.url,
            method: obj.method,
            data: obj.params,
            header: obj.header,
            success: res => {
                // console.log('返回了什么？',BASE_URL);
                switch (res.statusCode){
                    case 200:
                        switch (res.data.status) {
                            case 1:
                                resolve(res.data);
                                break;
                            default:
                                msg(res.data.msg);
                                break;
                        }
                        break
                    case 206:
                        // store.dispatch('user/resetToken')
                        msg('账号已过期，需要重新登录',()=>{loginOut()})
                        break;
                    case 404:
                        msg('页面不存在')
                        break;
                    default:
                        msg('服务器异常！');
                        break;
                }
                reject(res)
            },
            fail: err => {
                msg('服务器异常,请检查网络是否正常');
                reject(err);
            },
            complete: () => {
                if (obj.loading) {
                    hideLoading();
                }
            }
        })
    });
}

export default request;