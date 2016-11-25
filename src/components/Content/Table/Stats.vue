<template>
	<div class="panel panel-default">
    <div class="panel-heading">Stats</div>
    <table class="table table-striped m-b-none">
      <thead>
        <tr>
          <th style="width:60px;" class="text-center">Graph</th>
          <th>Item</th>                    
          <th style="width:70px;"></th>
        </tr>
      </thead>
      <tbody>
        <tr>                    
          <td>
            <div ng-init="data1=[ 16,15,15,14,17,18,16,15,16 ]" ui-jq="sparkline" ui-options=", {type:'bar', height:19, barWidth:4, barSpacing:2, barColor:'#27c24c'}" class="sparkline inline"><canvas width="4" height="19" style="display: inline-block; width: 4px; height: 19px; vertical-align: top;"></canvas></div>
          </td>
          <td>App downloads</td>
          <td class="text-success">
            <i class="fa fa-level-up"></i> 40%
          </td>
        </tr>
        <tr>
          <td class="text-center">
            <div ng-init="data2=[ 60,30,10 ]" ui-jq="sparkline" ui-options=", {type:'pie', height:19, sliceColors:['#23b7e5','#fff','#fad733']}" class="sparkline inline"><canvas width="19" height="19" style="display: inline-block; width: 19px; height: 19px; vertical-align: top;"></canvas></div>
          </td>
          <td>Social connection</td>
          <td class="text-success">
            <i class="fa fa-level-up"></i> 20%
          </td>
        </tr>
        <tr>                    
          <td>
            <div ng-init="data3=[ 16,15,15,14,17,18,16,15,16 ]" ui-jq="sparkline" ui-options=", {type:'line', height:19, width:60, lineColor:'#7266ba', fillColor:'#fff'}" class="sparkline inline"><canvas width="60" height="19" style="display: inline-block; width: 60px; height: 19px; vertical-align: top;"></canvas></div>
          </td>
          <td>Revenue</td>
          <td class="text-warning">
            <i class="fa fa-level-down"></i> 5%
          </td>
        </tr>
        <tr>                    
          <td>
            <div ng-init="data4=[ 16,15,15,14,17,18,16,15,16 ]" ui-jq="sparkline" ui-options=", {type:'discrete', height:19, width:60, lineColor:'#27c24c'}" class="sparkline inline"><canvas width="60" height="19" style="display: inline-block; width: 60px; height: 19px; vertical-align: top;"></canvas></div>
          </td>
          <td>Customer increase</td>
          <td class="text-danger">
            <i class="fa fa-level-down"></i> 20%
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>