/**
  * 提示框
  * @param {String}  message   通知的文本消息
  * @param {Void}  action   通知消失后触发的方法
  * @param {Number}  duration   显示时间
  * @param {Boolean}  mask   是否显示遮罩
  * @param {String}  icon   图标
  */
export const msg = (title, action, duration=1600, mask=false, icon='none')=>{
	if(!title) return;
	uni.showToast({
		title,
		duration,
		mask,
        icon
	});
    if (duration && action) setTimeout(action, duration)
}

// 获取上一页的数据
export const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	return prePage.$vm;
}
/**
  * 模态对话框
  * @param {String}  title   对话框的标题
  * @param {String}  message   对话框的文本消息
  * @param {Boolean}  showCancel   对话框是否显示取消按钮
  */
export const showModal = (title,content,showCancel=false) =>{
	return new Promise((resolve,reject)=>{
		uni.showModal({
			title: title||'提示',
			content,
			showCancel,
			success: function (res) {
				if (res.confirm) {
					resolve()
				} else if (res.cancel) {
					reject()
				}
			}
		});
	})
}
