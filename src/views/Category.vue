<template>
	<v-container fill-height>
		<v-btn text @click="$router.go(-1)">Back</v-btn>
		<v-row justify="center">
			<v-col
				cols="12"
				sm="6"
				lg="4"
				xl="3"
				v-for="product in products"
				:key="product.id"
			>
				<v-card>
					<v-img :src="product.image" contain aspect-ratio="1">
						<v-app-bar flat color="rgba(0, 0, 0, 0.6)" dark>
							<v-toolbar-title class="text-h6 font-weight-light">{{
								product.title
							}}</v-toolbar-title>
						</v-app-bar>
					</v-img>
					<v-divider class="mx-4"></v-divider>
					<v-card-text class="text-center text-h6 deep-orange--text"
						>${{ product.price }}</v-card-text
					>
					<v-card-actions>
						<v-btn text @click="$router.push(`/products/${product.id}`)"
							>More</v-btn
						>
						<v-spacer></v-spacer>
						<v-btn icon color="green darken-4" @click="add(product)"
							><v-icon>mdi-cart-variant</v-icon></v-btn
						>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: 'category-view',
		props: ['name'],
		data: function () {
			return {
				products: [],
			};
		},
		// computed: {},
		methods: {
			...mapActions(['addToCart']),
			async fetchCategory() {
				try {
					let response = await fetch(
						`https://fakestoreapi.com/products/category/${this.name}`
					);
					if (!response.ok)
						throw 'Something went wrong with the API - Category';
					let data = await response.json();
					this.products = data;
				} catch (error) {
					console.log(error);
				}
			},
			add(prod) {
				let product = {
					id: prod.id,
					title: prod.title,
					price: prod.price,
					image: prod.image,
					count: 1,
				};
				this.addToCart(product);
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.fetchCategory();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
