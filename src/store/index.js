import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		categories: [],
		cart: [],
	},
	getters: {
		cartCount(state) {
			return state.cart.length;
		},
		cartProducts(state) {
			return state.cart.map((prod) => {
				let theProd = prod;
				theProd.total = prod.count * prod.price;
				return theProd;
			});
		},
		cartTotal(state, getters) {
			return getters.cartProducts.reduce((total, prod) => {
				return total + prod.total;
			}, 0);
		},
	},
	mutations: {
		SET_CATEGORIES(state, categories) {
			state.categories = categories;
		},
		ADD_TO_CART(state, product) {
			let exists = state.cart.some((prod) => prod.id == product.id);
			if (!exists) {
				state.cart.push(product);
			} else {
				state.cart.forEach((p) => {
					if (p.id == product.id) {
						p.count += 1;
					}
				});
			}
		},
		MINUS_ITEM_CART(state, product) {
			state.cart.forEach((p) => {
				if (p.id == product.id) {
					if (p.count == 1) {
						p.count = 1;
					} else {
						p.count -= 1;
					}
				}
			});
		},
		EMPTY_CART(state) {
			state.cart = [];
		},
		REMOVE_PRODUCT(state, product) {
			let index = state.cart.indexOf(product);
			state.cart.splice(index, 1);
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
		addToCart({ commit }, product) {
			commit('ADD_TO_CART', product);
		},
		minusItem({ commit }, product) {
			commit('MINUS_ITEM_CART', product);
		},
		emptyCart({ commit }) {
			commit('EMPTY_CART');
		},
		removeProduct({ commit }, product) {
			commit('REMOVE_PRODUCT', product);
		},
	},
	modules: {},
});
