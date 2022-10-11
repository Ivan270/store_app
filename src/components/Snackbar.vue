<template>
	<v-snackbar
		v-model="snackbar"
		multi-line
		color="success"
		elevation="24"
		text
		timeout="2000"
	>
		The product has been added to the shopping cart

		<template v-slot:action="{ attrs }">
			<v-btn x-small color="red" text v-bind="attrs" @click="snackbar = false">
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script>
	export default {
		name: 'snackbar-comp',
		props: {
			snackbarStat: {
				type: Boolean,
				default: false,
			},
		},
		data: function () {
			return {
				snackbar: this.snackbarStat,
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
