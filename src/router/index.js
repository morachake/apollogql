import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Students from '../views/Students.vue'
import Profile from '../views/Profiles.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: Students
		},
		{
			path: '/profiles',
			component: Profile
		}
	],
})

export default router