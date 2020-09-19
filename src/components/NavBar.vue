<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link">Features</a>
      <a class="nav-link">Pricing</a>
    </div>
       <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item">Action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Separated link</a>
            </div>
            </div>
  </div>
</nav>
</div>

</template>

<style scoped>
.nav{
    z-index: 1!important;
}
.nav-toggle {
    padding: .5em;
    background: transparent;
    border: 0;
    cursor: pointer;
    position: fixed;
    top: 1em;
    z-index: 1000;
    
}
</style>