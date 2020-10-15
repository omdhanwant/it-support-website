<template>
<div>
  <NavBar :is-hidden="hideNav"></NavBar>
  <div class="page-container">
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
  </div>
  <Footer></Footer>

  <!-- floating button -->
  <div @click="scrollUp()" class="float_button">
    <i class="fa fa-arrow-up" aria-hidden="true"></i>
  </div>
</div>
  
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      hideNav: false,
      last_known_scroll_position: 0,
      ticking: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
       this.last_known_scroll_position = window.scrollY;

        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            // Do something with the scroll position
            if(this.last_known_scroll_position > 500) {
              this.hideNav = true;
              } else {
                this.hideNav = false;
              }
            this.ticking = false;
          });

          this.ticking = true;
        }
    },
    scrollUp(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  watch:{
    $route (){
        window.scroll(0,0);
    }
} 
}
</script>

<style>
/* @import './css/style.css'; */
@import './css/style.css';
/* @import './css/animsition.min.css'; */

.page-container{
  padding: 0px;
  margin: 0px;
}
      
      .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.float_button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  background: var(--clr-primary);
  box-shadow: var(--bs);
  transition: all 0.5s ease-out;
}

.float_button:hover {
  zoom: 1.2;
}

.float_button svg {
    position: absolute;
    left: 33%;
    top: 28%;
    font-size: 20px;
    color: var(--clr-light);
}
</style>
