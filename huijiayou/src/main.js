// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('./style/app.scss')
import Vue from 'vue'
import index from './script/components/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
  	index
  },
  template:'<index />'
})
