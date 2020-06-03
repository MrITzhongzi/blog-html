import PersonCenterHeader from "./personCenterHeader";
import BasicInfo from "./personcentercontent/basicInfo";

const personCenterFrame = {
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        header: PersonCenterHeader,
        content: BasicInfo
    }
}

export default personCenterFrame;