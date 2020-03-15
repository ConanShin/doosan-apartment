import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        tradeHistory: async context => {
            const URL = 'http://52.79.142.42:5001'
            const response = await axios.get(URL)
            return response.data
        }
    },
    modules: {}
})
