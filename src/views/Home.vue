<template>
	
  <div class="home">
	<!-- 头部 -->
	<div class="head_main">
		<a href="#" class="head_logo" title="博客logo">logo</a>
		<ul class="head_nav">
			<li><a href="#">首页</a></li>
			<li><a href="#">运营</a></li>
			<li><a href="#">瞎说</a></li>
			<li><a href="#">主题</a></li>
			<li><a href="#">关于</a></li>
		</ul>
		<div class="search">
			<input type="text" class="search_in" placeholder="Search" value=""/>
			<button class="search_btn">搜索</button>
		</div>
	</div>
	<!-- 头部 结束 -->
	
    <div class="container">
		<Left msg="Welcome "/>
		<Right msg="Welcome "/>
    </div>
	
	<!-- 页脚开始 -->
	<footer class="footer_main">
		<div class="footer_max">
			<div class="footer_img clearfix">
				<div class="wb_img">
					<a href="#" target="_blank"><img src="../assets/blog/img/xinlan.png" alt="新浪微博" title="新浪微博"/></a>
				</div>
				<div class="qq_img">
					<a href="#" target="_blank"><img src="../assets/blog/img/qqzone.png" alt="qq空间" title="qq空间"/></a>
				</div>
				<div class="weixin_img">
					<div class="wx_img_po">
						<a href="#" target="_blank"><img  src="../assets/blog/img/weixin.png" alt="微信公众号" title="微信公众号" class="weixin_show"/></a>
						<a href="#" target="_blank"><img src="../assets/blog/img/zan.png"  alt="微信公众号" class="weixin_er"/></a>
					</div>
				</div>
			</div>
			<div class="footer_list clearfix">
				<ul>
					<li><a href="#">关于我们</a></li>
					<li><a href="#">免责声明</a></li>
					<li><a href="#">意见反馈</a></li>
					<li><a href="#">网站标签</a></li>
					<li><a href="#">友情链接</a></li>
					<li><a href="#">个人微博2.0</a></li>
				</ul>
			</div>
			<div class="beian">
				 © 2016 
				 <a href="#">gerenweibo</a>
				 <a href="#">前端</a>
				  <a href="#">后台</a>
				 <a href="#"> 粤ICP备16074429号-1 </a>
			</div>
		</div>
	</footer>
	
  </div>
</template>

<script>
// @ is an alias to /src
import Left from '../components/left.vue'
import Right from '../components/right.vue'

export default {
  name: 'Home',
  components: {
    Left,Right
  },
 
}
</script>
