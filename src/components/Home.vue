<template>
    <div class="row banner">
        <div class="col-12 p-0">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div  v-for="item in corouselItems" :key="item.name" class="carousel-item" :class="{ 'active' : item.active }">
                <img class="d-block w-100" :src="item.url" :alt="item.name">
                </div>
                
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            
            <div class="banner-text">
                <span >It Support Website</span>
            </div>

            
        </div>
       
       
    </div>

    
</template>

<script>
import bbqImage from '../assets/bbq.jpg';

// import defaultImage from '../assets/default.png';
export default {
      data(){
       return {
           corouselItems: [
               { name: '1' , url: bbqImage , active: true },
               { name: '2' , url: bbqImage , active: false },
               { name: '3' , url: bbqImage , active: false }
           ]
       }
    }
}
</script>

<style scoped>
.banner {
    height: 500px;
    width: 100%;
    margin: 0;
}

.carousel{
    height: 100%;
}

.carousel-item {
    height: 500px;
    opacity: 0.5;
}

.banner-text{
    position: absolute;
    top: 0;
    margin: 192px auto;
    padding: 20px 154px;
    background: #fff;
    opacity: 0.8;
    width: 100%;
    border-radius: 5px;
    text-align: center;
}

.banner span{
    color: gray;
    font-size: 50px;
}

.carousel-item img {
    object-fit: cover!important;
    height: 500px!important;
}

.carousel-control-prev, .carousel-control-next{
    height: 500px;
    opacity: 1!important;
}
</style>