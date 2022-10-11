<template>
	<v-carousel
		height="65vh"
		cycle
		delimiter-icon="mdi-circle-small"
		show-arrows-on-hover
		dark
	>
		<v-carousel-item
			v-for="(item, i) in items"
			:key="i"
			:src="item.src"
			reverse-transition="fade-transition"
			transition="fade-transition"
		>
			<v-container fill-height
				><v-row justify="center">
					<h1 class="text-h2 white--text">
						Get your products here <v-icon color="white">mdi-arrow-down</v-icon>
					</h1>
				</v-row></v-container
			>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
	export default {
		name: 'header-carousel',
		// props: {},
		data: function () {
			return {
				items: [
					{ src: 'https://picsum.photos/id/1059/1920/1080?grayscale' },
					{ src: 'https://picsum.photos/id/119/1920/1080?grayscale' },
					{ src: 'https://picsum.photos/id/160/1920/1080?grayscale' },
				],
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
