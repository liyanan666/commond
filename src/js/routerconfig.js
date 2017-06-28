import VueRouter from 'vue-router'
import Vue from 'vue'
//模板
import index from '../components/index/index.vue'
import comments from '../components/comment/comment.vue'
import feedback from '../components/feedback/feedback.vue'
import search from '../components/search/search.vue'
import detiles from '../components/detiles/detiles.vue'

Vue.use(VueRouter);
//配置路由
const routes = [
	{
		path: '/index',
		component: index,
	},
	{
		path: '/comment',
		component: comments,
	},
	{
		path:'/feedback',
		component: feedback,
	},	
	{
		path:'/search',
		component: search,
	},
	{
		path:'/detiles',
		component: detiles,
	},
//	{
//		path: '/comment',
//		component: comment,
//	},
//	{
//		path: '/commodity',
//		component: commodity,
//	},
	{
		path: '*',
		redirect: '/index'
	}
];

//生成路由实例
const router = new VueRouter({
  	routes
});

export default router;