<template>
	<v-sheet height="100vh" color="grey lighten-3">
		<v-container>
			<h1 class="text-h2 mb-6 text-start">Checkout</h1>
			<v-row>
				<v-col cols="7">
					<v-card shaped elevation="6" class="pa-6 mb-6">
						<v-form>
							<v-row justify="start">
								<v-col cols="12">
									<h1 class="text-h5">About you</h1>
								</v-col>
								<v-col cols="4">
									<v-text-field
										color="green darken-4"
										v-model="firstName"
										label="First Name"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="email"
										label="E-mail"
									></v-text-field>
								</v-col>
								<v-col cols="4">
									<v-text-field
										color="green darken-4"
										v-model="lastName"
										label="Last Name"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="emailConfirmation"
										label="Confirm E-mail"
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
					</v-card>
					<v-card tile elevation="6" class="pa-6">
						<v-form>
							<v-row>
								<v-col cols="12">
									<h1 class="text-h5">Shipping Information</h1>
								</v-col>
								<v-col cols="4">
									<v-text-field
										color="green darken-4"
										v-model="zipCode"
										label="Zip Code"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="stateAddress"
										label="State or Province"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="idNumber"
										label="ID Number"
									></v-text-field>
								</v-col>
								<v-col cols="4">
									<v-text-field
										color="green darken-4"
										v-model="fullAddress"
										label="Full Address"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="cityAddress"
										label="City"
									></v-text-field>
									<v-text-field
										color="green darken-4"
										v-model="phoneNumber"
										label="Phone Number"
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
					</v-card>
				</v-col>
				<v-col cols="4">
					<!-- Carrito -->
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
	export default {
		name: 'component-name',
		// props: {},
		data: function () {
			return {
				firstName: '',
				lastName: '',
				email: '',
				emailConfirmation: '',
				zipCode: '',
				stateAddress: '',
				idNumber: '',
				fullAddress: '',
				cityAddress: '',
				phoneNumber: '',
			};
		},
		// computed: {},
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
