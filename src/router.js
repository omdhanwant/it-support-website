import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Service from './components/Service.vue';
import ContactUs from './components/ContactUs.vue';
import AboutUs from './components/AboutUs.vue';

const router = new VueRouter({
    routes : [
        {path: '' , redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/service', component: Service },
        {path: '/contact-us', component: ContactUs },
        {path: '/about-us', component: AboutUs },
        { path: '*', redirect: '/home' }
    ]
  });

export default {
    VueRouter,
    router
};