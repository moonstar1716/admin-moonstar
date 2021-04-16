/* eslint-disable */
<template>
	<div class="home">
		<div class="left">
			<div class="con_left">
				<div class="select_list ">
					<div class="con_sel clearfix">
						<span class="sel_title">首页推荐:</span>
						<p>推荐优秀的技术文章供大家借鉴!</p>
					</div>
					<section class="sel_img">
						<div class="sel_title_top">
							<h4 class="title_font"><a href="#">看千篇互联网创业文章，都不如自己经历一场</a><span class="recommend">推荐</span></h4>
							<address class="sel_dates">
								<time class="time">2017.7.3</time>-
								<a href="#" class="sel_link">后台</a>-
								<span class="sel_y">阅3,356</span>
							</address>
						</div>
						<span class="sel_mimg">
							<a href="#"><img src="../assets/blog/img/btggh-500x300.png" class="sel_img_font" /></a>
						</span>
						<div class="sel_p_ar">
							<p>支撑一个业务光产品或市场肯定不行，需要几条腿配合才能走起来，合伙人最起码要能占一条，且必须是能力和自己互补的，
								能规划、执行、落地到最后给出明确的结果，不能像小白一样，基本的东西还要耗费你的时间去教。</p>
						</div>
					</section>
					<section class="sel_img">
						<div class="sel_title_noimg">
							<h4 class="title_font"><a href="#">看千篇互联网创业文章，都不如自己经历一场</a></h4>
							<address class="sel_dates">
								<time class="time">2017.7.3</time>-
								<a href="#" class="sel_link">后台</a>-
								<span class="sel_y">阅3,356</span>
							</address>
						</div>
						<div class="sel_ar_noimg">
							<p>支撑一个业务光产品或市场肯定不行，需要几条腿配合才能走起来，合伙人最起码要能占一条，且必须是能力和自己互补的，
								能规划、执行、落地到最后给出明确的结果，不能像小白一样，基本的东西还要耗费你的时间去教。</p>
						</div>
					</section>
					<section class="sel_img">
						<div class="sel_title_top">
							<h4 class="title_font"><a href="#">看千篇互联网创业文章，都不如自己经历一场</a></h4>
							<address class="sel_dates">
								<time class="time">2017.7.3</time>-
								<a href="#" class="sel_link">后台</a>-
								<span class="sel_y">阅3,356</span>
							</address>
						</div>
						<span class="sel_mimg">
							<a href="#"><img src="../assets/blog/img/btggh-500x300.png" class="sel_img_font" /></a>
						</span>
						<div class="sel_p_ar">
							<p>支撑一个业务光产品或市场肯定不行，需要几条腿配合才能走起来，合伙人最起码要能占一条，且必须是能力和自己互补的，
								能规划、执行、落地到最后给出明确的结果，不能像小白一样，基本的东西还要耗费你的时间去教。</p>
						</div>
					</section>
					<section class="sel_img">
						<div class="sel_title_noimg">
							<h4 class="title_font"><a href="#">看千篇互联网创业文章，都不如自己经历一场</a></h4>
							<address class="sel_dates">
								<time class="time">2017.7.3</time>-
								<a href="#" class="sel_link">后台</a>-
								<span class="sel_y">阅3,356</span>
							</address>
						</div>
						<div class="sel_ar_noimg">
							<p>支撑一个业务光产品或市场肯定不行，需要几条腿配合才能走起来，合伙人最起码要能占一条，且必须是能力和自己互补的，
								能规划、执行、落地到最后给出明确的结果，不能像小白一样，基本的东西还要耗费你的时间去教。</p>
						</div>
					</section>
					<section class="sel_img">
						<div class="sel_title_noimg">
							<h4 class="title_font"><a href="#">看千篇互联网创业文章，都不如自己经历一场</a></h4>
							<address class="sel_dates">
								<time class="time">2017.7.3</time>-
								<a href="#" class="sel_link">后台</a>-
								<span class="sel_y">阅3,356</span>
							</address>
						</div>
						<div class="sel_ar_noimg">
							<p>支撑一个业务光产品或市场肯定不行，需要几条腿配合才能走起来，合伙人最起码要能占一条，且必须是能力和自己互补的，
								能规划、执行、落地到最后给出明确的结果，不能像小白一样，基本的东西还要耗费你的时间去教。</p>
						</div>
					</section>
					<div class="page">
						<span class="page_count page_one">1</span>
						<a href="#" class="page_count">2</a>
						<a href="#" class="page_count">3</a>
						<a href="#" class="page_count">4</a>
						<span class="page_count page_dote">...</span>
						<a href="#" class="page_count">10</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>

	import { getCurrentInstance} from "vue";
	export default {
		name: 'home',
		props: {
			msg: String
		},
		setup() {
		  
			// const{ctx}=getCurrentInstance();
			// ctx.$axios.get('/api/tget', {
			//     params: {
			//       ID: 12345
			//     }
			// }).then(res => {
			// 		console.log(res.data);
			// });
			
		
		}
	}
	
	
	  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
