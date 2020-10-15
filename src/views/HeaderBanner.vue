<template>
  <div>
     <div class="main-banner row" :style="{ 'background-image': 'url(' + bannerImage + ')' }">
        <div class="col-12 d-block my-auto text-center">
          <div class="container mb-5">
            <h2 data-aos="fade-down" data-aos-duration="1000" class="pb-4 text-white banner_title">
              {{bannerTitle}}
            </h2>
            <p data-aos="fade-down" data-aos-duration="1000" class="text-white fs-18">
              {{bannerText}}
            </p>
          </div>
          <!-- <button type="button" class="btn btn-primary btn-lg">
            Learn More
          </button> -->
        </div>
      </div>
  </div>
</template>

<script>

export default {
   props: ['bannerTitle', 'bannerText', 'bannerImage'],
  components: {
   
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

.main-banner{
    /* background-image: url('../assets/homebanner1.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

}

.banner_title {
  font-size: var(40px)!important;
}
</style>
