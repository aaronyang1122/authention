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
            <button class="btn btn-sm btn-default" type="button" @click="search">查询</button>
          </span>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table table-striped b-t b-light">
        <thead>
          <tr>
            <th>盛大ID</th>
            <th>设备ID</th>
            <th>日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{ item.sndaId }}</td>
            <td><span class="text-ellipsis">{{ item.deviceId }}</span></td>
            <td><span class="text-ellipsis">{{ item.date }}</span></td>
          </tr>
        </tbody>
      </table>
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
				items: [],
				searchVal: ''
			}
		},
		methods: {
			search () {
				if (this.searchVal !== '') {
					fetch(apiURL + '/op/mobiletoken/' + this.searchVal, {
					  method: 'GET',
					  headers: {
					    "x-auth-token": this.$store.state.login.token
					  }
					})
						.then(checkStatus)
						.then(parseJSON)
						.then(data => {
							console.log(data)
							this.items.push(data)
						})
						.catch(error => {
							if (/SyntaxError/gi.test(error.stack) || /SyntaxError/gi.test(error.name)) {
								// 返回空对象 parseJSON 报错
								this.$message({
				          message: '查无此盛大ID',
				          type: 'error'
				        });
							} else {
								// 用户名不合法 或 token 过期
								unauthorized(error, this);
							}
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