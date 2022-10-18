<template>
	<div>
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
							required
							:error-messages="firstNameErrors"
							@input="$v.firstName.$touch()"
							@blur="$v.firstName.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="email"
							label="E-mail"
							required
							:error-messages="emailErrors"
							@input="$v.email.$touch()"
							@blur="$v.email.$touch()"
						></v-text-field>
					</v-col>
					<v-col cols="4">
						<v-text-field
							color="green darken-4"
							v-model="lastName"
							label="Last Name"
							required
							:error-messages="lastNameErrors"
							@input="$v.lastName.$touch()"
							@blur="$v.lastName.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="emailConfirmation"
							label="Confirm E-mail"
							required
							:error-messages="emailConfirmationErrors"
							@input="$v.emailConfirmation.$touch()"
							@blur="$v.emailConfirmation.$touch()"
						></v-text-field>
					</v-col>
				</v-row>
			</v-form>
		</v-card>
		<v-card tile elevation="6" class="pa-6 mb-6">
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
							required
							:error-messages="zipCodeErrors"
							@input="$v.zipCode.$touch()"
							@blur="$v.zipCode.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="stateAddress"
							label="State or Province"
							required
							:error-messages="stateAddressErrors"
							@input="$v.stateAddress.$touch()"
							@blur="$v.stateAddress.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="idNumber"
							label="ID Number"
							required
							:error-messages="idNumberErrors"
							@input="$v.idNumber.$touch()"
							@blur="$v.idNumber.$touch()"
						></v-text-field>
					</v-col>
					<v-col cols="4">
						<v-text-field
							color="green darken-4"
							v-model="fullAddress"
							label="Full Address"
							required
							:error-messages="fullAddressErrors"
							@input="$v.fullAddress.$touch()"
							@blur="$v.fullAddress.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="cityAddress"
							label="City"
							required
							:error-messages="cityAddressErrors"
							@input="$v.cityAddress.$touch()"
							@blur="$v.cityAddress.$touch()"
						></v-text-field>
						<v-text-field
							color="green darken-4"
							v-model="phoneNumber"
							label="Phone Number"
							placeholder="(123) 456 7899"
							required
							:error-messages="phoneNumberErrors"
							@input="$v.phoneNumber.$touch()"
							@blur="$v.phoneNumber.$touch()"
						></v-text-field>
					</v-col>
				</v-row>
			</v-form>
		</v-card>
		<v-btn
			block
			class="pa-6 text-uppercase"
			color="warning"
			@click.stop="confirm"
			>Confirm Order</v-btn
		>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import { validationMixin } from 'vuelidate';
	import {
		required,
		email,
		sameAs,
		helpers,
		numeric,
	} from 'vuelidate/lib/validators';
	const phone = helpers.regex(
		'phone',
		/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
	);
	export default {
		mixins: [validationMixin],
		name: 'client-form',
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
				idPurchaseNumber: '',
				purchase: {
					total: '',
				},
			};
		},
		validations: function () {
			return {
				firstName: { required },
				lastName: { required },
				email: { required, email },
				emailConfirmation: { required, sameAs: sameAs('email') },
				zipCode: { required },
				stateAddress: { required },
				idNumber: { required, numeric },
				fullAddress: { required },
				cityAddress: { required },
				phoneNumber: { required, phone },
			};
		},
		computed: {
			...mapGetters(['cartTotal']),
			firstNameErrors() {
				const errors = [];
				if (!this.$v.firstName.$dirty) return errors;
				!this.$v.firstName.required && errors.push('Name is required');
				return errors;
			},
			lastNameErrors() {
				const errors = [];
				if (!this.$v.lastName.$dirty) return errors;
				!this.$v.lastName.required && errors.push('Last Name is required');
				return errors;
			},
			emailErrors() {
				const errors = [];
				if (!this.$v.email.$dirty) return errors;
				!this.$v.email.email && errors.push('Entered Email is invalid');
				!this.$v.email.required && errors.push('Email is required');
				return errors;
			},
			emailConfirmationErrors() {
				const errors = [];
				if (!this.$v.emailConfirmation.$dirty) return errors;
				!this.$v.emailConfirmation.sameAs &&
					errors.push('Does not match with e-mail');
				return errors;
			},
			zipCodeErrors() {
				const errors = [];
				if (!this.$v.zipCode.$dirty) return errors;
				!this.$v.zipCode.required && errors.push('Name is required');
				return errors;
			},
			stateAddressErrors() {
				const errors = [];
				if (!this.$v.stateAddress.$dirty) return errors;
				!this.$v.stateAddress.required && errors.push('State is required');
				return errors;
			},
			idNumberErrors() {
				const errors = [];
				!this.$v.idNumber.numeric && errors.push('ID Number must be a number');
				if (!this.$v.idNumber.$dirty) return errors;
				!this.$v.idNumber.required && errors.push('Name is required');
				return errors;
			},
			fullAddressErrors() {
				const errors = [];
				if (!this.$v.fullAddress.$dirty) return errors;
				!this.$v.fullAddress.required && errors.push('Address is required');
				return errors;
			},
			cityAddressErrors() {
				const errors = [];
				if (!this.$v.cityAddress.$dirty) return errors;
				!this.$v.cityAddress.required && errors.push('City is required');
				return errors;
			},
			phoneNumberErrors() {
				const errors = [];
				if (!this.$v.phoneNumber.$dirty) return errors;
				!this.$v.phoneNumber.phone &&
					errors.push('This is an invalid phone number');
				!this.$v.phoneNumber.required &&
					errors.push('Phone Number is required');
				return errors;
			},
		},
		methods: {
			...mapActions(['addOrder']),
			confirm() {
				this.$v.$touch();
				if (this.$v.$invalid) {
					// crear componente alert de error
					alert('There are errors in the form');
				} else {
					alert('Order Confirmed');
					(this.purchase = {
						total: this.cartTotal,
					}),
						this.addOrder(this.purchase);
					this.$router.push(`/confirmation/${this.idPurchaseNumber}`);
				}
			},
			generateIdNum() {
				this.idPurchaseNumber = Math.floor(Math.random() * 100000) + 1;
			},
		},
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.generateIdNum();
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped></style>
