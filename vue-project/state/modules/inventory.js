import instance from "./../axios.js"

const moduleInventory = {
    state: () => ({
       inventory: [],
       forNewEqupment: {
        name_item: null,
        count: null
       },
       forUpdateEqupment:{
        name_item: null,
        item_id: null,
        status: null
       },
       dataOfNewEqupment: null
    }),
    getters: {
        inventory(state) {
            return state.inventory
        },
        takeEqupmentById: (state) => (idInventory) =>{
            
            const Equpment = state.inventory.find(i => i.item_id === parseInt(idInventory));
            
            return Equpment
        },
        UploadNewEqupment: (state)=> (data) =>{
            state.dataOfNewEqupment = data
        },
        getDataOfNewEqupment(state) {
            return state.dataOfNewEqupment
        },
    },
    mutations: {
        createNewEquipment(state, data) {
            state.forNewEqupment.count = data.count
            state.forNewEqupment.name_item = data.name
        },
        updateEquipment(state, data) {
            state.forUpdateEqupment.name_item = data.name_item,
            state.forUpdateEqupment.item_id = data.item_id,
            state.forUpdateEqupment.status = data.status
        }
    },
    actions: {
        async getAllTicket({state}){
            try {
                const respons = await instance.get("/items")

                state.inventory = respons.data
            } catch (error) {
                console.error("Ошибка в получении тикетов: ", error)
            }
        },
        async NewEqupment({state, commit, getters}){
            try {
                state.dataOfNewEqupment = null
                const respons = await instance.post("/add_item", state.forNewEqupment)

                getters.UploadNewEqupment(respons.data)

            } catch (error) {
                console.error("Ошибка создания еденицы инветоря", error)
            }
        },
        async UpdateEquipment({dispatch, state}){
            try {
                const respons = await instance.put("/reduct_item", state.forUpdateEqupment)

                dispatch("getAllTicket")

            } catch (error) {
                console.error("Ошибка создания еденицы инветоря", error)
            }
        },
        async delItem({dispatch}, datas){
            try{
                console.log(datas)
                const respons = await instance.delete("/delete_item", 
                    {
                        data: datas // Отправка ID элемента в теле запроса
                    }
                )

                dispatch("getAllTicket")
            } catch (erro) {
                console.error(erro)
            }
        }
    }

}

export default moduleInventory;