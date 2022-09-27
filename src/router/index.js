import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Category from '@/views/Category.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/categories/:name',
		component: Category,
		props: true,
	},
	{
		path: '/products/:id',
		component: Product,
		props: true,
	},
	{
		path: '/cart',
		component: Cart,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
