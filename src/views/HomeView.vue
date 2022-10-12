<template>
	<v-container fill-height fluid>
		<v-row justify="center">
			<Header />
		</v-row>
		<v-row justify="center">
			<v-col cols="10">
				<v-row justify="center" class="ma-5">
					<v-col cols="12" class="mt10">
						<h1 class="text-h5">Categories</h1>
					</v-col>
					<v-col
						cols="12"
						lg="6"
						xl="3"
						v-for="(category, index) in categories"
						:key="index"
					>
						<v-card tile @click="$router.push(`/categories/${category.name}`)">
							<v-img
								aspect-ratio="1.7778"
								cover
								:src="require(`@/assets/${category.name}.jpg`)"
							>
								<v-app-bar
									absolute
									bottom
									flat
									color="rgba(0, 0, 0, 0)"
									class="pa-3"
								>
									<v-spacer></v-spacer>
									<v-toolbar-title
										class="text-center text-h6 white--text text-uppercase font-weight-medium"
										>{{ category.name }}</v-toolbar-title
									>
								</v-app-bar>
							</v-img>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapState } from 'vuex';
	import Header from '@/components/HeaderCarousel.vue';
	export default {
		name: 'Home-view',
		data: function () {
			return {};
		},
		computed: {
			...mapState(['categories']),
		},

		components: {
			Header,
		},
	};
</script>
