<template>
	<div class="panel panel-default">
          <div class="panel-heading font-bold">Donut Pie</div>
          <div class="panel-body">
            <div ui-jq="plot" ui-options="
              [ [10, 80],  [20, 40], [30, 30],  [40, 20] ],
              {
                series: { pie: { show: true, innerRadius: 0.5, stroke: { width: 0 }, label: { show: true, threshold: 0.05 } } },
                colors: ['#7266ba','#23b7e5','#27c24c','#fad733','#f05050'],
                grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },   
                tooltip: true,
                tooltipOpts: { content: '%s: %p.0%' }
              }
            " style="height: 240px; padding: 0px; position: relative;"><canvas class="flot-base" width="347" height="240" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 347px; height: 240px;"></canvas><canvas class="flot-overlay" width="347" height="240" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 347px; height: 240px;"></canvas><span class="pieLabel" id="pieLabel0" style="position: absolute; top: 91px; left: 254px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(114,102,186);">undefined<br>47%</div></span><span class="pieLabel" id="pieLabel1" style="position: absolute; top: 193px; left: 89px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(35,183,229);">undefined<br>24%</div></span><span class="pieLabel" id="pieLabel2" style="position: absolute; top: 71px; left: 42px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(39,194,76);">undefined<br>18%</div></span><span class="pieLabel" id="pieLabel3" style="position: absolute; top: 0px; left: 107px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(250,215,51);">undefined<br>12%</div></span></div>
          </div>
        </div>
</template>