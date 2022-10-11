<template>
	<div>
		<v-system-bar height="30">
			<v-container>
				<v-row>
					<v-col cols="12" class="d-flex align-center justify-center">
						<p class="text-caption my-auto">Send to:</p>
						<v-avatar tile class="ms-1"
							><v-img :src="location.flag.svg" contain height="20"></v-img
						></v-avatar>
					</v-col>
				</v-row>
			</v-container>
		</v-system-bar>
		<v-toolbar color="white" height="90" flat>
			<v-container>
				<v-row align="center" justify="center">
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
					<v-col cols="6" order="1">
						<v-img
							src="@/assets/store-logo.png"
							class="shrink"
							transition="scale-transition"
							height="90"
							width="90"
							contain
						></v-img>
					</v-col>
				</v-row>
			</v-container>
			<template #extension>
				<v-toolbar flat dense color="green darken-4" dark>
					<v-container class="hidden-sm-and-down">
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
					<v-container class="hidden-md-and-up">
						<v-row justify="center">
							<v-menu
								offset-y
								min-width="100vw"
								transition="slide-y-transition"
								dark
								class="primary"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn icon dark v-bind="attrs" v-on="on">
										<v-icon>mdi-menu</v-icon>
									</v-btn>
								</template>
								<v-list color="green darken-4">
									<v-list-item link class="text-center" to="/">
										<v-list-item-title>Home</v-list-item-title>
									</v-list-item>
									<v-list-item
										link
										v-for="category in categories"
										:key="category.name"
										class="text-capitalize text-center"
										@click="redirectTo(category.path)"
										:disabled="currentRoute === category.path"
									>
										<v-list-item-title>{{ category.name }}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</v-row>
					</v-container>
				</v-toolbar>
			</template>
		</v-toolbar>
	</div>
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
