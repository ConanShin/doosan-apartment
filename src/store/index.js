import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        tradeHistory: async context => {
            const URL = 'http://13.124.121.110:5001'
            const response = await axios.get(URL)
            return response.data
        }
    },
    modules: {}
})
