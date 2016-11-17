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
	import Vue from 'vue';
	import matchBox from './MatchBox';
	import VueResource from 'vue-resource';
	import { toBase64, apiURL } from '../../api/api';

	Vue.use(VueResource);
	
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
				},
				test: ''
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
    			this.login().then(function () {
    				this.$router.push({name: 'index'})
    			}.bind(this));
    			// 登录跳转
    		}
	    },
	    login () {
	    	// 登录获取 token
	    	this.$http.get(apiURL + '/', {
  				headers: {
  					'Authorization': 'Basic ' + toBase64([this.form.username.value, this.form.password.value])
  				},
  				timeout: 500
  			}).then((response) => {
  				if (response.status === 200) {
  					// set token to the store
  					this.$store.dispatch('settoken', response.headers.get('x-auth-token'));
  					console.log(this.$store.state.login.token)
  				}
  			}).catch(function (e) {
  				if (!e.ok) {
  					this.message.error = '用户名密码错误，或账户不存在';
  				}
  			})
  			// login.then()
  			this.then = function (callback) {
	    		if (this.$store.state.login.token !== null) {
	    			// Configuration token
	    			this.$http.headers.common['x-auth-token'] = this.$store.state.login.token;
	    			callback();
	    		} else {
	    			console.warn('token 获取失败 或 token 为 null 请检查 response headers');
	    		}
	    	}
  			return this;
	    },
	    getProfile () {
	    	// 返回当前用户属性
	    	this.$http.get(apiURL + '/profile', {
	    		timeout: 500
	    	}).then((response) => {
	    		if (response.status === 200) {
	    			// set custom to the store
	    			this.$store.dispatch('setcustom', response.body);
	    		}
	    	}).catch(function (e) {
  				if (!e.ok) {
  					this.message.error = '获取用户信息错误';
  				}
  			});
	    }
   },
		watch: {
			'form.username.value' (val, oldVal) {
				console.log(val)
			},
			'test' (val, oldVal) {
				console.log(val)
			}
		},
		created () {
//			console.log(this.$store.getters.doneTodos)
		}
	}

</script>
