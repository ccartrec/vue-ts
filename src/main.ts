import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueFire from 'vuefire';
import firebase from 'firebase';
import 'firebase/firestore';

Vue.use(VueFire);

firebase.initializeApp({
    apiKey: 'AIzaSyDqxjKZLkCkLLHWZ2H7HIX8pspdduk7IVk',
    authDomain: 'fire-vue-pro.firebaseapp.com',
    databaseURL: 'https://fire-vue-pro.firebaseio.com',
    projectId: 'fire-vue-pro',
    storageBucket: 'fire-vue-pro.appspot.com',
    messagingSenderId: '947707931490',
});

export const db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
