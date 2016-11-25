<template>
	<div class="panel panel-default">
        <div class="panel-heading font-bold">
          Rotate
        </div>
        <div class="panel-body text-center">
          <h4>3,450</h4>
          <small class="text-muted block">Worldwide visitors</small>
          <div class="inline m-t m-b">
            <div ui-jq="easyPieChart" ui-options="{
                      percent: 50,
                      lineWidth: 10,
                      trackColor: '#e8eff0',
                      barColor: '#23b7e5',
                      scaleColor: false,
                      size: 158,
                      rotate: 90,
                      lineCap: 'butt'
                    }" class="easyPieChart" style="width: 158px; height: 158px; line-height: 158px;">
              <div>
                <span class="h2 m-l-sm step">50</span>%
                <div class="text text-sm">new visits</div>
              </div>
            <canvas width="158" height="158"></canvas></div>
          </div>
        </div>
        <div class="panel-footer"><small>% of avarage rate of the visits</small></div>
      </div>
</template>