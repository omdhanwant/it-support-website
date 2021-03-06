// import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import route from './router';
import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css';

// createApp(App).mount('#app');
Vue.use(route.VueRouter)

new Vue({
    router: route.router,
    render: h => h(App)
}).$mount('#app')
