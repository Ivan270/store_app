<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="text-h4">Shopping Basket</h1>
			</v-col>
			<v-col cols="12">
				<v-sheet color="grey" class="pa-3" dark>
					<h4 class="text-h6">Product(s)</h4>
				</v-sheet>
			</v-col>
			<v-col cols="9">
				<v-col cols="12" v-for="(product, i) in cartProducts" :key="i">
					<v-card class="pt-6" flat height="120">
						<v-row align="center" justify="start">
							<v-col cols="2"
								><v-avatar tile width="100%"
									><v-img
										:src="product.image"
										contain
										aspect-ratio="0.7778"
										class="ms-6"
										max-height="70"
									></v-img></v-avatar
							></v-col>
							<v-col cols="7">
								<v-card-title v-text="product.title"></v-card-title>
							</v-col>
							<v-col cols="3">
								<v-row align="center">
									<v-col
										cols="3"
										class="d-flex flex-column justify-center align-center"
									>
										<v-text-field
											v-model="product.count"
											type="number"
											outlined
										></v-text-field>
										<v-btn icon x-small color="error"
											><v-icon>mdi-trash-can-outline</v-icon></v-btn
										>
									</v-col>
									<v-col cols="8">
										<p class="text-right">Total: ${{ product.total }}</p>
									</v-col>
								</v-row>
							</v-col>
						</v-row>
					</v-card>
					<v-divider class="my-2"></v-divider>
				</v-col>
			</v-col>
			<v-col cols="3">
				<v-card
					outlined
					color="grey"
					dark
					tile
					elevation="10"
					class="pa-6 d-flex justify-space-around align-center"
				>
					<h3>Total:</h3>
					<h3>{{ cartTotal }}</h3>
				</v-card>
				<v-btn block color="deep-orange" class="mt-6" dark
					>Proceed to Checkout</v-btn
				>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		name: 'cart-view',
		// props: {},
		data: function () {
			return {};
		},
		computed: {
			...mapGetters(['cartProducts', 'cartTotal']),
		},
		//methods: {}
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
