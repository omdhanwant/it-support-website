<template>
  <div>
<HeaderBanner 
  banner-title="We Are Provided Sales & Support in IT Solutions"
  banner-text="We Provided sales and support for the software and hardware across country." 
  :banner-image='bannerImage'>
 </HeaderBanner>
    
    <div class="container" style="margin-top: -60px;">
      <div class="row">
        <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div class="media block-icon-1 d-block text-left">
            <div class="icon mb-3">
              <img
                src="../assets/flaticon/svg/001-consultation.svg"
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="media-body">
              <h3 class="h5 mb-4">Corporate Collaboration</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p><a href="#">Learn More</a></p>
            </div>
          </div>
          <!-- .block-icon-1 -->
        </div>
        <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div class="media block-icon-1 d-block text-left">
            <div class="icon mb-3">
              <img
                src="../assets/flaticon/svg/002-discussion.svg"
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="media-body">
              <h3 class="h5 mb-4">Strategic Partners</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p><a href="#">Learn More</a></p>
            </div>
          </div>
          <!-- .block-icon-1 -->
        </div>
        <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div class="media block-icon-1 d-block text-left">
            <div class="icon mb-3">
              <img
                src="../assets/flaticon/svg/003-turnover.svg"
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="media-body">
              <h3 class="h5 mb-4">Infinite Posibilities</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <p><a href="#">Learn More</a></p>
            </div>
          </div>
          <!-- .block-icon-1 -->
        </div>
      </div>
    </div>
    <!-- About us -->
    <div class="about-banner">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-sm-8" style="background: #4444449c">
            <h2 class="pb-3 pt-4 text-center text-uppercase text-white">About Us</h2>
            <p data-aos="slide-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-once="true" class="text-white">
              KBS dedication to delivering solutions that meet and exceed, the
              needs of customers has been driven since KBS was formed in 2015.
              Over 5 years, large and small organizations have put their trust
              in us – in our broad-based approaches, leadership and unrivalled
              client support. Working every day and developing new ways for our
              customers to have a positive impact. Because KBS is, after all,
              about people.
            </p>
            <a href="#" class="btn btn-primary mb-4 mr-3 mt-4 px-4 py-3">Learn More</a>
          </div>
          <div class="col-sm-4"></div>
        </div>
      </div>
    </div>
    <!-- our services -->
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center mb-5 mt-5">
          <h2>Our Services</h2>
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
      <div class="row">

        <div class="col-md-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p><a href="#" class="btn btn-black py-3 px-4">More Features</a></p>
        </div>
      </div>
    </div>
    
    <HappyCustomersQuotes/>
  </div>
</template>

<script>
import consultationSvg from "../assets/images/flaticon/svg/001-consultation.svg";
import discussionSvg from "../assets/images/flaticon/svg/002-discussion.svg";
import gear from "../assets/images/flaticon/svg/004-gear.svg";
import conflict from "../assets/images/flaticon/svg/005-conflict.svg";
import meeting from "../assets/images/flaticon/svg/006-meeting.svg";
import brainstorming from "../assets/images/flaticon/svg/007-brainstorming.svg";



import HappyCustomersQuotes from '../views/HappyCutomersQuotes' ;
import HeaderBanner from '../views/HeaderBanner';

import bannerImage  from  '../assets/homebanner1.png';
export default {
  components: {
    HappyCustomersQuotes,
    HeaderBanner
  },
  data() {
    return {
      bannerImage,
      listServices: [
         {
          name: "Corporate Collaboration",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: consultationSvg,
        },
        {
          name: "Strategic Partners",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: discussionSvg,
        },
        {
          name: "IT consulting",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: gear,
        },
       
        {
          name: "Network Infrastructure",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: conflict,
        },
        {
          name: "Network Designing",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: meeting,
        },
        {
          name: "Network Support",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: brainstorming,
        },
      ],
     };
    
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter {
  opacity: 0 !important;
}

/* about */
.blu-bx {
  position: relative;
  z-index: 99;
  top: -77px;
  background: var(--clr-primary);
  opacity: 0.8;
  padding: 10px 50px;
  color: var(--clr-light);
  text-align: center;
  border-radius: 10px;
} /* about */

/* services */
.gap {
  padding-bottom: 50px;
  padding-top: 35px;
}

.bor-bx {
  border: 1px dotted #ccc;
  padding: 2%;
  margin-top: 20px;
  background: var(--clr-grey);
  opacity: 0.8;
  border-radius: 10px;
}

.serv-tlts {
  text-align: center;
  color: var(--clr-light);
  display: block;
  margin: 0 auto 30px auto;
  width: 60%;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  background-color: var(--clr-primary) !important;
  font-size: var(--fs-h3);
}
.ngt-mrg {
  margin-top: -45px;
}
/* services */

.block-icon-1 {
  z-index: 1;
  padding: 30px;
  background: #fff;
  -webkit-box-shadow: 0 15px 30px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px 0px rgba(0, 0, 0, 0.1);
  /* margin-top: -80px; */
  margin-bottom: 80px;
}

.block-icon-1 img {
  width: 70px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.block-icon-1 .icon {
  font-size: 40px;
}

.about-banner {
  background-image: url("../assets/abouts-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
 
}

</style>
