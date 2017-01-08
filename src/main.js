import Vue from 'vue'
import ChatApp from './ChatApp'

require('./assets/main.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<ChatApp/>',
  components: { ChatApp }
})
