import VueRouter, { RouteConfig } from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
	{
		path: '/foo',
		component: () => import('@/components/FOO')
	},
	{
		path: '/bar',
		component: () => import('@/components/Bar')
	}
]
const router: VueRouter = new VueRouter({
	mode: 'history',
	routes
})

export default router
