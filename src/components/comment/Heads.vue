<template>
	<div>
		<ul class="head">
			<li class="li1">租房</li>
			<li>买房</li>
			<li>看房</li>
			<li>反馈</li>
			<li><el-input placeholder="搜索感兴趣的房源" icon="search" v-model="input2" ></el-input></li>
			<div class="regist">
				<li>登录</li>
				<li>注册</li>
				<li>房东入口</li>
			</div>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
	      		input2: '',
			}
		}
	}
</script>

<style scoped="scoped">
	.head{
		height: 60px;
		background: #fff;
		font-size: 16px;
	}
	.head li{
		padding: 0 20px;
		text-align: center;
		color: black;
		line-height: 60px;
		float: left;	
	}
	.head li:hover{
		color: #7BAD31;
	}
	.li1{
		margin-left: 250px;
	}
	.regist{
		float: right;
		margin-right: 100px;
	}
</style>