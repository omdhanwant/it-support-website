<template>
<div>
  <NavBar></NavBar>
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
  watch:{
    $route (to, from){
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
