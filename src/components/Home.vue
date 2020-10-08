<template>
  <div>
      
    <div class="row">
        <transition name="fade">
      <div class="col-md-12 blu-bx inn-mar overlay-slide-out-right">
        <h2 class="text-center" style="font-size: var(--fs-h2)">ABOUT US</h2>
        <p>
          KBS dedication to delivering solutions that meet and exceed, the needs
          of customers has been driven since KBS was formed in 2015. Over 5
          years, large and small organizations have put their trust in us – in
          our broad-based approaches, leadership and unrivalled client support.
          Working every day and developing new ways for our customers to have a
          positive impact. Because KBS is, after all, about people. We embraced
          security and confidentiality standards early on and insisted that all
          partners and associates adhere to it. We also share and disseminate
          the best industry practices with our clients and employees in order to
          improve the global perception of the quality of services outsourcing
          partners like us have to offer. We always encourage our employees and
          management to bring forth innovative solutions that could
          revolutionize processes. Most of our innovations come from our
          employees, who are encouraged and incentivized to create new processes
          that would eventually help clients in improving productivity and
          accuracy through systematic automation. This thought process is
          supported by a world-class in-house software innovation team that can
          turn most ideas into reality. We are an IT Company with Genius Brains,
          toiling to provide best service to our Customers. Our Mission is to:
          "Be the one-stop solution providers to our valued Customers, for all
          their IT needs. .
        </p>
      </div>
      </transition>
    </div>
    

    <div class="row gap">
      <div class="bor-bx">
        <h3 class="serv-tlts ngt-mrg">
          STRATEGIC ALLIANCE AND COMMITMENT TO CUSTOMER
        </h3>
        <div class="row">
          <div class="col-md-12">
            <p class="text-center">
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
  </div>
</template>

<script>
// import bbqImage from '../assets/bbq.jpg';

// import defaultImage from '../assets/default.png';
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>

.fade-enter-active{
  transition: opacity 0.25s ease-out;
}

.fade-enter{
  opacity: 0!important;
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
  background-color: var(--clr-primary)!important;
  font-size: var(--fs-h3);
}
.ngt-mrg {
  margin-top: -45px;
}
/* services */
</style>
