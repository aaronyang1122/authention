<template>
	<div class="panel panel-default">
    <div class="panel-heading font-bold">Horizontal form</div>
    <div class="panel-body">
      <form class="bs-example form-horizontal">
        <div class="form-group">
          <label class="col-lg-2 control-label">Email</label>
          <div class="col-lg-10">
            <input type="email" class="form-control" placeholder="Email">
            <span class="help-block m-b-none">Example block-level help text here.</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-2 control-label">Password</label>
          <div class="col-lg-10">
            <input type="password" class="form-control" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-offset-2 col-lg-10">
            <div class="checkbox">
              <label class="i-checks">
                <input type="checkbox" checked=""><i></i> Remember me
              </label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-offset-2 col-lg-10">
            <button type="submit" class="btn btn-sm btn-info">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>