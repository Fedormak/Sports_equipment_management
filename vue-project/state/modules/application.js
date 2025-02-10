import instance from "./../axios.js"
import store from "./../store.js"

const moduleAplication = {
    state: () => ({
      application: [],
      dataForUser: {
        user_id: null,
      },
      createNewReplacement: {
        commet: null,
        user_id: null,
        item_id: null
      },
      dataApplicationOneUser: null,
      }),
      getters: {
        getAllApplication(state) {
              return state.application
        },
        repairDataToCreateNewApplication:(state, store)=>(data)=>{
            state.createNewReplacement.comment = data.commet
            state.createNewReplacement.user_id = store.getUser.user_id
            state.createNewReplacement.item_id = data.item_id
        },
        getApplicationUser(state){
            return state.dataApplicationOneUser
        }
      },
      mutations:{
        repairDataToCreateNewApplication(state, data){
          state.createNewReplacement.comment = data.commet
          state.createNewReplacement.user_id = store.getters.getUser.user_id
          state.createNewReplacement.item_id = Number(data.item_id)
        },

      },
      actions: {
        async getReplacment({state}){
          try {
            const respons = await instance.get("/all_req")

            state.application = respons.data
          }catch (error){
            console.log("Error get:", error)
          }
        },
        async getReplacmentUser({state}){
          try {
            const respons = await instance.post("/status_item", dataForUser.user_id)

            state.dataApplicationOneUser = state
          } catch(error){
            console.error("Error", error)
          }
        },
        async createApplication({state}){
          try {
            const respons = await instance.post("/add_request_item", state.createNewReplacement)
            
          } catch(error){
            console.log(error)
          }
        },
        async doneApplication({state}, data){
          try {
            console.log(data)
            const respons = await instance.post("/item_use", data)

            console.log(respons)
          } catch(error) {
            console.log(error)
          }
        },
        async unDoneApplication({state}, data){
          try {
            console.log(data)
            const respons = await instance.delete("/delete_req", data)

            console.log(respons)
          } catch(error) {
            console.log(error)
          }
        }
      }
  
    }

export default moduleAplication