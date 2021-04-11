<template>
  <div id="solution">
    <v-card elevation="2">
      <v-card-title class="mb-3">{{ activePlayer }}'s next move.</v-card-title>
      <!-- <v-card-subtitle>Solution subtitle</v-card-subtitle> -->
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
            @click="pieceClick('Q')"
          />
          <Piece
            piece="rook_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('R')"
          />
          <Piece
            piece="bishop_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('B')"
          />
          <Piece
            piece="knight_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('N')"
          />
          <Piece
            piece="pawn_w"
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('P')"
          />
          <Piece
            piece="king_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('K')"
          />
          <Piece
            piece="queen_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('Q')"
          />
          <Piece
            piece="rook_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('R')"
          />
          <Piece
            piece="bishop_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('B')"
          />
          <Piece
            piece="knight_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('N')"
          />
          <Piece
            piece="pawn_b"
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('P')"
          />
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
      console.log(piece);
      console.log(event);
      event.target.classList.toggle('selected-piece');
    },
  },
};
</script>

<style scoped>
.piece {
  transform: scale(1.1);
  cursor: pointer;
}

.selected-piece {
  border: 1px solid rgb(76, 175, 80);
}
</style>
