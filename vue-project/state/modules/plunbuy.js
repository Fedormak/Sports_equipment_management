import instance from "../axios"

const modulePlanBuy = {
    state:() => ({
        planBuy: null,
        forNewDataPlan: {
            price: null,
            name_item: null,
            name_provider: null
        }
    }),
    getters:{
        updateDataPlan:(state) => (data) => {
            console.log(data)
            state.forNewDataPlan.price = Number(data.price)
            state.forNewDataPlan.name_item = data.name_item
            state.forNewDataPlan.name_provider = data.name_provider
        },
        getPlanBuy(state){
            return state.planBuy
        },
        ishaveplan(state){
            return state.planBuy !== null
        },
    },
    actions:{ 
        async createPlanData({state}){
            try {
                const respons = await instance.post("/add_plan_buy", state.forNewDataPlan)

            } catch(error){
                console.error("Error: ", error)
            }
        },
        async getAllPlanBuy({state}){
            try {
                const respons = await instance.get("/output_plan_buy")

                state.planBuy = respons.data

                console.log(state.planBuy)
            } catch(error){
                console.error("Error: ", error)
            }
        }
    }
}

export default modulePlanBuy