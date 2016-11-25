<template>
	<section>
		<div class="bg-light lter b-b wrapper-md">
		  <h1 class="m-n font-thin h3">{{ title }}</h1>
		</div>
		<div class="wrapper-md">
			<router-view></router-view>
		</div>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				title: ''
			}
		},
		methods: {
			changeTitle (name) {
				switch (name) {
					case "check":
					 	this.title = '获取令牌信息';
						break;
					case "unbind":
						this.title = '解绑令牌';
						break;
				}
			}
		},
		watch: {
			'$route' (val, oldVal) {
				this.changeTitle(this.$route.name)
			}
		},
		created () {
			this.changeTitle(this.$route.name)
		}
	}
</script>