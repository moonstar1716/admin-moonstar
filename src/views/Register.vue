<template>
  <div class="register">
	  {{ msg }}

	<div class="login_main" id="app">
		<div class="login_box">
			<h2 class="login_title">注册用户</h2>
			<input type="text" value="" class="login_user" id="username" name="username" placeholder="用户名"/>
			<input type="text" value="" class="login_pwd" id="password" name="password" placeholder="密码"/>
			<input type="text" value="" class="login_user" id="phone" name="phone" placeholder="手机号"/>
			<input type="text" value="" class="login_user" id="email" name="email" placeholder="邮箱"/>
			<button class="login_btn" @click="user_regiser()">注册用户</button>
		</div>
	</div>
  </div>
</template>



<script type="text/javascript">
	
	import { getCurrentInstance} from "vue";
	export default {
		name: 'home',
		props: {
			msg: String
		},
		setup() {
		  
			const{ctx}=getCurrentInstance();
			
			function user_regiser(){
				let username = document.getElementById('username').value;
				let password = document.getElementById('password').value;
				let phone = document.getElementById('phone').value;
				let email = document.getElementById('email').value;

				ctx.$axios.post('/api/regiser', {
				        username: username,
				        password: password,
				    	phone: phone,
				    	email: email,
				}).then(res => {
						
						if(res.data.code == '200'){
							// 注册成功 存入vuex tokenid（即sessionid）跳转到首页
							var session_id = res.data.result.session_id;
							ctx.$store.commit('setTokenid',session_id);
							ctx.$router.push({name:'Info'})
						}else{
							//注册失败 把msg内容 push到页面中去
							console.log(res.data.msg);
						}
						
				});
			}
			return {
			      user_regiser
			}
		
		},
		methods:{
			
			//登录
			loginFun(){
				
				
				
				
				
				// ctx.$axios.get('http://localhost:8083/api/get', {
				//     params: {
				//       ID: 12345
				//     }
				// }).then(res => {
				// 		console.log(res.data);
				// });
				
				// ctx.$axios.post('http://localhost:8083/api/get', {
				//     username: username,
				//     password: password,
				// 	phone: phone,
				// 	email: email,
				//   }).then(res => {
				// 	console.log(res.data);
				//   });
				
			}
		}
	}

</script>
<style lang="scss">
@import '../assets/blog/css/register.css';

</style>