<template>
  <header id="header" class="app-header navbar" role="menu">
  	<!-- navbar -->
    <nav-bar></nav-bar>
    <!-- / navbar -->
    <!-- collapse -->
    <collapse></collapse>
    <!-- / collapse -->
  </header>
</template>
<script>
	import NavBar from './Header/Navbar'
	import Collapse from './Header/Collapse'
	export default {
	  components: {
	    NavBar,
	    Collapse
	  }
	}
</script>

