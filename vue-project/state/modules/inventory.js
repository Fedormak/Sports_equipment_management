import instance from "../axios"
import moduleUsers from "./users"

const moduleInventory = {
    state: () => ({
        inventory: []
    }),
    getters: {
        inventory(state) {
            return state.inventory
        },
        iflenghtUsers (state) {
            let n = Object.keys(state.inventory).length
            return n
        },
        takeEqupmentById: (state) => (idInventory) =>{

            const Equpment = state.inventory.find(i => i.id === idInventory);
            
            return Equpment
        },
        searchEqupment(state, name){
            const eq = state.inventory.find(eq => eq.name  === name);
            return eq
        },
    },
    mutations: {
        createNewEquipment(state, data) {
            
            var NewEquipment = {
                id: data.id,
                name: data.name,
                type: data.type,
                status: data.status
            }

            if (NewEquipment.status === ""){
                NewEquipment.status = "новый"
            }

            state.inventory.push(NewEquipment)
        },
        updateEquipment(state, data) {
            const Equpment = state.inventory.find(i => i.id === data.id);
            
            Equpment.name = data.name
            Equpment.type = data.type
            Equpment.status = data.status
        }
    },
    actions: {
        async allEquipment({state}) {
            try {
                const response = await instance.get("/items")

                state.inventory = response.data

                console.log(state.inventory)

            } catch (error) {
                console.error('reg failed:', error);
            }
        }
    }
}

export default moduleInventory;