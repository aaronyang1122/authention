<template>
	<section>
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">Beauty Your Data</h1>
		</div>
		<div class="wrapper-md">
			<div class="row">
		    <div class="col-sm-6">
					<spline></spline>
				</div>
				<div class="col-sm-6">
					<multiple></multiple>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6">
					<orderbar></orderbar>
				</div>
				<div class="col-sm-6">
					<bar></bar>
				</div>
			</div>
			
			<div class="row">
				<div class="col-sm-6">
					<compose></compose>
				</div>
				<div class="col-sm-6">
					<donutpie></donutpie>
				</div>
			</div>
			
			<pie></pie>
			<datagraph></datagraph>
			<stacked></stacked>
			<easypiechart></easypiechart>
			<animatechart></animatechart>
			<rotate></rotate>
		</div>
	</section>
</template>
<script>
	import spline from './Spline'
	import multiple from './Multiple'
	import orderbar from './Orderbar'
	import bar from './Bar'
	import compose from './Compose'
	import donutpie from './Donutpie'
	import pie from './Pie'
	import datagraph from './Datagraph'
	import stacked from './Stacked'
	import easypiechart from './Easypiechart'
	import animatechart from './Animate'
	import rotate from './Rotate'

	export default {
	  components: {
	    spline,
	    multiple,
	    orderbar,
	    bar,
	    compose,
	    donutpie,
	    pie,
	    datagraph,
	    stacked,
	    easypiechart,
	    animatechart,
	    rotate
	  }
	}
</script>
