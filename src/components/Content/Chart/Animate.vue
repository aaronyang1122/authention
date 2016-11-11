<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">
          Animate
        </div>
        <div class="panel-body text-center">
          <h4><small>last </small>12<small> hrs</small></h4>
          <small class="text-muted block">yesterday: 20%</small>
          <div class="inline">
            <div ui-jq="easyPieChart" ui-options="{
                      percent: 25,
                      lineWidth: 10,
                      trackColor: '#e8eff0',
                      barColor: '#27c24c',
                      scaleColor: '#e8eff0',
                      size: 188,
                      lineCap: 'butt',
                      animate: 1000
                    }" class="easyPieChart" style="width: 188px; height: 188px; line-height: 188px;">
              <div>
                <span class="h2 m-l-sm step">25</span>%
                <div class="text text-sm">today</div>
              </div>
            <canvas width="188" height="188"></canvas></div>
          </div>
        </div>
        <div class="panel-footer"><small>% of change</small></div>
      </div>
</template>