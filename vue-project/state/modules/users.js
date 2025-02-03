const moduleUsers = {
    state: () => ({
        isAuthenticated: false,
        loginUser: {},
        users:  [
            {
                id: 1,
                userName: "JohnDoe",
                userLogin: "johndoe",
                password: "12345",
                permission: "admin"
            },
            {
                id: 2,
                userName: "JaneSmith",
                userLogin: "janesmith",
                password: "abcde",
                permission: "user"
            },
            {
                id: 3,
                userName: "MikeBrown",
                userLogin: "mikebrown",
                password: "qwert",
                permission: "user"
            },
            {
                id: 4,
                userName: "EmilyWhite",
                userLogin: "emilywhite",
                password: "zxcvb",
                permission: "admin"
            },
            {
                id: 5,
                userName: "ChrisGreen",
                userLogin: "chrisgreen",
                password: "asdfg",
                permission: "user"
            },
            {
                id: 6,
                userName: "SarahBlack",
                userLogin: "sarahblack",
                password: "123ab",
                permission: "user"
            },
            {
                id: 7,
                userName: "DavidBlue",
                userLogin: "davidblue",
                password: "pass1",
                permission: "admin"
            },
            {
                id: 8,
                userName: "LauraGray",
                userLogin: "lauragray",
                password: "hello",
                permission: "user"
            }]
    }),
    getters: {
        isAuth (state) {
            console.log(state.isAuthenticated)
            return state.isAuthenticated
        }
    },
    mutations: {
        login (state, datefromVue) {

            const user = state.users.find(user => user.userLogin === datefromVue.login);

            if (user.password === datefromVue.password) {
                state.isAuthenticated = true
                state.loginUser = user
            }
        },
        logout (state) {
            state.isAuthenticated = false
            state.loginUser = {}
            console.log("fff")
        },
        isAuthmm (state) {
            return state.isAuthenticated
        }
    }
}

export default moduleUsers