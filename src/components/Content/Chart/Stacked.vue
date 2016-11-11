<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">Stacked</div>
        <div class="panel-body">
          <div class="m-b-md">
            <p class="h3 font-thin">Investings</p>
            Avarage investing in last year.
          </div>
          <div class="row m-b">
            <div class="col-xs-6">
              <div ui-jq="sparkline" ui-options="[ [2, 8], [4, 6], [6, 4], [8, 2], [10, 0], [8, 2], [6, 4], [4, 6], [2,8] ], {type:'bar', height:112, barWidth:6, barSpacing:10, stackedBarColor:['#27c24c', '#d7e5e8']}" class="sparkline inline"><canvas width="134" height="112" style="display: inline-block; width: 134px; height: 112px; vertical-align: top;"></canvas></div>
            </div>
            <div class="col-xs-6">
              Revenue
              <div class="h3 text-black m-b">4500,00</div>
              Costs
              <div class="h3 text-success">3450,00</div>
            </div>
          </div>
        </div>
      </div>
</template>