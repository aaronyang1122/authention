<template>
	<div class="panel panel-default">
    <div class="panel-heading">
      <span class="label bg-danger pull-right m-t-xs">4 left</span>
      Tasks
    </div>
    <table class="table table-striped m-b-none">
      <thead>
        <tr>
          <th>Progress</th>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="progress progress-sm progress-striped active m-t-xs m-b-none">
              <div class="progress-bar bg-success" data-toggle="tooltip" data-original-title="80%" style="width: 80%"></div>
            </div>
          </td>
          <td>App prototype design</td>
        </tr>
        <tr>                    
          <td>
            <div class="progress progress-xs m-t-xs m-b-none">
              <div class="progress-bar bg-info" data-toggle="tooltip" data-original-title="40%" style="width: 40%"></div>
            </div>
          </td>
          <td>Design documents</td>
        </tr>
        <tr>                    
          <td>
            <div class="progress progress-xs m-t-xs m-b-none">
              <div class="progress-bar bg-warning" data-toggle="tooltip" data-original-title="20%" style="width: 20%"></div>
            </div>
          </td>
          <td>UI toolkit</td>
        </tr>
        <tr>                    
          <td>
            <div class="progress progress-xs m-t-xs m-b-none">
              <div class="progress-bar bg-danger" data-toggle="tooltip" data-original-title="15%" style="width: 15%"></div>
            </div>
          </td>
          <td>Testing</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>