import Vue from 'vue';
import Vuex from 'vuex';
import { parser } from '../util/parse';

Vue.use(Vuex);

export default new Vuex.Store({
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
    },
    async clearProperties({ commit, state }) {
      commit('clearProperties');
    },
    async clearProperty({ commit, state }, index) {
      commit('clearProperty', { index });
    },
  },
  getters: {
    properties(state) {
      return state.propertyData;
    },
  },
});
