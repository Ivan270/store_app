import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueGeolocation from 'vue-browser-geolocation';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

Vue.use(VueGeolocation);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
