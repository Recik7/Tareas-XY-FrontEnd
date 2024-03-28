//import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import createPersistedState from 'pinia-plugin-persistedstate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import App from './App.vue'
import router from './router'
import axios from 'axios'

window.axios = axios

window.axios.defaults.baseURL ='http://127.0.0.1:8000/'
window.axios.defaults.headers.common['Accept'] ='application/json'
window.axios.defaults.headers.common['Content-Type'] ='application/json'
window.axios.defaults.headers.common['X-Requested-W'] ='XMLHttpRequest'
window.axios.defaults.withCredentials = true

const pinia = createPinia()
pinia.use(({store}) =>{
    store.router = markRaw(router)
})
pinia.use(createPersistedState)


const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
