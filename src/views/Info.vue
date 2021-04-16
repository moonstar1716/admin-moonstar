<template>
  <div class="register">
	  {{ msg }}

	<div class="login_main" id="app">
		<div class="login_box">
			<h2 class="login_title">用户信息</h2>
			<input type="text" value="btggh-500x300.png" class="login_user" id="img" name="img" placeholder="头像"/>
			<input type="text" value="" class="login_user" id="nikename" name="nikename" placeholder="昵称"/>
			<input type="text" value="" class="login_pwd" id="realname" name="realname" placeholder="真实姓名"/>
			<br>
			年龄
			<input type="radio" value="1" class="" id="gender" name="gender" placeholder="男"/>
				<input type="radio" value="2" class="" id="gender" name="gender" placeholder="女"/>
					<input type="text" value="" class="login_user" id="desc" name="desc" placeholder="简介"/>
			<button class="login_btn" @click="user_regiser()">更新信息</button>
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
				let img = document.getElementById('img').value;
				let nikename = document.getElementById('nikename').value;
				let realname = document.getElementById('realname').value;
				let gender = document.getElementById('gender').value;
				let desc = document.getElementById('desc').value;

				ctx.$axios.post('/api/info', {
						tokenid:ctx.$store.state.tokenid,
				        img: img,
				        nikename: nikename,
				    	realname: realname,
				    	gender: gender,
						desc: desc,
				}).then(res => {
						
						if(res.data.code == '200'){
							// 更新成功
							console.log(res.data.msg);
						}else{
							//更新失败
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