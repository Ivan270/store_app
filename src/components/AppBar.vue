<template>
	<v-app-bar app color="green darken-4" dark dense flat>
		<!-- 1. dropdown con categorias -->
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<v-btn text depressed plain dark v-bind="attrs" v-on="on">
					Categories
				</v-btn>
			</template>
			<v-list>
				<v-list-item v-for="(category, index) in categories" :key="index">
					<v-list-item-title>{{ category }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<!-- 2. Boton home -->

		<!-- 3. Boton carrito -->
	</v-app-bar>
</template>

<script>
	export default {
		name: 'app-bar',
		// props: {},
		data: function () {
			return {
				categories: [],
			};
		},
		// computed: {},
		methods: {
			async fetchCategories() {
				try {
					let response = await fetch(
						'https://fakestoreapi.com/products/categories'
					);
					if (!response.ok) throw 'Something went wrong with the API';
					let data = await response.json();
					this.categories = data;
				} catch (error) {
					console.log(error);
				}
			},
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
