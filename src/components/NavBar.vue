<template>
<div class="main-banner">
		<div>
			<div class="row">
				<div class="col-12">
					<nav class="navbar navbar-expand-md navbar-light">
					
						<a class="navbar-brand p-0"><img class="logo" src="../assets/logo.png" alt=""></a>	
						
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						
						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav ml-auto py-4 py-md-0">
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
									<a class="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Home</a>
									<div class="dropdown-menu">
										<a class="dropdown-item" >Action</a>
										<a class="dropdown-item" >Another action</a>
										<a class="dropdown-item" >Something else here</a>
										<a class="dropdown-item" >Another action</a>
									</div>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" >Portfolio</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" >Agency</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" >Services</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" >Journal</a>
								</li>
								<li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a class="nav-link" >Contact</a>
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
.main-banner{
    background-image: url('../assets/hero_1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

}
.logo{
  width: 100px;
  padding: 0;
}

.nav{
    z-index: 1!important;
}

.navbar {
	background: #e6e6e6;
    opacity: 0.8;
    height: 110px;
}
.navbar-nav {
	background: rgb(230, 230, 230);
	position:relative;
	opacity: 0.9;
}

.navbar-nav .nav-item {
  margin: auto 20px!important;
}
</style>