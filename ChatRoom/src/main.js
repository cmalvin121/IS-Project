//import { createApp } from 'vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import store from './store'
import router from './router'
// import * as firebase from "firebase"      
// import VueFirebase from 'vue-firebase'

// Vue.use(VueFirebase, {firebase: firebase, config: {

// }});

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//createApp(App).use(BootstrapVue).use(IconsPlugin).use(router).use(store).mount('#app')
new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')