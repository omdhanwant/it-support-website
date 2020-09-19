<template>
<div>
  <NavBar></NavBar>
  <div class="page-container">
    <router-view></router-view>
  </div>
</div>
  
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* @import './css/style.css'; */
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
