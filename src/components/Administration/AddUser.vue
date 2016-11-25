<template>
	<section class="add-user">
		<div class="panel panel-default">
		    <div class="panel-body">
		      <form @submit.prevent="submit" class="form-horizontal">
		        <div class="form-group">
		          <label class="col-sm-2 control-label">用户名</label>
		          <div class="col-sm-10">
		          	<input type="text" class="form-control" v-model="user.username" required="" />
		          </div>
		        </div>
		        <div class="form-group">
		          <label class="col-sm-2 control-label">密码</label>
		          <div class="col-sm-10">
		          	<input type="text" class="form-control" v-model="user.password" required="" />
		          </div>
		        </div>
		        <div class="form-group">
		          <label class="col-sm-2 control-label">开启管理员权限</label>
		          <div class="col-sm-10">
		          	<label class="i-switch i-switch-md m-t-xs m-r">
		              <input type="checkbox" v-model="user.role">
		              <i></i>
		            </label>
		          </div>
		        </div>
		        <div class="line line-dashed b-b line-lg pull-in"></div>
		        <div class="form-group">
		          <div class="col-sm-4 col-sm-offset-2">
		            <button type="submit" class="btn m-b-xs w-xs btn-primary">提交</button>
		          </div>
		        </div>
		      </form>
		    </div>
		  </div>
	</section>
</template>

<script>
	import 'whatwg-fetch';
	import { apiURL, checkStatus, parseJSON } from '../../../api/api';
	
	export default {
		data () {
			return {
				user: {
					username: '',
					password: '',
					role: false
				}
			}
		},
		computed: {
			_role () {
				return this.user.role ? 'ADMIN' : 'USER';
			}
		},
		methods: {
			submit () {
				if (this.newPWD === '') {
					this.$message({
	          message: '用户名密码不为空',
	          type: 'error'
	        });
				} else {
					this.addUser();
				}
			},
			addUser () {
				fetch(apiURL + '/admin/users', {
					  method: 'POST',
					  headers: {
					    "x-auth-token": this.$store.state.login.token,
					    "Content-Type": "application/json",
					    "Accept": "application/json"
					  },
					  body: JSON.stringify({
					    "username": this.user.username,
					    "password": this.user.password,
					    "role": this._role
					  })
					})
						.then(checkStatus)
						.then(response => {
							this.user.username = '';
							this.user.password = '';
							this.user.role = false;
							this.$message({
			          message: '成功添加一个用户',
			          type: 'success'
			        });
						})
						.catch(error => {
							this.$message({
			          message: error,
			          type: 'error'
			        });
					  	console.warn(error);
					  })
			}
		},
		created () {
		},
		watch: {
			'user.role' (val, oldVal) {
				console.log(this._role)
			}
		}
	}
</script>