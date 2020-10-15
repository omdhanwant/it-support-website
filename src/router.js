import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Service from './components/Service.vue';
import ContactUs from './components/ContactUs.vue';
import AboutUs from './components/AboutUs.vue';
import Blogs from './components/Blogs.vue'
import SingleBlog from './components/SingleBlog.vue'

const router = new VueRouter({
    routes : [
        {path: '' , redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/service', component: Service },
        {path: '/contact-us', component: ContactUs },
        {path: '/about-us', component: AboutUs },
        {path: '/blogs', component: Blogs },
        {path: '/blog/:id', component: SingleBlog },
        { path: '*', redirect: '/home' }
    ]
    // ,
    // scrollBehavior(to) {
    //     if (to.hash) {
    //         return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' });
    //     }
    //     return window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  });

export default {
    VueRouter,
    router
};