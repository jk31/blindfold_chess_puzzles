export default {
  namespaced: true,
  state: {
    puzzles: [],
    activePuzzleExists: false,
    activePuzzle: {
      moves: 'a8a6 h7h6 e6d5 h6a6',
      rating: 1080,
      themes: 'crushing endgame short skewer',
      gameurl: 'https://lichess.org/N9FWAV9a/black#110',
      moves_alg: ['Rxa6', 'Rh6+', 'Kd5', 'Rxa6'],
      fen_after_first_move: '8/7R/r3k3/4p2p/3b2p1/3K4/8/5R2 w - - 0 56',
      placement: '8/7R/r3k3/4p2p/3b2p1/3K4/8/5R2',
      active: 'w',
      castling: '-',
      enpassant: '-',
      number_of_pieces: 9,
      positions: {
        K: ['d3'],
        R: ['f1', 'h7'],
        k: ['e6'],
        r: ['a6'],
        b: ['d4'],
        p: ['e5', 'g4', 'h5'],
      },
      id: 169,
    },
    puzzleHistory: {},
    ratingRange: [800, 1500],
    numberOfPiecesRange: [4, 7],
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
    updateActivePuzzle(state, payload) {
      state.activePuzzleExists = true;
      state.activePuzzle = payload;
    },
  },
  actions: {
    loadPuzzles({ commit }) {
      const puzzles = require('../../data/puzzles_alg.json');
      commit('updatePuzzles', { puzzles });
    },
    getRandomPuzzleFromFilteredPuzzles({ state, commit }) {
      let filteredPuzzles = state.puzzles.filter(
        (puzzle) =>
          puzzle.rating >= state.ratingRange[0] &&
          puzzle.rating <= state.ratingRange[1] &&
          puzzle.number_of_pieces >= state.numberOfPiecesRange[0] &&
          puzzle.number_of_pieces <= state.numberOfPiecesRange[1]
      );
      let activePuzzle =
        filteredPuzzles[Math.floor(Math.random() * filteredPuzzles.length)];
      commit('updateActivePuzzle', activePuzzle);
    },
  },
  getters: {},
};
