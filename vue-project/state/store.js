import { createApp } from 'vue'
import { createStore } from 'vuex'

export type State = typeof state

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state: State, count: number) {
            state.count++
        }
    }
})

export default store