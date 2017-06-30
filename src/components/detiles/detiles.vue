<template>
	<div class="w">
		<div  style="margin-top: 80px;">
			<el-breadcrumb separator="->">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>点评详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="banner">
			<img src="../../img/nav.png" width="100%" height="300px"/>
		</div>
		<div class="clearfix">
			<div class="detiles-f fl">
				<div class="f-info">
					<div class="f-l">
						<img :src="item.image" width="100%" height="100%"/>
					</div>
					<div class="f-r">
						<p class="f-name">{{item.hourseName}}</p>
						<p class="f-addr">{{item.addr}}</p>
					</div>
				</div>
				<div class="detiles-num">
					<p><span>房号 : </span>{{item.hourseNo}}</p>
					<p><span>楼层 : </span>{{item.floor}}</p>
					<p><span>房东 : </span>{{item.host}}</p>
					<div class="btn" @click="showdialog">
						发表评论
					</div>
				</div>
				
				<div class="about">
					<p class="abouttitle">相关内容</p>
					<p>挺会家园66搂403</p>
					<p>挺会家园66搂403</p>
					<p>挺会家园66搂403</p>
					<p>挺会家园66搂403</p>
				</div>
			</div>
			<div class="detiles-r fr">
				<div class="r-infos" v-for="(item,index) in item.discuzzList">
					<div class="r-head">
						<span class="r-pic">
							<img src="../../img/u46.png" width="60px" height="60px"/>
						</span>
						<span class="r-info">
							<p class="r-user">微信用户</p>
							<p style="line-height: 25px;color: #aeaeae;">前往客</p>
						</span>
						<span class="zixun">向TA咨询</span>
					</div>
					<p class="r-tlt">{{item.title}}</p>
					<p class="r-cont">{{item.descri}}</p>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				item:'',
				
        		
			}
		},
		created : function(){
			this.item = JSON.parse(sessionStorage.getItem("item"));
		},
		methods:{
			
		}
	}
</script>

<style>
	.w{
		width: 1000px;
		margin: 0 auto;
	}
	.banner{
		margin: 40px 0;
	}
	.detiles-f{
		width: 300px;
		background: ;
	}
	.btn{
		width: 250px;
		height: 40px;
		text-align: center;
		margin: 20px auto;
		line-height: 40px;
		font-size: 18px;
		background: #7cb228;
		color: #fff;
	}
	.detiles-r{
		width: 680px;
	}
	.f-info{
		display: flex;
	}
	.f-info .f-l{
		height: 60px;
		flex: 1;
	}
	.f-info .f-r{
		margin-left: 15px;
		flex: 3;
	}
	.f-r .f-name{
		font-size: 16px;
		color: black;
		line-height: 30px;
		font-weight: bold;
	}
	.detiles-num {
		padding-bottom: 10px;
		margin-top: 10px;
		border-bottom: 1px solid #e7e7e7;
	}
	.detiles-num p{
		color: black;
		line-height: 26px;
	}
	.detiles-num span{
		color: #bbbbbb;
	}
	.about{
		margin-top: 30px;
		
	}
	.abouttitle{
		color: #bbbbbb;
		font-size: 20px;
		margin-bottom: 20px;
	}
	.about p{
		color: black;
		line-height: 20px;
	}
	.r-head{
		display: flex;
		height: 55px;
	}
	.r-pic{
		flex: 1;
	}
	.r-infos{
		padding: 0 0 20px 20px;
		border-bottom: 1px solid #e7e7e7;
	}
	.r-info{
		margin-left: 20px;
		flex: 6;
		
	}
	.zixun{
		width: 120px;
		height: 35px;
		color: #fff;
		text-align: center;
		line-height: 35px;
		background: #7cb228;
		margin-right: 200px;
	}
	.r-user{
		color: #aeaeae;
		font-size: 16px;
		line-height: 30px;
	}
	.r-tlt{
		font-weight: bold;
		color: black;
		font-size: 18px;
		margin-top: 20px;
	}
	.r-cont{
		font-size: 14px;
		margin-top: 10px;
		line-height: 20px;
	}
	
</style>