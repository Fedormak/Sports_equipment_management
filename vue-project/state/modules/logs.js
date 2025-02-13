import instance from "./../axios"

const modulelogs = {
    state: () => ({
        logi: []
      }),
      getters: {
        getlogi(state){
            return state.logi
        }
      },
      actions: {
        async getReplacment({state}){
          try {
            const respons = await instance.get("/report")
            state.logi = respons.data
          }catch (error){
            console.log("Error get:", error)
          }
        },
      }
  
  }
  
  export default modulelogs