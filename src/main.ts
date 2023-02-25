import { createApp } from "vue";

import { VueFire, VueFireAuth } from 'vuefire';

import "./style.css";
import App from "./App.vue";

import { app as firebase } from './services/firebase';

const { firebaseApp } = firebase;

const app = createApp(App);

app
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  });

app.mount("#app");
