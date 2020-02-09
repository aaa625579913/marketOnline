import Vue from 'vue'
import Vuex from 'vuex'
import counters from './modules/counters'
Vue.use(Vuex)

const store = new Vuex.Store({
   modules:{
       counters
   }
})


export default store