const computerRegisterModule = {
    state: {
        phone: "",
        password: "",
        repassword: "",
        nickname: "",
        username: ""
    },
    mutations: {
        editPhone(state, value){
            state.phone = value;
        },
        editPwd(state, value){
            state.password = value;
        },
        editRePwd(state, value){
            state.repassword = value;
        },
        editNickname(state, value){
            state.nickname = value;
        },
        editUsername(state, value){
            state.username = value;
        },
    },
    actions: {

    },
    getters: { }
}

export default computerRegisterModule;