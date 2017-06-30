<template>
	<div>
		<div class="search">
			<el-input v-model="userinput" style="width:640px;" size="large" placeholder=""></el-input>
			<el-button @click="getinfo(userinput,0,0)" size="large" type="primary" style="width: 100px;">搜索</el-button>
			<span class="senddianping" @click="showdialog">发表点评</span>
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
										<el-pagination  @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="prev, pager, next" :total="totalpage">
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
		<el-dialog title="" :visible.sync="dialogTableVisible">
		  <div class="dia-head">房屋描述</div>
		 <div style="padding: 40px;">
		 	 <div class="clearfix" style="padding-bottom: 20px;border-bottom: 1px solid #dcdddf;">
			  	<span class="fl dia-pic">
			  		<img src="../../img/i_header02.png" width="100%" height="100%"/>
			  	</span>
			  	<p class="fl dia-miaoshu">在这里住了一段时间，住处好坏，交费信息你最清楚分享一下你对该处住房的评价信息把!</p>
			</div>
			<div class="dia-city clearfix">
				<div class="fl">
					<span class="dia-city-c" style="margin: 0;">省份 : </span>
					<select name="province" v-model="province">
						<option value="北京">北京</option>
						<option value="上海">上海</option>
						<option value="广东">广东</option>
						<option value="深圳">深圳</option>
					</select>
				</div>
				<div class="fl">
					<span class="dia-city-c">城市 : </span>
					<select name="city" v-model="city">
						<option value="北京">北京</option>
						<option value="上海">上海</option>
						<option value="广州">广州</option>
						<option value="深圳">深圳</option>
					</select>
				</div>
				<div class="fl">
					<span class="dia-city-c">区域 : </span>
					<select name="">
						<option value=""></option>
					</select>
				</div>
			</div>
			<div class="dia-info">
				<div class="dia-info-n">
					<span>社区名称 ：<el-input style="display: inline-block;width: 70px;" v-model="hourseName" placeholder=""></el-input></span>
					<span>房号 ：<el-input style="display: inline-block;width: 70px;" v-model="hourseNo" placeholder=""></el-input></span>
					<span>租金 ：<el-input style="display: inline-block;width: 70px;" v-model="rent" placeholder=""></el-input></span></span>
					<span>楼层 ：<el-input style="display: inline-block;width: 70px;" v-model="floor" placeholder=""></el-input></span></span>
				</div>
				<div class="dia-info-n">
					<span style="flex: 1.5;">是否合租 ：<el-input style="display: inline-block;width: 70px;" v-model="isSharedRoom" placeholder=""></el-input></span>
					<span style="flex: 2;">是否二手房东 ：<el-input style="display: inline-block;width: 70px;" v-model="isSecondLandlord" placeholder=""></el-input></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div style="padding-left: 20px;padding-bottom: 40px;border-bottom: 1px solid #e7e7e7;">
				<p style="color: #a0a0a0;margin-bottom: 20px;">评论内容：</p>
				<div style="width: 500px;">
					<el-input
					  type="textarea"
					  :autosize="{ minRows: 4, maxRows: 4}"
					  placeholder="请输入内容"
					  v-model="textarea3">
					</el-input>
				</div>
			</div>
			<div style="padding-left: 20px;margin: 20px 0;">
				<p style="color: #a0a0a0;margin-bottom: 20px;">上传图片（可选）：</p>
				<div>
					<a href="javascript:;" class="file">选择文件
					    <input type="file" name="" id="" @change="uploadpic($event)">
					</a>
					<!--<el-upload
					  action="http://test.yanfumall.com/jdj-wx/wxweb/upload.do"
					  list-type="picture-card"
					  :data="form"
					  :on-preview="handlePictureCardPreview"
					  :on-remove="handleRemove">
					  <i class="el-icon-plus"></i>
					</el-upload>
					<el-dialog v-model="dialogVisible" size="tiny">
					  <img width="100%" :src="dialogImageUrl" alt="">
					</el-dialog>-->
				</div>
				<p style="margin: 30px 0;"><span>手机 ：<el-input style="display: inline-block;width: 150px;" v-model="mobile" placeholder="请输入内容"></el-input></span><span style="margin-left: 20px;">QQ ：<el-input style="display: inline-block;width: 150px;" v-model="qq" placeholder="请输入内容"></el-input></span></p>
				<p style="color: red;">*以上信息平台承诺绝对保密，联系方式用于咨询红包发放</p>
				<div class="btn" @click="submit" style="width: 100%;margin-top: 50px;background: #22c550;">发布</div>
			</div>
		 </div>
		</el-dialog>
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
				totalpage:'',
				dialogTableVisible:false,
				textarea3:'',
        		mobile:'',
        		qq:'',
        		province:'上海',
        		city:'上海',
        		host:'',
        		hourseName:'',
        		floor:'',
        		rent:'',
        		isSecondLandlord:'',
        		hourseNo:'',
        		isSharedRoom:'',
        		dialogImageUrl: '',
        		dialogVisible: false,
        		form:{}
        		
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
			},
			submit(){
		    	var This = this;
		    	axios.get('http://test.yanfumall.com/jdj-wx/wxweb/publicDiscuzz.do', {
				    params: {
				      hourseName: This.hourseName,
				      title:'',
				      intro : 'XXX',
				      desc : this.textarea3,
				      host : This.host,
				      floor : This.floor,
				      rent : This.rent,
				      mobile : This.mobile,
				      province : This.province,
				      city : This.city,
				      isSecondLandlord : This.isSecondLandlord,
				      qq : This.qq,
				      imagesPath : '',
				      hourseNo : This.hourseNo,
				      isSharedRoom : 0,
				      addr : This.addr
				    }
				})
				.then((data)=> {
					This.dialogTableVisible = false;
					console.log(data.data.data);
				   
				})
				.catch( (error)=> {
					This.dialogTableVisible = false;
				    console.log(error);
				});
		    },
		    showdialog(){
				this.dialogTableVisible = true;
			},
			handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePictureCardPreview(file) {
//		        this.dialogImageUrl = file.url;
//		        this.dialogVisible = true;
		    },
		    uploadpic(e){
		    	var file = e.target.files[0]; 
		    	if(window.FileReader){
		    		var reader = new FileReader();
		    		reader.readAsDataURL(file);
		    		reader.onloadend = function(){
		    			var formData = new FormData();
		    			formData.append('file',file);
		    			axios({
					        url:'http://test.yanfumall.com/jdj-wx/wxweb/upload.do',
					        method:'post',
					        data:formData,
					        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					    })
		    			.then((res)=>{
					    	console.log(res)
					    })

		    		}
		    	}
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
	.dia-head{
		background: #7cb228;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		color: #fff;
	}
	.el-dialog__header,.el-dialog__body{
		padding: 0;
	}
	.el-dialog__headerbtn .el-dialog__close{
		margin-right:20px ;
		margin-top: 15px;
		color: #fff;
		font-size: 16px;
	}
	.dia-pic{
		width: 150px;
		height: 100px;
		display: inline-block;
	}
	.dia-miaoshu{
		width: 550px;
		font-size: 18px;
		margin-left: 20px;
		line-height: 25px;
		color: #000;
	}
	.dia-city{
		padding: 20px;
	}
	.dia-city select{
		width: 120px;
		height: 35px;
		font-size: 18px;
		border: 1px solid #bfcbd9;
	}
	.dia-city-c{
		font-size: 16px;
		line-height: 35px;
		margin: 0 10px 0 30px;
	}
	.dia-info-n{
		padding-left: 20px;
		width: 600px;
		display: flex;
		margin-bottom: 20px;
	}
	.dia-info-n span{
		color: black;
		flex: 1;
	}
	.el-dialog--small{
		width: 800px;
	}
	.pic{
		width: 100px;
		height: 100px;
		background: #666;
		display: inline-block;
	}
	.pic input{
		width: 100px;
		height: 100px;
		display: block;
	}
	.btn{
		
		height: 40px;
		text-align: center;
		margin: 20px auto;
		line-height: 40px;
		font-size: 18px;
		color: #fff;
	}
	.file {
	    position: relative;
	    display: inline-block;
	    background: #D0EEFF;
	    border: 1px solid #99D3F5;
	    border-radius: 4px;
	    padding: 4px 12px;
	    overflow: hidden;
	    color: #1E88C7;
	    text-decoration: none;
	    text-indent: 0;
	    line-height: 20px;
	}
	.file input {
	    position: absolute;
	    font-size: 100px;
	    right: 0;
	    top: 0;
	    opacity: 0;
	}
	.file:hover {
	    background: #AADFFD;
	    border-color: #78C3F3;
	    color: #004974;
	    text-decoration: none;
	}
</style>