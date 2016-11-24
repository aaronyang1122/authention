<template>
	<ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle clear" data-toggle="dropdown">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img :src="userpic" alt="...">
                <!--<i class="on md b-white bottom"></i>-->
              </span>
              <span class="hidden-sm hidden-md">{{ username }}</span> <b class="caret"></b>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w">
              <li>
                <a ui-sref="app.page.profile">账号信息</a>
              </li>
              <li class="divider"></li>
              <li>
                <a ui-sref="access.signin">登出</a>
              </li>
            </ul>
            <!-- / dropdown -->
          </li>
        </ul>
</template>

<script>
	export default {
		computed: {
	    username () {
	      return this.$store.state.login.custom.username
	    },
	    userpic () {
	    	return this.$store.state.login.custom.role === 'ADMIN' ? '/static/img/b4.jpg' : '/static/img/b18.jpg';
	    }
	  }
	}
</script>