<template>
	<v-container class="pa-16" fill-height>
		<v-row>
			<v-col cols="12" md="6">
				<v-sheet outlined rounded>
					<v-img
						:src="this.product.image"
						height="400"
						aspect-ratio="1"
						contain
					></v-img>
				</v-sheet>
				<v-chip class="mt-3">{{ this.product.category }}</v-chip>
			</v-col>
			<v-col cols="12" md="6">
				<h1 class="mb-6 text-h3">{{ this.product.title }}</h1>
				<v-row>
					<v-rating
						length="5"
						background-color="grey lighten-2"
						color="warning"
						half-increments
						readonly
						size="24"
						:value="this.product.rating.rate"
					></v-rating>
					<p class="text-caption">{{ this.product.rating.count }} reviews</p>
				</v-row>
				<v-divider class="my-10"></v-divider>
				<h2>${{ this.product.price }}</h2>
				<v-row>
					<v-col cols="2" class="">
						<p class="mb-0 pb-0">Quantity</p>

						<v-text-field
							class="mt-0 pt-0"
							v-model="amount"
							single-line
							outlined
							dense
							type="number"
						/>
					</v-col>
				</v-row>
				<v-btn block color="orange" dark>Add to cart</v-btn>
			</v-col>
			<v-col cols="12">
				<v-divider class="my-10"></v-divider>
			</v-col>
			<h1 class="text-h4 mb-3">Product description {{ this.product.title }}</h1>
			<p>{{ this.product.description }}</p>
		</v-row>

		<v-row> </v-row>
	</v-container>
</template>

<script>
	export default {
		name: 'product-view',
		props: ['id'],
		data: function () {
			return {
				product: [],
				amount: null,
			};
		},
		// computed: {},
		methods: {
			async fetchProduct() {
				try {
					let response = await fetch(
						`https://fakestoreapi.com/products/${this.id}`
					);
					if (!response.ok) throw 'Something went wrong with the API';
					let data = await response.json();
					this.product = data;
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
			this.fetchProduct();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
