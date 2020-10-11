<template>
    <div>
        <div class="row">
          <div class="col-md-12 templateux-overlap">
            <div class="row">
              <div v-for="service in services" :key="service.name" class="col-md-4 col-sm-12 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                <div class="media block-icon-1 d-block text-left">
                  <div class="icon mb-3">
                    <img :src="service.icon" alt="Image" class="img-fluid">
                  </div>
                  <div class="media-body">
                    <h3 class="h5 mb-4">{{service.name}}</h3>
                    <p>{{service.description}}</p>
                    <p><a >Learn More</a></p>
                  </div>
                </div> 
              </div>
              
              
            </div>
          </div>
        </div>

        <div class="bg-light mt-5 pt-5 pb-5">
            <div class="row">
          <div class="col-12 text-center mb-5">
            <h2>Our Services</h2>
          </div>
          <div v-for="service in listServices" :key="service.name" class="col-md-4 mb-4 aos-init aos-animate" data-aos="fade-up">
            <div class="media block-icon-1 d-block text-center">
              <div class="icon mb-3">
                <img :src="service.icon" alt="Image" class="img-fluid">
              </div>
              <div class="media-body">
                <h3 class="h5 mb-4">{{service.name}}</h3>
                <p>{{service.description}}</p>
              </div>
            </div> <!-- .block-icon-1 -->
          </div>
  
        </div>
        </div>

        <div class="bg-light mt-5 pt-5 pb-5 mb-5">
            <div class="row justify-content-center">
                <div class="row mb-5">
          <div class="col-12">
            <h2>Happy Customers</h2>
          </div>
        </div>
            </div>

            <div class="row justify-content-center">
          <div class="col-md-8 testimonial-wrap">
            <div class="quote">“</div>
            <carousel
            :easing="'ease'"
            :autoplay="true"
                :perPage="1"
              :minSwipeDistance="100"
            >
            <slide v-for="quote in quotes" :key="quote">
                <blockquote class="block-testomonial">
                  <p>{{quote}}</p>
                  <p><cite>Craig Smith, CEO and Founder of Slite</cite></p>
                </blockquote>
              </slide>
            </carousel>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
import consultationSvg from '../assets/images/flaticon/svg/001-consultation.svg'
import discussionSvg from '../assets/images/flaticon/svg/002-discussion.svg'
import turnoverSvg from '../assets/images/flaticon/svg/003-turnover.svg'
import gear from '../assets/images/flaticon/svg/004-gear.svg';
import conflict from '../assets/images/flaticon/svg/005-conflict.svg';
import meeting from '../assets/images/flaticon/svg/006-meeting.svg';
import brainstorming from '../assets/images/flaticon/svg/007-brainstorming.svg';
import { Carousel, Slide } from "vue-carousel";
export default {
    components: {
    Carousel,
    Slide,
  },
    data() {
        return {
            consultationSvg,
            discussionSvg,
            turnoverSvg,
            services: [
                {   name: "Corporate Collaboration",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: consultationSvg
                },
                {   name: "Strategic Partners",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: discussionSvg
                },
                {   name: "Infinite Posibilities",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: turnoverSvg
                }            
            ],
            listServices:[{   name: "IT consulting",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: gear
                },
                {   name: "Network Infrastructure",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: conflict
                },
                {   name: "Network Infrastructure",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: conflict
                },
                {   name: "Network Designing",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: meeting
                },
                {   name: "Network Support",
                    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
                    icon: brainstorming
                }],
            quotes: [
                "“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”"
            ,
            "“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”",
            "“When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”"]
        }
    }
}
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
    display: block!important;
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

.testimonial-wrap .quote {
    line-height: 1;
    position: relative;
    font-size: 100px;
    color: #000;
    text-align: center;
}

.block-testomonial {
    text-align: center;
}
blockquote {
    margin: 0 0 1rem;
}
.block-testomonial p {
    font-size: 18px;
    color: #000;
    line-height: 2;
}
</style>