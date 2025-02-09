import store from "../store"

const moduleApplication = {
    state: () => ({
        application: [
            { id: 1, name: "Футбольный мяч", discription: "Используется для игры в футбол или выполнения упражнений с мячом.", IdItems: 2, IdUser: 5 },
            { id: 2, name: "Скакалка", discription: "Для разминки, кардио-тренировок и развития координации.", IdItems: 5, IdUser: 3 },
            { id: 3, name: "Гимнастический обруч", discription: "Можно использовать для упражнений на гибкость и укрепление тела.", IdItems: 7, IdUser: 8 },
            { id: 4, name: "Теннисная ракетка", discription: "Используется для игры в теннис или обучения координации движения рук.", IdItems: 4, IdUser: 2 },
            { id: 5, name: "Баскетбольный мяч", discription: "Подходит для игры в баскетбол или тренировок меткости.", IdItems: 1, IdUser: 6 },
            { id: 6, name: "Конусы", discription: "Используются для создания препятствий и тренировок на скорость и ловкость.", IdItems: 8, IdUser: 1 },
            { id: 7, name: "Гимнастический коврик", discription: "Для выполнения разминок, растяжек и упражнений на полу.", IdItems: 3, IdUser: 7 },
            { id: 8, name: "Эспандер", discription: "Для укрепления мышц и выполнения силовых упражнений.", IdItems: 10, IdUser: 4 },
            { id: 9, name: "Шведская стенка", discription: "Используется для подтягиваний, растяжки и упражнений на силу.", IdItems: 6, IdUser: 3 },
            { id: 10, name: "Волейбольный мяч", discription: "Для игры в волейбол или тренировок подачи и приёма.", IdItems: 9, IdUser: 2 }
          ]
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
            
            let state2 = state.application.filter(i => i.id !== data.id)

            state.application = state2

            console.log(state.application)

            let item = store.getters.takeEqupmentById(data.id_items)

            let date = [item, data.id_user]
            store.commit("pinToUserEqupment", date)
        }
    }
}

export default moduleApplication