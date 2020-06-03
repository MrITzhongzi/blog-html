const computerLoginModule = {
    state: {
        phone: "",
        password: ""
    },
    mutations: {
        editPhone(state, value){
             state.phone = value;
        },
        editPwd(state, value){
            state.password = value;
        },
        clear(state){
            state.phone = "";
            state.password = "";
        }
    },
    actions: { },
    getters: { }
}

export default computerLoginModule;