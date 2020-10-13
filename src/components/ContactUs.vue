<template>
    <div>
            <HeaderBanner
      banner-title="Contact Us"
      banner-text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      :banner-image="bannerImage"
    >
    </HeaderBanner>

    <div class="section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-7 pr-md-7 mb-5">
            <form action="#" method="post">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" class="form-control"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" class="btn btn-primary py-3 px-5" value="Send Message">
              </div>
            </form>
          </div>
          <div class="col-md-5">
            <div class="media block-icon-1 d-block text-center">
              <!-- <div class="icon mb-3"><span class="ion-ios-location-outline"></span></div> -->
              <div class="media-body">
                <h3 class="h5 mb-4">Arthur Bldg flr, New York City, USA</h3>
              </div>
            </div> <!-- .block-icon-1 -->

            <div class="media block-icon-1 d-block text-center">
              <!-- <div class="icon mb-3"><span class="ion-ios-telephone-outline"></span></div> -->
              <div class="media-body">
                <h3 class="h5 mb-4">+1(817) 402-8792</h3>
              </div>
            </div> <!-- .block-icon-1 -->

            <div class="media block-icon-1 d-block text-center">
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
export default {
    components: {
        HeaderBanner,
        HappyCustomersQuotes
    },
    data() {
        return {
            bannerImage
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

.d-block {
    display: block !important;
    margin-bottom: 50px;
    margin-top: 60px;
}

</style>