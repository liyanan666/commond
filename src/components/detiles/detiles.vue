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
					<span class="dia-city-c" style="margin: 0;">省份</span>
					<select name="province" v-model="province">
						<option value="北京">北京</option>
						<option value="上海">上海</option>
						<option value="广东">广东</option>
						<option value="深圳">深圳</option>
					</select>
				</div>
				<div class="fl">
					<span class="dia-city-c">城市</span>
					<select name="city" v-model="city">
						<option value="北京">北京</option>
						<option value="上海">上海</option>
						<option value="广州">广州</option>
						<option value="深圳">深圳</option>
					</select>
				</div>
				<div class="fl">
					<span class="dia-city-c">区域</span>
					<select name="">
						<option value=""></option>
					</select>
				</div>
			</div>
			<div class="dia-info">
				<div class="dia-info-n">
					<span>社区名称 ：{{item.hourseName}}</span>
					<span>房号 ：{{item.hourseNo}}</span>
					<span>租金 ：{{item.rent}}</span>
					<span>楼层 ：{{item.floor}}</span>
				</div>
				<div class="dia-info-n">
					<span>是否合租 ：</span>
					<span>是否二手房东 ：{{item.isSecondLandlord =='0'?"不是":"是"}}</span>
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
					<label class="pic" for="opic">
						<input type="file" accept="image/*" name="" id="opic" value="" />
					</label>
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
	import axios from 'axios';
	export default {
		data(){
			return {
				item:'',
				dialogTableVisible:false,
				textarea3:'',
				dialogImageUrl: '',
        		dialogVisible: false,
        		mobile:'',
        		qq:'',
        		province:'上海',
        		city:'上海',
        		
			}
		},
		created : function(){
			this.item = JSON.parse(sessionStorage.getItem("item"));
		},
		methods:{
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
		    submit(){
		    	var This = this;
		    	var maininfo = this.item;
		    	console.log(maininfo);
		    	axios.get('http://test.yanfumall.com/jdj-wx/wxweb/publicDiscuzz.do', {
				    params: {
				      hourseName: maininfo.hourseName,
				      title:'',
				      intro : 'XXX',
				      desc : this.textarea3,
				      host : maininfo.host,
				      floor : maininfo.floor,
				      rent : maininfo.rent,
				      mobile : This.mobile,
				      province : This.province,
				      city : This.city,
				      isSecondLandlord : maininfo.isSecondLandlord,
				      qq : This.qq,
				      imagesPath : '',
				      hourseNo : maininfo.hourseNo,
				      isSharedRoom : 0,
				      addr : maininfo.addr
				    }
				})
				.then((data)=> {
					console.log(data.data.data);
				   
				})
				.catch( (error)=> {
				    console.log(error);
				});
		    }
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
		display: none;
	}
</style>