<template>
	<nav class="navi clearfix">
    <ul class="nav">
      <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
        <span>功能</span>
      </li>
      <li :class="{'active': tags.check||tags.unbind}">
        <a href="" @click.prevent class="auto">      
          <span class="pull-right text-muted">
            <i class="fa fa-fw fa-angle-right text"></i>
            <i class="fa fa-fw fa-angle-down text-active"></i>
          </span>
          <i class="icon-shield icon text-warning-dker"></i>
          <span class="font-bold">手机令牌</span>
        </a>
        <ul class="nav nav-sub dk">
          <li class="nav-sub-header" :class="{'active': tags.check||tags.unbind}">
            <a href="" @click.prevent>
              <span class="font-bold">手机令牌</span>
            </a>
          </li>
          <li :class="{'active': tags.check}">
            <router-link to="/main/token/check">
              <span>获取令牌信息</span>
            </router-link>
          </li>
          <li :class="{'active': tags.unbind}">
            <router-link to="/main/token/unbind">
              <span>解绑令牌</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="line dk hidden-folded"></li>

      <li class="hidden-folded padder m-t m-b-sm text-muted text-xs" v-if="isAdmin">
        <span>管理</span>
      </li>
      <li v-if="isAdmin" :class="{'active': tags.userlist||tags.adduser}">
        <a href="" @click.prevent class="auto">      
          <span class="pull-right text-muted">
            <i class="fa fa-fw fa-angle-right text"></i>
            <i class="fa fa-fw fa-angle-down text-active"></i>
          </span>
          <i class="icon-users icon"></i>
          <span class="font-bold">用户管理</span>
        </a>
        <ul class="nav nav-sub dk">
          <li class="nav-sub-header" :class="{'active': tags.userlist||tags.adduser}">
            <a href="" @click.prevent>
              <span class="font-bold">用户管理</span>
            </a>
          </li>
          <li :class="{'active': tags.userlist}">
            <router-link to="/main/administration/userlist">
              <span>用户列表</span>
            </router-link>
          </li>
          <li :class="{'active': tags.adduser}">
            <router-link to="/main/administration/adduser">
              <span>新增用户</span>
            </router-link>
          </li>     
        </ul>
      </li>
      <li class="line dk hidden-folded" v-if="isAdmin"></li>

      <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">          
        <span>个人中心</span>
      </li>  
      <li :class="{'active': tags.profile}">
      	<router-link to="/main/profile">
          <i class="icon-lock icon"></i>
          <span>修改登录密码</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
	export default {
		data () {
			return {
				tags: {
					check: false,
					unbind: false,
					userlist: false,
					adduser: false,
					profile: false
				}
			}
		},
		computed: {
	    isAdmin () {
	      return this.$store.state.login.custom.role === 'ADMIN';
	    }
	 },
	 watch: {
	 	'$route' (val, oldVal) {
	 		console.log(val)
			this.tags[val.name] = true;
		}
	 },
	 created () {
	 		this.tags[this.$route.name] = true;
		}
	}
</script>