<template>
	<div class="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
		<!-- buttons -->
    <buttons></buttons>
    <!-- / buttons -->
    <!-- nabar -->
    <nabar></nabar>
    <!-- / nabar -->
  </div>
</template>
<script>
	import Buttons from './Buttons'
	import Nabar from './Nabar'
	export default {
	  components: {
	    Buttons,
	    Nabar
	  }
	}
</script>
