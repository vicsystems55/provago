import { createApp } from "vue"
import { createHead } from "@unhead/vue/client"

import App from "./App.vue"
import router from "./router"
import "./style.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"

import DefaultLayout from "./layouts/DefaultLayout.vue"

const app = createApp(App)
const head = createHead()

app.component("layout-default", DefaultLayout)

app.use(router)
app.use(head)

app.mount("#app")