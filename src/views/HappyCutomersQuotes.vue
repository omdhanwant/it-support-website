<template>
    <div>
        <div class="pt-5 pb-5 mb-5">
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
            <slide v-for="(quote,i) in quotes" :key="i">
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
import { Carousel, Slide } from "vue-carousel";
export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
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