

/***********配  路  由**************/

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/script/components/Index'
import Board from '@/script/components/Board'
import Search from '@/script/components/Search'
import Shop from '@/script/components/Shop'
import News from '@/script/components/News'
import Mine from '@/script/components/Mine'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Index,
      redirect:'board',   //开始路由borad
      children:[
      	{
	      	path:'board',
	      	component:Board
      	},
      	{
      		path:'search',
      		component:Search
      	},
      	{
      		path:'shop',
      		component:Shop
      	},
      	{
      		path:'news',
      		component:News
      	},
      	{
      		path:'mine',
      		component:Mine
      	}
      ]
    }
  ]
})
