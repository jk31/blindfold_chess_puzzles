<template>
  <div id="solution">
    <v-card elevation="2">
      <v-card-title class="mb-3">{{ activePlayer }}'s next move.</v-card-title>
      <v-card-subtitle>{{ solutionPiece }}</v-card-subtitle>
      <v-card-text>
        <v-container
          class="grey lighten-5 d-flex align-center justify-space-around"
        >
          <Piece
            piece="king_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('K', $event)"
          />
          <Piece
            piece="queen_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('Q', $event)"
          />
          <Piece
            piece="rook_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('R', $event)"
          />
          <Piece
            piece="bishop_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('B', $event)"
          />
          <Piece
            piece="knight_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('N', $event)"
          />
          <Piece
            piece="pawn_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click.native="pieceClick('P', $event)"
          />
          <Piece
            piece="king_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('K', $event)"
          />
          <Piece
            piece="queen_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('Q', $event)"
          />
          <Piece
            piece="rook_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('R', $event)"
          />
          <Piece
            piece="bishop_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('B', $event)"
          />
          <Piece
            piece="knight_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('N', $event)"
          />
          <Piece
            piece="pawn_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click.native="pieceClick('P', $event)"
          />
        </v-container>
        <v-container fluid>
          <v-radio-group v-model="radios" :column="false" }>
            <v-radio value="Google">
              <template v-slot:label>
                <Piece
                  piece="king_w"
                  v-if="activePlayer === 'White'"
                  class="piece mx-2"
                  @click.native="pieceClick('K', $event)"
                />
              </template>
            </v-radio>
            <v-radio value="Duckduckgo">
              <template v-slot:label>
                <div>
                  Definitely <strong class="primary--text">Duckduckgo</strong>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
        <v-btn color="primary" class="my-3">Check your move</v-btn>
      </v-card-text>
      {{ solution }}
    </v-card>
  </div>
</template>

<script>
import Piece from './Piece.vue';

export default {
  name: 'Solution',
  components: {
    Piece,
  },
  data() {
    return {
      solutionPiece: '',
      solutionFile: '',
      solutionRank: '',
      radios: 'Duckduckgo',
    };
  },
  computed: {
    activePlayer() {
      return this.activePuzzle.active === 'w' ? 'White' : 'Black';
    },
    activePuzzle() {
      return this.$store.state.puzzles.activePuzzle;
    },
    solution() {
      return this.activePuzzle.moves_alg.slice(1);
    },
    selectedPiece() {
      return true;
    },
  },
  methods: {
    pieceClick(piece, event) {
      this.solutionPiece = piece;
      console.log(piece);
      event.target.classList.toggle('selected-piece');
    },
  },
};
</script>

<style scoped>
.piece {
  transform: scale(1.1);
  border: 1px solid white;
  cursor: pointer;
}

.selected-piece {
  border: 1px solid rgb(76, 175, 80);
}
</style>
