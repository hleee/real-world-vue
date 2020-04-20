import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: [
      'Sustainability',
      'Nature',
      'Animal welfare',
      'Housing',
      'Education',
      'Food',
      'Community'
    ]
  }
})
