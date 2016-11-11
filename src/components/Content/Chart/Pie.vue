<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">Pie</div>
        <div class="panel-body text-center">              
          <div ui-jq="sparkline" ui-options="[60,40], {type:'pie', height:154, sliceColors:['#23b7e5','#eaeeea']}" class="sparkline inline"><canvas width="154" height="154" style="display: inline-block; width: 154px; height: 154px; vertical-align: top;"></canvas></div>
          <div class="line pull-in"></div>
          <div class="text-xs">
            <i class="fa fa-circle text-info"></i> 60%
            <i class="fa fa-circle text-muted m-l"></i> 40%
          </div>
        </div>
      </div>
</template>