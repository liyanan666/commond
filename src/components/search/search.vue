<template>
	<div>
		<div class="search">
			<el-input v-model="userinput" style="width:640px;" size="large" placeholder=""></el-input>
			<el-button @click="getinfo(userinput,0,0)" size="large" type="primary" style="width: 100px;">搜索</el-button>
			<span class="senddianping">发表点评</span>
		</div>
		<div class="nav1">
			<div class="w model">
				<template>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="点评" name="first">
							<div class="clearfix">
								<div class="conmond-l fl">
									<ul>
										<li class="clearfix oli" v-for="(item,index) in arr">
											<span class="fl commond-pic">
				    						<img src="../../img/u46.png"/>
				    					</span>
											<span class="fl commond-info">
				    						<h3 class="conmond-title" v-html="filter(item.hourseName)"></h3>
				    						<p class="conmond-addr">{{item.title}}</p>
				    						<p class="commond-from">来自183为往客</p>
				    					</span>
										</li>
									</ul>
									<div class="page" v-show="arr">
										<el-pagination  @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout=" prev, pager, next" :total="totalpage">
										</el-pagination>
									</div>
								</div>
								<div class="conmond-r fr">
									<p>最新员工评论</p>
									<ul>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="视频" name="second">{{keyword}}</el-tab-pane>
						<el-tab-pane label="套利" name="third">套利</el-tab-pane>
					</el-tabs>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import axios from 'axios';
	export default {
		data() {
			return {
				userinput: '',
				activeName: 'first',
				arr: '',
				index: 0,
				currentPage1: 1,
				newcommonds:'',
				keyword:'',
				totalpage:''
			};
		},
		created: function() {
			this.userinput = this.$route.query.id;
			this.getinfo(this.userinput,0,0);
			axios.get('http://test.yanfumall.com/jdj-wx/wxweb/getDiscuzzList.do?start=0&pageSize=5', {
			})
			.then((data) => {
				this.newcommonds = data.data.data;
				console.log(data.data.data);

			})
			.catch((error) => {
				console.log(error);
			});
			
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			filter(value) {
				var userinput = this.keyword
				if(userinput == '') {
					return value;
				} else if(!value) {
					return ''
				};
				var reg = new RegExp("" + userinput + "", "g");
				var result = value.replace(reg, "<span style='color:#F00;font-weight:700;'>" + userinput + "</span>");
				return result;
			},
			getinfo(keyword,index,ispage) {
				var This = this;
				if(ispage == 0){
					this.currentPage1 = 1;
				}
				axios.get('http://test.yanfumall.com/jdj-wx/wxweb/getHourseDiscuzzList.do', {
					params: {
						keyword:keyword,
						start: index,
						pageSize: 10
					}
				})
				.then((data) => {
					This.arr = data.data.data.hourseDiscuzzList;
					This.keyword = data.data.data.keyword;
					This.totalpage = data.data.data.totalSize;
				})
				.catch((error) => {
					console.log(error);
				});
			},
			handleCurrentChange(val) {
				this.index = val;
				this.getinfo(this.keyword,this.index,1);
			}
		}
	}
</script>
<style>
	.w {
		width: 1000px;
		margin: 0 auto;
	}
	
	.model {
		margin-bottom: 152px;
	}
	
	.search {
		width: 1000px;
		margin: 100px auto 0 auto;
	}
	
	.senddianping {
		text-decoration: underline;
		color: dodgerblue;
		font-size: 16px;
		vertical-align: middle;
		margin-left: 10px;
	}
	
	.nav1 {
		padding-top: 40px;
	}
	
	.el-tabs__nav {
		margin-left: 30px;
	}
	
	.conmond-l {
		width: 700px;
	}
	
	.conmond-r {
		width: 300px;
	}
	
	.oli {
		padding: 20px 0;
		border-bottom: 1px solid #e7e7e7;
	}
	
	.commond-pic {
		width: 100px;
		height: 100px;
	}
	
	.commond-pic img {
		width: 100%;
		height: 100%;
	}
	
	.commond-info {
		width: 500px;
		margin-left: 15px;
		height: 100px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	
	.commond-from,
	.conmond-title,
	.conmond-addr {
		line-height: 35px;
	}
	
	.conmond-title {
		flex: 1;
		color: #3583ff;
		font-weight: normal;
		font-size: 20px;
		text-decoration: underline;
	}
	
	.conmond-addr {
		line-height: 20px;
		flex: 1;
		font-size: 16px;
		color: #6a6a6a;
	}
	
	.commond-from {
		font-size: 16px;
		color: #a5a2f1;
		flex: 1;
	}
	
	.page {
		margin-top: 105px;
	}
	
	.el-pager li {
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		border: 1px solid #d1dbe5;
		margin: 0px 10px;
	}
	
	.el-pager li.active+li,
	.el-pagination .btn-next,
	.el-pagination .btn-prev {
		border: 1px solid #d1dbe5;
	}
	
	.el-pagination .btn-next,
	.el-pagination .btn-prev {
		width: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
	}
	.el-tabs__active-bar{
		background: #7cb228;
	}
</style>