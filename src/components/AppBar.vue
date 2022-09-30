<template>
	<v-app-bar app color="white" height="90" flat>
		<v-container>
			<v-row align="end">
				<v-col cols="6" order="2" class="d-flex justify-end">
					<v-badge
						:content="cartCount"
						:value="cartCount > 0"
						class="me-2"
						overlap
						bottom
					>
						<v-btn
							x-large
							icon
							@click="$router.push('/cart')"
							:disabled="currentRoute === '/cart'"
							><v-icon>mdi-cart-variant</v-icon></v-btn
						>
					</v-badge>
				</v-col>
				<v-col cols="6" class="d-flex justify-start align-end" order="1">
					<p class="text-caption">Send to:</p>
					<v-avatar tile class="ms-3"
						><v-img :src="location.flag.svg" contain aspect-ratio=""></v-img
					></v-avatar>
				</v-col>
			</v-row>
		</v-container>
		<template #extension>
			<v-toolbar flat dense color="green darken-4" dark>
				<v-container>
					<v-row align="center" justify="space-around">
						<v-btn small icon to="/" class="me-5"
							><v-icon>mdi-home</v-icon></v-btn
						>

						<v-col
							cols="auto"
							v-for="category in categories"
							:key="category.name"
						>
							<v-btn
								text
								plain
								class="text-capitalize font-weight-light"
								@click="redirectTo(category.path)"
								:disabled="currentRoute === category.path"
								>{{ category.name }}</v-btn
							>
						</v-col>
					</v-row>
				</v-container>
			</v-toolbar>
		</template>
	</v-app-bar>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';
	export default {
		name: 'app-bar',
		// props: {},
		data: function () {
			return {
				location: {},
				errorMessage: '',
			};
		},
		computed: {
			...mapState(['categories']),
			...mapGetters(['cartCount']),
			currentRoute() {
				return this.$route.fullPath;
			},
		},
		methods: {
			async locationInformation() {
				try {
					const API_KEY = '4900db5bc5714f39bf143c2116a4aec4';
					const API_URL =
						'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;
					const apiResponse = await fetch(API_URL);
					const data = await apiResponse.json();
					this.location = data;
				} catch (error) {
					this.errorMessage = error;
				}
			},
			redirectTo(path) {
				this.$router.push(path);
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.locationInformation();
		},
		// -- End Lifecycle Methods
	};
</script>

<style>
	.v-toolbar__content,
	.v-toolbar__extension {
		padding: 0;
	}
</style>
