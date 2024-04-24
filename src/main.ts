import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, {key} from 'Microfrontend-vue3/remoteStore'

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
