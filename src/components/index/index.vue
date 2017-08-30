<template>
	<div class="index">
		<h1 class="title"><img src="../../img/fangdianping.png" width="100%"/></h1>
		<search></search>
		<p class="introduce">租房，买房，请先逛一逛房点评网站，这里收集了最原始的住房点评信息，租金，水电费，物业费早知道，还能和老住户直接了解详细信息哦，不和谐的住房交易再也不会发生了~</p>
		
		<div class="content clearfix">
			<div class="content-left">
				<el-tabs type="border-card">
				  <el-tab-pane label="点评" >
				  	<ul class="index-dianping">
			  			<li class="dianping" v-for="(item,index) in list">
			  				<router-link :to="{path:'detiles',query: {}}">
					  			<p @click="setitem(item)" class="dianping-title">{{item.hourseName}}<span> {{item.hourseNo}}</span><span></span></p>
					  			<p class="dianping-info" style="margin-top: 20px;">地址: {{item.addr}}</p>
					  			<p class="dianping-info">点评: {{item.discuzzList[0].descri}}</p>
					  			<ul class="dianping-pic clearfix">
					  				<li v-show="item.imageList[0].path != ''" v-for="(items,index) in item.imageList" style="">
					  					<img :src="urls+items.path"/>
					  				</li>
					  			</ul>
					  		</router-link>
				  		</li>
				  	</ul>
				  </el-tab-pane>
				  <el-tab-pane label="工具">工具</el-tab-pane>
				  <el-tab-pane label="视频">视频</el-tab-pane>
				  <el-tab-pane label="发表点评">发表点评</el-tab-pane>
				</el-tabs>
			</div>
			
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import search from './search.vue'
	export default {
		data(){
			return {
				urls:'http://test.yanfumall.com/jdj-wx',
				list:[],
				items:"123456789"
			}
		},
		mounted(){
			axios.get(''+this.GLOBAL.host+'/wxweb/getHourseList.do', {
			    params: {
			      start: 0,
			      pageSize:8
			    }
			})
			.then((data)=> {
				console.log(data.data.data);
			    this.list = data.data.data;
			})
			.catch( (error)=> {
			    console.log(error);
			});
		},
		methods:{
			setitem(item){
				sessionStorage.setItem("item",JSON.stringify(item));
			}
		},
		components:{
			search
		}
	}
</script>

<style>
	.title{
		width: 300px;
		margin: 100px auto 0 auto;
		font-family: "STXingkai","微软雅黑";
		font-size: 80px;
		text-align: center;
		color: #7cb226;
	}
	.el-tabs__item{
		text-align: center;
		width: 100px;
		color: #000;
	}
	.el-tabs__item.is-active {
		color: #7cb226;
	}
	.el-tabs__nav{
		margin-left: 30px;
	}
	a {
	    color: #2c84cc;
	    outline-style: none;
	}
	.index{
		width: 1000px;
		margin: 0 auto;
	}
	
	
	.regist{
		float: right;
		margin-right: 100px;
	}
	.content{
		width: 1000px;
		margin: 30px 0 0 auto;
		background: #fff;
	}
	.introduce{
		width: 950px;
		margin: 0 auto;
		font-size: 14px;
	}
	.dianping{
		padding: 20px 0;
		border-bottom: 1px solid #e7e7e7;
	}
	.dianping-title{
		color: black;
		font-size: 22px;
	}
	.dianping-info{
		margin: 10px 0;
		color: #666;
		font-size: 16px;
		line-height: 25px;
	}
	.dianping-pic{
		
	}
	.dianping-pic li{
		width: 260px;
		height: 200px;
		float: left;
		background-size: cover;
	}
	.dianping-pic li:not(:first-child) {
	    margin-left:20px
	}
	.dianping-pic li img{
		width: 260px;
		height: 200px;
	}
</style>