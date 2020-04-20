const computerRegisterModule = {
    state: {
        phone: "",
        password: "",
        repassword: ""
    },
    mutations: {
        editPhone(state, value){
            console.log(state, value);
            state.phone = value;
        },
        editPwd(state, value){
            state.password = value;
        },
        editRePwd(state, value){
            state.repassword = value;
        }
    },
    actions: { },
    getters: { }
}

export default computerRegisterModule;