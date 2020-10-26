<template>
    <div>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="fullPage"></loading>

    <HeaderBanner
      banner-title="Contact Us"
      banner-text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      :banner-image="bannerImage"
    >
    </HeaderBanner>

    <div class="section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 pr-md-7 mb-5">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input v-model="name" name="name" type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" name="email" type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea v-model="message"  name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <!-- <input type="button" class="btn btn-primary py-3 px-5" value="Send Message"> -->
                <button @click="sendMail" type="button" class="btn btn-primary py-3 px-5">Send Message</button>
              </div>
            </form>
          </div>
          <div class="col-md-5 offset-1">
            <div class="media block-icon-1 my-d-block">
              <!-- <div class="icon mb-3"><span class="ion-ios-location-outline"></span></div> -->
              <div class="media-body">
                <h3 class="h5 mb-4">G-14 Sai Shraddha Park, Near Real Management Institute, Beltarodi Road, Nagpur</h3>
              </div>
            </div> <!-- .block-icon-1 -->

            <div class="media block-icon-1 my-d-block">
              <!-- <div class="icon mb-3"><span class="ion-ios-telephone-outline"></span></div> -->
              <div class="media-body">
                <h3 class="h5 mb-4">+1(817) 406-8792</h3>
              </div>
            </div> <!-- .block-icon-1 -->

            <div class="media block-icon-1 my-d-block">
              <!-- <div class="icon mb-3"><span class="ion-ios-email-outline"></span></div> -->
              <div class="media-body">
                <h3 class="h5 mb-4">kumarbsindia@gmail.com</h3>
              </div>
            </div> <!-- .block-icon-1 -->

          </div>
        </div> <!-- .row -->

      </div>
    </div>

    <HappyCustomersQuotes/>
    </div>
</template>
<script>
import HeaderBanner from "../views/HeaderBanner";
import bannerImage from "../assets/abouts-banner.png";
import HappyCustomersQuotes from "../views/HappyCutomersQuotes";
import APIService from "@/services/api.service";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    components: {
        HeaderBanner,
        HappyCustomersQuotes,
        Loading
    },
    data() {
        return {
            bannerImage,
            name: null,
            email: null,
            message: null,
            isLoading: false,
            fullPage: true
        }
    },
    created(){
      
    },
    methods:{
      sendMail() {
        this.isLoading = true;
        const payload = {
          "from": "kumarbsindia@gmail.com",
          "to": "kumarbsindia@gmail.com",
          "subject": `This mail is sent by ${this.name} : ${this.email}`,
          "text": this.message
        }

        console.log(payload);
        APIService.sendMail(payload)
        .then(response => {
          this.isLoading = false;
          console.log(response);
          this.name = null;
          this.email = null;
          this.message = null;
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
          throw err;
        })
      }
    }
}
</script>
<style scoped>
.section {
   padding-top:7em;
}

.form-control {
    border-radius: 0;
    height: 50px;
    box-shadow: none!important;
    border: 1px solid #cccccc;
}

.block-icon-1 .icon {
    font-size: 40px;
}

.media-body {
    flex: 1;
}

.my-d-block {
    display: block !important;
    margin-bottom: 70px;
    margin-top: 40px;
}

</style>