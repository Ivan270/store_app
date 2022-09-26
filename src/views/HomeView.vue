<template>
	<v-container>
		<v-row justify="center" class="ma-5">
			<v-col
				cols="12"
				lg="6"
				xl="5"
				v-for="(category, index) in categories"
				:key="index"
			>
				<v-card @click="$router.push(`/categories/${category}`)">
					<v-img
						aspect-ratio="1.7778"
						cover
						:src="require(`@/assets/${category}.jpg`)"
					>
						<v-app-bar absolute bottom flat color="rgba(0, 0, 0, 0.1)">
							<v-spacer></v-spacer>
							<v-toolbar-title
								class="text-center text-h6 white--text text-uppercase font-weight-light"
								>{{ category }}</v-toolbar-title
							>
						</v-app-bar>
					</v-img>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'Home-view',
		computed: {
			...mapState(['categories']),
		},

		components: {},
	};
</script>
