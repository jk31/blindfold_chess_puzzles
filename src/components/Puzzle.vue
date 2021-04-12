<template>
  <div id="puzzle" class="mb-3">
    <v-card elevation="2">
      <v-card-title class="mb-3">{{ activePlayer }} to move</v-card-title>
      <v-card-subtitle
        >{{ inactivePlayer }} played {{ activePuzzle.moves_alg[0] }}.
        {{ castling }}
        {{ enPassant }}
      </v-card-subtitle>
      <v-card-text class="d-sm-flex justify-space-around">
        <ul>
          <li v-for="(squares, piece) in activePuzzle.positions" :key="piece">
            <KingWhite v-if="piece === 'K'" class="piece" />
            <QueenWhite v-if="piece === 'Q'" class="piece" />
            <RookWhite v-if="piece === 'R'" class="piece" />
            <BishopWhite v-if="piece === 'B'" class="piece" />
            <KnightWhite v-if="piece === 'N'" class="piece" />
            <PawnWhite v-if="piece === 'P'" class="piece" />
            {{
              ['K', 'Q', 'R', 'B', 'N', 'P'].includes(piece)
                ? squares.join(' ')
                : ''
            }}
          </li>
        </ul>
        <ul>
          <li v-for="(squares, piece) in activePuzzle.positions" :key="piece">
            <KingBlack v-if="piece === 'k'" class="piece" />
            <QueenBlack v-if="piece === 'q'" class="piece" />
            <RookBlack v-if="piece === 'r'" class="piece" />
            <BishopBlack v-if="piece === 'b'" class="piece" />
            <KnightBlack v-if="piece === 'n'" class="piece" />
            <PawnBlack v-if="piece === 'p'" class="piece" />
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
import { mapGetters } from 'vuex';

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
    ...mapGetters('puzzles', [
      'activePuzzle',
      'activePlayer',
      'inactivePlayer',
      'castling',
      'enPassant',
    ]),
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
  transform: scale(1.25);
}
</style>
