<template>
  <div id="puzzle" class="mb-3">
    <v-card elevation="2">
      <v-card-title class="mb-3"
        ><b>{{ activePlayer }} to move.</b></v-card-title
      >
      <v-card-subtitle
        >{{ inactivePlayer }} played {{ activePuzzle.moves_alg[0] }}.
        {{ castling }}
        {{ enPassant }}
      </v-card-subtitle>
      <v-card-text class="d-sm-flex justify-space-around">
        <ul>
          <li v-for="(squares, piece) in activePuzzle.positions" :key="piece">
            <Piece piece="king_w" v-if="piece === 'K'" class="piece" />
            <Piece piece="queen_w" v-if="piece === 'Q'" class="piece" />
            <Piece piece="rook_w" v-if="piece === 'R'" class="piece" />
            <Piece piece="bishop_w" v-if="piece === 'B'" class="piece" />
            <Piece piece="knight_w" v-if="piece === 'N'" class="piece" />
            <Piece piece="pawn_w" v-if="piece === 'P'" class="piece" />
            {{
              ['K', 'Q', 'R', 'B', 'N', 'P'].includes(piece)
                ? squares.join(' ')
                : ''
            }}
          </li>
        </ul>
        <ul>
          <li v-for="(squares, piece) in activePuzzle.positions" :key="piece">
            <Piece piece="king_b" v-if="piece === 'k'" class="piece" />
            <Piece piece="queen_b" v-if="piece === 'q'" class="piece" />
            <Piece piece="rook_b" v-if="piece === 'r'" class="piece" />
            <Piece piece="bishop_b" v-if="piece === 'b'" class="piece" />
            <Piece piece="knight_b" v-if="piece === 'n'" class="piece" />
            <Piece piece="pawn_b" v-if="piece === 'p'" class="piece" />
            {{
              ['k', 'q', 'r', 'b', 'n', 'p'].includes(piece)
                ? squares.join(' ')
                : ''
            }}
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Piece from './Piece.vue';

export default {
  name: 'Puzzle',
  components: {
    Piece,
  },
  computed: {
    activePuzzle() {
      return this.$store.state.puzzles.activePuzzle;
    },
    activePlayer() {
      return this.activePuzzle.active === 'w' ? 'White' : 'Black';
    },
    inactivePlayer() {
      return this.activePuzzle.active === 'w' ? 'Black' : 'White';
    },
    castling() {
      let cast = this.activePuzzle.castling;
      return cast === '-'
        ? ''
        : `Castling possible: ${cast.includes('K') ? 'White kingside. ' : ''}${
            cast.includes('Q') ? 'White queenside. ' : ''
          }${cast.includes('k') ? 'Black kingside. ' : ''}${
            cast.includes('q') ? 'Black queenside. ' : ''
          }`;
    },
    enPassant() {
      let en = this.activePuzzle.enpassant;
      return en === '-' ? '' : `En passant square: ${en}.`;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
ul li {
  display: flex;
  align-items: center;
}
.piece {
  margin: 0px 10px 5px 0px;
}
</style>
