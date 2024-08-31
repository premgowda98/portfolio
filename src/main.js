import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import posthogPlugin from "./plugins/posthog"

const app = createApp(App)

if (import.meta.env.MODE==="production"){
    app.use(posthogPlugin);
}

app.mount('#app')
