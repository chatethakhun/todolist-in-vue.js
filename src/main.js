// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import apolloProvider from './config/config'

Vue.config.productionTip = false

Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
