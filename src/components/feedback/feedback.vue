<template>
	<div>
		<p style="font-size: 25px;margin-bottom: 20px;">您要发布一条点评信息:</p>
		<div class="warminfo clearfix">
			<span class="infopic fl"><img src="../../img/u46.png" width="100%"/></span>
			<span class="inftext fr">在这里住了一段时间，住处好坏，交费信息你最清楚。匿名分享一下您对该处住房的评价吧！</span>
		</div>
		<div class="info" style="margin-top: 20px;">
			<span>省份:上海</span>
			<span>城市:上海</span>
			<span>区域:黄浦</span>
		</div>
		<div class="info">
			<span>社区名称:小区</span>
			<span>租金:1700</span>
			<span>楼层:5</span>
		</div>
		<div class="info">
			<span>房号:501</span>
			<span>是否合租:是</span>
			<span>是否是二手房东:是</span>
		</div>
		<div class="submit">
			<el-input
			  type="textarea"
			  :rows="3"
			  placeholder="请输入内容"
			  v-model="textarea">
			</el-input>
			<div @click="submitcommond" style="width: 150px;margin: 20px auto;"><el-button style="width: 100%;" type="success">发布</el-button></div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				textarea:'',
			}
		},
		props:['info'],
		methods:{
			submitcommond(){
				axios.get(''+this.GLOBAL.host+'/wxweb/publicDiscuzz.do?title=九亭地铁站1号口附近，大约500米左右，房东有点坑，二手房东&intro=xxx&rent=1700&mobile=18616122669&isSecondLandlord=1',{
					params:{
						hourseName:this.info.hourseName,
						desc:this.textarea,
						city:this.info.city,
						province:this.info.province,
						rend:this.info.rend,
						floor:this.info.floor,
						
					}
				}).then((data)=>{
					this.$emit('change');
					console.log(data);
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.fl{
		
		float: left;
	}
	.fr{
		float: right;
	}
	.warminfo{
		
	}
	.warminfo .infopic{
		width: 50px;
		height: 50px;
		display: inline-block;
		margin-left: 20px;
	}
	.inftext{
		width: 550px;
		font-size: 18px;
	}
	.warminfo {
		
	}
	.info{
		margin-left: 20px;
		display: flex;
	}
	.info span{
		flex: 1;
		line-height: 30px;
		text-align: left;
	}
	.submit{
		margin: 20px;
	}
</style>