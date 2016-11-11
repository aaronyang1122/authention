<template>
	<section>
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">Static Table</h1>
		</div>
		<div class="wrapper-md">
		  <div class="row">
		    <div class="col-sm-6">
		      <task></task>
		    </div>
		    <div class="col-sm-6">
		      <stats></stats>
		    </div>
		  </div>
		  <responsive></responsive>
		</div>
	</section>
</template>
<script>
	import Task from './Task'
	import Stats from './Stats'
	import Responsive from './Responsive'
	export default {
	  components: {
	    Task,
	    Stats,
	    Responsive
	  }
	}
</script>