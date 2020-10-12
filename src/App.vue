<template>
<div>
  <NavBar></NavBar>
  <div class="page-container">
    <router-view></router-view>
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

</style>
