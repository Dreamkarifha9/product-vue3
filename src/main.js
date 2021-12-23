import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DefaultApolloClient } from "@vue/apollo-composable";
import defaultClient from "./services/service";

const app = createApp(App);
app.use(store);
app.use(router);
app.provide(DefaultApolloClient, defaultClient);
app.mount('#app')
