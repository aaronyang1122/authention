<template>
	<section class="check">
		<div class="panel panel-default">
    <div class="panel-heading">
      	输入盛大ID
    </div>
    <div class="row wrapper">
      <div class="col-sm-12">
        <div class="input-group">
          <input type="text" class="input-sm form-control" v-model="searchVal">
          <span class="input-group-btn">
            <button class="btn btn-sm btn-default" type="button" @click="unbind">解绑</button>
          </span>
        </div>
      </div>
    </div>
  </div>
	</section>
</template>

<script>
	import 'whatwg-fetch';
	import { apiURL, checkStatus, parseJSON, unauthorized } from '../../../api/api';
	
	export default {
		data () {
			return {
				searchVal: ''
			}
		},
		methods: {
			unbind () {
				if (this.searchVal !== '') {
					fetch(apiURL + '/op/mobiletoken/' + this.searchVal, {
					  method: 'DELETE',
					  headers: {
					    "x-auth-token": this.$store.state.login.token
					  }
					})
						.then(checkStatus)
						.then(data => {
							this.$message({
			          message: '解绑成功',
			          type: 'success'
			        });
						})
						.catch(error => {
							// 用户名不合法 或 token 过期
							unauthorized(error, this);
					  	console.warn(error);
					  })
				} else {
	        this.$message({
	          message: '请输入查询项',
	          type: 'error'
	        });
				}
			}
		}
	}
</script>	