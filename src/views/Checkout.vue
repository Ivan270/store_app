<template>
	<v-sheet height="100%" width="100%" color="grey lighten-3">
		<v-container fill-height>
			<v-row justify="center" class="mt-6 mb-3">
				<v-col cols="12" lg="10" order="1">
					<h1 class="text-h4 text-start">Checkout</h1>
				</v-col>
				<v-col cols="12" md="6" lg="6" order="3" order-md="2">
					<CheckoutForm />
				</v-col>
				<v-col cols="12" md="6" lg="4" order="2" order-md="3">
					<v-card rounded class="pa-6" elevation="16">
						<v-row justify="space-between" align="center">
							<v-card-title>Shopping Cart</v-card-title>
							<v-btn small icon to="/cart"
								><v-icon>mdi-pencil-outline</v-icon></v-btn
							>
						</v-row>
						<v-row>
							<v-col cols="12" v-for="(product, i) in cartProducts" :key="i">
								<v-card height="auto" class="pa-2" tile elevation="0">
									<v-row justify="start" align="center">
										<v-col cols="2">
											<v-avatar tile width="60"
												><v-img :src="product.image" contain></v-img
											></v-avatar>
										</v-col>
										<v-col cols="10">
											<v-card-title class="text-body-1"
												>{{ product.title }}<br />
												Qty: {{ product.count }}</v-card-title
											>
										</v-col>
									</v-row>
									<v-row justify="end">
										<v-card-subtitle class="text-body-1 font-weight-bold"
											>USD${{ product.price }}</v-card-subtitle
										>
									</v-row>
								</v-card>
								<v-divider></v-divider>
							</v-col>
							<v-col cols="12">
								<v-row class="pa-6" justify="space-between">
									<h1
										class="text-h5 text-uppercase font-weight-black deep-orange--text"
									>
										Total
									</h1>
									<h1 class="text-h5 font-weight-black deep-orange--text">
										{{ cartTotal }}
									</h1>
								</v-row>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
	import { mapGetters } from 'vuex';
	import CheckoutForm from '@/components/CheckoutForm.vue';
	export default {
		name: 'component-name',
		// props: {},
		data: function () {
			return {};
		},
		computed: {
			...mapGetters(['cartProducts', 'cartTotal']),
		},
		//methods: {}
		// watch: {},
		components: {
			CheckoutForm,
		},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
