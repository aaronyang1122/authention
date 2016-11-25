<template>
	<section class="index">
		<!-- header -->
		<header-wrap></header-wrap>
		<!-- / header -->
		<!-- aside -->
		<aside-wrap></aside-wrap>
		<!-- / aside -->
		<div id="content" class="app-content">
	  	<div class="app-content-body ">
	  		<!-- content -->
	  		<router-view></router-view>
	  		<!-- / content -->
			</div>
	  </div>
		<!-- footer -->
		<foot></foot>
		<!-- / footer -->
	</section>
</template>

<script>
	import HeaderWrap from './Header'
	import AsideWrap from './Aside'
	import Foot from './Footer'
	
	export default {
	  components: {
	    HeaderWrap,
	    AsideWrap,
	    Foot
	  },
	  created () {}
	}
</script>

