import {createStore} from "vuex";
import users from "./modules/users.js";
import moduleUsers from "./modules/users.js";
import moduleInventory from "./modules/inventory.js";


const store = createStore({
    modules: {
        user: moduleUsers,
        inventory: moduleInventory,
    }
})

export default store