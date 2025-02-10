import {createStore} from "vuex";
import moduleUsers from "./modules/users.js";
import moduleInventory from "./modules/inventory.js";
import modulereplacement from "./modules/replacement.js"
import moduleApplication from "./modules/application.js"
import modulePlanBuy from "./modules/plunbuy.js";
import modulelogs from "./modules/logs.js"


const store = createStore({
    modules: {
        user: moduleUsers,
        inventory: moduleInventory,
        replacement: modulereplacement,
        application: moduleApplication,
        planBuy: modulePlanBuy,
        logi: modulelogs,
    }
})

export default store