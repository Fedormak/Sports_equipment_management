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
                inventory: [],
                permission: "admin"
            },
            {
                id: 2,
                userName: "JaneSmith",
                userLogin: "janesmith",
                password: "abcde",
                inventory: [],
                permission: "user"
            },
            {
                id: 3,
                userName: "MikeBrown",
                userLogin: "mikebrown",
                password: "qwert",
                inventory: [],
                permission: "user"
            },
            {
                id: 4,
                userName: "EmilyWhite",
                userLogin: "emilywhite",
                password: "zxcvb",
                inventory: [],
                permission: "admin"
            },
            {
                id: 5,
                userName: "ChrisGreen",
                userLogin: "chrisgreen",
                password: "asdfg",
                inventory: [],
                permission: "user"
            },
            {
                id: 6,
                userName: "SarahBlack",
                userLogin: "sarahblack",
                password: "123ab",
                inventory: [
                    {
                        id: 2,
                        name: "Футбольные бутсы",
                        type: "футбол",
                        count: 15,
                        status: "используемый"
                    }
                ],
                permission: "user"
            },
            {
                id: 7,
                userName: "DavidBlue",
                userLogin: "davidblue",
                password: "pass1",
                inventory: [
                    {
                        id: 2,
                        name: "Футбольные бутсы",
                        type: "футбол",
                        count: 15,
                        status: "используемый"
                    }
                ],
                permission: "admin"
            },
            {
                id: 8,
                userName: "LauraGray",
                userLogin: "lauragray",
                password: "hello",
                inventory: [],
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
        },
        getInventory: (state) => (user_id) => {
            const user = state.users.find(user => user.id === user_id);
            return user.inventory
        },
        getUsersWithPin: (state) => (id) => {
            return state.users.filter(user => {
                return Object.values(user.inventory).some(item => item.id === id);
            });
        },
        isAuthmm (state) {
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
            console.log("logout")
        },
        pinToUserEqupment (state, date){
            const user = state.users.find(user => user.id === date[1]);
            console.log(user)
            user.inventory.push(date[0])
            console.log(user.inventory)
            
        }
        
    }
}

export default moduleUsers