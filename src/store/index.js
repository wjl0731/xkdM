import { createPinia } from 'pinia';
import useUserState from './modules/user';
// import useSubjectState from './modules/subject';
// import useChapterState from './modules/chapter';
// import useExamState from './modules/exam';
// import useBankState from './modules/bank';
// import useNewexamState from './modules/newexam';
const store = createPinia();
export {
    useUserState
};
export default store;
