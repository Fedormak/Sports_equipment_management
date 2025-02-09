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
            if (state.userInSys.permission === "admin") {
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


    },
    mutations: {
        login (state, datefromVue) {

            state.loginWriteUser = datefromVue.login
            state.passwordWriteUser = datefromVue.password
        },
        
        logout (state) {
            state.userInSys = null

        },
        addToApplicationElement(state, date){
            console.log(date)
            const user = state.user.find(user => user.id === date[1])

            user.breakdown_complaints.push(data[0])
        },
        pinToUserEqupment (state, date){
            const user = state.users.find(user => user.id === date[1]);
            user.inventory.push(date[0]) 
        },
        SET_DATA_USER(state, data){
            state.userInSys = data

            console.log(state.userInSys)
            
        }
        
    },
    actions: {
        async fetchData({ state, commit }) {
            try {
              const response = await instance.get('/auto_user', { params:{
                login_: state.loginWriteUser,
                password_: state.passwordWriteUser,
              }
              });
               commit("SET_DATA_USER", response.data)
            } catch (error) {
              console.error('Ошибка при загрузке данных:', error);
            }
          },
    }
}

export default moduleUsers