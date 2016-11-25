<template>
	<div class="container w-xxl w-auto-xs">
		<a href="" class="navbar-brand block m-t">登录</a>
		<div class="m-b-lg">
			<div class="wrapper text-center">
				<strong>后台管理系统</strong>
			</div>
			<form name="form" class="form-validation" @submit.prevent="submit">
				<div class="text-danger wrapper text-center">{{message.error}}</div>
				<div class="list-group list-group-sm">
					<div class="list-group-item">
						<match-box :clear-button="form.username.clear" :placeholder="form.username.placeholder" v-model="form.username.value" :required="true"></match-box>
					</div>
					<div class="list-group-item">
						<match-box :clear-button="form.password.clear" :placeholder="form.password.placeholder" v-model="form.password.value" :required="true" :type="form.password.type"></match-box>
					</div>
				</div>
				<button type="submit" class="btn btn-lg btn-primary btn-block" >登 录</button>
			</form>
		</div>
		<div class="text-center">
			<p>
				<small class="text-muted">Web app framework base on Bootstrap and Vue<br>© 2016</small>
			</p>
		</div>
	</div>
</template>
<script>
	import matchBox from './MatchBox';
	import { toBase64, apiURL, checkStatus, parseJSON } from '../../api/api';
	import 'whatwg-fetch';
	
	export default {
		data () {
			return {
				result: {},
				form: {
					username: {
						placeholder: '用户名',
						value: '',
						clear: true
					},
					password: {
						placeholder: '密码',
						value: '',
						clear: true,
						type: 'password'
					}
				},
				message: {
					error: ''
				}
			}
		},
		components: {
			matchBox
		},
		computed: {
			isIE9 () {
				// ie9 don't have the prop 'required'
     		return !('required' in document.createElement('input'));
     }
		},
		methods: {
			handleValidate (e) {
        var self = this;
        // get validity instance
        var $validity = e.target.$validity;
        // run validate method !!
        $validity.validate(function () {
          // keep validation result from result property of validity instance
          self.result = $validity.result
        })
    	},
    	submit () {
    		this.test = this.$store.state.login.custom
    		// ie9
    		if (this.form.username.value === '' || this.form.password.value === '') {
    			// throw error
    			this.message.error = '用户名、密码不能为空';
    		} else {
    			this.message.error = '';
    			// 先获取 token 再获取用户资料信息
    			this.login()
    			.then(
    				() => {
    					// success
    					// getProfile
    					this.getProfile()
    						.then(
    							() => {
    								// success 
    								// 跳转首页
    								this.$router.push({name: 'check'})
    							},
    							(err) => {
    								// failed
	    							console.warn(err)
    							}
    						);
	    			}, 
	    			(err) => {
	    				// failed
	    				console.warn(err)
	    			}
	    		);
    		}
	    },
	    login () {
	    	return new Promise((resolve, reject) => {
	    		// 登录获取 token
					fetch(apiURL + '/', {
					  method: 'GET',
					  headers: {
					    'Authorization': 'Basic ' + toBase64([this.form.username.value, this.form.password.value])
					  }
					})
						.then(checkStatus)
						.then(response => {
							this.$store.dispatch('settoken', response.headers.get('x-auth-token'));
							// resolve
							resolve();
						})
						.catch(error => {
					  	if (error.status === 401) {
					  		this.message.error = '用户名密码错误，或账户不存在';
					  	} else {
					  		console.warn(error);
					  	}
					  	// reject
					  	reject(error);
					  })
	    	});
	    },
	    getProfile () {
	    	return new Promise((resolve, reject) => {
	    		fetch(apiURL + '/profile', {
					  method: 'GET',
					  headers: {
					    'x-auth-token': this.$store.state.login.token
					  }
					})
	    			.then(checkStatus)
	    			.then(parseJSON)
	    			.then(data => {
							this.$store.dispatch('setcustom', data);
							resolve();
						})
	    			.catch(error => {
	    				this.message.error = '获取用户信息错误';
					  	// reject
					  	reject(error);
					  })
	    	});
	    }
   	},
		watch: {
//			'form.username.value' (val, oldVal) {
//				console.log(val)
//			}
		},
		created () {
//			console.log(this.$store.getters.doneTodos)
		}
	}

</script>
