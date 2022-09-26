<template>
	<v-app-bar app color="green darken-4" dark dense flat>
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
							@click="$router.push('/test')"
						>
							<v-list-item-title class="text-capitalize">{{
								category
							}}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-spacer></v-spacer>
				<v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
				<v-btn icon x-large><v-icon>mdi-cart-variant</v-icon> </v-btn>
			</v-row>
		</v-container>
	</v-app-bar>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	export default {
		name: 'app-bar',
		// props: {},
		data: function () {
			return {};
		},
		computed: {
			...mapState(['categories']),
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
