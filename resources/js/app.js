require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
    render: h=> h(App)
});
