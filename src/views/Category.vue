<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="10">
				<v-row justify="center">
					<v-col cols="12" class="d-flex justify-start ms-3">
						<v-btn text @click="$router.go(-1)" class="mb-5" outlined
							>Back</v-btn
						>
					</v-col>

					<v-col
						cols="auto"
						v-for="product in products"
						:key="product.id"
						class="d-flex align-stretch"
					>
						<ProductCard :product="product" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import ProductCard from '@/components/ProductCard.vue';

	export default {
		name: 'category-view',
		props: ['name'],
		data: function () {
			return {
				products: [],
			};
		},
		computed: {},
		methods: {
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
		},
		// watch: {},
		components: {
			ProductCard,
		},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.fetchCategory();
		},
		updated() {
			this.fetchCategory();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
