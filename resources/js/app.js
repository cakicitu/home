import './bootstrap';
// app.js
// require('./bootstrap');

import { createApp } from 'vue/dist/vue.esm-bundler';


import App from './App.vue'

import Home from './Pages/Home.vue'

window.app = createApp(App).mount("#app")
app.component('Home', Home)
