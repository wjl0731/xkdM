
export const navTo = (url)=>{
    uni.navigateTo({
        url:url,
    })
}

export const navBack = ()=>{
    uni.navigateBack();
}

export const navReLaunch = (url)=>{
    uni.reLaunch({
        url:url,
    })
}

