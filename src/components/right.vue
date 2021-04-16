<template>
	<div class="home">
		<div class="right">

			<div class="con_right">
				<h2 class="web_tag">网站标签</h2>
				<div class="web_tag_all clearfix">
					<a href="#" class="tag_link">前端</a>
					<a href="#" class="tag_link">后台语言</a>
					<a href="#" class="tag_link">php</a>
					<a href="#" class="tag_link">html5</a>
					<a href="#" class="tag_link">javascript</a>
				</div>
				<div class="clearfix"></div>
				<div class="hot_totle">
					<h4 class="hot_article">随机热文</h4>
					<ul>
						<li><a href="#">1.随机热文G+早期是如何提高用户留存率</a></li>
						<li><a href="#">2.随机热文G+早期是如何提高用户留存率</a></li>
						<li><a href="#">3.你的产品或服务能帮助用户（高效）解决问题吗？</a></li>
						<li><a href="#">4.随机热文G+早期是如何提高用户留存率</a></li>
						<li><a href="#">5.随机热文G+早期是如何提高用户留存率</a></li>
						<li><a href="#">6.随机热文G+早期是如何提高用户留存率</a></li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
