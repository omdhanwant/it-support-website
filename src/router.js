import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Service from './components/Service.vue';

const router = new VueRouter({
    routes : [
        {path: '' , redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/service', component: Service },
        { path: '*', redirect: '/home' }
    ]
  });

export default {
    VueRouter,
    router
};