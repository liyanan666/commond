<template>
	<div class="bg">
		<div class="content clearfix">
			<div class="content-left">
				<div class="icon clearfix" >
					<span class="imgs"><img width="60" height="60" :src="item.image"/></span>
					<i class="el-icon-star-on fr"></i>
					<span class="fen">{{item.count}}</span>
					
				</div>
				<p class="componey">{{item.hourseName}}</p>
				<p class="info"><span class="type">租房</span><span class="adress">长沙</span></p>
				<p @click="dialogTableVisible = true" style="margin-top: 30px;"><el-button size="large" style="width: 100%;" type="success">我来点评</el-button></p>
			</div>
			<div class="content-right">
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
						
					</div>
				</div>
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
						
					</div>
				</div>
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
						
					</div>
				</div>
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
						
					</div>
				</div>
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
						
					</div>
				</div>
				<div v-for="(info,index) in item.discuzzList" class="block">
					<div class="users clearfix">
						<span class="userpic float-l"><img width="100%" src="../../img/i_header02.png"/></span>
						<span class="usrinfo float-l">
							<p class="username">用户名</p>
							<p class="useraddr">用户信息</p>
						</span>
					</div>
					<div class="usercommond">
						<p>{{info.desc}}</p>
						<p ><el-rate v-model="value5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate></p>
					</div>
				</div>
			</div>
			
		</div>
		<el-dialog title="" :visible.sync="dialogTableVisible">
		  <feedback :info="item" @change="change"></feedback>
		</el-dialog>
	</div>
</template>

<script>
	import Heads from './Heads.vue'
	import feedback from '../feedback/feedback.vue'
	export default {
	  data() {
	    return {
		    
	        dialogTableVisible: false,
		    item:{},
		    value5: 3.7
	    }
	  },
	  components:{
	  	Heads,
	  	feedback
	  },
	  mounted(){
	  	this.item = JSON.parse(sessionStorage.getItem("item"));
	  },
	  methods: {
	    handleIconClick(ev) {
	      console.log(ev);
	    },
	    change(){
	    	this.dialogTableVisible = false;
	    }
	  }
	}
</script>

<style scoped="scoped">
	.bg{
		background: #f5f7f9;
	}
	.float-l{
		float: left;
	}
	.float-r{
		float: right;
	}
	.fr{
		float: right;
		color: #13ce66;
	}
	
	.nav,.content{
		width: 950px;
		margin: 10px auto;
	}
	.content{
		
	}
	
	.content .imgs{
		width: 60px;
		height: 60px;
		display: inline-block;
		border: 1px solid #f1f1f1;
		float: left;
	}
	.componey{
		margin-top: 10px;
		font-size: 25px;
	}
	.info{
		margin-top: 10px;
	}
	.type{
		color: #999999;
		font-size: 12px;
		padding-right: 10px;
		border-right: 1px solid #999;
	}
	.adress{
		margin-left: 10px;
		color: #999999;
		font-size: 12px;
	}
	.content .fen{
		font-size: 30px;
		font-weight: bold;
		float: right;
	}
	.content-left,.content-right{
		
		display: inline-block;
	}
	.content-left{
		padding: 20px;
		width: 300px;
		background: #fff;
		float: left;
	}
	.content-right{
		margin-left: 50px;
		width: 550px;
		float: right;
		
		
	}
	.block{
		background: #fff;
		padding: 20px;
		margin-bottom: 20px;
	}
	.users{
		border-bottom: 1px solid #eee;
		padding-bottom:20px ;
	}
	.users span{
		display: inline-block;
	}
	.users .userpic{
		width: 50px;
		height: 50px;
	}
	.users .usrinfo{
		margin-left: 20px;
	}
	.users .username{
		font-size: 25px;
		color: black;
		line-height: 25px;
	}
	.users .useraddr{
		line-height: 30px;
		color: #999;
	}
	.usercommond{
		margin-top: 20px;
		font-size: 20px;
		line-height: 30px;
	}
</style>