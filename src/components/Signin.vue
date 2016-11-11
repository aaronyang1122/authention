<template>
	<div class="container w-xxl w-auto-xs">
		<a href="" class="navbar-brand block m-t">登录</a>
		<div class="m-b-lg">
			<div class="wrapper text-center">
				<strong>后台管理系统</strong>
			</div>
			<form name="form" class="form-validation" @submit.prevent="onSubmit">
				<div class="text-danger wrapper text-center"></div>
				<div class="list-group list-group-sm">
					<div class="list-group-item">
						<match-box :clear-button="form.username.clear" :placeholder="form.username.placeholder" v-model="form.username.value"></match-box>
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
				}
			}
		},
		components: {
			matchBox
		},
		methods: {
			handleValidate: function (e) {
        var self = this;
        // get validity instance
        var $validity = e.target.$validity;
        // run validate method !!
        $validity.validate(function () {
          // keep validation result from result property of validity instance
          self.result = $validity.result
        })
     	}
		},
		watch: {
		}
	}

</script>
