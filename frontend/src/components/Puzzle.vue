<template>
  <div id="puzzle">
    <v-card elevation="2">
      <v-card-title class="mb-3"
        ><b>{{ activePlayer }} to move.</b></v-card-title
      >
      <v-card-subtitle
        >{{ inactivePlayer }} played {{ activePuzzle.moves_alg[0] }}.
        {{ castling }}
        {{ enPassant }}
      </v-card-subtitle>
      <v-card-text>
        <ul>
          <li v-for="(squares, piece) in activePuzzle.positions" :key="piece">
            <KingBlack v-if="piece === 'k'" class="piece" />
            <KingWhite v-if="piece === 'K'" class="piece" />
            <QueenBlack v-if="piece === 'q'" class="piece" />
            <QueenWhite v-if="piece === 'Q'" class="piece" />
            <RookBlack v-if="piece === 'r'" class="piece" />
            <RookWhite v-if="piece === 'R'" class="piece" />
            <BishopBlack v-if="piece === 'b'" class="piece" />
            <BishopWhite v-if="piece === 'B'" class="piece" />
            <KnightBlack v-if="piece === 'n'" class="piece" />
            <KnightWhite v-if="piece === 'N'" class="piece" />
            <PawnBlack v-if="piece === 'p'" class="piece" />
            <PawnWhite v-if="piece === 'P'" class="piece" />
            {{ squares.join(' ') }}
          </li>
        </ul>
      </v-card-text>
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
  name: 'Puzzle',
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
  transform: scale(1);
}
</style>
