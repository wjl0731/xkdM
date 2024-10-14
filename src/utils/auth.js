
const SchoolInfo = 'SCHOOL-INFO'
// const UserInfo = 'USER-INFO'

// export function getInfo() {
//     return uni.getStorageSync(UserInfo)
// }
// export function setUserInfo(info) {
//     return uni.setStorage({
//         key: UserInfo,
//         data: info
//     })
// }

// export function getSchoolInfo() {
//     return uni.getStorageSync(SchoolInfo)
// }
// export function setSchoolInfo(info) {
//     return uni.setStorage({
//         key: SchoolInfo,
//         data: info
//     })
// }

export default class storage {
    constructor() {
    }

    getSchoolInfo() {
        return uni.getStorageSync(SchoolInfo);
    }

    setSchoolInfo(info) {
        return uni.setStorage({
            key: SchoolInfo,
            data: info
        })
    }
}

//   const storage = new Storage();
//   export default storage;
