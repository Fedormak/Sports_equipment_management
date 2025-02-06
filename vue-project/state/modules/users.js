const moduleUsers = {
    state: () => ({
        loginUser: {
            id: 4,
            userName: "EmilyWhite",
            userLogin: "emilywhite",
            password: "zxcvb",
            permission: "admin"
        },
        users:  [
            {
                id: 1,
                userName: "JohnDoe",
                userLogin: "johndoe",
                password: "12345",
                inventory: {},
                permission: "admin"
            },
            {
                id: 2,
                userName: "JaneSmith",
                userLogin: "janesmith",
                password: "abcde",
                inventory: {},
                permission: "user"
            },
            {
                id: 3,
                userName: "MikeBrown",
                userLogin: "mikebrown",
                password: "qwert",
                inventory: {},
                permission: "user"
            },
            {
                id: 4,
                userName: "EmilyWhite",
                userLogin: "emilywhite",
                password: "zxcvb",
                inventory: {},
                permission: "admin"
            },
            {
                id: 5,
                userName: "ChrisGreen",
                userLogin: "chrisgreen",
                password: "asdfg",
                inventory: {},
                permission: "user"
            },
            {
                id: 6,
                userName: "SarahBlack",
                userLogin: "sarahblack",
                password: "123ab",
                inventory: {},
                permission: "user"
            },
            {
                id: 7,
                userName: "DavidBlue",
                userLogin: "davidblue",
                password: "pass1",
                inventory: {},
                permission: "admin"
            },
            {
                id: 8,
                userName: "LauraGray",
                userLogin: "lauragray",
                password: "hello",
                inventory: {},
                permission: "user"
            }]
    }),
    getters: {
        isAuth (state) {
            let n = Object.keys(state.loginUser).length
            return n > 0
        },
        isStatus (state) {
            if (state.loginUser > 0) {
                return state.loginUser.permission
            }
            return null
            
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
            console.log("logout")
        },
        getInventory(state, user_id){
            const user = state.users.find(user => user.id === user_id);
            return user.inventory
        },
        getUsersHaveName(state, name) {
            const users = state.users.find(user => user.inventory.find(stuf => stuf.name == name))
            return users
        },
        isAuthmm (state) {
            return state.isAuthenticated
        }
    }
}

export default moduleUsers