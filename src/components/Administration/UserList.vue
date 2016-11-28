<template>
	<section class="user-list">
		<div class="panel panel-default">
	    <div class="table-responsive">
	      <table class="table table-striped b-t b-light">
	        <thead>
	          <tr>
	            <th>用户名</th>
	            <th>密码</th>
	            <th>权限</th>
	            <th style="width:100px;">操作</th>
	          </tr>
	        </thead>
	        <tbody>
	          <tr v-for="(item, index) in items">
	            <td>{{ item.username }}</td>
	            <td><span class="text-ellipsis">{{ item.password }}</span></td>
	            <td><span class="text-ellipsis">{{ item.role }}</span></td>
	            <td><span class="text-ellipsis"><button class="btn btn-danger btn-sm btn-info" @click="delItem(index)"><i class="fa fa-fw fa-trash-o"></i> 删除</button></span></td>
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
				items: []
			}
		},
		methods: {
			getList () {
				fetch(apiURL + '/admin/users', {
					  method: 'GET',
					  headers: {
					    "x-auth-token": this.$store.state.login.token
					  }
					})
						.then(checkStatus)
						.then(parseJSON)
						.then(data => {
							data.forEach((e, index, arr) => {
								e.role = e.role === "ADMIN" ? "管理员" : "普通用户";
								this.items.push(e);
							})
						})
						.catch(error => {
							// 用户名不合法 或 token 过期
							unauthorized(error, this);
					  	console.warn(error);
					  })
			},
			delItem (index) {
				this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
       }).then(() => {
       		// 异步操作
       		fetch(apiURL + '/admin/users/' + this.items[index]['username'], {
					  method: 'DELETE',
					  headers: {
					    "x-auth-token": this.$store.state.login.token
					  }
					})
						.then(checkStatus)
						.then(data => {
							// 删除 data 中对应项
       				this.items.splice(index, 1);
       				// tips success
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
						})
						.catch(error => {
							// 用户名不合法 或 token 过期
							unauthorized(error, this);
					  	console.warn(error);
					 })
        }).catch(() => {
        	// tips cancel
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
			}
		},
		created () {
			this.getList();
		}
	}
</script>