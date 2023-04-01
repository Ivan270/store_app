<template>
	<v-sheet height="100%" width="100%" color="grey lighten-3">
		<v-container fill-height>
			<v-row align="center" justify="center">
				<v-col cols="6" class="d-flex flex-column align-center">
					<v-col cols="12">
						<h1 class="text-h4 text-center">Your order has been placed!</h1>
					</v-col>
					<v-col cols="12" class="my-16 d-flex justify-center">
						<v-card
							height="200"
							width="720"
							class="d-flex flex-column justify-center align-center"
							elevation="16"
							rounded
						>
							<v-card-text class="text-h6 text-center"
								>The order
								<span class="black--text font-weight-black"
									>ID #{{ orderId }}</span
								>
								has been placed and already being prepared.</v-card-text
							>
						</v-card>
					</v-col>
					<v-col cols="5" class="d-flex justify-center">
						<v-btn text dark to="/" color="deep-orange">Go Shopping</v-btn>
					</v-col>
				</v-col>
				<v-col cols="6">
					<v-img height="300" width="300" src="@/assets/store-logo.png"></v-img>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: 'component-name',
		props: {
			orderId: {
				type: String,
			},
		},
		data: function () {
			return {};
		},
		// computed: {},
		methods: {
			...mapActions(['emptyCart']),
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.emptyCart();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
