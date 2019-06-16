import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = '';

var config = {
	apiKey: "AIzaSyBNWEhkh0EMyjQgJwm4PUSOYqvhvYrnMXk",
	authDomain: "vue-firebase-tutorial-145b9.firebaseapp.com",
	databaseURL: "https://vue-firebase-tutorial-145b9.firebaseio.com",
	projectId: "vue-firebase-tutorial-145b9",
	storageBucket: "vue-firebase-tutorial-145b9.appspot.com",
	messagingSenderId: "783793112005"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
		  	router,
		  	render: h => h(App)
		}).$mount('#app')
	}
});


