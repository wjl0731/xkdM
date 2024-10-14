<template>
    <view class="content">
        <!-- <u-navbar title="夫未来" bgColor="#001f3f"></u-navbar> -->
        <view class="notice">
            <u-notice-bar speed="20" fontSize="14" :text="notice"></u-notice-bar>
        </view>
        <!-- <view class="cu-list">
            <view class="cu-item" v-for="(item,index) in categories" :key="index" @click="goCategorieslist(item)" :data-mid="item.mid">
                <view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
                    <image :src="imgUrl+'首页/'+item.cuIcon+'.png'" style="width: 70rpx;height: 70rpx;" ></image>
                </view>
                <text>{{item.name}}</text>
            </view>
        </view> -->
    </view>
</template>

<script setup>
import { useUserState } from '@/store';

import { ref, onMounted, getCurrentInstance } from 'vue'
const TestState = useUserState();
const { proxy } = getCurrentInstance();
const notice = ref('班级通知内容')
const title = ref('Hello666')
const categories = ref([
        {
            cuIcon: '视频',
            name: '视频',
            "page":"1",
            "type":"tabbar"
        }, {
            cuIcon: '练习',
            color: 'orange',
            mid: '2',
            name: '练习',
            "page":"2",
            "type":"tabbar"
        }, {
            cuIcon: '错题本',
            color: 'yellow',
            mid: '3',
            name: '错题本',
            "page":"../cuotiben/index",
            "type":"page"
        }, {
            cuIcon: '试卷',
            color: 'red',
            mid: '4',
            name: '试卷',
            "page":"../index/gkzt",
            "type":"page",
            "info":"请下载APP或者前往小程序"
        }, {
            cuIcon: '心灵',
            color: 'cyan',
            mid: '6',
            name: '心灵导读',
            page:"../index/heartFM",
            type:"page"
        }
    ])
    // TestState.setTest1(newDoneDuration);  //直接使用pinia中的函数
    // console.log('TestState.state',TestState.getTest12)  //读取pinia
    onMounted(() => {
        // proxy.$api.msg('123123',()=>{
        //     console.log('成功!');
        // })
        // console.log('TestState.state',TestState.getToken)
        // postRequest().then(res=>{
        //     console.log('res',res.base_url)
        // })
    })
</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .notice{
        width: 700rpx;
    }
}
</style>
