import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		categories: [],
	},
	getters: {},
	mutations: {
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
		},
	},
	actions: {
		async fetchCategories() {
			try {
				let response = await fetch(
					'https://fakestoreapi.com/products/categories'
				);
				if (!response.ok) throw 'Something went wrong with the API';
				let data = await response.json();
				this.commit('SET_CATEGORIES', data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
