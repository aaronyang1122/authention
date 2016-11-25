<template>
	<section>
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">Footable</h1>
		</div>
		<div class="wrapper-md">
		  <div class="panel panel-default">
		    <div class="panel-heading">
		      Footable - make HTML tables on smaller devices look awesome
		    </div>
		    <div>
		      <table class="table footable footable-1 footable-filtering footable-filtering-right footable-paging footable-paging-center breakpoint-lg" ui-jq="footable"  style="display: table;">
						<thead>
							<tr class="footable-filtering">
								<th colspan="6">
									<form class="form-inline">
										<div class="form-group">
											<label class="sr-only">Search</label>
											<div class="input-group">
												<input type="text" class="form-control" placeholder="Search">
												<div class="input-group-btn">
													<button type="button" class="btn btn-primary">
							        								<span class="fooicon fooicon-search"></span>
							        							</button>
													<button type="button" class="btn btn-default dropdown-toggle">
							        								<span class="caret"></span>
							        							</button>
													<ul class="dropdown-menu dropdown-menu-right">
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">ID</label></a>
														</li>
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">First Name</label></a>
														</li>
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">Last Name</label></a>
														</li>
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">Job Title</label></a>
														</li>
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">Started On</label></a>
														</li>
														<li>
															<a class="checkbox"><label><input type="checkbox" checked="checked">DOB</label></a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</form>
								</th>
							</tr>
							<tr class="footable-header">
								<th data-breakpoints="xs" class="footable-sortable" style="display: table-cell;">ID<span class="fooicon fooicon-sort"></span></th>
								<th class="footable-sortable" style="display: table-cell;">First Name<span class="fooicon fooicon-sort"></span></th>
								<th class="footable-sortable" style="display: table-cell;">Last Name<span class="fooicon fooicon-sort"></span></th>
								<th data-breakpoints="xs" class="footable-sortable" style="display: table-cell;">Job Title<span class="fooicon fooicon-sort"></span></th>
								<th data-breakpoints="xs sm" class="footable-sortable" style="display: table-cell;">Started On<span class="fooicon fooicon-sort"></span></th>
								<th data-breakpoints="xs sm md" data-title="DOB" class="footable-sortable" style="display: table-cell;">DOB<span class="fooicon fooicon-sort"></span></th>
							</tr>
						</thead>
						<tbody>
							<tr data-expanded="true">
								<td style="display: table-cell;">1</td>
								<td style="display: table-cell;">Dennise</td>
								<td style="display: table-cell;">Fuhrman</td>
								<td style="display: table-cell;">High School History Teacher</td>
								<td style="display: table-cell;">November 8th 2011</td>
								<td style="display: table-cell;">July 25th 1960</td>
							</tr>
							<tr>
								<td style="display: table-cell;">2</td>
								<td style="display: table-cell;">Elodia</td>
								<td style="display: table-cell;">Weisz</td>
								<td style="display: table-cell;">Wallpaperer Helper</td>
								<td style="display: table-cell;">October 15th 2010</td>
								<td style="display: table-cell;">March 30th 1982</td>
							</tr>
							<tr>
								<td style="display: table-cell;">3</td>
								<td style="display: table-cell;">Raeann</td>
								<td style="display: table-cell;">Haner</td>
								<td style="display: table-cell;">Internal Medicine Nurse Practitioner</td>
								<td style="display: table-cell;">November 28th 2013</td>
								<td style="display: table-cell;">February 26th 1966</td>
							</tr>
							<tr>
								<td style="display: table-cell;">4</td>
								<td style="display: table-cell;">Junie</td>
								<td style="display: table-cell;">Landa</td>
								<td style="display: table-cell;">Offbearer</td>
								<td style="display: table-cell;">October 31st 2010</td>
								<td style="display: table-cell;">March 29th 1966</td>
							</tr>
							<tr>
								<td style="display: table-cell;">5</td>
								<td style="display: table-cell;">Solomon</td>
								<td style="display: table-cell;">Bittinger</td>
								<td style="display: table-cell;">Roller Skater</td>
								<td style="display: table-cell;">December 29th 2011</td>
								<td style="display: table-cell;">September 22nd 1964</td>
							</tr>
							<tr>
								<td style="display: table-cell;">6</td>
								<td style="display: table-cell;">Bar</td>
								<td style="display: table-cell;">Lewis</td>
								<td style="display: table-cell;">Clown</td>
								<td style="display: table-cell;">November 12th 2012</td>
								<td style="display: table-cell;">August 4th 1991</td>
							</tr>
							<tr>
								<td style="display: table-cell;">7</td>
								<td style="display: table-cell;">Usha</td>
								<td style="display: table-cell;">Leak</td>
								<td style="display: table-cell;">Ships Electronic Warfare Officer</td>
								<td style="display: table-cell;">August 14th 2012</td>
								<td style="display: table-cell;">November 20th 1979</td>
							</tr>
							<tr>
								<td style="display: table-cell;">8</td>
								<td style="display: table-cell;">Lorriane</td>
								<td style="display: table-cell;">Cooke</td>
								<td style="display: table-cell;">Technical Services Librarian</td>
								<td style="display: table-cell;">September 21st 2010</td>
								<td style="display: table-cell;">April 7th 1969</td>
							</tr>
						</tbody>
						<tfoot>
							<tr class="footable-paging">
								<td colspan="6"></td>
							</tr>
						</tfoot>
					</table>
		    </div>
		  </div>
		</div>
	</section>
</template>