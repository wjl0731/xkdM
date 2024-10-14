import { defineStore } from 'pinia';
import Storage from '@/utils/auth' //持久化处理
const storage = new Storage();
const useUserStore = defineStore('useUserStore', {
    state: () => ({
        schoolInfo: storage.getSchoolInfo(),
        info: {},
    }),
    getters: {
        getSchoolInfo: (state) => state.schoolInfo,
        getInfo: (state) => state.info,
    },
    actions: {
        setSchoolInfo(value) {
            this.schoolInfo = value;
            storage.setSchoolInfo(value);
        },
        setInfo(value) {
            this.info = value;
        },
    },
});

export default useUserStore;