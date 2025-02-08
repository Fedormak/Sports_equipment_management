const modulereplacement = {
    state: () => ({
        replacement: []
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
    mutation: {
        createTicket(state, data) {
            newTicket = Object()
            newTicket.id = Object.keys(state.replacement).length + 1
            newTicket.name = data.name
            newTicket.discription = data.discription
            newTicket.status = "не просмотрен"
            newTicket.idEquipment = data.idEquipment
            newTicket.idCreater = data.user

            state.replacement.push(newTicket)
        },
        uploadTicket(state, data){
            let newTicket = state.find(i => i.id == data.id)

            newTicket.name = data.name
            newTicket.discription = data.discription
            newTicket.status = "не просмотрен"
            newTicket.idEquipment = data.idEquipment
            newTicket.idCreater = data.user
        }
    }

}