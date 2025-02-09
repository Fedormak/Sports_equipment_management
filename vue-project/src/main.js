import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from "../state/store.js"
import VueAxios from 'vue-axios'
import axios from "axios"
import VueCookies from 'vue-cookies';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueAxios, axios)
// app.use(VueCookies)
app.mount('#app')
