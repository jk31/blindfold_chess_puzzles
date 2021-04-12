import Vue from 'vue';
import Vuex from 'vuex';

import puzzles from './puzzles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    puzzles,
  },
});
