<template>
  <div>
    <div class="bor-bx">
      <h3 class="serv-tlts ngt-mrg">
        SERVICES
      </h3>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 position-relative">
          <div class="inner-column position-relative">
            <carousel
              :minSwipeDistance="100"
              :perPageCustom="[
                [420, 1],
                [768, 2],
                [1024, 4],
              ]"
            >
              <slide v-for="service in services" :key="service">
                <div class="services-block-four">
                  <div class="inner-box">
                    <div class="icon-box">
                      <span class="icon flaticon-pay-per-click"></span>
                    </div>
                    <h3>
                      <a>{{ service }}</a>
                    </h3>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      services: [
        "IT consulting",
        "Network Infrastructure",
        "Network Designing",
        "Network Maintenance",
        "Network Support",
        "Software and Websites Maintenance",
      ],
    };
  },
};
</script>

<style scoped>
.gap {
  padding-bottom: 50px;
  padding-top: 35px;
}

.bor-bx {
  border: 1px dotted #ccc;
  padding: 2%;
  margin-top: 20px;
  /* background: var(--clr-grey); */
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

/* services  */
.services-block-four {
  position: relative;
  margin: 20px;
}
.services-block-four .inner-box {
  position: relative;
  text-align: center;
  padding: 40px 30px;
  box-shadow: var(--bs);
  height: 150px;
  transition: all 500ms ease;
}

.services-block-four .inner-box:before {
  position: absolute;
  content: "";
  left: 0px;
  bottom: 0px;
  height: 2px;
  width: 0px;
  background-color: var(--clr-primary);
  transition: all 1200ms ease;
}
.services-block-four .inner-box:after {
  position: absolute;
  content: "";
  right: 0px;
  bottom: 0px;
  height: 2px;
  width: 0px;
  background-color: var(--clr-primary);
  transition: all 1200ms ease;
}

.services-block-four .inner-box .icon-box {
  position: relative;
  color: #443986;
  font-size: 65px;
  line-height: 1em;
  margin-bottom: 18px;
}

.services-block-four .inner-box h3 {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4em;
  margin-bottom: 10px;
}
.services-block-four .inner-box h3 a {
  position: relative;
  color: #222222;
  transition: all 0.3s ease;
}
a:visited,
a:hover {
  text-decoration: none;
  outline: none !important;
  cursor: pointer;
}

/* on hover property */
/* .services-block-four .inner-box:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
} */
.services-block-four .inner-box:hover::before,
.services-block-four .inner-box:hover::after {
  width: 50% !important;
}
.services-block-four .inner-box h3 a:hover {
  color: var(--clr-primary);
}
/* on hover property */
</style>
