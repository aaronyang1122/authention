<template>
	<section>
		<!-- title -->
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">Form Elements</h1>
		</div>
		<!-- / title -->
		<div class="wrapper-md" ng-controller="FormDemoCtrl">
			<div class="row">
		    <div class="col-sm-6">
		      <basic-form></basic-form>
		    </div>
		    <div class="col-sm-6">
		      <horizontal-form></horizontal-form>
		    </div>
	 		</div>
	 		<inline-form></inline-form>
	 		<form-elements></form-elements>
		</div>
		
	</section>
</template>
<script>
	import BasicForm from './BasicForm'
	import HorizontalForm from './HorizontalForm'
	import InlineForm from './InlineForm'
	import FormElements from './FormElements'
	export default {
	  components: {
	    BasicForm,
	    HorizontalForm,
	    InlineForm,
	    FormElements
	  }
	}
</script>