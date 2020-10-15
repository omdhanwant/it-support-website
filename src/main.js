// import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import route from './router';
import 'jquery/dist/jquery.slim.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from "aos";
import "aos/dist/aos.css";
// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);

// createApp(App).mount('#app');
Vue.use(route.VueRouter)

new Vue({
    created() {
        AOS.init({ disable: "phone" });
    },
    router: route.router,
    render: h => h(App)
}).$mount('#app')
