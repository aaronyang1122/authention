<template>
	<section class="profile">
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">修改登录密码</h1>
		</div>
		<div class="wrapper-md">
		  <div class="panel panel-default">
		    <div class="panel-body">
		      <form @submit.prevent="submit" v-loading.fullscreen.lock="loading" element-loading-text="拼命加载中">
		        <div class="form-group">
		          <label>输入新密码</label>
		          <input v-type="showPWD" v-model="newPWD" class="form-control" required="" />
		        </div>
		        <div class="checkbox">
		          <label class="i-checks">
		            <input type="checkbox" v-model="showPWD"><i></i> 显示密码
		          </label>
		        </div>
		        <button type="submit" class="btn btn-sm btn-primary">提交</button>
		      </form>
		    </div>
		  </div>
		</div>
	</section>
</template>

<script>
	import { apiURL, checkStatus, parseJSON } from '../../api/api';
	import 'whatwg-fetch';
	
	var changeElType = (el, binding) => {
 		if (binding.value === true) {
			el.setAttribute('type', 'text');
		} else {
			el.setAttribute('type', 'password');
		}
 	}
	
	export default {
		components: {
			alert
		},
		data () {
			return {
				newPWD: '',
				showPWD: false,
				alert: true,
				loading: false
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
					this.updatePWD();
				}
			},
			updatePWD () {
				// loading
				this.loading = true;
				fetch(apiURL + '/profile', {
					  method: 'PUT',
					  headers: {
					    "x-auth-token": this.$store.state.login.token,
					    "Content-Type": "application/json",
					    "Accept": "application/json"
					  },
					  body: JSON.stringify({
					    "password": this.newPWD
					  })
					})
						.then(checkStatus)
						.then(() => {
							this.loading = false;
						})
						.then(response => {
							this.newPWD = '';
							this.successMSG();
						})
						.catch(error => {
							this.$message({
			          message: error,
			          type: 'error'
			        });
					  	console.warn(error);
					  })
			},
			successMSG () {
        this.$message({
          message: '密码修改成功',
          type: 'success'
        });
     	}
		},
		directives: {
			type: {
				bind (el, binding) {
					changeElType(el, binding)
				},
				update (el, binding) {
					changeElType(el, binding)
				}
			}
		}
	}
</script>