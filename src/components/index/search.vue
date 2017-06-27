<template>
	<div class="search">
		<div class="oinput clearfix">
			<el-input v-model="input" style="width:840px;" size="large" placeholder="请输入小区名称、房东名字、房号等关键字	"></el-input>
			<el-button @click="getlist" size="large" type="" style="background: #7cb228;color: #fff;float: right;width: 150px;">搜索</el-button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				input :''
			}
		},
		methods:{
			getlist(){
				axios.get('http://test.yanfumall.com/jdj-wx/wxweb/getHourseDiscuzzList.do', {
				    params: {
				    	keyword:this.input,
				    	start: 0,
				    	pageSize:10
				    }
				  })
				  .then((response)=> {
				    console.log(response);
				  })
				  .catch((error) => {
				    console.log(error);
				  });
			}
		}
	}
</script>

<style>
	
	
	.el-button{
		border: 1px solid #7cb228;
	}
	.el-button:hover{
		border: 1px solid #7cb228;
	}
	.oinput{
		width: 100%;
		margin: 30px 0 70px 0;
	}
</style>