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
						<match-box :clear-button="form.password.clear" :placeholder="form.password.placeholder" v-model="form.password.value" :type="form.password.type"></match-box>
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
    		this.$store.dispatch('savetoken', [this.form.username.value, this.form.password.value]);
    		this.test = this.$store.state.login.token
    		this.message.error = this.form.username.value === '' || this.form.password.value === '' ? '用户名、密码不能为空' : '';
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
			console.log(this.$store.getters.doneTodos)
		}
	}

</script>
