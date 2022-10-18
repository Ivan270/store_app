<template>
	<v-container>
		<div>
			<v-alert
				:value="alert"
				v-model="alert"
				color="error"
				dark
				border="top"
				icon="mdi-alert"
				transition="scale-transition"
				dismissible
				prominent
			>
				Please specify an amount to be added to the cart
			</v-alert>
		</div>
		<v-row justify="center">
			<v-col cols="12" class="d-flex justify-start ms-3">
				<v-btn text @click="$router.go(-1)" outlined>Back</v-btn>
			</v-col>
			<v-col cols="12" md="6">
				<v-sheet rounded>
					<v-img
						:src="this.product.image"
						height="400"
						aspect-ratio="1"
						contain
						transition="scale-transition"
					>
						<template v-slot:placeholder>
							<v-row align="center" class="fill-height ma-0" justify="center">
								<v-progress-circular
									color="green darken-4"
									indeterminate
								></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</v-sheet>
				<v-chip class="mt-3">{{ this.product.category }}</v-chip>
			</v-col>
			<v-col cols="12" md="6">
				<h1 class="mb-6 text-h5 text-md-h4">{{ this.product.title }}</h1>
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
					<p class="text-caption my-auto">
						{{ this.product.rating.count }} reviews
					</p>
				</v-row>
				<v-divider class="my-10"></v-divider>
				<h2>${{ this.product.price }}</h2>
				<v-row>
					<v-col cols="2">
						<p class="mb-0 pb-0">Quantity</p>

						<v-text-field
							class="mt-0 pt-0"
							v-model="amount"
							single-line
							outlined
							dense
							type="number"
							placeholder="amount"
						/>
					</v-col>
					<v-col cols="3" class="d-flex flex-column justify-center">
						<v-btn icon @click="remove()"
							><v-icon color="red">mdi-trash-can-outline</v-icon></v-btn
						></v-col
					>
				</v-row>
				<v-btn block color="deep-orange" dark @click="add()">Add to cart</v-btn>
			</v-col>
			<v-col cols="12">
				<v-divider class="my-10"></v-divider>
			</v-col>
		</v-row>

		<v-row justify="center" justify-md="start">
			<v-col cols="12" md="6">
				<v-card tile elevation="0" outlined class="pa-10">
					<h1 class="text-h6 mb-3">Product description</h1>
					<h1 class="text-h6 green--text text--darken-4 mb-5">
						{{ this.product.title }}
					</h1>
					<p class="text-body-2">{{ this.product.description }}</p>
				</v-card>
			</v-col>
		</v-row>
		<v-snackbar
			v-model="snackbar"
			multi-line
			color="success"
			elevation="24"
			text
			timeout="2000"
		>
			The product has been added to the shopping cart

			<template v-slot:action="{ attrs }">
				<v-btn
					x-small
					color="red"
					text
					v-bind="attrs"
					@click="snackbar = false"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-container>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'product-view',
		props: ['id'],
		data: function () {
			return {
				product: [],
				amount: 0,
				alert: false,
				snackbar: false,
			};
		},
		computed: {
			...mapGetters(['cartProducts']),
		},
		methods: {
			...mapActions(['addToCart', 'removeProduct']),
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
			add() {
				if (this.getProdCount() === this.amount) {
					alert('error son iguales');
				} else {
					if (this.amount >= 1) {
						let prod = {
							id: this.product.id,
							title: this.product.title,
							price: Number(this.product.price).toLocaleString('en-US'),
							image: this.product.image,
							count: parseInt(this.amount),
						};
						this.addToCart(prod);
						this.snackbar = true;
						this.productCount();
					} else {
						this.alert = true;
					}
				}
			},
			remove() {
				this.removeProduct(this.product);
			},
			productCount() {
				this.cartProducts.forEach((prod) => {
					if (this.id == prod.id) {
						this.amount = prod.count;
					}
				});
			},
			getProdCount() {
				return this.cartProducts.forEach((prod) => {
					if (this.id == prod.id) {
						console.log(prod.count);
						return prod.count;
					}
				});
			},
		},
		// watch: {},
		components: {
			// SuccessSnackbar,
		},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.fetchProduct();
			this.productCount();
			// this.getProdCount();
		},

		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
