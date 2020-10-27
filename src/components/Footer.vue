<template>
  <div>
    <footer class="bg-secondary templateux-footer">
      <div class="container">
        <div class="p-4 row">
          <div class="col-md-2 d-block my-auto">
            <div class="block-footer-widget">
              <h3>
               <router-link to="/home"><a class="nav-link text-white">Home</a></router-link>
              </h3>
            </div>
          </div>
          <div class="col-md-2 d-block my-auto">
            <div class="block-footer-widget">
              <h3>
                <router-link to="/service"><a class="nav-link text-white">Service</a></router-link>
                </h3>
            </div>
          </div>
          <div class="col-md-2 d-block my-auto">
            <div class="block-footer-widget">
              <h3>
                <router-link to="/about-us"><a class="nav-link text-white">About Us</a></router-link>
              </h3>
            </div>
          </div>
          <div class="col-md-3 d-block my-auto">
            <div class="block-footer-widget">
              <h3>
               <router-link to="/contact-us"><a class="nav-link text-white">Contact</a></router-link>

              </h3>
            </div>
          </div>
          <div class="col-md-3 d-block my-auto">
            <div class="block-footer-widget">
              <h3 class="text-white">Connect With Us</h3>
              <div style="display: flex; flex-direction: column" class="">
                <p class="" style="color: #fff !important">
                  Email:
                  <a href="kumarbsindia@gmail.com" class="text-white"
                    >kumarbsindia@gmail.com</a
                  >
                </p>
                <p style="color: #fff !important">Phone: +1(817) 402-8792</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center bg-dark p-3 row text-center">
        <div class="col-md-12 text-center">
          <div class="mb-0 text-white">Copyright © All rights reserved</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.templateux-footer {
  box-shadow: var(--bs);
}
.block-footer-widget h3 {
  font-size: var(--fs-h3) !important;
}

.block-footer-widget ul > li > a,
p {
  color: var(--clr-primary) !important;
}
.block-footer-widget p {
  margin: 0;
}
</style>