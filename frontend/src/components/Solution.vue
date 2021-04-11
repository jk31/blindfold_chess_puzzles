<template>
  <div id="solution">
    <v-card elevation="2">
      <v-card-title class="mb-3">{{ activePlayer }}'s next move.</v-card-title>
      <!-- <v-card-subtitle>Solution subtitle</v-card-subtitle> -->
      <v-card-text>
        <v-container
          class="grey lighten-5 d-flex align-center justify-space-around"
        >
          <KingWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('K', $event)"
          />
          <QueenWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('Q')"
          />
          <RookWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('R')"
          />
          <BishopWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('B')"
          />
          <KnightWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('N')"
          />
          <PawnWhite
            v-if="activePlayer === 'White'"
            class="piece"
            @click="pieceClick('P')"
          />
          <KingBlack
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('K')"
          />
          <QueenBlack
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('Q')"
          />
          <RookBlack
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('R')"
          />
          <BishopBlack
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('B')"
          />
          <KnightBlack
            v-if="activePlayer === 'Black'"
            class="piece"
            @click="pieceClick('N')"
          />
          <PawnBlack
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
import KingBlack from '../../public/pieces/king_b.svg';
import KingWhite from '../../public/pieces/king_w.svg';
import QueenBlack from '../../public/pieces/queen_b.svg';
import QueenWhite from '../../public/pieces/queen_w.svg';
import RookBlack from '../../public/pieces/rook_b.svg';
import RookWhite from '../../public/pieces/rook_w.svg';
import BishopBlack from '../../public/pieces/bishop_b.svg';
import BishopWhite from '../../public/pieces/bishop_w.svg';
import KnightBlack from '../../public/pieces/knight_b.svg';
import KnightWhite from '../../public/pieces/knight_w.svg';
import PawnBlack from '../../public/pieces/pawn_b.svg';
import PawnWhite from '../../public/pieces/pawn_w.svg';

export default {
  name: 'Solution',
  components: {
    KingBlack,
    KingWhite,
    QueenBlack,
    QueenWhite,
    RookBlack,
    RookWhite,
    BishopBlack,
    BishopWhite,
    KnightBlack,
    KnightWhite,
    PawnBlack,
    PawnWhite,
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
      event.target.parentElement.classList.toggle('selected-piece');
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
  transform: scale(1.2);
}
</style>
