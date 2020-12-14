import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
	    	path: '/',
	    	component: () => import('@/components/layout/mainFrame'),
			children:[
				{
					name: 'page_test',
					path: 'layout/view/test',
					component: () => import('@/components/view/Test'),
				},
			]
		}
	]
})
