<template>
	<div class="search">
		<div class="oinput clearfix">
			<el-input v-model="inputs" style="width:840px;" size="large" placeholder="请输入小区名称、房东名字、房号等关键字	"></el-input>
			 <router-link :to="{path:'search',query:{id:inputs}}"><el-button @click="" size="large" type="" style="background: #7cb228;color: #fff;float: right;width: 150px;">搜索</el-button></router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				inputs :''
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	
	
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