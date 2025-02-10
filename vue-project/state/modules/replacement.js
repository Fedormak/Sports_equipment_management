

const modulereplacement = {
  state: () => ({
    replacement: [],
    dataForUser: {
      user_id: null,
    },
    createNewReplacement: {
      comment: null,
      user_id: null,
      item_id: null
    }
    }),
    getters: {
      getAllticket(state) {
            return state.replacement
      },
      uploadDatafornewReplacement:(state)=>(data)=>{

      }
    },
    mutations: {
      async getReplacment({state}){
        try {
          const respons = await instance.get("/item")
        }catch (error){
          console.log("Error get:", error)
        }
      },
      async getReplacmentUser({state}){
        try {
          const respons = await instance.post("/status_item", dataForUser.user_id)
        } catch(error){}
      }
    }

}

export default modulereplacement