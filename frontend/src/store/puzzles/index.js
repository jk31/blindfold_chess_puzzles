export default {
  state: {
    puzzles: [],
    filteredPuzzles: [],
    ratingMin: 400,
    ratingMax: 3000,
    ratingRange: [800, 1500],
    numberOfPiecesMin: 3,
    numberOfPiecesMax: 32,
    numberOfPiecesRange: [4, 10],
  },
  mutations: {
    UPDATE_PUZZLES(state, { puzzles }) {
      state.puzzles = puzzles;
    },
  },
  actions: {
    loadPuzzles(context) {
      const puzzles = require('../../data/puzzles_alg.json');
      context.commit('UPDATE_PUZZLES', { puzzles });
    },
  },
  getters: {
    getPuzzles: (state) => state.puzzles,
    getFilteredPuzzles: (state) => state.filteredPuzzles,
  },
};
