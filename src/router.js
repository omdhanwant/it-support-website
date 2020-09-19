import VueRouter from 'vue-router';
import Home from './components/Home.vue';
// import Products from './components/Products.vue';

const router = new VueRouter({
    routes : [
        {path: '' , redirect: '/home' },
        { path: '/home', component: Home },
        // { path: '/products', component: Products },
        { path: '*', redirect: '/home' }
    ]
  });

export default {
    VueRouter,
    router
};