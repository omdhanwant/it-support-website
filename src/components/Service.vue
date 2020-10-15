<template>
  <div>
    <HeaderBanner
      banner-title="Services"
      banner-text="We provided sales and support for the software and hardware across country."
      :banner-image="bannerImage"
    >
    </HeaderBanner>

    <div class="bg-light pt-5 pb-5">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2>Our Services</h2>
        </div>
        <div class="col-12 text-center mb-5">
          <h3>Software & Hardware Sales </h3>
        </div>
        <div
          v-for="service in listServices" :key="service.name"
          class="col-md-4 mb-4 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div class="media block-icon-1 d-block text-center">
            <div class="icon mb-3">
              <img :src="service.icon" alt="Image" class="img-fluid" />
            </div>
            <div class="media-body">
              <h3 class="h5 mb-4">{{ service.name }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>

   
    <HappyCustomersQuotes />
  </div>
</template>

<script>
import HappyCustomersQuotes from "../views/HappyCutomersQuotes";
import HeaderBanner from "../views/HeaderBanner";
import bannerImage from "../assets/homebanner1.png";
import  data  from '../services/data';
export default {
  components: {
    HappyCustomersQuotes,
    HeaderBanner,
  },
  data() {
    return {
      bannerImage,
      listServices: []
     };
  },
  beforeMount(){
    this.listServices = data.getServices();
  }
};
</script>

<style scoped>
.templateux-overlap .block-icon-1 {
  z-index: 1;
  padding: 30px;
  background: #fff;
  box-shadow: 0 15px 30px 0px rgba(0, 0, 0, 0.1);
  margin-top: -200px;
}

@media only screen and (max-width: 768px) {
  .templateux-overlap .block-icon-1 {
    margin-top: 0;
    margin-bottom: 5px;
  }
}

.d-block {
  display: block !important;
}

.media {
  align-items: flex-start;
}

.block-icon-1 .icon {
  font-size: 40px;
}

.block-icon-1 img {
  width: 70px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.media-body {
  flex: 1;
}
.media-body p {
  line-height: 1.8;
  font-size: 15px;
  color: #999999;
}
.templateux-overlap .block-icon-1 h3 {
  font-size: 18px;
}
</style>