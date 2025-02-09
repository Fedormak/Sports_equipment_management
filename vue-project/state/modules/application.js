import store from "../store"

const moduleApplication = {
    state: () => ({
        application: []
    }),
    getters: {
        getAllApplication(state) {
            return state.application
        },
        getCountAplication(state){
            return Object.keys(state.application).length
        },
        getApplicationById: (state) => (id) => {
            let application = state.application.find(i => i.id === id)

            return application
        },
    },
    mutations: {
        createApplication(state, data) {
            var newApplication = {
                id: this.getters.getCountAplication + 1,
                name: data.name,
                discription: data.discription,
                idItems: data.id_items,
                idUser: data.id_user
            }

            state.application.push(newApplication)

            let user = store.getters.getAllUsers.find(i => i.id === data.id_user)

            user.application.push(newApplication)
        },
        doneApplication(state, data){
            state.application.splice(data.id - 1)

            let item = store.getters.takeEqupmentById(data.id_items)

            let date = [item, data.id_user]
            store.mutations.pinToUserEqupment(date)
        }
    }
}

export default moduleApplication