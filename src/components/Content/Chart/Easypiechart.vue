<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">
          Easypiechart
        </div>
        <div class="panel-body text-center">
          <h4>62.5<small> hrs</small></h4>
          <small class="text-muted block">Updated at 2 minutes ago</small>
          <div class="inline">
            <div ui-jq="easyPieChart" ui-options="{
                      percent: 75,
                      lineWidth: 10,
                      trackColor: '#e8eff0',
                      barColor: '#fad733',
                      scaleColor: '#e8eff0',
                      size: 188,
                      lineCap: 'butt'
                    }" class="easyPieChart" style="width: 188px; height: 188px; line-height: 188px;">
              <div>
                <span class="h2 m-l-sm step">75</span>%
                <div class="text text-sm">new</div>
              </div>
            <canvas width="188" height="188"></canvas></div>
          </div>
        </div>
        <div class="panel-footer"><small>% of avarage rate of the Conversion</small></div>
      </div>
</template>