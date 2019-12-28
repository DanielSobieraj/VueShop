import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBLiVXnJyj5MP_LfRIp_d9JF_0ufKQEa8Q",
  authDomain: "uczelnia-bbbc6.firebaseapp.com",
  databaseURL: "https://uczelnia-bbbc6.firebaseio.com",
  projectId: "uczelnia-bbbc6",
  storageBucket: "uczelnia-bbbc6.appspot.com",
  messagingSenderId: "531838899222"
});

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

export const db = firebase.firestore();


// new Vue({
//   vuetify,
//   router,
//   render: h => h(App)
// }).$mount("#app");

