const computerLoginModule = {
    state: {
        phone: "",
        password: ""
    },
    mutations: {
        editPhone(state, value){
             console.log(state, value);
             state.phone = value;
        },
        editPwd(state, value){
            state.password = value;
        }
    },
    actions: { },
    getters: { }
}

export default computerLoginModule;