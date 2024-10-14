<template>
    <view class="content">
        <view class="item">
            <!--  @click="show = true" :value="className" -->
            <u-cell title="班级" isLink :clickable="false">
                <template #value>
                    <view v-if="calssList.length > 0" class="item-value">
                        <picker @change="bindPickerChange" range-key="class_name" :value="index" :range="calssList">
                            <view class="uni-input">{{calssList[index].class_name}}</view>
                        </picker>
                    </view>
                </template>
            </u-cell>
        </view>
        <view class="item">
            <u-cell title="姓名：">
                <template #value>
                    <view v-if="calssList.length > 0" class="item-value">
                        <u--input
                            border="none"
                            placeholder="请输入内容"
                            v-model="value"
                        ></u--input>
                    </view>
                </template>
            </u-cell>
        </view>

        <!-- <u-picker
            :show="show"
            :closeOnClickOverlay="true"
            :columns="calssList"
            keyName="class_name"
            @cancel="close"
            @close="close"
            @confirm="confirm"
        ></u-picker> -->
        <u-button type="primary" text="确定"></u-button>
    </view>
</template>

<script setup>
    // 验证登录功能
    import { GetSchoolbyid, ParentsLogin, GetClassbySchid } from '@/api/user.js'
    import { onLoad } from '@dcloudio/uni-app';
    import { useUserState } from '@/store';
    import { ref, getCurrentInstance, onMounted } from 'vue'
    const UserState = useUserState();
    const { proxy } = getCurrentInstance();
    const show = ref(false)
    const calssList = ref([])
    const index = ref(0)
    const className = ref('')
    onMounted(()=>{
        // console.log('UserState.getInfo--->',UserState.getSchoolInfo)
    })

    onLoad((options) => {
        const scene = options.scene || UserState.getSchoolInfo.id
        if(scene) {
            userLogin(scene)
            getClassList(scene)
            // 如果缓存没有学校的信息从接口获取
            if(UserState.getSchoolInfo.name) {
                uni.setNavigationBarTitle({
                    title:UserState.getSchoolInfo.name
                })
            }else{
                GetSchoolbyid({ school_id:scene }).then(res => {
                    console.log('获取学校的名字且更新缓存学校的名字');
                    UserState.setSchoolInfo({id:scene,name:res.data.names})
                    uni.setNavigationBarTitle({
                        title:res.data.names
                    })
                })
            }
        } else {
            proxy.$api.msg('未收到数据,请联系管理员',()=>{
                // 消失后触发
            })
        }
    })
    function close() {
        console.log('this.show',show.value)
        show.value = false
    }
    function confirm(e) {
        // console.log('index',e.indexs[0])
        // console.log('name',e.value[0])
        className.value = e.value[0].class_name
        show.value = false
    }
    // 登录拿到用户信息
    function userLogin(scene) {
        wx.login({
            success (res) {
                if (res.code) {
                    ParentsLogin({code:res.code,school_id:scene}).then(res=>{
                        UserState.setInfo(res.data)
                        // 绑定了就去首页
                        if(res.data.is_bing) {
                            proxy.$mHelper.navReLaunch("pages/index/index")
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    };
    function bindPickerChange(event) {
        console.log('params',event.detail)
        index.value = event.detail.value
    }
    function getClassList (scene) {
        GetClassbySchid({school_id:scene}).then((res)=>{
            calssList.value = res.data
            // calssList.value = [res.data]
        })
    }

</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.item{
    width: 710rpx;
    .item-value{
        width: 230rpx;
    }
}
  </style>
