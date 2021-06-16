import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'
import Sports from '../views/home/Sports.vue'
import Game from '../views/home/Game.vue'
import Life from '../views/home/Life.vue'
import Movie from '../views/home/Movie.vue'
import Study from '../views/home/Study.vue'
import Digital from '../views/home/Digital.vue'

import Club from '../views/club/Club.vue'
import Basketball from '../components/content/club/sports/Basketball.vue'
import Football from '../components/content/club/sports/Football.vue'
import Pingpong from '../components/content/club/sports/Pingpong.vue'
import Tennis from '../components/content/club/sports/Tennis.vue'
import Run from '../components/content/club/sports/Run.vue'
import Badminton from '../components/content/club/sports/Badminton.vue'

import Public from '../views/public/Public.vue'
import Notice from '../views/public/Notice.vue'
import Lost from '../views/public/Lost.vue'
import Suggestion from '../views/public/Suggestion.vue'

import Person from '../views/person/Person.vue'
import ProfileChange from '../components/content/person/ProfileChange.vue'

import ArticlePost from '../components/content/ArticlePost.vue'
import Login from '../components/common/login/Login.vue'
import Article from '../components/content/Article.vue'

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

const routes = [
	{
		path: '',
		redirect: '/club'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: '社区',
			keepAlive: true
		},
		children: [{
				path: '',
				redirect: 'sports'
			},
			{
				path: 'sports',
				name:'Sports',
				component: Sports,
				meta: {
					title:'运动',
					keepAlive: true
				}
			},
			{
				path: 'study',
				component: Study,
				meta: {
					title:'学习',
					keepAlive: true
				}
			},
			{
				path: 'game',
				component: Game,
				meta: {
					title:'游戏',
					keepAlive: true
				}
			},
			{
				path: 'life',
				component: Life,
				meta: {
					title:'生活',
					keepAlive: true
				}
			},
			{
				path: 'movie',
				component: Movie,
				meta: {
					title:'影音',
					keepAlive: true
				}
			},
			{
				path: 'digital',
				component: Digital,
				meta: {
					title:'数码产品',
					keepAlive: true
				}
			}
		]
	},
	{
		path: '/club',
		name: 'Club',
		meta: {
			title: '首页',
			keepAlive: true
		},
		component: Club
	},
	{
		path: '/public',
		name: 'Public',
		meta: {
			title: '站务',
			keepAlive: true
		},
		component: Public,
		children: [{
				path: '',
				redirect: 'lost'
			},
			{
				path: 'notice',
				name:'Notice',
				component: Notice,
				meta: {
					title:'学校公告',
					keepAlive: true
				}
			},
			{
				path: 'lost',
				component: Lost,
				meta: {
					title:'失物招领',
					keepAlive: true
				}
			},
			{
				path: 'suggestion',
				component: Suggestion,
				meta: {
					title:'站务建议',
					keepAlive: true
				}
			}
		]
	},
	{
		path: '/person',
		name: 'Person',
		meta: {
			title: '个人',
			keepAlive: true
		},
		component: Person
	},
	{
		path: '/basketball',
		name: 'Basketball',
		component: Basketball
	},
	{
		path: '/pingpong',
		name: 'Pingpong',
		component: Pingpong
	},
	{
		path: '/football',
		name: 'Football',
		component: Football
	},
	{
		path: '/tennis',
		name: 'Tennis',
		component: Tennis
	},
	{
		path: '/run',
		name: 'Run',
		component: Run
	},
	{
		path: '/badminton',
		name: 'Badminton',
		component: Badminton
	},
	
	
	{
		path: '/profilechange',
		name: 'ProfileChange',
		meta: {
			title: '个人信息',
			keepAlive: true
		},
		component: ProfileChange
	},
	{
		path: '/articlePost',
		name: 'ArticlePost',
		meta: {
			title: '发帖',
			keepAlive: true
		},
		component: ArticlePost
	},
	{
		path: '/login',
		name: 'Login',
		meta: {
			title: '注册登录',
		},
		component: Login
	},
	{
		path: '/article',
		name: 'Article',
		meta: {
			title: 'AhpuForum',
		},
		component: Article
	}
	
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router

router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title;
	next()
})





