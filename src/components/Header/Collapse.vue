<template>
	<div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
		<!-- buttons -->
    <buttons></buttons>
    <!-- / buttons -->
    <!-- links -->
    <links></links>
    <!-- / links -->
    <!-- search -->
    <search></search>
    <!-- /search -->
    <!-- nabar -->
    <nabar></nabar>
    <!-- / nabar -->
  </div>
</template>
<script>
	import Buttons from './Buttons'
	import Links from './Link'
	import Search from './Search'
	import Nabar from './Nabar'
	export default {
	  components: {
	    Buttons,
	    Links,
	    Search,
	    Nabar
	  }
	}
</script>
