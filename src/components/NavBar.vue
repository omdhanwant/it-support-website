<template>
  <div>
    <div>
      <div class="row" style="width: 100%; margin: 0">
        <div class="col-12 p-0">
          <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
            <router-link to="/home"
              ><a class="nav-link">
                <a class="navbar-brand p-0">
                    <img class="logo" src="../assets/logo.png" alt="" />
                </a> </a
            ></router-link>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto py-4 py-md-0">
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <!-- <a class="nav-link" >Services</a> -->
                  <router-link to="/home"
                    ><a class="nav-link">Home</a></router-link
                  >
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <!-- <a class="nav-link" >Services</a> -->
                  <router-link to="/service"
                    ><a class="nav-link">Services</a></router-link
                  >
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <a class="nav-link">Blogs</a>
                </li>
                <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                  <router-link to="/contact-us"
                    ><a class="nav-link">Contact</a></router-link
                  >
                </li>
              </ul>			  
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100px;
  padding: 0;
}
.nav {
  z-index: 1 !important;
}
.navbar {
  /* background: #e6e6e6; */
  opacity: 0.8;
  height: 110px;
}
.navbar-nav {
  /* background: rgb(230, 230, 230); */
  position: relative;
  opacity: 0.9;
}
.navbar-nav .nav-item {
  margin: auto 20px !important;
}
.slide-fade-enter-from
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-fade-enter-active
/* .slide-fade-leave-active below version 2.1.8 */ {
  transition: all 0.5s ease-in;
}
/* .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */
</style>