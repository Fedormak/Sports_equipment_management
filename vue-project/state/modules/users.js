import instance from "./../axios.js"

const moduleUsers = {
    state: () => ({
        userInSys: null,
        loginWriteUser: "",
        passwordWriteUser: "",
    }),
    getters: {
        isAuth (state) {
            return state.userInSys !== null;
        },
        getUser(state){
            return state.userInSys
        },
        isAdmin (state) {
            if (state.userInSys !== null && state.userInSys.permission_ === "admin") {
                return true
            }
            return false
        },
        // getInventory: (state) => (user_id) => {
        //     const user = state.users.find(user => user.id === user_id);
        //     return user.inventory
        // },
        // getUserApplication: (state) => (user_id) => {
        //     const user = state.users.find(user => user.id === user_id);
            
        //     return user.application
        // },
        // getUsersWithPin: (state) => (id) => {
        //     return state.users.filter(user => {
        //         return Object.values(user.inventory).some(item => item.id === id);
        //     });
        // },


    },
    mutations: {
        dataForAuth (state, datefromVue) {

            state.loginWriteUser = datefromVue.login
            state.passwordWriteUser = datefromVue.password

        },
        
        logout (state) {
            state.userInSys = null

        },
        addToApplicationElement(state, date){
            const user = state.user.find(user => user.id === date[1])

            user.breakdown_complaints.push(data[0])
        },
        pinToUserEqupment (state, date){
            const user = state.users.find(user => user.id === date[1]);
            user.inventory.push(date[0]) 
        },
        SET_DATA_USER(state, data){
            state.userInSys = data
            
        }
        
    },
    actions: {
        async login({ state, commit }) {
            try {
              const response = await instance.post('/auto_user', {
                login_: state.loginWriteUser,
                password_: state.passwordWriteUser,
              });
               commit("SET_DATA_USER", response.data)
               return true
            } catch (error) {
              console.error('Ошибка при загрузке данных:', error);
              return false
            }
          },
        async register({state}) {
            try {
                const respons = await instance.post('/reg_user ', {
                    login_: state.loginWriteUser,
                    password_: state.passwordWriteUser
                })
            } catch (error) {
                console.error("Ошибка при регистрации:", error)
            }
        }
    }
}

export default moduleUsers