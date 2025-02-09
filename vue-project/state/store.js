import {createStore} from "vuex";
import users from "./modules/users.js";
import moduleUsers from "./modules/users.js";
import moduleInventory from "./modules/inventory.js";
import modulereplacement from "./modules/replacement.js"


const store = createStore({
    modules: {
        user: moduleUsers,
        inventory: moduleInventory,
        replacement: modulereplacement,
    }
})

export default store