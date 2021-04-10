export default {
  namespaced: true,
  state: {
    puzzles: [],
    ratingMin: 400,
    ratingMax: 3000,
    ratingRange: [800, 1500],
    numberOfPiecesMin: 3,
    numberOfPiecesMax: 32,
    numberOfPiecesRange: [4, 10],
  },
  mutations: {
    updatePuzzles(state, payload) {
      state.puzzles = payload.puzzles;
    },
    updateRatingRange(state, payload) {
      state.ratingRange = payload;
    },
    updateNumberOfPiecesRange(state, payload) {
      state.numberOfPiecesRange = payload;
    },
  },
  actions: {
    loadPuzzles(context) {
      const puzzles = require('../../data/puzzles_alg.json');
      context.commit('updatePuzzles', { puzzles });
    },
  },
  getters: {
    filteredPuzzles: (state) => {
      return state.puzzles.filter(
        (puzzle) =>
          puzzle.rating > state.ratingRange[0] &&
          puzzle.rating < state.ratingRange[1] &&
          puzzle.number_of_pieces > state.numberOfPiecesRange[0] &&
          puzzle.number_of_pieces < state.numberOfPiecesRange[1]
      );
    },
  },
};
