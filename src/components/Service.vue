<template>
  <div>
    <HeaderBanner
      banner-title="Services"
      banner-text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      :banner-image="bannerImage"
    >
    </HeaderBanner>
    <!-- <div class="row">
      <div class="col-md-12 templateux-overlap">
        <div class="row">
          <div
            v-for="service in services"
            :key="service.name"
            class="col-md-4 col-sm-12 col-lg-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div class="media block-icon-1 d-block text-left">
              <div class="icon mb-3">
                <img :src="service.icon" alt="Image" class="img-fluid" />
              </div>
              <div class="media-body">
                <h3 class="h5 mb-4">{{ service.name }}</h3>
                <p>{{ service.description }}</p>
                <p><a>Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

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
import consultationSvg from "../assets/images/flaticon/svg/001-consultation.svg";
import discussionSvg from "../assets/images/flaticon/svg/002-discussion.svg";
import turnoverSvg from "../assets/images/flaticon/svg/003-turnover.svg";
import gear from "../assets/images/flaticon/svg/004-gear.svg";
import conflict from "../assets/images/flaticon/svg/005-conflict.svg";
import meeting from "../assets/images/flaticon/svg/006-meeting.svg";
import brainstorming from "../assets/images/flaticon/svg/007-brainstorming.svg";
import HappyCustomersQuotes from "../views/HappyCutomersQuotes";
import HeaderBanner from "../views/HeaderBanner";
import bannerImage from "../assets/homebanner1.png";
export default {
  components: {
    HappyCustomersQuotes,
    HeaderBanner,
  },
  data() {
    return {
      bannerImage,
      consultationSvg,
      discussionSvg,
      turnoverSvg,
      services: [
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
          name: "Infinite Posibilities",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: turnoverSvg,
        },
      ],
     
     listServices: [
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
          name: "Infinite Posibilities",
          description:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          icon: turnoverSvg,
        },
      ],
     };
  },
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