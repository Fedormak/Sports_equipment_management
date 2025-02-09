import {createStore} from "vuex";
import moduleUsers from "./modules/users.js";
import moduleInventory from "./modules/inventory.js";
import modulereplacement from "./modules/replacement.js"
import moduleApplication from "./modules/application.js"


const store = createStore({
    modules: {
        user: moduleUsers,
        inventory: moduleInventory,
        replacement: modulereplacement,
        application: moduleApplication,
    }
})

export default store