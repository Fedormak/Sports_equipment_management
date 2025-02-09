const moduleUsers = {
    state: () => ({
        loginUser: {
            id: 4,
            userName: "EmilyWhite",
            userLogin: "emilywhite",
            password: "zxcvb",
            breakdown_complaints: [],
            application: [],
            inventory: [],
            permission: "admin"
        },
        users:  [
            {
                id: 1,
                userName: "JohnDoe",
                userLogin: "johndoe",
                password: "12345",
                application: [],
                breakdown_complaints: [
                    {
                    id: 8,
                    name: "Сломанный тренажёр",
                    description: "Тренажёр для жима сломался в механизме.",
                    status: "Ремонт завершён",
                    idEquipment: 8,
                    idCreater: 1
                  },
                ],
                inventory: [],
                permission: "admin"
            },
            {
                id: 2,
                userName: "JaneSmith",
                userLogin: "janesmith",
                password: "abcde",
                application: [],
                breakdown_complaints: [
                    {
                        id: 4,
                        name: "Сломанный обруч",
                        description: "Обруч для гимнастики деформировался.",
                        status: "Ремонт завершён",
                        idEquipment: 4,
                        idCreater: 2
                      }
                ],
                inventory: [],
                permission: "user"
            },
            {
                id: 3,
                userName: "MikeBrown",
                userLogin: "mikebrown",
                password: "qwert",
                application: [],
                breakdown_complaints: [{
                    id: 1,
                    name: "Порванный мяч",
                    description: "Мяч для футбола порвался во время игры.",
                    status: "Ожидает ремонта",
                    idEquipment: 1,
                    idCreater: 3
                  }],
                inventory: [],
                permission: "user"
            },
            {
                id: 4,
                userName: "EmilyWhite",
                userLogin: "emilywhite",
                password: "zxcvb",
                application: [],
                breakdown_complaints: [
                    {
                        id: 6,
                        name: "Порванные перчатки",
                        description: "Перчатки для бокса порвались на швах.",
                        status: "В процессе ремонта",
                        idEquipment: 6,
                        idCreater: 4
                      },
                ],
                inventory: [],
                permission: "admin"
            },
            {
                id: 5,
                userName: "ChrisGreen",
                userLogin: "chrisgreen",
                password: "asdfg",
                application: [],
                breakdown_complaints: [
                    {
                    id: 5,
                    name: "Сломанный шлем",
                    description: "Шлем для хоккея треснул после удара.",
                    status: "Ожидает ремонта",
                    idEquipment: 5,
                    idCreater: 8
                    },
                    {
                        id: 2,
                        name: "Сломанная ракетка",
                        description: "Теннисная ракетка треснула в ручке.",
                        status: "В процессе ремонта",
                        idEquipment: 2,
                        idCreater: 5
                      }
                ],
                inventory: [],
                permission: "user"
            },
            {
                id: 6,
                userName: "SarahBlack",
                userLogin: "sarahblack",
                password: "123ab",
                application: [],
                breakdown_complaints: [
                    {
                        id: 7,
                        name: "Сломанный велосипед",
                        description: "Переднее колесо велосипеда погнулось.",
                        status: "Ожидает ремонта",
                        idEquipment: 7,
                        idCreater: 6
                      },
                ],
                inventory: [
                    {
                        id: 2,
                        name: "Футбольные бутсы",
                        type: "футбол",
                        count: 15,
                        status: "используемый"
                    },
                ],
                permission: "user"
            },
            {
                id: 7,
                userName: "DavidBlue",
                userLogin: "davidblue",
                password: "pass1",
                application: [],
                breakdown_complaints: [{
                    id: 3,
                    name: "Порванная сетка",
                    description: "Сетка для волейбола порвалась в центре.",
                    status: "Ожидает ремонта",
                    idEquipment: 3,
                    idCreater: 7
                  }],
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
                application: [],
                breakdown_complaints: [],
                inventory: [],
                permission: "user"
            }]
    }),
    getters: {
        getAllUsers(state) {
            return state.users
        },
        isAuth (state) {
            let n = Object.keys(state.loginUser).length
            return n > 0
        },
        getUserId(state){
            return state.loginUser.id
        },
        isAdmin (state) {
            if (Object.keys(state.loginUser).length > 0 && state.loginUser.permission === "admin") {
                return true
            }
            return false
        },
        getInventory: (state) => (user_id) => {
            const user = state.users.find(user => user.id === user_id);
            return user.inventory
        },
        getUserApplication: (state) => (user_id) => {
            const user = state.users.find(user => user.id === user_id);
            
            return user.application
        },
        getUserTicket: (state) => (id) =>{
            let user = state.users.find(i => i.id === id)
            return Object.values(user.breakdown_complaints)
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
        addToApplicationElement(state, date){
            console.log(date)
            const user = state.user.find(user => user.id === date[1])

            user.breakdown_complaints.push(data[0])
        },
        pinToUserEqupment (state, date){
            const user = state.users.find(user => user.id === date[1]);
            user.inventory.push(date[0])
            
        }
        
    }
}

export default moduleUsers