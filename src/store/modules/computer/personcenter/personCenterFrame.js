import PersonCenterHeader from "./personCenterHeader";
import BasicInfo from "./personcentercontent/basicInfo";
import MyAttentionPeopleModule from "./personcentercontent/myAttentionPeople";

const personCenterFrame = {
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        header: PersonCenterHeader,
        content: BasicInfo,
        attention: MyAttentionPeopleModule
    }
}

export default personCenterFrame;