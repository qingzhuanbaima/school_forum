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
import Basketball from '../components/content/club/Basketball.vue'

import Public from '../views/public/Public.vue'
import Notice from '../views/public/Notice.vue'
import Lost from '../views/public/Lost.vue'
import Suggestion from '../views/public/Suggestion.vue'

import Person from '../views/person/Person.vue'
import ProfileChange from '../components/content/person/ProfileChange.vue'


Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: '首页',
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
			title: '板块',
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
				redirect: 'notice'
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
		path: '/profilechange',
		name: 'ProfileChange',
		component: ProfileChange
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





