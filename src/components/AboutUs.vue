<template>
  <div>
    <HeaderBanner
      banner-title="About Us"
      banner-text="We are an IT Company with Genius Brains, toiling to provide best service to our Customers."
      :banner-image="bannerImage"
    >
    </HeaderBanner>
    <div class="pt-5 pb-5">
      <div class="container">
        <div class="row pt-4">
          <div class="col-12">
            <p>
              KBS dedication to delivering solutions that meet and exceed, the
              needs of customers has been driven since KBS was formed in 2015.
              Over 5 years, large and small organizations have put their trust
              in us – in our broad-based approaches, leadership and unrivalled
              client support. Working every day and developing new ways for our
              customers to have a positive impact. Because KBS is, after all,
              about people.
            </p>
            <p>
              We embraced security and confidentiality standards early on and
              insisted that all partners and associates adhere to it. We also
              share and disseminate the best industry practices with our clients
              and employees in order to improve the global perception of the
              quality of services outsourcing partners like us have to offer. We
              always encourage our employees and management to bring forth
              innovative solutions that could revolutionize processes. Most of
              our innovations come from our employees, who are encouraged and
              incentivized to create new processes that would eventually help
              clients in improving productivity and accuracy through systematic
              automation. This thought process is supported by a world-class
              in-house software innovation team that can turn most ideas into
              reality.
            </p>
            <p>
              We are an IT Company with Genius Brains, toiling to provide best
              service to our Customers.
            </p>
            <p>
              <b> Our Mission is to: </b>
              "Be the one-stop solution providers to our valued Customers, for
              all their IT needs.
            </p>
            <h4 class="pb-2 heading">
              STRATEGIC ALLIANCE AND COMMITMENT TO CUSTOMER
            </h4>
            <p>
              Treating all stakeholders in the process as clients, internal or
              external, we have integrated real time metrics for workflow
              management, quality control, and reward management. At a time when
              the global healthcare documentation industry was still undecided
              about quality measurement parameters, we evolved our own quality
              standards based on the Association for Healthcare Documentation
              Integrity (AHDI) guidelines and offered our clients quality audits
              on several of our processes. The same data is analyzed and used to
              improve internal mechanisms and assure quicker and better service
              to all clients.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <HappyCustomersQuotes /> -->
  </div>
</template>

<script>
// import HappyCustomersQuotes from "../views/HappyCutomersQuotes";
import HeaderBanner from "../views/HeaderBanner";
import bannerImage from "../assets/homebanner1.png";
export default {
  components: {
    // HappyCustomersQuotes,
    HeaderBanner,
  },
  data(){
    return {
      bannerImage
    }
  }
};
</script>

<style scoped>

.heading{
    text-align: center;
    padding-top: 2em;

}
</style>