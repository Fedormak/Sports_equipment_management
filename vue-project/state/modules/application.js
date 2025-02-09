const moduleApplication = {
    state: () => ({
        application: []
    }),
    getters: {
        getAllApplication(state) {
            return state.application
        },
        getApplicationById: (state) => (id) => {
            let application = state.application.find(i => i.id === id)

            return application
        }
    }
}

export default moduleApplication