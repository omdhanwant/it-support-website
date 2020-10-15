<template>
  <div>
    <HeaderBanner
      banner-title="Company's Blog"
      banner-text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      :banner-image="bannerImage"
    >
    </HeaderBanner>

    <div class="templateux-section">
      <div class="container">
        <div class="row">
          
          <div v-for="(blog, i) in blogs" :key="i" class="col-md-6 col-lg-4 mb-4">
           <router-link :to="'/blog/'+ blog.id"> <a   class="block-thumbnail-1 one-whole show-text aos-init height-sm aos-animate" :style="{ 'background-image': 'url(' + blog.image + ')' }" data-aos="fade" data-aos-delay="300" >
              <div class="block-thumbnail-content">
                <h2>{{ blog.title }}</h2>
                <span class="post-meta">{{ blog.date }}</span>
              </div>
            </a>
           </router-link>
          </div>
        </div>

      </div>
    </div>
    
    <HappyCustomersQuotes/>
  </div>
</template>

<script>
import HeaderBanner from "../views/HeaderBanner";
import bannerImage from "../assets/abouts-banner.png";
import HappyCustomersQuotes from "../views/HappyCutomersQuotes";
import slider1 from '@/assets/images/slider-1.jpg';
import slider2 from '@/assets/images/slider-2.jpg';
import slider3 from '@/assets/images/slider-3.jpg';
import slider4 from '@/assets/images/slider-4.jpg';
import dataUtil from '../services/data';
export default {
    components:{
        HeaderBanner,
        HappyCustomersQuotes
    },
    data() {
        return {
            bannerImage,
            images: [ slider1,slider2,slider3,slider4 ],
            blogs: []
        }
    },
    methods: {
      getAllBlogs() {
        this.blogs = dataUtil.getBlogs(this.images, 12);
      } 
      
    },
    beforeMount() {
      this.getAllBlogs();
    }
      
};

</script>

<style scoped>

.templateux-section {
    padding: 7em;
}
.block-thumbnail-1 .block-thumbnail-content {
    position: absolute;
    top: 50px;
    z-index: 3;
    left: 20px;
    opacity: 1;
    visibility: visible;
    /* transition: .3s all ease; */
}
.block-thumbnail-1:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 2;
    opacity: .1;
    transition: .3s all ease;
}
.block-thumbnail-1.show-text:before {
    opacity: .3;
}
a:hover {
    color: #000!important;
    text-decoration: none!important;
}


.block-thumbnail-1.one-whole {
    width: 100%;
}
.block-thumbnail-1.height-sm {
    height: 350px;
}
.block-thumbnail-1 {
    height: 500px;
    display: block;
    background-size: cover;
    background-position: center center;
    position: relative;
}

.block-thumbnail-1 .block-thumbnail-content h2 {
    font-size: 22px;
    color: #fff!important;
}

.block-thumbnail-1 .block-thumbnail-content .post-meta {
    opacity: .3;
    color: #fff!important;
}


</style>