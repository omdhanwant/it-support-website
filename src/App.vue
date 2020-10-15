<template>
<div>
  <NavBar :is-hidden="hideNav"></NavBar>
  <div class="page-container">
<transition name="fade" mode="out-in">
    <router-view></router-view>
</transition>
  </div>
  <Footer></Footer>
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
            console.log(this.last_known_scroll_position);
            if(this.last_known_scroll_position > 500) {
              this.hideNav = true;
              } else {
                this.hideNav = false;
              }
            this.ticking = false;
          });

          this.ticking = true;
        }
        // this.last_known_scroll_position = window.scrollY;
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
</style>
