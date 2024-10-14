<template>
	<view class="nodata-cnt">
		<image class="uni-image" src="../../static/nodata.png" mode="widthFix"></image>
		<view class="nodata-txt">暂无数据</view>
	</view>
</template>

<script>
export default {
    name:'Nodata',
    data(){
        return{}
    },
    // mounted() {
    //     console.log(this.nodataStyle);
    // }
}
</script>

<style scoped lang="scss">
.nodata-cnt{
    // transform: scale(0.1);
	text-align: center;
	padding-top: 120rpx;
	.uni-image{
		width: 260rpx;
		height: 260rpx;
	}
	.nodata-txt{
		font-size: 32rpx;
		color: #999;
		margin-top: 20rpx;
	}
}
</style>