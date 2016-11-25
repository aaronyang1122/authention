<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">Data graph</div>
        <div class="bg-light dker wrapper m-t-n-xxs">
          <span class="pull-right">Friday</span>
          <span class="h4">$540</span>
          <div class="text-center m-b-n m-t-sm">
              <div ui-jq="sparkline" ui-options="[50.32,45.23,47.56,36.25,53.85,40.15,41.25,50.15,57.14,36.15,97.26,50.15,45.32,47.19,37.75,25.15,56.34,50.35,47.25,53.15], {type:'line', height:65, width: '100%', lineWidth:2, valueSpots:{'0:':'#fff'}, lineColor:'#fff', spotColor:'#fff', fillColor:'', highlightLineColor:'#fff', spotRadius:3}"><canvas width="289" height="65" style="display: inline-block; width: 289px; height: 65px; vertical-align: top;"></canvas></div>

              <div ui-jq="sparkline" ui-options="[ 10,9,11,10,11,10,12,10,9,10,11,9,8 ], {type:'bar', height:45, barWidth:6, barSpacing:6, barColor:'#7266ba'}" class="sparkline inline"><canvas width="150" height="45" style="display: inline-block; width: 150px; height: 45px; vertical-align: top;"></canvas></div>
          </div>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-xs-4">
              <small class="text-muted block">Market</small>
              <span>$1500.00</span>
            </div>
            <div class="col-xs-4">
              <small class="text-muted block">Referal</small>
              <span>$600.00</span>
            </div>
            <div class="col-xs-4">
              <small class="text-muted block">Affiliate</small>
              <span>$400.00</span>
            </div>
          </div>
        </div>
      </div>
</template>