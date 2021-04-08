import Vue from 'nativescript-vue'
import App from './components/App'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'

Vue.use(RadSideDrawer)


Vue.config.silent = !__DEV__

new Vue({
  render: h => h(App),
  data: {
    isConnected: false,
    userName: '',
  }
}).$start()
