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
        </div>
       
    </div>
</template>

<script>
// import bbqImage from '../assets/bbq.jpg';
import defaultImage from '../assets/default.png';
export default {
      data(){
       return {
           corouselItems: [
               { name: '1' , url: defaultImage , active: true },
               { name: '2' , url: defaultImage , active: false },
               { name: '3' , url: defaultImage , active: false }
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
}

.carousel-item img {
    object-fit: cover!important;
    height: 500px!important;
}
</style>