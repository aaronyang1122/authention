<template>
	<div id="content" class="app-content" role="main">
  	<div class="app-content-body ">
  		<!-- content -->
  		<slot></slot>
  		<form-temp></form-temp>
  		<foo-table></foo-table>
  		<static-table></static-table>
  		<chart></chart>
  		
  		<!-- / content -->
		</div>
  </div>
</template>
<script>
	import FormTemp from './Content/Form/Form'
	import FooTable from './Content/Table/Footable'
	import StaticTable from './Content/Table/Static'
	import Chart from './Content/Chart/Chart'
	export default {
	  components: {
	    FormTemp,
	    FooTable,
	    StaticTable,
	    Chart
	  }
	}
</script>