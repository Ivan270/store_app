<template>
	<div>
		<v-skeleton-loader
			height="300"
			width="300"
			type="card"
			loading
			v-if="isLoading"
		></v-skeleton-loader>
		<v-hover v-slot="{ hover }">
			<v-card
				:elevation="hover ? 12 : 0"
				class="pa-3 transition-fast-in-fast-out"
				flat
				width="300"
				:to="`/products/${product.id}`"
				:loading="isLoading"
			>
				<v-img
					:src="product.image"
					contain
					aspect-ratio="1"
					height="200"
					class="mb-3"
					@load="loaded"
				>
					<v-expand-transition v-if="!isLoading">
						<v-container
							v-if="hover"
							class="transition-fast-in-fast-out green darken-4 v-card--reveal text-h4 white--text d-flex"
							style="height: 100%"
						>
							<v-row class="text-center">
								<v-col cols="12"
									><h6 class="text-h4 font-weight-black">
										${{ Number(product.price).toLocaleString('en-US') }}
									</h6></v-col
								>
							</v-row>
						</v-container>
					</v-expand-transition>
				</v-img>
				<v-card-actions v-if="!isLoading">
					<v-card-title class="text-body-2 black--text">
						{{ product.title }}
					</v-card-title>
				</v-card-actions>
			</v-card>
		</v-hover>
	</div>
</template>

<script>
	export default {
		name: 'category-card',
		props: ['product'],
		data: function () {
			return {
				transparent: 'rgba(255, 255, 255, 0)',
				count: 0,
				isLoading: true,
			};
		},
		// computed: {},
		methods: {
			loaded() {
				this.isLoading = false;
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
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
