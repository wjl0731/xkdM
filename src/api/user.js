import request from '@/utils/request'
import {
  login,
  getschoolbyid,
  parentslogin,
  getclassbyschid
} from './api_path';

// 登录
export function Login(data) {
    return request({
        url:login,
        method:'post',
        params:data,
        // requestTime:0,
        // loading:true
    });
}
export function GetSchoolbyid(data) {
    return request({
        url:getschoolbyid,
        method:'post',
        params:data,
    });
}
export function ParentsLogin(data) {
    return request({
        url:parentslogin,
        method:'get',
        params:data,
    });
}
export function GetClassbySchid(data) {
    return request({
        url:getclassbyschid,
        method:'get',
        params:data,
    });
}