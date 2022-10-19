<template>
	<v-container class="mt-10">
		<v-row justify="center">
			<v-col cols="10">
				<v-row v-if="cartCount < 1" justify="center" align="center">
					<v-col
						cols="10"
						md="5"
						class="d-flex flex-column align-center justify-center"
					>
						<v-sheet elevation="10" rounded class="pa-5" color="grey lighten-3">
							<h1 class="text-h4 text-md-h3 text-center">
								Nothing in your cart yet
							</h1>
							<h6 class="text-subtitle-1 text-center my-6">
								Go check our products
							</h6>
							<v-btn bottom block color="deep-orange" dark to="/"
								>Products</v-btn
							>
						</v-sheet>
					</v-col>
				</v-row>
				<v-row v-else>
					<v-col cols="12">
						<h1 class="text-h4 text-start">Shopping Basket</h1>
					</v-col>
					<v-col cols="12">
						<v-sheet color="grey lighten-2" class="pa-3" height="60">
							<h4 class="text-h6">Product(s)</h4>
						</v-sheet>
					</v-col>
					<v-col cols="12" xl="9">
						<v-col cols="12" v-for="(product, i) in cartProducts" :key="i">
							<!-- Transformar en componente -->
							<v-card flat height="60%">
								<v-row align="center" justify="space-between">
									<v-col cols="4" xl="2"
										><v-avatar tile size="50%"
											><v-img
												:src="product.image"
												contain
												aspect-ratio="0.7778"
												class="ms-0 ms-lg-6"
											></v-img></v-avatar
									></v-col>
									<v-col cols="4" xl="7">
										<v-card-title
											class="text-body-2"
											v-text="product.title"
										></v-card-title>
									</v-col>
									<v-col cols="12" xl="3">
										<v-row align="center">
											<v-col cols="6" md="4" lg="3" xl="8" class="d-flex">
												<v-text-field
													v-model="product.count"
													solo
													dense
													number
													append-outer-icon="mdi-plus-circle-outline"
													prepend-icon="mdi-minus-circle-outline"
													@click:append-outer="plusItem(product)"
													@click:prepend="minusItem(product)"
												></v-text-field>
												<v-btn
													icon
													color="error"
													class="ms-2"
													@click="removeProduct(product)"
													><v-icon>mdi-trash-can-outline</v-icon></v-btn
												>
											</v-col>

											<v-col cols="6" md="8" lg="9" xl="4">
												<p class="text-right font-weight-bold">
													${{ product.total }}
												</p>
											</v-col>
										</v-row>
									</v-col>
								</v-row>
							</v-card>
						</v-col>
					</v-col>
					<v-col cols="12" xl="3">
						<v-card
							outlined
							color="grey lighten-2"
							tile
							elevation="15"
							class="pa-6 d-flex justify-space-around align-center"
						>
							<h3>TOTAL:</h3>
							<h3>USD$ {{ cartTotal }}</h3>
						</v-card>
						<v-btn block color="deep-orange" class="mt-6" dark to="/checkout"
							>Proceed to Checkout</v-btn
						>
					</v-col>
					<v-col cols="12">
						<v-sheet color="grey lighten-2" class="pa-3" dark height="60">
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'cart-view',
		// props: {},
		data: function () {
			return {};
		},
		computed: {
			...mapGetters(['cartProducts', 'cartTotal', 'cartCount']),
		},
		methods: {
			...mapActions(['minusItem', 'plusItem', 'removeProduct']),
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
