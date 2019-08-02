import Vue from 'vue';
import Vuex from 'vuex';
import { parser } from '../util/parse';
import generateOFX from '../util/qbo';

//import router from '../router/router';

Vue.use(Vuex);

export default new Vuex.Store({
  // status ->
  //  -1 not found
  //  0 not selected
  //  1 available
  //  2 loading/searching
  state: {
    propertyData: [],
  },
  mutations: {
    // save property takes in a single property and adds it to the propertydata
    saveProperty(state, payload) {
      state.propertyData.push(...payload.properties);
    },
    clearProperties(state, payload) {
      state.propertyData = [];
    },
    clearProperty(state, payload) {
      state.propertyData.splice(payload.index, 1);
    },
    // saveCoins(state, payload) {
    //   // save list of coin data to state
    //   state.coinsSummary = payload.coinsSummary;
    // },
  },
  actions: {
    // add property takes in a property , analyzes and then if good, mutates the propertyData
    async analyzeStatements({ commit, state }, files) {
      for (let file of files) {
        if (file.type == 'application/pdf') {
          let properties = await parser(file);
          commit('saveProperty', {
            properties,
          });
        }
      }

      // console.log('state', state.propertyData);
    },
    async clearProperties({ commit, state }) {
      commit('clearProperties');
    },
    async clearProperty({ commit, state }, index) {
      commit('clearProperty', { index });
    },
    // async fetchCoinsSummary({ commit, state }) {
    //   // fetches information on all of the coins
    //   commit('saveCoins', {
    //     coinsSummary: coinsSummary,
    //   });
    // },
  },
  getters: {
    properties(state) {
      return state.propertyData;
    },
    // coins(state) {
    //   return state.coinsSummary;
    // },
  },
});
