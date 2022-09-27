<template>
	<v-app-bar app color="green darken-4" dark flat>
		<v-container>
			<v-row justify="center" align="center">
				<v-menu offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-btn text depressed plain dark v-bind="attrs" v-on="on">
							Categories <v-icon>mdi-chevron-down</v-icon>
						</v-btn>
					</template>
					<v-list>
						<v-list-item
							v-for="(category, index) in categories"
							:key="index"
							@click="$router.push(`/categories/${category}`)"
						>
							<v-list-item-title class="text-capitalize">{{
								category
							}}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-spacer></v-spacer>
				<v-btn icon to="/" class="me-5"><v-icon>mdi-home</v-icon></v-btn>
				<v-badge :content="cartCount" :value="cartCount > 0">
					<v-icon @click="$router.push('/cart')">mdi-cart-variant</v-icon>
				</v-badge>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';
	export default {
		name: 'app-bar',
		// props: {},
		data: function () {
			return {};
		},
		computed: {
			...mapState(['categories']),
			...mapGetters(['cartCount']),
		},
		methods: {
			...mapActions(['fetchCategories']),
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.fetchCategories();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
