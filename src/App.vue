<template>
	<v-app>
		<AppBar />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	import { mapActions } from 'vuex';
	import AppBar from '@/components/AppBar.vue';
	export default {
		name: 'App',

		data: () => ({
			//
		}),
		methods: {
			...mapActions(['fetchCategories']),
		},
		components: {
			AppBar,
		},
		created() {
			this.fetchCategories();
		},
	};
</script>
