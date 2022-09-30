<template>
	<v-hover v-slot="{ hover }">
		<v-card
			:elevation="hover ? 12 : 0"
			class="pa-3 overflow-hidden transition-fast-in-fast-out"
			flat
			height="280"
			width="500"
		>
			<v-img
				:src="product.image"
				contain
				aspect-ratio="1"
				height="200"
				class="mb-3"
			>
				<v-expand-transition>
					<v-container
						v-if="hover"
						class="transition-fast-in-fast-out green darken-4 v-card--reveal text-h4 white--text"
						style="height: 100%"
					>
						<v-row class="text-center">
							<v-col cols="12"
								><h5 class="text-body-1">{{ product.title }}</h5></v-col
							>
							<v-col cols="12"
								><h6 class="text-h4 font-weight-black">
									${{ product.price }}
								</h6></v-col
							>
						</v-row>
					</v-container>
				</v-expand-transition>
			</v-img>
			<v-divider class="mx-4"></v-divider>

			<v-card-actions>
				<v-btn text @click="$router.push(`/products/${product.id}`)"
					>More</v-btn
				>
				<v-spacer></v-spacer>
				<v-badge
					overlap
					:content="count"
					:value="count > 0"
					color="deep-orange"
				>
					<v-btn icon color="green darken-4" @click="add(product)"
						><v-icon>mdi-cart-variant</v-icon></v-btn
					>
				</v-badge>
			</v-card-actions>
		</v-card>
	</v-hover>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'category-card',
		props: ['product'],
		data: function () {
			return {
				transparent: 'rgba(255, 255, 255, 0)',
				count: 0,
			};
		},
		computed: {
			...mapGetters(['cartProducts']),
		},
		methods: {
			...mapActions(['addToCart']),

			add(prod) {
				let product = {
					id: prod.id,
					title: prod.title,
					price: prod.price,
					image: prod.image,
					count: (this.count += 1),
				};
				this.productCount();

				this.addToCart(product);
			},
			productCount() {
				this.cartProducts.forEach((prod) => {
					if (this.product.id == prod.id) {
						console.log(prod.count);
						this.count = prod.count;
					}
				});
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.productCount();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped>
	.v-card--reveal {
		align-items: center;
		bottom: 0;
		justify-content: center;
		opacity: 0.8;
		position: absolute;
		width: 100%;
	}
</style>
