<template>
	<section>
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">Datatable</h1>
		</div>
		<div class="wrapper-md">
  <div class="panel panel-default">
    <div class="panel-heading">
      DataTables
    </div>
    <div class="table-responsive">
      <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-6"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="DataTables_Table_0"></label></div></div></div><div class="row"><div class="col-sm-12"><table ui-jq="dataTable" ui-options="{
          sAjaxSource: 'api/datatable.json',
          aoColumns: [
            { mData: 'engine' },
            { mData: 'browser' },
            { mData: 'platform' },
            { mData: 'version' },
            { mData: 'grade' }
          ]
        }" class="table table-striped b-t b-b dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="width: 1678px;">
        <thead>
          <tr role="row"><th style="width: 300px;" class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending">Rendering engine</th><th style="width: 384px;" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Browser</th><th style="width: 384px;" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">Platform(s)</th><th style="width: 215px;" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Engine version</th><th style="width: 215px;" class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">CSS grade</th></tr>
        </thead>
        <tbody>
        <tr role="row" class="odd"><td class="sorting_1">Gecko</td><td>Firefox 1.0</td><td>Win 98+ / OSX.2+</td><td>1.7</td><td>A</td></tr><tr role="row" class="even"><td class="sorting_1">Gecko</td><td>Firefox 1.5</td><td>Win 98+ / OSX.2+</td><td>1.8</td><td>A</td></tr><tr role="row" class="odd"><td class="sorting_1">Gecko</td><td>Firefox 2.0</td><td>Win 98+ / OSX.2+</td><td>1.8</td><td>A</td></tr><tr role="row" class="even"><td class="sorting_1">Gecko</td><td>Firefox 3.0</td><td>Win 2k+ / OSX.3+</td><td>1.9</td><td>A</td></tr><tr role="row" class="odd"><td class="sorting_1">Gecko</td><td>Camino 1.0</td><td>OSX.2+</td><td>1.8</td><td>A</td></tr><tr role="row" class="even"><td class="sorting_1">Gecko</td><td>Camino 1.5</td><td>OSX.3+</td><td>1.8</td><td>A</td></tr><tr role="row" class="odd"><td class="sorting_1">Gecko</td><td>Netscape 7.2</td><td>Win 95+ / Mac OS 8.6-9.2</td><td>1.7</td><td>A</td></tr><tr role="row" class="even"><td class="sorting_1">Gecko</td><td>Netscape Browser 8</td><td>Win 98SE+</td><td>1.7</td><td>A</td></tr><tr role="row" class="odd"><td class="sorting_1">Gecko</td><td>Netscape Navigator 9</td><td>Win 98+ / OSX.2+</td><td>1.8</td><td>A</td></tr><tr role="row" class="even"><td class="sorting_1">Gecko</td><td>Mozilla 1.0</td><td>Win 95+ / OSX.1+</td><td>1</td><td>A</td></tr></tbody>
      </table></div></div><div class="row"><div class="col-sm-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_previous"><a href="#">Previous</a></li><li class="paginate_button active" aria-controls="DataTables_Table_0" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">5</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">6</a></li><li class="paginate_button next" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_next"><a href="#">Next</a></li></ul></div></div></div></div>
    </div>
  </div>
</div>
	</section>
</template>