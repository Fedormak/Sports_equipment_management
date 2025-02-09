import store from "./../store"

const modulereplacement = {
    state: () => ({
        replacement: [
            {
                id: 1,
                name: "Порванный мяч",
                description: "Мяч для футбола порвался во время игры.",
                status: "Ожидает ремонта",
                idEquipment: 1,
                idCreater: 3
              },
              {
                id: 2,
                name: "Сломанная ракетка",
                description: "Теннисная ракетка треснула в ручке.",
                status: "В процессе ремонта",
                idEquipment: 2,
                idCreater: 5
              },
              {
                id: 3,
                name: "Порванная сетка",
                description: "Сетка для волейбола порвалась в центре.",
                status: "Ожидает ремонта",
                idEquipment: 3,
                idCreater: 7
              },
              {
                id: 4,
                name: "Сломанный обруч",
                description: "Обруч для гимнастики деформировался.",
                status: "Ремонт завершён",
                idEquipment: 4,
                idCreater: 2
              } ,
              {
                id: 5,
                name: "Сломанный шлем",
                description: "Шлем для хоккея треснул после удара.",
                status: "Ожидает ремонта",
                idEquipment: 5,
                idCreater: 8
              },
              {
                id: 6,
                name: "Порванные перчатки",
                description: "Перчатки для бокса порвались на швах.",
                status: "В процессе ремонта",
                idEquipment: 6,
                idCreater: 4
              },
              {
                id: 7,
                name: "Сломанный велосипед",
                description: "Переднее колесо велосипеда погнулось.",
                status: "Ожидает ремонта",
                idEquipment: 7,
                idCreater: 6
              },
              {
                id: 8,
                name: "Сломанный тренажёр",
                description: "Тренажёр для жима сломался в механизме.",
                status: "Ремонт завершён",
                idEquipment: 8,
                idCreater: 1
              },
        ]
    }),
    getters: {
      getAllticket(state) {
            return state.replacement
      },
      getTicketById: (state) => (byId) =>{
            let ticket = state.find(i => i.id == byId)
            return ticket
      },
      getTicketStatus: (state) => (byId) =>{
            let ticket = state.find(i => i.id === byId)
            return ticket.status
      }
    },
    mutations: {
        createTicket(state, data) {
            var newTicket = {
                id: Object.keys(state.replacement).length + 1,
                name: data.name,
                description: data.discription,
                status: data.status,
                idEquipment: data.idEquipment,
                idCreater: data.idCreater
            }

            state.replacement.push(newTicket)

            let user = store.getters.getAllUsers.find(i => i.id === data.idCreater)

            user.application.push(newTicket)
        },
        uploadTicket(state, data){
            let newTicket = state.find(i => i.id == data.id)

            newTicket.name = data.name
            newTicket.discription = data.discription
            newTicket.status = "не просмотрен"
            newTicket.idEquipment = data.idEquipment
            newTicket.idCreater = data.user
        },
        deleteTicket(state, data){
          let state2 = state.replacement.filter(i => i.id !== data.id)

          state.replacement = state2

          let user = store.getters.getAllUsers.find(i => i.id === data.idCreater)

          console.log(user, data.id )

          let ticket = user.application.find(i => i.id === data.id)

          ticket.status = "Завершён"
        }
    }

}

export default modulereplacement