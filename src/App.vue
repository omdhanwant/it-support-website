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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.page-container{
  padding: 20px;
}

</style>
